
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-summary-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="bg-slate-950 py-16 px-4 border-t border-slate-800">
      <div class="max-w-3xl mx-auto text-center">
        
        <h2 class="text-2xl md:text-4xl font-extrabold text-white mb-8">
          TỔNG GÓI "NUÔI HUYỀN FULL-OPTION"
        </h2>

        <div class="bg-slate-900 rounded-2xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden group">
          <!-- Glow effect -->
          <div class="absolute inset-0 bg-yellow-500/5 group-hover:bg-yellow-500/10 transition-colors duration-500"></div>

          <div class="relative z-10 space-y-4 text-left md:text-center">
            <div class="flex justify-between md:justify-center md:gap-8 items-center border-b border-slate-800 pb-4">
              <span class="text-slate-400">Nuôi cơm:</span>
              <span class="text-xl font-mono text-white">Y.000đ/năm</span>
            </div>
            <div class="flex justify-between md:justify-center md:gap-8 items-center border-b border-slate-800 pb-4">
              <span class="text-slate-400">Nuôi da, tóc, não, tinh thần:</span>
              <span class="text-xl font-mono text-white">W.000đ/năm</span>
            </div>
            
            <div class="pt-6">
              <p class="text-slate-500 text-sm mb-2 uppercase tracking-wide">Tổng dự kiến</p>
              <p class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                F.000đ/năm
              </p>
              <p class="text-slate-500 text-xs mt-2 italic">(Chưa bao gồm lạm phát cảm xúc)</p>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <button class="bg-white text-slate-900 font-bold py-4 px-10 rounded-full text-lg hover:bg-yellow-400 transition-colors duration-300 shadow-lg shadow-white/10">
            <i class="fa-solid fa-signature mr-2"></i> KÝ HỢP ĐỒNG NUÔI NGAY
          </button>
          <p class="mt-4 text-slate-600 text-sm">
            *Nhấn vào đây đồng nghĩa với việc bạn chấp nhận mọi rủi ro khi nuôi một Corporate Slave.
          </p>
        </div>

      </div>
    </section>
  `
})
export class SummarySectionComponent {}
