
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          
          <!-- Logo -->
          <div class="flex-shrink-0 cursor-pointer" (click)="scrollTo('hero')">
            <span class="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              NUÔI HUYỀN
            </span>
          </div>
          
          <!-- Desktop Menu -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <button (click)="scrollTo('meals')" class="text-slate-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Bữa ăn</button>
              <button (click)="scrollTo('profile')" class="text-slate-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Đối tượng</button>
              <button (click)="scrollTo('costs')" class="text-slate-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Chi phí</button>
              <button (click)="scrollTo('extras')" class="text-slate-300 hover:text-yellow-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Full Option</button>
              <button (click)="scrollTo('summary')" class="bg-yellow-500 hover:bg-yellow-600 text-slate-900 px-4 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105">
                Ký HĐ
              </button>
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="-mr-2 flex md:hidden">
            <button (click)="toggleMobileMenu()" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none">
              <span class="sr-only">Open main menu</span>
              <i class="fa-solid" [class.fa-bars]="!isMobileMenuOpen()" [class.fa-times]="isMobileMenuOpen()"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (isMobileMenuOpen()) {
        <div class="md:hidden bg-slate-900 border-b border-slate-800 animate-fade-in">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <button (click)="scrollTo('meals')" class="text-slate-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Bữa ăn</button>
             <button (click)="scrollTo('profile')" class="text-slate-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Đối tượng</button>
             <button (click)="scrollTo('costs')" class="text-slate-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Chi phí</button>
             <button (click)="scrollTo('extras')" class="text-slate-300 hover:text-yellow-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left">Full Option</button>
             <button (click)="scrollTo('summary')" class="text-yellow-500 font-bold block px-3 py-2 rounded-md text-base w-full text-left">Ký Hợp Đồng</button>
          </div>
        </div>
      }
    </nav>
  `,
  styles: [`
    @keyframes fade-in {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
      animation: fade-in 0.2s ease-out forwards;
    }
  `]
})
export class NavbarComponent {
  isMobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  scrollTo(id: string) {
    this.isMobileMenuOpen.set(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header is handled by scroll-padding-top in CSS
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
