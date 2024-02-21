export interface Project {
    id: number;
    title: string;
    year:string;
    description: string;
    description1: string;
    image: string;
    details: {
      images: string[];
      technologies: string[];
      github: string;
      document: string,
      apiDocument:string,
      website: string;
    };
  }
  // Example usage:
let project: Project = {
    title: "Project Title",
    description: "Project Description",
    description1: "desc",
    details: {
        images: ["image1.jpg", "image2.jpg"],
        technologies: ["Tech1", "Tech2"],
        github: "https://github.com/project",
        document: "",
        apiDocument: "",
        website: "https://project.com"
    },
    id: 0,
    image: "",
    year:""
}