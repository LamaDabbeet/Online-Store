import { NgModule } from '@angular/core';
import { SnakeToTitleCasePipe } from './snake-to-title-case.pipe';

@NgModule({
  declarations: [SnakeToTitleCasePipe],
  exports: [SnakeToTitleCasePipe],
})
export class SnakeToTitleCaseModule {}
