import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroServiceForLab } from './hero.service';
import { Hero } from '../../hero';
import { of } from 'rxjs';

describe('HeroServiceForLab', () => {
    let service: HeroServiceForLab;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HeroServiceForLab]
        });
        service = TestBed.inject(HeroServiceForLab);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => { httpMock.verify(); });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return an observable of heroes', () => {
        const mockHeroes: Hero[] = [
            { id: 1, name: 'Hero 1', strength: 1 },
            { id: 2, name: 'Hero 2', strength: 2 }
        ];

        service.getHeroes().subscribe((heroes) => {
            expect(heroes).toEqual(mockHeroes);
        });

        const req = httpMock.expectOne(service['heroesUrl']);
        expect(req.request.method).toBe('GET');
        req.flush(mockHeroes);
    });
});
