import { Component, EventEmitter, Input, NO_ERRORS_SCHEMA, Output } from '@angular/core';

import { ApiPaginationMeta } from '../../interfaces/api-pagination-meta';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  standalone: true,
})
export class PaginationComponent {

  @Input() public meta: ApiPaginationMeta;
  @Output() public changePage: EventEmitter<number> = new EventEmitter<number>();

  public get isFirstPage(): boolean {
    return this.meta.current_page === 1
  }

  public get isLastPage(): boolean {
    return this.meta.current_page === this.meta.last_page
  }

  public onNext(): void {
    this.changePage.emit(this.meta.current_page + 1);
  }

  public onPrevious(): void {
    this.changePage.next(this.meta.current_page - 1);
  }

}
