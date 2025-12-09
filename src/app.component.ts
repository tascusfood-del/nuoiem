
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from './components/hero.component';
import { ProfileSectionComponent } from './components/profile-section.component';
import { MealSectionComponent } from './components/meal-section.component';
import { CostsSectionComponent } from './components/costs-section.component';
import { ExtrasSectionComponent } from './components/extras-section.component';
import { SummarySectionComponent } from './components/summary-section.component';
import { NavbarComponent } from './components/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavbarComponent,
    HeroComponent,
    ProfileSectionComponent,
    MealSectionComponent,
    CostsSectionComponent,
    ExtrasSectionComponent,
    SummarySectionComponent
  ]
})
export class AppComponent {}
