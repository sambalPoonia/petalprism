// Centralized data and image imports
import flower1 from "../flower1.png";
import flower2 from "../flower2.png";
import flower3 from "../flower3.png";
import flower4 from "../flower4.png";
import flower5 from "../flower5.png";
import flower6 from "../flower6.png";
import flower7 from "../flower7.png";
import flower8 from "../flower8.png";
import flower9 from "../flower9.png";
import flower10 from "../flower10.png";
import flower11 from "../flower11.png";
import flower12 from "../flower12.png";
import flower13 from "../flower13.png";
import flower14 from "../flower14.png";
import flower15 from "../flower15.png";
import flower16 from "../flower16.png";
import flower17 from "../flower17.png";
import flower18 from "../flower18.png";
import flower19 from "../flower19.png";
import flower20 from "../flower20.png";
import flower21 from "../flower21.png";
import flower22 from "../flower22.png";
import flower23 from "../flower23.png";
import flower24 from "../flower24.png";
import flower25 from "../flower25.png";
import flower26 from "../flower26.png";
import flower27 from "../flower27.jpg";
import flower28 from "../flower28.jpg";
import flower29 from "../flower29.jpg";
import flower30 from "../flower30.jpg";
import flower31 from "../flower31.jpg";
import flower32 from "../flower32.jpg";
import flower33 from "../flower33.jpg";
import flower34 from "../flower34.jpg";
import flower35 from "../flower35.jpg";
import flower36 from "../flower36.jpg";
import flower37 from "../flower37.jpg";
import flower38 from "../flower38.jpg";
import flower39 from "../flower39.jpg";
import flower40 from "../flower40.jpg";
import flower41 from "../flower41.jpg";
import flower42 from "../flower42.jpg";
import flower43 from "../flower43.jpg";
import flower44 from "../flower44.jpg";
import flower45 from "../flower45.jpg";
import flower46 from "../flower46.jpg";
import flower47 from "../flower47.jpg";
import flower48 from "../flower48.jpg";
import flower49 from "../flower49.jpg";
import flower50 from "../flower50.jpg";

export const FLOWER_IMAGES = {
  1: flower1, 2: flower2, 3: flower3, 4: flower4, 5: flower5, 6: flower6, 7: flower7,
  8: flower8, 9: flower9, 10: flower10, 11: flower11, 12: flower12, 13: flower13, 14: flower14,
  15: flower15, 16: flower16, 17: flower17, 18: flower18, 19: flower19, 20: flower20,
  21: flower21, 22: flower22, 23: flower23, 24: flower24, 25: flower25, 26: flower26, 27: flower27,
  28: flower28, 29: flower29, 30: flower30, 31: flower31, 32: flower32, 33: flower33, 34: flower34,
  35: flower35, 36: flower36, 37: flower37, 38: flower38, 39: flower39, 40: flower40, 41: flower41,
  42: flower42, 43: flower43, 44: flower44, 45: flower45, 46: flower46, 47: flower47, 48: flower48,
  49: flower49, 50: flower50
};

export const PRODUCTS = [
{ id: 1, name: "Velvet Rose Elixir", flower: "Rose", price: 2499, description: "I chose you because your heart loves deeply and bravely. Like me, you carry both softness and strength. Your presence leaves a mark of passion wherever you go.", emoji: "🧴", color: "#c0536a", bg: "#fdf0f2" },

{ id: 2, name: "Lily's Whisper", flower: "Lily", price: 2699, description: "I chose you because your soul is pure and calming. You bring peace into chaotic spaces. Your elegance speaks without needing noise.", emoji: "🧴", color: "#c9982c", bg: "#fdf9f0" },

{ id: 3, name: "Lavender Veil", flower: "Lavender", price: 2199, description: "I chose you because you heal others without even trying. Your calm energy comforts restless hearts. You are serenity in human form.", emoji: "🧴", color: "#7b6fa0", bg: "#f4f0fd" },

{ id: 4, name: "Jasmine Night", flower: "Jasmine", price: 2599, description: "I chose you because your strength is quiet but powerful. You don’t demand attention — you naturally attract it. Your warmth lingers like a beautiful memory.", emoji: "🧴", color: "#c49a6c", bg: "#fdf7f0" },

{ id: 5, name: "Orchid Noir", flower: "Orchid", price: 2999, description: "I chose you because you are rare and unforgettable. You carry mystery and depth. Not everyone understands you — and that’s your magic.", emoji: "🧴", color: "#0f0d0f", bg: "#f9f0fd" },

{ id: 6, name: "Peony Dawn", flower: "Peony", price: 2399, description: "I chose you because you bloom beautifully after patience. Your heart is romantic and hopeful. You believe in grand love stories.", emoji: "🧴", color: "#d4708a", bg: "#fdf0f5" },

{ id: 7, name: "Tulip Reverie", flower: "Tulip", price: 1999, description: "I chose you because you are simple yet meaningful. Your loyalty and sincerity make people feel safe. You love with honesty.", emoji: "🧴", color: "#d96f6f", bg: "#fff5f5" },

{ id: 8, name: "Sunflower Glow", flower: "Sunflower", price: 2099, description: "I chose you because you chase light even on dark days. Your positivity inspires others. You are warmth in human form.", emoji: "🧴", color: "#f4b400", bg: "#fff9e6" },

{ id: 9, name: "Daffodil Muse", flower: "Daffodil", price: 1899, description: "I chose you because you represent new beginnings. You rise stronger after every winter. Your optimism is contagious.", emoji: "🧴", color: "#f2c94c", bg: "#fffdec" },

{ id: 10, name: "Iris Lumen", flower: "Iris", price: 2299, description: "I chose you because you are wise beyond your years. Your thoughts are deep and visionary. You see beauty where others don’t.", emoji: "🧴", color: "#5b5fd6", bg: "#f3f2ff" },

{ id: 11, name: "Chrysanthemum Silk", flower: "Chrysanthemum", price: 2199, description: "I chose you because you value loyalty and truth. Your heart is dependable. People trust you with their secrets.", emoji: "🧴", color: "#d9643b", bg: "#fff6f2" },

{ id: 12, name: "Carnation Kiss", flower: "Carnation", price: 1799, description: "I chose you because you love sincerely and purely. Your affection is steady and comforting. You cherish relationships deeply.", emoji: "🧴", color: "#e07a8a", bg: "#fff4f6" },

{ id: 13, name: "Magnolia Breeze", flower: "Magnolia", price: 2799, description: "I chose you because your dignity and grace shine naturally. You don’t seek approval. You know your worth.", emoji: "🧴", color: "#f1d7c4", bg: "#fffaf7" },

{ id: 14, name: "Marigold Ember", flower: "Marigold", price: 1699, description: "I chose you because you carry warmth and protection. You uplift others during difficult times. Your spirit is strong and sacred.", emoji: "🧴", color: "#f5a623", bg: "#fff7e6" },

{ id: 15, name: "Gardenia Veil", flower: "Gardenia", price: 2899, description: "I chose you because your love runs deep and intense. You feel emotions fully. Your presence feels luxurious and comforting.", emoji: "🧴", color: "#ffffff", bg: "#fffefe" },

{ id: 16, name: "Hyacinth Whisper", flower: "Hyacinth", price: 1999, description: "I chose you because you are playful yet thoughtful. Your charm brightens dull moments. You bring freshness into life.", emoji: "🧴", color: "#7da0f2", bg: "#f4f8ff" },

{ id: 17, name: "Lotus Calm", flower: "Lotus", price: 3099, description: "I chose you because you rise beautifully from challenges. Your resilience is inspiring. You bloom even in muddy waters.", emoji: "🧴", color: "#e6d1f8", bg: "#fbf7ff" },

{ id: 18, name: "Camellia Grace", flower: "Camellia", price: 2499, description: "I chose you because you value admiration and respect. Your elegance is effortless. You leave a quiet impression.", emoji: "🧴", color: "#f4c5d9", bg: "#fff6fa" },

{ id: 19, name: "Hibiscus Flame", flower: "Hibiscus", price: 1899, description: "I chose you because you live boldly and vibrantly. Your energy is passionate. You embrace life fully.", emoji: "🧴", color: "#ff6b6b", bg: "#fff6f6" },

{ id: 20, name: "Poppy Night", flower: "Poppy", price: 1799, description: "I chose you because you are creative and dreamy. Your imagination paints the world differently. You live between reality and art.", emoji: "🧴", color: "#d94f4f", bg: "#fff5f5" },

{ id: 21, name: "Violet Muse", flower: "Violet", price: 1699, description: "I chose you because you are humble yet strong. Your quiet nature hides great depth. You feel more than you show.", emoji: "🧴", color: "#6b4fb3", bg: "#f6f4ff" },

{ id: 22, name: "Dandelion Day", flower: "Dandelion", price: 1499, description: "I chose you because you are resilient and free-spirited. You survive anywhere and everywhere. Your dreams float fearlessly.", emoji: "🧴", color: "#f2d86b", bg: "#fffde6" },

{ id: 23, name: "Geranium Garden", flower: "Geranium", price: 1599, description: "I chose you because you balance emotion and logic beautifully. You are practical yet caring. Stability follows you.", emoji: "🧴", color: "#e0706f", bg: "#fff5f5" },

{ id: 24, name: "Freesia Light", flower: "Freesia", price: 1999, description: "I chose you because you value trust and friendship deeply. Your loyalty is rare. You nurture bonds carefully.", emoji: "🧴", color: "#f6d77a", bg: "#fffbe8" },

{ id: 25, name: "Anemone Echo", flower: "Anemone", price: 1799, description: "I chose you because you are protective of your heart. You open up slowly — but when you do, it’s magical.", emoji: "🧴", color: "#c47fa6", bg: "#fff5fb" },

{ id: 26, name: "Azalea Bloom", flower: "Azalea", price: 1699, description: "I chose you because you carry gentle passion. You may seem soft, but your love burns brightly inside.", emoji: "🧴", color: "#f7a6c2", bg: "#fff5f8" },

{ id: 27, name: "Begonia Velvet", flower: "Begonia", price: 1599, description: "I chose you because you are unique and independent. You don’t follow crowds. You create your own path.", emoji: "🧴", color: "#d07a6a", bg: "#fff4f3" },

{ id: 28, name: "Zinnia Song", flower: "Zinnia", price: 1499, description: "I chose you because you celebrate friendship and joy. Your laughter heals people. You bring color into dull lives.", emoji: "🧴", color: "#f28b2c", bg: "#fff8f0" },

{ id: 29, name: "Aster Nightfall", flower: "Aster", price: 1699, description: "I chose you because you believe in hope. Even in darkness, you search for stars. Your faith is beautiful.", emoji: "🧴", color: "#b88fe6", bg: "#fbf6ff" },

{ id: 30, name: "Lilac Whisper", flower: "Lilac", price: 1799, description: "I chose you because you hold memories tenderly. Your love feels nostalgic and sincere. You cherish first moments.", emoji: "🧴", color: "#b59bd6", bg: "#fbf7ff" },

{ id: 31, name: "Chamomile Calm", flower: "Chamomile", price: 1499, description: "I chose you because you soothe anxious souls. Your presence feels like comfort after a long day.", emoji: "🧴", color: "#f0e7b8", bg: "#fffeec" },

{ id: 32, name: "Sweet Pea Promise", flower: "Sweet Pea", price: 1699, description: "I chose you because your kindness is genuine. You care without expecting anything in return.", emoji: "🧴", color: "#f6c8e6", bg: "#fff5fb" },

{ id: 33, name: "Heather Hush", flower: "Heather", price: 1599, description: "I chose you because you are independent yet loving. You don’t lose yourself in others.", emoji: "🧴", color: "#a98fcf", bg: "#fbf6ff" },

{ id: 34, name: "Ranunculus Glow", flower: "Ranunculus", price: 1999, description: "I chose you because your charm is irresistible. You attract people naturally without trying.", emoji: "🧴", color: "#f3a7b1", bg: "#fff6f7" },

{ id: 35, name: "Amaryllis Night", flower: "Amaryllis", price: 2199, description: "I chose you because you are confident and bold. You enter rooms with power and grace.", emoji: "🧴", color: "#d94b5b", bg: "#fff5f6" },

{ id: 36, name: "Bluebell Song", flower: "Bluebell", price: 1599, description: "I chose you because you are delicate yet strong. You believe in quiet resilience.", emoji: "🧴", color: "#7fb1ff", bg: "#f5fbff" },

{ id: 37, name: "Foxglove Spell", flower: "Foxglove", price: 1899, description: "I chose you because you are mysterious and magnetic. People are drawn to your aura.", emoji: "🧴", color: "#c77ed6", bg: "#fff5fb" },

{ id: 38, name: "Heliotrope Dream", flower: "Heliotrope", price: 1999, description: "I chose you because you stay loyal to your light. You follow what feels right to your heart.", emoji: "🧴", color: "#8f6ccf", bg: "#f8f4ff" },

{ id: 39, name: "Narcissus Morning", flower: "Narcissus", price: 1699, description: "I chose you because you value self-growth. You are learning to love yourself first.", emoji: "🧴", color: "#efe9a6", bg: "#ffffe9" },

{ id: 40, name: "Protea Wild", flower: "Protea", price: 2799, description: "I chose you because you are extraordinary and fearless. You adapt and evolve beautifully.", emoji: "🧴", color: "#d86f6f", bg: "#fff5f5" },

{ id: 41, name: "Calendula Glow", flower: "Calendula", price: 1599, description: "I chose you because you heal emotional wounds. Your care feels safe and warm.", emoji: "🧴", color: "#f2a33a", bg: "#fff8ec" },

{ id: 42, name: "Verbena Breeze", flower: "Verbena", price: 1499, description: "I chose you because you believe in magic and connection. You trust your intuition deeply.", emoji: "🧴", color: "#9ad6b8", bg: "#f6fffb" },

{ id: 43, name: "Yarrow Shield", flower: "Yarrow", price: 1699, description: "I chose you because you are protective and courageous. You defend those you love.", emoji: "🧴", color: "#f1d1a6", bg: "#fff8f2" },

{ id: 44, name: "Salvia Dawn", flower: "Salvia", price: 1599, description: "I chose you because you are wise and grounded. Your advice feels like truth.", emoji: "🧴", color: "#6ea3d6", bg: "#f5fbff" },

{ id: 45, name: "Morning Glory Rise", flower: "Morning Glory", price: 1499, description: "I chose you because you bloom with the sunrise. You bring fresh hope every day.", emoji: "🧴", color: "#6b9df2", bg: "#f4f8ff" },

{ id: 46, name: "Lupine Vale", flower: "Lupine", price: 1699, description: "I chose you because you are imaginative and artistic. You see life as a canvas.", emoji: "🧴", color: "#7da6f2", bg: "#f4f9ff" },

{ id: 47, name: "Phlox Evening", flower: "Phlox", price: 1599, description: "I chose you because you value unity and harmony. You bring people together.", emoji: "🧴", color: "#f7a6d6", bg: "#fff6fb" },

{ id: 48, name: "Scabiosa Song", flower: "Scabiosa", price: 1499, description: "I chose you because you are rare and intriguing. Your uniqueness is your power.", emoji: "🧴", color: "#c6a0d9", bg: "#fbf6ff" },

{ id: 49, name: "Bellflower Echo", flower: "Campanula", price: 1499, description: "I chose you because your heart is pure and gentle. You carry quiet joy.", emoji: "🧴", color: "#8fb1ff", bg: "#f6fbff" },

{ id: 50, name: "Snapdragon Flame", flower: "Snapdragon", price: 1799, description: "I chose you because you are playful and strong at the same time. Your spirit cannot be easily broken.", emoji: "🧴", color: "#e07a5f", bg: "#fff5f3" }
];

export const FLOWER_MAP = {
  1: "Rose", 2: "Lily", 3: "Lavender", 4: "Jasmine", 5: "Orchid", 6: "Peony",
  7: "Tulip", 8: "Sunflower", 9: "Daffodil", 10: "Iris", 11: "Chrysanthemum", 12: "Carnation",
  13: "Magnolia", 14: "Marigold", 15: "Gardenia", 16: "Hyacinth", 17: "Lotus", 18: "Camellia",
  19: "Hibiscus", 20: "Poppy", 21: "Violet", 22: "Dandelion", 23: "Geranium", 24: "Freesia",
  25: "Anemone", 26: "Azalea", 27: "Begonia", 28: "Zinnia", 29: "Aster", 30: "Lilac",
  31: "Chamomile", 32: "Sweet Pea", 33: "Heather", 34: "Ranunculus", 35: "Amaryllis", 36: "Bluebell",
  37: "Foxglove", 38: "Heliotrope", 39: "Narcissus", 40: "Protea", 41: "Calendula", 42: "Verbena",
  43: "Yarrow", 44: "Salvia", 45: "Morning Glory", 46: "Lupine", 47: "Phlox", 48: "Scabiosa",
  49: "Campanula", 50: "Snapdragon",
};

export const FLOWER_LETTERS = {
  Rose: {
    letter: `My fearless heart,

You love like the sky burns at sunset — deeply and without apology.
Even your silence carries passion.
I bloomed for you because your soul understands both thorns and tenderness.

Forever yours,
Rose`,
    emoji: "🌹",
    gradient: "linear-gradient(135deg, #c0536a 0%, #8b2252 100%)"
  },

  Lily: {
    letter: `My gentle soul,

You move through the world like soft morning light.
Your kindness feels like calm water on restless days.
I chose you because purity still lives inside you.

With quiet grace,
Lily`,
    emoji: "🌼",
    gradient: "linear-gradient(135deg, #c9982c 0%, #8b6a10 100%)"
  },

  Lavender: {
    letter: `My peaceful dreamer,

When storms gather, you become the calm.
Your presence is a soft lullaby the world didn’t know it needed.
I bloom wherever your heart rests.

Breathing softly with you,
Lavender`,
    emoji: "💜",
    gradient: "linear-gradient(135deg, #7b6fa0 0%, #4a3d7a 100%)"
  },

  Jasmine: {
    letter: `My quiet strength,

You don’t ask to be noticed — yet everyone feels you.
Like night air filled with secret sweetness,
you linger long after you leave.

Always near,
Jasmine`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #c49a6c 0%, #8b6340 100%)"
  },

  Orchid: {
    letter: `My rare wonder,

You were never meant to blend in.
There is mystery in your smile and poetry in your silence.
I chose you because extraordinary recognizes extraordinary.

In elegance,
Orchid`,
    emoji: "🌺",
    gradient: "linear-gradient(135deg, #8b4a8b 0%, #4a1a6b 100%)"
  },

  Peony: {
    letter: `My romantic heart,

You believe in grand love and soft promises.
Every blush of yours feels like spring arriving.
I bloom for those who still believe in magic.

Lovingly,
Peony`,
    emoji: "🌷",
    gradient: "linear-gradient(135deg, #d4708a 0%, #8b3055 100%)"
  },

  Tulip: {
    letter: `My honest love,

Your heart speaks simply and truly.
You don’t complicate what is meant to be pure.
I chose you because sincerity is your superpower.

With warmth,
Tulip`,
    emoji: "🌷",
    gradient: "linear-gradient(135deg, #d96f6f 0%, #9b3f3f 100%)"
  },

  Sunflower: {
    letter: `My sunshine seeker,

Even on cloudy days, you search for light.
Your laughter feels like golden fields dancing in wind.
I turn toward you the way I turn toward the sun.

Radiantly,
Sunflower`,
    emoji: "🌻",
    gradient: "linear-gradient(135deg, #f4b400 0%, #c27a00 100%)"
  },

  Daffodil: {
    letter: `My new beginning,

You rise again and again, no matter the winter.
Hope follows wherever your footsteps fall.
I bloom for those brave enough to start over.

In bright faith,
Daffodil`,
    emoji: "🌼",
    gradient: "linear-gradient(135deg, #f2c94c 0%, #c79a25 100%)"
  },

  Iris: {
    letter: `My wise heart,

You see colors others miss.
Your thoughts carry depth like twilight skies.
I chose you because vision lives inside you.

With admiration,
Iris`,
    emoji: "🪻",
    gradient: "linear-gradient(135deg, #5b5fd6 0%, #2f2fa0 100%)"
  },

  Chrysanthemum: {
    letter: `My loyal one,

Your promises are steady as seasons.
You hold love carefully, never carelessly.
I bloom for hearts that stay.

Faithfully,
Chrysanthemum`,
    emoji: "🌼",
    gradient: "linear-gradient(135deg, #d9643b 0%, #8b3f2a 100%)"
  },

  Carnation: {
    letter: `My sweet affection,

Your love is simple and sincere.
You cherish softly, yet fully.
I chose you because devotion suits you beautifully.

Tenderly,
Carnation`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #e07a8a 0%, #9b4952 100%)"
  },

  Magnolia: {
    letter: `My graceful spirit,

There is dignity in the way you walk through storms.
You never beg to be seen — you simply shine.
I bloom for those who know their worth.

With poise,
Magnolia`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #f1d7c4 0%, #b68f7a 100%)"
  },

  Marigold: {
    letter: `My warm protector,

Your energy feels like sunlight wrapped in safety.
You lift others when they forget their strength.
I chose you because courage glows inside you.

Brightly yours,
Marigold`,
    emoji: "🌼",
    gradient: "linear-gradient(135deg, #f5a623 0%, #c67a10 100%)"
  },

  Gardenia: {
    letter: `My deep heart,

You feel everything intensely — and beautifully.
Love for you is never shallow.
I bloom where emotions run rich and true.

With depth,
Gardenia`,
    emoji: "🌼",
    gradient: "linear-gradient(135deg, #ffffff 0%, #dcdcdc 100%)"
  },

  Hyacinth: {
    letter: `My playful light,

You laugh like spring after rain.
There’s freshness in your spirit,
and joy in the way you love freely.
I bloom where hearts stay young.

Smiling always,
Hyacinth`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #7da0f2 0%, #5b7fd6 100%)"
  },

  Lotus: {
    letter: `My rising soul,

You have known muddy waters,
yet you bloom untouched.
Your strength is silent,
your beauty earned.

With reverence,
Lotus`,
    emoji: "🪷",
    gradient: "linear-gradient(135deg, #e6d1f8 0%, #9b7ad6 100%)"
  },

  Camellia: {
    letter: `My quiet elegance,

You don’t chase attention —
it finds you.
There’s softness in your grace,
and power in your calm.

Admiring you,
Camellia`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #f4c5d9 0%, #c78a9b 100%)"
  },

  Hibiscus: {
    letter: `My vibrant flame,

You live boldly, loving loudly.
Your energy feels like tropical sunlight —
warm, fearless, alive.
I bloom for spirits that dare.

Passionately,
Hibiscus`,
    emoji: "🌺",
    gradient: "linear-gradient(135deg, #ff6b6b 0%, #c74343 100%)"
  },

  Poppy: {
    letter: `My dreamy artist,

You see the world through color and wonder.
Even your silence feels like poetry.
I chose you because imagination lives in you.

Softly floating,
Poppy`,
    emoji: "🌺",
    gradient: "linear-gradient(135deg, #d94f4f 0%, #9b2f2f 100%)"
  },

  Violet: {
    letter: `My shy strength,

You may stand quietly,
but your heart roars with depth.
There’s wisdom in your softness.

Gently yours,
Violet`,
    emoji: "💐",
    gradient: "linear-gradient(135deg, #6b4fb3 0%, #3b2c88 100%)"
  },

    Dandelion: {
    letter: `My free spirit,

You make wishes without fear.
Even when the wind tests you,
you rise again.
I bloom for the brave and untamed.

Drifting with you,
Dandelion`,
    emoji: "🌼",
    gradient: "linear-gradient(135deg, #f2d86b 0%, #c79f2a 100%)"
  },

  Geranium: {
    letter: `My balanced heart,

You think clearly,
yet love deeply.
You are both logic and warmth —
a rare harmony.

Steadily,
Geranium`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #e0706f 0%, #9b4a49 100%)"
  },

  Freesia: {
    letter: `My loyal friend,

You hold trust like treasure.
Your promises are not loud —
they are lasting.
I bloom for devotion.

Always faithful,
Freesia`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #f6d77a 0%, #c9a44a 100%)"
  },

  Anemone: {
    letter: `My guarded heart,

You open slowly,
but when you do —
it is breathtaking.
Your vulnerability is sacred.

Patiently,
Anemone`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #c47fa6 0%, #8b506f 100%)"
  },

  Azalea: {
    letter: `My gentle fire,

You seem soft like petals,
yet your love burns steady.
There is strength in your tenderness.

Warmly,
Azalea`,
    emoji: "🌺",
    gradient: "linear-gradient(135deg, #f7a6c2 0%, #b86a8b 100%)"
  },

  Begonia: {
    letter: `My independent soul,

You walk your own path
without apology.
Your uniqueness is your perfume.

Boldly yours,
Begonia`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #d07a6a 0%, #8b4b3b 100%)"
  },

  Zinnia: {
    letter: `My joyful spark,

You bring color wherever you go.
Your laughter heals heavy rooms.
I bloom for bright spirits like you.

Cheerfully,
Zinnia`,
    emoji: "🌼",
    gradient: "linear-gradient(135deg, #f28b2c 0%, #b86a20 100%)"
  },

  Aster: {
    letter: `My hopeful star,

Even in darkness,
you search for light.
Your faith is quiet,
but unbreakable.

Shining softly,
Aster`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #b88fe6 0%, #7a56b8 100%)"
  },

  Lilac: {
    letter: `My tender memory,

You cherish first moments
like pressed flowers in books.
Your love feels nostalgic and true.

Sweetly,
Lilac`,
    emoji: "💜",
    gradient: "linear-gradient(135deg, #b59bd6 0%, #7a5ea8 100%)"
  },

  Chamomile: {
    letter: `My comfort after chaos,

You calm storms with a whisper.
Your presence feels like warm tea at dusk.
I bloom for gentle healers.

Peacefully,
Chamomile`,
    emoji: "🌼",
    gradient: "linear-gradient(135deg, #f0e7b8 0%, #bfae6a 100%)"
  },

  "Sweet Pea": {
    letter: `My soft kindness,

You care without counting.
Your affection asks for nothing back.
That is your magic.

Lovingly,
Sweet Pea`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #f6c8e6 0%, #c78fb8 100%)"
  },

  Heather: {
    letter: `My steady heart,

You stand strong on your own,
yet love deeply.
Independence suits you beautifully.

Firmly,
Heather`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #a98fcf 0%, #6f52a6 100%)"
  },

  Ranunculus: {
    letter: `My charming smile,

You don’t even try —
yet hearts turn toward you.
Your glow is effortless.

With admiration,
Ranunculus`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #f3a7b1 0%, #b86a7b 100%)"
  },

  Amaryllis: {
    letter: `My bold presence,

You enter rooms like a queen —
confident, radiant, sure.
I bloom for fearless souls.

Regally yours,
Amaryllis`,
    emoji: "🌺",
    gradient: "linear-gradient(135deg, #d94b5b 0%, #8b2f39 100%)"
  },

  Bluebell: {
    letter: `My quiet melody,

You may be soft,
but your strength echoes gently.
There’s grace in your resilience.

Humbly,
Bluebell`,
    emoji: "🔔",
    gradient: "linear-gradient(135deg, #7fb1ff 0%, #3f78d6 100%)"
  },

  Foxglove: {
    letter: `My magnetic mystery,

There’s something about you
people can’t explain —
and can’t forget.
I bloom for enchantment.

Intrigued always,
Foxglove`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #c77ed6 0%, #8b4b9b 100%)"
  },

  Heliotrope: {
    letter: `My faithful light,

You follow what feels true,
even when it’s hard.
Your loyalty is luminous.

Ever turning to you,
Heliotrope`,
    emoji: "💜",
    gradient: "linear-gradient(135deg, #8f6ccf 0%, #5a3f9b 100%)"
  },

  Narcissus: {
    letter: `My growing soul,

You are learning to love yourself —
and that is powerful.
Self-respect suits you beautifully.

Blooming beside you,
Narcissus`,
    emoji: "🌼",
    gradient: "linear-gradient(135deg, #efe9a6 0%, #c9b46a 100%)"
  },

  Protea: {
    letter: `My extraordinary one,

You adapt, evolve,
and still remain uniquely you.
I bloom for those who refuse to be ordinary.

Fearlessly,
Protea`,
    emoji: "🌿",
    gradient: "linear-gradient(135deg, #d86f6f 0%, #9b4848 100%)"
  },

  Calendula: {
    letter: `My warm healer,

Your touch mends unseen wounds.
There’s sunlight in your care.

Tenderly glowing,
Calendula`,
    emoji: "🌼",
    gradient: "linear-gradient(135deg, #f2a33a 0%, #c77a10 100%)"
  },

  Verbena: {
    letter: `My intuitive heart,

You believe in invisible threads —
in destiny, in connection.
Magic follows you quietly.

Mystically,
Verbena`,
    emoji: "🌿",
    gradient: "linear-gradient(135deg, #9ad6b8 0%, #5faa86 100%)"
  },

  Yarrow: {
    letter: `My brave protector,

You stand strong for those you love.
Your courage feels safe and steady.

Shielding softly,
Yarrow`,
    emoji: "🌾",
    gradient: "linear-gradient(135deg, #f1d1a6 0%, #b88a58 100%)"
  },

  Salvia: {
    letter: `My grounded wisdom,

Your words feel like truth.
Your presence feels like roots in earth.

Deeply,
Salvia`,
    emoji: "🌿",
    gradient: "linear-gradient(135deg, #6ea3d6 0%, #3b78b0 100%)"
  },

  "Morning Glory": {
    letter: `My fresh sunrise,

Each day with you feels new.
You carry hope like dawn carries light.

Brightly blooming,
Morning Glory`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #6b9df2 0%, #355fb8 100%)"
  },

  Lupine: {
    letter: `My artistic soul,

You see life as canvas and sky.
Your imagination paints beauty everywhere.

Colorfully,
Lupine`,
    emoji: "🌿",
    gradient: "linear-gradient(135deg, #7da6f2 0%, #4a78d6 100%)"
  },

  Phlox: {
    letter: `My harmony bringer,

You unite hearts gently.
Peace follows your footsteps.

In togetherness,
Phlox`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #f7a6d6 0%, #b86a9b 100%)"
  },

  Scabiosa: {
    letter: `My rare beauty,

You were never meant to be common.
Your uniqueness whispers luxury.

Exclusively yours,
Scabiosa`,
    emoji: "🌸",
    gradient: "linear-gradient(135deg, #c6a0d9 0%, #8b6aab 100%)"
  },

  Campanula: {
    letter: `My soft joy,

You carry happiness quietly —
like bells chiming in wind.
Your heart is pure music.

Lightly ringing,
Campanula`,
    emoji: "🔔",
    gradient: "linear-gradient(135deg, #8fb1ff 0%, #5f88d6 100%)"
  },

  Snapdragon: {
    letter: `My playful warrior,

You laugh loudly
and stand strongly.
Your spirit bends —
but never breaks.

With fearless fun,
Snapdragon`,
    emoji: "🌺",
    gradient: "linear-gradient(135deg, #e07a5f 0%, #9b4636 100%)"
  }
};

export const TESTIMONIALS = [
  { name: "Priya S.", city: "Mumbai", text: "I've never felt so seen by a fragrance. My lavender veil arrives and it's like wearing a memory.", flower: "Lavender" },
  { name: "Alia R.", city: "Delhi", text: "The personalized letter made me cry. The rose was meant for me — I've been wearing it every day since.", flower: "Rose" },
  { name: "Meera K.", city: "Bangalore", text: "Orchid Noir is unlike anything I've owned. Dark, mysterious, entirely me.", flower: "Orchid" },
];

export default {
  FLOWER_IMAGES,
  FLOWER_MAP,
  FLOWER_LETTERS,
  TESTIMONIALS,
};
