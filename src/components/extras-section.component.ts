
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-extras-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <div class="text-center mb-12">
        <h2 class="text-yellow-500 font-bold tracking-widest uppercase mb-2">Section 4</h2>
        <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">TỪ 2025, KHÔNG CHỈ LÀ NUÔI CƠM</h3>
        <p class="text-slate-400 max-w-2xl mx-auto">
          Hơn cả việc cho Huyền một bữa ăn, dự án "Nuôi Huyền" còn nhắm tới việc giữ cho nô lệ tư bản này trông vẫn còn "người", không xuống cấp toàn diện.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- Item 1 -->
        <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:transform hover:-translate-y-1 transition-transform duration-300">
          <div class="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center mb-4 text-pink-400">
            <i class="fa-solid fa-spray-can-sparkles text-xl"></i>
          </div>
          <h4 class="text-lg font-bold text-white mb-2">Skincare chống sập</h4>
          <p class="text-xs text-slate-400 mb-2">Tần suất: 2 lần/ngày</p>
          <ul class="text-sm text-slate-300 space-y-1">
            <li>• Sữa rửa mặt, kem dưỡng</li>
            <li>• Lệ phí bảo hành da sau mỗi mùa thức khuya</li>
          </ul>
        </div>

        <!-- Item 2 -->
        <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:transform hover:-translate-y-1 transition-transform duration-300">
          <div class="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center mb-4 text-teal-400">
            <i class="fa-solid fa-spa text-xl"></i>
          </div>
          <h4 class="text-lg font-bold text-white mb-2">Gội đầu Spa</h4>
          <p class="text-xs text-slate-400 mb-2">Lịch trình: 2 tuần/lần</p>
          <ul class="text-sm text-slate-300 space-y-1">
            <li>• Đảm bảo tóc không dính dầu ăn & mùi stress</li>
            <li>• Massage vai gáy cho người hay gù lưng</li>
          </ul>
        </div>

        <!-- Item 3 -->
        <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:transform hover:-translate-y-1 transition-transform duration-300">
          <div class="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4 text-green-400">
            <i class="fa-solid fa-leaf text-xl"></i>
          </div>
          <h4 class="text-lg font-bold text-white mb-2">Ổn định tinh thần</h4>
          <p class="text-xs text-slate-400 mb-2">Sau giờ làm</p>
          <ul class="text-sm text-slate-300 space-y-1">
            <li>• Tiền cafe, matcha, nước ép healthy</li>
            <li>• Ngồi nhìn đời, chỉnh lại roadmap cuộc sống</li>
          </ul>
        </div>

        <!-- Item 4 -->
        <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:transform hover:-translate-y-1 transition-transform duration-300">
           <div class="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-4 text-orange-400">
            <i class="fa-solid fa-person-running text-xl"></i>
          </div>
          <h4 class="text-lg font-bold text-white mb-2">Bảo trì xương khớp</h4>
          <p class="text-xs text-slate-400 mb-2">Thỉnh thoảng</p>
          <ul class="text-sm text-slate-300 space-y-1">
            <li>• Chạy bộ, yoga, kéo giãn</li>
            <li>• Tránh việc mới 30 đã đi như CFO 55 tuổi</li>
          </ul>
        </div>

      </div>
    </section>
  `
})
export class ExtrasSectionComponent {}
