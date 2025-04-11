import { of } from "rxjs";
import { ProductService } from "./product.service";
import { TestBed } from "@angular/core/testing";
import { Product } from "./product.model";

describe("test product service",()=>{
    let service:ProductService;
    beforeAll(()=>{
        TestBed.configureTestingModule({});
        service=TestBed.inject(ProductService);
    }
    ),
    xit("should return 1 product",()=>{
        const product=service.getProductById(10);
        let name='';
        product.subscribe(p=>name=p.title);
        expect(name).toContain("SSD");
        
    });

    it("should return 1 product in mock",()=>{
        /*let productObsMock={
            getProductById: jest.fn().mockReturnValue(of({id:10,title:'SSD',price:100,description:"drive",image:'url',category:""}))
        }
        let name='';
        productObsMock.getProductById(10).subscribe(p=>name=p.title);
        expect(name).toContain("SSD");
*/
        let productObsMock= jest.spyOn(service,'getProductById').mockReturnValue(of({id:10,title:'HDD',price:100,description:"drive",image:'url',category:""}))

          
        
        let name='';
        service.getProductById(10).subscribe(p=>name=p.title);
        expect(name).toContain("HDD");
        
    });
});