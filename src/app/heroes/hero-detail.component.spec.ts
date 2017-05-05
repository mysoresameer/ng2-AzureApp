import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { TestBed, async, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroDetailComponent } from './hero-detail.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of'
import {Hero} from './hero';
import {HeroService} from './heroes.service'
import {Router, ActivatedRoute, Params} from '@angular/router'

let testData  = {
    "id": "1",
    "name": "Smithhhh",
    "address": {
        "state": "kar",
        "country": "india"
    }
};

export class HeroServiceStub {
  public getHero(id: number | string) {    
  }
}

let comp : HeroDetailComponent;
let fixture : ComponentFixture<HeroDetailComponent>;
let heroServiceStub : HeroServiceStub;

describe('HeroDetailComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,CommonModule,FormsModule],
      declarations: [ HeroDetailComponent ]
    }).overrideComponent(HeroDetailComponent, {
      set: {
        providers: [
          { provide: HeroService, useClass: HeroServiceStub },
          {
            provide: ActivatedRoute,
            useValue: {
                params: Observable.of({id: 1})
            }
          }
        ]
      }
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(HeroDetailComponent);
      comp = fixture.componentInstance;
      heroServiceStub = fixture.debugElement.injector.get(HeroService);
    });
  }));

  it('should create the app', async(() => {
    expect(comp).toBeTruthy();
  }));

  it('should resolve test hero data', fakeAsync(() => {
    const spy = spyOn(heroServiceStub, 'getHero').and.returnValue(
      Observable.of(testData)
    );
    comp.ngOnInit();
    fixture.detectChanges();
    expect(comp.hero).toEqual(testData);
  }));

});
