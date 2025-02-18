export type ConvertedImage = {
	file: File
	tmpSrc: string
}

export type UploadedImage = {
	src: string
	size: number
	name: string
	uploadedAt: number
	expiresAt: number
}

export interface AuthToken {
	token: string
}
export interface ImgItem {
	key : string
	url : string
	size: number
	copyUrl: string
	filename ?: string
	uploadedAt?: number  // 添加这个字段
}

export interface ImgList {
	next: boolean
	cursor ?: string
	list : Array<ImgItem>

	prefixes ?: Array<String>
}

export interface ImgDel {
	keys : string
}

export interface ImgReq {
	cursor?: string
	delimiter?: string
	limit: Number
}
export interface Folder {
	name: string
}
