import { Users, Map, Store, Lightbulb, TrendingUp, Landmark, MonitorSmartphone, Leaf, Scale, Hammer, UsersRound, HeartHandshake, Circle } from 'lucide-react';

// Pemetaan nama ikon (string pada data/content.js) ke komponen lucide-react.
// Tambahkan ikon baru di sini bila data baru memakainya.
const ICONS = { Users, Map, Store, Lightbulb, TrendingUp, Landmark, MonitorSmartphone, Leaf, Scale, Hammer, UsersRound, HeartHandshake };

export default function Icon({ name, size = 20, ...rest }) {
  const Cmp = ICONS[name] || Circle;
  return <Cmp size={size} {...rest} />;
}
