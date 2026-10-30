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
      id: "ai",
      label: "🤖 Khóa AI",
      title: "Làm chủ Gemini, Google Vids, NotebookLM, Suno & Canva",
      image: "https://lh3.googleusercontent.com/d/1CNjcRxW4Oy3X98lZAeklc-nXp6ZFKWb8"
    },
    {
      id: "illustrator",
      label: "✒️ Illustrator",
      title: "Thiết kế Vector, Ấn phẩm In ấn CMYK & Vẽ Minh Họa",
      image: "https://lh3.googleusercontent.com/d/1vlFZccTbBRWrB4cjDqyrS8LueCQC4w5x"
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
          title: "Thiết kế Quảng cáo với PHOTOSHOP VÀ AI",
          duration: "8 Buổi",
          priceOffline: 3600000,
          priceOnline: 2800000,
          sessions: [
            { num: "Buổi 1", title: "🚀 Khởi động Tư duy & Trợ lý AI", desc: "Làm quen Photoshop, thiết lập file chuẩn và viết prompt Gemini brainstorm ý tưởng." },
            { num: "Buổi 2", title: "✂️ Nền tảng Bóc tách & Cấu trúc", desc: "Dùng AI phân tích đối thủ; làm chủ Layer, Mask và tách nền sản phẩm siêu tốc." },
            { num: "Buổi 3", title: "🎨 Retouch & Biến hóa Màu sắc", desc: "Tâm lý học màu sắc AI; xóa chi tiết thừa, làm mịn bề mặt và blend màu thương mại." },
            { num: "Buổi 4", title: "✍️ Xây dựng Content Quảng cáo AI", desc: "Dùng Gemini viết Copywriting (Headline, CTA) và tạo prompt sinh ảnh nguyên liệu." },
            { num: "Buổi 5", title: "🔠 Nghệ thuật Typography", desc: "AI gợi ý cặp Font chữ; sắp xếp bố cục chữ, phân cấp thị giác và hiệu ứng Text." },
            { num: "Buổi 6", title: "🪄 Ghép ảnh (Manipulation) & Ánh sáng", desc: "Xử lý bóng đổ, đánh sáng và dùng Generative Fill ghép bối cảnh chân thực." },
            { num: "Buổi 7", title: "💻 Thực chiến Thiết kế Ấn phẩm", desc: "Kết hợp nguyên liệu AI & Photoshop hoàn thiện Banner / Social Post từ A-Z." },
            { num: "Buổi 8", title: "🏆 Nghiệm thu & Portfolio", desc: "Phản biện thiết kế cùng AI; đưa ấn phẩm vào Mockup và tổng kết dự án." }
          ]
        },
        {
          id: "ps-wedding",
          tabLabel: "3. Ảnh Cưới Studio & AI",
          title: "Ghép ảnh & Xử lý Ảnh Cưới Studio",
          duration: "8 Buổi",
          priceOffline: 3600000,
          priceOnline: 2800000,
          sessions: [
            { num: "Buổi 1", title: "🚀 Cảm hứng AI & Hệ màu Album", desc: "Dùng Gemini brainstorm concept ảnh cưới; thiết lập hệ màu chuẩn in ấn Album." },
            { num: "Buổi 2", title: "✂️ Bóc tách Váy cưới & Tóc phức tạp", desc: "Thực hành chuyên sâu Mask, Pen tool, tách voan xuyên thấu và tóc cô dâu siêu tốc." },
            { num: "Buổi 3", title: "✨ Retouch Da & Dáng hoàn hảo", desc: "Kỹ thuật Frequency Separation làm mịn da cao cấp, dùng Liquify nắn dáng & váy cưới." },
            { num: "Buổi 4", title: "🖼️ Kiến tạo Bối cảnh Studio bằng AI", desc: "Viết Prompt phông nền (lâu đài, cổng hoa) và dùng Generative Fill mở rộng bối cảnh." },
            { num: "Buổi 5", title: "🪄 Ghép nền, Khớp màu & Ánh sáng", desc: "Ghép cô dâu chú rể vào nền mới, xử lý bóng đổ, khớp tone màu và xóa phông." },
            { num: "Buổi 6", title: "🎨 Blend Màu theo Concept", desc: "Blend màu Hàn Quốc, Vintage, Fine-Art bằng Camera Raw và áp dụng Preset hàng loạt." },
            { num: "Buổi 7", title: "✍️ Typography & Layout Album", desc: "Thiết kế Typography chữ ký bay bổng, làm Layout bìa Album và Banner chốt sale." },
            { num: "Buổi 8", title: "🏆 Action Hàng Loạt & Photobook", desc: "Chạy Action chỉnh ảnh hàng loạt, đưa ảnh vào Mockup Album cưới thực tế." }
          ]
        }
      ]
    },
    {
      id: "illustrator",
      navName: "Illustrator",
      icon: "✒️",
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
            { num: "Buổi 1", title: "Nền tảng & Hình khối", desc: "Làm quen giao diện, hiểu đồ họa Vector và dựng logo/icon bằng công cụ cắt ghép." },
            { num: "Buổi 2", title: "Typography & Bố cục", desc: "Xử lý chữ nghệ thuật, uốn ép chữ và dàn trang thông tin quảng cáo mạng xã hội." },
            { num: "Buổi 3", title: "Màu sắc & Tạo khối", desc: "Làm chủ hệ màu (RGB/CMYK) và đánh bóng chân thực bằng Gradient/Mesh Tool." },
            { num: "Buổi 4", title: "Pen Tool & Đồ họa phẳng", desc: "Rèn vẽ nét chính xác, trace hình ảnh và vẽ nhân vật/icon (flat vector, chibi)." },
            { num: "Buổi 5", title: "Hiệu ứng & 3D Isometric", desc: "Ứng dụng Clipping Mask, Blend và công cụ 3D dựng phối cảnh không gian, Key Visual." },
            { num: "Buổi 6", title: "Thực chiến Digital", desc: "Quản lý đa Artboard và thiết kế bộ banner chạy quảng cáo Facebook, Website." },
            { num: "Buổi 7", title: "Thực chiến In ấn", desc: "Thiết lập vùng an toàn (Margin), tràn lề (Bleed) và xuất file chuẩn xưởng in Poster, Standee." },
            { num: "Buổi 8", title: "Đồ án & Portfolio", desc: "Tự lên ý tưởng thiết kế chiến dịch trọn vẹn, sửa trực tiếp và làm Mockup Portfolio." }
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
            { num: "Buổi 1", title: "Nền tảng in ấn", desc: "Thiết lập không gian làm việc, quản lý hệ màu CMYK (Bleed/Margin)." },
            { num: "Buổi 2", title: "Dựng hình Vector", desc: "Làm chủ Pen Tool, Pathfinder và thực hành thiết kế hệ thống icon." },
            { num: "Buổi 3", title: "Xử lý Typography", desc: "Nguyên lý chữ, kỹ thuật rã chữ (Create Outlines) và dàn trang văn bản." },
            { num: "Buổi 4", title: "Màu sắc chuyên sâu", desc: "Quản lý bảng màu Pantone, xử lý Gradient và cân bằng màu để bản in không xỉn." },
            { num: "Buổi 5", title: "Thiết kế Pattern", desc: "Tạo họa tiết liền mạch (Seamless Pattern) ứng dụng cho in vải và bao bì." },
            { num: "Buổi 6", title: "Nhận diện thương hiệu", desc: "Thiết kế chuẩn kích thước bộ ấn phẩm văn phòng (Namecard, bao thư, tiêu đề thư)." },
            { num: "Buổi 7", title: "Ấn phẩm quảng cáo (POSM)", desc: "Xử lý ảnh bitmap và thiết kế ấn phẩm khổ lớn như Poster, Standee." },
            { num: "Buổi 8", title: "Kiểm tra & Xuất file (Pre-press)", desc: "Rà soát lỗi (Overprint, link ảnh, font), bình trang và xuất file PDF/X chuẩn nhà in." }
          ]
        },
        {
          id: "ill-art",
          tabLabel: "3. Vẽ Minh Họa & Concept",
          title: "ILLUSTRATOR Vẽ Minh Họa & Concept Art",
          duration: "8 Buổi",
          priceOffline: 3600000,
          priceOnline: 2800000,
          sessions: [
            { num: "Buổi 1", title: "Khởi động & Tư duy hình khối", desc: "Tối ưu Workspace Digital Art, phân tích vật thể bằng Shape Builder, Pathfinder." },
            { num: "Buổi 2", title: "Pen Tool & Đường nét (Line-art)", desc: "Đi nét mượt với Pen Tool, Curvature, Pencil và chỉnh Stroke/Width Tool tạo chiều sâu." },
            { num: "Buổi 3", title: "Màu sắc & Đổ màu Vector", desc: "Bánh xe màu, tạo Color Palette, ứng dụng Gradient, Mesh Tool và Live Paint." },
            { num: "Buổi 4", title: "Minh họa Flat Design & Icon", desc: "Tư duy tối giản Flat Design, kết hợp Typography thiết kế set icon, logo minh họa." },
            { num: "Buổi 5", title: "Thiết kế Nhân vật & Mascot", desc: "Tỷ lệ cơ thể Chibi/Mascot, xây dựng biểu cảm khuôn mặt và pose dáng động." },
            { num: "Buổi 6", title: "Môi trường Concept Art & Isometric", desc: "Thiết lập lưới Grid vẽ môi trường Isometric cắt lớp (cutaway) 3D trong 2D." },
            { num: "Buổi 7", title: "Brush, Texture & Ánh sáng", desc: "Tạo Art/Pattern Brush giả lập màu nước, chì, mực kết hợp Mask và Blending Mode." },
            { num: "Buổi 8", title: "Hoàn thiện & Xuất file", desc: "Feedback 1 kèm 1, chuẩn bị file in CMYK và digital RGB, phát triển Portfolio." }
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
          tabLabel: "1. AI Cơ Bản Toàn Diện",
          title: "KHÓA HỌC AI CƠ BẢN (10 Buổi)",
          duration: "10 Buổi",
          priceOffline: 4500000,
          priceOnline: 3500000,
          sessions: [
            { num: "Buổi 1, 2, 3", title: "Google Gemini - Prompt & Tạo Ảnh", desc: "Viết prompt chuẩn xác, lên ý tưởng và huấn luyện AI tạo hình ảnh nghệ thuật phục vụ công việc." },
            { num: "Buổi 4", title: "Google Vids - Dựng Video AI", desc: "Tối ưu quy trình dựng video tự động cho thuyết trình và marketing nhanh chóng." },
            { num: "Buổi 5", title: "NotebookLM - Trợ lý Nghiên cứu", desc: "Tổng hợp tài liệu, phân tích thông tin và quản lý dữ liệu thông minh bằng AI." },
            { num: "Buổi 6", title: "Suno AI - Sáng tác Âm nhạc", desc: "Tự sản xuất các bản nhạc hoàn chỉnh theo nhiều phong cách không cần nhạc lý." },
            { num: "Buổi 7, 8, 9, 10", title: "Wix Web Design - Làm Website", desc: "Xây dựng website hoàn chỉnh từ số 0, kéo thả trực quan, tối ưu hiển thị máy tính & điện thoại." }
          ]
        },
        {
          id: "ai-design-video",
          tabLabel: "2. AI Hình Ảnh & Video",
          title: "KHÓA HỌC AI THIẾT KẾ HÌNH ẢNH & EDIT VIDEO (10 Buổi)",
          duration: "10 Buổi",
          priceOffline: 4500000,
          priceOnline: 3500000,
          sessions: [
            { num: "Buổi 1", title: "🔥 Prompt Engineering cùng Gemini", desc: "Tư duy ứng dụng AI trong sáng tạo đồ họa và kỹ thuật viết câu lệnh chuyên sâu." },
            { num: "Buổi 2", title: "🔥 Kết nối AI sang Canva", desc: "Chuyển hóa ý tưởng từ Gemini thành các thành phần thiết kế thực tế trên Canva." },
            { num: "Buổi 3", title: "🔥 Thiết kế Ấn phẩm Truyền thông", desc: "Quy trình thiết kế Banner, Poster và bài đăng mạng xã hội chuẩn kích thước." },
            { num: "Buổi 4", title: "🔥 Tư duy Typography & Màu sắc", desc: "Phối màu và kết hợp font chữ chuyên nghiệp thu hút thị giác." },
            { num: "Buổi 5", title: "🔥 Hoàn thiện Bộ Thiết Kế", desc: "Lên kịch bản với Gemini và thiết kế trọn bộ ấn phẩm trên Canva." },
            { num: "Buổi 6", title: "🎬 Video & Storyboard với Google Vids", desc: "Xây dựng phân cảnh và khởi tạo video nhanh với Google Vids." },
            { num: "Buổi 7", title: "🎬 Nhịp độ (Pacing) & Cắt ghép CapCut", desc: "Đưa tài nguyên vào CapCut, cắt ghép thô và loại bỏ cảnh thừa." },
            { num: "Buổi 8", title: "🎬 Keyframe & Đồng bộ Âm thanh", desc: "Tạo chuyển động mượt bằng Keyframe, thêm nhạc nền và Sound Effects." },
            { num: "Buổi 9", title: "🎬 Hiệu ứng Masking & Phụ đề Tự động", desc: "Kỹ thuật mặt nạ thị giác và tạo Auto-captions nhanh chóng." },
            { num: "Buổi 10", title: "🎬 Xuất bản Video Đa Nền Tảng", desc: "Hoàn thiện video TikTok, Reels, Shorts, YouTube từ kịch bản AI đến xuất file." }
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
          title: "KHÓA HỌC Làm Video AI (Gemini + Suno + CapCut)",
          duration: "10 Buổi",
          priceOffline: 4500000,
          priceOnline: 3500000,
          sessions: [
            { num: "Buổi 1", title: "Tư duy tự động hóa & Prompt Gemini", desc: "Quy trình sản xuất video AI và khai thác ý tưởng video viral theo ngách." },
            { num: "Buổi 2", title: "Xây dựng Kịch bản & Phân cảnh", desc: "Dùng Gemini viết kịch bản phân cảnh (Storyboarding) hoàn chỉnh." },
            { num: "Buổi 3", title: "Tạo nhạc nền với Suno AI", desc: "Viết prompt thể loại nhạc (Pop, Cinematic, Lofi...) tạo nhạc không bản quyền." },
            { num: "Buổi 4", title: "Kỹ thuật âm thanh & AI Vocals", desc: "Dùng tính năng Extend phát triển cấu trúc bài hát và xuất file chất lượng cao." },
            { num: "Buổi 5", title: "Làm chủ không gian CapCut", desc: "Quản lý dự án, import tài nguyên, cắt ghép cơ bản và điều chỉnh nhịp độ." },
            { num: "Buổi 6", title: "Chuyển động Keyframe & Masking", desc: "Tạo chuyển động mượt cho ảnh/text và lồng ghép khung hình sáng tạo." },
            { num: "Buổi 7", title: "Phụ đề tự động & Chữ động", desc: "Sử dụng Auto-captions chính xác và thiết kế Text animations hiện đại." },
            { num: "Buổi 8", title: "Âm thanh SFX & Chuyển cảnh", desc: "Đồng bộ nhạc Suno, giọng đọc AI, SFX và áp dụng Transitions hợp lý." },
            { num: "Buổi 9", title: "Chỉnh màu & Tối ưu đa nền tảng", desc: "Color Grading điện ảnh và thiết lập thông số Export chuẩn TikTok, Reels, Shorts." },
            { num: "Buổi 10", title: "Tổng duyệt 1 kèm 1 & Định hướng kênh", desc: "Sửa bài trực tiếp, tư vấn phát triển kênh và chia sẻ tài nguyên." }
          ]
        },
        {
          id: "video-capcut",
          tabLabel: "2. Edit Video CapCut (8 Buổi)",
          title: "KHÓA HỌC Edit Video CAPCUT Thực Chiến",
          duration: "8 Buổi",
          priceOffline: 3600000,
          priceOnline: 2800000,
          sessions: [
            { num: "Buổi 1", title: "Giao diện & Cắt ghép cơ bản", desc: "Làm chủ CapCut (PC, Mobile), quản lý Media và dựng thô video ngắn." },
            { num: "Buổi 2", title: "Âm thanh (Audio) & Tiêu đề (Text)", desc: "Khớp nhạc (Beat sync), lọc tạp âm, hiệu ứng chữ và Auto-captions." },
            { num: "Buổi 3", title: "Hiệu ứng & Chuyển cảnh", desc: "Áp dụng Transitions, Video Effects, Body Effects và Stickers." },
            { num: "Buổi 4", title: "Tốc độ (Speed Curve) & Keyframe", desc: "Tua nhanh, Slo-mo, Speed Curve và tạo chuyển động Zoom/Panning." },
            { num: "Buổi 5", title: "Lớp phủ (Overlay) & Mặt nạ (Mask)", desc: "Ghép PIP nhiều lớp video và làm hiệu ứng nhân bản, lồng ghép." },
            { num: "Buổi 6", title: "Chỉnh màu & Tách nền Chroma Key", desc: "Sử dụng Filters, LUTs điện ảnh, xóa phông xanh và tách nền tự động." },
            { num: "Buổi 7", title: "Tracking & Chống rung", desc: "Gắn chữ/sticker bám theo vật thể (Tracking), chống rung và làm đẹp AI." },
            { num: "Buổi 8", title: "Dự án cuối khóa & Xuất file", desc: "Hoàn thiện video TikTok/Reels/Vlog thực tế và xuất file sắc nét." }
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
      posters: ["https://lh3.googleusercontent.com/d/1GJv4ZKb9s7X9wkGu7BAUuxHl8Dk74tiW"],
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
            { num: "Buổi 1", title: "Khởi tạo & Giao diện Wix", desc: "Phân tích cấu trúc web, chọn template và thao tác kéo thả text, ảnh, nút bấm." },
            { num: "Buổi 2", title: "Tùy chỉnh Layout & Tương tác", desc: "Quản lý Section, Header, Footer, Menu, thêm Form liên hệ, bản đồ, nút chat." },
            { num: "Buổi 3", title: "Tối ưu Giao diện Điện thoại (Mobile)", desc: "Tinh chỉnh hiển thị Mobile Responsive, quản lý media và thêm hiệu ứng cuộn." },
            { num: "Buổi 4", title: "Tên miền (Domain) & Xuất bản", desc: "Rà soát lỗi tổng thể, kết nối tên miền, cấu hình hosting và Publish website." },
            { num: "Buổi 5", title: "Viết Copywriting Web với Gemini", desc: "Dùng Gemini viết trang Giới thiệu, Slogan, mô tả dịch vụ và bài Blog chuẩn SEO." },
            { num: "Buổi 6", title: "Kỹ thuật Prompt Hình ảnh AI", desc: "Nguyên lý bố cục, phong cách, ánh sáng và thực hành tạo ảnh minh họa bằng Gemini." },
            { num: "Buổi 7", title: "Tạo Banner & Tài nguyên Web", desc: "Tạo Hero Banner, icon, ảnh nền cho web và tối ưu dung lượng ảnh tải nhanh." },
            { num: "Buổi 8", title: "Khám phá Veo 3 & Kịch bản Video", desc: "Viết kịch bản Promo/Intro web cùng Gemini và thiết lập motion prompt trong Veo 3." },
            { num: "Buổi 9", title: "Sản xuất & Nhúng Video lên Web", desc: "Tạo video clip bằng Veo 3, ghép nối hoàn chỉnh và nhúng trực tiếp lên website." },
            { num: "Buổi 10", title: "SEO On-page & Nghiệm thu", desc: "Tối ưu Title, Meta Description, thẻ Alt trên Wix SEO Wiz và khai báo Google." }
          ]
        }
      ]
    }
  ]
};

// State
let currentTab = "home"; // 'home', 'photoshop', 'illustrator', 'ai', 'edit-video', 'web'
let currentPricingMode = "online"; // 'online' | 'offline'
let currentShowcaseIdx = 0;
let activeTrackIdxMap = {
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

// Biến quản lý khuôn mặt AI tương tác
let aiFaceInstance = null;

// Render Nhân vật AI Mochi 3D tương tác (chuyển lên vị trí Hero section bên phải)
function renderInteractiveFaceCard() {
  return `
    <article class="category-card ai-face-card" id="aiInteractiveFaceCard">
      <div class="category-thumb ai-face-thumb" id="aiFaceThumbArea">
        <canvas id="aiFaceCanvas" class="ai-face-canvas"></canvas>
        <span class="category-tag">🤖 Trợ Lý AI</span>
        <span class="category-count-badge">Tương Tác 3D</span>
        <div class="ai-face-drag-hint" id="aiFaceDragHint">
          <span>🖐️</span> Kéo bé Mochi 3D nè!
        </div>
      </div>
      <div class="category-body ai-face-body">
        <div class="category-footer" style="padding-top: 0; border-top: none;">
          <div>
            <span class="price-label">Trạng thái AI</span>
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

// Render 5 Ô Khóa Học
function renderCategoryCards() {
  const courseCardsHtml = SITE_DATA.categories
    .map((cat) => {
      const displayPrice =
        currentPricingMode === "online" ? cat.priceOnline : cat.priceOffline;
      const modeText =
        currentPricingMode === "online"
          ? "Học Online (Zoom/Meet)"
          : "Học Offline (Tận nơi)";
      const subItems = cat.highlights
        .map((h) => `<div class="subcourse-item"><span>✅</span> <span>${h}</span></div>`)
        .join("");

      return `
        <article class="category-card">
          <div class="category-thumb" onclick="navigateTo('${cat.id}')" style="cursor:pointer;">
            <img src="${cat.thumbnail}" alt="${cat.title}" loading="lazy" />
            <span class="category-tag">${cat.icon} ${cat.badge}</span>
            <span class="category-count-badge">${cat.sessionsCount}</span>
          </div>
          <div class="category-body">
            <h3 class="category-title">${cat.title}</h3>
            <div class="category-subcourses">
              ${subItems}
            </div>
            <div class="category-footer">
              <div>
                <span class="price-label">${modeText}</span>
                <span class="price-value">${formatVND(displayPrice)}</span>
              </div>
              <button class="btn btn-primary" style="padding:8px 16px; font-size:0.84rem;" onclick="navigateTo('${cat.id}')">
                XEM THÊM →
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  return courseCardsHtml;
}

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
    this.canvas.classList.add("is-dragging");

    if (this.hintEl) {
      this.hintEl.style.opacity = "0";
    }
    this.setStatus("Bé Mochi dẻo quánh nè! 😋");
  }

  endDrag() {
    this.isDragging = false;
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
          this.statusEl.textContent = "Đang nhìn bạn nè 🥰";
        }
      }, duration);
    }
  }

  update() {
    const now = Date.now();

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

    const cx = this.width / 2;
    const cy = this.height / 2 - 4;

    // 1. NỀN GRADIENT PASTEL HỒNG TÍM (Đúng theo mẫu ảnh)
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

    // 2. BÓNG ĐỔ 3D MỀM BÊN DƯỚI (Soft Contact Shadow)
    const shadowY = cy + 76 + (this.dispY * 0.22);
    const shadowRx = 68 * (pullDist > 0.01 ? (1 / Math.sqrt(stretch)) : 1);
    const shadowRy = 15 * (pullDist > 0.01 ? stretch : 1);
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

    // 3. THÂN NHÂN VẬT MOCHI 3D TRẮNG (Clay 3D / Soft Dough Sphere)
    const rx = 78;
    const ry = 74;

    // Đường cong khối Mochi tròn múp míp, đáy hơi dẹp nhẹ tự nhiên
    ctx.beginPath();
    ctx.moveTo(0, -ry);
    ctx.bezierCurveTo(rx * 0.95, -ry * 0.95, rx * 1.05, -ry * 0.1, rx * 1.03, 16);
    ctx.bezierCurveTo(rx * 0.98, ry * 0.82, rx * 0.55, ry * 1.02, 0, ry * 1.02);
    ctx.bezierCurveTo(-rx * 0.55, ry * 1.02, -rx * 0.98, ry * 0.82, -rx * 1.03, 16);
    ctx.bezierCurveTo(-rx * 1.05, -ry * 0.1, -rx * 0.95, -ry * 0.95, 0, -ry);
    ctx.closePath();

    // Hiệu ứng ánh sáng 3D khối cầu mềm (3D Lighting & Specular)
    const lightX = -26 + px * 0.45;
    const lightY = -30 + py * 0.45;
    const bodyGrad = ctx.createRadialGradient(lightX, lightY, 12, 0, 10, rx * 1.15);
    bodyGrad.addColorStop(0, "#ffffff");
    bodyGrad.addColorStop(0.55, "#ffffff");
    bodyGrad.addColorStop(0.82, "#f6f7fc");
    bodyGrad.addColorStop(0.96, "#e8ecf8");
    bodyGrad.addColorStop(1, "#dce2f2");
    ctx.fillStyle = bodyGrad;
    ctx.fill();

    // Viền stroke mềm mại
    ctx.strokeStyle = "rgba(215, 222, 238, 0.65)";
    ctx.lineWidth = 1.4;
    ctx.stroke();

    // Ánh sáng phản xạ môi trường pastel (Ambient Rim Light)
    const rimGrad = ctx.createRadialGradient(rx * 0.55, ry * 0.55, 15, rx * 0.55, ry * 0.55, 60);
    rimGrad.addColorStop(0, "rgba(244, 114, 182, 0.14)");
    rimGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = rimGrad;
    ctx.fill();

    // 4. VỆT MÁ HỒNG PASTEL (Đúng theo góc mắt trong ảnh mẫu)
    [-1, 1].forEach((dir) => {
      const blushX = dir * 48 + px * 0.5;
      const blushY = 8 + py * 0.5;
      ctx.save();
      ctx.translate(blushX, blushY);
      ctx.rotate(dir * 0.22);
      const blushGrad = ctx.createRadialGradient(0, 0, 1, 0, 0, 15);
      blushGrad.addColorStop(0, "rgba(244, 114, 182, 0.72)");
      blushGrad.addColorStop(0.5, "rgba(244, 114, 182, 0.4)");
      blushGrad.addColorStop(1, "rgba(244, 114, 182, 0)");
      ctx.fillStyle = blushGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, 15, 8, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });

    // 5. ĐÔI MẮT 3D TO TRÒN LIẾC NHÌN THEO CHUỘT
    const eyeSpacing = 28;
    const eyeY = 6 + py;
    const outerEyeW = 20;
    const outerEyeH = 22 * (1 - this.blinkProgress * 0.95);

    [-1, 1].forEach((dir) => {
      const eyeX = dir * eyeSpacing + px;

      // Khi chớp mắt: nét cong mỉm cười nhắm mắt ^ ^
      if (this.blinkProgress > 0.65 || outerEyeH < 3) {
        ctx.beginPath();
        ctx.arc(eyeX, eyeY - 2, 14, Math.PI * 0.15, Math.PI * 0.85);
        ctx.lineWidth = 3.2;
        ctx.strokeStyle = "#1e1e2d";
        ctx.lineCap = "round";
        ctx.stroke();
      } else {
        // Hốc mắt / Vòng ngoài tròng mắt màu xám trắng 3D đục (như ảnh mẫu)
        ctx.beginPath();
        ctx.ellipse(eyeX, eyeY, outerEyeW, outerEyeH, 0, 0, Math.PI * 2);
        ctx.fillStyle = "#f5f6fb";
        ctx.fill();
        ctx.strokeStyle = "rgba(218, 224, 238, 0.85)";
        ctx.lineWidth = 1.3;
        ctx.stroke();

        // Tròng đen to bóng bẩy nhìn theo chuột 360° (Glossy Dark Pupil)
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(eyeX, eyeY, outerEyeW - 0.5, outerEyeH - 0.5, 0, 0, Math.PI * 2);
        ctx.clip();

        const pupilOffsetX = this.gazeX * 7.4;
        const pupilOffsetY = this.gazeY * 5.6;
        const pupilX = eyeX + pupilOffsetX;
        const pupilY = eyeY + pupilOffsetY;
        const pupilR = 11.5;

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
        ctx.arc(pupilX - 2.8, pupilY - 3.2, 3.8, 0, Math.PI * 2);
        ctx.fillStyle = "#ffffff";
        ctx.fill();

        // Điểm phản quang phụ nhỏ li ti ở góc dưới
        ctx.beginPath();
        ctx.arc(pupilX + 3.2, pupilY + 3.2, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
        ctx.fill();

        ctx.restore();
      }
    });

    // 6. MIỆNG CƯỜI CONG NHỎ XINH ◡ (Theo ảnh mẫu)
    const mouthX = px * 0.45;
    const mouthY = 28 + py * 0.45;

    if (pullDist < 7) {
      // Đường cong lưỡi liềm mỉm cười nhỏ xinh
      ctx.beginPath();
      ctx.arc(mouthX, mouthY - 4, 8, Math.PI * 0.22, Math.PI * 0.78);
      ctx.lineWidth = 2.4;
      ctx.strokeStyle = "#1e1e2d";
      ctx.lineCap = "round";
      ctx.stroke();
    } else {
      // Miệng mở chữ O ngơ ngác đáng yêu khi bị kéo dãn đàn hồi
      const openH = Math.min(6 + pullDist * 0.35, 24);
      const openW = Math.max(10, 14 - pullDist * 0.05);

      ctx.save();
      ctx.beginPath();
      ctx.ellipse(mouthX, mouthY + openH * 0.25, openW, openH, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#2c0b14";
      ctx.fill();
      ctx.clip();

      // Chiếc lưỡi hồng chúm chím
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

    ctx.restore(); // Kết thúc biến dạng cục bộ
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

// Switch active track inside a category page
window.selectCategoryTrack = function (catId, trackIdx) {
  activeTrackIdxMap[catId] = trackIdx;
  renderMainView();
};

// Expand / Collapse all sessions in current track
window.toggleAllSessions = function (expand) {
  document.querySelectorAll(".session-item").forEach((el) => {
    el.classList.toggle("expanded", expand);
  });
};

// Render Department Page (Compact with Sub-Course Tabs & Accordion Sessions)
function renderDepartmentPage(cat) {
  const activeIdx = activeTrackIdxMap[cat.id] || 0;
  const track = cat.tracks[activeIdx] || cat.tracks[0];

  const postersHtml = cat.posters
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

  const sessionsHtml = track.sessions
    .map(
      (s, idx) => `
      <div class="session-item ${idx < 2 ? "expanded" : ""}" onclick="this.classList.toggle('expanded')">
        <div class="session-top">
          <span class="session-num">${s.num}</span>
          <span class="session-title">${s.title}</span>
          <span class="session-chevron">▼</span>
        </div>
        <div class="session-desc">${s.desc}</div>
      </div>
    `
    )
    .join("");

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
          <span class="hero-pill">${cat.icon} ${cat.badge} • 1 Kèm 1 Theo Yêu Cầu</span>
          <h1 class="hero-title" style="font-size: clamp(1.4rem, 2.8vw, 2.1rem);">${cat.title}</h1>
          <p class="hero-desc">${cat.shortDesc}</p>
          <div class="hero-cta-group">
            <button class="btn btn-primary" onclick="prefillCourseAndScroll('${track.title}')">
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
              ⏱️ Thời lượng: <strong>${track.duration}</strong> • 📅 Giờ học linh hoạt theo học viên (Chạm vào từng buổi để xem chi tiết)
            </div>
          </div>

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
        </div>

        <div style="display:flex; justify-content:flex-end; gap:8px; margin-bottom:10px;">
          <button type="button" class="quick-pill" onclick="toggleAllSessions(true)">Mở tất cả buổi</button>
          <button type="button" class="quick-pill" onclick="toggleAllSessions(false)">Thu gọn</button>
        </div>

        <div class="sessions-grid">
          ${sessionsHtml}
        </div>
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
              <a href="#coursesSection" class="btn btn-primary">
                🔥 Xem Khóa Học
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

    <section id="coursesSection" class="container">
      <div class="section-header">
        <span class="section-badge">🎓 Chương Trình Đào Tạo</span>
        <h2 class="section-title">KHÓA HỌC ỨNG DỤNG AI</h2>
        <p class="section-subtitle">
          Chọn hình thức học bên dưới để xem học phí tương ứng:
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

  const opt = courseSel.options[courseSel.selectedIndex];
  const sessions = parseInt(opt.getAttribute("data-sessions") || "8", 10);
  const price =
    modeSel.value === "online"
      ? parseInt(opt.getAttribute("data-online"), 10)
      : parseInt(opt.getAttribute("data-offline"), 10);

  totalEl.textContent = formatVND(price);
  breakdownEl.textContent = `Trọn khóa ${sessions} buổi (${formatVND(Math.round(price / sessions))}/buổi)`;
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
  calcTitle: "Tra Cứu Học Phí Khóa Học Theo Yêu Cầu",
  submitBtnText: "🚀 Gửi Đăng Ký Về Mail (Submit)",
  interestCourses: [
    { id: "ps", name: "Photoshop", icon: "🎨", value: "Khóa học Photoshop theo yêu cầu", checked: true },
    { id: "ill", name: "Illustrator", icon: "✒️", value: "Khóa học Illustrator theo yêu cầu", checked: false },
    { id: "ai", name: "Trí Tuệ Nhân Tạo (AI)", icon: "🤖", value: "Khóa học Trí tuệ nhân tạo theo yêu cầu", checked: false },
    { id: "video", name: "Edit Video", icon: "🎬", value: "Khóa học Edit Video theo yêu cầu", checked: false },
    { id: "web", name: "Tạo Web", icon: "🌐", value: "Khóa học ứng dụng AI - Tạo Web với AI", checked: false }
  ],
  calcCourses: [
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
        SITE_DATA.categories = parsed.categories;
      }
      if (parsed.showcaseSlides && Array.isArray(parsed.showcaseSlides)) {
        parsed.showcaseSlides.forEach((s) => {
          s.image = normalizeAppImageUrl(s.image);
        });
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
      if (calcTitle && regConfig.calcTitle) calcTitle.textContent = regConfig.calcTitle;
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

      // Render lại danh sách Dropdown Tra Cứu Học Phí
      const calcSel = document.getElementById("calcCourseSelect");
      if (calcSel && Array.isArray(regConfig.calcCourses) && regConfig.calcCourses.length > 0) {
        calcSel.innerHTML = regConfig.calcCourses.map(item => `
          <option value="${item.id}" data-sessions="${item.sessions}" data-online="${item.online}" data-offline="${item.offline}">
            ${item.name}
          </option>
        `).join("");
      }
    }
  } catch (err) {
    console.warn("Lỗi đọc dữ liệu tùy chỉnh từ Admin:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadAdminCustomData();
  renderMainView();
  updateFeeCalculator();
  initContactForm();
  initThemeToggle();
});
