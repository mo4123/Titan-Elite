import { Trainer, ClassSession, Facility, MembershipTier, ClassType } from "./types";

export const TRAINERS: Trainer[] = [
  {
    id: "marcus",
    name: "MARCUS VANCE",
    role: "POWERLIFTING & STRENGTH",
    specialty: "Powerlifting",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA462QaE70m5pe8qnCi1ok-y3nBkQNG7eXHJ4XqxKZNoZqTBmbSn8YZDvwjMHjgOQpN3u_gcic01YhTDJ6sGlWhd4oZqtOnbWPx2OAInqLBgTWQeofV8mVYw-6fs7-HkLN0TkbSHfUG4DSInYNZFqYaWZNEQhkIy92qb_uPUu_4uC90onBwmDXtaCVYY4PbmLeUduOfcTD8pQVmYHAfCOQOIoCmXgVIdWAgCuibSNgW-GdUq_6H9R3gmsuilPtoJQ6eaP6S57xeaoxr",
    experience: "12+ Years Professional Experience",
    quote: "Excellence is not an act, but a habit of lifting heavier than yesterday.",
    bio: "Marcus is a former competitive powerlifter who specializes in teaching raw force generation, biomechanics, and technical mastery of standard compound lifts. He has coached multiple national-level strength competitors."
  },
  {
    id: "elara",
    name: "ELARA KANE",
    role: "HIIT & MOBILITY SPECIALIST",
    specialty: "HIIT & Mobility",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANlLEUuXyBCAxX3ivoAm8avWdCktqV684Z9OHC19_m5PeXzvvQ64C8A_pPoQCBZSeBbL8QowgkGPG0jsiiXbJCmtNoZ_a52ntCrBNoQc6PVIkHMNdK5lishSosg7IbzOsgzvUnqysbhGby52EPVyky4BjlqSPmlUDsy3ykerWAm3MN8F3BxKizcouJ0QSab8JogMfBd7nYnUdyVq8HsYF7HJEmHPChJzfxtEH_pGcaDs5FtCmZDOjPTTVIXG_AWV7pv2DmbzackSq6",
    experience: "Ex-Olympic Athletics Coach",
    quote: "True speed and endurance are built through consistent high-octane discipline.",
    bio: "Elara worked with Olympic sprinters and gymnasts to maximize dynamic mobility, cardiovascular ceiling, and injury resistance. She brings standard-setting sports science directly to elite gym environments."
  },
  {
    id: "jaxson",
    name: "JAXSON REED",
    role: "COMBAT SPORTS CONDITIONING",
    specialty: "Combat Sports",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhgfqeIDqCA-fZPOID1F4RGkmV65tyRyTZqw2g51qagUPTCO5fDgiALGuRT3UItPJoPenyUKljROL1q1R_Io1V2h4gNk9gBWClADkdPTI72FcW6taQ7-NRU2D4_mQo67StKoBrA5bHs0eaITVV9SCy_h5u_tbnjKBGz02lciiKciKD6sRnviJUICi1OyR8du_nnuKbfG-D8y5bCjxlvpkrns3y6OL60gCF9dutSc6bjF3JQ7YbSjTOJ5XP-h5yTQISBvox3zlcKIy0",
    experience: "Professional MMA Conditioning Coach",
    quote: "Your only limit is the mindset that whispers to step off the canvas.",
    bio: "Jaxson has conditioned active UFC fighters and professional strikers. He designs combat-focused, metabolic conditioning loops that test muscular endurance, reactive power, and tactical stamina."
  }
];

export const FACILITIES: Facility[] = [
  {
    id: "forge",
    name: "THE FORGE",
    tag: "STRENGTH SANCTUARY",
    desc: "A weight room with matte black racks and red LED accent lighting. Premium olympic plates and custom TITAN benches.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtcgCKjMh07_G8aPLiQiE-PL61IBMzupYmi0EI5INn8eQy2nZR6Ezk_7BAbRnEOp_R78e6Vghe0I4QRuNsPsSQFBOPPR53Pmd2QLYQqsKh9if5DVDmRsDuaErfT6dZ6Is2PphyiPy1n9Y0VHPKsLwdMlGszNAVEBHftcYPoNOALNucmwRze3k-Xnc25xl1iAvZk4uHPYp7CzSIQZDBjjDDTrf_vt2MK-sAXa0vnBfA1cOHUaWsFVH-AgOLzUYC2koa87ObDtXSqWvT",
    details: ["Competition Grade Olympic Barbells", "Custom Matte Black Power Racks", "Premium Dumbbells up to 150 lbs", "Calibrated Steel Plates", "Chalk stations & premium lifting platforms"]
  },
  {
    id: "velocity",
    name: "VELOCITY",
    tag: "CARDIO & METABOLIC ZONE",
    desc: "Sleek architectural design, dark rubber flooring, high-performance treadmills, and high-tech conditioning modules.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnKl-2c4s4ITGJ8dbTLLGQl-8OwErcbwZJ6rGObB_Vn06uoWGs-2lCBqXYmqudgj2NWWSMZYchbscD5VfY-dQqAmPikGLlN_Vl_u4NGwpiCbPolHfr5uluW3O7etqdOgqbNCdCBeQEbaQnNtfbNb0PqAWWPcwz3imzW5oMxPEltNP0Zg2iRq-l8MYML_x_syVp5HzvyH83tk7W-PNEHgxmdH_wiUiW2m8TQfOS8EjxjA46RZmUV2-znSHt2p99scHwsC9VcRsHse8W",
    details: ["Biometric Treadmills & Curved Runners", "Sartorius Ergometers & Air Bikes", "SkillMill Speed Trainers", "Ambient backlighting with telemetry feedback", "Surround acoustic high-energy audio matrix"]
  },
  {
    id: "recovery",
    name: "RECOVERY",
    tag: "BIOHACKING & WELLNESS LOUNGE",
    desc: "Advanced cryotherapy chambers, infrared saunas, and slate stone natural textures for ultimate post-workout rejuvenation.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyUeVuGSU6ed_6in45M167Dutf363VicPeEg8g_OFRyPBeIYvLtjnWOWWMXXG-naLq2jZ92Kjo3PPZTKnnly2-M5TGPhkzBE79T6prkXtwLSYdjfCCXF-WJLD1CFKpYKCnVFSzXNFzgQSkDN_sS3o67wFvkeZ9vrcTEKrHzfPjMw61loFO3w8dBHPswf3nxyVNMhUULUuKFWd5bSYzPp_O5jIn8HDJMhIcuxWRnlRx_AJR2jcFgp4pvW_Z21-uPc-mRW1E62zmyd1J",
    details: ["Cryotherapy Chambers (-110°C)", "Full Spectrum Near-Infrared Saunas", "Cold Plunge Baths (4°C)", "Normatec Compression Sleeves", "Dedicated Physiotherapy and Stretch Suite"]
  }
];

export const MEMBERSHIP_TIERS: MembershipTier[] = [
  {
    id: "basic",
    name: "BASIC",
    price: "$99",
    features: [
      "Access to Main Floor & Equipment",
      "Standard Coach Group Classes",
      "Digital Locker & Premium Towel Access",
      "Biometric Entry Portal Activation",
      "Personal Coach (Not Included)"
    ],
    mostPopular: false,
    color: "border-outline"
  },
  {
    id: "elite",
    name: "ELITE",
    price: "$189",
    features: [
      "All Basic Tier Features Included",
      "Unlimited HIIT & Combat Classes",
      "Monthly 3D Body & Biometric Scans",
      "Priority Premium Class Booking",
      "2 Monthly 1-on-1 Trainer Consults",
      "Recovery Lounge Cryo Guest Passes"
    ],
    mostPopular: true,
    color: "border-primary-container"
  },
  {
    id: "pro",
    name: "PRO",
    price: "$299",
    features: [
      "All Elite Tier Features Included",
      "Dedicated Personal Performance Trainer",
      "Fully Custom Metabolic & Nutrition Plans",
      "Unlimited Recovery Lounge Access",
      "Custom Branded Titan Athleisure Gift Bag",
      "Lifetime Price Protection Lock"
    ],
    mostPopular: false,
    color: "border-outline"
  }
];

export const CLASSES: ClassType[] = [
  {
    id: "hiit",
    name: "TITAN HIIT",
    desc: "High-intensity interval training for maximum metabolic and performance burn.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0EhBJDZdVAT8Y9nh9UgTNCeRgbkG9E0gjAeE1UuJbUBBMTQlvtG75Lx22bbir5clQ7fZae0ziNxqFjKHlE1jUSiEtd6mXG22-XBDUB4D0ouZfqQwCxRqHksjX-2_Qqp7hTp66XbrSnebSNRbZq_lEqSfo503Ve_oPNrtwWGAdiUfztHxktZ6rrX_xhIGPiE6YM1PCcj_UzR-Sds7jQrRuQ8i6DC7md_ugGGt2Va3kxZt2ONXBazu0wwqbbIRN5V94OsDWtxjh6diY",
    duration: "45 mins",
    intensity: "EXTREME",
    calories: "750 kcal"
  },
  {
    id: "boxing",
    name: "STRIKE BOXING",
    desc: "Technical combat conditioning, explosive heavy-bag drills, and core conditioning.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCxksK5l3p98NPGtTLK4ss8BElMU240PCfcrnGTUHg8wc5kxORfP3MmdooZsN_7kYwipwjo45ygJMBM-WZs8LmxBn-0bINzBPqfmw_MZW8sxRv3pDrAqULd_ldb_pgWoRKGm141WCuBwCjtRlaMflUal7-1DFtA7NIb2jUZS-E9wnL1kMBB0a8oi1-QoFsNKTJbnAA1rklLa0i_Vgl-NCihuSCGE_A0KIo7w2B-S87tIBO6JysHQkDkuuK4mvkQjEtS2yh_zdDhBrnJ",
    duration: "60 mins",
    intensity: "HIGH",
    calories: "850 kcal"
  },
  {
    id: "flow",
    name: "ZENITH FLOW",
    desc: "Strength-based power yoga and high-performance mobility to enhance recovery.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCNw3zP7llMLGvFSImS8NCssvNck6GupBOS0ywODMrzZ9yiV_Lxi5gQg1bo3FyUVUBIcvaWh6SLUXfLqFDuj1M7Fh923DnaD10gXimFqWqivEDdoxoI-6gpgjdMsc_pTKMLeEu7fo054WzeadGQ0_jrCTy_ts9XrSVhXRpZIP27iajCpL90BppnMO4qIc1hUDKKXTcttLC-XqWthusBonAuJsvtFPhL4B2Uax9PMLg97vUxIpnRHJkQfMa3NjhD5gvkXV5av6lZvw79",
    duration: "50 mins",
    intensity: "MEDIUM",
    calories: "450 kcal"
  },
  {
    id: "lifting",
    name: "IRON TECH",
    desc: "Mastering standard compound mechanics, powerlifting postures, and Olympic lifting.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOWPLzdRzeDHoeC1tGA-nBNVwyinSssTTxoq5eDmpeovjvL4ttLosY5uRN6Ts826sXKmBYz8-8DPPhUsXNEROxeT7aLhgZmblw7_f35PynBbofdvnFHWJVi3YxQkw7wBFZefyiDQ6egtPJJmri77qcyyEajqlb9QJ_3_gPjiEZqHxeAEuE56oP3mNK-ir9jE-xYZW9C2sGoo4zv3l3GCSeeAjnBvBQQa0MAng5en0SI5WGcGY-WJQVimlTR61S2IiandURZkwoUygG",
    duration: "75 mins",
    intensity: "ELITE",
    calories: "600 kcal"
  }
];

export const SCHEDULE_SESSIONS: ClassSession[] = [
  {
    id: "s1",
    time: "06:00 AM",
    mon: { name: "TITAN HIIT", room: "Studio A" },
    tue: { name: "ZENITH FLOW", room: "Studio B" },
    wed: { name: "TITAN HIIT", room: "Studio A" },
    thu: { name: "STRIKE BOXING", room: "Studio C" },
    fri: { name: "TITAN HIIT", room: "Studio A" }
  },
  {
    id: "s2",
    time: "12:00 PM",
    tue: { name: "IRON TECH", room: "Weight Floor" },
    thu: { name: "IRON TECH", room: "Weight Floor" }
  },
  {
    id: "s3",
    time: "06:00 PM",
    mon: { name: "STRIKE BOXING", room: "Studio C" },
    tue: { name: "TITAN HIIT", room: "Studio A" },
    wed: { name: "STRIKE BOXING", room: "Studio C" },
    thu: { name: "ZENITH FLOW", room: "Studio B" },
    fri: { name: "TITAN HIIT", room: "Studio A" }
  }
];

export const INSTAGRAM_IMAGES: string[] = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDtlTYYNbXybnrLDsF7Nszp9Gb_ybaCTQruZg1ieVA46owkvFtiQI2sRUYoUmLbLhfzUz1AmbOpb2QoM8393vYEOiPaw64TUBPTKW2-EUu2us94LZQmyPS-FXjQK_NpjrZiqPbK_RaJkmQQvFrS0vxgvMORISVXtZsL6rm-ZDlC-Cf69DXjFkwipjUhLABghejgjXXzLJ_MaFmQPN1s70nlnG9A8YiQqJo5H-xxf59ItahOxR5N-_mTve1rix_OBRaRmSD6AfMRsL_s",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuApF33ZLN8AvBlNJhZB9qZrG0omaGBvHSL0eFLIjVePuKdK4Yc6Wck4-Z-LMeE7bLrq-aSaQG2Bp5dE-Z34WOg0Z1F1O2OwYUriTK1rAfQuPq1yvls91iVM34I54FkMApJ6YWCNkL7j3jJCLH_v8GL8Tu0sqsFnDK_mzVfPwPr91PWQD7XKyHqtgpHyC7iUH8EpMOLv90y0yQXYIYQNUwGmnd2ZgeIrsBoxY5k0cDz-GROppzLbNWZ2VXXEQVjJWx35V45B8OoqUXua",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB3HD-rb0H6XRLMg4NOeAdfNAyQWzqF7khD_kaIkc2VhP48TR-WWUOO_6tawN4roRHOv9nDa7_ONbjMmrGD5PH1dLTZik8GeFLSkCGfq99FObXhboTtEcATNe-Jw6O-2dNL-D1olM7dkUic3vm0bwS-4IBtS1EZdP3ZII3pXvxV8tOyawI1FAGZimzp1D40M3aR9NLjAdS6CZLVILYD56ic6trHu-x61KolkHIzRtWCM8ulfrAVgwLZhoOrsVekb2bYo8dUK3B-7yKe",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCqD_yI5NkLwE5W0BmWCXoaZ9NCaipTGXQ2kfKuFlpYRgTgySgmlqEgHniuk9-LXQ4eOevM8LaIwAXtwXsPE1NXWef8PGij4LHXkNDvtmDLH6xZTbqPPa5SS7TgyDHYOt-jV8N2W0SE9XGN0PFMCOXnlOl4y-7uirRrRlUjfaQ1mw7_Xx1OmEtVZVlzxr2gZZ6y-yhKD3t5pEvaLmlq0ewJkv2zoR9UGyVNM3JOx7bwA3Y7QLwhiPyNrRTFyDgV5Vp8UFM_0NC0BT67"
];
