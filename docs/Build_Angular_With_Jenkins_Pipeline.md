
# Building an Angular Project using Jenkins Pipeline

This guide describes the steps to build an Angular project using Jenkins and a Jenkinsfile.

## Prerequisites

- Jenkins is installed and running.
- Required plugins are installed:
  - Pipeline
  - NodeJS Plugin
- Angular CLI is installed on the Jenkins agent.
- NodeJS is configured in Jenkins (Manage Jenkins → Global Tool Configuration).

## Step 1: Prepare Angular Project

Make sure your Angular project has the following:

- `package.json`
- `angular.json`
- All dependencies installed via `npm install`

## Step 2: The Jenkinsfile

Use the file named `Jenkinsfile` in the root of Angular project https://github.com/sbtalk71/angular-jenkins:

```
pipeline {
    agent any
    environment {
        NODEJS_HOME = tool 'node22' // Use configured NodeJS tool name
        PATH = "${NODEJS_HOME}/bin:${env.PATH}"
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/sbtalk71/angular-jenkins.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm run test --watch=false --browsers=ChromeHeadless'
            }
        }
        stage('Build Angular App') {
            steps {
                bat 'npm run build --configuration=production'
            }
        }
        
    }
}
```

## Step 3: Create a Jenkins Pipeline Job

1. Go to Jenkins dashboard.
2. Click on **New Item**.
3. Enter a name and select **Pipeline**, then click OK.
4. Under **Pipeline** section:
   - Definition: *Pipeline script from SCM*
   - SCM: *Git*
   - Repository URL: https://github.com/sbtalk71/angular-jenkins.git'
   - Script Path: `Jenkinsfile`

## Step 4: Run the Pipeline

Click on **Build Now** to start the pipeline. Check the console output for progress and results.

## Notes

- Make sure your `dist/` folder is generated under the correct subdirectory (e.g., `dist/project-name/`).
- You can customize the `npm run build` command for other environments like staging or testing.
