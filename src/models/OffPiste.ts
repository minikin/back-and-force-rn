import {Area} from './Area';
import {Contributors} from './Contributors';
import {GeoData} from './GeoData';
import {Moderation} from './Moderation';
import {Tag} from './Tag';
import {TopologyData} from './TopologyData';


export interface OffPiste {
  access?: string;
  area: Area;
  aspect: string;
  cliffs?: boolean;
  contributors: Contributors[];
  crampons?: boolean;
  description: string;
  equipment?: string;
  exposure?: number;
  flatmapUrl?: string;
  geoData?: GeoData;
  glacier?: boolean;
  grade?: any;
  groomed?: number;
  id: number;
  lifts: Area[];
  location?: string;
  maxGradient?: number;
  moderation: Moderation;
  moguls?: any;
  moreInfoUrl?: string;
  name: string;
  number?: any;
  pisteType?: any;
  rating: number;
  risks?: any;
  rope?: boolean;
  routeFinding?: number;
  shortDescription: string;
  skiDifficulty: number;
  skiGrade?: number;
  skiGradeLabande?: number;
  skins?: boolean;
  skiSeriousness: number;
  skiTour?: boolean;
  snowCannon?: boolean;
  sun?: string;
  tags: Tag[];
  terrain?: any;
  timeRequired?: string;
  topologyData?: TopologyData;
  trees?: boolean;
  walkRequired?: boolean;
}

export function fromJson(json: string): OffPiste {
  return JSON.parse(json) as OffPiste;
}
