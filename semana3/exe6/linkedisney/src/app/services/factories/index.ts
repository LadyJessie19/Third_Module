import { ProfileSer } from "..";
import { ProfileCon } from "../../controllers";
import { ProfileRep } from "../../repositories";
import database from "../../../database";

type Status = "open to work" | "closed" | "hiring";

interface IProfile {
  fullname: string | undefined;
  title: string;
  bio: string;
  currentOccupation: string;
  education: string;
  certifications: string;
  status: Status;
  createdAt: Date;
  deletedAt: Date | null;
}

class Profile {
  fullname: string | undefined;
  title: string;
  bio: string;
  currentOccupation: string;
  education: string;
  certifications: string;
  status: Status;
  createdAt: Date;
  deletedAt: Date | null;
  
  constructor(
    fullname: string,
    title: string,
    bio: string,
    currentOccupation: string,
    education: string,
    certifications: string,
    status: Status,
    createdAt: Date,
    deletedAt: Date | null) 
    {
    this.title = title,
    this.bio = bio,
    this.currentOccupation = currentOccupation,
    this.education = education,
    this.certifications = certifications ,
    this.status = status,
    this.createdAt = createdAt,
    this.deletedAt = deletedAt
  }
}

export function facProfile(fullname: string, title: string, bio: string, currentOccupation: string, education: string, certifications: string, status: Status):IProfile {
    const createdAt = new Date();
    const deletedAt = null;
    return new Profile(fullname, title, bio, currentOccupation, education, certifications, status, createdAt, deletedAt);
}

export function facProfileRoute() {
  const repository = new ProfileRep(database);
  const service = new ProfileSer(repository);
  const controller = new ProfileCon(service);
  return controller;
}
