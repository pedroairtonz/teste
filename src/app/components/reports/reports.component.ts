import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { ApiService } from '../../services/api.service';

export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-reports',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    JsonPipe,
  ],
  providers: [
    provideNativeDateAdapter(),
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
  ],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent {
  private fb = inject(FormBuilder);
  private apiService = inject(ApiService);
  range = this.fb.group({
    start_date: [null as Date | null, [Validators.required]],
    end_date: [null as Date | null, [Validators.required]],
  });

  constructor() {}

  submit() {
    if (this.range.invalid) return;

    const { start_date, end_date } = this.range.getRawValue();

    const params: any = {};

    const formattedStart = this.formatDate(start_date);
    const formattedEnd = this.formatDate(end_date);

    if (formattedStart) params.start_date = formattedStart;
    if (formattedEnd) params.end_date = formattedEnd;

    this.apiService.getReports(params).subscribe((res) => console.log(res));
  }

  formatDate(date: Date | null): string | null {
    if (!date) return null;
    return date.toISOString().split('T')[0];
  }
}
