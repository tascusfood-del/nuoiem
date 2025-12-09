
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage],
  template: `
    <section class="py-12">
      <h2 class="text-center text-yellow-500 font-bold tracking-widest uppercase mb-2">Section 2</h2>
      <h3 class="text-center text-3xl font-bold text-white mb-12">ĐỐI TƯỢNG ĐƯỢC NUÔI</h3>

      <div class="relative bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border border-slate-700 max-w-3xl mx-auto">
        <!-- Badge -->
        <div class="absolute top-0 right-0 bg-red-600 text-white font-bold px-4 py-2 rounded-bl-2xl z-20">
          Cần Nuôi Gấp
        </div>

        <div class="flex flex-col md:flex-row">
          <!-- Left: Image -->
          <div class="w-full md:w-2/5 h-64 md:h-auto relative bg-slate-700">
             <img 
                ngSrc="https://picsum.photos/400/600" 
                width="400" 
                height="600" 
                alt="Huyen Profile" 
                class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <!-- Right: Info -->
          <div class="w-full md:w-3/5 p-8">
            <h4 class="text-3xl font-bold text-white mb-1">HUYỀN</h4>
            <p class="text-slate-400 mb-6">Level 29 • Corporate Slave Class</p>

            <div class="space-y-4">
              <div class="p-3 bg-slate-900/50 rounded-lg border-l-4 border-yellow-500">
                <p class="text-xs text-slate-400 uppercase font-semibold">Nghề nghiệp</p>
                <p class="text-white">Nô lệ tư bản hệ tự nguyện, tự ký hợp đồng với đời.</p>
              </div>

              <div class="p-3 bg-slate-900/50 rounded-lg border-l-4 border-blue-500">
                 <p class="text-xs text-slate-400 uppercase font-semibold">Khoảng cách đến "Trường Đời"</p>
                 <p class="text-white">1,5 km, di chuyển bằng đôi chân và một chút hy vọng.</p>
              </div>

              <div class="mt-6">
                <p class="text-xs text-slate-400 uppercase font-semibold mb-2">Đặc điểm nhận dạng (Mô tả):</p>
                <ul class="text-sm text-slate-300 space-y-2 list-disc pl-4">
                  <li>Thường xuyên quên ăn, nhưng không bao giờ quên check mail.</li>
                  <li>Có thói quen vừa nhai cơm vừa viết deck.</li>
                  <li>Mức độ cần được "nuôi": <strong>CAO</strong>, vì nếu để tự lo, khả năng cao chọn mì gói + trà đá.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ProfileSectionComponent {}
