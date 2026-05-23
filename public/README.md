# 画像ファイルの配置方法

## ディレクトリ構造

```
public/
├── images/          # 画像ファイルをここに配置
│   ├── church.jpg   # 教会の外観
│   ├── pastor.jpg   # 牧師の写真
│   └── hero.jpg     # ヒーロー画像
└── favicon.ico      # ファビコン
```

## 画像の配置手順

1. 画像ファイルを `public/images/` フォルダにコピー
2. コードで参照する際は `/images/ファイル名` を使用

## コードでの使用例

### 通常のimgタグ
```tsx
<img src="/images/church.jpg" alt="教会" />
```

### Next.js Imageコンポーネント（推奨）
```tsx
import Image from 'next/image';

<Image
  src="/images/church.jpg"
  alt="教会"
  width={800}
  height={600}
  className="..."
/>
```

## 推奨画像サイズ

- ヒーロー画像: 1920x1080px
- 牧師写真: 400x400px
- カードサムネイル: 600x400px
