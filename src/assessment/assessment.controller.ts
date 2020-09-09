import { Controller, Post, Body, Get } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { AssessmentDTO } from './assessment.dto';

@Controller('assessment')
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) { }

  @Post()
  upperCase(@Body() dto: AssessmentDTO) {
    return this.assessmentService.upperCase(dto)
  }

}