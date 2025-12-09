
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-costs-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <!-- Text Content -->
        <div class="flex flex-col justify-center">
           <h2 class="text-yellow-500 font-bold tracking-widest uppercase mb-2">Section 3</h2>
           <h3 class="text-3xl font-bold text-white mb-6">SỐ TIỀN NUÔI CƠM</h3>
           <p class="text-slate-400 mb-8">
             Đầu tư vào con người là khoản đầu tư mạo hiểm nhưng có thể sinh lời (bằng tình cảm) hoặc lỗ vốn (nếu nó dỗi).
           </p>
        </div>

        <!-- Pricing Cards -->
        <div class="space-y-6">
          
          <!-- Basic Plan -->
          <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-slate-500 transition-colors">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h4 class="text-lg font-bold text-white">Gói cơ bản (Starter)</h4>
                <p class="text-slate-400 text-sm">Chỉ đủ sống qua ngày</p>
              </div>
              <i class="fa-solid fa-seedling text-green-500 text-2xl"></i>
            </div>
            <div class="text-slate-300 text-sm mb-4 space-y-1">
              <p>• X.000đ/bữa x 2 bữa/ngày x 30 ngày</p>
              <p class="italic text-xs text-slate-500">(Chưa gồm phí phát sinh lúc buồn miệng gọi thêm dessert)</p>
            </div>
            <div class="pt-4 border-t border-slate-700 flex justify-between items-center">
              <span class="text-slate-400">Tổng:</span>
              <span class="text-2xl font-bold text-yellow-400">Y.000đ/tháng</span>
            </div>
          </div>

          <!-- Brain Plan -->
          <div class="bg-gradient-to-br from-slate-800 to-indigo-900/50 p-6 rounded-2xl border border-indigo-500/30 relative overflow-hidden">
             <div class="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
               Recommended
             </div>
             <div class="flex justify-between items-start mb-4">
              <div>
                <h4 class="text-lg font-bold text-white">Gói "Nuôi Luôn Não"</h4>
                <p class="text-slate-400 text-sm">Duy trì tư duy làm việc</p>
              </div>
              <i class="fa-solid fa-brain text-indigo-400 text-2xl"></i>
            </div>
             <ul class="text-slate-300 text-sm mb-4 space-y-2">
              <li class="flex items-center"><i class="fa-solid fa-mug-hot w-5 text-indigo-400"></i> Bao gồm cơm & nước</li>
              <li class="flex items-center"><i class="fa-solid fa-coffee w-5 text-indigo-400"></i> Cà phê + đường + caffeine</li>
            </ul>
             <div class="pt-4 border-t border-slate-700/50 flex justify-between items-center">
              <span class="text-slate-400">Phụ thu:</span>
              <span class="text-2xl font-bold text-indigo-300">Z.000đ/tháng</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class CostsSectionComponent {}
