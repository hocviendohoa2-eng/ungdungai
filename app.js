// Dữ liệu 5 chuyên ngành khóa học từ https://kynangso.wixsite.com/kynangso (Hình ảnh lưu trữ trực tiếp trên Google Drive CDN)
const SITE_DATA = {
  showcaseSlides: [
    {
      id: "photoshop",
      label: "🎨 Photoshop",
      title: "Thiết kế Quảng cáo, Retouch & Ảnh Cưới Studio với AI",
      image: "https://lh3.googleusercontent.com/d/1_Sls2MgW2rUVhixK96nfCbiWkvgd1MBO"
    },
    {
      id: "illustrator",
      label: "✒️ Illustrator",
      title: "Thiết kế Vector, Ấn phẩm In ấn CMYK & Vẽ Minh Họa",
      image: "https://lh3.googleusercontent.com/d/1vlFZccTbBRWrB4cjDqyrS8LueCQC4w5x"
    },
    {
      id: "ai",
      label: "🤖 Khóa AI",
      title: "Làm chủ Gemini, Google Vids, NotebookLM, Suno & Canva",
      image: "https://lh3.googleusercontent.com/d/1CNjcRxW4Oy3X98lZAeklc-nXp6ZFKWb8"
    },
    {
      id: "edit-video",
      label: "🎬 Edit Video",
      title: "Dựng Video TikTok, Reels, Shorts với AI & CapCut",
      image: "https://lh3.googleusercontent.com/d/1XcytGhiKih-TZyr3_AZIsUJFotrnY38k"
    },
    {
      id: "web",
      label: "🌐 Tạo Web",
      title: "Thiết kế Website Chuyên Nghiệp với Wix, Gemini & Veo 3",
      image: "https://lh3.googleusercontent.com/d/1GJv4ZKb9s7X9wkGu7BAUuxHl8Dk74tiW"
    },
    {
      id: "theo-yeu-cau",
      label: "🎯 Theo Yêu Cầu",
      title: "Thiết kế giáo án riêng 1 kèm 1 theo đúng nhu cầu & công việc thực tế",
      image: "https://lh3.googleusercontent.com/d/1-oAzJ1NceKo2FGxUW5_p1YMfuYAJoPWS"
    }
  ],
  categories: [
    {
      id: "photoshop",
      navName: "Photoshop",
      icon: "🎨",
      badge: "Đồ Họa & AI",
      title: "Khóa Học PHOTOSHOP Theo Yêu Cầu",
      shortDesc: "Cắt ghép, tách nền AI, blend màu, xử lý ảnh cưới Studio & thiết kế banner quảng cáo.",
      thumbnail: "https://lh3.googleusercontent.com/d/1_Sls2MgW2rUVhixK96nfCbiWkvgd1MBO",
      posters: [
        "https://lh3.googleusercontent.com/d/1-oAzJ1NceKo2FGxUW5_p1YMfuYAJoPWS",
        "https://lh3.googleusercontent.com/d/1nJM7VHTGedM973fcg01-8bLPS74leaMH",
        "https://lh3.googleusercontent.com/d/1_Sls2MgW2rUVhixK96nfCbiWkvgd1MBO"
      ],
      sessionsCount: "8 Buổi / Khóa",
      priceOnline: 2800000,
      priceOffline: 3600000,
      highlights: [
        "Photoshop Cơ Bản (8 buổi)",
        "Thiết kế Quảng cáo với Photoshop & AI (8 buổi)",
        "Ghép ảnh & Xử lý Ảnh Cưới Studio (8 buổi)"
      ],
      tracks: [
        {
          id: "ps-basic",
          tabLabel: "1. Photoshop Cơ Bản",
          title: "KHÓA HỌC PHOTOSHOP CƠ BẢN",
          duration: "8 Buổi",
          priceOffline: 3600000,
          priceOnline: 2800000,
          sessions: [
            { num: "Buổi 1", title: "Nền tảng cơ bản", desc: "Làm quen giao diện, quản lý Layer và các công cụ tạo vùng chọn cơ bản." },
            { num: "Buổi 2", title: "Tách nền chuyên sâu", desc: "Sử dụng Pen Tool, AI và Layer Mask để cắt ghép và tách nền không chạm ảnh gốc." },
            { num: "Buổi 3", title: "Xử lý màu & Ánh sáng", desc: "Đọc Histogram, cân bằng sáng tối và blend màu bằng các Adjustment Layer." },
            { num: "Buổi 4", title: "Retouch & Phục chế", desc: "Xóa rác, làm mịn da chuyên nghiệp và nắn chỉnh hình thể bằng Liquify." },
            { num: "Buổi 5", title: "Typography", desc: "Xử lý text, cài đặt font và các nguyên tắc dàn trang, sắp xếp chữ cơ bản." },
            { num: "Buổi 6", title: "Hiệu ứng hình ảnh", desc: "Tạo hiệu ứng chữ, bóng đổ và ánh sáng với Layer Style (Fx) và Blending Mode." },
            { num: "Buổi 7", title: "Thực chiến thiết kế", desc: "Ứng dụng tổng hợp để thiết kế Banner, Poster hoặc Thumbnail hoàn chỉnh." },
            { num: "Buổi 8", title: "Tối ưu & Tự động hóa", desc: "Dùng Smart Object làm Mockup, chạy Action tự động và các quy chuẩn xuất file." }
          ]
        },
        {
          id: "ps-ads-ai",
          tabLabel: "2. Quảng Cáo Photoshop & AI",
          title: "KHÓA HỌC Thiết Kế Quảng Cáo Với PHOTOSHOP VÀ AI",
          duration: "8 Buổi",
          priceOffline: 3600000,
          priceOnline: 2800000,
          sessions: [
            { num: "Buổi 1", title: "🚀 Khởi động Tư duy & Trợ lý AI", desc: "Làm quen giao diện Photoshop, thiết lập file chuẩn và học cách viết prompt cho Gemini để 'brainstorm' ý tưởng thiết kế." },
            { num: "Buổi 2", title: "✂️ Nền tảng Bóc tách & Cấu trúc", desc: "Dùng AI phân tích hình ảnh đối thủ; thực hành làm chủ Layer, Mặt nạ (Mask) và kỹ năng tách nền sản phẩm siêu tốc trong Photoshop." },
            { num: "Buổi 3", title: "🎨 Retouch & Biến hóa Màu sắc", desc: "Hỏi AI về tâm lý học màu sắc; thực hành xóa chi tiết thừa, làm mịn bề mặt và blend màu thương mại sắc nét." },
            { num: "Buổi 4", title: "✍️ Xây dựng Content Quảng cáo bằng AI", desc: "Dành 100% thời lượng dùng Gemini viết Copywriting (Headline, Call-to-action) và tạo prompt sinh hình ảnh nguyên liệu." },
            { num: "Buổi 5", title: "🔠 Nghệ thuật Typography", desc: "Nhờ AI gợi ý các cặp Font chữ phù hợp; thực hành sắp xếp bố cục chữ, phân cấp thị giác và tạo hiệu ứng Text bắt mắt." },
            { num: "Buổi 6", title: "🪄 Ghép ảnh (Manipulation) & Ánh sáng", desc: "Dùng AI kiểm tra logic khung hình; thực hành xử lý bóng đổ, đánh sáng, và dùng Generative Fill ghép bối cảnh chân thực." },
            { num: "Buổi 7", title: "💻 Thực chiến Thiết kế Ấn phẩm", desc: "Lắp ghép toàn bộ nguyên liệu từ AI và kỹ năng Photoshop để hoàn thiện 1 Banner hoặc Social Post chỉn chu từ A-Z." },
            { num: "Buổi 8", title: "🏆 Nghiệm thu & Trình bày Portfolio", desc: "Đóng vai khách hàng khó tính cùng Gemini để phản biện thiết kế; thực hành đưa ấn phẩm vào Mockup và tổng kết dự án." }
          ]
        },
        {
          id: "ps-wedding",
          tabLabel: "3. Ảnh Cưới Studio & AI",
          title: "KHÓA HỌC Ghép Ảnh & Xử Lý Ảnh Cưới Studio",
          duration: "8 Buổi",
          priceOffline: 3600000,
          priceOnline: 2800000,
          sessions: [
            { num: "Buổi 1", title: "🚀 Khởi động - Cảm hứng AI & Nền tảng Photoshop", desc: "Dùng Gemini để 'brainstorm' các concept ảnh cưới xu hướng; làm quen giao diện Photoshop, thiết lập hệ màu chuẩn in ấn Album." },
            { num: "Buổi 2", title: "✂️ Nghệ thuật Bóc tách Váy cưới & Tóc phức tạp", desc: "Hỏi Gemini về các phong cách váy cưới; thực hành chuyên sâu công cụ Mask, Pen tool, tách voan xuyên thấu và tóc cô dâu siêu tốc." },
            { num: "Buổi 3", title: "✨ Retouch Đỉnh cao - Da & Dáng hoàn hảo", desc: "Dùng Gemini phân tích tiêu chuẩn thẩm mỹ chân dung; thực hành kỹ thuật Frequency Separation làm mịn da cao cấp, dùng Liquify nắn chỉnh dáng và váy cưới." },
            { num: "Buổi 4", title: "🖼️ Kiến tạo Bối cảnh Studio bằng AI", desc: "Dành trọng tâm dùng Gemini viết Prompt miêu tả phông nền (cổng hoa, lâu đài, phong cảnh); thực hành dùng Generative Fill/AI tạo và mở rộng bối cảnh trong Photoshop." },
            { num: "Buổi 5", title: "🪄 Kỹ xảo Ghép nền, Khớp màu & Ánh sáng", desc: "Hỏi Gemini kiểm tra logic ánh sáng khung hình; thực hành các kỹ thuật ghép cô dâu chú rể vào nền mới, xử lý bóng đổ, khớp tone màu và tạo chiều sâu (xóa phông)." },
            { num: "Buổi 6", title: "🎨 Blend Màu (Color Grading) theo Concept", desc: "Nhờ Gemini tư vấn công thức màu theo chủ đề (Hàn Quốc trong trẻo, Vintage, Fine-Art); thực hành blend màu bằng Camera Raw và áp dụng hàng loạt (Preset)." },
            { num: "Buổi 7", title: "✍️ Marketing Studio & Nghệ thuật Typography", desc: "Dùng Gemini viết Content quảng cáo gói chụp, text chèn vào album; thực hành thiết kế Typography chữ ký bay bổng, làm Layout bìa Album và Banner chốt sale." },
            { num: "Buổi 8", title: "🏆 Tối ưu Quy trình & Nghiệm thu Photobook", desc: "Nhờ Gemini đóng vai khách hàng khó tính để feedback ảnh; thực hành dùng Action chỉnh ảnh hàng loạt, đưa ảnh vào Mockup Album cưới thực tế và tổng kết." }
          ]
        }
      ]
    },
    {
      id: "illustrator",
      navName: "Illustrator",
      icon: "🚀",
      badge: "Vector & In Ấn",
      title: "Khóa Học ILLUSTRATOR Theo Yêu Cầu",
      shortDesc: "Thiết kế Logo, Nhận diện thương hiệu, bình trang chuẩn xưởng in CMYK & Vẽ Minh Họa.",
      thumbnail: "https://lh3.googleusercontent.com/d/1vlFZccTbBRWrB4cjDqyrS8LueCQC4w5x",
      posters: [
        "https://lh3.googleusercontent.com/d/1ksxTCArLcvdCJ59FgfXqtVI5YSKuozPh",
        "https://lh3.googleusercontent.com/d/1z6HcqI-970E__fO0mDBTmpYdeEpyAclN",
        "https://lh3.googleusercontent.com/d/1vlFZccTbBRWrB4cjDqyrS8LueCQC4w5x"
      ],
      sessionsCount: "8 Buổi / Khóa",
      priceOnline: 2800000,
      priceOffline: 3600000,
      highlights: [
        "Illustrator Cơ Bản (8 buổi)",
        "Illustrator Ứng Dụng In Ấn (8 buổi)",
        "Illustrator Vẽ Minh Họa & Concept Art (8 buổi)"
      ],
      tracks: [
        {
          id: "ill-basic",
          tabLabel: "1. Illustrator Cơ Bản",
          title: "KHÓA HỌC ILLUSTRATOR CƠ BẢN",
          duration: "8 Buổi",
          priceOffline: 3600000,
          priceOnline: 2800000,
          sessions: [
            { num: "Buổi 1", title: "Nền tảng & Hình khối", desc: "Làm quen giao diện, hiểu bản chất đồ họa Vector và thực hành dựng logo/icon bằng các công cụ cắt ghép cơ bản." },
            { num: "Buổi 2", title: "Typography & Bố cục", desc: "Xử lý chữ nghệ thuật, uốn ép chữ và dàn trang thông tin hợp lý cho quảng cáo mạng xã hội." },
            { num: "Buổi 3", title: "Màu sắc & Tạo khối", desc: "Làm chủ hệ màu (RGB/CMYK) và kỹ thuật đánh bóng chân thực bằng Gradient/Mesh Tool." },
            { num: "Buổi 4", title: "Pen Tool & Đồ họa phẳng", desc: "Rèn luyện vẽ nét chính xác, đồ lại (trace) hình ảnh và vẽ minh họa nhân vật/icon (phong cách flat vector, chibi)." },
            { num: "Buổi 5", title: "Hiệu ứng & 3D Isometric", desc: "Ứng dụng Clipping Mask, Blend và các công cụ 3D cơ bản để dựng phối cảnh không gian, làm Key Visual." },
            { num: "Buổi 6", title: "Thực chiến Digital", desc: "Quản lý đa Artboard và thiết kế bộ banner chạy quảng cáo trên Facebook, Website." },
            { num: "Buổi 7", title: "Thực chiến In ấn", desc: "Thiết lập vùng an toàn (Margin), tràn lề (Bleed) và xuất file chuẩn xưởng in cho Poster, Standee." },
            { num: "Buổi 8", title: "Đồ án & Portfolio", desc: "Tự lên ý tưởng thiết kế một chiến dịch trọn vẹn, nhận chỉnh sửa trực tiếp và làm mock-up để đưa vào Portfolio." }
          ]
        },
        {
          id: "ill-print",
          tabLabel: "2. Ứng Dụng In Ấn",
          title: "KHÓA HỌC ILLUSTRATOR ỨNG DỤNG IN ẤN",
          duration: "8 Buổi",
          priceOffline: 3600000,
          priceOnline: 2800000,
          sessions: [
            { num: "Buổi 1", title: "Nền tảng in ấn", desc: "Nền tảng in ấn – Thiết lập không gian làm việc, quản lý hệ màu CMYK (Bleed/Margin)." },
            { num: "Buổi 2", title: "Dựng hình Vector", desc: "Dựng hình Vector – Làm chủ các công cụ vẽ (Pen Tool, Pathfinder) và thực hành thiết kế hệ thống icon." },
            { num: "Buổi 3", title: "Xử lý Typography", desc: "Xử lý Typography – Nguyên lý sử dụng chữ, kỹ thuật rã chữ (Create Outlines) và dàn trang văn bản." },
            { num: "Buổi 4", title: "Màu sắc chuyên sâu", desc: "Màu sắc chuyên sâu – Quản lý bảng màu Pantone, xử lý Gradient và cân bằng màu để bản in không bị xỉn." },
            { num: "Buổi 5", title: "Thiết kế Pattern", desc: "Thiết kế Pattern – Kỹ thuật tạo họa tiết liền mạch (Seamless Pattern) ứng dụng cho in vải và bao bì." },
            { num: "Buổi 6", title: "Nhận diện thương hiệu", desc: "Nhận diện thương hiệu – Thiết kế chuẩn kích thước bộ ấn phẩm văn phòng (Namecard, bao thư, tiêu đề thư)." },
            { num: "Buổi 7", title: "Ấn phẩm quảng cáo (POSM)", desc: "Ấn phẩm quảng cáo (POSM) – Kỹ thuật xử lý ảnh bitmap và thiết kế các ấn phẩm khổ lớn như Poster, Standee." },
            { num: "Buổi 8", title: "Kiểm tra & Xuất file (Pre-press)", desc: "Kiểm tra & Xuất file (Pre-press) – Rà soát lỗi (Overprint, link ảnh, font), bình trang cơ bản và xuất file PDF/X chuẩn nhà in." }
          ]
        },
        {
          id: "ill-art",
          tabLabel: "3. Vẽ Minh Họa & Concept",
          title: "KHÓA HỌC ILLUSTRATOR Vẽ Minh Họa & Concept Art",
          duration: "8 Buổi",
          priceOffline: 3600000,
          priceOnline: 2800000,
          sessions: [
            { num: "Buổi 1", title: "Khởi động & Tư duy hình khối (Shape-building)", desc: "Làm quen giao diện và vùng làm việc (Workspace) tối ưu cho Digital Art. Nắm vững các công cụ vẽ cơ bản và tư duy phân tích vật thể thành các mảng hình học (Shape Builder, Pathfinder)." },
            { num: "Buổi 2", title: "Pen Tool & Nghệ thuật đường nét (Line-art)", desc: "Kỹ thuật đi nét mượt mà, dứt khoát với Pen Tool, Curvature Tool và Pencil Tool. Điều chỉnh độ dày mỏng (Stroke, Width Tool) để tạo chiều sâu cho bản vẽ." },
            { num: "Buổi 3", title: "Màu sắc & Kỹ thuật đổ màu Vector", desc: "Bố cục màu sắc trong minh họa: Bánh xe màu, vòng thuần sắc và cách tạo bảng màu (Color Palette) thu hút. Ứng dụng Gradient, Mesh Tool và Live Paint để tạo khối và ánh sáng." },
            { num: "Buổi 4", title: "Minh họa Flat Design & Vector Icon", desc: "Tư duy tối giản trong thiết kế minh họa phẳng (Flat Design). Kết hợp Typography và hình ảnh để thiết kế các set icon, logo minh họa." },
            { num: "Buổi 5", title: "Thiết kế Nhân vật (Character Design) & Mascot", desc: "Tỷ lệ cơ thể trong minh họa (từ tả thực đến phong cách Chibi, Mascot). Xây dựng biểu cảm khuôn mặt và pose dáng động." },
            { num: "Buổi 6", title: "Xây dựng Môi trường (Concept Art & Isometric)", desc: "Tư duy không gian 3D và phối cảnh trong môi trường 2D. Kỹ thuật thiết lập lưới đồ thị (Grid) để vẽ môi trường Isometric cắt lớp (cutaway)." },
            { num: "Buổi 7", title: "Brush, Texture & Thổi hồn vào tác phẩm", desc: "Tạo và tùy chỉnh Art Brush, Pattern Brush để giả lập các chất liệu như màu nước, chì, mực. Ứng dụng Mask (Clipping Mask, Opacity Mask) và Blending Mode để tạo hiệu ứng ánh sáng, bóng đổ." },
            { num: "Buổi 8", title: "Hoàn thiện & Kỹ thuật xuất file chuyên nghiệp", desc: "Đánh giá và chỉnh sửa (feedback). Tối ưu hóa file làm việc, chuẩn bị file in ấn (hệ màu CMYK) và file hiển thị digital, web (hệ màu RGB). Định hướng phát triển portfolio cá nhân." }
          ]
        }
      ]
    },
    {
      id: "ai",
      navName: "AI",
      icon: "🤖",
      badge: "Trí Tuệ Nhân Tạo (AI)",
      title: "Khóa Học Trí Tuệ Nhân Tạo Theo Yêu Cầu",
      shortDesc: "Làm chủ Google Gemini, Google Vids, NotebookLM, Suno AI, Canva AI, CapCut & Wix Web.",
      thumbnail: "https://lh3.googleusercontent.com/d/1CNjcRxW4Oy3X98lZAeklc-nXp6ZFKWb8",
      posters: [
        "https://lh3.googleusercontent.com/d/1TRwJi19o8UoAD552goQIqNrdzeE-1-PH",
        "https://lh3.googleusercontent.com/d/1CNjcRxW4Oy3X98lZAeklc-nXp6ZFKWb8"
      ],
      sessionsCount: "10 Buổi / Khóa",
      priceOnline: 3500000,
      priceOffline: 4500000,
      highlights: [
        "AI Cơ Bản: Gemini, Vids, NotebookLM, Suno, Wix (10 buổi)",
        "AI Thiết Kế Hình Ảnh & Edit Video (10 buổi)"
      ],
      tracks: [
        {
          id: "ai-basic",
          tabLabel: "1. AI Cơ Bản (10 Buổi)",
          title: "KHÓA HỌC AI CƠ BẢN",
          duration: "10 Buổi",
          priceOffline: 4500000,
          priceOnline: 3500000,
          sessions: [
            { num: "Buổi 1, 2, 3", title: "Google Gemini - Prompt & Tạo Ảnh Nghệ Thuật", desc: "Bí quyết viết prompt chuẩn xác, ứng dụng sức mạnh của Gemini để lên ý tưởng và huấn luyện AI tạo ra các tác phẩm hình ảnh nghệ thuật, phục vụ đúng nhu cầu công việc." },
            { num: "Buổi 4", title: "Google Vids - Tối Ưu Hóa Dựng Video", desc: "Tối ưu hóa quy trình dựng video. Ứng dụng AI để tự động hóa và tạo video thuyết trình, marketing nhanh chóng." },
            { num: "Buổi 5", title: "NotebookLM - Trợ Lý Nghiên Cứu Đắc Lực", desc: "Biến AI thành trợ lý nghiên cứu đắc lực. Học cách tổng hợp tài liệu, phân tích thông tin và quản lý dữ liệu thông minh." },
            { num: "Buổi 6", title: "Suno AI - Sáng Tạo Âm Nhạc Không Cần Nhạc Lý", desc: "Thỏa sức sáng tạo âm nhạc! Tự tay sản xuất các bản nhạc hoàn chỉnh theo nhiều phong cách khác nhau mà không cần kiến thức nhạc lý." },
            { num: "Buổi 7, 8, 9, 10", title: "Wix Web Design - Xây Dựng Website Hoàn Chỉnh", desc: "Thực hành xây dựng website hoàn chỉnh từ con số 0. Nắm vững tư duy bố cục, thao tác kéo thả trên nền tảng Wix, tối ưu giao diện hiển thị cho cả máy tính và điện thoại. Đến cuối khóa, bạn sẽ sở hữu một website đẹp mắt của riêng mình." }
          ]
        },
        {
          id: "ai-design-video",
          tabLabel: "2. AI Hình Ảnh & Video (10 Buổi)",
          title: "KHÓA HỌC AI THIẾT KẾ HÌNH ẢNH & EDIT VIDEO",
          duration: "10 Buổi",
          priceOffline: 4500000,
          priceOnline: 3500000,
          sessions: [
            { num: "Buổi 1", title: "🔥 Prompt Engineering Cùng Gemini", desc: "Làm chủ Prompt Engineering cùng Gemini. Tư duy ứng dụng AI trong quy trình sáng tạo đồ họa. Kỹ thuật viết câu lệnh (prompt) chuyên sâu." },
            { num: "Buổi 2", title: "🔥 Kết Nối Không Gian Làm Việc AI Sang Canva", desc: "Kết nối không gian làm việc từ AI sang Canva. Chuyển hóa ý tưởng của Gemini thành các thành phần thiết kế thực tế." },
            { num: "Buổi 3", title: "🔥 Thực Chiến Thiết Kế Ấn Phẩm Truyền Thông", desc: "Quy trình thiết kế Banner, Poster, và bài đăng mạng xã hội chuẩn kích thước." },
            { num: "Buổi 4", title: "🔥 Nâng Cao Tư Duy Typography & Màu Sắc", desc: "Nâng cao Tư duy Typography & Màu sắc, xây dựng nhận diện thương hiệu thu hút thị giác." },
            { num: "Buổi 5", title: "🔥 Hoàn Thiện Bộ Thiết Kế Trên Canva", desc: "Hoàn thiện Bộ Thiết Kế: lên kịch bản với Gemini và thiết kế trọn bộ ấn phẩm trên Canva." },
            { num: "Buổi 6", title: "🎬 Khởi Tạo Video & Storyboard Với Google Vids", desc: "Khởi tạo Video & Storyboard với Google Vids, tạo video thuyết trình tự động." },
            { num: "Buổi 7", title: "🎬 Tư Duy Nhịp Độ (Pacing) & Cắt Ghép CapCut", desc: "Tư duy Nhịp độ (Pacing) & Cắt ghép CapCut. Đưa tài nguyên vào CapCut: Cắt ghép thô, loại bỏ cảnh thừa." },
            { num: "Buổi 8", title: "🎬 Kỹ Thuật Keyframe & Đồng Bộ Âm Thanh", desc: "Sử dụng Keyframe (khung hình chính) để tạo chuyển động mượt mà. Thiết kế âm thanh: Thêm nhạc nền, hiệu ứng âm thanh (sound effect)." },
            { num: "Buổi 9", title: "🎬 Hiệu Ứng Thị Giác (Masking) & Phụ Đề Tự Động", desc: "Kỹ thuật mặt nạ Masking và tính năng Auto-captions tạo phụ đề tự động sắc nét." },
            { num: "Buổi 10", title: "🎬 Xuất Bản Video Đa Nền Tảng Hoàn Chỉnh", desc: "Xuất bản Video. Thực hành sản xuất video (TikTok, Reels, Shorts, Youtube) hoàn chỉnh từ khâu lên kịch bản AI đến lúc edit xong." }
          ]
        }
      ]
    },
    {
      id: "edit-video",
      navName: "Edit video",
      icon: "🎬",
      badge: "CapCut & AI Video",
      title: "Khóa Học EDIT VIDEO Theo Yêu Cầu",
      shortDesc: "Sản xuất video TikTok, Reels, Shorts triệu view bằng CapCut PC/Mobile, Gemini & Suno AI.",
      thumbnail: "https://lh3.googleusercontent.com/d/1XcytGhiKih-TZyr3_AZIsUJFotrnY38k",
      posters: [
        "https://lh3.googleusercontent.com/d/1KP4hKV5826EQilrOAouW-Z0rTEyqlEdg",
        "https://lh3.googleusercontent.com/d/1XcytGhiKih-TZyr3_AZIsUJFotrnY38k"
      ],
      sessionsCount: "8 - 10 Buổi",
      priceOnline: 2800000,
      priceOffline: 3600000,
      highlights: [
        "Khóa Học Làm Video AI (10 buổi)",
        "Khóa Học Edit Video CapCut (8 buổi)"
      ],
      tracks: [
        {
          id: "video-ai",
          tabLabel: "1. Làm Video AI (10 Buổi)",
          title: "KHÓA HỌC LÀM VIDEO AI",
          duration: "10 Buổi",
          priceOffline: 4500000,
          priceOnline: 3500000,
          sessions: [
            { num: "Buổi 1", title: "Tư duy tự động hóa & Prompt với Gemini", desc: "Tổng quan về quy trình sản xuất video bằng AI. Công thức viết câu lệnh (Prompt Engineering) giúp Gemini hiểu đúng ý đồ người dùng. Thực hành: Khai thác ý tưởng video viral cho các ngách chủ đề khác nhau." },
            { num: "Buổi 2", title: "Xây dựng Kịch bản & Phân cảnh chi tiết", desc: "Dùng Gemini để viết kịch bản phân cảnh (Storyboarding) từ text thành video. Hoàn thiện 1 kịch bản video ngắn hoàn chỉnh." },
            { num: "Buổi 3", title: "Tạo bản nhạc đầu tiên với Suno AI", desc: "Giao diện và nguyên lý hoạt động của Suno AI. Cách viết prompt mô tả thể loại nhạc (Pop, Cinematic, Lofi...) và cảm xúc. Tạo nhạc nền không bản quyền và các đoạn nhạc." },
            { num: "Buổi 4", title: "Kỹ thuật âm thanh nâng cao & Tùy biến nhạc", desc: "Sử dụng tính năng Extend để kéo dài và phát triển cấu trúc bài hát (Verse, Chorus, Outro). Kết hợp giọng hát AI (AI Vocals) và điều chỉnh nhịp điệu phù hợp với video. Xuất file chất lượng cao và chuẩn bị tài nguyên." },
            { num: "Buổi 5", title: "Làm chủ không gian làm việc CapCut", desc: "Quản lý dự án, import tài nguyên hình ảnh, video và âm thanh (từ Suno). Các công cụ cắt ghép cơ bản, điều chỉnh tốc độ và pacing (nhịp độ video)." },
            { num: "Buổi 6", title: "Kỹ thuật chuyển động nâng cao (Keyframe & Masking)", desc: "Ứng dụng Keyframe để tạo chuyển động mượt mà cho hình ảnh và text. Sử dụng Masking (Mặt nạ) để tạo các hiệu ứng biến mất, lồng ghép khung hình sáng tạo. Áp dụng Keyframe và Masking vào dự án thực tế." },
            { num: "Buổi 7", title: "Xử lý phụ đề tự động & Hiệu ứng chữ động", desc: "Sử dụng tính năng Auto-captions (Phụ đề tự động) chính xác và nhanh chóng. Thiết kế typo, hiệu ứng chữ (Text animations) theo phong cách hiện đại." },
            { num: "Buổi 8", title: "Xử lý âm thanh tổng hợp & Hiệu ứng chuyển cảnh", desc: "Đồng bộ hóa nhạc Suno, giọng đọc AI và Sound Effects (SFX) để tăng cảm xúc. Sử dụng transitions (chuyển cảnh) và bộ lọc hiệu ứng (Effects) hợp lý, không lạm dụng." },
            { num: "Buổi 9", title: "Chỉnh màu (Color Grading) & Tối ưu hóa đa nền tảng", desc: "Kỹ thuật chỉnh màu giúp video điện ảnh và bắt mắt hơn. Thiết lập thông số Export (Xuất file) tối ưu cho TikTok, YouTube Shorts, Reels và Facebook." },
            { num: "Buổi 10", title: "Tổng duyệt cuối khóa & Hỗ trợ chuyên sâu", desc: "Nhận xét, sửa lỗi trực tiếp 1 kèm 1. Tư vấn định hướng phát triển kênh và chia sẻ tài nguyên." }
          ]
        },
        {
          id: "video-capcut",
          tabLabel: "2. Edit Video CapCut (8 Buổi)",
          title: "KHÓA HỌC EDIT VIDEO CAPCUT",
          duration: "8 Buổi",
          priceOffline: 3600000,
          priceOnline: 2800000,
          sessions: [
            { num: "Buổi 1", title: "Làm quen giao diện & Thao tác cắt ghép cơ bản", desc: "Tổng quan giao diện làm việc của CapCut (PC, Mobile). Quản lý Media: Cách import video, hình ảnh, âm thanh. Công cụ chỉnh sửa cốt lõi: Cắt, xóa, và sắp xếp các đoạn clip. Thực hành: Dựng thô một video ngắn từ các source nguyên bản." },
            { num: "Buổi 2", title: "Xử lý âm thanh (Audio) & Tiêu đề (Text)", desc: "Âm thanh: Thêm nhạc nền, hiệu ứng âm thanh, ghi âm giọng nói. Kỹ thuật xử lý: Khớp nhạc (Beat sync), điều chỉnh âm lượng, fade in/out và lọc tạp âm. Văn bản: Thêm text, áp dụng hiệu ứng chữ, và sử dụng tính năng tạo phụ đề tự động (Auto-captions)." },
            { num: "Buổi 3", title: "Hiệu ứng (Effects) & Chuyển cảnh (Transitions)", desc: "Chuyển cảnh: Áp dụng các hiệu ứng chuyển tiếp giữa các clip để tạo sự mượt mà. Hiệu ứng: Cách sử dụng Hiệu ứng Video (Video Effects) và Hiệu ứng Cơ thể (Body Effects). Chèn nhãn dán (Stickers) và các thành phần đồ họa có sẵn." },
            { num: "Buổi 4", title: "Điều chỉnh tốc độ & Kỹ thuật Keyframe", desc: "Tốc độ: Tua nhanh, làm chậm (Slo-mo) và làm quen với Đồ thị tốc độ (Speed Curve). Keyframe: Nguyên lý hoạt động của Keyframe. Ứng dụng Keyframe để tạo các chuyển động cơ bản cho video hoặc hình ảnh (Zoom in/out, Panning)." },
            { num: "Buổi 5", title: "Lớp phủ (Overlay) & Mặt nạ (Masking)", desc: "Lớp phủ (PIP): Kỹ thuật chèn nhiều video/hình ảnh chồng lên nhau trong cùng một khung hình. Mặt nạ (Mask): Các loại mặt nạ cơ bản (chia nửa, hình tròn, v.v.) để ẩn/hiện các phần của video. Kết hợp Mask và Overlay để làm video nhân bản hoặc hiệu ứng lồng ghép." },
            { num: "Buổi 6", title: "Chỉnh màu (Color Grading) & Tách nền", desc: "Chỉnh màu cơ bản: Cân bằng sáng, độ tương phản, độ bão hòa, nhiệt độ màu. Sử dụng Bộ lọc (Filters) và bảng màu (LUTs) để tạo phong cách điện ảnh. Xóa nền: Kỹ thuật xóa phông xanh (Chroma Key) và tính năng xóa nền tự động của CapCut." },
            { num: "Buổi 7", title: "Tracking & Các công cụ tự động nâng cao", desc: "Bám sát mục tiêu (Tracking): Gắn text, hình ảnh hoặc sticker chuyển động theo một vật thể trong video. Xử lý lỗi video: Chống rung (Stabilize) cho các source quay tay. Sử dụng các công cụ làm đẹp và một số tính năng AI hỗ trợ rảnh tay của CapCut." },
            { num: "Buổi 8", title: "Thực hành dự án cuối khóa & Xuất file tối ưu", desc: "Học viên vận dụng toàn bộ kỹ năng để hoàn thiện một dự án thực tế (Ví dụ: Video TikTok/Reels, Vlog, hoặc Video bài giảng). Thiết lập thông số xuất file (Độ phân giải, Tốc độ khung hình, Format) chuẩn xác cho từng nền tảng mạng xã hội." }
          ]
        }
      ]
    },
    {
      id: "web",
      navName: "Web",
      icon: "🌐",
      badge: "Website & AI Veo 3",
      title: "Khóa Học Tạo Web Với AI Theo Yêu Cầu",
      shortDesc: "Xây dựng Website Wix kết hợp Gemini viết nội dung, tạo ảnh AI, làm video Veo 3 & SEO Google.",
      thumbnail: "https://lh3.googleusercontent.com/d/1GJv4ZKb9s7X9wkGu7BAUuxHl8Dk74tiW",
      posters: [
        "https://lh3.googleusercontent.com/d/1GJv4ZKb9s7X9wkGu7BAUuxHl8Dk74tiW"
      ],
      sessionsCount: "10 Buổi / Khóa",
      priceOnline: 3500000,
      priceOffline: 4500000,
      highlights: [
        "Wix Web + Mobile Responsive (Buổi 1-4)",
        "Copywriting & Tạo ảnh Web bằng Gemini (Buổi 5-7)",
        "Video AI Veo 3 & Tối ưu SEO Google (Buổi 8-10)"
      ],
      tracks: [
        {
          id: "web-ai-full",
          tabLabel: "Thiết Kế Web Với AI (10 Buổi)",
          title: "KHÓA HỌC THIẾT KẾ WEB VỚI AI (Wix • Gemini • Veo 3 • SEO)",
          duration: "10 Buổi",
          priceOffline: 4500000,
          priceOnline: 3500000,
          sessions: [
            { num: "Buổi 1", title: "Khởi tạo & Làm quen giao diện Wix (Phần 1: Nền tảng)", desc: "Tạo tài khoản và phân tích cấu trúc website cơ bản. Cách chọn template phù hợp với ngành nghề. Thao tác kéo - thả, thêm xóa các element (text, ảnh, nút bấm)." },
            { num: "Buổi 2", title: "Tùy chỉnh Layout & Trải nghiệm người dùng (Phần 1: Nền tảng)", desc: "Quản lý Section, Header, Footer và điều hướng Menu. Thêm các tính năng tương tác: Form liên hệ, bản đồ, nút gọi/chat. Thực hành căn chỉnh bố cục gọn gàng." },
            { num: "Buổi 3", title: "Tối ưu Mobile & Quản lý Media (Phần 1: Nền tảng)", desc: "Chuyển đổi và tinh chỉnh giao diện trên giao diện điện thoại (Mobile Responsive). Cách quản lý thư viện hình ảnh/video trên Wix. Thêm hiệu ứng cuộn và animation cơ bản." },
            { num: "Buổi 4", title: "Hoàn thiện & Xuất bản Website (Phần 1: Nền tảng)", desc: "Rà soát lỗi giao diện tổng thể. Hướng dẫn kết nối tên miền (Domain) và cấu hình hosting của Wix. Publish (Xuất bản) website và kiểm tra trực tiếp." },
            { num: "Buổi 5", title: "Tư duy Prompt & Viết Copywriting (Phần 2: Gemini Copywriting)", desc: "Cấu trúc câu lệnh (Prompt) chuẩn để Gemini hiểu đúng ngữ cảnh. Sử dụng Gemini để viết nội dung Website: Giới thiệu (About Us), Slogan, Mô tả sản phẩm/dịch vụ. Lên ý tưởng bài viết Blog chuẩn bị cho SEO." },
            { num: "Buổi 6", title: "Kỹ thuật Prompt Hình ảnh cơ bản (Phần 3: Tạo ảnh AI)", desc: "Nguyên lý tạo ảnh bằng AI: Bố cục, phong cách nghệ thuật, ánh sáng, màu sắc. Thực hành gõ prompt tạo các bức ảnh minh họa cơ bản." },
            { num: "Buổi 7", title: "Thực hành tạo Tài nguyên ảnh cho Web (Phần 3: Tạo ảnh AI)", desc: "Dùng Gemini tạo Banner chính (Hero image), ảnh bài viết, icon, hoặc ảnh nền cho website Wix. Mẹo chỉnh sửa, cắt cúp và tối ưu dung lượng ảnh trước khi tải lên web." },
            { num: "Buổi 8", title: "Khám phá Veo 3 & Kịch bản Video (Phần 4: Chế tác Video Veo 3)", desc: "Giới thiệu giao diện và cách hoạt động của công cụ tạo video AI Veo 3. Phối hợp với Gemini để viết kịch bản video ngắn (Promo, Intro web). Cách thiết lập prompt chuyển động (motion prompt) trong Veo 3." },
            { num: "Buổi 9", title: "Sản xuất & Nhúng Video lên Web (Phần 4: Chế tác Video Veo 3)", desc: "Thực hành tạo các đoạn video clip từ kịch bản đã chuẩn bị. Ghép nối các đoạn video ngắn thành một clip hoàn chỉnh. Xuất file video và nhúng trực tiếp lên website Wix." },
            { num: "Buổi 10", title: "SEO On-page cơ bản & Tổng kết (Phần 5: Tối ưu SEO Google)", desc: "Tối ưu hóa thẻ Tiêu đề (Title), Mô tả (Meta Description) và URL trên hệ thống Wix SEO Wiz. Cập nhật thẻ Alt cho hình ảnh (đã tạo bằng Gemini). Khai báo website với Google và nghiệm thu toàn bộ dự án website 10 buổi." }
          ]
        }
      ]
    },
    {
      id: "theo-yeu-cau",
      navName: "Theo Yêu Cầu",
      icon: "🎯",
      badge: "",
      title: "Khóa Học THEO YÊU CẦU",
      shortDesc: "Chương trình thiết kế riêng 1 kèm 1 theo ngành nghề, giải quyết trực tiếp sản phẩm, thương hiệu & công việc thực tế của bạn.",
      thumbnail: "3d-question",
      posters: [],
      sessionsCount: "",
      priceOnline: 0,
      priceOffline: 0,
      highlights: [
        "Khóa Học Theo Nhu Cầu Cá Nhân",
        "Khóa Đào Tạo Doanh Nghiệp & Nhóm",
        "Khóa Cấp Tốc Xử Lý Việc Gấp"
      ],
      tracks: [
        {
          id: "custom-personal",
          tabLabel: "Tự Thiết Kế Giáo Án Theo Nhu Cầu",
          title: "Khóa Học THEO YÊU CẦU",
          duration: "Linh hoạt",
          priceOffline: 0,
          priceOnline: 0,
          sessions: []
        }
      ]
    }
  ]
};

// State
let currentTab = "home"; // 'home', 'theo-yeu-cau', 'photoshop', 'illustrator', 'ai', 'edit-video', 'web'
let currentPricingMode = "online"; // 'online' | 'offline'
let currentShowcaseIdx = 0;
let activeTrackIdxMap = {
  "theo-yeu-cau": 0,
  photoshop: 0,
  illustrator: 0,
  ai: 0,
  "edit-video": 0,
  web: 0
};

function formatVND(amount) {
  return amount.toLocaleString("vi-VN") + "đ";
}

// Cấu hình SEO động cho từng trang theo bộ từ khóa mục tiêu
const SEO_CONFIG = {
  home: {
    title: "Khóa Học Ứng Dụng AI | Khóa Học Tạo Web Với AI, Trí Tuệ Nhân Tạo, Photoshop, Illustrator, Edit Video Theo Yêu Cầu",
    desc: "Chuyên đào tạo Khóa học ứng dụng AI, Khóa học tạo web với AI, Khóa học trí tuệ nhân tạo theo yêu cầu, Khóa học Photoshop theo yêu cầu, Khóa học Illustrator theo yêu cầu, Khóa học Edit Video theo yêu cầu. Học 1 kèm 1 hoặc nhóm."
  },
  "theo-yeu-cau": {
    title: "Khóa Học Theo Yêu Cầu 1 Kèm 1 | Thiết Kế Đồ Họa & AI Theo Nhu Cầu Riêng",
    desc: "Khóa học theo yêu cầu 1 kèm 1: Cá nhân hóa lộ trình học theo mục tiêu công việc, ngành nghề cụ thể hoặc dự án doanh nghiệp. Giáo viên qua nhà hoặc Online linh hoạt."
  },
  photoshop: {
    title: "Khóa Học Photoshop Theo Yêu Cầu | Học Thiết Kế Quảng Cáo & Ảnh Cưới Với AI 1 Kèm 1",
    desc: "Khóa học Photoshop theo yêu cầu 1 kèm 1 thực chiến (Online Zoom/Google Meet hoặc Giáo viên qua nhà). Làm chủ cắt ghép, tách nền AI, Retouch và thiết kế Banner quảng cáo."
  },
  illustrator: {
    title: "Khóa Học Illustrator Theo Yêu Cầu | Thiết Kế Vector, Ấn Phẩm In Ấn & Vẽ Minh Họa",
    desc: "Khóa học Illustrator theo yêu cầu 1 kèm 1 từ cơ bản đến chuyên sâu: Thiết kế Logo, Bộ nhận diện thương hiệu, kỹ thuật bình trang in ấn CMYK và Vẽ minh họa Concept Art."
  },
  ai: {
    title: "Khóa Học Trí Tuệ Nhân Tạo Theo Yêu Cầu | Làm Chủ Gemini, Google Vids, Suno AI, Canva",
    desc: "Khóa học trí tuệ nhân tạo theo yêu cầu: Đào tạo thực chiến Google Gemini, tạo ảnh AI, dựng video Google Vids, sáng tác nhạc Suno AI, NotebookLM và thiết kế Canva."
  },
  "edit-video": {
    title: "Khóa Học Edit Video Theo Yêu Cầu | Dựng Video AI & CapCut Thực Chiến 1 Kèm 1",
    desc: "Khóa học Edit Video theo yêu cầu: Sản xuất video TikTok, Reels, YouTube Shorts triệu view với CapCut PC/Mobile kết hợp kịch bản Gemini và nhạc nền Suno AI."
  },
  web: {
    title: "Khóa Học Tạo Web Với AI | Tự Làm Website Wix Chuẩn SEO Bằng Gemini & Veo 3",
    desc: "Khóa học tạo web với AI thực chiến 1 kèm 1: Tự tay xây dựng website chuẩn SEO Google trên máy tính & điện thoại với Wix, Gemini viết bài và video AI Veo 3."
  }
};

function updatePageSEO(tabId) {
  const seo = SEO_CONFIG[tabId] || SEO_CONFIG.home;
  document.title = seo.title;
  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute("content", seo.desc);
}

// Switch Page View
function navigateTo(tabId, scrollToTop = true) {
  if (aiFaceInstance) {
    aiFaceInstance.destroy();
    aiFaceInstance = null;
  }
  if (mochiSyllabusInstance) {
    mochiSyllabusInstance.destroy();
    mochiSyllabusInstance = null;
  }
  currentTab = tabId;

  document.querySelectorAll("[data-nav]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-nav") === tabId);
  });

  updatePageSEO(tabId);
  renderMainView();

  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

// Switch Global Pricing Mode
function setPricingMode(mode) {
  currentPricingMode = mode;
  document.querySelectorAll("[data-mode-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-mode-btn") === mode);
  });
  renderMainView();
  updateFeeCalculator();
}

// Render Hero Showcase
function renderHeroShowcase() {
  const slide = SITE_DATA.showcaseSlides[currentShowcaseIdx];
  const tabsHtml = SITE_DATA.showcaseSlides
    .map(
      (s, idx) => `
      <button class="showcase-tab ${idx === currentShowcaseIdx ? "active" : ""}" onclick="selectShowcase(${idx})">
        ${s.label}
      </button>
    `
    )
    .join("");

  return `
    <div class="hero-showcase">
      <div class="showcase-tabs">${tabsHtml}</div>
      <div class="showcase-Display" onclick="openLightbox('${slide.image}', '${slide.title}')">
        <img src="${slide.image}" alt="${slide.title}" loading="eager" />
      </div>
      <div class="showcase-caption">
        <div class="showcase-caption-info">
          <h4>${slide.title}</h4>
        </div>
        <button class="btn btn-primary" style="padding: 7px 14px; font-size: 0.8rem;" onclick="navigateTo('${slide.id}')">
          Chi tiết →
        </button>
      </div>
    </div>
  `;
}

window.selectShowcase = function (idx) {
  currentShowcaseIdx = idx;
  const container = document.getElementById("heroShowcaseWrapper");
  if (container) {
    container.innerHTML = renderHeroShowcase();
  }
};

// Bảng màu Mochi theo từng loại bánh (Hồng Dâu, Vàng Xoài, Xanh Matcha, Trắng)
const MOCHI_PALETTES = {
  white: {
    c0: [255, 255, 255],
    c1: [255, 255, 255],
    c2: [246, 247, 252],
    c3: [232, 236, 248],
    c4: [220, 226, 242],
    stroke: [203, 213, 225, 0.7],
    rim: [244, 114, 182, 0.14]
  },
  pink: {
    c0: [255, 255, 255],
    c1: [255, 228, 238],
    c2: [254, 202, 222],
    c3: [251, 165, 196],
    c4: [244, 114, 155],
    stroke: [244, 114, 182, 0.75],
    rim: [244, 63, 94, 0.28]
  },
  yellow: {
    c0: [255, 255, 255],
    c1: [254, 248, 210],
    c2: [254, 232, 150],
    c3: [250, 204, 95],
    c4: [234, 179, 50],
    stroke: [245, 158, 11, 0.75],
    rim: [234, 88, 12, 0.25]
  },
  matcha: {
    c0: [255, 255, 255],
    c1: [236, 253, 240],
    c2: [198, 246, 208],
    c3: [150, 228, 168],
    c4: [95, 200, 125],
    stroke: [34, 197, 94, 0.75],
    rim: [22, 163, 74, 0.26]
  }
};

// Cho Bé Mochi ăn bánh (Hồng dâu, Vàng xoài, Xanh matcha)
window.feedAIFace = function (flavor, btnEl) {
  if (aiFaceInstance) {
    aiFaceInstance.feed(flavor);
  }

  // Hiệu ứng bánh bay từ icon vào miệng Mochi
  const thumbArea = document.getElementById("aiFaceThumbArea");
  if (thumbArea && btnEl) {
    const thumbRect = thumbArea.getBoundingClientRect();
    const btnRect = btnEl.getBoundingClientRect();

    const flyingEl = document.createElement("div");
    flyingEl.className = `flying-snack snack-${flavor}`;
    const startX = btnRect.left - thumbRect.left + btnRect.width / 2 - 16;
    const startY = btnRect.top - thumbRect.top + 6;
    flyingEl.style.left = `${startX}px`;
    flyingEl.style.top = `${startY}px`;
    thumbArea.appendChild(flyingEl);

    const targetX = thumbRect.width / 2 + 12;
    const targetY = thumbRect.height / 2 + 20;

    requestAnimationFrame(() => {
      flyingEl.style.transform = `translate(${targetX - startX}px, ${targetY - startY}px) scale(0.35)`;
      flyingEl.style.opacity = "0";
    });

    setTimeout(() => {
      flyingEl.remove();
    }, 450);
  }
};

// Đổi cảm xúc nhân vật chính (😄 Vui vẻ, 😍 Thả tim, 😎 Siêu ngầu, 😜 Tinh nghịch)
window.setMochiEmotion = function (emotion) {
  if (aiFaceInstance) {
    aiFaceInstance.setEmotion(emotion);
  }
};

// Biến quản lý khuôn mặt AI tương tác
let aiFaceInstance = null;

// Render Nhân vật AI Mochi 3D tương tác (Hero section bên phải)
function renderInteractiveFaceCard() {
  return `
    <article class="category-card ai-face-card" id="aiInteractiveFaceCard">
      <div class="category-thumb ai-face-thumb" id="aiFaceThumbArea">
        <canvas id="aiFaceCanvas" class="ai-face-canvas"></canvas>

        <!-- Icon Cho Ăn Bánh Trắng ở bên trái (Ăn to dần lên, quá 5 lần sẽ phát nổ và về ban đầu) -->
        <div class="mochi-feed-dock" id="mochiFeedDock">
          <button type="button" class="feed-snack-btn snack-white" onclick="feedAIFace('white', this)" title="Cho Bé Mochi ăn bánh trắng (Ăn to lên!)" aria-label="Cho Mochi ăn bánh trắng">
            <span class="snack-ball"></span>
          </button>
        </div>

        <!-- 2 Cột Icon Cảm Xúc ở góc phải:
             Cột 1: 😄 Vui vẻ, 😍 Thả tim, 🤓 Kính cận, 😧 Hoang mang
             Cột 2: 🤥 Nói dối mũi dài, 😪 Buồn ngủ, 😒 Chán chường, 🙄 Đảo mắt -->
        <div class="mochi-emotion-dock" id="mochiEmotionDock">
          <div class="emotion-col">
            <button type="button" class="emotion-btn" id="btnEmoHappy" onclick="setMochiEmotion('happy')" title="Cảm xúc Vui vẻ" aria-label="Vui vẻ">
              😄
            </button>
            <button type="button" class="emotion-btn" id="btnEmoLove" onclick="setMochiEmotion('love')" title="Cảm xúc Thả tim" aria-label="Thả tim">
              😍
            </button>
            <button type="button" class="emotion-btn" id="btnEmoNerd" onclick="setMochiEmotion('nerd')" title="Kính cận mọt sách" aria-label="Kính cận">
              🤓
            </button>
            <button type="button" class="emotion-btn" id="btnEmoShocked" onclick="setMochiEmotion('shocked')" title="Cảm xúc Hoang mang" aria-label="Hoang mang">
              😧
            </button>
          </div>
          <div class="emotion-col">
            <button type="button" class="emotion-btn" id="btnEmoLie" onclick="setMochiEmotion('lie')" title="Mũi dài Pinocchio" aria-label="Nói dối">
              🤥
            </button>
            <button type="button" class="emotion-btn" id="btnEmoSleepy" onclick="setMochiEmotion('sleepy')" title="Cảm xúc Buồn ngủ" aria-label="Buồn ngủ">
              😪
            </button>
            <button type="button" class="emotion-btn" id="btnEmoUnamused" onclick="setMochiEmotion('unamused')" title="Cảm xúc Chán nản" aria-label="Chán nản">
              😒
            </button>
            <button type="button" class="emotion-btn" id="btnEmoRolling" onclick="setMochiEmotion('rolling')" title="Cảm xúc Đảo mắt" aria-label="Đảo mắt">
              🙄
            </button>
          </div>
        </div>
      </div>
      <div class="category-body ai-face-body">
        <div class="category-footer" style="padding-top: 0; border-top: none;">
          <div>
            <span class="price-label" style="display:block; font-size:0.82rem; font-weight:800; color:var(--text-main); margin-bottom:2px;">
              kéo và cho ăn Mochi 3D nè !
            </span>
            <span class="price-value" id="aiFaceStatusText" style="font-size: 0.95rem; color: var(--primary);">Đang nhìn bạn nè 🥰</span>
          </div>
          <button class="btn btn-primary" style="padding:8px 16px; font-size:0.84rem;" onclick="prefillCourseAndScroll('Khóa học Trí tuệ nhân tạo')">
            TƯ VẤN NGAY →
          </button>
        </div>
      </div>
    </article>
  `;
}

// Render Các Ô Khóa Học (Khung thẻ chuẩn thiết kế & màu sắc Kỹ Năng Số)
function renderCategoryCards() {
  const courseCardsHtml = SITE_DATA.categories
    .map((cat) => {
      const isCustomCat = cat.id === "theo-yeu-cau";
      const displayPrice =
        currentPricingMode === "online" ? cat.priceOnline : cat.priceOffline;
      const modeText =
        currentPricingMode === "online"
          ? "HỌC ONLINE (ZOOM/MEET)"
          : "HỌC OFFLINE (TẬN NƠI)";
      const subItems = cat.highlights
        .map(
          (h) => `
        <div class="subcourse-item">
          <svg class="check-svg" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="20" height="20" rx="4" fill="#10b981"/>
            <path d="M5 10.5L8.5 14L15 6.5" stroke="white" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>${h}</span>
        </div>
      `
        )
        .join("");

      const thumbContent = isCustomCat
        ? `
          <div class="thumb-3d-question-box" title="Khóa học thiết kế giáo án theo yêu cầu riêng">
            <div class="question-ambient-glow"></div>
            <div class="question-halo-ring"></div>
            <div class="question-mark-3d-wrap">
              <span class="question-mark-3d-glyph">?</span>
            </div>
          </div>
        `
        : `
          <img src="${cat.thumbnail}" alt="${cat.title}" loading="lazy" />
          ${cat.badge ? `<span class="category-tag">${cat.icon} ${cat.badge}</span>` : ""}
          ${cat.sessionsCount ? `<span class="category-count-badge">${cat.sessionsCount}</span>` : ""}
        `;

      const footerContent = isCustomCat
        ? `
          <div class="category-footer" style="justify-content: flex-end;">
            <button class="btn btn-cat-action" onclick="navigateTo('${cat.id}')" aria-label="Xem thêm ${cat.title}">
              XEM THÊM →
            </button>
          </div>
        `
        : `
          <div class="category-footer">
            <div class="price-col">
              <span class="price-label">${modeText}</span>
              <span class="price-value">${formatVND(displayPrice)}</span>
            </div>
            <button class="btn btn-cat-action" onclick="navigateTo('${cat.id}')" aria-label="Xem thêm ${cat.title}">
              XEM THÊM →
            </button>
          </div>
        `;

      return `
        <article class="category-card">
          <div class="category-thumb" onclick="navigateTo('${cat.id}')" style="cursor:pointer;" title="Xem chi tiết ${cat.title}">
            ${thumbContent}
          </div>
          <div class="category-body">
            <h3 class="category-title" onclick="navigateTo('${cat.id}')">${cat.title}</h3>
            <div class="category-subcourses">
              ${subItems}
            </div>
            ${footerContent}
          </div>
        </article>
      `;
    })
    .join("");

  return courseCardsHtml;
}

// Cuộn mượt đến mục Khóa Học Theo Yêu Cầu
window.scrollToCourses = function () {
  if (currentTab !== "home") {
    navigateTo("home", false);
    setTimeout(() => {
      const sec = document.getElementById("coursesSection");
      if (sec) {
        sec.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 60);
  } else {
    const sec = document.getElementById("coursesSection");
    if (sec) {
      sec.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  document.querySelectorAll("[data-nav]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-nav") === "courses");
  });
};

// Lớp điều khiển Nhân Vật AI Mochi 3D Squishy Tương Tác Đáng Yêu
class AIFaceTracker {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.statusEl = document.getElementById("aiFaceStatusText");
    this.hintEl = document.getElementById("aiFaceDragHint");

    this.width = 320;
    this.height = 310;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Vật lý lò xo Jelly/Elastic (Spring-Damper Physics)
    this.dispX = 0;
    this.dispY = 0;
    this.velX = 0;
    this.velY = 0;

    // Kéo chuột / Chạm ngón tay
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.currentDragX = 0;
    this.currentDragY = 0;

    // Nhìn theo chuột máy tính
    this.targetGazeX = 0;
    this.targetGazeY = 0;
    this.gazeX = 0;
    this.gazeY = 0;
    this.lastMouseMoveTime = Date.now();

    // Tự động nhìn ngó tự nhiên trên điện thoại / khi chuột đứng yên
    this.idleTargetX = 0;
    this.idleTargetY = 0;
    this.nextIdleShift = 0;

    // Chớp mắt tự nhiên
    this.blinkProgress = 0;
    this.isBlinking = false;
    this.nextBlinkTime = Date.now() + 2500;
    this.blinkStartTime = 0;

    // Đỏ 2 má khi kéo (kéo sẽ đỏ trong 5 giây rồi hết)
    this.blushUntil = 0;

    // Trạng thái khóc (khóc khi kéo và 5 giây sau khi kéo)
    this.cryUntil = 0;
    this.wasCrying = false;

    // Phụ kiện thời trang hoặc Cảm xúc nhân vật: "normal", "happy", "love", "cool", "playful"
    this.currentEmotion = "normal";
    this.glasses = "none";
    this.hat = "none";

    // Trạng thái cho ăn bánh Mochi trắng & phóng to (to lên mỗi lần ăn, quá 5 lần thì nổ)
    this.feedCount = 0;
    this.growthScale = 1.0;
    this.targetGrowthScale = 1.0;
    this.isExploding = false;
    this.explosionTime = 0;
    this.explosionParticles = [];

    // Màu sắc Mochi đổi dần dần theo bánh vừa ăn (Smooth Color Morphing)
    this.currentPalette = JSON.parse(JSON.stringify(MOCHI_PALETTES.white));
    this.targetPalette = MOCHI_PALETTES.white;
    this.currentFlavor = "white";

    // Trạng thái ăn bánh và nhai nhồm nhoàm
    this.isEating = false;
    this.eatingStart = 0;
    this.chewProgress = 0;
    this.crumbs = [];

    this.statusTimer = null;
    this.rafId = null;

    this.onWindowMouseMove = this.onWindowMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onWindowMouseMoveDrag = this.onWindowMouseMoveDrag.bind(this);
    this.onWindowMouseUp = this.onWindowMouseUp.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onResize = this.onResize.bind(this);
    this.loop = this.loop.bind(this);

    this.init();
  }

  init() {
    this.bindEvents();
    this.resize();
    this.rafId = requestAnimationFrame(this.loop);
  }

  bindEvents() {
    window.addEventListener("mousemove", this.onWindowMouseMove, { passive: true });
    window.addEventListener("resize", this.onResize, { passive: true });

    this.canvas.addEventListener("mousedown", this.onMouseDown);
    window.addEventListener("mousemove", this.onWindowMouseMoveDrag);
    window.addEventListener("mouseup", this.onWindowMouseUp);

    this.canvas.addEventListener("touchstart", this.onTouchStart, { passive: false });
    window.addEventListener("touchmove", this.onTouchMove, { passive: false });
    window.addEventListener("touchend", this.onTouchEnd);
    window.addEventListener("touchcancel", this.onTouchEnd);
  }

  unbindEvents() {
    window.removeEventListener("mousemove", this.onWindowMouseMove);
    window.removeEventListener("resize", this.onResize);

    this.canvas.removeEventListener("mousedown", this.onMouseDown);
    window.removeEventListener("mousemove", this.onWindowMouseMoveDrag);
    window.removeEventListener("mouseup", this.onWindowMouseUp);

    this.canvas.removeEventListener("touchstart", this.onTouchStart);
    window.removeEventListener("touchmove", this.onTouchMove);
    window.removeEventListener("touchend", this.onTouchEnd);
    window.removeEventListener("touchcancel", this.onTouchEnd);
  }

  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.statusTimer) {
      clearTimeout(this.statusTimer);
      this.statusTimer = null;
    }
    this.unbindEvents();
  }

  onResize() {
    this.resize();
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    this.width = rect.width;
    this.height = rect.height;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(this.width * this.dpr);
    this.canvas.height = Math.round(this.height * this.dpr);
  }

  onWindowMouseMove(e) {
    if (this.isDragging) return;
    this.lastMouseMoveTime = Date.now();
    const rect = this.canvas.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    this.targetGazeX = Math.max(-1, Math.min(1, (e.clientX - centerX) / 280));
    this.targetGazeY = Math.max(-1, Math.min(1, (e.clientY - centerY) / 200));
  }

  onMouseDown(e) {
    if (e.button !== 0) return;
    this.startDrag(e.clientX, e.clientY);
  }

  onWindowMouseMoveDrag(e) {
    if (!this.isDragging) return;
    this.currentDragX = e.clientX;
    this.currentDragY = e.clientY;
  }

  onWindowMouseUp() {
    if (!this.isDragging) return;
    this.endDrag();
  }

  onTouchStart(e) {
    if (e.touches.length > 0) {
      e.preventDefault();
      const touch = e.touches[0];
      this.startDrag(touch.clientX, touch.clientY);
    }
  }

  onTouchMove(e) {
    if (!this.isDragging) return;
    if (e.touches.length > 0) {
      e.preventDefault();
      const touch = e.touches[0];
      this.currentDragX = touch.clientX;
      this.currentDragY = touch.clientY;
    }
  }

  onTouchEnd() {
    if (!this.isDragging) return;
    this.endDrag();
  }

  startDrag(clientX, clientY) {
    this.isDragging = true;
    this.dragStartX = clientX;
    this.dragStartY = clientY;
    this.currentDragX = clientX;
    this.currentDragY = clientY;
    this.blushUntil = Date.now() + 5000;
    this.cryUntil = Date.now() + 5000; // Khi kéo nhân vật khóc 5 giây sau trở lại bình thường
    this.wasCrying = true;
    this.canvas.classList.add("is-dragging");

    if (this.hintEl) {
      this.hintEl.style.opacity = "0";
    }
    this.setStatus("Huhu... đừng kéo má tớ mà, đau quá à! 😭");
  }

  endDrag() {
    this.isDragging = false;
    this.blushUntil = Math.max(this.blushUntil, Date.now() + 5000);
    this.cryUntil = Math.max(this.cryUntil, Date.now() + 5000);
    this.canvas.classList.remove("is-dragging");
    if (navigator.vibrate) {
      try { navigator.vibrate([40, 60, 40]); } catch (_) {}
    }
    this.setStatus("Huhu... kéo dãn đau muốn rớt nước mắt! 😭", 4000);
  }

  setEmotion(emotion) {
    if (this.currentEmotion === emotion) {
      this.currentEmotion = "normal";
    } else {
      this.currentEmotion = emotion;
    }
    this.updateEmotionUI();

    const msgs = {
      happy: "Bé Mochi đang siêu vui vẻ cười tít mắt nè! 😄✨",
      love: "Bé Mochi thả ngàn trái tim yêu thương gửi đến bạn! 😍💖",
      nerd: "Bé Mochi đeo kính cận thành giáo sư AI mọt sách! 🤓📚",
      shocked: "Ủa gì vậy trời? Bé Mochi hoang mang tột độ! 😧⚡",
      lie: "Mũi tớ dài ra như Pinocchio rồi nè, không nói dối đâu nha! 🤥🤥",
      sleepy: "Oaaa... Buồn ngủ quá, bong bóng mũi phập phồng nè! 😪💤",
      unamused: "Hứ, tớ đang giận dỗi và liếc chán nản bạn đó! 😒💅",
      rolling: "Ủa alo? Đảo mắt lên trần nhà luôn nè! 🙄🙄",
      normal: "Đang nhìn bạn nè 🥰"
    };
    this.setStatus(msgs[this.currentEmotion] || "Đang nhìn bạn nè 🥰", 3500);

    // Mochi nảy nhẹ khi đổi cảm xúc
    this.velY = -4;
    if (this.currentEmotion !== "normal") {
      this.blushUntil = Date.now() + 4000;
    }
  }

  updateEmotionUI() {
    const emotionBtns = {
      happy: document.getElementById("btnEmoHappy"),
      love: document.getElementById("btnEmoLove"),
      nerd: document.getElementById("btnEmoNerd"),
      shocked: document.getElementById("btnEmoShocked"),
      lie: document.getElementById("btnEmoLie"),
      sleepy: document.getElementById("btnEmoSleepy"),
      unamused: document.getElementById("btnEmoUnamused"),
      rolling: document.getElementById("btnEmoRolling")
    };
    Object.keys(emotionBtns).forEach((key) => {
      const btn = emotionBtns[key];
      if (btn) {
        btn.classList.toggle("active", this.currentEmotion === key);
      }
    });
  }

  setStatus(text, duration = 0) {
    if (!this.statusEl) return;
    if (this.statusTimer) {
      clearTimeout(this.statusTimer);
      this.statusTimer = null;
    }
    this.statusEl.textContent = text;
    if (duration > 0) {
      this.statusTimer = setTimeout(() => {
        if (this.statusEl) {
          this.statusEl.textContent = "Đang nhìn bạn nè 🥰";
        }
      }, duration);
    }
  }

  feed(flavor) {
    if (this.isExploding) return;

    this.feedCount++;

    if (this.feedCount > 3) {
      // Cho ăn vượt quá 3 lần sẽ phát nổ và trở lại hình dạng bình thường!
      this.triggerExplosion();
      return;
    }

    // Tăng kích thước dần dần mỗi lần ăn (1.0 -> 1.25 -> 1.50 -> 1.75)
    this.targetGrowthScale = 1.0 + this.feedCount * 0.25;
    this.isEating = true;
    this.eatingStart = Date.now();
    this.blushUntil = Date.now() + 5000;

    const feedMessages = {
      1: "Măm măm... Bánh Mochi ngon quá, tớ béo lên một chút rồi nè! (Lần 1/3) 😋",
      2: "Ngoàm ngoàm... Tớ to thêm một vòng phổng phao rồi nè! (Lần 2/3) 🥟",
      3: "Căng tròn sắp nổ tung rồi đó nha! Ăn thêm cái nữa là BÙÙÙM! (Lần 3/3) 💣"
    };

    this.setStatus(feedMessages[this.feedCount] || "Mochi tròn xoe no căng bụng rồi! 🥰", 3800);

    // Mochi nảy tưng tưng vì no
    this.velY = -3 - this.feedCount * 2;

    if (navigator.vibrate) {
      try { navigator.vibrate([40, 50, 40]); } catch (_) {}
    }
  }

  triggerExplosion() {
    this.isExploding = true;
    this.explosionTime = Date.now();
    this.feedCount = 0;
    this.targetGrowthScale = 1.0;
    this.growthScale = 0.35; // Co nhỏ sau vụ nổ rồi phục hồi về 1.0
    this.isEating = false;
    this.chewProgress = 0;

    // Sinh các hạt nổ bung toả khắp khung hình
    this.explosionParticles = [];
    const count = 52;
    const colors = ["#fb7185", "#38bdf8", "#facc15", "#a855f7", "#ffffff", "#4ade80", "#f43f5e", "#fb923c"];
    const centerX = this.width / 2;
    const centerY = this.height / 2;

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.35;
      const speed = 4.5 + Math.random() * 8.5;
      this.explosionParticles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: 3 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: 1.0,
        decay: 0.016 + Math.random() * 0.018,
        isStar: Math.random() > 0.45
      });
    }

    if (navigator.vibrate) {
      try { navigator.vibrate([100, 50, 100, 50, 200]); } catch (_) {}
    }

    this.setStatus("💥 BÙÙÙM! Ăn no quá phát nổ rồi... Bé Mochi biến về ban đầu nè! 💨✨", 4500);

    setTimeout(() => {
      this.isExploding = false;
      this.targetGrowthScale = 1.0;
    }, 1800);
  }

  spawnCrumb() {
    const rx = this.rx || 105;
    const mouthX = (this.width / 2 + 12) + (this.gazeX * 8.5) * 0.45;
    const mouthY = (this.height / 2 - 4) + rx * 0.36;
    const colors = {
      pink: ["#fb7185", "#f43f5e", "#fda4af", "#fff1f2"],
      yellow: ["#facc15", "#f59e0b", "#fde047", "#fef9c3"],
      matcha: ["#4ade80", "#22c55e", "#86efac", "#dcfce7"],
      white: ["#ffffff", "#f8fafc", "#f1f5f9", "#e2e8f0"]
    };
    const palette = colors[this.currentFlavor] || ["#f472b6", "#fbbf24", "#34d399"];
    const col = palette[Math.floor(Math.random() * palette.length)];

    this.crumbs.push({
      x: mouthX + (Math.random() - 0.5) * 32,
      y: mouthY + (Math.random() - 0.5) * 12,
      vx: (Math.random() - 0.5) * 2.8,
      vy: -1.6 - Math.random() * 2.2,
      r: 2.5 + Math.random() * 2.5,
      col: col,
      isHeart: Math.random() > 0.55,
      life: 1.0,
      scale: 1.0
    });
  }

  update() {
    const now = Date.now();

    // Tăng dần kích thước khi được cho ăn Mochi trắng
    if (this.growthScale === undefined) this.growthScale = 1.0;
    if (this.targetGrowthScale === undefined) this.targetGrowthScale = 1.0;
    this.growthScale += (this.targetGrowthScale - this.growthScale) * 0.12;

    // Cập nhật các hạt nổ bung toả
    if (this.explosionParticles && this.explosionParticles.length > 0) {
      this.explosionParticles = this.explosionParticles.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.94;
        p.vy = p.vy * 0.94 + 0.18; // hiệu ứng trọng lực rơi xuống
        p.life -= p.decay;
        return p.life > 0;
      });
    }

    // Từ từ đổi màu theo bánh vừa ăn (Smooth Color Interpolation)
    const lerpRate = 0.045;
    ["c0", "c1", "c2", "c3", "c4"].forEach((key) => {
      for (let i = 0; i < 3; i++) {
        this.currentPalette[key][i] +=
          (this.targetPalette[key][i] - this.currentPalette[key][i]) * lerpRate;
      }
    });
    for (let i = 0; i < 4; i++) {
      this.currentPalette.stroke[i] +=
        (this.targetPalette.stroke[i] - this.currentPalette.stroke[i]) * lerpRate;
      this.currentPalette.rim[i] +=
        (this.targetPalette.rim[i] - this.currentPalette.rim[i]) * lerpRate;
    }

    // Cập nhật hiệu ứng ăn bánh & nhai nhóp nhép
    if (this.isEating) {
      const elapsed = now - this.eatingStart;
      const totalDuration = 2200;
      if (elapsed < totalDuration) {
        if (elapsed < 350) {
          this.chewProgress = elapsed / 350;
        } else if (elapsed < 1850) {
          const chewTime = elapsed - 350;
          this.chewProgress = 0.35 + Math.sin(chewTime * 0.02) * 0.45;
          this.dispY += Math.sin(chewTime * 0.02) * 0.35;
        } else {
          this.chewProgress = (1 - (elapsed - 1850) / 350) * 0.2;
        }

        if (Math.random() < 0.25 && elapsed > 350 && elapsed < 1850) {
          this.spawnCrumb();
        }
      } else {
        this.isEating = false;
        this.chewProgress = 0;
      }
    }

    // Cập nhật vụn bánh / trái tim bay
    this.crumbs = this.crumbs.filter((c) => {
      c.x += c.vx;
      c.y += c.vy;
      c.vy += 0.08;
      c.life -= 0.028;
      c.scale = Math.max(0, c.life);
      return c.life > 0;
    });

    // Hết khóc sau 5 giây thì thông báo tươi cười trở lại
    if (this.wasCrying && now >= this.cryUntil) {
      this.wasCrying = false;
      this.setStatus("Hết đau rồi, lại tươi cười với bạn nè! 🥰", 3000);
    }

    // Khi chuột không di chuyển hoặc trên điện thoại -> tự động liếc nhìn tự nhiên
    if (now - this.lastMouseMoveTime > 1800 && !this.isDragging) {
      if (now > this.nextIdleShift) {
        this.idleTargetX = (Math.random() - 0.5) * 1.3;
        this.idleTargetY = (Math.random() - 0.4) * 0.9;
        this.nextIdleShift = now + 1600 + Math.random() * 2400;
      }
      this.targetGazeX = this.idleTargetX;
      this.targetGazeY = this.idleTargetY;
    }

    // Nội suy mượt mà hướng nhìn
    this.gazeX += (this.targetGazeX - this.gazeX) * 0.12;
    this.gazeY += (this.targetGazeY - this.gazeY) * 0.12;

    // Chớp mắt tự nhiên
    if (now > this.nextBlinkTime && !this.isBlinking) {
      this.isBlinking = true;
      this.blinkStartTime = now;
    }
    if (this.isBlinking) {
      const elapsed = now - this.blinkStartTime;
      const blinkDuration = 180;
      if (elapsed < blinkDuration) {
        this.blinkProgress = Math.sin((elapsed / blinkDuration) * Math.PI);
      } else {
        this.blinkProgress = 0;
        this.isBlinking = false;
        this.nextBlinkTime = now + 2800 + Math.random() * 3400;
      }
    }

    // Vật lý biến dạng đàn hồi Mochi 3D khi kéo chuột & lò xo nảy lại (Squash & Stretch)
    if (this.isDragging) {
      const rawDx = this.currentDragX - this.dragStartX;
      const rawDy = this.currentDragY - this.dragStartY;
      const rawDist = Math.hypot(rawDx, rawDy);
      const maxPull = 95;
      const tension = maxPull * Math.tanh(rawDist / maxPull);
      const angle = Math.atan2(rawDy, rawDx);

      const targetX = Math.cos(angle) * tension;
      const targetY = Math.sin(angle) * tension;

      const prevX = this.dispX;
      const prevY = this.dispY;
      this.dispX += (targetX - this.dispX) * 0.45;
      this.dispY += (targetY - this.dispY) * 0.45;
      this.velX = (this.dispX - prevX) * 0.85;
      this.velY = (this.dispY - prevY) * 0.85;
    } else {
      // Mô phỏng lò xo giảm chấn (Spring-Damper Physics)
      const springK = 0.12;
      const damping = 0.83;
      const ax = -springK * this.dispX;
      const ay = -springK * this.dispY;
      this.velX = (this.velX + ax) * damping;
      this.velY = (this.velY + ay) * damping;
      this.dispX += this.velX;
      this.dispY += this.velY;

      if (Math.hypot(this.dispX, this.dispY) < 0.12 && Math.hypot(this.velX, this.velY) < 0.12) {
        this.dispX = 0;
        this.dispY = 0;
        this.velX = 0;
        this.velY = 0;
      }
    }
  }

  draw() {
    const ctx = this.ctx;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.scale(this.dpr, this.dpr);

    const now = Date.now();
    const isCrying = now < this.cryUntil;

    // Căn giữa màn hình ô tương tác
    const cx = this.width / 2;
    const cy = this.height / 2 - 4;

    // 1. NỀN GRADIENT PASTEL HỒNG TÍM
    const bgGrad = ctx.createLinearGradient(0, 0, this.width, this.height);
    bgGrad.addColorStop(0, "#ffd3e2");    // hồng pastel ấm
    bgGrad.addColorStop(0.38, "#f3e0f7"); // tím hồng nhạt
    bgGrad.addColorStop(0.75, "#e2e4ff"); // tím xanh pastel
    bgGrad.addColorStop(1, "#d8dcff");    // xanh tím pastel dịu
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, this.width, this.height);

    const pullDist = Math.hypot(this.dispX, this.dispY);
    const pullAngle = Math.atan2(this.dispY, this.dispX);
    const stretch = 1 + (pullDist / 95) * 0.46;
    const squash = 1 / Math.sqrt(stretch);

    // 2. KÍCH THƯỚC KHUÔN MẶT TO NỔI BẬT + PHÓNG TO KHI ĐƯỢC CHO ĂN (Dynamic Large Sizing & Feeding Growth)
    const baseRx = Math.min(this.width * 0.32, this.height * 0.38, 110);
    const rx = baseRx * (this.growthScale || 1.0);
    const ry = rx * 0.94;
    this.rx = rx;

    // 3. BÓNG ĐỔ 3D MỀM BÊN DƯỚI (Soft Contact Shadow)
    const shadowY = cy + ry + 4 + (this.dispY * 0.22);
    const shadowRx = (rx * 0.88) * (pullDist > 0.01 ? (1 / Math.sqrt(stretch)) : 1);
    const shadowRy = (rx * 0.19) * (pullDist > 0.01 ? stretch : 1);
    const shadowGrad = ctx.createRadialGradient(cx + (this.dispX * 0.22), shadowY, 2, cx + (this.dispX * 0.22), shadowY, shadowRx);
    shadowGrad.addColorStop(0, "rgba(165, 155, 195, 0.45)");
    shadowGrad.addColorStop(0.5, "rgba(165, 155, 195, 0.2)");
    shadowGrad.addColorStop(1, "rgba(165, 155, 195, 0)");
    ctx.fillStyle = shadowGrad;
    ctx.beginPath();
    ctx.ellipse(cx + (this.dispX * 0.22), shadowY, shadowRx, shadowRy, 0, 0, Math.PI * 2);
    ctx.fill();

    // Di chuyển và biến dạng theo vật lý đàn hồi
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(this.dispX * 0.0015 + this.gazeX * 0.04);

    if (pullDist > 0.01) {
      ctx.translate(this.dispX * 0.58, this.dispY * 0.58);
      ctx.rotate(pullAngle);
      ctx.scale(stretch, squash);
      ctx.rotate(-pullAngle);
    }

    const px = this.gazeX * 8.5;
    const py = this.gazeY * 6.5;

    // 4. THÂN NHÂN VẬT MOCHI 3D (Đổi màu dần dần theo bánh vừa ăn)
    ctx.beginPath();
    ctx.moveTo(0, -ry);
    ctx.bezierCurveTo(rx * 0.95, -ry * 0.95, rx * 1.05, -ry * 0.1, rx * 1.03, rx * 0.20);
    ctx.bezierCurveTo(rx * 0.98, ry * 0.82, rx * 0.55, ry * 1.02, 0, ry * 1.02);
    ctx.bezierCurveTo(-rx * 0.55, ry * 1.02, -rx * 0.98, ry * 0.82, -rx * 1.03, rx * 0.20);
    ctx.bezierCurveTo(-rx * 1.05, -ry * 0.1, -rx * 0.95, -ry * 0.95, 0, -ry);
    ctx.closePath();

    // Hiệu ứng ánh sáng 3D chuyển sắc từ từ theo bánh ăn
    const p = this.currentPalette;
    const rgbStr = (arr) => `rgb(${Math.round(arr[0])}, ${Math.round(arr[1])}, ${Math.round(arr[2])})`;
    const rgbaStr = (arr) => `rgba(${Math.round(arr[0])}, ${Math.round(arr[1])}, ${Math.round(arr[2])}, ${arr[3]})`;

    const lightX = -rx * 0.32 + px * 0.45;
    const lightY = -ry * 0.38 + py * 0.45;
    const bodyGrad = ctx.createRadialGradient(lightX, lightY, rx * 0.15, 0, 10, rx * 1.15);
    bodyGrad.addColorStop(0, rgbStr(p.c0));
    bodyGrad.addColorStop(0.52, rgbStr(p.c1));
    bodyGrad.addColorStop(0.80, rgbStr(p.c2));
    bodyGrad.addColorStop(0.95, rgbStr(p.c3));
    bodyGrad.addColorStop(1, rgbStr(p.c4));
    ctx.fillStyle = bodyGrad;
    ctx.fill();

    // Viền stroke mềm mại
    ctx.strokeStyle = rgbaStr(p.stroke);
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Ánh sáng phản xạ môi trường (Ambient Rim Light)
    const rimGrad = ctx.createRadialGradient(rx * 0.55, ry * 0.55, 15, rx * 0.55, ry * 0.55, rx * 0.75);
    rimGrad.addColorStop(0, rgbaStr(p.rim));
    rimGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = rimGrad;
    ctx.fill();

    // 5. VỆT MÁ HỒNG (Đỏ rực 2 má khi khóc, khi kéo hoặc khi ăn bánh ngon)
    const remainingBlush = this.blushUntil - now;
    let blushFactor = isCrying ? 1.0 : 0;
    if (!isCrying && remainingBlush > 0) {
      blushFactor = remainingBlush > 800 ? 1.0 : remainingBlush / 800;
    }

    [-1, 1].forEach((dir) => {
      const blushX = dir * (rx * 0.62) + px * 0.5;
      const blushY = rx * 0.10 + py * 0.5;
      ctx.save();
      ctx.translate(blushX, blushY);
      ctx.rotate(dir * 0.22);
      const bW = rx * 0.20 + blushFactor * 5;
      const bH = rx * 0.11 + blushFactor * 4;
      const blushGrad = ctx.createRadialGradient(0, 0, 1, 0, 0, bW);
      if (blushFactor > 0.01) {
        blushGrad.addColorStop(0, `rgba(244, 63, 94, ${0.45 + blushFactor * 0.5})`);
        blushGrad.addColorStop(0.5, `rgba(251, 113, 133, ${0.25 + blushFactor * 0.45})`);
        blushGrad.addColorStop(1, "rgba(244, 63, 94, 0)");
      } else {
        blushGrad.addColorStop(0, "rgba(244, 114, 182, 0.72)");
        blushGrad.addColorStop(0.5, "rgba(244, 114, 182, 0.4)");
        blushGrad.addColorStop(1, "rgba(244, 114, 182, 0)");
      }
      ctx.fillStyle = blushGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, bW, bH, 0, 0, Math.PI * 2);
      ctx.fill();

      // Nét vẽ má hồng ngượng ngùng cute
      if (blushFactor > 0.3) {
        ctx.strokeStyle = `rgba(225, 29, 72, ${blushFactor * 0.75})`;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        for (let i = -1; i <= 1; i++) {
          ctx.beginPath();
          ctx.moveTo(i * 5 - 2, 4);
          ctx.lineTo(i * 5 + 2, -4);
          ctx.stroke();
        }
      }

      ctx.restore();
    });

    // 6. ĐÔI MẮT 3D TO TRÒN LIẾC NHÌN THEO CHUỘT (Hoặc Nhắm Khóc > < / Nhắm Cười ^ ^)
    const eyeSpacing = rx * 0.36;
    const eyeY = rx * 0.07 + py;
    const outerEyeW = rx * 0.26;
    const outerEyeH = (rx * 0.28) * (1 - this.blinkProgress * 0.95);

    const isChewing = this.isEating && (now - this.eatingStart) > 300 && (now - this.eatingStart) < 1850;

    [-1, 1].forEach((dir) => {
      const eyeX = dir * eyeSpacing + px;

      // Lông mày biểu cảm
      if (this.currentEmotion === "shocked") {
        // Lông mày nhướng cao hoang mang lo lắng 😧
        ctx.beginPath();
        ctx.moveTo(eyeX - dir * 10, eyeY - rx * 0.22);
        ctx.quadraticCurveTo(eyeX, eyeY - rx * 0.28, eyeX + dir * 11, eyeY - rx * 0.20);
        ctx.lineWidth = 2.4;
        ctx.strokeStyle = "#1e1e2d";
        ctx.lineCap = "round";
        ctx.stroke();
      } else if (this.currentEmotion === "unamused") {
        // Lông mày cau lại chán nản 😒
        ctx.beginPath();
        ctx.moveTo(eyeX - dir * 10, eyeY - rx * 0.20 + dir * 2);
        ctx.lineTo(eyeX + dir * 10, eyeY - rx * 0.18 - dir * 2);
        ctx.lineWidth = 2.4;
        ctx.strokeStyle = "#1e1e2d";
        ctx.lineCap = "round";
        ctx.stroke();
      }

      if (isCrying) {
        // Đôi mắt khóc mếu máo nhắm tịt > < cực đáng yêu
        const eyeSign = dir;
        ctx.beginPath();
        ctx.moveTo(eyeX - eyeSign * 11, eyeY - 8);
        ctx.lineTo(eyeX + eyeSign * 8, eyeY);
        ctx.lineTo(eyeX - eyeSign * 11, eyeY + 8);
        ctx.lineWidth = 3.6;
        ctx.strokeStyle = "#1e1e2d";
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      } else if (isChewing || this.currentEmotion === "happy") {
        // Mắt cười tít đáng yêu ^ ^
        ctx.beginPath();
        ctx.arc(eyeX, eyeY + 2, rx * 0.16, Math.PI * 1.15, Math.PI * 1.85);
        ctx.lineWidth = 3.4;
        ctx.strokeStyle = "#1e1e2d";
        ctx.lineCap = "round";
        ctx.stroke();
      } else if (this.currentEmotion === "love") {
        // Mắt trái tim đập thình thịch cực yêu 😍
        const heartBeat = 0.9 + Math.sin(now * 0.01) * 0.14;
        ctx.save();
        ctx.translate(eyeX, eyeY);
        ctx.scale(heartBeat, heartBeat);
        ctx.fillStyle = "#f43f5e";
        const hr = rx * 0.11;
        ctx.beginPath();
        ctx.arc(-hr * 0.45, -hr * 0.35, hr * 0.5, Math.PI, 0);
        ctx.arc(hr * 0.45, -hr * 0.35, hr * 0.5, Math.PI, 0);
        ctx.lineTo(0, hr * 0.75);
        ctx.closePath();
        ctx.fill();

        // Ánh sáng lấp lánh trên mắt trái tim
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(-hr * 0.42, -hr * 0.4, hr * 0.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      } else if (this.currentEmotion === "sleepy") {
        // Mắt buồn ngủ nhắm tịt ngủ gật 😪
        ctx.beginPath();
        ctx.arc(eyeX, eyeY + 1, rx * 0.15, 0.15 * Math.PI, 0.85 * Math.PI);
        ctx.lineWidth = 3.2;
        ctx.strokeStyle = "#1e1e2d";
        ctx.lineCap = "round";
        ctx.stroke();
      } else if (this.blinkProgress > 0.65 || outerEyeH < 3) {
        // Khi chớp mắt
        ctx.beginPath();
        ctx.arc(eyeX, eyeY - 2, rx * 0.17, Math.PI * 0.15, Math.PI * 0.85);
        ctx.lineWidth = 3.2;
        ctx.strokeStyle = "#1e1e2d";
        ctx.lineCap = "round";
        ctx.stroke();
      } else {
        // Hốc mắt / Vòng ngoài tròng mắt
        ctx.beginPath();
        ctx.ellipse(eyeX, eyeY, outerEyeW, outerEyeH, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#f5f6fb";
        ctx.fill();
        ctx.strokeStyle = "rgba(218, 224, 238, 0.85)";
        ctx.lineWidth = 1.3;
        ctx.stroke();

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(eyeX, eyeY, outerEyeW - 0.5, outerEyeH - 0.5, 0, 0, Math.PI * 2);
        ctx.clip();

        let pupilOffsetX = this.gazeX * (rx * 0.095);
        let pupilOffsetY = this.gazeY * (rx * 0.075);
        let pupilR = rx * 0.145;

        if (this.currentEmotion === "shocked") {
          // Mắt hoang mang co nhỏ con ngươi và run rẩy 😧
          pupilR = rx * 0.085;
          pupilOffsetX += Math.sin(now * 0.04) * 1.5;
          pupilOffsetY += Math.cos(now * 0.04) * 1.5;
        } else if (this.currentEmotion === "rolling") {
          // Đảo mắt lên tận trần nhà 🙄
          pupilOffsetY = -outerEyeH * 0.52;
          pupilOffsetX = 0;
        } else if (this.currentEmotion === "unamused") {
          // Mắt liếc xéo chán nản 😒
          pupilOffsetX = -rx * 0.08;
          pupilOffsetY = 0;
        } else if (this.currentEmotion === "lie") {
          // Mắt đảo liếc ngượng ngùng nói dối 🤥
          pupilOffsetX = dir === 1 ? -rx * 0.07 : rx * 0.07;
        }

        const pupilX = eyeX + pupilOffsetX;
        const pupilY = eyeY + pupilOffsetY;

        // Tròng đen ánh tím sâu bóng bẩy
        const pupilGrad = ctx.createRadialGradient(pupilX - 2, pupilY - 2, 1, pupilX, pupilY, pupilR);
        pupilGrad.addColorStop(0, "#28273d");
        pupilGrad.addColorStop(0.7, "#1c1b2b");
        pupilGrad.addColorStop(1, "#12111d");

        ctx.beginPath();
        ctx.arc(pupilX, pupilY, pupilR, 0, Math.PI * 2);
        ctx.fillStyle = pupilGrad;
        ctx.fill();

        // Điểm phản quang chính (Catchlight): Đốm sáng trắng tinh ở góc trên
        ctx.beginPath();
        ctx.arc(pupilX - (rx * 0.036), pupilY - (rx * 0.04), rx * 0.049, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        // Điểm phản quang phụ nhỏ li ti ở góc dưới
        ctx.beginPath();
        ctx.arc(pupilX + (rx * 0.04), pupilY + (rx * 0.04), rx * 0.02, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.fill();

        // Mí mắt sụp xuống nửa mắt cho cảm xúc chán nản 😒
        if (this.currentEmotion === "unamused") {
          ctx.fillStyle = "rgba(235, 225, 245, 0.95)";
          ctx.beginPath();
          ctx.rect(eyeX - outerEyeW - 2, eyeY - outerEyeH - 2, outerEyeW * 2 + 4, outerEyeH + 2);
          ctx.fill();
          ctx.strokeStyle = "#1e1e2d";
          ctx.lineWidth = 2.2;
          ctx.beginPath();
          ctx.moveTo(eyeX - outerEyeW, eyeY);
          ctx.lineTo(eyeX + outerEyeW, eyeY + 1);
          ctx.stroke();
        }

        ctx.restore();
      }
    });

    // 7. DÒNG NƯỚC MẮT CHẢY KHI KHÓC (Khi bị kéo hoặc 5 giây sau khi kéo)
    if (isCrying) {
      const tearTime = now * 0.015;
      [-1, 1].forEach((dir) => {
        const tearSourceX = dir * (eyeSpacing + rx * 0.14) + px;
        const tearSourceY = eyeY + 2;

        ctx.save();
        // Dòng nước mắt uốn lượn anime chảy dài xuống
        ctx.beginPath();
        ctx.moveTo(tearSourceX, tearSourceY);
        ctx.bezierCurveTo(
          tearSourceX + dir * (rx * 0.12) + Math.sin(tearTime * 1.5) * 3, tearSourceY + ry * 0.35,
          tearSourceX + dir * (rx * 0.18) + Math.cos(tearTime * 1.2) * 4, tearSourceY + ry * 0.7,
          tearSourceX + dir * (rx * 0.14), ry * 0.95
        );
        ctx.lineWidth = rx * 0.085;
        ctx.strokeStyle = "rgba(56, 189, 248, 0.75)";
        ctx.lineCap = "round";
        ctx.stroke();

        // Vạch phản quang trắng sáng giữa dòng nước mắt
        ctx.lineWidth = rx * 0.035;
        ctx.strokeStyle = "rgba(255, 255, 255, 0.9)";
        ctx.stroke();

        // Giọt lệ to tròn đọng ở khóe mắt
        ctx.beginPath();
        ctx.arc(tearSourceX, tearSourceY, rx * 0.065, 0, Math.PI * 2);
        ctx.fillStyle = "#38bdf8";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(tearSourceX - 1.5, tearSourceY - 1.5, rx * 0.025, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();
        ctx.restore();
      });
    }

    // 8. MIỆNG CƯỜI CONG NHỎ XINH ◡ HOẶC MẾU MÁO KHÓC / NHAI NHÓP NHÉP
    const mouthX = px * 0.45;
    const mouthY = rx * 0.36 + py * 0.45;

    if (isCrying) {
      // Miệng mếu máo khóc ròng ︵
      const cryW = rx * 0.18;
      const cryH = 9 + Math.sin(now * 0.025) * 3;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(mouthX - cryW, mouthY + cryH * 0.5);
      ctx.quadraticCurveTo(mouthX, mouthY - cryH * 0.8, mouthX + cryW, mouthY + cryH * 0.5);
      ctx.quadraticCurveTo(mouthX, mouthY + cryH * 0.2, mouthX - cryW, mouthY + cryH * 0.5);
      ctx.fillStyle = "#2c0b14";
      ctx.fill();
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = "#1e1e2d";
      ctx.stroke();

      ctx.clip();
      ctx.fillStyle = "#fb7185";
      ctx.beginPath();
      ctx.arc(mouthX, mouthY + cryH * 0.5, cryW * 0.65, Math.PI, 0);
      ctx.fill();
      ctx.restore();
    } else if (this.isEating) {
      // Miệng nhóp nhép ăn bánh
      const openH = Math.max(5, this.chewProgress * 22);
      const openW = Math.max(10, rx * 0.18 - this.chewProgress * 3);

      ctx.save();
      ctx.beginPath();
      ctx.ellipse(mouthX, mouthY + openH * 0.25, openW, openH, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#2c0b14";
      ctx.fill();
      ctx.clip();

      ctx.fillStyle = "#fb7185";
      ctx.beginPath();
      ctx.arc(mouthX, mouthY + openH * 0.25 + openH * 0.65, openW * 0.85, Math.PI, 0);
      ctx.fill();
      ctx.restore();

      ctx.beginPath();
      ctx.ellipse(mouthX, mouthY + openH * 0.25, openW, openH, 0, 0, Math.PI * 2);
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = "#1e1e2d";
      ctx.stroke();
    } else if (this.currentEmotion === "happy") {
      // Miệng cười to vui sướng 😄
      const openW = rx * 0.19;
      const openH = rx * 0.14;
      ctx.save();
      ctx.beginPath();
      ctx.arc(mouthX, mouthY - 3, openW, 0, Math.PI);
      ctx.fillStyle = "#4c0519";
      ctx.fill();
      ctx.clip();
      ctx.beginPath();
      ctx.arc(mouthX, mouthY + openH * 0.35, openW * 0.85, Math.PI, 0);
      ctx.fillStyle = "#fb7185";
      ctx.fill();
      ctx.restore();
      ctx.beginPath();
      ctx.arc(mouthX, mouthY - 3, openW, 0, Math.PI);
      ctx.lineWidth = 2.4;
      ctx.strokeStyle = "#1e1e2d";
      ctx.stroke();
    } else if (this.currentEmotion === "love") {
      // Miệng chúm chím hình số 3 cực yêu :3 😍
      ctx.beginPath();
      ctx.arc(mouthX - rx * 0.055, mouthY, rx * 0.065, 0, Math.PI * 0.95);
      ctx.lineWidth = 2.4;
      ctx.strokeStyle = "#1e1e2d";
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(mouthX + rx * 0.055, mouthY, rx * 0.065, Math.PI * 0.05, Math.PI);
      ctx.lineWidth = 2.4;
      ctx.strokeStyle = "#1e1e2d";
      ctx.lineCap = "round";
      ctx.stroke();
    } else if (this.currentEmotion === "nerd") {
      // Miệng giáo sư AI mỉm cười + 2 răng thỏ thông thái 🤓
      const mOpenW = rx * 0.12;
      ctx.beginPath();
      ctx.arc(mouthX, mouthY - 3, mOpenW, 0.1 * Math.PI, 0.9 * Math.PI);
      ctx.lineWidth = 2.4;
      ctx.strokeStyle = "#1e1e2d";
      ctx.lineCap = "round";
      ctx.stroke();
      ctx.fillStyle = "#ffffff";
      ctx.strokeStyle = "#1e1e2d";
      ctx.lineWidth = 1.2;
      ctx.fillRect(mouthX - 4.5, mouthY + 1.5, 4, 4.5);
      ctx.strokeRect(mouthX - 4.5, mouthY + 1.5, 4, 4.5);
      ctx.fillRect(mouthX + 0.5, mouthY + 1.5, 4, 4.5);
      ctx.strokeRect(mouthX + 0.5, mouthY + 1.5, 4, 4.5);
    } else if (this.currentEmotion === "shocked") {
      // Miệng há hốc hoang mang lo lắng 😧
      const shockW = rx * 0.105;
      const shockH = rx * 0.145;
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(mouthX, mouthY + 3, shockW, shockH, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#3b0712";
      ctx.fill();
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = "#1e1e2d";
      ctx.stroke();
      ctx.clip();
      ctx.fillStyle = "#f43f5e";
      ctx.beginPath();
      ctx.ellipse(mouthX, mouthY + 3 + shockH * 0.6, shockW * 0.8, shockH * 0.5, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    } else if (this.currentEmotion === "lie") {
      // Miệng gợn sóng bối rối nói dối 🤥
      ctx.beginPath();
      ctx.moveTo(mouthX - rx * 0.10, mouthY + 2);
      ctx.bezierCurveTo(mouthX - rx * 0.04, mouthY - 3, mouthX + rx * 0.04, mouthY + 6, mouthX + rx * 0.10, mouthY + 1);
      ctx.lineWidth = 2.4;
      ctx.strokeStyle = "#1e1e2d";
      ctx.lineCap = "round";
      ctx.stroke();
    } else if (this.currentEmotion === "sleepy") {
      // Miệng ngủ say ngáy khò khò 😪
      ctx.beginPath();
      ctx.ellipse(mouthX - 2, mouthY + 2, rx * 0.05, rx * 0.06, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#2c0b14";
      ctx.fill();
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = "#1e1e2d";
      ctx.stroke();
    } else if (this.currentEmotion === "unamused") {
      // Miệng liếc chán nản thẳng tuột nghiêng 😒
      ctx.beginPath();
      ctx.moveTo(mouthX - rx * 0.11, mouthY + 1);
      ctx.lineTo(mouthX + rx * 0.11, mouthY - 3);
      ctx.lineWidth = 2.6;
      ctx.strokeStyle = "#1e1e2d";
      ctx.lineCap = "round";
      ctx.stroke();
    } else if (this.currentEmotion === "rolling") {
      // Miệng đảo mắt bất lực mím nhẹ 🙄
      ctx.beginPath();
      ctx.moveTo(mouthX - rx * 0.09, mouthY);
      ctx.lineTo(mouthX + rx * 0.09, mouthY);
      ctx.lineWidth = 2.4;
      ctx.strokeStyle = "#1e1e2d";
      ctx.lineCap = "round";
      ctx.stroke();
    } else if (pullDist < 7) {
      // Đường cong lưỡi liềm mỉm cười nhỏ xinh
      ctx.beginPath();
      ctx.arc(mouthX, mouthY - 4, rx * 0.103, Math.PI * 0.22, Math.PI * 0.78);
      ctx.lineWidth = 2.4;
      ctx.strokeStyle = "#1e1e2d";
      ctx.lineCap = "round";
      ctx.stroke();
    } else {
      // Miệng mở chữ O khi kéo
      const openH = Math.min(6 + pullDist * 0.35, 24);
      const openW = Math.max(10, rx * 0.18 - pullDist * 0.05);

      ctx.save();
      ctx.beginPath();
      ctx.ellipse(mouthX, mouthY + openH * 0.25, openW, openH, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#2c0b14";
      ctx.fill();
      ctx.clip();

      ctx.fillStyle = "#fb7185";
      ctx.beginPath();
      ctx.arc(mouthX, mouthY + openH * 0.25 + openH * 0.65, openW * 0.85, Math.PI, 0);
      ctx.fill();
      ctx.restore();

      ctx.beginPath();
      ctx.ellipse(mouthX, mouthY + openH * 0.25, openW, openH, 0, 0, Math.PI * 2);
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = "#1e1e2d";
      ctx.stroke();
    }

    // 9. VẼ PHỤ KIỆN KÍNH: Kính cận mọt sách 🤓 hoặc Kính đen ngầu 😎
    if (this.glasses === "nerd" || this.currentEmotion === "nerd") {
      const rimR = rx * 0.22;
      const frameY = eyeY;
      ctx.save();

      [-1, 1].forEach((dir) => {
        const gx = dir * eyeSpacing + px;
        ctx.beginPath();
        ctx.arc(gx, frameY, rimR, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.22)";
        ctx.fill();
        ctx.lineWidth = 3.6;
        ctx.strokeStyle = "#27272a";
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(gx, frameY, rimR - 2.5, 0, Math.PI * 2);
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = "rgba(234, 179, 8, 0.85)";
        ctx.stroke();

        // Vệt lóa kính tri thức
        ctx.save();
        ctx.beginPath();
        ctx.arc(gx, frameY, rimR - 3, 0, Math.PI * 2);
        ctx.clip();
        ctx.beginPath();
        ctx.moveTo(gx - rimR, frameY - rimR * 0.2);
        ctx.lineTo(gx + rimR * 0.4, frameY - rimR);
        ctx.lineTo(gx + rimR * 0.8, frameY - rimR);
        ctx.lineTo(gx - rimR * 0.6, frameY + rimR * 0.4);
        ctx.closePath();
        ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
        ctx.fill();
        ctx.restore();
      });

      // Cầu kính ở giữa
      ctx.beginPath();
      ctx.arc(px, frameY - 4, eyeSpacing * 0.5, Math.PI * 1.2, Math.PI * 1.8);
      ctx.lineWidth = 3.6;
      ctx.strokeStyle = "#27272a";
      ctx.stroke();

      // Càng kính hai bên
      [-1, 1].forEach((dir) => {
        const gx = dir * (eyeSpacing + rimR) + px;
        ctx.beginPath();
        ctx.moveTo(gx, frameY - 2);
        ctx.lineTo(gx + dir * (rx * 0.24), frameY - 5);
        ctx.lineWidth = 3.4;
        ctx.strokeStyle = "#27272a";
        ctx.stroke();
      });

      ctx.restore();
    } else if (this.glasses === "sun" || this.currentEmotion === "cool") {
      ctx.save();
      const sunW = rx * 0.32;
      const sunH = rx * 0.25;
      const frameY = eyeY - 2;

      [-1, 1].forEach((dir) => {
        const gx = dir * (eyeSpacing * 1.05) + px;
        ctx.save();
        ctx.translate(gx, frameY);
        ctx.rotate(dir * 0.05);

        ctx.beginPath();
        ctx.moveTo(-sunW * 0.5, -sunH * 0.45);
        ctx.lineTo(sunW * 0.5, -sunH * 0.45);
        ctx.bezierCurveTo(sunW * 0.55, sunH * 0.4, sunW * 0.25, sunH * 0.6, 0, sunH * 0.55);
        ctx.bezierCurveTo(-sunW * 0.25, sunH * 0.6, -sunW * 0.55, sunH * 0.4, -sunW * 0.5, -sunH * 0.45);
        ctx.closePath();

        const darkGrad = ctx.createLinearGradient(0, -sunH * 0.5, 0, sunH * 0.6);
        darkGrad.addColorStop(0, "#27272a");
        darkGrad.addColorStop(0.5, "#18181b");
        darkGrad.addColorStop(1, "#09090b");
        ctx.fillStyle = darkGrad;
        ctx.fill();

        ctx.lineWidth = 2.5;
        ctx.strokeStyle = "#09090b";
        ctx.stroke();

        // Vệt bóng phản quang chéo sáng loáng
        ctx.save();
        ctx.clip();
        ctx.beginPath();
        ctx.moveTo(-sunW * 0.8, -sunH);
        ctx.lineTo(sunW * 0.2, -sunH);
        ctx.lineTo(-sunW * 0.2, sunH);
        ctx.lineTo(-sunW * 1.2, sunH);
        ctx.closePath();
        ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
        ctx.fill();
        ctx.restore();

        ctx.restore();
      });

      // Cầu kính ngang
      ctx.beginPath();
      ctx.moveTo(-eyeSpacing * 0.45 + px, frameY - sunH * 0.3);
      ctx.lineTo(eyeSpacing * 0.45 + px, frameY - sunH * 0.3);
      ctx.lineWidth = 4;
      ctx.strokeStyle = "#18181b";
      ctx.lineCap = "round";
      ctx.stroke();

      ctx.restore();
    }

    // 9.1 MŨI DÀI PINOCCHIO (🤥)
    if (this.currentEmotion === "lie") {
      const noseStartX = px * 0.45;
      const noseStartY = eyeY + rx * 0.12;
      const noseLength = rx * 0.82;
      const noseH = rx * 0.095;
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(noseStartX, noseStartY - noseH * 0.45);
      ctx.lineTo(noseStartX + noseLength, noseStartY - noseH * 0.25);
      ctx.arc(noseStartX + noseLength, noseStartY, noseH * 0.42, -Math.PI * 0.5, Math.PI * 0.5);
      ctx.lineTo(noseStartX, noseStartY + noseH * 0.45);
      ctx.closePath();

      const woodGrad = ctx.createLinearGradient(noseStartX, 0, noseStartX + noseLength, 0);
      woodGrad.addColorStop(0, "#fed7aa");
      woodGrad.addColorStop(0.5, "#fdba74");
      woodGrad.addColorStop(1, "#fb923c");
      ctx.fillStyle = woodGrad;
      ctx.fill();
      ctx.lineWidth = 2.0;
      ctx.strokeStyle = "#c2410c";
      ctx.stroke();

      // Đốm hồng chóp mũi
      ctx.beginPath();
      ctx.arc(noseStartX + noseLength - 1, noseStartY, noseH * 0.32, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(244, 63, 94, 0.5)";
      ctx.fill();
      ctx.restore();
    }

    // 9.2 BÓNG NƯỚC MŨI NGỦ GẬT ANIME (😪)
    if (this.currentEmotion === "sleepy") {
      const bubblePulse = Math.sin(now * 0.004);
      const bubbleR = rx * (0.16 + bubblePulse * 0.07);
      const bubbleX = mouthX + rx * 0.13;
      const bubbleY = eyeY + rx * 0.17;
      ctx.save();
      ctx.beginPath();
      ctx.arc(bubbleX, bubbleY, Math.max(3, bubbleR), 0, Math.PI * 2);
      const bGrad = ctx.createRadialGradient(
        bubbleX - bubbleR * 0.3,
        bubbleY - bubbleR * 0.3,
        1,
        bubbleX,
        bubbleY,
        bubbleR
      );
      bGrad.addColorStop(0, "rgba(224, 242, 254, 0.95)");
      bGrad.addColorStop(0.5, "rgba(56, 189, 248, 0.65)");
      bGrad.addColorStop(1, "rgba(2, 132, 199, 0.8)");
      ctx.fillStyle = bGrad;
      ctx.fill();
      ctx.lineWidth = 1.6;
      ctx.strokeStyle = "rgba(186, 230, 253, 0.9)";
      ctx.stroke();

      // Vệt sáng lóa bong bóng
      ctx.beginPath();
      ctx.arc(
        bubbleX - bubbleR * 0.35,
        bubbleY - bubbleR * 0.35,
        Math.max(1, bubbleR * 0.28),
        0,
        Math.PI * 2
      );
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Chữ Zzz bay lơ lửng
      const zProgress = (now * 0.0012) % 1;
      ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
      ctx.fillStyle = `rgba(59, 130, 246, ${Math.max(0, 1 - zProgress)})`;
      ctx.fillText("Zzz", bubbleX + bubbleR + 4, bubbleY - zProgress * 22);
      ctx.restore();
    }

    // 10. VẼ PHỤ KIỆN NÓN: Nón cao bồi 🤠 hoặc Nón lưỡi trai 🧢
    if (this.hat === "cowboy") {
      ctx.save();
      const hatY = -ry + rx * 0.05 + py * 0.3;
      ctx.translate(px * 0.3, hatY);

      // Vành nón cao bồi uốn lượn cong 2 bên
      const brimW = rx * 1.35;
      const brimH = rx * 0.26;
      ctx.beginPath();
      ctx.moveTo(-brimW * 0.5, 0);
      ctx.bezierCurveTo(-brimW * 0.35, -brimH * 0.8, brimW * 0.35, -brimH * 0.8, brimW * 0.5, 0);
      ctx.bezierCurveTo(brimW * 0.4, brimH * 0.6, -brimW * 0.4, brimH * 0.6, -brimW * 0.5, 0);
      ctx.closePath();

      const brimGrad = ctx.createLinearGradient(0, -brimH, 0, brimH);
      brimGrad.addColorStop(0, "#b45309");
      brimGrad.addColorStop(0.5, "#92400e");
      brimGrad.addColorStop(1, "#78350f");
      ctx.fillStyle = brimGrad;
      ctx.fill();
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = "#451a03";
      ctx.stroke();

      // Chóp nón cao bồi có rãnh khuyết ở giữa
      const crownW = rx * 0.68;
      const crownH = rx * 0.55;
      ctx.beginPath();
      ctx.moveTo(-crownW * 0.45, -brimH * 0.3);
      ctx.bezierCurveTo(-crownW * 0.5, -crownH * 0.8, -crownW * 0.25, -crownH * 1.05, 0, -crownH * 0.88);
      ctx.bezierCurveTo(crownW * 0.25, -crownH * 1.05, crownW * 0.5, -crownH * 0.8, crownW * 0.45, -brimH * 0.3);
      ctx.closePath();

      const crownGrad = ctx.createLinearGradient(0, -crownH, 0, 0);
      crownGrad.addColorStop(0, "#d97706");
      crownGrad.addColorStop(0.6, "#b45309");
      crownGrad.addColorStop(1, "#78350f");
      ctx.fillStyle = crownGrad;
      ctx.fill();
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = "#451a03";
      ctx.stroke();

      // Đai da sẫm quấn quanh chóp
      ctx.beginPath();
      ctx.moveTo(-crownW * 0.46, -brimH * 0.3);
      ctx.lineTo(crownW * 0.46, -brimH * 0.3);
      ctx.lineTo(crownW * 0.44, -brimH * 0.3 - 7);
      ctx.lineTo(-crownW * 0.44, -brimH * 0.3 - 7);
      ctx.closePath();
      ctx.fillStyle = "#292524";
      ctx.fill();

      // Ngôi sao nhỏ
      ctx.beginPath();
      ctx.arc(0, -brimH * 0.3 - 3.5, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#fbbf24";
      ctx.fill();

      ctx.restore();
    } else if (this.hat === "cap") {
      ctx.save();
      const capY = -ry + rx * 0.12 + py * 0.3;
      ctx.translate(px * 0.3, capY);

      // Chóp nón tròn ôm sát đầu (Dome)
      const domeW = rx * 0.82;
      const domeH = rx * 0.46;
      ctx.beginPath();
      ctx.moveTo(-domeW * 0.5, 0);
      ctx.bezierCurveTo(-domeW * 0.55, -domeH * 1.1, domeW * 0.55, -domeH * 1.1, domeW * 0.5, 0);
      ctx.closePath();

      const capGrad = ctx.createLinearGradient(0, -domeH, 0, 0);
      capGrad.addColorStop(0, "#60a5fa");
      capGrad.addColorStop(0.5, "#3b82f6");
      capGrad.addColorStop(1, "#1d4ed8");
      ctx.fillStyle = capGrad;
      ctx.fill();
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = "#1e3a8a";
      ctx.stroke();

      // Đường chỉ may giữa nón
      ctx.beginPath();
      ctx.moveTo(0, -domeH * 0.95);
      ctx.lineTo(0, 0);
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
      ctx.stroke();

      // Núm tròn trên đỉnh nón (Button)
      ctx.beginPath();
      ctx.arc(0, -domeH * 0.96, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = "#fbbf24";
      ctx.fill();

      // Vành lưỡi trai cong vươn ra đằng trước
      const visorW = rx * 0.96;
      const visorH = rx * 0.18;
      ctx.beginPath();
      ctx.moveTo(-visorW * 0.48, 0);
      ctx.bezierCurveTo(-visorW * 0.25, visorH * 1.3, visorW * 0.25, visorH * 1.3, visorW * 0.48, 0);
      ctx.bezierCurveTo(visorW * 0.2, visorH * 0.5, -visorW * 0.2, visorH * 0.5, -visorW * 0.48, 0);
      ctx.closePath();

      const visorGrad = ctx.createLinearGradient(0, 0, 0, visorH);
      visorGrad.addColorStop(0, "#2563eb");
      visorGrad.addColorStop(1, "#1e40af");
      ctx.fillStyle = visorGrad;
      ctx.fill();
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = "#1e3a8a";
      ctx.stroke();

      ctx.restore();
    }

    ctx.restore(); // Kết thúc biến dạng cục bộ

    // 11. VỤN BÁNH / TRÁI TIM BAY KHI ĂN
    if (this.crumbs && this.crumbs.length > 0) {
      this.crumbs.forEach((c) => {
        ctx.save();
        ctx.globalAlpha = Math.max(0, c.life);
        ctx.fillStyle = c.col;
        ctx.translate(c.x, c.y);
        ctx.scale(c.scale, c.scale);
        if (c.isHeart) {
          ctx.beginPath();
          ctx.arc(-2.2, -2, 2.5, Math.PI, 0);
          ctx.arc(2.2, -2, 2.5, Math.PI, 0);
          ctx.lineTo(0, 4.5);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, c.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });
    }

    // 12. HIỆU ỨNG VỤ NỔ KHI ĂN QUÁ 5 LẦN (💥 BÙÙÙM!)
    if (this.explosionParticles && this.explosionParticles.length > 0) {
      this.explosionParticles.forEach((p) => {
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.translate(p.x, p.y);
        if (p.isStar) {
          const r = p.r * 1.3;
          ctx.beginPath();
          for (let i = 0; i < 5; i++) {
            ctx.lineTo(
              Math.cos(((18 + i * 72) * Math.PI) / 180) * r,
              -Math.sin(((18 + i * 72) * Math.PI) / 180) * r
            );
            ctx.lineTo(
              Math.cos(((54 + i * 72) * Math.PI) / 180) * (r * 0.45),
              -Math.sin(((54 + i * 72) * Math.PI) / 180) * (r * 0.45)
            );
          }
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      // Vòng sóng xung kích (Shockwave) & Chữ BÙM
      if (this.isExploding) {
        const timeSinceExp = now - this.explosionTime;
        if (timeSinceExp < 750) {
          const waveProgress = timeSinceExp / 750;
          ctx.save();
          ctx.beginPath();
          ctx.arc(cx, cy, waveProgress * (this.width * 0.65), 0, Math.PI * 2);
          ctx.lineWidth = 6 * (1 - waveProgress);
          ctx.strokeStyle = `rgba(244, 63, 94, ${0.85 * (1 - waveProgress)})`;
          ctx.stroke();

          // Chữ comic 💥 BÙÙÙM!
          const textScale = Math.sin(Math.min(1, waveProgress * 2.5) * Math.PI * 0.5);
          ctx.font = `900 ${Math.round(28 * textScale)}px "Plus Jakarta Sans", sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#ffed4a";
          ctx.strokeStyle = "#e11d48";
          ctx.lineWidth = 4;
          ctx.strokeText("💥 BÙÙÙM!", cx, cy - 10);
          ctx.fillText("💥 BÙÙÙM!", cx, cy - 10);
          ctx.restore();
        }
      }
    }

    ctx.restore(); // Khôi phục ma trận gốc
  }

  loop() {
    this.update();
    this.draw();
    this.rafId = requestAnimationFrame(this.loop);
  }
}

// Khởi tạo Khuôn Mặt AI Tương Tác
function initInteractiveFace() {
  if (aiFaceInstance) {
    aiFaceInstance.destroy();
    aiFaceInstance = null;
  }
  const canvas = document.getElementById("aiFaceCanvas");
  if (!canvas) return;
  aiFaceInstance = new AIFaceTracker(canvas);
}

// View Mode for Course Sessions: "mochi" (Interactive Mochi Face Mascot & Speech Bubbles) or "list" (Traditional text list)
let currentSessionViewMode = "mochi";
let activeModalSession = null; // { catId, trackIdx, sessionIdx }
let mochiSyllabusInstance = null;

// Switch active track inside a category page
window.selectCategoryTrack = function (catId, trackIdx) {
  if (mochiSyllabusInstance) {
    mochiSyllabusInstance.destroy();
    mochiSyllabusInstance = null;
  }
  activeTrackIdxMap[catId] = trackIdx;
  renderMainView();
};

// Switch session display mode: Mochi mascot or traditional list
window.setSessionViewMode = function (mode) {
  if (mochiSyllabusInstance) {
    mochiSyllabusInstance.destroy();
    mochiSyllabusInstance = null;
  }
  currentSessionViewMode = mode;
  renderMainView();
};

// Open Session Detail Modal (Centered on Screen)
window.openSessionModal = function (catId, trackIdx, sessionIdx) {
  const cat = SITE_DATA.categories.find((c) => c.id === catId);
  if (!cat || !cat.tracks || !cat.tracks[trackIdx]) return;
  const track = cat.tracks[trackIdx];
  if (!track.sessions || !track.sessions[sessionIdx]) return;

  activeModalSession = { catId, trackIdx, sessionIdx };
  updateSessionModalContent();

  const modal = document.getElementById("sessionDetailModal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
};

// Close Session Detail Modal
window.closeSessionModal = function (e) {
  if (e && e.target && e.target !== e.currentTarget && !e.target.classList.contains("session-modal-close")) {
    return;
  }
  const modal = document.getElementById("sessionDetailModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
  activeModalSession = null;
};

// Navigate to previous or next session inside modal
window.navigateModalSession = function (delta) {
  if (!activeModalSession) return;
  const cat = SITE_DATA.categories.find((c) => c.id === activeModalSession.catId);
  if (!cat) return;
  const track = cat.tracks[activeModalSession.trackIdx];
  if (!track) return;

  const newIdx = activeModalSession.sessionIdx + delta;
  if (newIdx >= 0 && newIdx < track.sessions.length) {
    activeModalSession.sessionIdx = newIdx;
    updateSessionModalContent();
  }
};

// Jump directly to specific session from navigation dots
window.jumpToModalSession = function (sessionIdx) {
  if (!activeModalSession) return;
  activeModalSession.sessionIdx = sessionIdx;
  updateSessionModalContent();
};

// Update Modal DOM Content
function updateSessionModalContent() {
  if (!activeModalSession) return;
  const cat = SITE_DATA.categories.find((c) => c.id === activeModalSession.catId);
  if (!cat) return;
  const track = cat.tracks[activeModalSession.trackIdx];
  if (!track) return;
  const s = track.sessions[activeModalSession.sessionIdx];
  if (!s) return;

  const badgeEl = document.getElementById("modalSessionBadge");
  const courseEl = document.getElementById("modalCourseName");
  const titleEl = document.getElementById("modalSessionTitle");
  const descEl = document.getElementById("modalSessionDesc");
  const prevBtn = document.getElementById("modalPrevBtn");
  const nextBtn = document.getElementById("modalNextBtn");
  const dotsEl = document.getElementById("modalSessionDots");
  const deleteBtn = document.getElementById("btnDeleteCurrentSession");

  if (badgeEl) badgeEl.innerHTML = `💬 ${s.num} / ${track.sessions.length} Buổi`;
  if (courseEl) courseEl.textContent = track.title;
  if (titleEl) titleEl.textContent = s.title;
  if (descEl) descEl.textContent = s.desc;

  // Reset form chỉnh sửa về trạng thái xem ban đầu
  cancelEditingCurrentSession();

  if (deleteBtn) {
    deleteBtn.style.display = track.sessions.length > 1 ? "inline-flex" : "none";
  }

  if (prevBtn) {
    prevBtn.disabled = activeModalSession.sessionIdx === 0;
  }
  if (nextBtn) {
    nextBtn.disabled = activeModalSession.sessionIdx === track.sessions.length - 1;
  }

  if (dotsEl) {
    dotsEl.innerHTML = track.sessions
      .map(
        (_, idx) => `
        <button class="modal-dot-pill ${idx === activeModalSession.sessionIdx ? "active" : ""}" 
                onclick="jumpToModalSession(${idx})" 
                title="Buổi ${idx + 1}"
                aria-label="Buổi ${idx + 1}">
          ${idx + 1}
        </button>
      `
      )
      .join("");
  }
}

// Chỉnh sửa trực tiếp nội dung buổi học
window.startEditingCurrentSession = function () {
  if (!activeModalSession) return;
  const cat = SITE_DATA.categories.find((c) => c.id === activeModalSession.catId);
  if (!cat) return;
  const track = cat.tracks[activeModalSession.trackIdx];
  if (!track || !track.sessions[activeModalSession.sessionIdx]) return;
  const s = track.sessions[activeModalSession.sessionIdx];

  const titleInp = document.getElementById("sessionEditTitleInput");
  const descInp = document.getElementById("sessionEditDescInput");
  const form = document.getElementById("sessionEditForm");
  const actions = document.getElementById("sessionEditActions");

  if (titleInp) titleInp.value = s.title;
  if (descInp) descInp.value = s.desc;
  if (form) form.style.display = "block";
  if (actions) actions.style.display = "none";
  if (titleInp) titleInp.focus();
};

window.cancelEditingCurrentSession = function () {
  const form = document.getElementById("sessionEditForm");
  const actions = document.getElementById("sessionEditActions");
  if (form) form.style.display = "none";
  if (actions) actions.style.display = "flex";
};

window.saveEditedCurrentSession = function () {
  if (!activeModalSession) return;
  const cat = SITE_DATA.categories.find((c) => c.id === activeModalSession.catId);
  if (!cat) return;
  const track = cat.tracks[activeModalSession.trackIdx];
  if (!track || !track.sessions[activeModalSession.sessionIdx]) return;
  const s = track.sessions[activeModalSession.sessionIdx];

  const titleInp = document.getElementById("sessionEditTitleInput");
  const descInp = document.getElementById("sessionEditDescInput");
  const newTitle = titleInp ? titleInp.value.trim() : "";
  const newDesc = descInp ? descInp.value.trim() : "";

  if (!newTitle) {
    alert("Vui lòng nhập tên buổi học!");
    return;
  }

  s.title = newTitle;
  s.desc = newDesc || "Theo yêu cầu đào tạo cá nhân hóa của học viên.";

  cancelEditingCurrentSession();
  updateSessionModalContent();
  renderMainView();
  showSyllabusToast(`💾 Đã lưu thay đổi cho ${s.num}!`);

  if (mochiSyllabusInstance) {
    mochiSyllabusInstance.blushUntil = Date.now() + 3000;
  }
};

window.deleteCurrentSession = function () {
  if (!activeModalSession) return;
  const cat = SITE_DATA.categories.find((c) => c.id === activeModalSession.catId);
  if (!cat) return;
  const track = cat.tracks[activeModalSession.trackIdx];
  if (!track || track.sessions.length <= 1) {
    alert("Khóa học cần ít nhất 1 buổi học!");
    return;
  }

  if (!confirm(`Bạn có chắc muốn xóa ${track.sessions[activeModalSession.sessionIdx].num} không?`)) {
    return;
  }

  track.sessions.splice(activeModalSession.sessionIdx, 1);
  track.sessions.forEach((s, idx) => {
    s.num = `Buổi ${idx + 1}`;
  });
  track.duration = `${track.sessions.length} Buổi`;
  track.priceOnline = track.sessions.length * 350000;
  track.priceOffline = track.sessions.length * 450000;

  closeSessionModal();
  renderMainView();
  showSyllabusToast(`🗑️ Đã xóa buổi học. Lộ trình còn ${track.sessions.length} buổi.`);
};

// Modal Thêm Buổi Học Mới (+)
let activeAddSessionContext = null;

window.openAddSessionModal = function (catId, trackIdx) {
  const cat = SITE_DATA.categories.find((c) => c.id === catId);
  if (!cat) return;
  const track = cat.tracks[trackIdx] || cat.tracks[0];
  if (!track) return;

  activeAddSessionContext = { catId, trackIdx };
  const badgeEl = document.getElementById("addSessionBadge");
  const nextNum = track.sessions.length + 1;
  if (badgeEl) badgeEl.textContent = `➕ Tạo Buổi Học Số ${nextNum}`;

  const titleInp = document.getElementById("newSessionTitle");
  const descInp = document.getElementById("newSessionDesc");
  if (titleInp) titleInp.value = "";
  if (descInp) descInp.value = "";

  const modal = document.getElementById("addSessionModal");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      if (titleInp) titleInp.focus();
    }, 100);
  }
};

window.closeAddSessionModal = function (e) {
  if (e && e.target && e.target !== e.currentTarget && !e.target.classList.contains("session-modal-close")) {
    return;
  }
  const modal = document.getElementById("addSessionModal");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
  activeAddSessionContext = null;
};

window.confirmAddSession = function () {
  if (!activeAddSessionContext) return;
  const cat = SITE_DATA.categories.find((c) => c.id === activeAddSessionContext.catId);
  if (!cat) return;
  const track = cat.tracks[activeAddSessionContext.trackIdx];
  if (!track) return;

  const titleInp = document.getElementById("newSessionTitle");
  const descInp = document.getElementById("newSessionDesc");
  const title = titleInp ? titleInp.value.trim() : "";
  const desc = descInp ? descInp.value.trim() : "";

  if (!title) {
    alert("Vui lòng nhập tên buổi học bạn muốn tạo!");
    if (titleInp) titleInp.focus();
    return;
  }

  const nextNum = `Buổi ${track.sessions.length + 1}`;
  track.sessions.push({
    num: nextNum,
    title: title,
    desc: desc || "Học 1 kèm 1 thực chiến theo yêu cầu riêng của học viên."
  });

  track.duration = `${track.sessions.length} Buổi`;
  track.priceOnline = track.sessions.length * 350000;
  track.priceOffline = track.sessions.length * 450000;

  closeAddSessionModal();
  renderMainView();
  showSyllabusToast(`🎉 Đã tạo thành công ${nextNum}: "${title}"!`);

  if (mochiSyllabusInstance) {
    mochiSyllabusInstance.blushUntil = Date.now() + 4000;
  }
};

// Gửi nội dung tự thiết kế để đăng ký khóa học
window.sendCustomSyllabusToReg = function (catId, trackIdx) {
  const cat = SITE_DATA.categories.find((c) => c.id === catId);
  if (!cat) return;
  const track = cat.tracks[trackIdx] || cat.tracks[0];
  if (!track) return;

  const sessionsText = track.sessions
    .map((s) => `• ${s.num}: ${s.title}\n  - Yêu cầu học: ${s.desc}`)
    .join("\n\n");

  const modeStr = currentPricingMode === "online" ? "Học Online (1 kèm 1 qua Zoom / Meet)" : "Học Trực Tiếp (Qua nhà / Công ty)";
  const priceVal = currentPricingMode === "online" ? track.priceOnline : track.priceOffline;

  const fullSyllabusMsg = `[ĐĂNG KÝ GIÁO ÁN TỰ THIẾT KẾ 1 KÈM 1]\n` +
    `Khóa học: ${cat.title} - ${track.title}\n` +
    `Tổng thời lượng: ${track.sessions.length} Buổi\n` +
    `Hình thức học: ${modeStr}\n` +
    `Học phí dự kiến: ${formatVND(priceVal)}\n\n` +
    `CHI TIẾT LỘ TRÌNH TỪNG BUỔI HỌC BẠN ĐÃ THIẾT KẾ:\n` +
    `${sessionsText}`;

  // 1. Ghi vào ô Ghi chú nhu cầu học
  const regNote = document.getElementById("regNote");
  if (regNote) {
    regNote.value = fullSyllabusMsg;
  }

  // 2. Tự động chọn Khóa học Quan Tâm
  document.querySelectorAll('input[name="regCourses"]').forEach((cb) => {
    if (cb.value.includes("yêu cầu") || cb.value.includes("Theo Yêu Cầu") || cb.value.includes("1 kèm 1")) {
      cb.checked = true;
    }
  });

  // 3. Cập nhật bảng tính học phí
  const calcSel = document.getElementById("calcCourseSelect");
  if (calcSel) {
    let opt = calcSel.querySelector('option[value="custom-personal"]');
    if (opt) {
      opt.setAttribute("data-sessions", track.sessions.length);
      opt.setAttribute("data-online", track.priceOnline);
      opt.setAttribute("data-offline", track.priceOffline);
      opt.textContent = `Khóa học Theo Yêu Cầu - Tự Thiết Kế (${track.sessions.length} Buổi)`;
      calcSel.value = "custom-personal";
    }
    updateFeeCalculator();
  }

  // 4. Cập nhật tiêu đề form đăng ký
  const regTitle = document.getElementById("regFormTitle");
  if (regTitle) {
    regTitle.innerHTML = `Đăng Ký Khóa Học Theo Yêu Cầu <span style="color:var(--primary); font-size:0.95rem;">(${track.sessions.length} Buổi Đã Thiết Kế)</span>`;
  }

  // 5. Cuộn mượt đến form đăng ký và nhấp nháy hiệu ứng
  const contactSec = document.getElementById("contactSection");
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: "smooth" });
    contactSec.classList.add("contact-section-glow");
    setTimeout(() => {
      contactSec.classList.remove("contact-section-glow");
    }, 2800);
  }

  showSyllabusToast(`🚀 Đã nạp ${track.sessions.length} buổi học vào Form Đăng Ký bên dưới!`);
};

// Toast notification helper
let toastTimeout = null;
window.showSyllabusToast = function (msg) {
  const toast = document.getElementById("customSyllabusToast");
  const msgEl = document.getElementById("toastMessage");
  if (!toast) return;
  if (msgEl) msgEl.textContent = msg;

  toast.classList.add("show");
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
};

// Register course from inside session modal
window.registerCurrentSessionCourse = function () {
  if (!activeModalSession) return;
  const cat = SITE_DATA.categories.find((c) => c.id === activeModalSession.catId);
  const track = cat ? cat.tracks[activeModalSession.trackIdx] : null;
  const courseTitle = track ? track.title : "";
  closeSessionModal();
  
  if (cat && cat.id === "theo-yeu-cau") {
    sendCustomSyllabusToReg(cat.id, activeModalSession.trackIdx);
  } else {
    prefillCourseAndScroll(courseTitle);
  }
};

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSessionModal();
    closeAddSessionModal();
  }
});

/* =========================================================================
   Interactive Bé Mochi Mascot Tracker (Transparent, Spring Physics, Gaze Eyes)
   ========================================================================= */
class MochiSyllabusTracker {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.statusEl = document.getElementById("mochiStatusText");

    this.width = 210;
    this.height = 200;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Elastic spring physics
    this.dispX = 0;
    this.dispY = 0;
    this.velX = 0;
    this.velY = 0;

    // Mouse / Touch drag
    this.isDragging = false;
    this.dragStartX = 0;
    this.dragStartY = 0;
    this.currentDragX = 0;
    this.currentDragY = 0;

    // Eye gaze tracking
    this.targetGazeX = 0;
    this.targetGazeY = 0;
    this.gazeX = 0;
    this.gazeY = 0;
    this.lastMouseMoveTime = Date.now();

    // Natural idle shifts
    this.idleTargetX = 0;
    this.idleTargetY = 0;
    this.nextIdleShift = 0;

    // Natural blinking
    this.blinkProgress = 0;
    this.isBlinking = false;
    this.nextBlinkTime = Date.now() + 2500;
    this.blinkStartTime = 0;

    // Đỏ 2 má khi kéo (kéo sẽ đỏ trong 5 giây rồi hết)
    this.blushUntil = 0;

    // Trạng thái khóc (khóc khi kéo và 5 giây sau khi kéo)
    this.cryUntil = 0;
    this.wasCrying = false;

    // Phụ kiện thời trang hoặc Cảm xúc nhân vật: "normal", "happy", "love", "cool", "playful"
    this.currentEmotion = "normal";
    this.glasses = "none";
    this.hat = "none";

    // Trạng thái cho ăn bánh Mochi trắng & phóng to (to lên mỗi lần ăn, quá 5 lần thì nổ)
    this.feedCount = 0;
    this.growthScale = 1.0;
    this.targetGrowthScale = 1.0;
    this.isExploding = false;
    this.explosionTime = 0;
    this.explosionParticles = [];

    // Màu sắc Mochi đổi dần dần theo bánh vừa ăn (Smooth Color Morphing)
    this.currentPalette = JSON.parse(JSON.stringify(MOCHI_PALETTES.white));
    this.targetPalette = MOCHI_PALETTES.white;
    this.currentFlavor = "white";

    // Trạng thái ăn bánh và nhai nhồm nhoàm
    this.isEating = false;
    this.eatingStart = 0;
    this.chewProgress = 0;
    this.crumbs = [];

    this.statusTimer = null;
    this.rafId = null;

    this.onWindowMouseMove = this.onWindowMouseMove.bind(this);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onWindowMouseMoveDrag = this.onWindowMouseMoveDrag.bind(this);
    this.onWindowMouseUp = this.onWindowMouseUp.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.onResize = this.onResize.bind(this);
    this.loop = this.loop.bind(this);

    this.init();
  }

  init() {
    this.bindEvents();
    this.resize();
    this.rafId = requestAnimationFrame(this.loop);
  }

  bindEvents() {
    window.addEventListener("mousemove", this.onWindowMouseMove, { passive: true });
    window.addEventListener("resize", this.onResize, { passive: true });

    this.canvas.addEventListener("mousedown", this.onMouseDown);
    window.addEventListener("mousemove", this.onWindowMouseMoveDrag);
    window.addEventListener("mouseup", this.onWindowMouseUp);

    this.canvas.addEventListener("touchstart", this.onTouchStart, { passive: false });
    window.addEventListener("touchmove", this.onTouchMove, { passive: false });
    window.addEventListener("touchend", this.onTouchEnd);
    window.addEventListener("touchcancel", this.onTouchEnd);
  }

  unbindEvents() {
    window.removeEventListener("mousemove", this.onWindowMouseMove);
    window.removeEventListener("resize", this.onResize);

    this.canvas.removeEventListener("mousedown", this.onMouseDown);
    window.removeEventListener("mousemove", this.onWindowMouseMoveDrag);
    window.removeEventListener("mouseup", this.onWindowMouseUp);

    this.canvas.removeEventListener("touchstart", this.onTouchStart);
    window.removeEventListener("touchmove", this.onTouchMove);
    window.removeEventListener("touchend", this.onTouchEnd);
    window.removeEventListener("touchcancel", this.onTouchEnd);
  }

  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    if (this.statusTimer) {
      clearTimeout(this.statusTimer);
      this.statusTimer = null;
    }
    this.unbindEvents();
  }

  onResize() {
    this.resize();
  }

  resize() {
    const rect = this.canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    this.width = rect.width;
    this.height = rect.height;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.canvas.width = Math.round(this.width * this.dpr);
    this.canvas.height = Math.round(this.height * this.dpr);
  }

  onWindowMouseMove(e) {
    if (this.isDragging) return;
    this.lastMouseMoveTime = Date.now();
    const rect = this.canvas.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    this.targetGazeX = Math.max(-1, Math.min(1, (e.clientX - centerX) / 240));
    this.targetGazeY = Math.max(-1, Math.min(1, (e.clientY - centerY) / 180));
  }

  onMouseDown(e) {
    if (e.button !== 0) return;
    this.startDrag(e.clientX, e.clientY);
  }

  onWindowMouseMoveDrag(e) {
    if (!this.isDragging) return;
    this.currentDragX = e.clientX;
    this.currentDragY = e.clientY;
  }

  onWindowMouseUp() {
    if (!this.isDragging) return;
    this.endDrag();
  }

  onTouchStart(e) {
    if (e.touches.length > 0) {
      e.preventDefault();
      const touch = e.touches[0];
      this.startDrag(touch.clientX, touch.clientY);
    }
  }

  onTouchMove(e) {
    if (!this.isDragging) return;
    if (e.touches.length > 0) {
      e.preventDefault();
      const touch = e.touches[0];
      this.currentDragX = touch.clientX;
      this.currentDragY = touch.clientY;
    }
  }

  onTouchEnd() {
    if (!this.isDragging) return;
    this.endDrag();
  }

  startDrag(clientX, clientY) {
    this.isDragging = true;
    this.dragStartX = clientX;
    this.dragStartY = clientY;
    this.currentDragX = clientX;
    this.currentDragY = clientY;
    this.blushUntil = Date.now() + 5000;
    this.canvas.classList.add("is-dragging");
    this.setStatus("Bé Mochi dẻo quánh nè! 😋");
  }

  endDrag() {
    this.isDragging = false;
    this.blushUntil = Math.max(this.blushUntil, Date.now() + 5000);
    this.canvas.classList.remove("is-dragging");
    if (navigator.vibrate) {
      try { navigator.vibrate(20); } catch (_) {}
    }
    this.setStatus("Nảy tưng tưng luôn! 💖", 1500);
  }

  setStatus(text, duration = 0) {
    if (!this.statusEl) return;
    if (this.statusTimer) {
      clearTimeout(this.statusTimer);
      this.statusTimer = null;
    }
    this.statusEl.textContent = text;
    if (duration > 0) {
      this.statusTimer = setTimeout(() => {
        if (this.statusEl) {
          this.statusEl.textContent = "Bé Mochi đang lắng nghe bạn nè 🥰";
        }
      }, duration);
    }
  }

  update() {
    const now = Date.now();

    if (now - this.lastMouseMoveTime > 1800 && !this.isDragging) {
      if (now > this.nextIdleShift) {
        this.idleTargetX = (Math.random() - 0.5) * 1.3;
        this.idleTargetY = (Math.random() - 0.4) * 0.9;
        this.nextIdleShift = now + 1600 + Math.random() * 2400;
      }
      this.targetGazeX = this.idleTargetX;
      this.targetGazeY = this.idleTargetY;
    }

    this.gazeX += (this.targetGazeX - this.gazeX) * 0.12;
    this.gazeY += (this.targetGazeY - this.gazeY) * 0.12;

    if (now > this.nextBlinkTime && !this.isBlinking) {
      this.isBlinking = true;
      this.blinkStartTime = now;
    }
    if (this.isBlinking) {
      const elapsed = now - this.blinkStartTime;
      const blinkDuration = 180;
      if (elapsed < blinkDuration) {
        this.blinkProgress = Math.sin((elapsed / blinkDuration) * Math.PI);
      } else {
        this.blinkProgress = 0;
        this.isBlinking = false;
        this.nextBlinkTime = now + 2800 + Math.random() * 3400;
      }
    }

    if (this.isDragging) {
      const rawDx = this.currentDragX - this.dragStartX;
      const rawDy = this.currentDragY - this.dragStartY;
      const rawDist = Math.hypot(rawDx, rawDy);
      const maxPull = 80;
      const tension = maxPull * Math.tanh(rawDist / maxPull);
      const angle = Math.atan2(rawDy, rawDx);

      const targetX = Math.cos(angle) * tension;
      const targetY = Math.sin(angle) * tension;

      const prevX = this.dispX;
      const prevY = this.dispY;
      this.dispX += (targetX - this.dispX) * 0.45;
      this.dispY += (targetY - this.dispY) * 0.45;
      this.velX = (this.dispX - prevX) * 0.85;
      this.velY = (this.dispY - prevY) * 0.85;
    } else {
      const springK = 0.12;
      const damping = 0.83;
      const ax = -springK * this.dispX;
      const ay = -springK * this.dispY;
      this.velX = (this.velX + ax) * damping;
      this.velY = (this.velY + ay) * damping;
      this.dispX += this.velX;
      this.dispY += this.velY;

      if (Math.hypot(this.dispX, this.dispY) < 0.12 && Math.hypot(this.velX, this.velY) < 0.12) {
        this.dispX = 0;
        this.dispY = 0;
        this.velX = 0;
        this.velY = 0;
      }
    }
  }

  draw() {
    const ctx = this.ctx;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // TRANSPARENT BACKGROUND (Không khung nền, chỉ hiện nền của web)
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.scale(this.dpr, this.dpr);

    const cx = this.width / 2;
    const cy = this.height / 2 - 4;

    const pullDist = Math.hypot(this.dispX, this.dispY);
    const pullAngle = Math.atan2(this.dispY, this.dispX);
    const stretch = 1 + (pullDist / 80) * 0.46;
    const squash = 1 / Math.sqrt(stretch);

    // Body: Soft white dough sphere (Tự động phóng to theo kích thước màn hình / di động)
    const rx = Math.min(this.width * 0.38, 86);
    const ry = rx * 0.94;

    // Soft Contact Shadow beneath Mochi
    const shadowY = cy + ry + 4 + (this.dispY * 0.22);
    const shadowRx = (rx * 0.88) * (pullDist > 0.01 ? (1 / Math.sqrt(stretch)) : 1);
    const shadowRy = (rx * 0.19) * (pullDist > 0.01 ? stretch : 1);
    const shadowGrad = ctx.createRadialGradient(cx + (this.dispX * 0.22), shadowY, 2, cx + (this.dispX * 0.22), shadowY, shadowRx);
    shadowGrad.addColorStop(0, "rgba(100, 116, 139, 0.32)");
    shadowGrad.addColorStop(0.5, "rgba(100, 116, 139, 0.12)");
    shadowGrad.addColorStop(1, "rgba(100, 116, 139, 0)");
    ctx.fillStyle = shadowGrad;
    ctx.beginPath();
    ctx.ellipse(cx + (this.dispX * 0.22), shadowY, shadowRx, shadowRy, 0, 0, Math.PI * 2);
    ctx.fill();

    // Elastic transformations
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(this.dispX * 0.0015 + this.gazeX * 0.04);

    if (pullDist > 0.01) {
      ctx.translate(this.dispX * 0.58, this.dispY * 0.58);
      ctx.rotate(pullAngle);
      ctx.scale(stretch, squash);
      ctx.rotate(-pullAngle);
    }

    const px = this.gazeX * 7.5;
    const py = this.gazeY * 5.5;

    ctx.beginPath();
    ctx.moveTo(0, -ry);
    ctx.bezierCurveTo(rx * 0.95, -ry * 0.95, rx * 1.05, -ry * 0.1, rx * 1.03, 14);
    ctx.bezierCurveTo(rx * 0.98, ry * 0.82, rx * 0.55, ry * 1.02, 0, ry * 1.02);
    ctx.bezierCurveTo(-rx * 0.55, ry * 1.02, -rx * 0.98, ry * 0.82, -rx * 1.03, 14);
    ctx.bezierCurveTo(-rx * 1.05, -ry * 0.1, -rx * 0.95, -ry * 0.95, 0, -ry);
    ctx.closePath();

    // Soft 3D Lighting
    const lightX = -22 + px * 0.45;
    const lightY = -26 + py * 0.45;
    const bodyGrad = ctx.createRadialGradient(lightX, lightY, 10, 0, 8, rx * 1.15);
    bodyGrad.addColorStop(0, "#ffffff");
    bodyGrad.addColorStop(0.55, "#ffffff");
    bodyGrad.addColorStop(0.82, "#f6f7fc");
    bodyGrad.addColorStop(0.96, "#e8ecf8");
    bodyGrad.addColorStop(1, "#dce2f2");
    ctx.fillStyle = bodyGrad;
    ctx.fill();

    ctx.strokeStyle = "rgba(203, 213, 225, 0.7)";
    ctx.lineWidth = 1.3;
    ctx.stroke();

    // Rosy Blush Cheeks (Đỏ rực 2 má khi kéo và 5 giây sau sẽ hết)
    const nowTime = Date.now();
    const remainingBlush = this.blushUntil - nowTime;
    let blushFactor = 0;
    if (remainingBlush > 0) {
      blushFactor = remainingBlush > 800 ? 1.0 : remainingBlush / 800;
    }

    [-1, 1].forEach((dir) => {
      const blushX = dir * (rx * 0.62) + px * 0.5;
      const blushY = rx * 0.1 + py * 0.5;
      ctx.save();
      ctx.translate(blushX, blushY);
      ctx.rotate(dir * 0.22);
      const bW = rx * 0.19 + blushFactor * 5;
      const bH = rx * 0.10 + blushFactor * 4;
      const blushGrad = ctx.createRadialGradient(0, 0, 1, 0, 0, bW);
      if (blushFactor > 0.01) {
        // Đỏ 2 má khi kéo
        blushGrad.addColorStop(0, `rgba(244, 63, 94, ${0.45 + blushFactor * 0.5})`);
        blushGrad.addColorStop(0.5, `rgba(251, 113, 133, ${0.25 + blushFactor * 0.45})`);
        blushGrad.addColorStop(1, "rgba(244, 63, 94, 0)");
      } else {
        blushGrad.addColorStop(0, "rgba(244, 114, 182, 0.72)");
        blushGrad.addColorStop(0.5, "rgba(244, 114, 182, 0.38)");
        blushGrad.addColorStop(1, "rgba(244, 114, 182, 0)");
      }
      ctx.fillStyle = blushGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, bW, bH, 0, 0, Math.PI * 2);
      ctx.fill();

      // Vạch ngượng ngùng anime đáng yêu khi đỏ má
      if (blushFactor > 0.15) {
        ctx.strokeStyle = `rgba(225, 29, 72, ${blushFactor * 0.75})`;
        ctx.lineWidth = 1.6;
        ctx.lineCap = "round";
        for (let i = -1; i <= 1; i++) {
          ctx.beginPath();
          ctx.moveTo(i * 4 - 2, -4);
          ctx.lineTo(i * 4 + 2, 4);
          ctx.stroke();
        }
      }
      ctx.restore();
    });

    // Big 3D Expressive Gaze Eyes
    const eyeSpacing = rx * 0.35;
    const eyeY = rx * 0.07 + py;
    const outerEyeW = rx * 0.26;
    const outerEyeH = (rx * 0.28) * (1 - this.blinkProgress * 0.95);

    [-1, 1].forEach((dir) => {
      const eyeX = dir * eyeSpacing + px;

      if (this.blinkProgress > 0.65 || outerEyeH < 3) {
        ctx.beginPath();
        ctx.arc(eyeX, eyeY - 2, rx * 0.17, Math.PI * 0.15, Math.PI * 0.85);
        ctx.lineWidth = 2.8;
        ctx.strokeStyle = "#1e1e2d";
        ctx.lineCap = "round";
        ctx.stroke();
      } else {
        ctx.beginPath();
        ctx.ellipse(eyeX, eyeY, outerEyeW, outerEyeH, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#f5f6fb";
        ctx.fill();
        ctx.strokeStyle = "rgba(218, 224, 238, 0.85)";
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(eyeX, eyeY, outerEyeW - 0.5, outerEyeH - 0.5, 0, 0, Math.PI * 2);
        ctx.clip();

        const pupilOffsetX = this.gazeX * (rx * 0.095);
        const pupilOffsetY = this.gazeY * (rx * 0.075);
        const pupilX = eyeX + pupilOffsetX;
        const pupilY = eyeY + pupilOffsetY;
        const pupilR = rx * 0.145;

        const pupilGrad = ctx.createRadialGradient(pupilX - 2, pupilY - 2, 1, pupilX, pupilY, pupilR);
        pupilGrad.addColorStop(0, "#28273d");
        pupilGrad.addColorStop(0.7, "#1c1b2b");
        pupilGrad.addColorStop(1, "#12111d");

        ctx.beginPath();
        ctx.arc(pupilX, pupilY, pupilR, 0, Math.PI * 2);
        ctx.fillStyle = pupilGrad;
        ctx.fill();

        // Primary catchlight
        ctx.beginPath();
        ctx.arc(pupilX - (rx * 0.036), pupilY - (rx * 0.04), rx * 0.049, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        // Secondary catchlight
        ctx.beginPath();
        ctx.arc(pupilX + (rx * 0.04), pupilY + (rx * 0.04), rx * 0.02, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.fill();

        ctx.restore();
      }
    });

    // Cute smiling mouth ◡
    const mouthX = px * 0.45;
    const mouthY = rx * 0.35 + py * 0.45;

    if (pullDist < 7) {
      ctx.beginPath();
      ctx.arc(mouthX, mouthY - 4, rx * 0.103, Math.PI * 0.22, Math.PI * 0.78);
      ctx.lineWidth = 2.2;
      ctx.strokeStyle = "#1e1e2d";
      ctx.lineCap = "round";
      ctx.stroke();
    } else {
      const openH = Math.min(5 + pullDist * 0.32, 22);
      const openW = Math.max(9, rx * 0.19 - pullDist * 0.05);

      ctx.save();
      ctx.beginPath();
      ctx.ellipse(mouthX, mouthY + openH * 0.25, openW, openH, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#2c0b14";
      ctx.fill();
      ctx.clip();

      ctx.fillStyle = "#fb7185";
      ctx.beginPath();
      ctx.arc(mouthX, mouthY + openH * 0.25 + openH * 0.65, openW * 0.85, Math.PI, 0);
      ctx.fill();
      ctx.restore();

      ctx.beginPath();
      ctx.ellipse(mouthX, mouthY + openH * 0.25, openW, openH, 0, 0, Math.PI * 2);
      ctx.lineWidth = 2.0;
      ctx.strokeStyle = "#1e1e2d";
      ctx.stroke();
    }

    ctx.restore();
    ctx.restore();
  }

  loop() {
    this.update();
    this.draw();
    this.rafId = requestAnimationFrame(this.loop);
  }
}

function initMochiCourseTracker() {
  if (mochiSyllabusInstance) {
    mochiSyllabusInstance.destroy();
    mochiSyllabusInstance = null;
  }
  const canvas = document.getElementById("mochiCourseCanvas");
  if (!canvas) return;
  mochiSyllabusInstance = new MochiSyllabusTracker(canvas);
}

// Render Interactive Bé Mochi Mascot & Floating Speech Bubbles
function renderInteractiveMochiSyllabus(cat, track, activeIdx) {
  const sessions = track.sessions || [];
  const total = sessions.length;
  const half = Math.ceil(total / 2);

  const leftSessions = sessions.slice(0, half);
  const rightSessions = sessions.slice(half);

  const formatBadgeNum = (num) => {
    let s = num || "";
    if (s.includes(",")) {
      const numbers = s.match(/\d+/g);
      if (numbers && numbers.length > 1) {
        return `Buổi ${numbers[0]}-${numbers[numbers.length - 1]}`;
      }
    }
    return s;
  };

  const leftBubblesHtml = leftSessions
    .map((s, idx) => {
      const realIdx = idx;
      const displayNum = formatBadgeNum(s.num);
      const delay = ((idx * 0.35) % 2.5).toFixed(1);
      return `
        <button class="mochi-speech-bubble bubble-left" 
                style="animation-delay: -${delay}s;" 
                onclick="openSessionModal('${cat.id}', ${activeIdx}, ${realIdx})"
                title="Xem chi tiết ${s.num}: ${s.title}"
                aria-label="Xem chi tiết ${s.num}: ${s.title}">
          <span class="bubble-icon">💬</span>
          <span class="bubble-text">${displayNum}</span>
        </button>
      `;
    })
    .join("");

  const rightBubblesHtml = rightSessions
    .map((s, idx) => {
      const realIdx = half + idx;
      const displayNum = formatBadgeNum(s.num);
      const delay = (((idx + half) * 0.4) % 2.5).toFixed(1);
      return `
        <button class="mochi-speech-bubble bubble-right" 
                style="animation-delay: -${delay}s;" 
                onclick="openSessionModal('${cat.id}', ${activeIdx}, ${realIdx})"
                title="Xem chi tiết ${s.num}: ${s.title}"
                aria-label="Xem chi tiết ${s.num}: ${s.title}">
          <span class="bubble-icon">💬</span>
          <span class="bubble-text">${displayNum}</span>
        </button>
      `;
    })
    .join("");

  const isCustomizable = cat.id === "theo-yeu-cau";
  const addBubbleHtml = isCustomizable
    ? `
      <button class="mochi-speech-bubble bubble-right bubble-add-session" 
              onclick="openAddSessionModal('${cat.id}', ${activeIdx})"
              title="Nhấn để tạo thêm buổi học mới (+)"
              aria-label="Tạo thêm buổi học">
        <span class="bubble-icon">➕</span>
        <span class="bubble-text">Thêm Buổi</span>
      </button>
    `
    : "";

  const customBuilderBarHtml = isCustomizable
    ? `
      <div class="mochi-custom-builder-bar">
        <button type="button" class="builder-btn-add" onclick="openAddSessionModal('${cat.id}', ${activeIdx})">
          <span>➕</span> Tạo Buổi Học Mới (+)
        </button>
        <button type="button" class="builder-btn-submit" onclick="sendCustomSyllabusToReg('${cat.id}', ${activeIdx})">
          <span>🚀</span> Gửi Giáo Án Tự Thiết Kế Để Đăng Ký
        </button>
      </div>
    `
    : "";

  return `
    <div class="mochi-interactive-stage">
      <!-- Cột bóng nói chuyện bên trái -->
      <div class="mochi-bubbles-col mochi-bubbles-left">
        ${leftBubblesHtml}
      </div>

      <!-- Trung tâm: Khuôn mặt Bé Mochi tương tác (Không khung nền, chỉ hiện nền của web) -->
      <div class="mochi-character-box">
        <canvas id="mochiCourseCanvas" class="mochi-canvas"></canvas>
      </div>

      <!-- Cột bóng nói chuyện bên phải -->
      <div class="mochi-bubbles-col mochi-bubbles-right">
        ${rightBubblesHtml}
        ${addBubbleHtml}
      </div>
    </div>
    ${customBuilderBarHtml}
  `;
}

// Expand / Collapse all sessions in current track (for list mode)
window.toggleAllSessions = function (expand) {
  document.querySelectorAll(".session-item").forEach((el) => {
    el.classList.toggle("expanded", expand);
  });
};

// Render Department Page (Compact with Sub-Course Tabs & Interactive Mochi Syllabus)
function renderDepartmentPage(cat) {
  const activeIdx = activeTrackIdxMap[cat.id] || 0;
  const track = cat.tracks[activeIdx] || cat.tracks[0];

  const postersHtml = cat.id === "theo-yeu-cau"
    ? `
      <div class="thumb-3d-question-box" style="border-radius: var(--radius-xl); height: 195px; width: 100%; max-width: 320px; box-shadow: 0 14px 40px rgba(0,0,0,0.3); border: 1.5px solid rgba(99,102,241,0.35);">
        <div class="question-ambient-glow"></div>
        <div class="question-halo-ring"></div>
        <div class="question-mark-3d-wrap">
          <span class="question-mark-3d-glyph">?</span>
        </div>
      </div>
    `
    : cat.posters
        .map(
          (imgUrl) => `
        <div class="poster-thumb" onclick="openLightbox('${imgUrl}', '${cat.title}')">
          <img src="${imgUrl}" alt="${cat.title}" loading="lazy" />
        </div>
      `
        )
        .join("");

  const trackTabsHtml =
    cat.tracks.length > 1
      ? `
      <div class="track-selector-tabs">
        ${cat.tracks
          .map(
            (t, idx) => `
          <button class="track-tab-btn ${idx === activeIdx ? "active" : ""}" onclick="selectCategoryTrack('${cat.id}', ${idx})">
            ${t.tabLabel}
          </button>
        `
          )
          .join("")}
      </div>
    `
      : "";

  const heroBadgeText = cat.id === "theo-yeu-cau"
    ? `${cat.icon} 1 Kèm 1 Theo Yêu Cầu • Tự Thiết Kế Giáo Án`
    : `${cat.icon} ${cat.badge} • 1 Kèm 1 Theo Yêu Cầu`;

  const trackSubtitle = cat.id === "theo-yeu-cau"
    ? `📅 Giờ học linh hoạt 1 kèm 1 theo học viên • Tự do tạo số buổi học và viết nội dung bạn muốn học`
    : `⏱️ Thời lượng: <strong>${track.duration}</strong> • 📅 Giờ học linh hoạt theo học viên (Chạm vào từng buổi để xem chi tiết)`;

  const pricingCardsHtml = cat.id === "theo-yeu-cau"
    ? ""
    : `
      <div class="track-pricing-cards">
        <div class="pricing-Badge-box ${currentPricingMode === "online" ? "highlighted" : ""}">
          <div class="pricing-Badge-mode">🚀 HỌC ONLINE (${track.duration})</div>
          <div class="pricing-Badge-amount">${formatVND(track.priceOnline)}</div>
        </div>
        <div class="pricing-Badge-box ${currentPricingMode === "offline" ? "highlighted" : ""}">
          <div class="pricing-Badge-mode">🚀 HỌC OFFLINE (${track.duration})</div>
          <div class="pricing-Badge-amount">${formatVND(track.priceOffline)}</div>
        </div>
      </div>
    `;

  return `
    <section class="container" style="padding-top: 18px;">
      <div style="margin-bottom: 14px; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px;">
        <button class="btn btn-outline" style="padding:7px 14px; font-size:0.82rem;" onclick="navigateTo('home')">
          ← Trang Chủ
        </button>
        <div class="mode-switcher-bar" style="margin:0;">
          <button class="mode-pill-btn ${currentPricingMode === "online" ? "active" : ""}" onclick="setPricingMode('online')">
            💻 Giá Online
          </button>
          <button class="mode-pill-btn ${currentPricingMode === "offline" ? "active" : ""}" onclick="setPricingMode('offline')">
            🏠 Giá Offline
          </button>
        </div>
      </div>

      <div class="department-hero">
        <div>
          <span class="hero-pill">${heroBadgeText}</span>
          <h1 class="hero-title" style="font-size: clamp(1.4rem, 2.8vw, 2.1rem);">${cat.title}</h1>
          <p class="hero-desc">${cat.shortDesc}</p>
          <div class="hero-cta-group">
            <button class="btn btn-primary" onclick="${cat.id === 'theo-yeu-cau' ? `sendCustomSyllabusToReg('${cat.id}', ${activeIdx})` : `prefillCourseAndScroll('${track.title}')`}">
              ✍️ Đăng Ký Học Ngay
            </button>
            <a class="btn btn-hot" href="https://zalo.me/0916172524" target="_blank" rel="noopener">
              💬 Zalo: 0916172524
            </a>
          </div>
        </div>
        <div class="department-posters">
          ${postersHtml}
        </div>
      </div>

      ${trackTabsHtml}

      <div class="track-card">
        <div class="track-header">
          <div>
            <h2 class="track-title">${track.title}</h2>
            <div style="font-size:0.82rem; color:var(--text-secondary); margin-top:4px;">
              ${trackSubtitle}
            </div>
          </div>

          ${pricingCardsHtml}
        </div>

        <!-- Interactive Mochi Header -->
        <div class="mochi-syllabus-header-bar">
          <div class="hero-pill" style="margin:0; font-size:0.84rem; background: linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(99, 102, 241, 0.25); color: var(--primary);">
            ✨ Trợ Lý Mochi (Tương tác)
          </div>
          <div class="mochi-hint-pill">
            <span class="mochi-hint-sparkle">💬</span> Chạm bóng nói để xem chi tiết buổi học
          </div>
        </div>

        ${renderInteractiveMochiSyllabus(cat, track, activeIdx)}
      </div>
    </section>
  `;
}

// Render Main View
function renderMainView() {
  const appRoot = document.getElementById("appViewRoot");
  if (!appRoot) return;

  const matchedCat = SITE_DATA.categories.find((c) => c.id === currentTab);
  if (matchedCat) {
    appRoot.innerHTML = renderDepartmentPage(matchedCat);
    setTimeout(() => {
      initMochiCourseTracker();
    }, 20);
    return;
  }

  // Home View (Concise, Mobile-First & Intuitive)
  appRoot.innerHTML = `
    <section class="hero-section">
      <div class="container">
        <div class="hero-grid">
          <div>
            <div class="hero-pill">
              <span class="pulse-dot"></span>
              <span>Học 1 Kèm 1 Hoặc Nhóm • Linh Hoạt Mọi Thiết Bị</span>
            </div>
            <h1 class="hero-title">
              Khóa Học <span class="text-gradient">Ứng Dụng AI</span>
            </h1>
            <p class="hero-desc">
              Chuyên đào tạo 1 kèm 1 & dạy nhóm: <strong>Khóa học tạo web với AI</strong>, <strong>Khóa học ứng dụng AI</strong>, <strong>Khóa học Trí tuệ nhân tạo theo yêu cầu</strong>, <strong>Khóa học Photoshop theo yêu cầu</strong>, <strong>Khóa học Illustrator theo yêu cầu</strong> & <strong>Khóa học Edit Video theo yêu cầu</strong>.
            </p>

            <div class="learning-modes-grid">
              <div class="mode-card">
                <div class="mode-card-header">
                  <div class="mode-title">👉 Học Trực Tiếp</div>
                </div>
                <div class="mode-text">Giáo viên qua nhà dạy hoặc dạy tại Công ty.</div>
              </div>
              <div class="mode-card">
                <div class="mode-card-header">
                  <div class="mode-title">👉 Học Online</div>
                </div>
                <div class="mode-text">Học trực tiếp với Giáo viên qua Google Meet / Zoom.</div>
              </div>
            </div>

            <div class="hero-cta-group">
              <a href="#coursesSection" class="btn btn-primary" onclick="scrollToCourses(); return false;">
                🔥 Xem Khóa Học Theo Yêu Cầu
              </a>
              <a href="https://zalo.me/0916172524" target="_blank" rel="noopener" class="btn btn-hot">
                💬 Zalo: 0916172524
              </a>
            </div>
          </div>

          <div id="heroFaceWrapper">
            ${renderInteractiveFaceCard()}
          </div>
        </div>
      </div>
    </section>

    <section id="coursesSection" class="container courses-section-wrapper">
      <div class="section-header">
        <span class="section-badge">🎯 Đào Tạo 1 Kèm 1 & Nhóm</span>
        <h2 class="section-title">KHÓA HỌC THEO YÊU CẦU</h2>
        <p class="section-subtitle">
          Chọn hình thức học để tra cứu học phí và xem chi tiết giáo trình đào tạo thực chiến:
        </p>
      </div>

      <div class="mode-switcher-bar">
        <button class="mode-pill-btn ${currentPricingMode === "online" ? "active" : ""}" data-mode-btn="online" onclick="setPricingMode('online')">
          💻 Học Online (Zoom / Meet)
        </button>
        <button class="mode-pill-btn ${currentPricingMode === "offline" ? "active" : ""}" data-mode-btn="offline" onclick="setPricingMode('offline')">
          🏠 Học Trực Tiếp (Qua nhà / Công ty)
        </button>
      </div>

      <div class="categories-grid">
        ${renderCategoryCards()}
      </div>
    </section>
  `;

  // Khởi tạo khuôn mặt AI tương tác khi ở trang chủ
  setTimeout(() => {
    initInteractiveFace();
  }, 10);
}

// Fee Calculator Update
window.updateFeeCalculator = function () {
  const courseSel = document.getElementById("calcCourseSelect");
  const modeSel = document.getElementById("calcModeSelect");
  const totalEl = document.getElementById("calcTotalAmount");
  const breakdownEl = document.getElementById("calcBreakdownText");
  if (!courseSel || !modeSel || !totalEl || !breakdownEl) return;

  const courseVal = courseSel.value;
  const modeVal = modeSel.value;

  // Nếu chưa chọn khóa học hoặc chưa chọn hình thức học -> không hiện gì
  if (!courseVal || !modeVal) {
    totalEl.textContent = "";
    breakdownEl.textContent = "";
    return;
  }

  const opt = courseSel.options[courseSel.selectedIndex];
  if (!opt) {
    totalEl.textContent = "";
    breakdownEl.textContent = "";
    return;
  }

  const sessions = parseInt(opt.getAttribute("data-sessions") || "8", 10);
  const onlinePrice = parseInt(opt.getAttribute("data-online") || "0", 10);
  const offlinePrice = parseInt(opt.getAttribute("data-offline") || "0", 10);
  const price = modeVal === "online" ? onlinePrice : offlinePrice;

  if (price > 0 && sessions > 0) {
    totalEl.textContent = formatVND(price);
    breakdownEl.textContent = `Trọn khóa ${sessions} buổi (${formatVND(Math.round(price / sessions))}/buổi)`;
  } else if (price === 0) {
    totalEl.textContent = "Liên hệ học phí";
    breakdownEl.textContent = "Giáo trình tùy chỉnh linh hoạt";
  } else {
    totalEl.textContent = "";
    breakdownEl.textContent = "";
  }
};

window.prefillCourseAndScroll = function (courseName) {
  const noteEl = document.getElementById("regNote");
  if (noteEl) {
    noteEl.value = `Tư vấn khóa học: ${courseName}`;
  }
  // Tích chọn checkbox tương ứng nếu có
  if (courseName) {
    const norm = courseName.toLowerCase();
    document.querySelectorAll('input[name="regCourses"]').forEach((cb) => {
      const val = cb.value.toLowerCase();
      if (norm.includes(val) || val.includes(norm) || (norm.includes("trí tuệ nhân tạo") && val.includes("trí tuệ nhân tạo"))) {
        cb.checked = true;
      }
    });
  }
  const contactSec = document.getElementById("contactSection");
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: "smooth" });
  }
};

// Lightbox
window.openLightbox = function (imgSrc, caption) {
  const modal = document.getElementById("lightboxModal");
  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCaption");
  if (modal && img) {
    img.src = imgSrc;
    if (cap) cap.textContent = caption || "";
    modal.classList.add("open");
  }
};

window.closeLightbox = function () {
  const modal = document.getElementById("lightboxModal");
  if (modal) modal.classList.remove("open");
};

// Registration Form -> Gửi nội dung đăng ký về email: hocviendohoa2@gmail.com
function initContactForm() {
  const form = document.getElementById("registrationForm");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const name = document.getElementById("regName").value.trim();
    const phone = document.getElementById("regPhone").value.trim();
    const note = document.getElementById("regNote").value.trim();
    const mode =
      document.getElementById("calcModeSelect").value === "online"
        ? "Học Online (Zoom / Google Meet)"
        : "Học Trực Tiếp (Qua nhà / Công ty)";

    const checkedCourses = Array.from(
      document.querySelectorAll('input[name="regCourses"]:checked')
    ).map((el) => el.value);

    const coursesStr =
      checkedCourses.length > 0
        ? checkedCourses.join(", ")
        : "Khóa học ứng dụng AI";

    const feedbackBox = document.getElementById("formSuccessAlert");
    let targetEmail = "hocviendohoa2@gmail.com";
    try {
      const savedSettings = localStorage.getItem("CUSTOM_SITE_SETTINGS");
      if (savedSettings) {
        const s = JSON.parse(savedSettings);
        if (s.email) targetEmail = s.email;
      }
    } catch (_) {}
    const mailSubject = `[Đăng Ký Khóa Học Ứng Dụng AI] ${name} - ${phone}`;
    const mailBody =
      `Họ và tên: ${name}\n` +
      `Số điện thoại (Zalo): ${phone}\n` +
      `Khóa học đăng ký: ${coursesStr}\n` +
      `Hình thức học: ${mode}\n` +
      `Ghi chú thêm: ${note || "Không có"}\n`;

    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
      mailSubject
    )}&body=${encodeURIComponent(mailBody)}`;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "⏳ Đang gửi thông tin về hocviendohoa2@gmail.com...";
    }

    let sentViaApi = false;
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          _subject: mailSubject,
          "Họ Tên": name,
          "Điện thoại (Zalo)": phone,
          "Khóa học đăng ký": coursesStr,
          "Hình thức học": mode,
          "Ghi chú": note || "Không có",
          _template: "table"
        })
      });
      if (response.ok) {
        sentViaApi = true;
      }
    } catch (err) {
      sentViaApi = false;
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = "🚀 Gửi Đăng Ký (Submit)";
    }

    if (feedbackBox) {
      feedbackBox.style.display = "block";
      feedbackBox.innerHTML = `
        <div style="font-weight:800; color:var(--emerald); margin-bottom:6px;">
          🎉 ${
            sentViaApi
              ? `Đã gửi thông tin đăng ký của ${name} về email ${targetEmail}!`
              : `Đã tạo phiếu đăng ký của ${name} gửi tới ${targetEmail}!`
          }
        </div>
        <div style="font-size:0.8rem; color:var(--text-secondary); margin-bottom:10px;">
          • Khóa học: <strong>${coursesStr}</strong> (${mode})
        </div>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <a href="${mailtoUrl}" class="btn btn-primary" style="padding:7px 13px; font-size:0.8rem;">
            📧 Gửi trực tiếp bằng ứng dụng Mail (${targetEmail})
          </a>
          <a href="https://zalo.me/0916172524" target="_blank" rel="noopener" class="btn btn-outline" style="padding:7px 13px; font-size:0.8rem;">
            💬 Nhắn Zalo (0916172524)
          </a>
        </div>
      `;
    }

    // Tự động lưu đơn đăng ký vào hệ thống quản trị nội bộ
    try {
      const newLead = {
        id: "lead_" + Date.now(),
        time: new Date().toLocaleString("vi-VN"),
        name: name,
        phone: phone,
        courses: coursesStr,
        mode: mode,
        note: note || "Không có",
        status: "Mới"
      };
      const savedLeads = JSON.parse(localStorage.getItem("SUBMITTED_REGISTRATIONS") || "[]");
      savedLeads.unshift(newLead);
      localStorage.setItem("SUBMITTED_REGISTRATIONS", JSON.stringify(savedLeads));
    } catch (_) {}
  });
}

function initThemeToggle() {
  const btn = document.getElementById("themeToggleBtn");
  if (!btn) return;
  const html = document.documentElement;

  // Mặc định khi vào web là nền trắng (light)
  const saved = localStorage.getItem("preferred-theme");
  const initialTheme = saved ? saved : "light";
  html.setAttribute("data-theme", initialTheme);
  btn.textContent = initialTheme === "dark" ? "🌙" : "☀️";

  btn.addEventListener("click", () => {
    const current = html.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    btn.textContent = next === "dark" ? "🌙" : "☀️";
    try {
      localStorage.setItem("preferred-theme", next);
    } catch (_) {}
  });
}

// Cấu hình mặc định cho Form Đăng Ký & Bộ Tính Học Phí
const DEFAULT_REGISTRATION_CONFIG = {
  badgeTitle: "📬 Đăng Ký Nhận Giáo Án",
  formTitle: "Đăng Ký Khóa Học Ứng Dụng AI",
  calcBadgeTitle: "🧮 Tính Học Phí & Liên Hệ",
  calcTitle: "Tra Cứu Học Phí Khóa Học",
  submitBtnText: "🚀 Gửi Đăng Ký Về Mail (Submit)",
  interestCourses: [
    { id: "custom", name: "Theo Yêu Cầu", icon: "🎯", value: "Khóa học Theo yêu cầu riêng (1 kèm 1)", checked: false },
    { id: "ps", name: "Photoshop", icon: "🎨", value: "Khóa học Photoshop theo yêu cầu", checked: true },
    { id: "ill", name: "Illustrator", icon: "✒️", value: "Khóa học Illustrator theo yêu cầu", checked: false },
    { id: "ai", name: "Trí Tuệ Nhân Tạo (AI)", icon: "🤖", value: "Khóa học Trí tuệ nhân tạo theo yêu cầu", checked: false },
    { id: "video", name: "Edit Video", icon: "🎬", value: "Khóa học Edit Video theo yêu cầu", checked: false },
    { id: "web", name: "Tạo Web", icon: "🌐", value: "Khóa học ứng dụng AI - Tạo Web với AI", checked: false }
  ],
  calcCourses: [
    { id: "custom-personal", name: "Khóa học Theo Yêu Cầu - Cá Nhân (8 Buổi)", sessions: 8, online: 2800000, offline: 3600000 },
    { id: "custom-business", name: "Khóa học Theo Yêu Cầu - Doanh Nghiệp (10 Buổi)", sessions: 10, online: 3500000, offline: 4500000 },
    { id: "custom-express", name: "Khóa học Theo Yêu Cầu - Cấp Tốc (6 Buổi)", sessions: 6, online: 2400000, offline: 3000000 },
    { id: "ps-basic", name: "Khóa học Photoshop theo yêu cầu - Cơ Bản (8 Buổi)", sessions: 8, online: 2800000, offline: 3600000 },
    { id: "ps-ads", name: "Khóa học Photoshop theo yêu cầu - Quảng cáo & AI (8 Buổi)", sessions: 8, online: 2800000, offline: 3600000 },
    { id: "ps-wedding", name: "Khóa học Photoshop theo yêu cầu - Ảnh Cưới Studio (8 Buổi)", sessions: 8, online: 2800000, offline: 3600000 },
    { id: "ill-basic", name: "Khóa học Illustrator theo yêu cầu - Cơ Bản (8 Buổi)", sessions: 8, online: 2800000, offline: 3600000 },
    { id: "ill-print", name: "Khóa học Illustrator theo yêu cầu - Ứng Dụng In Ấn (8 Buổi)", sessions: 8, online: 2800000, offline: 3600000 },
    { id: "ill-art", name: "Khóa học Illustrator theo yêu cầu - Vẽ Minh Họa (8 Buổi)", sessions: 8, online: 2800000, offline: 3600000 },
    { id: "ai-basic", name: "Khóa học Trí tuệ nhân tạo theo yêu cầu - Toàn Diện (10 Buổi)", sessions: 10, online: 3500000, offline: 4500000 },
    { id: "ai-media", name: "Khóa học Trí tuệ nhân tạo theo yêu cầu - Ảnh & Video (10 Buổi)", sessions: 10, online: 3500000, offline: 4500000 },
    { id: "video-ai", name: "Khóa học Edit Video theo yêu cầu - Làm Video AI (10 Buổi)", sessions: 10, online: 3500000, offline: 4500000 },
    { id: "video-capcut", name: "Khóa học Edit Video theo yêu cầu - CapCut (8 Buổi)", sessions: 8, online: 2800000, offline: 3600000 },
    { id: "web-ai", name: "Khóa học ứng dụng AI - Tạo Web AI (10 Buổi)", sessions: 10, online: 3500000, offline: 4500000 }
  ]
};

// Bản đồ link ảnh Google Drive CDN chính thức
const DRIVE_IMAGES_MAP = {
  "logo.png": "https://lh3.googleusercontent.com/d/1HRW4vE9oSS_FnoU5rU1dsLcqL5Z9gnUc",
  "ps-1.png": "https://lh3.googleusercontent.com/d/1-oAzJ1NceKo2FGxUW5_p1YMfuYAJoPWS",
  "ps-2.png": "https://lh3.googleusercontent.com/d/1nJM7VHTGedM973fcg01-8bLPS74leaMH",
  "ps-3.png": "https://lh3.googleusercontent.com/d/1_Sls2MgW2rUVhixK96nfCbiWkvgd1MBO",
  "ai-ill-1.png": "https://lh3.googleusercontent.com/d/1ksxTCArLcvdCJ59FgfXqtVI5YSKuozPh",
  "ai-ill-2.png": "https://lh3.googleusercontent.com/d/1z6HcqI-970E__fO0mDBTmpYdeEpyAclN",
  "ai-ill-3.png": "https://lh3.googleusercontent.com/d/1vlFZccTbBRWrB4cjDqyrS8LueCQC4w5x",
  "ai-1.png": "https://lh3.googleusercontent.com/d/1TRwJi19o8UoAD552goQIqNrdzeE-1-PH",
  "ai-2.png": "https://lh3.googleusercontent.com/d/1CNjcRxW4Oy3X98lZAeklc-nXp6ZFKWb8",
  "video-1.png": "https://lh3.googleusercontent.com/d/1KP4hKV5826EQilrOAouW-Z0rTEyqlEdg",
  "video-2.png": "https://lh3.googleusercontent.com/d/1XcytGhiKih-TZyr3_AZIsUJFotrnY38k",
  "web-1.png": "https://lh3.googleusercontent.com/d/1GJv4ZKb9s7X9wkGu7BAUuxHl8Dk74tiW"
};

function normalizeAppImageUrl(url) {
  if (!url || typeof url !== "string") return url;
  const trimmed = url.trim();
  for (const [key, driveUrl] of Object.entries(DRIVE_IMAGES_MAP)) {
    if (trimmed.includes(key)) return driveUrl;
  }
  const driveMatch = trimmed.match(/(?:\/d\/|id=)([a-zA-Z0-9_-]{25,})/);
  if (driveMatch && driveMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${driveMatch[1]}`;
  }
  return trimmed;
}

// Nạp dữ liệu tùy chỉnh từ Trang Quản Trị (admin.html)
function loadAdminCustomData() {
  try {
    const defaultTheoYeuCau = SITE_DATA.categories.find((c) => c.id === "theo-yeu-cau");
    const defaultTheoYeuCauSlide = SITE_DATA.showcaseSlides.find((s) => s.id === "theo-yeu-cau");

    // 1. Dữ liệu khóa học & Slide
    const savedSiteData = localStorage.getItem("CUSTOM_SITE_DATA");
    if (savedSiteData) {
      const parsed = JSON.parse(savedSiteData);
      if (parsed.categories && Array.isArray(parsed.categories)) {
        parsed.categories.forEach((cat) => {
          cat.thumbnail = normalizeAppImageUrl(cat.thumbnail);
          if (Array.isArray(cat.posters)) {
            cat.posters = cat.posters.map((p) => normalizeAppImageUrl(p));
          }
        });

        // Luôn đảm bảo "theo-yeu-cau" tồn tại, đứng ở vị trí thứ 6 (hàng 2 cột 3) và chuẩn hóa đúng yêu cầu
        const customIdx = parsed.categories.findIndex((c) => c.id === "theo-yeu-cau");
        let item = null;
        if (customIdx >= 0) {
          [item] = parsed.categories.splice(customIdx, 1);
        } else if (defaultTheoYeuCau) {
          item = JSON.parse(JSON.stringify(defaultTheoYeuCau));
        }

        if (item) {
          item.title = "Khóa Học THEO YÊU CẦU";
          item.badge = "";
          item.sessionsCount = "";
          item.thumbnail = "3d-question";
          item.posters = [];
          item.highlights = [
            "Khóa Học Theo Nhu Cầu Cá Nhân",
            "Khóa Đào Tạo Doanh Nghiệp & Nhóm",
            "Khóa Cấp Tốc Xử Lý Việc Gấp"
          ];
          item.priceOnline = 0;
          item.priceOffline = 0;
          if (!item.tracks || item.tracks.length !== 1 || (item.tracks[0].sessions && item.tracks[0].sessions.length === 10)) {
            item.tracks = [
              {
                id: "custom-personal",
                tabLabel: "Tự Thiết Kế Giáo Án Theo Nhu Cầu",
                title: "Khóa Học THEO YÊU CẦU",
                duration: "Linh hoạt",
                priceOffline: 0,
                priceOnline: 0,
                sessions: []
              }
            ];
          } else {
            item.tracks[0].title = "Khóa Học THEO YÊU CẦU";
            item.tracks[0].tabLabel = "Tự Thiết Kế Giáo Án Theo Nhu Cầu";
            item.tracks[0].duration = "Linh hoạt";
          }
          parsed.categories.push(item);
        }

        SITE_DATA.categories = parsed.categories;

        // Lưu lại để đồng bộ vĩnh viễn trong localStorage của trình duyệt
        try {
          parsed.categories = SITE_DATA.categories;
          localStorage.setItem("CUSTOM_SITE_DATA", JSON.stringify(parsed));
        } catch (e) {}
      }
      if (parsed.showcaseSlides && Array.isArray(parsed.showcaseSlides)) {
        parsed.showcaseSlides.forEach((s) => {
          s.image = normalizeAppImageUrl(s.image);
        });
        if (defaultTheoYeuCauSlide && !parsed.showcaseSlides.some((s) => s.id === "theo-yeu-cau")) {
          parsed.showcaseSlides.push(defaultTheoYeuCauSlide);
        }
        SITE_DATA.showcaseSlides = parsed.showcaseSlides;
      }
    }

    // 2. Cấu hình SEO
    const savedSEO = localStorage.getItem("CUSTOM_SEO_CONFIG");
    if (savedSEO) {
      const parsedSEO = JSON.parse(savedSEO);
      Object.assign(SEO_CONFIG, parsedSEO);
    }

    // 3. Thông tin liên hệ & Từ khóa chân trang
    const savedSettings = localStorage.getItem("CUSTOM_SITE_SETTINGS");
    if (savedSettings) {
      const settings = JSON.parse(savedSettings);

      // Cập nhật thẻ meta keywords nếu có
      if (settings.metaKeywords) {
        const kwMeta = document.querySelector('meta[name="keywords"]');
        if (kwMeta) kwMeta.setAttribute("content", settings.metaKeywords);
      }

      // Cập nhật SĐT, Zalo
      if (settings.phone) {
        document.querySelectorAll("a[href^='tel:']").forEach((el) => {
          el.setAttribute("href", `tel:${settings.phone}`);
          const floatTxt = el.querySelector(".float-text");
          if (floatTxt) floatTxt.textContent = settings.phone;
          else if (el.textContent.includes("0916172524")) el.textContent = settings.phone;
        });
      }

      if (settings.zalo) {
        document.querySelectorAll("a[href*='zalo.me']").forEach((el) => {
          el.setAttribute("href", `https://zalo.me/${settings.zalo}`);
          const floatTxt = el.querySelector(".float-text");
          if (floatTxt) floatTxt.textContent = `Zalo: ${settings.zalo}`;
          else if (el.textContent.includes("Zalo")) {
            el.innerHTML = `💬 Zalo: ${settings.zalo}`;
          }
        });
      }

      // Cập nhật Footer Keywords
      if (settings.seoKeywords && Array.isArray(settings.seoKeywords) && settings.seoKeywords.length > 0) {
        const kwBox = document.querySelector(".seo-keywords-box");
        if (kwBox) {
          kwBox.innerHTML = `
            <span style="font-size:0.75rem; font-weight:700; color:var(--footer-strong);">Từ khóa nổi bật:</span>
            ${settings.seoKeywords.map(kw => `
              <a href="#coursesSection" class="seo-kw-tag" onclick="navigateTo('${kw.cat}')">${kw.text}</a>
            `).join("")}
          `;
        }
      }
    }

    // 4. Cấu hình Form Đăng Ký & Mục Khóa Học Quan Tâm (Checkbox Pills)
    const savedRegConfig = localStorage.getItem("CUSTOM_REGISTRATION_CONFIG");
    const regConfig = savedRegConfig ? JSON.parse(savedRegConfig) : DEFAULT_REGISTRATION_CONFIG;

    if (regConfig) {
      // Cập nhật tiêu đề form
      const regBadge = document.getElementById("regBadgeTitle");
      if (regBadge && regConfig.badgeTitle) regBadge.textContent = regConfig.badgeTitle;
      const regTitle = document.getElementById("regFormTitle");
      if (regTitle && regConfig.formTitle) regTitle.textContent = regConfig.formTitle;
      const calcBadge = document.getElementById("calcBadgeTitle");
      if (calcBadge && regConfig.calcBadgeTitle) calcBadge.textContent = regConfig.calcBadgeTitle;
      const calcTitle = document.getElementById("calcTitle");
      if (calcTitle) {
        if (regConfig.calcTitle === "Tra Cứu Học Phí Khóa Học Theo Yêu Cầu") {
          regConfig.calcTitle = "Tra Cứu Học Phí Khóa Học";
          try {
            localStorage.setItem("CUSTOM_REGISTRATION_CONFIG", JSON.stringify(regConfig));
          } catch(e) {}
        }
        calcTitle.textContent = regConfig.calcTitle || "Tra Cứu Học Phí Khóa Học";
      }
      const submitBtn = document.getElementById("regSubmitBtn");
      if (submitBtn && regConfig.submitBtnText) submitBtn.textContent = regConfig.submitBtnText;

      // Render lại danh sách Checkbox Pills
      const pillsContainer = document.getElementById("checkboxPillsContainer");
      if (pillsContainer && Array.isArray(regConfig.interestCourses) && regConfig.interestCourses.length > 0) {
        pillsContainer.innerHTML = regConfig.interestCourses.map(item => `
          <label class="checkbox-pill">
            <input type="checkbox" name="regCourses" value="${item.value || item.name}" ${item.checked ? "checked" : ""} />
            <span>${item.icon || "📌"} ${item.name}</span>
          </label>
        `).join("");
      }

      // Render lại danh sách Dropdown Tra Cứu Học Phí (để trống khi chưa chọn)
      const calcSel = document.getElementById("calcCourseSelect");
      if (calcSel && Array.isArray(regConfig.calcCourses) && regConfig.calcCourses.length > 0) {
        calcSel.innerHTML = `
          <option value="" selected></option>
          ${regConfig.calcCourses.map(item => `
            <option value="${item.id}" data-sessions="${item.sessions}" data-online="${item.online}" data-offline="${item.offline}">
              ${item.name}
            </option>
          `).join("")}
        `;
        calcSel.value = "";
      }

      // Đảm bảo dropdown hình thức học cũng để trống khi chưa chọn
      const modeSel = document.getElementById("calcModeSelect");
      if (modeSel && !modeSel.querySelector('option[value=""]')) {
        const blankOpt = document.createElement("option");
        blankOpt.value = "";
        blankOpt.selected = true;
        modeSel.insertBefore(blankOpt, modeSel.firstChild);
        modeSel.value = "";
      } else if (modeSel) {
        modeSel.value = "";
      }
    }
  } catch (err) {
    console.warn("Lỗi đọc dữ liệu tùy chỉnh từ Admin:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadAdminCustomData();
  const hash = (window.location.hash || "").replace("#", "");
  if (hash && SITE_DATA.categories.some((c) => c.id === hash)) {
    navigateTo(hash, false);
  } else {
    renderMainView();
  }
  updateFeeCalculator();
  initContactForm();
  initThemeToggle();
});
