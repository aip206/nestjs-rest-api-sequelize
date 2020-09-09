import { Assessment } from './Assessment';
import { Injectable } from '@nestjs/common';
import { AssessmentDTO } from './assessment.dto';


@Injectable()
export class AssessmentService {

    public async upperCase(karakter: AssessmentDTO) {
        const assessment = new Assessment({response: karakter.response.toUpperCase()});
        return assessment;
    }

}