
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-meal-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  template: `
    <section class="flex flex-col md:flex-row gap-8 items-center">
      <div class="w-full md:w-1/2">
        <h3 class="text-3xl font-bold text-white mb-6">BỮA CƠM NÍU CHÂN <br/> NÔ LỆ TƯ BẢN TỚI... VĂN PHÒNG</h3>
        
        <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl mb-6">
          <h4 class="text-xl font-semibold text-yellow-400 mb-4 flex items-center">
            <i class="fa-solid fa-utensils mr-3"></i>
            Menu mỗi bữa:
          </h4>
          <ul class="space-y-3 text-slate-300">
            <li class="flex items-start">
              <i class="fa-solid fa-check text-green-500 mt-1 mr-3"></i>
              <span>Thịt, cá, rau xanh, canh, một món tráng miệng nhẹ.</span>
            </li>
            <li class="flex items-start">
              <i class="fa-solid fa-fire text-orange-500 mt-1 mr-3"></i>
              <span>Cơm do anh chị bếp của Aeon Mall hoặc Crescent Mall nấu, hâm lại bằng lò vi sóng trong 3 phút.</span>
            </li>
            <li class="flex items-start">
              <i class="fa-solid fa-tag text-blue-400 mt-1 mr-3"></i>
              <span>Giá tham khảo: <strong class="text-white">X.000đ/suất</strong> (chưa bao gồm VAT, phí ship, phí "lười rửa bát").</span>
            </li>
          </ul>
        </div>

        <div class="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
          <h4 class="text-lg font-semibold text-white mb-2">Tần suất:</h4>
          <ul class="space-y-3 text-slate-400 text-sm">
             <li class="flex items-start">
                <span class="mr-2 text-yellow-500">●</span>
                1 ngày 2 bữa: trưa – tối, trừ những hôm "sập deadline không kịp nhai".
             </li>
             <li class="flex items-start">
                <span class="mr-2 text-yellow-500">●</span>
                <span>Mỗi lần quên ăn, hệ thống sẽ tự động gửi thông báo: <br/>
                <em class="text-yellow-200">"Nô lệ tư bản mà đói là không làm được KPI đâu."</em></span>
             </li>
          </ul>
        </div>
      </div>

      <div class="w-full md:w-1/2 relative">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
        <img 
          ngSrc="https://picsum.photos/600/800" 
          width="600" 
          height="800" 
          alt="Food placeholder" 
          class="rounded-3xl shadow-2xl object-cover w-full h-[500px] border-2 border-slate-700 transform rotate-2 hover:rotate-0 transition-all duration-500"
        />
        <div class="absolute bottom-6 left-6 z-20 bg-slate-900/90 backdrop-blur-sm p-4 rounded-xl border border-yellow-500/30">
          <p class="text-xs text-yellow-400 font-bold uppercase">Cảnh báo</p>
          <p class="text-white font-medium">Hình ảnh chỉ mang tính chất minh họa cho nỗi thèm ăn.</p>
        </div>
      </div>
    </section>
  `
})
export class MealSectionComponent {}
