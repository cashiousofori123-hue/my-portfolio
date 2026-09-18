export type Service = {
  id: string
  title: string
  tagline: string
  price: string
  cover: string
  images: string[]
}

export const services: Service[] = [
  {
    id: "phone",
    title: "Phone Repairs",
    tagline: "Cracked screens, batteries & more for iPhone, Samsung, Tecno & Infinix.",
    price: "From GH₵ 80",
    cover: "/images/phone/phone-1.png",
    images: Array.from({ length: 6 }, (_, i) => `/images/phone/phone-${i + 1}.png`),
  },
  {
    id: "laptop",
    title: "Laptop Repairs",
    tagline: "HP, Dell, MacBook, Lenovo — screens, keyboards & hinges fixed fast.",
    price: "From GH₵ 150",
    cover: "/images/laptop/laptop-1.png",
    images: Array.from({ length: 6 }, (_, i) => `/images/laptop/laptop-${i + 1}.png`),
  },
  {
    id: "windows",
    title: "Windows Installation & Activation",
    tagline: "Genuine Windows 11 install, activation keys & Microsoft Office setup.",
    price: "From GH₵ 100",
    cover: "/images/windows/windows-1.png",
    images: Array.from({ length: 6 }, (_, i) => `/images/windows/windows-${i + 1}.png`),
  },
  {
    id: "unlock",
    title: "Unlocking & Flashing",
    tagline: "Network unlock, FRP removal, flashing & software restoration.",
    price: "From GH₵ 50",
    cover: "/images/unlock/unlock-1.png",
    images: Array.from({ length: 6 }, (_, i) => `/images/unlock/unlock-${i + 1}.png`),
  },
  {
    id: "accessories",
    title: "Accessories",
    tagline: "Chargers, cases, earbuds, power banks & genuine spare parts.",
    price: "From GH₵ 20",
    cover: "/images/accessories/acc-1.png",
    images: Array.from({ length: 6 }, (_, i) => `/images/accessories/acc-${i + 1}.png`),
  },
  {
    id: "board",
    title: "Board Repair",
    tagline: "Micro-soldering, IC replacement & motherboard fault diagnosis.",
    price: "From GH₵ 200",
    cover: "/images/board/board-1.png",
    images: Array.from({ length: 6 }, (_, i) => `/images/board/board-${i + 1}.png`),
  },
]

export const themes = [
  { id: "blue", name: "Tech Blue", color: "#0a84ff" },
  { id: "emerald", name: "Emerald", color: "#00c853" },
  { id: "purple", name: "Royal Purple", color: "#6200ea" },
  { id: "orange", name: "Sunset Orange", color: "#ff6d00" },
  { id: "pink", name: "Lucid Pink", color: "#e91e63" },
  { id: "cyan", name: "Lucid Cyan", color: "#00bcd4" },
] as const
