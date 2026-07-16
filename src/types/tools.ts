export interface Tool {
  name: string;
  category: "plugins" | "extensiones" | "componentes" | "frameworks";
  description: string;
  link: string;
  tags: string[];
  highlight?: boolean;
}

export interface RoadmapStep {
  step: string;
  title: string;
  desc: string;
  concepts: string[];
  resources: string[];
}

export interface Roadmap {
  id: string;
  name: string;
  description: string;
  steps: RoadmapStep[];
}
