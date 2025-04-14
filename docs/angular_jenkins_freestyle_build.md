
# Jenkins Freestyle Project for Angular Build (Windows)

This guide explains how to build an Angular application using Jenkins freestyle project with Windows batch commands.

---

## Prerequisites

Ensure the Jenkins Windows agent has the following installed:

- Node.js and npm
- Angular CLI (`npm install -g @angular/cli`)
- Git
- Jenkins Git Plugin

- And You have gone through the previous Jekins and NodeJs Setup Document

---

## Jenkins Freestyle Project Setup

### 1. Create a New Freestyle Project

- Go to Jenkins Dashboard
- Click **New Item**
- Enter a name and select **Freestyle project**

### 2. Configure Source Code Management

- Select **Git**
- Enter your repository URL
- Define branch to build (e.g., `*/main`,`*master`)

### 3. Add Build Steps

**Build Step Type**: *Execute Windows batch command*

Use the following script:

```bat
:: Navigate to workspace
cd %WORKSPACE%

:: Clean old dependencies
rmdir /s /q node_modules
del package-lock.json

:: Install dependencies
npm install

:: Build Angular app (adjust if needed)
ng build --configuration=production
```

> Adjust `--base-href=/your-base-path/` if required by your deployment.

### 4. Archive Artifacts (Optional)

- Go to **Post-build Actions**
- Add **Archive the artifacts**
- Files to archive:

```
dist/**/* 
```

### 5. Notifications (Optional)

Use plugins like **Email Extension Plugin** or **Slack Plugin** to notify after the build.

---

## Notes

- Customize the build step based on your Angular environment (e.g., `--configuration=staging`).
- Ensure all environment variables and permissions are set correctly.
