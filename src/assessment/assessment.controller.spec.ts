import { Test, TestingModule } from '@nestjs/testing';
import {AssessmentController} from './assessment.controller';
import {AssessmentService} from './assessment.service';
import { Assessment } from './Assessment';
import { AssessmentDTO } from './assessment.dto';

describe('AssessmentController' , () => {
    let controller: AssessmentController;
    let service: AssessmentService;
    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AssessmentController],
            providers: [AssessmentService],
          }).compile();
      
          controller = app.get<AssessmentController>(AssessmentController);
          service = app.get(AssessmentService);
      });

    describe('post', ()=> {
        const dto = new AssessmentDTO("bangke");
        it('return bangke', async () => {
            const expectedResult = new Assessment("bangke");
            jest.spyOn(service, "upperCase").mockResolvedValue(expectedResult);
            expect(await controller.upperCase(dto)).toBe(expectedResult);
            
        })

        it('fail', async(done) =>{
            const expectedResult = undefined;
            jest.spyOn(service, "upperCase").mockResolvedValue(expectedResult);
            await controller.upperCase(dto).then(()=> done.fail("Data salah")).catch((err)=> {
                expect(err.status).toBe(404);
                expect(err.message).toMatchObject({error: "Not Found", statusCode: 404});
                done();
          
            })
        })
    });
    

})