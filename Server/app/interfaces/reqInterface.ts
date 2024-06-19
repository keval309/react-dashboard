/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from "express";

export interface requestExtends extends Request {  
	user?: any;
	id?: any;
	logId?: any;
	log?: any;
	error?: any;
	idAdmin?: any;
	accessToken?: any;
}

