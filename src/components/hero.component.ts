
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <section class="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-center text-center px-4 bg-slate-900 border-b border-slate-800 overflow-hidden">
      
      <!-- Abstract Background Elements -->
      <div class="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[100px]"></div>
      <div class="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>

      <div class="relative z-10 animate-fade-in-up">
        <div class="inline-block px-4 py-1 mb-6 border border-yellow-500/50 rounded-full bg-yellow-500/10 text-yellow-400 text-sm font-bold tracking-wider uppercase">
          Mở Đăng Ký 2025 – 2026
        </div>

        <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          DỰ ÁN <br/>
          <span class="gradient-text">"NUÔI HUYỀN"</span> MÙA 1
        </h1>

        <p class="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto mb-4 font-light">
          Thêm 1 nô lệ tư bản được cứu khỏi đói.
        </p>

        <p class="text-md text-slate-400 max-w-xl mx-auto mb-10 italic">
          Mục tiêu: 365 ngày không bỏ bữa, không bỏ skincare, không bỏ gội đầu spa.
        </p>

        <button 
          (click)="handleJoin()"
          class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-900 transition-all duration-200 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 hover:scale-105 active:scale-95">
          @if (!joined()) {
            <span>NHẬN MÃ: NUOIHUYEN</span>
            <i class="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
          } @else {
            <span>ĐÃ NHẬN MÃ THÀNH CÔNG!</span>
            <i class="fa-solid fa-check ml-2"></i>
          }
          <div class="absolute inset-0 rounded-full ring-4 ring-white/20 group-hover:ring-white/40 animate-pulse"></div>
        </button>
      </div>

      <div class="absolute bottom-8 animate-bounce text-slate-500">
        <span class="text-sm block mb-2">Tìm hiểu chi tiết</span>
        <i class="fa-solid fa-chevron-down"></i>
      </div>
    </section>
  `,
  styles: [`
    .gradient-text {
      background: linear-gradient(to right, #facc15, #ca8a04);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    @keyframes fade-in-up {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out forwards;
    }
  `]
})
export class HeroComponent {
  joined = signal(false);

  handleJoin() {
    this.joined.set(true);
    // Reset after 3 seconds so they can click again if they want
    setTimeout(() => this.joined.set(false), 3000);
  }
}
