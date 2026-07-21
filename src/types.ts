export interface Trainer {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  experience: string;
  quote: string;
  bio: string;
}

export interface ClassSession {
  id: string;
  time: string;
  mon?: { name: string; room: string };
  tue?: { name: string; room: string };
  wed?: { name: string; room: string };
  thu?: { name: string; room: string };
  fri?: { name: string; room: string };
}

export interface Facility {
  id: string;
  name: string;
  tag: string;
  desc: string;
  image: string;
  details: string[];
}

export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  features: string[];
  mostPopular: boolean;
  color: string;
}

export interface ClassType {
  id: string;
  name: string;
  desc: string;
  image: string;
  duration: string;
  intensity: string;
  calories: string;
}
