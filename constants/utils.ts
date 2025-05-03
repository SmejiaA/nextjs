import { LINK_MAP, type Link_Type } from "./Links";

export const getLinks = (type: Link_Type) => LINK_MAP.get(type);
