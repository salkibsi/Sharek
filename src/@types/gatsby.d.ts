export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = ContentfulReference & Node & {
  __typename?: 'ContentfulAsset';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  localFile?: Maybe<File>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  __typename?: 'ContentfulAssetConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  __typename?: 'ContentfulAssetEdge';
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export enum ContentfulAssetFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  FileUrl = 'file___url',
  FileDetailsSize = 'file___details___size',
  FileDetailsImageWidth = 'file___details___image___width',
  FileDetailsImageHeight = 'file___details___image___height',
  FileFileName = 'file___fileName',
  FileContentType = 'file___contentType',
  FileErrorMessage = 'file___error___message',
  Title = 'title',
  Description = 'description',
  NodeLocale = 'node_locale',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  LocalFileSourceInstanceName = 'localFile___sourceInstanceName',
  LocalFileAbsolutePath = 'localFile___absolutePath',
  LocalFileRelativePath = 'localFile___relativePath',
  LocalFileExtension = 'localFile___extension',
  LocalFileSize = 'localFile___size',
  LocalFilePrettySize = 'localFile___prettySize',
  LocalFileModifiedTime = 'localFile___modifiedTime',
  LocalFileAccessTime = 'localFile___accessTime',
  LocalFileChangeTime = 'localFile___changeTime',
  LocalFileBirthTime = 'localFile___birthTime',
  LocalFileRoot = 'localFile___root',
  LocalFileDir = 'localFile___dir',
  LocalFileBase = 'localFile___base',
  LocalFileExt = 'localFile___ext',
  LocalFileName = 'localFile___name',
  LocalFileRelativeDirectory = 'localFile___relativeDirectory',
  LocalFileDev = 'localFile___dev',
  LocalFileMode = 'localFile___mode',
  LocalFileNlink = 'localFile___nlink',
  LocalFileUid = 'localFile___uid',
  LocalFileGid = 'localFile___gid',
  LocalFileRdev = 'localFile___rdev',
  LocalFileIno = 'localFile___ino',
  LocalFileAtimeMs = 'localFile___atimeMs',
  LocalFileMtimeMs = 'localFile___mtimeMs',
  LocalFileCtimeMs = 'localFile___ctimeMs',
  LocalFileAtime = 'localFile___atime',
  LocalFileMtime = 'localFile___mtime',
  LocalFileCtime = 'localFile___ctime',
  LocalFileBirthtime = 'localFile___birthtime',
  LocalFileBirthtimeMs = 'localFile___birthtimeMs',
  LocalFileBlksize = 'localFile___blksize',
  LocalFileBlocks = 'localFile___blocks',
  LocalFileUrl = 'localFile___url',
  LocalFilePublicUrl = 'localFile___publicURL',
  LocalFileChildrenImageSharp = 'localFile___childrenImageSharp',
  LocalFileChildrenImageSharpFixedBase64 = 'localFile___childrenImageSharp___fixed___base64',
  LocalFileChildrenImageSharpFixedTracedSvg = 'localFile___childrenImageSharp___fixed___tracedSVG',
  LocalFileChildrenImageSharpFixedAspectRatio = 'localFile___childrenImageSharp___fixed___aspectRatio',
  LocalFileChildrenImageSharpFixedWidth = 'localFile___childrenImageSharp___fixed___width',
  LocalFileChildrenImageSharpFixedHeight = 'localFile___childrenImageSharp___fixed___height',
  LocalFileChildrenImageSharpFixedSrc = 'localFile___childrenImageSharp___fixed___src',
  LocalFileChildrenImageSharpFixedSrcSet = 'localFile___childrenImageSharp___fixed___srcSet',
  LocalFileChildrenImageSharpFixedSrcWebp = 'localFile___childrenImageSharp___fixed___srcWebp',
  LocalFileChildrenImageSharpFixedSrcSetWebp = 'localFile___childrenImageSharp___fixed___srcSetWebp',
  LocalFileChildrenImageSharpFixedOriginalName = 'localFile___childrenImageSharp___fixed___originalName',
  LocalFileChildrenImageSharpResolutionsBase64 = 'localFile___childrenImageSharp___resolutions___base64',
  LocalFileChildrenImageSharpResolutionsTracedSvg = 'localFile___childrenImageSharp___resolutions___tracedSVG',
  LocalFileChildrenImageSharpResolutionsAspectRatio = 'localFile___childrenImageSharp___resolutions___aspectRatio',
  LocalFileChildrenImageSharpResolutionsWidth = 'localFile___childrenImageSharp___resolutions___width',
  LocalFileChildrenImageSharpResolutionsHeight = 'localFile___childrenImageSharp___resolutions___height',
  LocalFileChildrenImageSharpResolutionsSrc = 'localFile___childrenImageSharp___resolutions___src',
  LocalFileChildrenImageSharpResolutionsSrcSet = 'localFile___childrenImageSharp___resolutions___srcSet',
  LocalFileChildrenImageSharpResolutionsSrcWebp = 'localFile___childrenImageSharp___resolutions___srcWebp',
  LocalFileChildrenImageSharpResolutionsSrcSetWebp = 'localFile___childrenImageSharp___resolutions___srcSetWebp',
  LocalFileChildrenImageSharpResolutionsOriginalName = 'localFile___childrenImageSharp___resolutions___originalName',
  LocalFileChildrenImageSharpFluidBase64 = 'localFile___childrenImageSharp___fluid___base64',
  LocalFileChildrenImageSharpFluidTracedSvg = 'localFile___childrenImageSharp___fluid___tracedSVG',
  LocalFileChildrenImageSharpFluidAspectRatio = 'localFile___childrenImageSharp___fluid___aspectRatio',
  LocalFileChildrenImageSharpFluidSrc = 'localFile___childrenImageSharp___fluid___src',
  LocalFileChildrenImageSharpFluidSrcSet = 'localFile___childrenImageSharp___fluid___srcSet',
  LocalFileChildrenImageSharpFluidSrcWebp = 'localFile___childrenImageSharp___fluid___srcWebp',
  LocalFileChildrenImageSharpFluidSrcSetWebp = 'localFile___childrenImageSharp___fluid___srcSetWebp',
  LocalFileChildrenImageSharpFluidSizes = 'localFile___childrenImageSharp___fluid___sizes',
  LocalFileChildrenImageSharpFluidOriginalImg = 'localFile___childrenImageSharp___fluid___originalImg',
  LocalFileChildrenImageSharpFluidOriginalName = 'localFile___childrenImageSharp___fluid___originalName',
  LocalFileChildrenImageSharpFluidPresentationWidth = 'localFile___childrenImageSharp___fluid___presentationWidth',
  LocalFileChildrenImageSharpFluidPresentationHeight = 'localFile___childrenImageSharp___fluid___presentationHeight',
  LocalFileChildrenImageSharpSizesBase64 = 'localFile___childrenImageSharp___sizes___base64',
  LocalFileChildrenImageSharpSizesTracedSvg = 'localFile___childrenImageSharp___sizes___tracedSVG',
  LocalFileChildrenImageSharpSizesAspectRatio = 'localFile___childrenImageSharp___sizes___aspectRatio',
  LocalFileChildrenImageSharpSizesSrc = 'localFile___childrenImageSharp___sizes___src',
  LocalFileChildrenImageSharpSizesSrcSet = 'localFile___childrenImageSharp___sizes___srcSet',
  LocalFileChildrenImageSharpSizesSrcWebp = 'localFile___childrenImageSharp___sizes___srcWebp',
  LocalFileChildrenImageSharpSizesSrcSetWebp = 'localFile___childrenImageSharp___sizes___srcSetWebp',
  LocalFileChildrenImageSharpSizesSizes = 'localFile___childrenImageSharp___sizes___sizes',
  LocalFileChildrenImageSharpSizesOriginalImg = 'localFile___childrenImageSharp___sizes___originalImg',
  LocalFileChildrenImageSharpSizesOriginalName = 'localFile___childrenImageSharp___sizes___originalName',
  LocalFileChildrenImageSharpSizesPresentationWidth = 'localFile___childrenImageSharp___sizes___presentationWidth',
  LocalFileChildrenImageSharpSizesPresentationHeight = 'localFile___childrenImageSharp___sizes___presentationHeight',
  LocalFileChildrenImageSharpGatsbyImageData = 'localFile___childrenImageSharp___gatsbyImageData',
  LocalFileChildrenImageSharpOriginalWidth = 'localFile___childrenImageSharp___original___width',
  LocalFileChildrenImageSharpOriginalHeight = 'localFile___childrenImageSharp___original___height',
  LocalFileChildrenImageSharpOriginalSrc = 'localFile___childrenImageSharp___original___src',
  LocalFileChildrenImageSharpResizeSrc = 'localFile___childrenImageSharp___resize___src',
  LocalFileChildrenImageSharpResizeTracedSvg = 'localFile___childrenImageSharp___resize___tracedSVG',
  LocalFileChildrenImageSharpResizeWidth = 'localFile___childrenImageSharp___resize___width',
  LocalFileChildrenImageSharpResizeHeight = 'localFile___childrenImageSharp___resize___height',
  LocalFileChildrenImageSharpResizeAspectRatio = 'localFile___childrenImageSharp___resize___aspectRatio',
  LocalFileChildrenImageSharpResizeOriginalName = 'localFile___childrenImageSharp___resize___originalName',
  LocalFileChildrenImageSharpId = 'localFile___childrenImageSharp___id',
  LocalFileChildrenImageSharpParentId = 'localFile___childrenImageSharp___parent___id',
  LocalFileChildrenImageSharpParentChildren = 'localFile___childrenImageSharp___parent___children',
  LocalFileChildrenImageSharpChildren = 'localFile___childrenImageSharp___children',
  LocalFileChildrenImageSharpChildrenId = 'localFile___childrenImageSharp___children___id',
  LocalFileChildrenImageSharpChildrenChildren = 'localFile___childrenImageSharp___children___children',
  LocalFileChildrenImageSharpInternalContent = 'localFile___childrenImageSharp___internal___content',
  LocalFileChildrenImageSharpInternalContentDigest = 'localFile___childrenImageSharp___internal___contentDigest',
  LocalFileChildrenImageSharpInternalDescription = 'localFile___childrenImageSharp___internal___description',
  LocalFileChildrenImageSharpInternalFieldOwners = 'localFile___childrenImageSharp___internal___fieldOwners',
  LocalFileChildrenImageSharpInternalIgnoreType = 'localFile___childrenImageSharp___internal___ignoreType',
  LocalFileChildrenImageSharpInternalMediaType = 'localFile___childrenImageSharp___internal___mediaType',
  LocalFileChildrenImageSharpInternalOwner = 'localFile___childrenImageSharp___internal___owner',
  LocalFileChildrenImageSharpInternalType = 'localFile___childrenImageSharp___internal___type',
  LocalFileChildImageSharpFixedBase64 = 'localFile___childImageSharp___fixed___base64',
  LocalFileChildImageSharpFixedTracedSvg = 'localFile___childImageSharp___fixed___tracedSVG',
  LocalFileChildImageSharpFixedAspectRatio = 'localFile___childImageSharp___fixed___aspectRatio',
  LocalFileChildImageSharpFixedWidth = 'localFile___childImageSharp___fixed___width',
  LocalFileChildImageSharpFixedHeight = 'localFile___childImageSharp___fixed___height',
  LocalFileChildImageSharpFixedSrc = 'localFile___childImageSharp___fixed___src',
  LocalFileChildImageSharpFixedSrcSet = 'localFile___childImageSharp___fixed___srcSet',
  LocalFileChildImageSharpFixedSrcWebp = 'localFile___childImageSharp___fixed___srcWebp',
  LocalFileChildImageSharpFixedSrcSetWebp = 'localFile___childImageSharp___fixed___srcSetWebp',
  LocalFileChildImageSharpFixedOriginalName = 'localFile___childImageSharp___fixed___originalName',
  LocalFileChildImageSharpResolutionsBase64 = 'localFile___childImageSharp___resolutions___base64',
  LocalFileChildImageSharpResolutionsTracedSvg = 'localFile___childImageSharp___resolutions___tracedSVG',
  LocalFileChildImageSharpResolutionsAspectRatio = 'localFile___childImageSharp___resolutions___aspectRatio',
  LocalFileChildImageSharpResolutionsWidth = 'localFile___childImageSharp___resolutions___width',
  LocalFileChildImageSharpResolutionsHeight = 'localFile___childImageSharp___resolutions___height',
  LocalFileChildImageSharpResolutionsSrc = 'localFile___childImageSharp___resolutions___src',
  LocalFileChildImageSharpResolutionsSrcSet = 'localFile___childImageSharp___resolutions___srcSet',
  LocalFileChildImageSharpResolutionsSrcWebp = 'localFile___childImageSharp___resolutions___srcWebp',
  LocalFileChildImageSharpResolutionsSrcSetWebp = 'localFile___childImageSharp___resolutions___srcSetWebp',
  LocalFileChildImageSharpResolutionsOriginalName = 'localFile___childImageSharp___resolutions___originalName',
  LocalFileChildImageSharpFluidBase64 = 'localFile___childImageSharp___fluid___base64',
  LocalFileChildImageSharpFluidTracedSvg = 'localFile___childImageSharp___fluid___tracedSVG',
  LocalFileChildImageSharpFluidAspectRatio = 'localFile___childImageSharp___fluid___aspectRatio',
  LocalFileChildImageSharpFluidSrc = 'localFile___childImageSharp___fluid___src',
  LocalFileChildImageSharpFluidSrcSet = 'localFile___childImageSharp___fluid___srcSet',
  LocalFileChildImageSharpFluidSrcWebp = 'localFile___childImageSharp___fluid___srcWebp',
  LocalFileChildImageSharpFluidSrcSetWebp = 'localFile___childImageSharp___fluid___srcSetWebp',
  LocalFileChildImageSharpFluidSizes = 'localFile___childImageSharp___fluid___sizes',
  LocalFileChildImageSharpFluidOriginalImg = 'localFile___childImageSharp___fluid___originalImg',
  LocalFileChildImageSharpFluidOriginalName = 'localFile___childImageSharp___fluid___originalName',
  LocalFileChildImageSharpFluidPresentationWidth = 'localFile___childImageSharp___fluid___presentationWidth',
  LocalFileChildImageSharpFluidPresentationHeight = 'localFile___childImageSharp___fluid___presentationHeight',
  LocalFileChildImageSharpSizesBase64 = 'localFile___childImageSharp___sizes___base64',
  LocalFileChildImageSharpSizesTracedSvg = 'localFile___childImageSharp___sizes___tracedSVG',
  LocalFileChildImageSharpSizesAspectRatio = 'localFile___childImageSharp___sizes___aspectRatio',
  LocalFileChildImageSharpSizesSrc = 'localFile___childImageSharp___sizes___src',
  LocalFileChildImageSharpSizesSrcSet = 'localFile___childImageSharp___sizes___srcSet',
  LocalFileChildImageSharpSizesSrcWebp = 'localFile___childImageSharp___sizes___srcWebp',
  LocalFileChildImageSharpSizesSrcSetWebp = 'localFile___childImageSharp___sizes___srcSetWebp',
  LocalFileChildImageSharpSizesSizes = 'localFile___childImageSharp___sizes___sizes',
  LocalFileChildImageSharpSizesOriginalImg = 'localFile___childImageSharp___sizes___originalImg',
  LocalFileChildImageSharpSizesOriginalName = 'localFile___childImageSharp___sizes___originalName',
  LocalFileChildImageSharpSizesPresentationWidth = 'localFile___childImageSharp___sizes___presentationWidth',
  LocalFileChildImageSharpSizesPresentationHeight = 'localFile___childImageSharp___sizes___presentationHeight',
  LocalFileChildImageSharpGatsbyImageData = 'localFile___childImageSharp___gatsbyImageData',
  LocalFileChildImageSharpOriginalWidth = 'localFile___childImageSharp___original___width',
  LocalFileChildImageSharpOriginalHeight = 'localFile___childImageSharp___original___height',
  LocalFileChildImageSharpOriginalSrc = 'localFile___childImageSharp___original___src',
  LocalFileChildImageSharpResizeSrc = 'localFile___childImageSharp___resize___src',
  LocalFileChildImageSharpResizeTracedSvg = 'localFile___childImageSharp___resize___tracedSVG',
  LocalFileChildImageSharpResizeWidth = 'localFile___childImageSharp___resize___width',
  LocalFileChildImageSharpResizeHeight = 'localFile___childImageSharp___resize___height',
  LocalFileChildImageSharpResizeAspectRatio = 'localFile___childImageSharp___resize___aspectRatio',
  LocalFileChildImageSharpResizeOriginalName = 'localFile___childImageSharp___resize___originalName',
  LocalFileChildImageSharpId = 'localFile___childImageSharp___id',
  LocalFileChildImageSharpParentId = 'localFile___childImageSharp___parent___id',
  LocalFileChildImageSharpParentChildren = 'localFile___childImageSharp___parent___children',
  LocalFileChildImageSharpChildren = 'localFile___childImageSharp___children',
  LocalFileChildImageSharpChildrenId = 'localFile___childImageSharp___children___id',
  LocalFileChildImageSharpChildrenChildren = 'localFile___childImageSharp___children___children',
  LocalFileChildImageSharpInternalContent = 'localFile___childImageSharp___internal___content',
  LocalFileChildImageSharpInternalContentDigest = 'localFile___childImageSharp___internal___contentDigest',
  LocalFileChildImageSharpInternalDescription = 'localFile___childImageSharp___internal___description',
  LocalFileChildImageSharpInternalFieldOwners = 'localFile___childImageSharp___internal___fieldOwners',
  LocalFileChildImageSharpInternalIgnoreType = 'localFile___childImageSharp___internal___ignoreType',
  LocalFileChildImageSharpInternalMediaType = 'localFile___childImageSharp___internal___mediaType',
  LocalFileChildImageSharpInternalOwner = 'localFile___childImageSharp___internal___owner',
  LocalFileChildImageSharpInternalType = 'localFile___childImageSharp___internal___type',
  LocalFileId = 'localFile___id',
  LocalFileParentId = 'localFile___parent___id',
  LocalFileParentParentId = 'localFile___parent___parent___id',
  LocalFileParentParentChildren = 'localFile___parent___parent___children',
  LocalFileParentChildren = 'localFile___parent___children',
  LocalFileParentChildrenId = 'localFile___parent___children___id',
  LocalFileParentChildrenChildren = 'localFile___parent___children___children',
  LocalFileParentInternalContent = 'localFile___parent___internal___content',
  LocalFileParentInternalContentDigest = 'localFile___parent___internal___contentDigest',
  LocalFileParentInternalDescription = 'localFile___parent___internal___description',
  LocalFileParentInternalFieldOwners = 'localFile___parent___internal___fieldOwners',
  LocalFileParentInternalIgnoreType = 'localFile___parent___internal___ignoreType',
  LocalFileParentInternalMediaType = 'localFile___parent___internal___mediaType',
  LocalFileParentInternalOwner = 'localFile___parent___internal___owner',
  LocalFileParentInternalType = 'localFile___parent___internal___type',
  LocalFileChildren = 'localFile___children',
  LocalFileChildrenId = 'localFile___children___id',
  LocalFileChildrenParentId = 'localFile___children___parent___id',
  LocalFileChildrenParentChildren = 'localFile___children___parent___children',
  LocalFileChildrenChildren = 'localFile___children___children',
  LocalFileChildrenChildrenId = 'localFile___children___children___id',
  LocalFileChildrenChildrenChildren = 'localFile___children___children___children',
  LocalFileChildrenInternalContent = 'localFile___children___internal___content',
  LocalFileChildrenInternalContentDigest = 'localFile___children___internal___contentDigest',
  LocalFileChildrenInternalDescription = 'localFile___children___internal___description',
  LocalFileChildrenInternalFieldOwners = 'localFile___children___internal___fieldOwners',
  LocalFileChildrenInternalIgnoreType = 'localFile___children___internal___ignoreType',
  LocalFileChildrenInternalMediaType = 'localFile___children___internal___mediaType',
  LocalFileChildrenInternalOwner = 'localFile___children___internal___owner',
  LocalFileChildrenInternalType = 'localFile___children___internal___type',
  LocalFileInternalContent = 'localFile___internal___content',
  LocalFileInternalContentDigest = 'localFile___internal___contentDigest',
  LocalFileInternalDescription = 'localFile___internal___description',
  LocalFileInternalFieldOwners = 'localFile___internal___fieldOwners',
  LocalFileInternalIgnoreType = 'localFile___internal___ignoreType',
  LocalFileInternalMediaType = 'localFile___internal___mediaType',
  LocalFileInternalOwner = 'localFile___internal___owner',
  LocalFileInternalType = 'localFile___internal___type',
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  ResizeBase64 = 'resize___base64',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeSrc = 'resize___src',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulAssetFile = {
  __typename?: 'ContentfulAssetFile';
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
  error?: Maybe<ContentfulAssetFileError>;
};

export type ContentfulAssetFileDetails = {
  __typename?: 'ContentfulAssetFileDetails';
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  __typename?: 'ContentfulAssetFileDetailsImage';
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileError = {
  __typename?: 'ContentfulAssetFileError';
  message?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileErrorFilterInput = {
  message?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
  error?: Maybe<ContentfulAssetFileErrorFilterInput>;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAssetFilterListInput = {
  elemMatch?: Maybe<ContentfulAssetFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  __typename?: 'ContentfulAssetGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  __typename?: 'ContentfulAssetSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulBanner = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulBanner';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  hideOnPage?: Maybe<Scalars['String']>;
  startAt?: Maybe<Scalars['Date']>;
  endAt?: Maybe<Scalars['Date']>;
  content?: Maybe<ContentfulBannerContentTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulBannerSys>;
  /** Returns all children nodes filtered by type contentfulBannerContentTextNode */
  childrenContentfulBannerContentTextNode?: Maybe<Array<Maybe<ContentfulBannerContentTextNode>>>;
  /**
   * Returns the first child node of type contentfulBannerContentTextNode or null
   * if there are no children of given type on this node
   */
  childContentfulBannerContentTextNode?: Maybe<ContentfulBannerContentTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulBannerStartAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBannerEndAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBannerCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulBannerUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulBannerConnection = {
  __typename?: 'ContentfulBannerConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBannerEdge>;
  nodes: Array<ContentfulBanner>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBannerGroupConnection>;
};


export type ContentfulBannerConnectionDistinctArgs = {
  field: ContentfulBannerFieldsEnum;
};


export type ContentfulBannerConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBannerFieldsEnum;
};

export type ContentfulBannerContentTextNode = Node & {
  __typename?: 'contentfulBannerContentTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulBannerContentTextNodeSys>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
};

export type ContentfulBannerContentTextNodeConnection = {
  __typename?: 'contentfulBannerContentTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBannerContentTextNodeEdge>;
  nodes: Array<ContentfulBannerContentTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulBannerContentTextNodeGroupConnection>;
};


export type ContentfulBannerContentTextNodeConnectionDistinctArgs = {
  field: ContentfulBannerContentTextNodeFieldsEnum;
};


export type ContentfulBannerContentTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulBannerContentTextNodeFieldsEnum;
};

export type ContentfulBannerContentTextNodeEdge = {
  __typename?: 'contentfulBannerContentTextNodeEdge';
  next?: Maybe<ContentfulBannerContentTextNode>;
  node: ContentfulBannerContentTextNode;
  previous?: Maybe<ContentfulBannerContentTextNode>;
};

export enum ContentfulBannerContentTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Content = 'content',
  SysType = 'sys___type',
  ChildrenMdx = 'childrenMdx',
  ChildrenMdxRawBody = 'childrenMdx___rawBody',
  ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
  ChildrenMdxSlug = 'childrenMdx___slug',
  ChildrenMdxBody = 'childrenMdx___body',
  ChildrenMdxExcerpt = 'childrenMdx___excerpt',
  ChildrenMdxHeadings = 'childrenMdx___headings',
  ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
  ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
  ChildrenMdxHtml = 'childrenMdx___html',
  ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
  ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
  ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
  ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
  ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
  ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
  ChildrenMdxId = 'childrenMdx___id',
  ChildrenMdxParentId = 'childrenMdx___parent___id',
  ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
  ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
  ChildrenMdxParentChildren = 'childrenMdx___parent___children',
  ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
  ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
  ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
  ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
  ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
  ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
  ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
  ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
  ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
  ChildrenMdxChildren = 'childrenMdx___children',
  ChildrenMdxChildrenId = 'childrenMdx___children___id',
  ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
  ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
  ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
  ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
  ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
  ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
  ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
  ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
  ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
  ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
  ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
  ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
  ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
  ChildrenMdxInternalContent = 'childrenMdx___internal___content',
  ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
  ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
  ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
  ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
  ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
  ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
  ChildrenMdxInternalType = 'childrenMdx___internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxSlug = 'childMdx___slug',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type'
}

export type ContentfulBannerContentTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBannerContentTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulBannerContentTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulBannerContentTextNodeFilterInput>;
};

export type ContentfulBannerContentTextNodeGroupConnection = {
  __typename?: 'contentfulBannerContentTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBannerContentTextNodeEdge>;
  nodes: Array<ContentfulBannerContentTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBannerContentTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBannerContentTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBannerContentTextNodeSys = {
  __typename?: 'contentfulBannerContentTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulBannerContentTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBannerEdge = {
  __typename?: 'ContentfulBannerEdge';
  next?: Maybe<ContentfulBanner>;
  node: ContentfulBanner;
  previous?: Maybe<ContentfulBanner>;
};

export enum ContentfulBannerFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Title = 'title',
  HideOnPage = 'hideOnPage',
  StartAt = 'startAt',
  EndAt = 'endAt',
  ContentId = 'content___id',
  ContentParentId = 'content___parent___id',
  ContentParentParentId = 'content___parent___parent___id',
  ContentParentParentChildren = 'content___parent___parent___children',
  ContentParentChildren = 'content___parent___children',
  ContentParentChildrenId = 'content___parent___children___id',
  ContentParentChildrenChildren = 'content___parent___children___children',
  ContentParentInternalContent = 'content___parent___internal___content',
  ContentParentInternalContentDigest = 'content___parent___internal___contentDigest',
  ContentParentInternalDescription = 'content___parent___internal___description',
  ContentParentInternalFieldOwners = 'content___parent___internal___fieldOwners',
  ContentParentInternalIgnoreType = 'content___parent___internal___ignoreType',
  ContentParentInternalMediaType = 'content___parent___internal___mediaType',
  ContentParentInternalOwner = 'content___parent___internal___owner',
  ContentParentInternalType = 'content___parent___internal___type',
  ContentChildren = 'content___children',
  ContentChildrenId = 'content___children___id',
  ContentChildrenParentId = 'content___children___parent___id',
  ContentChildrenParentChildren = 'content___children___parent___children',
  ContentChildrenChildren = 'content___children___children',
  ContentChildrenChildrenId = 'content___children___children___id',
  ContentChildrenChildrenChildren = 'content___children___children___children',
  ContentChildrenInternalContent = 'content___children___internal___content',
  ContentChildrenInternalContentDigest = 'content___children___internal___contentDigest',
  ContentChildrenInternalDescription = 'content___children___internal___description',
  ContentChildrenInternalFieldOwners = 'content___children___internal___fieldOwners',
  ContentChildrenInternalIgnoreType = 'content___children___internal___ignoreType',
  ContentChildrenInternalMediaType = 'content___children___internal___mediaType',
  ContentChildrenInternalOwner = 'content___children___internal___owner',
  ContentChildrenInternalType = 'content___children___internal___type',
  ContentInternalContent = 'content___internal___content',
  ContentInternalContentDigest = 'content___internal___contentDigest',
  ContentInternalDescription = 'content___internal___description',
  ContentInternalFieldOwners = 'content___internal___fieldOwners',
  ContentInternalIgnoreType = 'content___internal___ignoreType',
  ContentInternalMediaType = 'content___internal___mediaType',
  ContentInternalOwner = 'content___internal___owner',
  ContentInternalType = 'content___internal___type',
  ContentContent = 'content___content',
  ContentSysType = 'content___sys___type',
  ContentChildrenMdx = 'content___childrenMdx',
  ContentChildrenMdxRawBody = 'content___childrenMdx___rawBody',
  ContentChildrenMdxFileAbsolutePath = 'content___childrenMdx___fileAbsolutePath',
  ContentChildrenMdxFrontmatterTitle = 'content___childrenMdx___frontmatter___title',
  ContentChildrenMdxSlug = 'content___childrenMdx___slug',
  ContentChildrenMdxBody = 'content___childrenMdx___body',
  ContentChildrenMdxExcerpt = 'content___childrenMdx___excerpt',
  ContentChildrenMdxHeadings = 'content___childrenMdx___headings',
  ContentChildrenMdxHeadingsValue = 'content___childrenMdx___headings___value',
  ContentChildrenMdxHeadingsDepth = 'content___childrenMdx___headings___depth',
  ContentChildrenMdxHtml = 'content___childrenMdx___html',
  ContentChildrenMdxMdxAst = 'content___childrenMdx___mdxAST',
  ContentChildrenMdxTableOfContents = 'content___childrenMdx___tableOfContents',
  ContentChildrenMdxTimeToRead = 'content___childrenMdx___timeToRead',
  ContentChildrenMdxWordCountParagraphs = 'content___childrenMdx___wordCount___paragraphs',
  ContentChildrenMdxWordCountSentences = 'content___childrenMdx___wordCount___sentences',
  ContentChildrenMdxWordCountWords = 'content___childrenMdx___wordCount___words',
  ContentChildrenMdxId = 'content___childrenMdx___id',
  ContentChildrenMdxParentId = 'content___childrenMdx___parent___id',
  ContentChildrenMdxParentChildren = 'content___childrenMdx___parent___children',
  ContentChildrenMdxChildren = 'content___childrenMdx___children',
  ContentChildrenMdxChildrenId = 'content___childrenMdx___children___id',
  ContentChildrenMdxChildrenChildren = 'content___childrenMdx___children___children',
  ContentChildrenMdxInternalContent = 'content___childrenMdx___internal___content',
  ContentChildrenMdxInternalContentDigest = 'content___childrenMdx___internal___contentDigest',
  ContentChildrenMdxInternalDescription = 'content___childrenMdx___internal___description',
  ContentChildrenMdxInternalFieldOwners = 'content___childrenMdx___internal___fieldOwners',
  ContentChildrenMdxInternalIgnoreType = 'content___childrenMdx___internal___ignoreType',
  ContentChildrenMdxInternalMediaType = 'content___childrenMdx___internal___mediaType',
  ContentChildrenMdxInternalOwner = 'content___childrenMdx___internal___owner',
  ContentChildrenMdxInternalType = 'content___childrenMdx___internal___type',
  ContentChildMdxRawBody = 'content___childMdx___rawBody',
  ContentChildMdxFileAbsolutePath = 'content___childMdx___fileAbsolutePath',
  ContentChildMdxFrontmatterTitle = 'content___childMdx___frontmatter___title',
  ContentChildMdxSlug = 'content___childMdx___slug',
  ContentChildMdxBody = 'content___childMdx___body',
  ContentChildMdxExcerpt = 'content___childMdx___excerpt',
  ContentChildMdxHeadings = 'content___childMdx___headings',
  ContentChildMdxHeadingsValue = 'content___childMdx___headings___value',
  ContentChildMdxHeadingsDepth = 'content___childMdx___headings___depth',
  ContentChildMdxHtml = 'content___childMdx___html',
  ContentChildMdxMdxAst = 'content___childMdx___mdxAST',
  ContentChildMdxTableOfContents = 'content___childMdx___tableOfContents',
  ContentChildMdxTimeToRead = 'content___childMdx___timeToRead',
  ContentChildMdxWordCountParagraphs = 'content___childMdx___wordCount___paragraphs',
  ContentChildMdxWordCountSentences = 'content___childMdx___wordCount___sentences',
  ContentChildMdxWordCountWords = 'content___childMdx___wordCount___words',
  ContentChildMdxId = 'content___childMdx___id',
  ContentChildMdxParentId = 'content___childMdx___parent___id',
  ContentChildMdxParentChildren = 'content___childMdx___parent___children',
  ContentChildMdxChildren = 'content___childMdx___children',
  ContentChildMdxChildrenId = 'content___childMdx___children___id',
  ContentChildMdxChildrenChildren = 'content___childMdx___children___children',
  ContentChildMdxInternalContent = 'content___childMdx___internal___content',
  ContentChildMdxInternalContentDigest = 'content___childMdx___internal___contentDigest',
  ContentChildMdxInternalDescription = 'content___childMdx___internal___description',
  ContentChildMdxInternalFieldOwners = 'content___childMdx___internal___fieldOwners',
  ContentChildMdxInternalIgnoreType = 'content___childMdx___internal___ignoreType',
  ContentChildMdxInternalMediaType = 'content___childMdx___internal___mediaType',
  ContentChildMdxInternalOwner = 'content___childMdx___internal___owner',
  ContentChildMdxInternalType = 'content___childMdx___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ChildrenContentfulBannerContentTextNode = 'childrenContentfulBannerContentTextNode',
  ChildrenContentfulBannerContentTextNodeId = 'childrenContentfulBannerContentTextNode___id',
  ChildrenContentfulBannerContentTextNodeParentId = 'childrenContentfulBannerContentTextNode___parent___id',
  ChildrenContentfulBannerContentTextNodeParentParentId = 'childrenContentfulBannerContentTextNode___parent___parent___id',
  ChildrenContentfulBannerContentTextNodeParentParentChildren = 'childrenContentfulBannerContentTextNode___parent___parent___children',
  ChildrenContentfulBannerContentTextNodeParentChildren = 'childrenContentfulBannerContentTextNode___parent___children',
  ChildrenContentfulBannerContentTextNodeParentChildrenId = 'childrenContentfulBannerContentTextNode___parent___children___id',
  ChildrenContentfulBannerContentTextNodeParentChildrenChildren = 'childrenContentfulBannerContentTextNode___parent___children___children',
  ChildrenContentfulBannerContentTextNodeParentInternalContent = 'childrenContentfulBannerContentTextNode___parent___internal___content',
  ChildrenContentfulBannerContentTextNodeParentInternalContentDigest = 'childrenContentfulBannerContentTextNode___parent___internal___contentDigest',
  ChildrenContentfulBannerContentTextNodeParentInternalDescription = 'childrenContentfulBannerContentTextNode___parent___internal___description',
  ChildrenContentfulBannerContentTextNodeParentInternalFieldOwners = 'childrenContentfulBannerContentTextNode___parent___internal___fieldOwners',
  ChildrenContentfulBannerContentTextNodeParentInternalIgnoreType = 'childrenContentfulBannerContentTextNode___parent___internal___ignoreType',
  ChildrenContentfulBannerContentTextNodeParentInternalMediaType = 'childrenContentfulBannerContentTextNode___parent___internal___mediaType',
  ChildrenContentfulBannerContentTextNodeParentInternalOwner = 'childrenContentfulBannerContentTextNode___parent___internal___owner',
  ChildrenContentfulBannerContentTextNodeParentInternalType = 'childrenContentfulBannerContentTextNode___parent___internal___type',
  ChildrenContentfulBannerContentTextNodeChildren = 'childrenContentfulBannerContentTextNode___children',
  ChildrenContentfulBannerContentTextNodeChildrenId = 'childrenContentfulBannerContentTextNode___children___id',
  ChildrenContentfulBannerContentTextNodeChildrenParentId = 'childrenContentfulBannerContentTextNode___children___parent___id',
  ChildrenContentfulBannerContentTextNodeChildrenParentChildren = 'childrenContentfulBannerContentTextNode___children___parent___children',
  ChildrenContentfulBannerContentTextNodeChildrenChildren = 'childrenContentfulBannerContentTextNode___children___children',
  ChildrenContentfulBannerContentTextNodeChildrenChildrenId = 'childrenContentfulBannerContentTextNode___children___children___id',
  ChildrenContentfulBannerContentTextNodeChildrenChildrenChildren = 'childrenContentfulBannerContentTextNode___children___children___children',
  ChildrenContentfulBannerContentTextNodeChildrenInternalContent = 'childrenContentfulBannerContentTextNode___children___internal___content',
  ChildrenContentfulBannerContentTextNodeChildrenInternalContentDigest = 'childrenContentfulBannerContentTextNode___children___internal___contentDigest',
  ChildrenContentfulBannerContentTextNodeChildrenInternalDescription = 'childrenContentfulBannerContentTextNode___children___internal___description',
  ChildrenContentfulBannerContentTextNodeChildrenInternalFieldOwners = 'childrenContentfulBannerContentTextNode___children___internal___fieldOwners',
  ChildrenContentfulBannerContentTextNodeChildrenInternalIgnoreType = 'childrenContentfulBannerContentTextNode___children___internal___ignoreType',
  ChildrenContentfulBannerContentTextNodeChildrenInternalMediaType = 'childrenContentfulBannerContentTextNode___children___internal___mediaType',
  ChildrenContentfulBannerContentTextNodeChildrenInternalOwner = 'childrenContentfulBannerContentTextNode___children___internal___owner',
  ChildrenContentfulBannerContentTextNodeChildrenInternalType = 'childrenContentfulBannerContentTextNode___children___internal___type',
  ChildrenContentfulBannerContentTextNodeInternalContent = 'childrenContentfulBannerContentTextNode___internal___content',
  ChildrenContentfulBannerContentTextNodeInternalContentDigest = 'childrenContentfulBannerContentTextNode___internal___contentDigest',
  ChildrenContentfulBannerContentTextNodeInternalDescription = 'childrenContentfulBannerContentTextNode___internal___description',
  ChildrenContentfulBannerContentTextNodeInternalFieldOwners = 'childrenContentfulBannerContentTextNode___internal___fieldOwners',
  ChildrenContentfulBannerContentTextNodeInternalIgnoreType = 'childrenContentfulBannerContentTextNode___internal___ignoreType',
  ChildrenContentfulBannerContentTextNodeInternalMediaType = 'childrenContentfulBannerContentTextNode___internal___mediaType',
  ChildrenContentfulBannerContentTextNodeInternalOwner = 'childrenContentfulBannerContentTextNode___internal___owner',
  ChildrenContentfulBannerContentTextNodeInternalType = 'childrenContentfulBannerContentTextNode___internal___type',
  ChildrenContentfulBannerContentTextNodeContent = 'childrenContentfulBannerContentTextNode___content',
  ChildrenContentfulBannerContentTextNodeSysType = 'childrenContentfulBannerContentTextNode___sys___type',
  ChildrenContentfulBannerContentTextNodeChildrenMdx = 'childrenContentfulBannerContentTextNode___childrenMdx',
  ChildrenContentfulBannerContentTextNodeChildrenMdxRawBody = 'childrenContentfulBannerContentTextNode___childrenMdx___rawBody',
  ChildrenContentfulBannerContentTextNodeChildrenMdxFileAbsolutePath = 'childrenContentfulBannerContentTextNode___childrenMdx___fileAbsolutePath',
  ChildrenContentfulBannerContentTextNodeChildrenMdxFrontmatterTitle = 'childrenContentfulBannerContentTextNode___childrenMdx___frontmatter___title',
  ChildrenContentfulBannerContentTextNodeChildrenMdxSlug = 'childrenContentfulBannerContentTextNode___childrenMdx___slug',
  ChildrenContentfulBannerContentTextNodeChildrenMdxBody = 'childrenContentfulBannerContentTextNode___childrenMdx___body',
  ChildrenContentfulBannerContentTextNodeChildrenMdxExcerpt = 'childrenContentfulBannerContentTextNode___childrenMdx___excerpt',
  ChildrenContentfulBannerContentTextNodeChildrenMdxHeadings = 'childrenContentfulBannerContentTextNode___childrenMdx___headings',
  ChildrenContentfulBannerContentTextNodeChildrenMdxHeadingsValue = 'childrenContentfulBannerContentTextNode___childrenMdx___headings___value',
  ChildrenContentfulBannerContentTextNodeChildrenMdxHeadingsDepth = 'childrenContentfulBannerContentTextNode___childrenMdx___headings___depth',
  ChildrenContentfulBannerContentTextNodeChildrenMdxHtml = 'childrenContentfulBannerContentTextNode___childrenMdx___html',
  ChildrenContentfulBannerContentTextNodeChildrenMdxMdxAst = 'childrenContentfulBannerContentTextNode___childrenMdx___mdxAST',
  ChildrenContentfulBannerContentTextNodeChildrenMdxTableOfContents = 'childrenContentfulBannerContentTextNode___childrenMdx___tableOfContents',
  ChildrenContentfulBannerContentTextNodeChildrenMdxTimeToRead = 'childrenContentfulBannerContentTextNode___childrenMdx___timeToRead',
  ChildrenContentfulBannerContentTextNodeChildrenMdxWordCountParagraphs = 'childrenContentfulBannerContentTextNode___childrenMdx___wordCount___paragraphs',
  ChildrenContentfulBannerContentTextNodeChildrenMdxWordCountSentences = 'childrenContentfulBannerContentTextNode___childrenMdx___wordCount___sentences',
  ChildrenContentfulBannerContentTextNodeChildrenMdxWordCountWords = 'childrenContentfulBannerContentTextNode___childrenMdx___wordCount___words',
  ChildrenContentfulBannerContentTextNodeChildrenMdxId = 'childrenContentfulBannerContentTextNode___childrenMdx___id',
  ChildrenContentfulBannerContentTextNodeChildrenMdxParentId = 'childrenContentfulBannerContentTextNode___childrenMdx___parent___id',
  ChildrenContentfulBannerContentTextNodeChildrenMdxParentChildren = 'childrenContentfulBannerContentTextNode___childrenMdx___parent___children',
  ChildrenContentfulBannerContentTextNodeChildrenMdxChildren = 'childrenContentfulBannerContentTextNode___childrenMdx___children',
  ChildrenContentfulBannerContentTextNodeChildrenMdxChildrenId = 'childrenContentfulBannerContentTextNode___childrenMdx___children___id',
  ChildrenContentfulBannerContentTextNodeChildrenMdxChildrenChildren = 'childrenContentfulBannerContentTextNode___childrenMdx___children___children',
  ChildrenContentfulBannerContentTextNodeChildrenMdxInternalContent = 'childrenContentfulBannerContentTextNode___childrenMdx___internal___content',
  ChildrenContentfulBannerContentTextNodeChildrenMdxInternalContentDigest = 'childrenContentfulBannerContentTextNode___childrenMdx___internal___contentDigest',
  ChildrenContentfulBannerContentTextNodeChildrenMdxInternalDescription = 'childrenContentfulBannerContentTextNode___childrenMdx___internal___description',
  ChildrenContentfulBannerContentTextNodeChildrenMdxInternalFieldOwners = 'childrenContentfulBannerContentTextNode___childrenMdx___internal___fieldOwners',
  ChildrenContentfulBannerContentTextNodeChildrenMdxInternalIgnoreType = 'childrenContentfulBannerContentTextNode___childrenMdx___internal___ignoreType',
  ChildrenContentfulBannerContentTextNodeChildrenMdxInternalMediaType = 'childrenContentfulBannerContentTextNode___childrenMdx___internal___mediaType',
  ChildrenContentfulBannerContentTextNodeChildrenMdxInternalOwner = 'childrenContentfulBannerContentTextNode___childrenMdx___internal___owner',
  ChildrenContentfulBannerContentTextNodeChildrenMdxInternalType = 'childrenContentfulBannerContentTextNode___childrenMdx___internal___type',
  ChildrenContentfulBannerContentTextNodeChildMdxRawBody = 'childrenContentfulBannerContentTextNode___childMdx___rawBody',
  ChildrenContentfulBannerContentTextNodeChildMdxFileAbsolutePath = 'childrenContentfulBannerContentTextNode___childMdx___fileAbsolutePath',
  ChildrenContentfulBannerContentTextNodeChildMdxFrontmatterTitle = 'childrenContentfulBannerContentTextNode___childMdx___frontmatter___title',
  ChildrenContentfulBannerContentTextNodeChildMdxSlug = 'childrenContentfulBannerContentTextNode___childMdx___slug',
  ChildrenContentfulBannerContentTextNodeChildMdxBody = 'childrenContentfulBannerContentTextNode___childMdx___body',
  ChildrenContentfulBannerContentTextNodeChildMdxExcerpt = 'childrenContentfulBannerContentTextNode___childMdx___excerpt',
  ChildrenContentfulBannerContentTextNodeChildMdxHeadings = 'childrenContentfulBannerContentTextNode___childMdx___headings',
  ChildrenContentfulBannerContentTextNodeChildMdxHeadingsValue = 'childrenContentfulBannerContentTextNode___childMdx___headings___value',
  ChildrenContentfulBannerContentTextNodeChildMdxHeadingsDepth = 'childrenContentfulBannerContentTextNode___childMdx___headings___depth',
  ChildrenContentfulBannerContentTextNodeChildMdxHtml = 'childrenContentfulBannerContentTextNode___childMdx___html',
  ChildrenContentfulBannerContentTextNodeChildMdxMdxAst = 'childrenContentfulBannerContentTextNode___childMdx___mdxAST',
  ChildrenContentfulBannerContentTextNodeChildMdxTableOfContents = 'childrenContentfulBannerContentTextNode___childMdx___tableOfContents',
  ChildrenContentfulBannerContentTextNodeChildMdxTimeToRead = 'childrenContentfulBannerContentTextNode___childMdx___timeToRead',
  ChildrenContentfulBannerContentTextNodeChildMdxWordCountParagraphs = 'childrenContentfulBannerContentTextNode___childMdx___wordCount___paragraphs',
  ChildrenContentfulBannerContentTextNodeChildMdxWordCountSentences = 'childrenContentfulBannerContentTextNode___childMdx___wordCount___sentences',
  ChildrenContentfulBannerContentTextNodeChildMdxWordCountWords = 'childrenContentfulBannerContentTextNode___childMdx___wordCount___words',
  ChildrenContentfulBannerContentTextNodeChildMdxId = 'childrenContentfulBannerContentTextNode___childMdx___id',
  ChildrenContentfulBannerContentTextNodeChildMdxParentId = 'childrenContentfulBannerContentTextNode___childMdx___parent___id',
  ChildrenContentfulBannerContentTextNodeChildMdxParentChildren = 'childrenContentfulBannerContentTextNode___childMdx___parent___children',
  ChildrenContentfulBannerContentTextNodeChildMdxChildren = 'childrenContentfulBannerContentTextNode___childMdx___children',
  ChildrenContentfulBannerContentTextNodeChildMdxChildrenId = 'childrenContentfulBannerContentTextNode___childMdx___children___id',
  ChildrenContentfulBannerContentTextNodeChildMdxChildrenChildren = 'childrenContentfulBannerContentTextNode___childMdx___children___children',
  ChildrenContentfulBannerContentTextNodeChildMdxInternalContent = 'childrenContentfulBannerContentTextNode___childMdx___internal___content',
  ChildrenContentfulBannerContentTextNodeChildMdxInternalContentDigest = 'childrenContentfulBannerContentTextNode___childMdx___internal___contentDigest',
  ChildrenContentfulBannerContentTextNodeChildMdxInternalDescription = 'childrenContentfulBannerContentTextNode___childMdx___internal___description',
  ChildrenContentfulBannerContentTextNodeChildMdxInternalFieldOwners = 'childrenContentfulBannerContentTextNode___childMdx___internal___fieldOwners',
  ChildrenContentfulBannerContentTextNodeChildMdxInternalIgnoreType = 'childrenContentfulBannerContentTextNode___childMdx___internal___ignoreType',
  ChildrenContentfulBannerContentTextNodeChildMdxInternalMediaType = 'childrenContentfulBannerContentTextNode___childMdx___internal___mediaType',
  ChildrenContentfulBannerContentTextNodeChildMdxInternalOwner = 'childrenContentfulBannerContentTextNode___childMdx___internal___owner',
  ChildrenContentfulBannerContentTextNodeChildMdxInternalType = 'childrenContentfulBannerContentTextNode___childMdx___internal___type',
  ChildContentfulBannerContentTextNodeId = 'childContentfulBannerContentTextNode___id',
  ChildContentfulBannerContentTextNodeParentId = 'childContentfulBannerContentTextNode___parent___id',
  ChildContentfulBannerContentTextNodeParentParentId = 'childContentfulBannerContentTextNode___parent___parent___id',
  ChildContentfulBannerContentTextNodeParentParentChildren = 'childContentfulBannerContentTextNode___parent___parent___children',
  ChildContentfulBannerContentTextNodeParentChildren = 'childContentfulBannerContentTextNode___parent___children',
  ChildContentfulBannerContentTextNodeParentChildrenId = 'childContentfulBannerContentTextNode___parent___children___id',
  ChildContentfulBannerContentTextNodeParentChildrenChildren = 'childContentfulBannerContentTextNode___parent___children___children',
  ChildContentfulBannerContentTextNodeParentInternalContent = 'childContentfulBannerContentTextNode___parent___internal___content',
  ChildContentfulBannerContentTextNodeParentInternalContentDigest = 'childContentfulBannerContentTextNode___parent___internal___contentDigest',
  ChildContentfulBannerContentTextNodeParentInternalDescription = 'childContentfulBannerContentTextNode___parent___internal___description',
  ChildContentfulBannerContentTextNodeParentInternalFieldOwners = 'childContentfulBannerContentTextNode___parent___internal___fieldOwners',
  ChildContentfulBannerContentTextNodeParentInternalIgnoreType = 'childContentfulBannerContentTextNode___parent___internal___ignoreType',
  ChildContentfulBannerContentTextNodeParentInternalMediaType = 'childContentfulBannerContentTextNode___parent___internal___mediaType',
  ChildContentfulBannerContentTextNodeParentInternalOwner = 'childContentfulBannerContentTextNode___parent___internal___owner',
  ChildContentfulBannerContentTextNodeParentInternalType = 'childContentfulBannerContentTextNode___parent___internal___type',
  ChildContentfulBannerContentTextNodeChildren = 'childContentfulBannerContentTextNode___children',
  ChildContentfulBannerContentTextNodeChildrenId = 'childContentfulBannerContentTextNode___children___id',
  ChildContentfulBannerContentTextNodeChildrenParentId = 'childContentfulBannerContentTextNode___children___parent___id',
  ChildContentfulBannerContentTextNodeChildrenParentChildren = 'childContentfulBannerContentTextNode___children___parent___children',
  ChildContentfulBannerContentTextNodeChildrenChildren = 'childContentfulBannerContentTextNode___children___children',
  ChildContentfulBannerContentTextNodeChildrenChildrenId = 'childContentfulBannerContentTextNode___children___children___id',
  ChildContentfulBannerContentTextNodeChildrenChildrenChildren = 'childContentfulBannerContentTextNode___children___children___children',
  ChildContentfulBannerContentTextNodeChildrenInternalContent = 'childContentfulBannerContentTextNode___children___internal___content',
  ChildContentfulBannerContentTextNodeChildrenInternalContentDigest = 'childContentfulBannerContentTextNode___children___internal___contentDigest',
  ChildContentfulBannerContentTextNodeChildrenInternalDescription = 'childContentfulBannerContentTextNode___children___internal___description',
  ChildContentfulBannerContentTextNodeChildrenInternalFieldOwners = 'childContentfulBannerContentTextNode___children___internal___fieldOwners',
  ChildContentfulBannerContentTextNodeChildrenInternalIgnoreType = 'childContentfulBannerContentTextNode___children___internal___ignoreType',
  ChildContentfulBannerContentTextNodeChildrenInternalMediaType = 'childContentfulBannerContentTextNode___children___internal___mediaType',
  ChildContentfulBannerContentTextNodeChildrenInternalOwner = 'childContentfulBannerContentTextNode___children___internal___owner',
  ChildContentfulBannerContentTextNodeChildrenInternalType = 'childContentfulBannerContentTextNode___children___internal___type',
  ChildContentfulBannerContentTextNodeInternalContent = 'childContentfulBannerContentTextNode___internal___content',
  ChildContentfulBannerContentTextNodeInternalContentDigest = 'childContentfulBannerContentTextNode___internal___contentDigest',
  ChildContentfulBannerContentTextNodeInternalDescription = 'childContentfulBannerContentTextNode___internal___description',
  ChildContentfulBannerContentTextNodeInternalFieldOwners = 'childContentfulBannerContentTextNode___internal___fieldOwners',
  ChildContentfulBannerContentTextNodeInternalIgnoreType = 'childContentfulBannerContentTextNode___internal___ignoreType',
  ChildContentfulBannerContentTextNodeInternalMediaType = 'childContentfulBannerContentTextNode___internal___mediaType',
  ChildContentfulBannerContentTextNodeInternalOwner = 'childContentfulBannerContentTextNode___internal___owner',
  ChildContentfulBannerContentTextNodeInternalType = 'childContentfulBannerContentTextNode___internal___type',
  ChildContentfulBannerContentTextNodeContent = 'childContentfulBannerContentTextNode___content',
  ChildContentfulBannerContentTextNodeSysType = 'childContentfulBannerContentTextNode___sys___type',
  ChildContentfulBannerContentTextNodeChildrenMdx = 'childContentfulBannerContentTextNode___childrenMdx',
  ChildContentfulBannerContentTextNodeChildrenMdxRawBody = 'childContentfulBannerContentTextNode___childrenMdx___rawBody',
  ChildContentfulBannerContentTextNodeChildrenMdxFileAbsolutePath = 'childContentfulBannerContentTextNode___childrenMdx___fileAbsolutePath',
  ChildContentfulBannerContentTextNodeChildrenMdxFrontmatterTitle = 'childContentfulBannerContentTextNode___childrenMdx___frontmatter___title',
  ChildContentfulBannerContentTextNodeChildrenMdxSlug = 'childContentfulBannerContentTextNode___childrenMdx___slug',
  ChildContentfulBannerContentTextNodeChildrenMdxBody = 'childContentfulBannerContentTextNode___childrenMdx___body',
  ChildContentfulBannerContentTextNodeChildrenMdxExcerpt = 'childContentfulBannerContentTextNode___childrenMdx___excerpt',
  ChildContentfulBannerContentTextNodeChildrenMdxHeadings = 'childContentfulBannerContentTextNode___childrenMdx___headings',
  ChildContentfulBannerContentTextNodeChildrenMdxHeadingsValue = 'childContentfulBannerContentTextNode___childrenMdx___headings___value',
  ChildContentfulBannerContentTextNodeChildrenMdxHeadingsDepth = 'childContentfulBannerContentTextNode___childrenMdx___headings___depth',
  ChildContentfulBannerContentTextNodeChildrenMdxHtml = 'childContentfulBannerContentTextNode___childrenMdx___html',
  ChildContentfulBannerContentTextNodeChildrenMdxMdxAst = 'childContentfulBannerContentTextNode___childrenMdx___mdxAST',
  ChildContentfulBannerContentTextNodeChildrenMdxTableOfContents = 'childContentfulBannerContentTextNode___childrenMdx___tableOfContents',
  ChildContentfulBannerContentTextNodeChildrenMdxTimeToRead = 'childContentfulBannerContentTextNode___childrenMdx___timeToRead',
  ChildContentfulBannerContentTextNodeChildrenMdxWordCountParagraphs = 'childContentfulBannerContentTextNode___childrenMdx___wordCount___paragraphs',
  ChildContentfulBannerContentTextNodeChildrenMdxWordCountSentences = 'childContentfulBannerContentTextNode___childrenMdx___wordCount___sentences',
  ChildContentfulBannerContentTextNodeChildrenMdxWordCountWords = 'childContentfulBannerContentTextNode___childrenMdx___wordCount___words',
  ChildContentfulBannerContentTextNodeChildrenMdxId = 'childContentfulBannerContentTextNode___childrenMdx___id',
  ChildContentfulBannerContentTextNodeChildrenMdxParentId = 'childContentfulBannerContentTextNode___childrenMdx___parent___id',
  ChildContentfulBannerContentTextNodeChildrenMdxParentChildren = 'childContentfulBannerContentTextNode___childrenMdx___parent___children',
  ChildContentfulBannerContentTextNodeChildrenMdxChildren = 'childContentfulBannerContentTextNode___childrenMdx___children',
  ChildContentfulBannerContentTextNodeChildrenMdxChildrenId = 'childContentfulBannerContentTextNode___childrenMdx___children___id',
  ChildContentfulBannerContentTextNodeChildrenMdxChildrenChildren = 'childContentfulBannerContentTextNode___childrenMdx___children___children',
  ChildContentfulBannerContentTextNodeChildrenMdxInternalContent = 'childContentfulBannerContentTextNode___childrenMdx___internal___content',
  ChildContentfulBannerContentTextNodeChildrenMdxInternalContentDigest = 'childContentfulBannerContentTextNode___childrenMdx___internal___contentDigest',
  ChildContentfulBannerContentTextNodeChildrenMdxInternalDescription = 'childContentfulBannerContentTextNode___childrenMdx___internal___description',
  ChildContentfulBannerContentTextNodeChildrenMdxInternalFieldOwners = 'childContentfulBannerContentTextNode___childrenMdx___internal___fieldOwners',
  ChildContentfulBannerContentTextNodeChildrenMdxInternalIgnoreType = 'childContentfulBannerContentTextNode___childrenMdx___internal___ignoreType',
  ChildContentfulBannerContentTextNodeChildrenMdxInternalMediaType = 'childContentfulBannerContentTextNode___childrenMdx___internal___mediaType',
  ChildContentfulBannerContentTextNodeChildrenMdxInternalOwner = 'childContentfulBannerContentTextNode___childrenMdx___internal___owner',
  ChildContentfulBannerContentTextNodeChildrenMdxInternalType = 'childContentfulBannerContentTextNode___childrenMdx___internal___type',
  ChildContentfulBannerContentTextNodeChildMdxRawBody = 'childContentfulBannerContentTextNode___childMdx___rawBody',
  ChildContentfulBannerContentTextNodeChildMdxFileAbsolutePath = 'childContentfulBannerContentTextNode___childMdx___fileAbsolutePath',
  ChildContentfulBannerContentTextNodeChildMdxFrontmatterTitle = 'childContentfulBannerContentTextNode___childMdx___frontmatter___title',
  ChildContentfulBannerContentTextNodeChildMdxSlug = 'childContentfulBannerContentTextNode___childMdx___slug',
  ChildContentfulBannerContentTextNodeChildMdxBody = 'childContentfulBannerContentTextNode___childMdx___body',
  ChildContentfulBannerContentTextNodeChildMdxExcerpt = 'childContentfulBannerContentTextNode___childMdx___excerpt',
  ChildContentfulBannerContentTextNodeChildMdxHeadings = 'childContentfulBannerContentTextNode___childMdx___headings',
  ChildContentfulBannerContentTextNodeChildMdxHeadingsValue = 'childContentfulBannerContentTextNode___childMdx___headings___value',
  ChildContentfulBannerContentTextNodeChildMdxHeadingsDepth = 'childContentfulBannerContentTextNode___childMdx___headings___depth',
  ChildContentfulBannerContentTextNodeChildMdxHtml = 'childContentfulBannerContentTextNode___childMdx___html',
  ChildContentfulBannerContentTextNodeChildMdxMdxAst = 'childContentfulBannerContentTextNode___childMdx___mdxAST',
  ChildContentfulBannerContentTextNodeChildMdxTableOfContents = 'childContentfulBannerContentTextNode___childMdx___tableOfContents',
  ChildContentfulBannerContentTextNodeChildMdxTimeToRead = 'childContentfulBannerContentTextNode___childMdx___timeToRead',
  ChildContentfulBannerContentTextNodeChildMdxWordCountParagraphs = 'childContentfulBannerContentTextNode___childMdx___wordCount___paragraphs',
  ChildContentfulBannerContentTextNodeChildMdxWordCountSentences = 'childContentfulBannerContentTextNode___childMdx___wordCount___sentences',
  ChildContentfulBannerContentTextNodeChildMdxWordCountWords = 'childContentfulBannerContentTextNode___childMdx___wordCount___words',
  ChildContentfulBannerContentTextNodeChildMdxId = 'childContentfulBannerContentTextNode___childMdx___id',
  ChildContentfulBannerContentTextNodeChildMdxParentId = 'childContentfulBannerContentTextNode___childMdx___parent___id',
  ChildContentfulBannerContentTextNodeChildMdxParentChildren = 'childContentfulBannerContentTextNode___childMdx___parent___children',
  ChildContentfulBannerContentTextNodeChildMdxChildren = 'childContentfulBannerContentTextNode___childMdx___children',
  ChildContentfulBannerContentTextNodeChildMdxChildrenId = 'childContentfulBannerContentTextNode___childMdx___children___id',
  ChildContentfulBannerContentTextNodeChildMdxChildrenChildren = 'childContentfulBannerContentTextNode___childMdx___children___children',
  ChildContentfulBannerContentTextNodeChildMdxInternalContent = 'childContentfulBannerContentTextNode___childMdx___internal___content',
  ChildContentfulBannerContentTextNodeChildMdxInternalContentDigest = 'childContentfulBannerContentTextNode___childMdx___internal___contentDigest',
  ChildContentfulBannerContentTextNodeChildMdxInternalDescription = 'childContentfulBannerContentTextNode___childMdx___internal___description',
  ChildContentfulBannerContentTextNodeChildMdxInternalFieldOwners = 'childContentfulBannerContentTextNode___childMdx___internal___fieldOwners',
  ChildContentfulBannerContentTextNodeChildMdxInternalIgnoreType = 'childContentfulBannerContentTextNode___childMdx___internal___ignoreType',
  ChildContentfulBannerContentTextNodeChildMdxInternalMediaType = 'childContentfulBannerContentTextNode___childMdx___internal___mediaType',
  ChildContentfulBannerContentTextNodeChildMdxInternalOwner = 'childContentfulBannerContentTextNode___childMdx___internal___owner',
  ChildContentfulBannerContentTextNodeChildMdxInternalType = 'childContentfulBannerContentTextNode___childMdx___internal___type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulBannerFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  hideOnPage?: Maybe<StringQueryOperatorInput>;
  startAt?: Maybe<DateQueryOperatorInput>;
  endAt?: Maybe<DateQueryOperatorInput>;
  content?: Maybe<ContentfulBannerContentTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBannerSysFilterInput>;
  childrenContentfulBannerContentTextNode?: Maybe<ContentfulBannerContentTextNodeFilterListInput>;
  childContentfulBannerContentTextNode?: Maybe<ContentfulBannerContentTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulBannerGroupConnection = {
  __typename?: 'ContentfulBannerGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulBannerEdge>;
  nodes: Array<ContentfulBanner>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulBannerSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulBannerFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulBannerSys = {
  __typename?: 'ContentfulBannerSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulBannerSysContentType>;
};

export type ContentfulBannerSysContentType = {
  __typename?: 'ContentfulBannerSysContentType';
  sys?: Maybe<ContentfulBannerSysContentTypeSys>;
};

export type ContentfulBannerSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulBannerSysContentTypeSysFilterInput>;
};

export type ContentfulBannerSysContentTypeSys = {
  __typename?: 'ContentfulBannerSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulBannerSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulBannerSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulBannerSysContentTypeFilterInput>;
};

export type ContentfulCallToAction = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulCallToAction';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCallToActionSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulCallToActionCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCallToActionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCallToActionConnection = {
  __typename?: 'ContentfulCallToActionConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCallToActionEdge>;
  nodes: Array<ContentfulCallToAction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCallToActionGroupConnection>;
};


export type ContentfulCallToActionConnectionDistinctArgs = {
  field: ContentfulCallToActionFieldsEnum;
};


export type ContentfulCallToActionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCallToActionFieldsEnum;
};

export type ContentfulCallToActionEdge = {
  __typename?: 'ContentfulCallToActionEdge';
  next?: Maybe<ContentfulCallToAction>;
  node: ContentfulCallToAction;
  previous?: Maybe<ContentfulCallToAction>;
};

export enum ContentfulCallToActionFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Title = 'title',
  Slug = 'slug',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulCallToActionFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCallToActionSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulCallToActionGroupConnection = {
  __typename?: 'ContentfulCallToActionGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCallToActionEdge>;
  nodes: Array<ContentfulCallToAction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCallToActionSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCallToActionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCallToActionSys = {
  __typename?: 'ContentfulCallToActionSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCallToActionSysContentType>;
};

export type ContentfulCallToActionSysContentType = {
  __typename?: 'ContentfulCallToActionSysContentType';
  sys?: Maybe<ContentfulCallToActionSysContentTypeSys>;
};

export type ContentfulCallToActionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCallToActionSysContentTypeSysFilterInput>;
};

export type ContentfulCallToActionSysContentTypeSys = {
  __typename?: 'ContentfulCallToActionSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulCallToActionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCallToActionSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulCallToActionSysContentTypeFilterInput>;
};

export type ContentfulCompany = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulCompany';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  contactTitle?: Maybe<Scalars['String']>;
  funding?: Maybe<Scalars['String']>;
  yearFounded?: Maybe<Scalars['Date']>;
  employeeCount?: Maybe<Scalars['String']>;
  sector?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  stage?: Maybe<Scalars['String']>;
  logo?: Maybe<ContentfulAsset>;
  customer_story?: Maybe<Array<Maybe<ContentfulCustomerStory>>>;
  mainQuote?: Maybe<ContentfulCompanyMainQuoteTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCompanySys>;
  cover?: Maybe<ContentfulAsset>;
  /** Returns all children nodes filtered by type contentfulCompanyMainQuoteTextNode */
  childrenContentfulCompanyMainQuoteTextNode?: Maybe<Array<Maybe<ContentfulCompanyMainQuoteTextNode>>>;
  /**
   * Returns the first child node of type contentfulCompanyMainQuoteTextNode or
   * null if there are no children of given type on this node
   */
  childContentfulCompanyMainQuoteTextNode?: Maybe<ContentfulCompanyMainQuoteTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulCompanyYearFoundedArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCompanyCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCompanyUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCompanyConnection = {
  __typename?: 'ContentfulCompanyConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCompanyEdge>;
  nodes: Array<ContentfulCompany>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCompanyGroupConnection>;
};


export type ContentfulCompanyConnectionDistinctArgs = {
  field: ContentfulCompanyFieldsEnum;
};


export type ContentfulCompanyConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCompanyFieldsEnum;
};

export type ContentfulCompanyEdge = {
  __typename?: 'ContentfulCompanyEdge';
  next?: Maybe<ContentfulCompany>;
  node: ContentfulCompany;
  previous?: Maybe<ContentfulCompany>;
};

export enum ContentfulCompanyFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Name = 'name',
  ContactName = 'contactName',
  ContactTitle = 'contactTitle',
  Funding = 'funding',
  YearFounded = 'yearFounded',
  EmployeeCount = 'employeeCount',
  Sector = 'sector',
  Location = 'location',
  Stage = 'stage',
  LogoContentfulId = 'logo___contentful_id',
  LogoId = 'logo___id',
  LogoSpaceId = 'logo___spaceId',
  LogoCreatedAt = 'logo___createdAt',
  LogoUpdatedAt = 'logo___updatedAt',
  LogoFileUrl = 'logo___file___url',
  LogoFileDetailsSize = 'logo___file___details___size',
  LogoFileFileName = 'logo___file___fileName',
  LogoFileContentType = 'logo___file___contentType',
  LogoFileErrorMessage = 'logo___file___error___message',
  LogoTitle = 'logo___title',
  LogoDescription = 'logo___description',
  LogoNodeLocale = 'logo___node_locale',
  LogoSysType = 'logo___sys___type',
  LogoSysRevision = 'logo___sys___revision',
  LogoLocalFileSourceInstanceName = 'logo___localFile___sourceInstanceName',
  LogoLocalFileAbsolutePath = 'logo___localFile___absolutePath',
  LogoLocalFileRelativePath = 'logo___localFile___relativePath',
  LogoLocalFileExtension = 'logo___localFile___extension',
  LogoLocalFileSize = 'logo___localFile___size',
  LogoLocalFilePrettySize = 'logo___localFile___prettySize',
  LogoLocalFileModifiedTime = 'logo___localFile___modifiedTime',
  LogoLocalFileAccessTime = 'logo___localFile___accessTime',
  LogoLocalFileChangeTime = 'logo___localFile___changeTime',
  LogoLocalFileBirthTime = 'logo___localFile___birthTime',
  LogoLocalFileRoot = 'logo___localFile___root',
  LogoLocalFileDir = 'logo___localFile___dir',
  LogoLocalFileBase = 'logo___localFile___base',
  LogoLocalFileExt = 'logo___localFile___ext',
  LogoLocalFileName = 'logo___localFile___name',
  LogoLocalFileRelativeDirectory = 'logo___localFile___relativeDirectory',
  LogoLocalFileDev = 'logo___localFile___dev',
  LogoLocalFileMode = 'logo___localFile___mode',
  LogoLocalFileNlink = 'logo___localFile___nlink',
  LogoLocalFileUid = 'logo___localFile___uid',
  LogoLocalFileGid = 'logo___localFile___gid',
  LogoLocalFileRdev = 'logo___localFile___rdev',
  LogoLocalFileIno = 'logo___localFile___ino',
  LogoLocalFileAtimeMs = 'logo___localFile___atimeMs',
  LogoLocalFileMtimeMs = 'logo___localFile___mtimeMs',
  LogoLocalFileCtimeMs = 'logo___localFile___ctimeMs',
  LogoLocalFileAtime = 'logo___localFile___atime',
  LogoLocalFileMtime = 'logo___localFile___mtime',
  LogoLocalFileCtime = 'logo___localFile___ctime',
  LogoLocalFileBirthtime = 'logo___localFile___birthtime',
  LogoLocalFileBirthtimeMs = 'logo___localFile___birthtimeMs',
  LogoLocalFileBlksize = 'logo___localFile___blksize',
  LogoLocalFileBlocks = 'logo___localFile___blocks',
  LogoLocalFileUrl = 'logo___localFile___url',
  LogoLocalFilePublicUrl = 'logo___localFile___publicURL',
  LogoLocalFileChildrenImageSharp = 'logo___localFile___childrenImageSharp',
  LogoLocalFileChildrenImageSharpGatsbyImageData = 'logo___localFile___childrenImageSharp___gatsbyImageData',
  LogoLocalFileChildrenImageSharpId = 'logo___localFile___childrenImageSharp___id',
  LogoLocalFileChildrenImageSharpChildren = 'logo___localFile___childrenImageSharp___children',
  LogoLocalFileChildImageSharpGatsbyImageData = 'logo___localFile___childImageSharp___gatsbyImageData',
  LogoLocalFileChildImageSharpId = 'logo___localFile___childImageSharp___id',
  LogoLocalFileChildImageSharpChildren = 'logo___localFile___childImageSharp___children',
  LogoLocalFileId = 'logo___localFile___id',
  LogoLocalFileParentId = 'logo___localFile___parent___id',
  LogoLocalFileParentChildren = 'logo___localFile___parent___children',
  LogoLocalFileChildren = 'logo___localFile___children',
  LogoLocalFileChildrenId = 'logo___localFile___children___id',
  LogoLocalFileChildrenChildren = 'logo___localFile___children___children',
  LogoLocalFileInternalContent = 'logo___localFile___internal___content',
  LogoLocalFileInternalContentDigest = 'logo___localFile___internal___contentDigest',
  LogoLocalFileInternalDescription = 'logo___localFile___internal___description',
  LogoLocalFileInternalFieldOwners = 'logo___localFile___internal___fieldOwners',
  LogoLocalFileInternalIgnoreType = 'logo___localFile___internal___ignoreType',
  LogoLocalFileInternalMediaType = 'logo___localFile___internal___mediaType',
  LogoLocalFileInternalOwner = 'logo___localFile___internal___owner',
  LogoLocalFileInternalType = 'logo___localFile___internal___type',
  LogoFixedBase64 = 'logo___fixed___base64',
  LogoFixedTracedSvg = 'logo___fixed___tracedSVG',
  LogoFixedAspectRatio = 'logo___fixed___aspectRatio',
  LogoFixedWidth = 'logo___fixed___width',
  LogoFixedHeight = 'logo___fixed___height',
  LogoFixedSrc = 'logo___fixed___src',
  LogoFixedSrcSet = 'logo___fixed___srcSet',
  LogoFixedSrcWebp = 'logo___fixed___srcWebp',
  LogoFixedSrcSetWebp = 'logo___fixed___srcSetWebp',
  LogoResolutionsBase64 = 'logo___resolutions___base64',
  LogoResolutionsTracedSvg = 'logo___resolutions___tracedSVG',
  LogoResolutionsAspectRatio = 'logo___resolutions___aspectRatio',
  LogoResolutionsWidth = 'logo___resolutions___width',
  LogoResolutionsHeight = 'logo___resolutions___height',
  LogoResolutionsSrc = 'logo___resolutions___src',
  LogoResolutionsSrcSet = 'logo___resolutions___srcSet',
  LogoResolutionsSrcWebp = 'logo___resolutions___srcWebp',
  LogoResolutionsSrcSetWebp = 'logo___resolutions___srcSetWebp',
  LogoFluidBase64 = 'logo___fluid___base64',
  LogoFluidTracedSvg = 'logo___fluid___tracedSVG',
  LogoFluidAspectRatio = 'logo___fluid___aspectRatio',
  LogoFluidSrc = 'logo___fluid___src',
  LogoFluidSrcSet = 'logo___fluid___srcSet',
  LogoFluidSrcWebp = 'logo___fluid___srcWebp',
  LogoFluidSrcSetWebp = 'logo___fluid___srcSetWebp',
  LogoFluidSizes = 'logo___fluid___sizes',
  LogoSizesBase64 = 'logo___sizes___base64',
  LogoSizesTracedSvg = 'logo___sizes___tracedSVG',
  LogoSizesAspectRatio = 'logo___sizes___aspectRatio',
  LogoSizesSrc = 'logo___sizes___src',
  LogoSizesSrcSet = 'logo___sizes___srcSet',
  LogoSizesSrcWebp = 'logo___sizes___srcWebp',
  LogoSizesSrcSetWebp = 'logo___sizes___srcSetWebp',
  LogoSizesSizes = 'logo___sizes___sizes',
  LogoResizeBase64 = 'logo___resize___base64',
  LogoResizeTracedSvg = 'logo___resize___tracedSVG',
  LogoResizeSrc = 'logo___resize___src',
  LogoResizeWidth = 'logo___resize___width',
  LogoResizeHeight = 'logo___resize___height',
  LogoResizeAspectRatio = 'logo___resize___aspectRatio',
  LogoParentId = 'logo___parent___id',
  LogoParentParentId = 'logo___parent___parent___id',
  LogoParentParentChildren = 'logo___parent___parent___children',
  LogoParentChildren = 'logo___parent___children',
  LogoParentChildrenId = 'logo___parent___children___id',
  LogoParentChildrenChildren = 'logo___parent___children___children',
  LogoParentInternalContent = 'logo___parent___internal___content',
  LogoParentInternalContentDigest = 'logo___parent___internal___contentDigest',
  LogoParentInternalDescription = 'logo___parent___internal___description',
  LogoParentInternalFieldOwners = 'logo___parent___internal___fieldOwners',
  LogoParentInternalIgnoreType = 'logo___parent___internal___ignoreType',
  LogoParentInternalMediaType = 'logo___parent___internal___mediaType',
  LogoParentInternalOwner = 'logo___parent___internal___owner',
  LogoParentInternalType = 'logo___parent___internal___type',
  LogoChildren = 'logo___children',
  LogoChildrenId = 'logo___children___id',
  LogoChildrenParentId = 'logo___children___parent___id',
  LogoChildrenParentChildren = 'logo___children___parent___children',
  LogoChildrenChildren = 'logo___children___children',
  LogoChildrenChildrenId = 'logo___children___children___id',
  LogoChildrenChildrenChildren = 'logo___children___children___children',
  LogoChildrenInternalContent = 'logo___children___internal___content',
  LogoChildrenInternalContentDigest = 'logo___children___internal___contentDigest',
  LogoChildrenInternalDescription = 'logo___children___internal___description',
  LogoChildrenInternalFieldOwners = 'logo___children___internal___fieldOwners',
  LogoChildrenInternalIgnoreType = 'logo___children___internal___ignoreType',
  LogoChildrenInternalMediaType = 'logo___children___internal___mediaType',
  LogoChildrenInternalOwner = 'logo___children___internal___owner',
  LogoChildrenInternalType = 'logo___children___internal___type',
  LogoInternalContent = 'logo___internal___content',
  LogoInternalContentDigest = 'logo___internal___contentDigest',
  LogoInternalDescription = 'logo___internal___description',
  LogoInternalFieldOwners = 'logo___internal___fieldOwners',
  LogoInternalIgnoreType = 'logo___internal___ignoreType',
  LogoInternalMediaType = 'logo___internal___mediaType',
  LogoInternalOwner = 'logo___internal___owner',
  LogoInternalType = 'logo___internal___type',
  CustomerStory = 'customer_story',
  CustomerStoryContentfulId = 'customer_story___contentful_id',
  CustomerStoryId = 'customer_story___id',
  CustomerStoryNodeLocale = 'customer_story___node_locale',
  CustomerStoryTitle = 'customer_story___title',
  CustomerStorySlug = 'customer_story___slug',
  CustomerStorySubtitle = 'customer_story___subtitle',
  CustomerStoryDate = 'customer_story___date',
  CustomerStoryLanguage = 'customer_story___language',
  CustomerStoryCompanyContentfulId = 'customer_story___company___contentful_id',
  CustomerStoryCompanyId = 'customer_story___company___id',
  CustomerStoryCompanyNodeLocale = 'customer_story___company___node_locale',
  CustomerStoryCompanyName = 'customer_story___company___name',
  CustomerStoryCompanyContactName = 'customer_story___company___contactName',
  CustomerStoryCompanyContactTitle = 'customer_story___company___contactTitle',
  CustomerStoryCompanyFunding = 'customer_story___company___funding',
  CustomerStoryCompanyYearFounded = 'customer_story___company___yearFounded',
  CustomerStoryCompanyEmployeeCount = 'customer_story___company___employeeCount',
  CustomerStoryCompanySector = 'customer_story___company___sector',
  CustomerStoryCompanyLocation = 'customer_story___company___location',
  CustomerStoryCompanyStage = 'customer_story___company___stage',
  CustomerStoryCompanyLogoContentfulId = 'customer_story___company___logo___contentful_id',
  CustomerStoryCompanyLogoId = 'customer_story___company___logo___id',
  CustomerStoryCompanyLogoSpaceId = 'customer_story___company___logo___spaceId',
  CustomerStoryCompanyLogoCreatedAt = 'customer_story___company___logo___createdAt',
  CustomerStoryCompanyLogoUpdatedAt = 'customer_story___company___logo___updatedAt',
  CustomerStoryCompanyLogoTitle = 'customer_story___company___logo___title',
  CustomerStoryCompanyLogoDescription = 'customer_story___company___logo___description',
  CustomerStoryCompanyLogoNodeLocale = 'customer_story___company___logo___node_locale',
  CustomerStoryCompanyLogoChildren = 'customer_story___company___logo___children',
  CustomerStoryCompanyCustomerStory = 'customer_story___company___customer_story',
  CustomerStoryCompanyCustomerStoryContentfulId = 'customer_story___company___customer_story___contentful_id',
  CustomerStoryCompanyCustomerStoryId = 'customer_story___company___customer_story___id',
  CustomerStoryCompanyCustomerStoryNodeLocale = 'customer_story___company___customer_story___node_locale',
  CustomerStoryCompanyCustomerStoryTitle = 'customer_story___company___customer_story___title',
  CustomerStoryCompanyCustomerStorySlug = 'customer_story___company___customer_story___slug',
  CustomerStoryCompanyCustomerStorySubtitle = 'customer_story___company___customer_story___subtitle',
  CustomerStoryCompanyCustomerStoryDate = 'customer_story___company___customer_story___date',
  CustomerStoryCompanyCustomerStoryLanguage = 'customer_story___company___customer_story___language',
  CustomerStoryCompanyCustomerStorySpaceId = 'customer_story___company___customer_story___spaceId',
  CustomerStoryCompanyCustomerStoryCreatedAt = 'customer_story___company___customer_story___createdAt',
  CustomerStoryCompanyCustomerStoryUpdatedAt = 'customer_story___company___customer_story___updatedAt',
  CustomerStoryCompanyCustomerStoryChildrenContentfulCustomerStoryContentTextNode = 'customer_story___company___customer_story___childrenContentfulCustomerStoryContentTextNode',
  CustomerStoryCompanyCustomerStoryChildren = 'customer_story___company___customer_story___children',
  CustomerStoryCompanyMainQuoteId = 'customer_story___company___mainQuote___id',
  CustomerStoryCompanyMainQuoteChildren = 'customer_story___company___mainQuote___children',
  CustomerStoryCompanyMainQuoteMainQuote = 'customer_story___company___mainQuote___mainQuote',
  CustomerStoryCompanyMainQuoteChildrenMdx = 'customer_story___company___mainQuote___childrenMdx',
  CustomerStoryCompanySpaceId = 'customer_story___company___spaceId',
  CustomerStoryCompanyCreatedAt = 'customer_story___company___createdAt',
  CustomerStoryCompanyUpdatedAt = 'customer_story___company___updatedAt',
  CustomerStoryCompanySysType = 'customer_story___company___sys___type',
  CustomerStoryCompanySysRevision = 'customer_story___company___sys___revision',
  CustomerStoryCompanyCoverContentfulId = 'customer_story___company___cover___contentful_id',
  CustomerStoryCompanyCoverId = 'customer_story___company___cover___id',
  CustomerStoryCompanyCoverSpaceId = 'customer_story___company___cover___spaceId',
  CustomerStoryCompanyCoverCreatedAt = 'customer_story___company___cover___createdAt',
  CustomerStoryCompanyCoverUpdatedAt = 'customer_story___company___cover___updatedAt',
  CustomerStoryCompanyCoverTitle = 'customer_story___company___cover___title',
  CustomerStoryCompanyCoverDescription = 'customer_story___company___cover___description',
  CustomerStoryCompanyCoverNodeLocale = 'customer_story___company___cover___node_locale',
  CustomerStoryCompanyCoverChildren = 'customer_story___company___cover___children',
  CustomerStoryCompanyChildrenContentfulCompanyMainQuoteTextNode = 'customer_story___company___childrenContentfulCompanyMainQuoteTextNode',
  CustomerStoryCompanyChildrenContentfulCompanyMainQuoteTextNodeId = 'customer_story___company___childrenContentfulCompanyMainQuoteTextNode___id',
  CustomerStoryCompanyChildrenContentfulCompanyMainQuoteTextNodeChildren = 'customer_story___company___childrenContentfulCompanyMainQuoteTextNode___children',
  CustomerStoryCompanyChildrenContentfulCompanyMainQuoteTextNodeMainQuote = 'customer_story___company___childrenContentfulCompanyMainQuoteTextNode___mainQuote',
  CustomerStoryCompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenMdx = 'customer_story___company___childrenContentfulCompanyMainQuoteTextNode___childrenMdx',
  CustomerStoryCompanyChildContentfulCompanyMainQuoteTextNodeId = 'customer_story___company___childContentfulCompanyMainQuoteTextNode___id',
  CustomerStoryCompanyChildContentfulCompanyMainQuoteTextNodeChildren = 'customer_story___company___childContentfulCompanyMainQuoteTextNode___children',
  CustomerStoryCompanyChildContentfulCompanyMainQuoteTextNodeMainQuote = 'customer_story___company___childContentfulCompanyMainQuoteTextNode___mainQuote',
  CustomerStoryCompanyChildContentfulCompanyMainQuoteTextNodeChildrenMdx = 'customer_story___company___childContentfulCompanyMainQuoteTextNode___childrenMdx',
  CustomerStoryCompanyParentId = 'customer_story___company___parent___id',
  CustomerStoryCompanyParentChildren = 'customer_story___company___parent___children',
  CustomerStoryCompanyChildren = 'customer_story___company___children',
  CustomerStoryCompanyChildrenId = 'customer_story___company___children___id',
  CustomerStoryCompanyChildrenChildren = 'customer_story___company___children___children',
  CustomerStoryCompanyInternalContent = 'customer_story___company___internal___content',
  CustomerStoryCompanyInternalContentDigest = 'customer_story___company___internal___contentDigest',
  CustomerStoryCompanyInternalDescription = 'customer_story___company___internal___description',
  CustomerStoryCompanyInternalFieldOwners = 'customer_story___company___internal___fieldOwners',
  CustomerStoryCompanyInternalIgnoreType = 'customer_story___company___internal___ignoreType',
  CustomerStoryCompanyInternalMediaType = 'customer_story___company___internal___mediaType',
  CustomerStoryCompanyInternalOwner = 'customer_story___company___internal___owner',
  CustomerStoryCompanyInternalType = 'customer_story___company___internal___type',
  CustomerStoryContentId = 'customer_story___content___id',
  CustomerStoryContentParentId = 'customer_story___content___parent___id',
  CustomerStoryContentParentChildren = 'customer_story___content___parent___children',
  CustomerStoryContentChildren = 'customer_story___content___children',
  CustomerStoryContentChildrenId = 'customer_story___content___children___id',
  CustomerStoryContentChildrenChildren = 'customer_story___content___children___children',
  CustomerStoryContentInternalContent = 'customer_story___content___internal___content',
  CustomerStoryContentInternalContentDigest = 'customer_story___content___internal___contentDigest',
  CustomerStoryContentInternalDescription = 'customer_story___content___internal___description',
  CustomerStoryContentInternalFieldOwners = 'customer_story___content___internal___fieldOwners',
  CustomerStoryContentInternalIgnoreType = 'customer_story___content___internal___ignoreType',
  CustomerStoryContentInternalMediaType = 'customer_story___content___internal___mediaType',
  CustomerStoryContentInternalOwner = 'customer_story___content___internal___owner',
  CustomerStoryContentInternalType = 'customer_story___content___internal___type',
  CustomerStoryContentContent = 'customer_story___content___content',
  CustomerStoryContentSysType = 'customer_story___content___sys___type',
  CustomerStoryContentChildrenMdx = 'customer_story___content___childrenMdx',
  CustomerStoryContentChildrenMdxRawBody = 'customer_story___content___childrenMdx___rawBody',
  CustomerStoryContentChildrenMdxFileAbsolutePath = 'customer_story___content___childrenMdx___fileAbsolutePath',
  CustomerStoryContentChildrenMdxSlug = 'customer_story___content___childrenMdx___slug',
  CustomerStoryContentChildrenMdxBody = 'customer_story___content___childrenMdx___body',
  CustomerStoryContentChildrenMdxExcerpt = 'customer_story___content___childrenMdx___excerpt',
  CustomerStoryContentChildrenMdxHeadings = 'customer_story___content___childrenMdx___headings',
  CustomerStoryContentChildrenMdxHtml = 'customer_story___content___childrenMdx___html',
  CustomerStoryContentChildrenMdxMdxAst = 'customer_story___content___childrenMdx___mdxAST',
  CustomerStoryContentChildrenMdxTableOfContents = 'customer_story___content___childrenMdx___tableOfContents',
  CustomerStoryContentChildrenMdxTimeToRead = 'customer_story___content___childrenMdx___timeToRead',
  CustomerStoryContentChildrenMdxId = 'customer_story___content___childrenMdx___id',
  CustomerStoryContentChildrenMdxChildren = 'customer_story___content___childrenMdx___children',
  CustomerStoryContentChildMdxRawBody = 'customer_story___content___childMdx___rawBody',
  CustomerStoryContentChildMdxFileAbsolutePath = 'customer_story___content___childMdx___fileAbsolutePath',
  CustomerStoryContentChildMdxSlug = 'customer_story___content___childMdx___slug',
  CustomerStoryContentChildMdxBody = 'customer_story___content___childMdx___body',
  CustomerStoryContentChildMdxExcerpt = 'customer_story___content___childMdx___excerpt',
  CustomerStoryContentChildMdxHeadings = 'customer_story___content___childMdx___headings',
  CustomerStoryContentChildMdxHtml = 'customer_story___content___childMdx___html',
  CustomerStoryContentChildMdxMdxAst = 'customer_story___content___childMdx___mdxAST',
  CustomerStoryContentChildMdxTableOfContents = 'customer_story___content___childMdx___tableOfContents',
  CustomerStoryContentChildMdxTimeToRead = 'customer_story___content___childMdx___timeToRead',
  CustomerStoryContentChildMdxId = 'customer_story___content___childMdx___id',
  CustomerStoryContentChildMdxChildren = 'customer_story___content___childMdx___children',
  CustomerStorySpaceId = 'customer_story___spaceId',
  CustomerStoryCreatedAt = 'customer_story___createdAt',
  CustomerStoryUpdatedAt = 'customer_story___updatedAt',
  CustomerStorySysType = 'customer_story___sys___type',
  CustomerStorySysRevision = 'customer_story___sys___revision',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNode = 'customer_story___childrenContentfulCustomerStoryContentTextNode',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeId = 'customer_story___childrenContentfulCustomerStoryContentTextNode___id',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeParentId = 'customer_story___childrenContentfulCustomerStoryContentTextNode___parent___id',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeParentChildren = 'customer_story___childrenContentfulCustomerStoryContentTextNode___parent___children',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildren = 'customer_story___childrenContentfulCustomerStoryContentTextNode___children',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenId = 'customer_story___childrenContentfulCustomerStoryContentTextNode___children___id',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenChildren = 'customer_story___childrenContentfulCustomerStoryContentTextNode___children___children',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeInternalContent = 'customer_story___childrenContentfulCustomerStoryContentTextNode___internal___content',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeInternalContentDigest = 'customer_story___childrenContentfulCustomerStoryContentTextNode___internal___contentDigest',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeInternalDescription = 'customer_story___childrenContentfulCustomerStoryContentTextNode___internal___description',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeInternalFieldOwners = 'customer_story___childrenContentfulCustomerStoryContentTextNode___internal___fieldOwners',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeInternalIgnoreType = 'customer_story___childrenContentfulCustomerStoryContentTextNode___internal___ignoreType',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeInternalMediaType = 'customer_story___childrenContentfulCustomerStoryContentTextNode___internal___mediaType',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeInternalOwner = 'customer_story___childrenContentfulCustomerStoryContentTextNode___internal___owner',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeInternalType = 'customer_story___childrenContentfulCustomerStoryContentTextNode___internal___type',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeContent = 'customer_story___childrenContentfulCustomerStoryContentTextNode___content',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeSysType = 'customer_story___childrenContentfulCustomerStoryContentTextNode___sys___type',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenMdx = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childrenMdx',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenMdxRawBody = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childrenMdx___rawBody',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenMdxFileAbsolutePath = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childrenMdx___fileAbsolutePath',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenMdxSlug = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childrenMdx___slug',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenMdxBody = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childrenMdx___body',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenMdxExcerpt = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childrenMdx___excerpt',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenMdxHeadings = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childrenMdx___headings',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenMdxHtml = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childrenMdx___html',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenMdxMdxAst = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childrenMdx___mdxAST',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenMdxTableOfContents = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childrenMdx___tableOfContents',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenMdxTimeToRead = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childrenMdx___timeToRead',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenMdxId = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childrenMdx___id',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenMdxChildren = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childrenMdx___children',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildMdxRawBody = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childMdx___rawBody',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildMdxFileAbsolutePath = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childMdx___fileAbsolutePath',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildMdxSlug = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childMdx___slug',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildMdxBody = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childMdx___body',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildMdxExcerpt = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childMdx___excerpt',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildMdxHeadings = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childMdx___headings',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildMdxHtml = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childMdx___html',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildMdxMdxAst = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childMdx___mdxAST',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildMdxTableOfContents = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childMdx___tableOfContents',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildMdxTimeToRead = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childMdx___timeToRead',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildMdxId = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childMdx___id',
  CustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildMdxChildren = 'customer_story___childrenContentfulCustomerStoryContentTextNode___childMdx___children',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeId = 'customer_story___childContentfulCustomerStoryContentTextNode___id',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeParentId = 'customer_story___childContentfulCustomerStoryContentTextNode___parent___id',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeParentChildren = 'customer_story___childContentfulCustomerStoryContentTextNode___parent___children',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildren = 'customer_story___childContentfulCustomerStoryContentTextNode___children',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenId = 'customer_story___childContentfulCustomerStoryContentTextNode___children___id',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenChildren = 'customer_story___childContentfulCustomerStoryContentTextNode___children___children',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeInternalContent = 'customer_story___childContentfulCustomerStoryContentTextNode___internal___content',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeInternalContentDigest = 'customer_story___childContentfulCustomerStoryContentTextNode___internal___contentDigest',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeInternalDescription = 'customer_story___childContentfulCustomerStoryContentTextNode___internal___description',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeInternalFieldOwners = 'customer_story___childContentfulCustomerStoryContentTextNode___internal___fieldOwners',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeInternalIgnoreType = 'customer_story___childContentfulCustomerStoryContentTextNode___internal___ignoreType',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeInternalMediaType = 'customer_story___childContentfulCustomerStoryContentTextNode___internal___mediaType',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeInternalOwner = 'customer_story___childContentfulCustomerStoryContentTextNode___internal___owner',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeInternalType = 'customer_story___childContentfulCustomerStoryContentTextNode___internal___type',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeContent = 'customer_story___childContentfulCustomerStoryContentTextNode___content',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeSysType = 'customer_story___childContentfulCustomerStoryContentTextNode___sys___type',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenMdx = 'customer_story___childContentfulCustomerStoryContentTextNode___childrenMdx',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenMdxRawBody = 'customer_story___childContentfulCustomerStoryContentTextNode___childrenMdx___rawBody',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenMdxFileAbsolutePath = 'customer_story___childContentfulCustomerStoryContentTextNode___childrenMdx___fileAbsolutePath',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenMdxSlug = 'customer_story___childContentfulCustomerStoryContentTextNode___childrenMdx___slug',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenMdxBody = 'customer_story___childContentfulCustomerStoryContentTextNode___childrenMdx___body',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenMdxExcerpt = 'customer_story___childContentfulCustomerStoryContentTextNode___childrenMdx___excerpt',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenMdxHeadings = 'customer_story___childContentfulCustomerStoryContentTextNode___childrenMdx___headings',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenMdxHtml = 'customer_story___childContentfulCustomerStoryContentTextNode___childrenMdx___html',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenMdxMdxAst = 'customer_story___childContentfulCustomerStoryContentTextNode___childrenMdx___mdxAST',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenMdxTableOfContents = 'customer_story___childContentfulCustomerStoryContentTextNode___childrenMdx___tableOfContents',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenMdxTimeToRead = 'customer_story___childContentfulCustomerStoryContentTextNode___childrenMdx___timeToRead',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenMdxId = 'customer_story___childContentfulCustomerStoryContentTextNode___childrenMdx___id',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenMdxChildren = 'customer_story___childContentfulCustomerStoryContentTextNode___childrenMdx___children',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildMdxRawBody = 'customer_story___childContentfulCustomerStoryContentTextNode___childMdx___rawBody',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildMdxFileAbsolutePath = 'customer_story___childContentfulCustomerStoryContentTextNode___childMdx___fileAbsolutePath',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildMdxSlug = 'customer_story___childContentfulCustomerStoryContentTextNode___childMdx___slug',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildMdxBody = 'customer_story___childContentfulCustomerStoryContentTextNode___childMdx___body',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildMdxExcerpt = 'customer_story___childContentfulCustomerStoryContentTextNode___childMdx___excerpt',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildMdxHeadings = 'customer_story___childContentfulCustomerStoryContentTextNode___childMdx___headings',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildMdxHtml = 'customer_story___childContentfulCustomerStoryContentTextNode___childMdx___html',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildMdxMdxAst = 'customer_story___childContentfulCustomerStoryContentTextNode___childMdx___mdxAST',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildMdxTableOfContents = 'customer_story___childContentfulCustomerStoryContentTextNode___childMdx___tableOfContents',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildMdxTimeToRead = 'customer_story___childContentfulCustomerStoryContentTextNode___childMdx___timeToRead',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildMdxId = 'customer_story___childContentfulCustomerStoryContentTextNode___childMdx___id',
  CustomerStoryChildContentfulCustomerStoryContentTextNodeChildMdxChildren = 'customer_story___childContentfulCustomerStoryContentTextNode___childMdx___children',
  CustomerStoryParentId = 'customer_story___parent___id',
  CustomerStoryParentParentId = 'customer_story___parent___parent___id',
  CustomerStoryParentParentChildren = 'customer_story___parent___parent___children',
  CustomerStoryParentChildren = 'customer_story___parent___children',
  CustomerStoryParentChildrenId = 'customer_story___parent___children___id',
  CustomerStoryParentChildrenChildren = 'customer_story___parent___children___children',
  CustomerStoryParentInternalContent = 'customer_story___parent___internal___content',
  CustomerStoryParentInternalContentDigest = 'customer_story___parent___internal___contentDigest',
  CustomerStoryParentInternalDescription = 'customer_story___parent___internal___description',
  CustomerStoryParentInternalFieldOwners = 'customer_story___parent___internal___fieldOwners',
  CustomerStoryParentInternalIgnoreType = 'customer_story___parent___internal___ignoreType',
  CustomerStoryParentInternalMediaType = 'customer_story___parent___internal___mediaType',
  CustomerStoryParentInternalOwner = 'customer_story___parent___internal___owner',
  CustomerStoryParentInternalType = 'customer_story___parent___internal___type',
  CustomerStoryChildren = 'customer_story___children',
  CustomerStoryChildrenId = 'customer_story___children___id',
  CustomerStoryChildrenParentId = 'customer_story___children___parent___id',
  CustomerStoryChildrenParentChildren = 'customer_story___children___parent___children',
  CustomerStoryChildrenChildren = 'customer_story___children___children',
  CustomerStoryChildrenChildrenId = 'customer_story___children___children___id',
  CustomerStoryChildrenChildrenChildren = 'customer_story___children___children___children',
  CustomerStoryChildrenInternalContent = 'customer_story___children___internal___content',
  CustomerStoryChildrenInternalContentDigest = 'customer_story___children___internal___contentDigest',
  CustomerStoryChildrenInternalDescription = 'customer_story___children___internal___description',
  CustomerStoryChildrenInternalFieldOwners = 'customer_story___children___internal___fieldOwners',
  CustomerStoryChildrenInternalIgnoreType = 'customer_story___children___internal___ignoreType',
  CustomerStoryChildrenInternalMediaType = 'customer_story___children___internal___mediaType',
  CustomerStoryChildrenInternalOwner = 'customer_story___children___internal___owner',
  CustomerStoryChildrenInternalType = 'customer_story___children___internal___type',
  CustomerStoryInternalContent = 'customer_story___internal___content',
  CustomerStoryInternalContentDigest = 'customer_story___internal___contentDigest',
  CustomerStoryInternalDescription = 'customer_story___internal___description',
  CustomerStoryInternalFieldOwners = 'customer_story___internal___fieldOwners',
  CustomerStoryInternalIgnoreType = 'customer_story___internal___ignoreType',
  CustomerStoryInternalMediaType = 'customer_story___internal___mediaType',
  CustomerStoryInternalOwner = 'customer_story___internal___owner',
  CustomerStoryInternalType = 'customer_story___internal___type',
  MainQuoteId = 'mainQuote___id',
  MainQuoteParentId = 'mainQuote___parent___id',
  MainQuoteParentParentId = 'mainQuote___parent___parent___id',
  MainQuoteParentParentChildren = 'mainQuote___parent___parent___children',
  MainQuoteParentChildren = 'mainQuote___parent___children',
  MainQuoteParentChildrenId = 'mainQuote___parent___children___id',
  MainQuoteParentChildrenChildren = 'mainQuote___parent___children___children',
  MainQuoteParentInternalContent = 'mainQuote___parent___internal___content',
  MainQuoteParentInternalContentDigest = 'mainQuote___parent___internal___contentDigest',
  MainQuoteParentInternalDescription = 'mainQuote___parent___internal___description',
  MainQuoteParentInternalFieldOwners = 'mainQuote___parent___internal___fieldOwners',
  MainQuoteParentInternalIgnoreType = 'mainQuote___parent___internal___ignoreType',
  MainQuoteParentInternalMediaType = 'mainQuote___parent___internal___mediaType',
  MainQuoteParentInternalOwner = 'mainQuote___parent___internal___owner',
  MainQuoteParentInternalType = 'mainQuote___parent___internal___type',
  MainQuoteChildren = 'mainQuote___children',
  MainQuoteChildrenId = 'mainQuote___children___id',
  MainQuoteChildrenParentId = 'mainQuote___children___parent___id',
  MainQuoteChildrenParentChildren = 'mainQuote___children___parent___children',
  MainQuoteChildrenChildren = 'mainQuote___children___children',
  MainQuoteChildrenChildrenId = 'mainQuote___children___children___id',
  MainQuoteChildrenChildrenChildren = 'mainQuote___children___children___children',
  MainQuoteChildrenInternalContent = 'mainQuote___children___internal___content',
  MainQuoteChildrenInternalContentDigest = 'mainQuote___children___internal___contentDigest',
  MainQuoteChildrenInternalDescription = 'mainQuote___children___internal___description',
  MainQuoteChildrenInternalFieldOwners = 'mainQuote___children___internal___fieldOwners',
  MainQuoteChildrenInternalIgnoreType = 'mainQuote___children___internal___ignoreType',
  MainQuoteChildrenInternalMediaType = 'mainQuote___children___internal___mediaType',
  MainQuoteChildrenInternalOwner = 'mainQuote___children___internal___owner',
  MainQuoteChildrenInternalType = 'mainQuote___children___internal___type',
  MainQuoteInternalContent = 'mainQuote___internal___content',
  MainQuoteInternalContentDigest = 'mainQuote___internal___contentDigest',
  MainQuoteInternalDescription = 'mainQuote___internal___description',
  MainQuoteInternalFieldOwners = 'mainQuote___internal___fieldOwners',
  MainQuoteInternalIgnoreType = 'mainQuote___internal___ignoreType',
  MainQuoteInternalMediaType = 'mainQuote___internal___mediaType',
  MainQuoteInternalOwner = 'mainQuote___internal___owner',
  MainQuoteInternalType = 'mainQuote___internal___type',
  MainQuoteMainQuote = 'mainQuote___mainQuote',
  MainQuoteSysType = 'mainQuote___sys___type',
  MainQuoteChildrenMdx = 'mainQuote___childrenMdx',
  MainQuoteChildrenMdxRawBody = 'mainQuote___childrenMdx___rawBody',
  MainQuoteChildrenMdxFileAbsolutePath = 'mainQuote___childrenMdx___fileAbsolutePath',
  MainQuoteChildrenMdxFrontmatterTitle = 'mainQuote___childrenMdx___frontmatter___title',
  MainQuoteChildrenMdxSlug = 'mainQuote___childrenMdx___slug',
  MainQuoteChildrenMdxBody = 'mainQuote___childrenMdx___body',
  MainQuoteChildrenMdxExcerpt = 'mainQuote___childrenMdx___excerpt',
  MainQuoteChildrenMdxHeadings = 'mainQuote___childrenMdx___headings',
  MainQuoteChildrenMdxHeadingsValue = 'mainQuote___childrenMdx___headings___value',
  MainQuoteChildrenMdxHeadingsDepth = 'mainQuote___childrenMdx___headings___depth',
  MainQuoteChildrenMdxHtml = 'mainQuote___childrenMdx___html',
  MainQuoteChildrenMdxMdxAst = 'mainQuote___childrenMdx___mdxAST',
  MainQuoteChildrenMdxTableOfContents = 'mainQuote___childrenMdx___tableOfContents',
  MainQuoteChildrenMdxTimeToRead = 'mainQuote___childrenMdx___timeToRead',
  MainQuoteChildrenMdxWordCountParagraphs = 'mainQuote___childrenMdx___wordCount___paragraphs',
  MainQuoteChildrenMdxWordCountSentences = 'mainQuote___childrenMdx___wordCount___sentences',
  MainQuoteChildrenMdxWordCountWords = 'mainQuote___childrenMdx___wordCount___words',
  MainQuoteChildrenMdxId = 'mainQuote___childrenMdx___id',
  MainQuoteChildrenMdxParentId = 'mainQuote___childrenMdx___parent___id',
  MainQuoteChildrenMdxParentChildren = 'mainQuote___childrenMdx___parent___children',
  MainQuoteChildrenMdxChildren = 'mainQuote___childrenMdx___children',
  MainQuoteChildrenMdxChildrenId = 'mainQuote___childrenMdx___children___id',
  MainQuoteChildrenMdxChildrenChildren = 'mainQuote___childrenMdx___children___children',
  MainQuoteChildrenMdxInternalContent = 'mainQuote___childrenMdx___internal___content',
  MainQuoteChildrenMdxInternalContentDigest = 'mainQuote___childrenMdx___internal___contentDigest',
  MainQuoteChildrenMdxInternalDescription = 'mainQuote___childrenMdx___internal___description',
  MainQuoteChildrenMdxInternalFieldOwners = 'mainQuote___childrenMdx___internal___fieldOwners',
  MainQuoteChildrenMdxInternalIgnoreType = 'mainQuote___childrenMdx___internal___ignoreType',
  MainQuoteChildrenMdxInternalMediaType = 'mainQuote___childrenMdx___internal___mediaType',
  MainQuoteChildrenMdxInternalOwner = 'mainQuote___childrenMdx___internal___owner',
  MainQuoteChildrenMdxInternalType = 'mainQuote___childrenMdx___internal___type',
  MainQuoteChildMdxRawBody = 'mainQuote___childMdx___rawBody',
  MainQuoteChildMdxFileAbsolutePath = 'mainQuote___childMdx___fileAbsolutePath',
  MainQuoteChildMdxFrontmatterTitle = 'mainQuote___childMdx___frontmatter___title',
  MainQuoteChildMdxSlug = 'mainQuote___childMdx___slug',
  MainQuoteChildMdxBody = 'mainQuote___childMdx___body',
  MainQuoteChildMdxExcerpt = 'mainQuote___childMdx___excerpt',
  MainQuoteChildMdxHeadings = 'mainQuote___childMdx___headings',
  MainQuoteChildMdxHeadingsValue = 'mainQuote___childMdx___headings___value',
  MainQuoteChildMdxHeadingsDepth = 'mainQuote___childMdx___headings___depth',
  MainQuoteChildMdxHtml = 'mainQuote___childMdx___html',
  MainQuoteChildMdxMdxAst = 'mainQuote___childMdx___mdxAST',
  MainQuoteChildMdxTableOfContents = 'mainQuote___childMdx___tableOfContents',
  MainQuoteChildMdxTimeToRead = 'mainQuote___childMdx___timeToRead',
  MainQuoteChildMdxWordCountParagraphs = 'mainQuote___childMdx___wordCount___paragraphs',
  MainQuoteChildMdxWordCountSentences = 'mainQuote___childMdx___wordCount___sentences',
  MainQuoteChildMdxWordCountWords = 'mainQuote___childMdx___wordCount___words',
  MainQuoteChildMdxId = 'mainQuote___childMdx___id',
  MainQuoteChildMdxParentId = 'mainQuote___childMdx___parent___id',
  MainQuoteChildMdxParentChildren = 'mainQuote___childMdx___parent___children',
  MainQuoteChildMdxChildren = 'mainQuote___childMdx___children',
  MainQuoteChildMdxChildrenId = 'mainQuote___childMdx___children___id',
  MainQuoteChildMdxChildrenChildren = 'mainQuote___childMdx___children___children',
  MainQuoteChildMdxInternalContent = 'mainQuote___childMdx___internal___content',
  MainQuoteChildMdxInternalContentDigest = 'mainQuote___childMdx___internal___contentDigest',
  MainQuoteChildMdxInternalDescription = 'mainQuote___childMdx___internal___description',
  MainQuoteChildMdxInternalFieldOwners = 'mainQuote___childMdx___internal___fieldOwners',
  MainQuoteChildMdxInternalIgnoreType = 'mainQuote___childMdx___internal___ignoreType',
  MainQuoteChildMdxInternalMediaType = 'mainQuote___childMdx___internal___mediaType',
  MainQuoteChildMdxInternalOwner = 'mainQuote___childMdx___internal___owner',
  MainQuoteChildMdxInternalType = 'mainQuote___childMdx___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  CoverContentfulId = 'cover___contentful_id',
  CoverId = 'cover___id',
  CoverSpaceId = 'cover___spaceId',
  CoverCreatedAt = 'cover___createdAt',
  CoverUpdatedAt = 'cover___updatedAt',
  CoverFileUrl = 'cover___file___url',
  CoverFileDetailsSize = 'cover___file___details___size',
  CoverFileFileName = 'cover___file___fileName',
  CoverFileContentType = 'cover___file___contentType',
  CoverFileErrorMessage = 'cover___file___error___message',
  CoverTitle = 'cover___title',
  CoverDescription = 'cover___description',
  CoverNodeLocale = 'cover___node_locale',
  CoverSysType = 'cover___sys___type',
  CoverSysRevision = 'cover___sys___revision',
  CoverLocalFileSourceInstanceName = 'cover___localFile___sourceInstanceName',
  CoverLocalFileAbsolutePath = 'cover___localFile___absolutePath',
  CoverLocalFileRelativePath = 'cover___localFile___relativePath',
  CoverLocalFileExtension = 'cover___localFile___extension',
  CoverLocalFileSize = 'cover___localFile___size',
  CoverLocalFilePrettySize = 'cover___localFile___prettySize',
  CoverLocalFileModifiedTime = 'cover___localFile___modifiedTime',
  CoverLocalFileAccessTime = 'cover___localFile___accessTime',
  CoverLocalFileChangeTime = 'cover___localFile___changeTime',
  CoverLocalFileBirthTime = 'cover___localFile___birthTime',
  CoverLocalFileRoot = 'cover___localFile___root',
  CoverLocalFileDir = 'cover___localFile___dir',
  CoverLocalFileBase = 'cover___localFile___base',
  CoverLocalFileExt = 'cover___localFile___ext',
  CoverLocalFileName = 'cover___localFile___name',
  CoverLocalFileRelativeDirectory = 'cover___localFile___relativeDirectory',
  CoverLocalFileDev = 'cover___localFile___dev',
  CoverLocalFileMode = 'cover___localFile___mode',
  CoverLocalFileNlink = 'cover___localFile___nlink',
  CoverLocalFileUid = 'cover___localFile___uid',
  CoverLocalFileGid = 'cover___localFile___gid',
  CoverLocalFileRdev = 'cover___localFile___rdev',
  CoverLocalFileIno = 'cover___localFile___ino',
  CoverLocalFileAtimeMs = 'cover___localFile___atimeMs',
  CoverLocalFileMtimeMs = 'cover___localFile___mtimeMs',
  CoverLocalFileCtimeMs = 'cover___localFile___ctimeMs',
  CoverLocalFileAtime = 'cover___localFile___atime',
  CoverLocalFileMtime = 'cover___localFile___mtime',
  CoverLocalFileCtime = 'cover___localFile___ctime',
  CoverLocalFileBirthtime = 'cover___localFile___birthtime',
  CoverLocalFileBirthtimeMs = 'cover___localFile___birthtimeMs',
  CoverLocalFileBlksize = 'cover___localFile___blksize',
  CoverLocalFileBlocks = 'cover___localFile___blocks',
  CoverLocalFileUrl = 'cover___localFile___url',
  CoverLocalFilePublicUrl = 'cover___localFile___publicURL',
  CoverLocalFileChildrenImageSharp = 'cover___localFile___childrenImageSharp',
  CoverLocalFileChildrenImageSharpGatsbyImageData = 'cover___localFile___childrenImageSharp___gatsbyImageData',
  CoverLocalFileChildrenImageSharpId = 'cover___localFile___childrenImageSharp___id',
  CoverLocalFileChildrenImageSharpChildren = 'cover___localFile___childrenImageSharp___children',
  CoverLocalFileChildImageSharpGatsbyImageData = 'cover___localFile___childImageSharp___gatsbyImageData',
  CoverLocalFileChildImageSharpId = 'cover___localFile___childImageSharp___id',
  CoverLocalFileChildImageSharpChildren = 'cover___localFile___childImageSharp___children',
  CoverLocalFileId = 'cover___localFile___id',
  CoverLocalFileParentId = 'cover___localFile___parent___id',
  CoverLocalFileParentChildren = 'cover___localFile___parent___children',
  CoverLocalFileChildren = 'cover___localFile___children',
  CoverLocalFileChildrenId = 'cover___localFile___children___id',
  CoverLocalFileChildrenChildren = 'cover___localFile___children___children',
  CoverLocalFileInternalContent = 'cover___localFile___internal___content',
  CoverLocalFileInternalContentDigest = 'cover___localFile___internal___contentDigest',
  CoverLocalFileInternalDescription = 'cover___localFile___internal___description',
  CoverLocalFileInternalFieldOwners = 'cover___localFile___internal___fieldOwners',
  CoverLocalFileInternalIgnoreType = 'cover___localFile___internal___ignoreType',
  CoverLocalFileInternalMediaType = 'cover___localFile___internal___mediaType',
  CoverLocalFileInternalOwner = 'cover___localFile___internal___owner',
  CoverLocalFileInternalType = 'cover___localFile___internal___type',
  CoverFixedBase64 = 'cover___fixed___base64',
  CoverFixedTracedSvg = 'cover___fixed___tracedSVG',
  CoverFixedAspectRatio = 'cover___fixed___aspectRatio',
  CoverFixedWidth = 'cover___fixed___width',
  CoverFixedHeight = 'cover___fixed___height',
  CoverFixedSrc = 'cover___fixed___src',
  CoverFixedSrcSet = 'cover___fixed___srcSet',
  CoverFixedSrcWebp = 'cover___fixed___srcWebp',
  CoverFixedSrcSetWebp = 'cover___fixed___srcSetWebp',
  CoverResolutionsBase64 = 'cover___resolutions___base64',
  CoverResolutionsTracedSvg = 'cover___resolutions___tracedSVG',
  CoverResolutionsAspectRatio = 'cover___resolutions___aspectRatio',
  CoverResolutionsWidth = 'cover___resolutions___width',
  CoverResolutionsHeight = 'cover___resolutions___height',
  CoverResolutionsSrc = 'cover___resolutions___src',
  CoverResolutionsSrcSet = 'cover___resolutions___srcSet',
  CoverResolutionsSrcWebp = 'cover___resolutions___srcWebp',
  CoverResolutionsSrcSetWebp = 'cover___resolutions___srcSetWebp',
  CoverFluidBase64 = 'cover___fluid___base64',
  CoverFluidTracedSvg = 'cover___fluid___tracedSVG',
  CoverFluidAspectRatio = 'cover___fluid___aspectRatio',
  CoverFluidSrc = 'cover___fluid___src',
  CoverFluidSrcSet = 'cover___fluid___srcSet',
  CoverFluidSrcWebp = 'cover___fluid___srcWebp',
  CoverFluidSrcSetWebp = 'cover___fluid___srcSetWebp',
  CoverFluidSizes = 'cover___fluid___sizes',
  CoverSizesBase64 = 'cover___sizes___base64',
  CoverSizesTracedSvg = 'cover___sizes___tracedSVG',
  CoverSizesAspectRatio = 'cover___sizes___aspectRatio',
  CoverSizesSrc = 'cover___sizes___src',
  CoverSizesSrcSet = 'cover___sizes___srcSet',
  CoverSizesSrcWebp = 'cover___sizes___srcWebp',
  CoverSizesSrcSetWebp = 'cover___sizes___srcSetWebp',
  CoverSizesSizes = 'cover___sizes___sizes',
  CoverResizeBase64 = 'cover___resize___base64',
  CoverResizeTracedSvg = 'cover___resize___tracedSVG',
  CoverResizeSrc = 'cover___resize___src',
  CoverResizeWidth = 'cover___resize___width',
  CoverResizeHeight = 'cover___resize___height',
  CoverResizeAspectRatio = 'cover___resize___aspectRatio',
  CoverParentId = 'cover___parent___id',
  CoverParentParentId = 'cover___parent___parent___id',
  CoverParentParentChildren = 'cover___parent___parent___children',
  CoverParentChildren = 'cover___parent___children',
  CoverParentChildrenId = 'cover___parent___children___id',
  CoverParentChildrenChildren = 'cover___parent___children___children',
  CoverParentInternalContent = 'cover___parent___internal___content',
  CoverParentInternalContentDigest = 'cover___parent___internal___contentDigest',
  CoverParentInternalDescription = 'cover___parent___internal___description',
  CoverParentInternalFieldOwners = 'cover___parent___internal___fieldOwners',
  CoverParentInternalIgnoreType = 'cover___parent___internal___ignoreType',
  CoverParentInternalMediaType = 'cover___parent___internal___mediaType',
  CoverParentInternalOwner = 'cover___parent___internal___owner',
  CoverParentInternalType = 'cover___parent___internal___type',
  CoverChildren = 'cover___children',
  CoverChildrenId = 'cover___children___id',
  CoverChildrenParentId = 'cover___children___parent___id',
  CoverChildrenParentChildren = 'cover___children___parent___children',
  CoverChildrenChildren = 'cover___children___children',
  CoverChildrenChildrenId = 'cover___children___children___id',
  CoverChildrenChildrenChildren = 'cover___children___children___children',
  CoverChildrenInternalContent = 'cover___children___internal___content',
  CoverChildrenInternalContentDigest = 'cover___children___internal___contentDigest',
  CoverChildrenInternalDescription = 'cover___children___internal___description',
  CoverChildrenInternalFieldOwners = 'cover___children___internal___fieldOwners',
  CoverChildrenInternalIgnoreType = 'cover___children___internal___ignoreType',
  CoverChildrenInternalMediaType = 'cover___children___internal___mediaType',
  CoverChildrenInternalOwner = 'cover___children___internal___owner',
  CoverChildrenInternalType = 'cover___children___internal___type',
  CoverInternalContent = 'cover___internal___content',
  CoverInternalContentDigest = 'cover___internal___contentDigest',
  CoverInternalDescription = 'cover___internal___description',
  CoverInternalFieldOwners = 'cover___internal___fieldOwners',
  CoverInternalIgnoreType = 'cover___internal___ignoreType',
  CoverInternalMediaType = 'cover___internal___mediaType',
  CoverInternalOwner = 'cover___internal___owner',
  CoverInternalType = 'cover___internal___type',
  ChildrenContentfulCompanyMainQuoteTextNode = 'childrenContentfulCompanyMainQuoteTextNode',
  ChildrenContentfulCompanyMainQuoteTextNodeId = 'childrenContentfulCompanyMainQuoteTextNode___id',
  ChildrenContentfulCompanyMainQuoteTextNodeParentId = 'childrenContentfulCompanyMainQuoteTextNode___parent___id',
  ChildrenContentfulCompanyMainQuoteTextNodeParentParentId = 'childrenContentfulCompanyMainQuoteTextNode___parent___parent___id',
  ChildrenContentfulCompanyMainQuoteTextNodeParentParentChildren = 'childrenContentfulCompanyMainQuoteTextNode___parent___parent___children',
  ChildrenContentfulCompanyMainQuoteTextNodeParentChildren = 'childrenContentfulCompanyMainQuoteTextNode___parent___children',
  ChildrenContentfulCompanyMainQuoteTextNodeParentChildrenId = 'childrenContentfulCompanyMainQuoteTextNode___parent___children___id',
  ChildrenContentfulCompanyMainQuoteTextNodeParentChildrenChildren = 'childrenContentfulCompanyMainQuoteTextNode___parent___children___children',
  ChildrenContentfulCompanyMainQuoteTextNodeParentInternalContent = 'childrenContentfulCompanyMainQuoteTextNode___parent___internal___content',
  ChildrenContentfulCompanyMainQuoteTextNodeParentInternalContentDigest = 'childrenContentfulCompanyMainQuoteTextNode___parent___internal___contentDigest',
  ChildrenContentfulCompanyMainQuoteTextNodeParentInternalDescription = 'childrenContentfulCompanyMainQuoteTextNode___parent___internal___description',
  ChildrenContentfulCompanyMainQuoteTextNodeParentInternalFieldOwners = 'childrenContentfulCompanyMainQuoteTextNode___parent___internal___fieldOwners',
  ChildrenContentfulCompanyMainQuoteTextNodeParentInternalIgnoreType = 'childrenContentfulCompanyMainQuoteTextNode___parent___internal___ignoreType',
  ChildrenContentfulCompanyMainQuoteTextNodeParentInternalMediaType = 'childrenContentfulCompanyMainQuoteTextNode___parent___internal___mediaType',
  ChildrenContentfulCompanyMainQuoteTextNodeParentInternalOwner = 'childrenContentfulCompanyMainQuoteTextNode___parent___internal___owner',
  ChildrenContentfulCompanyMainQuoteTextNodeParentInternalType = 'childrenContentfulCompanyMainQuoteTextNode___parent___internal___type',
  ChildrenContentfulCompanyMainQuoteTextNodeChildren = 'childrenContentfulCompanyMainQuoteTextNode___children',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenId = 'childrenContentfulCompanyMainQuoteTextNode___children___id',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenParentId = 'childrenContentfulCompanyMainQuoteTextNode___children___parent___id',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenParentChildren = 'childrenContentfulCompanyMainQuoteTextNode___children___parent___children',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenChildren = 'childrenContentfulCompanyMainQuoteTextNode___children___children',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenChildrenId = 'childrenContentfulCompanyMainQuoteTextNode___children___children___id',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenChildrenChildren = 'childrenContentfulCompanyMainQuoteTextNode___children___children___children',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenInternalContent = 'childrenContentfulCompanyMainQuoteTextNode___children___internal___content',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenInternalContentDigest = 'childrenContentfulCompanyMainQuoteTextNode___children___internal___contentDigest',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenInternalDescription = 'childrenContentfulCompanyMainQuoteTextNode___children___internal___description',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenInternalFieldOwners = 'childrenContentfulCompanyMainQuoteTextNode___children___internal___fieldOwners',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenInternalIgnoreType = 'childrenContentfulCompanyMainQuoteTextNode___children___internal___ignoreType',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenInternalMediaType = 'childrenContentfulCompanyMainQuoteTextNode___children___internal___mediaType',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenInternalOwner = 'childrenContentfulCompanyMainQuoteTextNode___children___internal___owner',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenInternalType = 'childrenContentfulCompanyMainQuoteTextNode___children___internal___type',
  ChildrenContentfulCompanyMainQuoteTextNodeInternalContent = 'childrenContentfulCompanyMainQuoteTextNode___internal___content',
  ChildrenContentfulCompanyMainQuoteTextNodeInternalContentDigest = 'childrenContentfulCompanyMainQuoteTextNode___internal___contentDigest',
  ChildrenContentfulCompanyMainQuoteTextNodeInternalDescription = 'childrenContentfulCompanyMainQuoteTextNode___internal___description',
  ChildrenContentfulCompanyMainQuoteTextNodeInternalFieldOwners = 'childrenContentfulCompanyMainQuoteTextNode___internal___fieldOwners',
  ChildrenContentfulCompanyMainQuoteTextNodeInternalIgnoreType = 'childrenContentfulCompanyMainQuoteTextNode___internal___ignoreType',
  ChildrenContentfulCompanyMainQuoteTextNodeInternalMediaType = 'childrenContentfulCompanyMainQuoteTextNode___internal___mediaType',
  ChildrenContentfulCompanyMainQuoteTextNodeInternalOwner = 'childrenContentfulCompanyMainQuoteTextNode___internal___owner',
  ChildrenContentfulCompanyMainQuoteTextNodeInternalType = 'childrenContentfulCompanyMainQuoteTextNode___internal___type',
  ChildrenContentfulCompanyMainQuoteTextNodeMainQuote = 'childrenContentfulCompanyMainQuoteTextNode___mainQuote',
  ChildrenContentfulCompanyMainQuoteTextNodeSysType = 'childrenContentfulCompanyMainQuoteTextNode___sys___type',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdx = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxRawBody = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___rawBody',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxFileAbsolutePath = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___fileAbsolutePath',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxFrontmatterTitle = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___frontmatter___title',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxSlug = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___slug',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxBody = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___body',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxExcerpt = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___excerpt',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxHeadings = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___headings',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxHeadingsValue = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___headings___value',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxHeadingsDepth = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___headings___depth',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxHtml = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___html',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxMdxAst = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___mdxAST',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxTableOfContents = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___tableOfContents',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxTimeToRead = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___timeToRead',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxWordCountParagraphs = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___wordCount___paragraphs',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxWordCountSentences = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___wordCount___sentences',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxWordCountWords = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___wordCount___words',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxId = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___id',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxParentId = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___parent___id',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxParentChildren = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___parent___children',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxChildren = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___children',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxChildrenId = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___children___id',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxChildrenChildren = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___children___children',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxInternalContent = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___internal___content',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxInternalContentDigest = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___internal___contentDigest',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxInternalDescription = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___internal___description',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxInternalFieldOwners = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___internal___fieldOwners',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxInternalIgnoreType = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___internal___ignoreType',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxInternalMediaType = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___internal___mediaType',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxInternalOwner = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___internal___owner',
  ChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxInternalType = 'childrenContentfulCompanyMainQuoteTextNode___childrenMdx___internal___type',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxRawBody = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___rawBody',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxFileAbsolutePath = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___fileAbsolutePath',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxFrontmatterTitle = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___frontmatter___title',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxSlug = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___slug',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxBody = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___body',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxExcerpt = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___excerpt',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxHeadings = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___headings',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxHeadingsValue = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___headings___value',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxHeadingsDepth = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___headings___depth',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxHtml = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___html',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxMdxAst = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___mdxAST',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxTableOfContents = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___tableOfContents',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxTimeToRead = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___timeToRead',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxWordCountParagraphs = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___wordCount___paragraphs',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxWordCountSentences = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___wordCount___sentences',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxWordCountWords = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___wordCount___words',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxId = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___id',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxParentId = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___parent___id',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxParentChildren = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___parent___children',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxChildren = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___children',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxChildrenId = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___children___id',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxChildrenChildren = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___children___children',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxInternalContent = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___internal___content',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxInternalContentDigest = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___internal___contentDigest',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxInternalDescription = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___internal___description',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxInternalFieldOwners = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___internal___fieldOwners',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxInternalIgnoreType = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___internal___ignoreType',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxInternalMediaType = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___internal___mediaType',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxInternalOwner = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___internal___owner',
  ChildrenContentfulCompanyMainQuoteTextNodeChildMdxInternalType = 'childrenContentfulCompanyMainQuoteTextNode___childMdx___internal___type',
  ChildContentfulCompanyMainQuoteTextNodeId = 'childContentfulCompanyMainQuoteTextNode___id',
  ChildContentfulCompanyMainQuoteTextNodeParentId = 'childContentfulCompanyMainQuoteTextNode___parent___id',
  ChildContentfulCompanyMainQuoteTextNodeParentParentId = 'childContentfulCompanyMainQuoteTextNode___parent___parent___id',
  ChildContentfulCompanyMainQuoteTextNodeParentParentChildren = 'childContentfulCompanyMainQuoteTextNode___parent___parent___children',
  ChildContentfulCompanyMainQuoteTextNodeParentChildren = 'childContentfulCompanyMainQuoteTextNode___parent___children',
  ChildContentfulCompanyMainQuoteTextNodeParentChildrenId = 'childContentfulCompanyMainQuoteTextNode___parent___children___id',
  ChildContentfulCompanyMainQuoteTextNodeParentChildrenChildren = 'childContentfulCompanyMainQuoteTextNode___parent___children___children',
  ChildContentfulCompanyMainQuoteTextNodeParentInternalContent = 'childContentfulCompanyMainQuoteTextNode___parent___internal___content',
  ChildContentfulCompanyMainQuoteTextNodeParentInternalContentDigest = 'childContentfulCompanyMainQuoteTextNode___parent___internal___contentDigest',
  ChildContentfulCompanyMainQuoteTextNodeParentInternalDescription = 'childContentfulCompanyMainQuoteTextNode___parent___internal___description',
  ChildContentfulCompanyMainQuoteTextNodeParentInternalFieldOwners = 'childContentfulCompanyMainQuoteTextNode___parent___internal___fieldOwners',
  ChildContentfulCompanyMainQuoteTextNodeParentInternalIgnoreType = 'childContentfulCompanyMainQuoteTextNode___parent___internal___ignoreType',
  ChildContentfulCompanyMainQuoteTextNodeParentInternalMediaType = 'childContentfulCompanyMainQuoteTextNode___parent___internal___mediaType',
  ChildContentfulCompanyMainQuoteTextNodeParentInternalOwner = 'childContentfulCompanyMainQuoteTextNode___parent___internal___owner',
  ChildContentfulCompanyMainQuoteTextNodeParentInternalType = 'childContentfulCompanyMainQuoteTextNode___parent___internal___type',
  ChildContentfulCompanyMainQuoteTextNodeChildren = 'childContentfulCompanyMainQuoteTextNode___children',
  ChildContentfulCompanyMainQuoteTextNodeChildrenId = 'childContentfulCompanyMainQuoteTextNode___children___id',
  ChildContentfulCompanyMainQuoteTextNodeChildrenParentId = 'childContentfulCompanyMainQuoteTextNode___children___parent___id',
  ChildContentfulCompanyMainQuoteTextNodeChildrenParentChildren = 'childContentfulCompanyMainQuoteTextNode___children___parent___children',
  ChildContentfulCompanyMainQuoteTextNodeChildrenChildren = 'childContentfulCompanyMainQuoteTextNode___children___children',
  ChildContentfulCompanyMainQuoteTextNodeChildrenChildrenId = 'childContentfulCompanyMainQuoteTextNode___children___children___id',
  ChildContentfulCompanyMainQuoteTextNodeChildrenChildrenChildren = 'childContentfulCompanyMainQuoteTextNode___children___children___children',
  ChildContentfulCompanyMainQuoteTextNodeChildrenInternalContent = 'childContentfulCompanyMainQuoteTextNode___children___internal___content',
  ChildContentfulCompanyMainQuoteTextNodeChildrenInternalContentDigest = 'childContentfulCompanyMainQuoteTextNode___children___internal___contentDigest',
  ChildContentfulCompanyMainQuoteTextNodeChildrenInternalDescription = 'childContentfulCompanyMainQuoteTextNode___children___internal___description',
  ChildContentfulCompanyMainQuoteTextNodeChildrenInternalFieldOwners = 'childContentfulCompanyMainQuoteTextNode___children___internal___fieldOwners',
  ChildContentfulCompanyMainQuoteTextNodeChildrenInternalIgnoreType = 'childContentfulCompanyMainQuoteTextNode___children___internal___ignoreType',
  ChildContentfulCompanyMainQuoteTextNodeChildrenInternalMediaType = 'childContentfulCompanyMainQuoteTextNode___children___internal___mediaType',
  ChildContentfulCompanyMainQuoteTextNodeChildrenInternalOwner = 'childContentfulCompanyMainQuoteTextNode___children___internal___owner',
  ChildContentfulCompanyMainQuoteTextNodeChildrenInternalType = 'childContentfulCompanyMainQuoteTextNode___children___internal___type',
  ChildContentfulCompanyMainQuoteTextNodeInternalContent = 'childContentfulCompanyMainQuoteTextNode___internal___content',
  ChildContentfulCompanyMainQuoteTextNodeInternalContentDigest = 'childContentfulCompanyMainQuoteTextNode___internal___contentDigest',
  ChildContentfulCompanyMainQuoteTextNodeInternalDescription = 'childContentfulCompanyMainQuoteTextNode___internal___description',
  ChildContentfulCompanyMainQuoteTextNodeInternalFieldOwners = 'childContentfulCompanyMainQuoteTextNode___internal___fieldOwners',
  ChildContentfulCompanyMainQuoteTextNodeInternalIgnoreType = 'childContentfulCompanyMainQuoteTextNode___internal___ignoreType',
  ChildContentfulCompanyMainQuoteTextNodeInternalMediaType = 'childContentfulCompanyMainQuoteTextNode___internal___mediaType',
  ChildContentfulCompanyMainQuoteTextNodeInternalOwner = 'childContentfulCompanyMainQuoteTextNode___internal___owner',
  ChildContentfulCompanyMainQuoteTextNodeInternalType = 'childContentfulCompanyMainQuoteTextNode___internal___type',
  ChildContentfulCompanyMainQuoteTextNodeMainQuote = 'childContentfulCompanyMainQuoteTextNode___mainQuote',
  ChildContentfulCompanyMainQuoteTextNodeSysType = 'childContentfulCompanyMainQuoteTextNode___sys___type',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdx = 'childContentfulCompanyMainQuoteTextNode___childrenMdx',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxRawBody = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___rawBody',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxFileAbsolutePath = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___fileAbsolutePath',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxFrontmatterTitle = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___frontmatter___title',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxSlug = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___slug',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxBody = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___body',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxExcerpt = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___excerpt',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxHeadings = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___headings',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxHeadingsValue = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___headings___value',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxHeadingsDepth = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___headings___depth',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxHtml = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___html',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxMdxAst = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___mdxAST',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxTableOfContents = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___tableOfContents',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxTimeToRead = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___timeToRead',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxWordCountParagraphs = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___wordCount___paragraphs',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxWordCountSentences = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___wordCount___sentences',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxWordCountWords = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___wordCount___words',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxId = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___id',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxParentId = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___parent___id',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxParentChildren = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___parent___children',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxChildren = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___children',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxChildrenId = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___children___id',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxChildrenChildren = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___children___children',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxInternalContent = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___internal___content',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxInternalContentDigest = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___internal___contentDigest',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxInternalDescription = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___internal___description',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxInternalFieldOwners = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___internal___fieldOwners',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxInternalIgnoreType = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___internal___ignoreType',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxInternalMediaType = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___internal___mediaType',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxInternalOwner = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___internal___owner',
  ChildContentfulCompanyMainQuoteTextNodeChildrenMdxInternalType = 'childContentfulCompanyMainQuoteTextNode___childrenMdx___internal___type',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxRawBody = 'childContentfulCompanyMainQuoteTextNode___childMdx___rawBody',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxFileAbsolutePath = 'childContentfulCompanyMainQuoteTextNode___childMdx___fileAbsolutePath',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxFrontmatterTitle = 'childContentfulCompanyMainQuoteTextNode___childMdx___frontmatter___title',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxSlug = 'childContentfulCompanyMainQuoteTextNode___childMdx___slug',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxBody = 'childContentfulCompanyMainQuoteTextNode___childMdx___body',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxExcerpt = 'childContentfulCompanyMainQuoteTextNode___childMdx___excerpt',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxHeadings = 'childContentfulCompanyMainQuoteTextNode___childMdx___headings',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxHeadingsValue = 'childContentfulCompanyMainQuoteTextNode___childMdx___headings___value',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxHeadingsDepth = 'childContentfulCompanyMainQuoteTextNode___childMdx___headings___depth',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxHtml = 'childContentfulCompanyMainQuoteTextNode___childMdx___html',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxMdxAst = 'childContentfulCompanyMainQuoteTextNode___childMdx___mdxAST',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxTableOfContents = 'childContentfulCompanyMainQuoteTextNode___childMdx___tableOfContents',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxTimeToRead = 'childContentfulCompanyMainQuoteTextNode___childMdx___timeToRead',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxWordCountParagraphs = 'childContentfulCompanyMainQuoteTextNode___childMdx___wordCount___paragraphs',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxWordCountSentences = 'childContentfulCompanyMainQuoteTextNode___childMdx___wordCount___sentences',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxWordCountWords = 'childContentfulCompanyMainQuoteTextNode___childMdx___wordCount___words',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxId = 'childContentfulCompanyMainQuoteTextNode___childMdx___id',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxParentId = 'childContentfulCompanyMainQuoteTextNode___childMdx___parent___id',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxParentChildren = 'childContentfulCompanyMainQuoteTextNode___childMdx___parent___children',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxChildren = 'childContentfulCompanyMainQuoteTextNode___childMdx___children',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxChildrenId = 'childContentfulCompanyMainQuoteTextNode___childMdx___children___id',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxChildrenChildren = 'childContentfulCompanyMainQuoteTextNode___childMdx___children___children',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxInternalContent = 'childContentfulCompanyMainQuoteTextNode___childMdx___internal___content',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxInternalContentDigest = 'childContentfulCompanyMainQuoteTextNode___childMdx___internal___contentDigest',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxInternalDescription = 'childContentfulCompanyMainQuoteTextNode___childMdx___internal___description',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxInternalFieldOwners = 'childContentfulCompanyMainQuoteTextNode___childMdx___internal___fieldOwners',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxInternalIgnoreType = 'childContentfulCompanyMainQuoteTextNode___childMdx___internal___ignoreType',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxInternalMediaType = 'childContentfulCompanyMainQuoteTextNode___childMdx___internal___mediaType',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxInternalOwner = 'childContentfulCompanyMainQuoteTextNode___childMdx___internal___owner',
  ChildContentfulCompanyMainQuoteTextNodeChildMdxInternalType = 'childContentfulCompanyMainQuoteTextNode___childMdx___internal___type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulCompanyFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  contactName?: Maybe<StringQueryOperatorInput>;
  contactTitle?: Maybe<StringQueryOperatorInput>;
  funding?: Maybe<StringQueryOperatorInput>;
  yearFounded?: Maybe<DateQueryOperatorInput>;
  employeeCount?: Maybe<StringQueryOperatorInput>;
  sector?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  stage?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<ContentfulAssetFilterInput>;
  customer_story?: Maybe<ContentfulCustomerStoryFilterListInput>;
  mainQuote?: Maybe<ContentfulCompanyMainQuoteTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCompanySysFilterInput>;
  cover?: Maybe<ContentfulAssetFilterInput>;
  childrenContentfulCompanyMainQuoteTextNode?: Maybe<ContentfulCompanyMainQuoteTextNodeFilterListInput>;
  childContentfulCompanyMainQuoteTextNode?: Maybe<ContentfulCompanyMainQuoteTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulCompanyGroupConnection = {
  __typename?: 'ContentfulCompanyGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCompanyEdge>;
  nodes: Array<ContentfulCompany>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCompanyMainQuoteTextNode = Node & {
  __typename?: 'contentfulCompanyMainQuoteTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  mainQuote?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulCompanyMainQuoteTextNodeSys>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
};

export type ContentfulCompanyMainQuoteTextNodeConnection = {
  __typename?: 'contentfulCompanyMainQuoteTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCompanyMainQuoteTextNodeEdge>;
  nodes: Array<ContentfulCompanyMainQuoteTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCompanyMainQuoteTextNodeGroupConnection>;
};


export type ContentfulCompanyMainQuoteTextNodeConnectionDistinctArgs = {
  field: ContentfulCompanyMainQuoteTextNodeFieldsEnum;
};


export type ContentfulCompanyMainQuoteTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCompanyMainQuoteTextNodeFieldsEnum;
};

export type ContentfulCompanyMainQuoteTextNodeEdge = {
  __typename?: 'contentfulCompanyMainQuoteTextNodeEdge';
  next?: Maybe<ContentfulCompanyMainQuoteTextNode>;
  node: ContentfulCompanyMainQuoteTextNode;
  previous?: Maybe<ContentfulCompanyMainQuoteTextNode>;
};

export enum ContentfulCompanyMainQuoteTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MainQuote = 'mainQuote',
  SysType = 'sys___type',
  ChildrenMdx = 'childrenMdx',
  ChildrenMdxRawBody = 'childrenMdx___rawBody',
  ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
  ChildrenMdxSlug = 'childrenMdx___slug',
  ChildrenMdxBody = 'childrenMdx___body',
  ChildrenMdxExcerpt = 'childrenMdx___excerpt',
  ChildrenMdxHeadings = 'childrenMdx___headings',
  ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
  ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
  ChildrenMdxHtml = 'childrenMdx___html',
  ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
  ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
  ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
  ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
  ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
  ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
  ChildrenMdxId = 'childrenMdx___id',
  ChildrenMdxParentId = 'childrenMdx___parent___id',
  ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
  ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
  ChildrenMdxParentChildren = 'childrenMdx___parent___children',
  ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
  ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
  ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
  ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
  ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
  ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
  ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
  ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
  ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
  ChildrenMdxChildren = 'childrenMdx___children',
  ChildrenMdxChildrenId = 'childrenMdx___children___id',
  ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
  ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
  ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
  ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
  ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
  ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
  ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
  ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
  ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
  ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
  ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
  ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
  ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
  ChildrenMdxInternalContent = 'childrenMdx___internal___content',
  ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
  ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
  ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
  ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
  ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
  ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
  ChildrenMdxInternalType = 'childrenMdx___internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxSlug = 'childMdx___slug',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type'
}

export type ContentfulCompanyMainQuoteTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  mainQuote?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulCompanyMainQuoteTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulCompanyMainQuoteTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulCompanyMainQuoteTextNodeFilterInput>;
};

export type ContentfulCompanyMainQuoteTextNodeGroupConnection = {
  __typename?: 'contentfulCompanyMainQuoteTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCompanyMainQuoteTextNodeEdge>;
  nodes: Array<ContentfulCompanyMainQuoteTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCompanyMainQuoteTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCompanyMainQuoteTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCompanyMainQuoteTextNodeSys = {
  __typename?: 'contentfulCompanyMainQuoteTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulCompanyMainQuoteTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCompanySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCompanyFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCompanySys = {
  __typename?: 'ContentfulCompanySys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCompanySysContentType>;
};

export type ContentfulCompanySysContentType = {
  __typename?: 'ContentfulCompanySysContentType';
  sys?: Maybe<ContentfulCompanySysContentTypeSys>;
};

export type ContentfulCompanySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCompanySysContentTypeSysFilterInput>;
};

export type ContentfulCompanySysContentTypeSys = {
  __typename?: 'ContentfulCompanySysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulCompanySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCompanySysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulCompanySysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  __typename?: 'ContentfulContentType';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  __typename?: 'ContentfulContentTypeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  __typename?: 'ContentfulContentTypeEdge';
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export enum ContentfulContentTypeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  DisplayField = 'displayField',
  Description = 'description',
  SysType = 'sys___type'
}

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  __typename?: 'ContentfulContentTypeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  __typename?: 'ContentfulContentTypeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCustomerStory = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulCustomerStory';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  language?: Maybe<Scalars['String']>;
  company?: Maybe<ContentfulCompany>;
  content?: Maybe<ContentfulCustomerStoryContentTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulCustomerStorySys>;
  /** Returns all children nodes filtered by type contentfulCustomerStoryContentTextNode */
  childrenContentfulCustomerStoryContentTextNode?: Maybe<Array<Maybe<ContentfulCustomerStoryContentTextNode>>>;
  /**
   * Returns the first child node of type contentfulCustomerStoryContentTextNode or
   * null if there are no children of given type on this node
   */
  childContentfulCustomerStoryContentTextNode?: Maybe<ContentfulCustomerStoryContentTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulCustomerStoryDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCustomerStoryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulCustomerStoryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulCustomerStoryConnection = {
  __typename?: 'ContentfulCustomerStoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCustomerStoryEdge>;
  nodes: Array<ContentfulCustomerStory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCustomerStoryGroupConnection>;
};


export type ContentfulCustomerStoryConnectionDistinctArgs = {
  field: ContentfulCustomerStoryFieldsEnum;
};


export type ContentfulCustomerStoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCustomerStoryFieldsEnum;
};

export type ContentfulCustomerStoryContentTextNode = Node & {
  __typename?: 'contentfulCustomerStoryContentTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulCustomerStoryContentTextNodeSys>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
};

export type ContentfulCustomerStoryContentTextNodeConnection = {
  __typename?: 'contentfulCustomerStoryContentTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCustomerStoryContentTextNodeEdge>;
  nodes: Array<ContentfulCustomerStoryContentTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulCustomerStoryContentTextNodeGroupConnection>;
};


export type ContentfulCustomerStoryContentTextNodeConnectionDistinctArgs = {
  field: ContentfulCustomerStoryContentTextNodeFieldsEnum;
};


export type ContentfulCustomerStoryContentTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulCustomerStoryContentTextNodeFieldsEnum;
};

export type ContentfulCustomerStoryContentTextNodeEdge = {
  __typename?: 'contentfulCustomerStoryContentTextNodeEdge';
  next?: Maybe<ContentfulCustomerStoryContentTextNode>;
  node: ContentfulCustomerStoryContentTextNode;
  previous?: Maybe<ContentfulCustomerStoryContentTextNode>;
};

export enum ContentfulCustomerStoryContentTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Content = 'content',
  SysType = 'sys___type',
  ChildrenMdx = 'childrenMdx',
  ChildrenMdxRawBody = 'childrenMdx___rawBody',
  ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
  ChildrenMdxSlug = 'childrenMdx___slug',
  ChildrenMdxBody = 'childrenMdx___body',
  ChildrenMdxExcerpt = 'childrenMdx___excerpt',
  ChildrenMdxHeadings = 'childrenMdx___headings',
  ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
  ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
  ChildrenMdxHtml = 'childrenMdx___html',
  ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
  ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
  ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
  ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
  ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
  ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
  ChildrenMdxId = 'childrenMdx___id',
  ChildrenMdxParentId = 'childrenMdx___parent___id',
  ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
  ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
  ChildrenMdxParentChildren = 'childrenMdx___parent___children',
  ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
  ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
  ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
  ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
  ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
  ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
  ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
  ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
  ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
  ChildrenMdxChildren = 'childrenMdx___children',
  ChildrenMdxChildrenId = 'childrenMdx___children___id',
  ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
  ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
  ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
  ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
  ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
  ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
  ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
  ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
  ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
  ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
  ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
  ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
  ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
  ChildrenMdxInternalContent = 'childrenMdx___internal___content',
  ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
  ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
  ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
  ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
  ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
  ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
  ChildrenMdxInternalType = 'childrenMdx___internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxSlug = 'childMdx___slug',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type'
}

export type ContentfulCustomerStoryContentTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulCustomerStoryContentTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulCustomerStoryContentTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulCustomerStoryContentTextNodeFilterInput>;
};

export type ContentfulCustomerStoryContentTextNodeGroupConnection = {
  __typename?: 'contentfulCustomerStoryContentTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCustomerStoryContentTextNodeEdge>;
  nodes: Array<ContentfulCustomerStoryContentTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCustomerStoryContentTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCustomerStoryContentTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCustomerStoryContentTextNodeSys = {
  __typename?: 'contentfulCustomerStoryContentTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulCustomerStoryContentTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCustomerStoryEdge = {
  __typename?: 'ContentfulCustomerStoryEdge';
  next?: Maybe<ContentfulCustomerStory>;
  node: ContentfulCustomerStory;
  previous?: Maybe<ContentfulCustomerStory>;
};

export enum ContentfulCustomerStoryFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Title = 'title',
  Slug = 'slug',
  Subtitle = 'subtitle',
  Date = 'date',
  Language = 'language',
  CompanyContentfulId = 'company___contentful_id',
  CompanyId = 'company___id',
  CompanyNodeLocale = 'company___node_locale',
  CompanyName = 'company___name',
  CompanyContactName = 'company___contactName',
  CompanyContactTitle = 'company___contactTitle',
  CompanyFunding = 'company___funding',
  CompanyYearFounded = 'company___yearFounded',
  CompanyEmployeeCount = 'company___employeeCount',
  CompanySector = 'company___sector',
  CompanyLocation = 'company___location',
  CompanyStage = 'company___stage',
  CompanyLogoContentfulId = 'company___logo___contentful_id',
  CompanyLogoId = 'company___logo___id',
  CompanyLogoSpaceId = 'company___logo___spaceId',
  CompanyLogoCreatedAt = 'company___logo___createdAt',
  CompanyLogoUpdatedAt = 'company___logo___updatedAt',
  CompanyLogoFileUrl = 'company___logo___file___url',
  CompanyLogoFileFileName = 'company___logo___file___fileName',
  CompanyLogoFileContentType = 'company___logo___file___contentType',
  CompanyLogoTitle = 'company___logo___title',
  CompanyLogoDescription = 'company___logo___description',
  CompanyLogoNodeLocale = 'company___logo___node_locale',
  CompanyLogoSysType = 'company___logo___sys___type',
  CompanyLogoSysRevision = 'company___logo___sys___revision',
  CompanyLogoLocalFileSourceInstanceName = 'company___logo___localFile___sourceInstanceName',
  CompanyLogoLocalFileAbsolutePath = 'company___logo___localFile___absolutePath',
  CompanyLogoLocalFileRelativePath = 'company___logo___localFile___relativePath',
  CompanyLogoLocalFileExtension = 'company___logo___localFile___extension',
  CompanyLogoLocalFileSize = 'company___logo___localFile___size',
  CompanyLogoLocalFilePrettySize = 'company___logo___localFile___prettySize',
  CompanyLogoLocalFileModifiedTime = 'company___logo___localFile___modifiedTime',
  CompanyLogoLocalFileAccessTime = 'company___logo___localFile___accessTime',
  CompanyLogoLocalFileChangeTime = 'company___logo___localFile___changeTime',
  CompanyLogoLocalFileBirthTime = 'company___logo___localFile___birthTime',
  CompanyLogoLocalFileRoot = 'company___logo___localFile___root',
  CompanyLogoLocalFileDir = 'company___logo___localFile___dir',
  CompanyLogoLocalFileBase = 'company___logo___localFile___base',
  CompanyLogoLocalFileExt = 'company___logo___localFile___ext',
  CompanyLogoLocalFileName = 'company___logo___localFile___name',
  CompanyLogoLocalFileRelativeDirectory = 'company___logo___localFile___relativeDirectory',
  CompanyLogoLocalFileDev = 'company___logo___localFile___dev',
  CompanyLogoLocalFileMode = 'company___logo___localFile___mode',
  CompanyLogoLocalFileNlink = 'company___logo___localFile___nlink',
  CompanyLogoLocalFileUid = 'company___logo___localFile___uid',
  CompanyLogoLocalFileGid = 'company___logo___localFile___gid',
  CompanyLogoLocalFileRdev = 'company___logo___localFile___rdev',
  CompanyLogoLocalFileIno = 'company___logo___localFile___ino',
  CompanyLogoLocalFileAtimeMs = 'company___logo___localFile___atimeMs',
  CompanyLogoLocalFileMtimeMs = 'company___logo___localFile___mtimeMs',
  CompanyLogoLocalFileCtimeMs = 'company___logo___localFile___ctimeMs',
  CompanyLogoLocalFileAtime = 'company___logo___localFile___atime',
  CompanyLogoLocalFileMtime = 'company___logo___localFile___mtime',
  CompanyLogoLocalFileCtime = 'company___logo___localFile___ctime',
  CompanyLogoLocalFileBirthtime = 'company___logo___localFile___birthtime',
  CompanyLogoLocalFileBirthtimeMs = 'company___logo___localFile___birthtimeMs',
  CompanyLogoLocalFileBlksize = 'company___logo___localFile___blksize',
  CompanyLogoLocalFileBlocks = 'company___logo___localFile___blocks',
  CompanyLogoLocalFileUrl = 'company___logo___localFile___url',
  CompanyLogoLocalFilePublicUrl = 'company___logo___localFile___publicURL',
  CompanyLogoLocalFileChildrenImageSharp = 'company___logo___localFile___childrenImageSharp',
  CompanyLogoLocalFileId = 'company___logo___localFile___id',
  CompanyLogoLocalFileChildren = 'company___logo___localFile___children',
  CompanyLogoFixedBase64 = 'company___logo___fixed___base64',
  CompanyLogoFixedTracedSvg = 'company___logo___fixed___tracedSVG',
  CompanyLogoFixedAspectRatio = 'company___logo___fixed___aspectRatio',
  CompanyLogoFixedWidth = 'company___logo___fixed___width',
  CompanyLogoFixedHeight = 'company___logo___fixed___height',
  CompanyLogoFixedSrc = 'company___logo___fixed___src',
  CompanyLogoFixedSrcSet = 'company___logo___fixed___srcSet',
  CompanyLogoFixedSrcWebp = 'company___logo___fixed___srcWebp',
  CompanyLogoFixedSrcSetWebp = 'company___logo___fixed___srcSetWebp',
  CompanyLogoResolutionsBase64 = 'company___logo___resolutions___base64',
  CompanyLogoResolutionsTracedSvg = 'company___logo___resolutions___tracedSVG',
  CompanyLogoResolutionsAspectRatio = 'company___logo___resolutions___aspectRatio',
  CompanyLogoResolutionsWidth = 'company___logo___resolutions___width',
  CompanyLogoResolutionsHeight = 'company___logo___resolutions___height',
  CompanyLogoResolutionsSrc = 'company___logo___resolutions___src',
  CompanyLogoResolutionsSrcSet = 'company___logo___resolutions___srcSet',
  CompanyLogoResolutionsSrcWebp = 'company___logo___resolutions___srcWebp',
  CompanyLogoResolutionsSrcSetWebp = 'company___logo___resolutions___srcSetWebp',
  CompanyLogoFluidBase64 = 'company___logo___fluid___base64',
  CompanyLogoFluidTracedSvg = 'company___logo___fluid___tracedSVG',
  CompanyLogoFluidAspectRatio = 'company___logo___fluid___aspectRatio',
  CompanyLogoFluidSrc = 'company___logo___fluid___src',
  CompanyLogoFluidSrcSet = 'company___logo___fluid___srcSet',
  CompanyLogoFluidSrcWebp = 'company___logo___fluid___srcWebp',
  CompanyLogoFluidSrcSetWebp = 'company___logo___fluid___srcSetWebp',
  CompanyLogoFluidSizes = 'company___logo___fluid___sizes',
  CompanyLogoSizesBase64 = 'company___logo___sizes___base64',
  CompanyLogoSizesTracedSvg = 'company___logo___sizes___tracedSVG',
  CompanyLogoSizesAspectRatio = 'company___logo___sizes___aspectRatio',
  CompanyLogoSizesSrc = 'company___logo___sizes___src',
  CompanyLogoSizesSrcSet = 'company___logo___sizes___srcSet',
  CompanyLogoSizesSrcWebp = 'company___logo___sizes___srcWebp',
  CompanyLogoSizesSrcSetWebp = 'company___logo___sizes___srcSetWebp',
  CompanyLogoSizesSizes = 'company___logo___sizes___sizes',
  CompanyLogoResizeBase64 = 'company___logo___resize___base64',
  CompanyLogoResizeTracedSvg = 'company___logo___resize___tracedSVG',
  CompanyLogoResizeSrc = 'company___logo___resize___src',
  CompanyLogoResizeWidth = 'company___logo___resize___width',
  CompanyLogoResizeHeight = 'company___logo___resize___height',
  CompanyLogoResizeAspectRatio = 'company___logo___resize___aspectRatio',
  CompanyLogoParentId = 'company___logo___parent___id',
  CompanyLogoParentChildren = 'company___logo___parent___children',
  CompanyLogoChildren = 'company___logo___children',
  CompanyLogoChildrenId = 'company___logo___children___id',
  CompanyLogoChildrenChildren = 'company___logo___children___children',
  CompanyLogoInternalContent = 'company___logo___internal___content',
  CompanyLogoInternalContentDigest = 'company___logo___internal___contentDigest',
  CompanyLogoInternalDescription = 'company___logo___internal___description',
  CompanyLogoInternalFieldOwners = 'company___logo___internal___fieldOwners',
  CompanyLogoInternalIgnoreType = 'company___logo___internal___ignoreType',
  CompanyLogoInternalMediaType = 'company___logo___internal___mediaType',
  CompanyLogoInternalOwner = 'company___logo___internal___owner',
  CompanyLogoInternalType = 'company___logo___internal___type',
  CompanyCustomerStory = 'company___customer_story',
  CompanyCustomerStoryContentfulId = 'company___customer_story___contentful_id',
  CompanyCustomerStoryId = 'company___customer_story___id',
  CompanyCustomerStoryNodeLocale = 'company___customer_story___node_locale',
  CompanyCustomerStoryTitle = 'company___customer_story___title',
  CompanyCustomerStorySlug = 'company___customer_story___slug',
  CompanyCustomerStorySubtitle = 'company___customer_story___subtitle',
  CompanyCustomerStoryDate = 'company___customer_story___date',
  CompanyCustomerStoryLanguage = 'company___customer_story___language',
  CompanyCustomerStoryCompanyContentfulId = 'company___customer_story___company___contentful_id',
  CompanyCustomerStoryCompanyId = 'company___customer_story___company___id',
  CompanyCustomerStoryCompanyNodeLocale = 'company___customer_story___company___node_locale',
  CompanyCustomerStoryCompanyName = 'company___customer_story___company___name',
  CompanyCustomerStoryCompanyContactName = 'company___customer_story___company___contactName',
  CompanyCustomerStoryCompanyContactTitle = 'company___customer_story___company___contactTitle',
  CompanyCustomerStoryCompanyFunding = 'company___customer_story___company___funding',
  CompanyCustomerStoryCompanyYearFounded = 'company___customer_story___company___yearFounded',
  CompanyCustomerStoryCompanyEmployeeCount = 'company___customer_story___company___employeeCount',
  CompanyCustomerStoryCompanySector = 'company___customer_story___company___sector',
  CompanyCustomerStoryCompanyLocation = 'company___customer_story___company___location',
  CompanyCustomerStoryCompanyStage = 'company___customer_story___company___stage',
  CompanyCustomerStoryCompanyCustomerStory = 'company___customer_story___company___customer_story',
  CompanyCustomerStoryCompanySpaceId = 'company___customer_story___company___spaceId',
  CompanyCustomerStoryCompanyCreatedAt = 'company___customer_story___company___createdAt',
  CompanyCustomerStoryCompanyUpdatedAt = 'company___customer_story___company___updatedAt',
  CompanyCustomerStoryCompanyChildrenContentfulCompanyMainQuoteTextNode = 'company___customer_story___company___childrenContentfulCompanyMainQuoteTextNode',
  CompanyCustomerStoryCompanyChildren = 'company___customer_story___company___children',
  CompanyCustomerStoryContentId = 'company___customer_story___content___id',
  CompanyCustomerStoryContentChildren = 'company___customer_story___content___children',
  CompanyCustomerStoryContentContent = 'company___customer_story___content___content',
  CompanyCustomerStoryContentChildrenMdx = 'company___customer_story___content___childrenMdx',
  CompanyCustomerStorySpaceId = 'company___customer_story___spaceId',
  CompanyCustomerStoryCreatedAt = 'company___customer_story___createdAt',
  CompanyCustomerStoryUpdatedAt = 'company___customer_story___updatedAt',
  CompanyCustomerStorySysType = 'company___customer_story___sys___type',
  CompanyCustomerStorySysRevision = 'company___customer_story___sys___revision',
  CompanyCustomerStoryChildrenContentfulCustomerStoryContentTextNode = 'company___customer_story___childrenContentfulCustomerStoryContentTextNode',
  CompanyCustomerStoryChildrenContentfulCustomerStoryContentTextNodeId = 'company___customer_story___childrenContentfulCustomerStoryContentTextNode___id',
  CompanyCustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildren = 'company___customer_story___childrenContentfulCustomerStoryContentTextNode___children',
  CompanyCustomerStoryChildrenContentfulCustomerStoryContentTextNodeContent = 'company___customer_story___childrenContentfulCustomerStoryContentTextNode___content',
  CompanyCustomerStoryChildrenContentfulCustomerStoryContentTextNodeChildrenMdx = 'company___customer_story___childrenContentfulCustomerStoryContentTextNode___childrenMdx',
  CompanyCustomerStoryChildContentfulCustomerStoryContentTextNodeId = 'company___customer_story___childContentfulCustomerStoryContentTextNode___id',
  CompanyCustomerStoryChildContentfulCustomerStoryContentTextNodeChildren = 'company___customer_story___childContentfulCustomerStoryContentTextNode___children',
  CompanyCustomerStoryChildContentfulCustomerStoryContentTextNodeContent = 'company___customer_story___childContentfulCustomerStoryContentTextNode___content',
  CompanyCustomerStoryChildContentfulCustomerStoryContentTextNodeChildrenMdx = 'company___customer_story___childContentfulCustomerStoryContentTextNode___childrenMdx',
  CompanyCustomerStoryParentId = 'company___customer_story___parent___id',
  CompanyCustomerStoryParentChildren = 'company___customer_story___parent___children',
  CompanyCustomerStoryChildren = 'company___customer_story___children',
  CompanyCustomerStoryChildrenId = 'company___customer_story___children___id',
  CompanyCustomerStoryChildrenChildren = 'company___customer_story___children___children',
  CompanyCustomerStoryInternalContent = 'company___customer_story___internal___content',
  CompanyCustomerStoryInternalContentDigest = 'company___customer_story___internal___contentDigest',
  CompanyCustomerStoryInternalDescription = 'company___customer_story___internal___description',
  CompanyCustomerStoryInternalFieldOwners = 'company___customer_story___internal___fieldOwners',
  CompanyCustomerStoryInternalIgnoreType = 'company___customer_story___internal___ignoreType',
  CompanyCustomerStoryInternalMediaType = 'company___customer_story___internal___mediaType',
  CompanyCustomerStoryInternalOwner = 'company___customer_story___internal___owner',
  CompanyCustomerStoryInternalType = 'company___customer_story___internal___type',
  CompanyMainQuoteId = 'company___mainQuote___id',
  CompanyMainQuoteParentId = 'company___mainQuote___parent___id',
  CompanyMainQuoteParentChildren = 'company___mainQuote___parent___children',
  CompanyMainQuoteChildren = 'company___mainQuote___children',
  CompanyMainQuoteChildrenId = 'company___mainQuote___children___id',
  CompanyMainQuoteChildrenChildren = 'company___mainQuote___children___children',
  CompanyMainQuoteInternalContent = 'company___mainQuote___internal___content',
  CompanyMainQuoteInternalContentDigest = 'company___mainQuote___internal___contentDigest',
  CompanyMainQuoteInternalDescription = 'company___mainQuote___internal___description',
  CompanyMainQuoteInternalFieldOwners = 'company___mainQuote___internal___fieldOwners',
  CompanyMainQuoteInternalIgnoreType = 'company___mainQuote___internal___ignoreType',
  CompanyMainQuoteInternalMediaType = 'company___mainQuote___internal___mediaType',
  CompanyMainQuoteInternalOwner = 'company___mainQuote___internal___owner',
  CompanyMainQuoteInternalType = 'company___mainQuote___internal___type',
  CompanyMainQuoteMainQuote = 'company___mainQuote___mainQuote',
  CompanyMainQuoteSysType = 'company___mainQuote___sys___type',
  CompanyMainQuoteChildrenMdx = 'company___mainQuote___childrenMdx',
  CompanyMainQuoteChildrenMdxRawBody = 'company___mainQuote___childrenMdx___rawBody',
  CompanyMainQuoteChildrenMdxFileAbsolutePath = 'company___mainQuote___childrenMdx___fileAbsolutePath',
  CompanyMainQuoteChildrenMdxSlug = 'company___mainQuote___childrenMdx___slug',
  CompanyMainQuoteChildrenMdxBody = 'company___mainQuote___childrenMdx___body',
  CompanyMainQuoteChildrenMdxExcerpt = 'company___mainQuote___childrenMdx___excerpt',
  CompanyMainQuoteChildrenMdxHeadings = 'company___mainQuote___childrenMdx___headings',
  CompanyMainQuoteChildrenMdxHtml = 'company___mainQuote___childrenMdx___html',
  CompanyMainQuoteChildrenMdxMdxAst = 'company___mainQuote___childrenMdx___mdxAST',
  CompanyMainQuoteChildrenMdxTableOfContents = 'company___mainQuote___childrenMdx___tableOfContents',
  CompanyMainQuoteChildrenMdxTimeToRead = 'company___mainQuote___childrenMdx___timeToRead',
  CompanyMainQuoteChildrenMdxId = 'company___mainQuote___childrenMdx___id',
  CompanyMainQuoteChildrenMdxChildren = 'company___mainQuote___childrenMdx___children',
  CompanyMainQuoteChildMdxRawBody = 'company___mainQuote___childMdx___rawBody',
  CompanyMainQuoteChildMdxFileAbsolutePath = 'company___mainQuote___childMdx___fileAbsolutePath',
  CompanyMainQuoteChildMdxSlug = 'company___mainQuote___childMdx___slug',
  CompanyMainQuoteChildMdxBody = 'company___mainQuote___childMdx___body',
  CompanyMainQuoteChildMdxExcerpt = 'company___mainQuote___childMdx___excerpt',
  CompanyMainQuoteChildMdxHeadings = 'company___mainQuote___childMdx___headings',
  CompanyMainQuoteChildMdxHtml = 'company___mainQuote___childMdx___html',
  CompanyMainQuoteChildMdxMdxAst = 'company___mainQuote___childMdx___mdxAST',
  CompanyMainQuoteChildMdxTableOfContents = 'company___mainQuote___childMdx___tableOfContents',
  CompanyMainQuoteChildMdxTimeToRead = 'company___mainQuote___childMdx___timeToRead',
  CompanyMainQuoteChildMdxId = 'company___mainQuote___childMdx___id',
  CompanyMainQuoteChildMdxChildren = 'company___mainQuote___childMdx___children',
  CompanySpaceId = 'company___spaceId',
  CompanyCreatedAt = 'company___createdAt',
  CompanyUpdatedAt = 'company___updatedAt',
  CompanySysType = 'company___sys___type',
  CompanySysRevision = 'company___sys___revision',
  CompanyCoverContentfulId = 'company___cover___contentful_id',
  CompanyCoverId = 'company___cover___id',
  CompanyCoverSpaceId = 'company___cover___spaceId',
  CompanyCoverCreatedAt = 'company___cover___createdAt',
  CompanyCoverUpdatedAt = 'company___cover___updatedAt',
  CompanyCoverFileUrl = 'company___cover___file___url',
  CompanyCoverFileFileName = 'company___cover___file___fileName',
  CompanyCoverFileContentType = 'company___cover___file___contentType',
  CompanyCoverTitle = 'company___cover___title',
  CompanyCoverDescription = 'company___cover___description',
  CompanyCoverNodeLocale = 'company___cover___node_locale',
  CompanyCoverSysType = 'company___cover___sys___type',
  CompanyCoverSysRevision = 'company___cover___sys___revision',
  CompanyCoverLocalFileSourceInstanceName = 'company___cover___localFile___sourceInstanceName',
  CompanyCoverLocalFileAbsolutePath = 'company___cover___localFile___absolutePath',
  CompanyCoverLocalFileRelativePath = 'company___cover___localFile___relativePath',
  CompanyCoverLocalFileExtension = 'company___cover___localFile___extension',
  CompanyCoverLocalFileSize = 'company___cover___localFile___size',
  CompanyCoverLocalFilePrettySize = 'company___cover___localFile___prettySize',
  CompanyCoverLocalFileModifiedTime = 'company___cover___localFile___modifiedTime',
  CompanyCoverLocalFileAccessTime = 'company___cover___localFile___accessTime',
  CompanyCoverLocalFileChangeTime = 'company___cover___localFile___changeTime',
  CompanyCoverLocalFileBirthTime = 'company___cover___localFile___birthTime',
  CompanyCoverLocalFileRoot = 'company___cover___localFile___root',
  CompanyCoverLocalFileDir = 'company___cover___localFile___dir',
  CompanyCoverLocalFileBase = 'company___cover___localFile___base',
  CompanyCoverLocalFileExt = 'company___cover___localFile___ext',
  CompanyCoverLocalFileName = 'company___cover___localFile___name',
  CompanyCoverLocalFileRelativeDirectory = 'company___cover___localFile___relativeDirectory',
  CompanyCoverLocalFileDev = 'company___cover___localFile___dev',
  CompanyCoverLocalFileMode = 'company___cover___localFile___mode',
  CompanyCoverLocalFileNlink = 'company___cover___localFile___nlink',
  CompanyCoverLocalFileUid = 'company___cover___localFile___uid',
  CompanyCoverLocalFileGid = 'company___cover___localFile___gid',
  CompanyCoverLocalFileRdev = 'company___cover___localFile___rdev',
  CompanyCoverLocalFileIno = 'company___cover___localFile___ino',
  CompanyCoverLocalFileAtimeMs = 'company___cover___localFile___atimeMs',
  CompanyCoverLocalFileMtimeMs = 'company___cover___localFile___mtimeMs',
  CompanyCoverLocalFileCtimeMs = 'company___cover___localFile___ctimeMs',
  CompanyCoverLocalFileAtime = 'company___cover___localFile___atime',
  CompanyCoverLocalFileMtime = 'company___cover___localFile___mtime',
  CompanyCoverLocalFileCtime = 'company___cover___localFile___ctime',
  CompanyCoverLocalFileBirthtime = 'company___cover___localFile___birthtime',
  CompanyCoverLocalFileBirthtimeMs = 'company___cover___localFile___birthtimeMs',
  CompanyCoverLocalFileBlksize = 'company___cover___localFile___blksize',
  CompanyCoverLocalFileBlocks = 'company___cover___localFile___blocks',
  CompanyCoverLocalFileUrl = 'company___cover___localFile___url',
  CompanyCoverLocalFilePublicUrl = 'company___cover___localFile___publicURL',
  CompanyCoverLocalFileChildrenImageSharp = 'company___cover___localFile___childrenImageSharp',
  CompanyCoverLocalFileId = 'company___cover___localFile___id',
  CompanyCoverLocalFileChildren = 'company___cover___localFile___children',
  CompanyCoverFixedBase64 = 'company___cover___fixed___base64',
  CompanyCoverFixedTracedSvg = 'company___cover___fixed___tracedSVG',
  CompanyCoverFixedAspectRatio = 'company___cover___fixed___aspectRatio',
  CompanyCoverFixedWidth = 'company___cover___fixed___width',
  CompanyCoverFixedHeight = 'company___cover___fixed___height',
  CompanyCoverFixedSrc = 'company___cover___fixed___src',
  CompanyCoverFixedSrcSet = 'company___cover___fixed___srcSet',
  CompanyCoverFixedSrcWebp = 'company___cover___fixed___srcWebp',
  CompanyCoverFixedSrcSetWebp = 'company___cover___fixed___srcSetWebp',
  CompanyCoverResolutionsBase64 = 'company___cover___resolutions___base64',
  CompanyCoverResolutionsTracedSvg = 'company___cover___resolutions___tracedSVG',
  CompanyCoverResolutionsAspectRatio = 'company___cover___resolutions___aspectRatio',
  CompanyCoverResolutionsWidth = 'company___cover___resolutions___width',
  CompanyCoverResolutionsHeight = 'company___cover___resolutions___height',
  CompanyCoverResolutionsSrc = 'company___cover___resolutions___src',
  CompanyCoverResolutionsSrcSet = 'company___cover___resolutions___srcSet',
  CompanyCoverResolutionsSrcWebp = 'company___cover___resolutions___srcWebp',
  CompanyCoverResolutionsSrcSetWebp = 'company___cover___resolutions___srcSetWebp',
  CompanyCoverFluidBase64 = 'company___cover___fluid___base64',
  CompanyCoverFluidTracedSvg = 'company___cover___fluid___tracedSVG',
  CompanyCoverFluidAspectRatio = 'company___cover___fluid___aspectRatio',
  CompanyCoverFluidSrc = 'company___cover___fluid___src',
  CompanyCoverFluidSrcSet = 'company___cover___fluid___srcSet',
  CompanyCoverFluidSrcWebp = 'company___cover___fluid___srcWebp',
  CompanyCoverFluidSrcSetWebp = 'company___cover___fluid___srcSetWebp',
  CompanyCoverFluidSizes = 'company___cover___fluid___sizes',
  CompanyCoverSizesBase64 = 'company___cover___sizes___base64',
  CompanyCoverSizesTracedSvg = 'company___cover___sizes___tracedSVG',
  CompanyCoverSizesAspectRatio = 'company___cover___sizes___aspectRatio',
  CompanyCoverSizesSrc = 'company___cover___sizes___src',
  CompanyCoverSizesSrcSet = 'company___cover___sizes___srcSet',
  CompanyCoverSizesSrcWebp = 'company___cover___sizes___srcWebp',
  CompanyCoverSizesSrcSetWebp = 'company___cover___sizes___srcSetWebp',
  CompanyCoverSizesSizes = 'company___cover___sizes___sizes',
  CompanyCoverResizeBase64 = 'company___cover___resize___base64',
  CompanyCoverResizeTracedSvg = 'company___cover___resize___tracedSVG',
  CompanyCoverResizeSrc = 'company___cover___resize___src',
  CompanyCoverResizeWidth = 'company___cover___resize___width',
  CompanyCoverResizeHeight = 'company___cover___resize___height',
  CompanyCoverResizeAspectRatio = 'company___cover___resize___aspectRatio',
  CompanyCoverParentId = 'company___cover___parent___id',
  CompanyCoverParentChildren = 'company___cover___parent___children',
  CompanyCoverChildren = 'company___cover___children',
  CompanyCoverChildrenId = 'company___cover___children___id',
  CompanyCoverChildrenChildren = 'company___cover___children___children',
  CompanyCoverInternalContent = 'company___cover___internal___content',
  CompanyCoverInternalContentDigest = 'company___cover___internal___contentDigest',
  CompanyCoverInternalDescription = 'company___cover___internal___description',
  CompanyCoverInternalFieldOwners = 'company___cover___internal___fieldOwners',
  CompanyCoverInternalIgnoreType = 'company___cover___internal___ignoreType',
  CompanyCoverInternalMediaType = 'company___cover___internal___mediaType',
  CompanyCoverInternalOwner = 'company___cover___internal___owner',
  CompanyCoverInternalType = 'company___cover___internal___type',
  CompanyChildrenContentfulCompanyMainQuoteTextNode = 'company___childrenContentfulCompanyMainQuoteTextNode',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeId = 'company___childrenContentfulCompanyMainQuoteTextNode___id',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeParentId = 'company___childrenContentfulCompanyMainQuoteTextNode___parent___id',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeParentChildren = 'company___childrenContentfulCompanyMainQuoteTextNode___parent___children',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildren = 'company___childrenContentfulCompanyMainQuoteTextNode___children',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenId = 'company___childrenContentfulCompanyMainQuoteTextNode___children___id',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenChildren = 'company___childrenContentfulCompanyMainQuoteTextNode___children___children',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeInternalContent = 'company___childrenContentfulCompanyMainQuoteTextNode___internal___content',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeInternalContentDigest = 'company___childrenContentfulCompanyMainQuoteTextNode___internal___contentDigest',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeInternalDescription = 'company___childrenContentfulCompanyMainQuoteTextNode___internal___description',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeInternalFieldOwners = 'company___childrenContentfulCompanyMainQuoteTextNode___internal___fieldOwners',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeInternalIgnoreType = 'company___childrenContentfulCompanyMainQuoteTextNode___internal___ignoreType',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeInternalMediaType = 'company___childrenContentfulCompanyMainQuoteTextNode___internal___mediaType',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeInternalOwner = 'company___childrenContentfulCompanyMainQuoteTextNode___internal___owner',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeInternalType = 'company___childrenContentfulCompanyMainQuoteTextNode___internal___type',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeMainQuote = 'company___childrenContentfulCompanyMainQuoteTextNode___mainQuote',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeSysType = 'company___childrenContentfulCompanyMainQuoteTextNode___sys___type',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenMdx = 'company___childrenContentfulCompanyMainQuoteTextNode___childrenMdx',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxRawBody = 'company___childrenContentfulCompanyMainQuoteTextNode___childrenMdx___rawBody',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxFileAbsolutePath = 'company___childrenContentfulCompanyMainQuoteTextNode___childrenMdx___fileAbsolutePath',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxSlug = 'company___childrenContentfulCompanyMainQuoteTextNode___childrenMdx___slug',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxBody = 'company___childrenContentfulCompanyMainQuoteTextNode___childrenMdx___body',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxExcerpt = 'company___childrenContentfulCompanyMainQuoteTextNode___childrenMdx___excerpt',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxHeadings = 'company___childrenContentfulCompanyMainQuoteTextNode___childrenMdx___headings',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxHtml = 'company___childrenContentfulCompanyMainQuoteTextNode___childrenMdx___html',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxMdxAst = 'company___childrenContentfulCompanyMainQuoteTextNode___childrenMdx___mdxAST',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxTableOfContents = 'company___childrenContentfulCompanyMainQuoteTextNode___childrenMdx___tableOfContents',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxTimeToRead = 'company___childrenContentfulCompanyMainQuoteTextNode___childrenMdx___timeToRead',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxId = 'company___childrenContentfulCompanyMainQuoteTextNode___childrenMdx___id',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildrenMdxChildren = 'company___childrenContentfulCompanyMainQuoteTextNode___childrenMdx___children',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildMdxRawBody = 'company___childrenContentfulCompanyMainQuoteTextNode___childMdx___rawBody',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildMdxFileAbsolutePath = 'company___childrenContentfulCompanyMainQuoteTextNode___childMdx___fileAbsolutePath',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildMdxSlug = 'company___childrenContentfulCompanyMainQuoteTextNode___childMdx___slug',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildMdxBody = 'company___childrenContentfulCompanyMainQuoteTextNode___childMdx___body',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildMdxExcerpt = 'company___childrenContentfulCompanyMainQuoteTextNode___childMdx___excerpt',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildMdxHeadings = 'company___childrenContentfulCompanyMainQuoteTextNode___childMdx___headings',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildMdxHtml = 'company___childrenContentfulCompanyMainQuoteTextNode___childMdx___html',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildMdxMdxAst = 'company___childrenContentfulCompanyMainQuoteTextNode___childMdx___mdxAST',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildMdxTableOfContents = 'company___childrenContentfulCompanyMainQuoteTextNode___childMdx___tableOfContents',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildMdxTimeToRead = 'company___childrenContentfulCompanyMainQuoteTextNode___childMdx___timeToRead',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildMdxId = 'company___childrenContentfulCompanyMainQuoteTextNode___childMdx___id',
  CompanyChildrenContentfulCompanyMainQuoteTextNodeChildMdxChildren = 'company___childrenContentfulCompanyMainQuoteTextNode___childMdx___children',
  CompanyChildContentfulCompanyMainQuoteTextNodeId = 'company___childContentfulCompanyMainQuoteTextNode___id',
  CompanyChildContentfulCompanyMainQuoteTextNodeParentId = 'company___childContentfulCompanyMainQuoteTextNode___parent___id',
  CompanyChildContentfulCompanyMainQuoteTextNodeParentChildren = 'company___childContentfulCompanyMainQuoteTextNode___parent___children',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildren = 'company___childContentfulCompanyMainQuoteTextNode___children',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenId = 'company___childContentfulCompanyMainQuoteTextNode___children___id',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenChildren = 'company___childContentfulCompanyMainQuoteTextNode___children___children',
  CompanyChildContentfulCompanyMainQuoteTextNodeInternalContent = 'company___childContentfulCompanyMainQuoteTextNode___internal___content',
  CompanyChildContentfulCompanyMainQuoteTextNodeInternalContentDigest = 'company___childContentfulCompanyMainQuoteTextNode___internal___contentDigest',
  CompanyChildContentfulCompanyMainQuoteTextNodeInternalDescription = 'company___childContentfulCompanyMainQuoteTextNode___internal___description',
  CompanyChildContentfulCompanyMainQuoteTextNodeInternalFieldOwners = 'company___childContentfulCompanyMainQuoteTextNode___internal___fieldOwners',
  CompanyChildContentfulCompanyMainQuoteTextNodeInternalIgnoreType = 'company___childContentfulCompanyMainQuoteTextNode___internal___ignoreType',
  CompanyChildContentfulCompanyMainQuoteTextNodeInternalMediaType = 'company___childContentfulCompanyMainQuoteTextNode___internal___mediaType',
  CompanyChildContentfulCompanyMainQuoteTextNodeInternalOwner = 'company___childContentfulCompanyMainQuoteTextNode___internal___owner',
  CompanyChildContentfulCompanyMainQuoteTextNodeInternalType = 'company___childContentfulCompanyMainQuoteTextNode___internal___type',
  CompanyChildContentfulCompanyMainQuoteTextNodeMainQuote = 'company___childContentfulCompanyMainQuoteTextNode___mainQuote',
  CompanyChildContentfulCompanyMainQuoteTextNodeSysType = 'company___childContentfulCompanyMainQuoteTextNode___sys___type',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenMdx = 'company___childContentfulCompanyMainQuoteTextNode___childrenMdx',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenMdxRawBody = 'company___childContentfulCompanyMainQuoteTextNode___childrenMdx___rawBody',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenMdxFileAbsolutePath = 'company___childContentfulCompanyMainQuoteTextNode___childrenMdx___fileAbsolutePath',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenMdxSlug = 'company___childContentfulCompanyMainQuoteTextNode___childrenMdx___slug',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenMdxBody = 'company___childContentfulCompanyMainQuoteTextNode___childrenMdx___body',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenMdxExcerpt = 'company___childContentfulCompanyMainQuoteTextNode___childrenMdx___excerpt',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenMdxHeadings = 'company___childContentfulCompanyMainQuoteTextNode___childrenMdx___headings',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenMdxHtml = 'company___childContentfulCompanyMainQuoteTextNode___childrenMdx___html',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenMdxMdxAst = 'company___childContentfulCompanyMainQuoteTextNode___childrenMdx___mdxAST',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenMdxTableOfContents = 'company___childContentfulCompanyMainQuoteTextNode___childrenMdx___tableOfContents',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenMdxTimeToRead = 'company___childContentfulCompanyMainQuoteTextNode___childrenMdx___timeToRead',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenMdxId = 'company___childContentfulCompanyMainQuoteTextNode___childrenMdx___id',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildrenMdxChildren = 'company___childContentfulCompanyMainQuoteTextNode___childrenMdx___children',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildMdxRawBody = 'company___childContentfulCompanyMainQuoteTextNode___childMdx___rawBody',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildMdxFileAbsolutePath = 'company___childContentfulCompanyMainQuoteTextNode___childMdx___fileAbsolutePath',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildMdxSlug = 'company___childContentfulCompanyMainQuoteTextNode___childMdx___slug',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildMdxBody = 'company___childContentfulCompanyMainQuoteTextNode___childMdx___body',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildMdxExcerpt = 'company___childContentfulCompanyMainQuoteTextNode___childMdx___excerpt',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildMdxHeadings = 'company___childContentfulCompanyMainQuoteTextNode___childMdx___headings',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildMdxHtml = 'company___childContentfulCompanyMainQuoteTextNode___childMdx___html',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildMdxMdxAst = 'company___childContentfulCompanyMainQuoteTextNode___childMdx___mdxAST',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildMdxTableOfContents = 'company___childContentfulCompanyMainQuoteTextNode___childMdx___tableOfContents',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildMdxTimeToRead = 'company___childContentfulCompanyMainQuoteTextNode___childMdx___timeToRead',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildMdxId = 'company___childContentfulCompanyMainQuoteTextNode___childMdx___id',
  CompanyChildContentfulCompanyMainQuoteTextNodeChildMdxChildren = 'company___childContentfulCompanyMainQuoteTextNode___childMdx___children',
  CompanyParentId = 'company___parent___id',
  CompanyParentParentId = 'company___parent___parent___id',
  CompanyParentParentChildren = 'company___parent___parent___children',
  CompanyParentChildren = 'company___parent___children',
  CompanyParentChildrenId = 'company___parent___children___id',
  CompanyParentChildrenChildren = 'company___parent___children___children',
  CompanyParentInternalContent = 'company___parent___internal___content',
  CompanyParentInternalContentDigest = 'company___parent___internal___contentDigest',
  CompanyParentInternalDescription = 'company___parent___internal___description',
  CompanyParentInternalFieldOwners = 'company___parent___internal___fieldOwners',
  CompanyParentInternalIgnoreType = 'company___parent___internal___ignoreType',
  CompanyParentInternalMediaType = 'company___parent___internal___mediaType',
  CompanyParentInternalOwner = 'company___parent___internal___owner',
  CompanyParentInternalType = 'company___parent___internal___type',
  CompanyChildren = 'company___children',
  CompanyChildrenId = 'company___children___id',
  CompanyChildrenParentId = 'company___children___parent___id',
  CompanyChildrenParentChildren = 'company___children___parent___children',
  CompanyChildrenChildren = 'company___children___children',
  CompanyChildrenChildrenId = 'company___children___children___id',
  CompanyChildrenChildrenChildren = 'company___children___children___children',
  CompanyChildrenInternalContent = 'company___children___internal___content',
  CompanyChildrenInternalContentDigest = 'company___children___internal___contentDigest',
  CompanyChildrenInternalDescription = 'company___children___internal___description',
  CompanyChildrenInternalFieldOwners = 'company___children___internal___fieldOwners',
  CompanyChildrenInternalIgnoreType = 'company___children___internal___ignoreType',
  CompanyChildrenInternalMediaType = 'company___children___internal___mediaType',
  CompanyChildrenInternalOwner = 'company___children___internal___owner',
  CompanyChildrenInternalType = 'company___children___internal___type',
  CompanyInternalContent = 'company___internal___content',
  CompanyInternalContentDigest = 'company___internal___contentDigest',
  CompanyInternalDescription = 'company___internal___description',
  CompanyInternalFieldOwners = 'company___internal___fieldOwners',
  CompanyInternalIgnoreType = 'company___internal___ignoreType',
  CompanyInternalMediaType = 'company___internal___mediaType',
  CompanyInternalOwner = 'company___internal___owner',
  CompanyInternalType = 'company___internal___type',
  ContentId = 'content___id',
  ContentParentId = 'content___parent___id',
  ContentParentParentId = 'content___parent___parent___id',
  ContentParentParentChildren = 'content___parent___parent___children',
  ContentParentChildren = 'content___parent___children',
  ContentParentChildrenId = 'content___parent___children___id',
  ContentParentChildrenChildren = 'content___parent___children___children',
  ContentParentInternalContent = 'content___parent___internal___content',
  ContentParentInternalContentDigest = 'content___parent___internal___contentDigest',
  ContentParentInternalDescription = 'content___parent___internal___description',
  ContentParentInternalFieldOwners = 'content___parent___internal___fieldOwners',
  ContentParentInternalIgnoreType = 'content___parent___internal___ignoreType',
  ContentParentInternalMediaType = 'content___parent___internal___mediaType',
  ContentParentInternalOwner = 'content___parent___internal___owner',
  ContentParentInternalType = 'content___parent___internal___type',
  ContentChildren = 'content___children',
  ContentChildrenId = 'content___children___id',
  ContentChildrenParentId = 'content___children___parent___id',
  ContentChildrenParentChildren = 'content___children___parent___children',
  ContentChildrenChildren = 'content___children___children',
  ContentChildrenChildrenId = 'content___children___children___id',
  ContentChildrenChildrenChildren = 'content___children___children___children',
  ContentChildrenInternalContent = 'content___children___internal___content',
  ContentChildrenInternalContentDigest = 'content___children___internal___contentDigest',
  ContentChildrenInternalDescription = 'content___children___internal___description',
  ContentChildrenInternalFieldOwners = 'content___children___internal___fieldOwners',
  ContentChildrenInternalIgnoreType = 'content___children___internal___ignoreType',
  ContentChildrenInternalMediaType = 'content___children___internal___mediaType',
  ContentChildrenInternalOwner = 'content___children___internal___owner',
  ContentChildrenInternalType = 'content___children___internal___type',
  ContentInternalContent = 'content___internal___content',
  ContentInternalContentDigest = 'content___internal___contentDigest',
  ContentInternalDescription = 'content___internal___description',
  ContentInternalFieldOwners = 'content___internal___fieldOwners',
  ContentInternalIgnoreType = 'content___internal___ignoreType',
  ContentInternalMediaType = 'content___internal___mediaType',
  ContentInternalOwner = 'content___internal___owner',
  ContentInternalType = 'content___internal___type',
  ContentContent = 'content___content',
  ContentSysType = 'content___sys___type',
  ContentChildrenMdx = 'content___childrenMdx',
  ContentChildrenMdxRawBody = 'content___childrenMdx___rawBody',
  ContentChildrenMdxFileAbsolutePath = 'content___childrenMdx___fileAbsolutePath',
  ContentChildrenMdxFrontmatterTitle = 'content___childrenMdx___frontmatter___title',
  ContentChildrenMdxSlug = 'content___childrenMdx___slug',
  ContentChildrenMdxBody = 'content___childrenMdx___body',
  ContentChildrenMdxExcerpt = 'content___childrenMdx___excerpt',
  ContentChildrenMdxHeadings = 'content___childrenMdx___headings',
  ContentChildrenMdxHeadingsValue = 'content___childrenMdx___headings___value',
  ContentChildrenMdxHeadingsDepth = 'content___childrenMdx___headings___depth',
  ContentChildrenMdxHtml = 'content___childrenMdx___html',
  ContentChildrenMdxMdxAst = 'content___childrenMdx___mdxAST',
  ContentChildrenMdxTableOfContents = 'content___childrenMdx___tableOfContents',
  ContentChildrenMdxTimeToRead = 'content___childrenMdx___timeToRead',
  ContentChildrenMdxWordCountParagraphs = 'content___childrenMdx___wordCount___paragraphs',
  ContentChildrenMdxWordCountSentences = 'content___childrenMdx___wordCount___sentences',
  ContentChildrenMdxWordCountWords = 'content___childrenMdx___wordCount___words',
  ContentChildrenMdxId = 'content___childrenMdx___id',
  ContentChildrenMdxParentId = 'content___childrenMdx___parent___id',
  ContentChildrenMdxParentChildren = 'content___childrenMdx___parent___children',
  ContentChildrenMdxChildren = 'content___childrenMdx___children',
  ContentChildrenMdxChildrenId = 'content___childrenMdx___children___id',
  ContentChildrenMdxChildrenChildren = 'content___childrenMdx___children___children',
  ContentChildrenMdxInternalContent = 'content___childrenMdx___internal___content',
  ContentChildrenMdxInternalContentDigest = 'content___childrenMdx___internal___contentDigest',
  ContentChildrenMdxInternalDescription = 'content___childrenMdx___internal___description',
  ContentChildrenMdxInternalFieldOwners = 'content___childrenMdx___internal___fieldOwners',
  ContentChildrenMdxInternalIgnoreType = 'content___childrenMdx___internal___ignoreType',
  ContentChildrenMdxInternalMediaType = 'content___childrenMdx___internal___mediaType',
  ContentChildrenMdxInternalOwner = 'content___childrenMdx___internal___owner',
  ContentChildrenMdxInternalType = 'content___childrenMdx___internal___type',
  ContentChildMdxRawBody = 'content___childMdx___rawBody',
  ContentChildMdxFileAbsolutePath = 'content___childMdx___fileAbsolutePath',
  ContentChildMdxFrontmatterTitle = 'content___childMdx___frontmatter___title',
  ContentChildMdxSlug = 'content___childMdx___slug',
  ContentChildMdxBody = 'content___childMdx___body',
  ContentChildMdxExcerpt = 'content___childMdx___excerpt',
  ContentChildMdxHeadings = 'content___childMdx___headings',
  ContentChildMdxHeadingsValue = 'content___childMdx___headings___value',
  ContentChildMdxHeadingsDepth = 'content___childMdx___headings___depth',
  ContentChildMdxHtml = 'content___childMdx___html',
  ContentChildMdxMdxAst = 'content___childMdx___mdxAST',
  ContentChildMdxTableOfContents = 'content___childMdx___tableOfContents',
  ContentChildMdxTimeToRead = 'content___childMdx___timeToRead',
  ContentChildMdxWordCountParagraphs = 'content___childMdx___wordCount___paragraphs',
  ContentChildMdxWordCountSentences = 'content___childMdx___wordCount___sentences',
  ContentChildMdxWordCountWords = 'content___childMdx___wordCount___words',
  ContentChildMdxId = 'content___childMdx___id',
  ContentChildMdxParentId = 'content___childMdx___parent___id',
  ContentChildMdxParentChildren = 'content___childMdx___parent___children',
  ContentChildMdxChildren = 'content___childMdx___children',
  ContentChildMdxChildrenId = 'content___childMdx___children___id',
  ContentChildMdxChildrenChildren = 'content___childMdx___children___children',
  ContentChildMdxInternalContent = 'content___childMdx___internal___content',
  ContentChildMdxInternalContentDigest = 'content___childMdx___internal___contentDigest',
  ContentChildMdxInternalDescription = 'content___childMdx___internal___description',
  ContentChildMdxInternalFieldOwners = 'content___childMdx___internal___fieldOwners',
  ContentChildMdxInternalIgnoreType = 'content___childMdx___internal___ignoreType',
  ContentChildMdxInternalMediaType = 'content___childMdx___internal___mediaType',
  ContentChildMdxInternalOwner = 'content___childMdx___internal___owner',
  ContentChildMdxInternalType = 'content___childMdx___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ChildrenContentfulCustomerStoryContentTextNode = 'childrenContentfulCustomerStoryContentTextNode',
  ChildrenContentfulCustomerStoryContentTextNodeId = 'childrenContentfulCustomerStoryContentTextNode___id',
  ChildrenContentfulCustomerStoryContentTextNodeParentId = 'childrenContentfulCustomerStoryContentTextNode___parent___id',
  ChildrenContentfulCustomerStoryContentTextNodeParentParentId = 'childrenContentfulCustomerStoryContentTextNode___parent___parent___id',
  ChildrenContentfulCustomerStoryContentTextNodeParentParentChildren = 'childrenContentfulCustomerStoryContentTextNode___parent___parent___children',
  ChildrenContentfulCustomerStoryContentTextNodeParentChildren = 'childrenContentfulCustomerStoryContentTextNode___parent___children',
  ChildrenContentfulCustomerStoryContentTextNodeParentChildrenId = 'childrenContentfulCustomerStoryContentTextNode___parent___children___id',
  ChildrenContentfulCustomerStoryContentTextNodeParentChildrenChildren = 'childrenContentfulCustomerStoryContentTextNode___parent___children___children',
  ChildrenContentfulCustomerStoryContentTextNodeParentInternalContent = 'childrenContentfulCustomerStoryContentTextNode___parent___internal___content',
  ChildrenContentfulCustomerStoryContentTextNodeParentInternalContentDigest = 'childrenContentfulCustomerStoryContentTextNode___parent___internal___contentDigest',
  ChildrenContentfulCustomerStoryContentTextNodeParentInternalDescription = 'childrenContentfulCustomerStoryContentTextNode___parent___internal___description',
  ChildrenContentfulCustomerStoryContentTextNodeParentInternalFieldOwners = 'childrenContentfulCustomerStoryContentTextNode___parent___internal___fieldOwners',
  ChildrenContentfulCustomerStoryContentTextNodeParentInternalIgnoreType = 'childrenContentfulCustomerStoryContentTextNode___parent___internal___ignoreType',
  ChildrenContentfulCustomerStoryContentTextNodeParentInternalMediaType = 'childrenContentfulCustomerStoryContentTextNode___parent___internal___mediaType',
  ChildrenContentfulCustomerStoryContentTextNodeParentInternalOwner = 'childrenContentfulCustomerStoryContentTextNode___parent___internal___owner',
  ChildrenContentfulCustomerStoryContentTextNodeParentInternalType = 'childrenContentfulCustomerStoryContentTextNode___parent___internal___type',
  ChildrenContentfulCustomerStoryContentTextNodeChildren = 'childrenContentfulCustomerStoryContentTextNode___children',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenId = 'childrenContentfulCustomerStoryContentTextNode___children___id',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenParentId = 'childrenContentfulCustomerStoryContentTextNode___children___parent___id',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenParentChildren = 'childrenContentfulCustomerStoryContentTextNode___children___parent___children',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenChildren = 'childrenContentfulCustomerStoryContentTextNode___children___children',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenChildrenId = 'childrenContentfulCustomerStoryContentTextNode___children___children___id',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenChildrenChildren = 'childrenContentfulCustomerStoryContentTextNode___children___children___children',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenInternalContent = 'childrenContentfulCustomerStoryContentTextNode___children___internal___content',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenInternalContentDigest = 'childrenContentfulCustomerStoryContentTextNode___children___internal___contentDigest',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenInternalDescription = 'childrenContentfulCustomerStoryContentTextNode___children___internal___description',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenInternalFieldOwners = 'childrenContentfulCustomerStoryContentTextNode___children___internal___fieldOwners',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenInternalIgnoreType = 'childrenContentfulCustomerStoryContentTextNode___children___internal___ignoreType',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenInternalMediaType = 'childrenContentfulCustomerStoryContentTextNode___children___internal___mediaType',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenInternalOwner = 'childrenContentfulCustomerStoryContentTextNode___children___internal___owner',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenInternalType = 'childrenContentfulCustomerStoryContentTextNode___children___internal___type',
  ChildrenContentfulCustomerStoryContentTextNodeInternalContent = 'childrenContentfulCustomerStoryContentTextNode___internal___content',
  ChildrenContentfulCustomerStoryContentTextNodeInternalContentDigest = 'childrenContentfulCustomerStoryContentTextNode___internal___contentDigest',
  ChildrenContentfulCustomerStoryContentTextNodeInternalDescription = 'childrenContentfulCustomerStoryContentTextNode___internal___description',
  ChildrenContentfulCustomerStoryContentTextNodeInternalFieldOwners = 'childrenContentfulCustomerStoryContentTextNode___internal___fieldOwners',
  ChildrenContentfulCustomerStoryContentTextNodeInternalIgnoreType = 'childrenContentfulCustomerStoryContentTextNode___internal___ignoreType',
  ChildrenContentfulCustomerStoryContentTextNodeInternalMediaType = 'childrenContentfulCustomerStoryContentTextNode___internal___mediaType',
  ChildrenContentfulCustomerStoryContentTextNodeInternalOwner = 'childrenContentfulCustomerStoryContentTextNode___internal___owner',
  ChildrenContentfulCustomerStoryContentTextNodeInternalType = 'childrenContentfulCustomerStoryContentTextNode___internal___type',
  ChildrenContentfulCustomerStoryContentTextNodeContent = 'childrenContentfulCustomerStoryContentTextNode___content',
  ChildrenContentfulCustomerStoryContentTextNodeSysType = 'childrenContentfulCustomerStoryContentTextNode___sys___type',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdx = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxRawBody = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___rawBody',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxFileAbsolutePath = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___fileAbsolutePath',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxFrontmatterTitle = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___frontmatter___title',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxSlug = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___slug',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxBody = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___body',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxExcerpt = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___excerpt',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxHeadings = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___headings',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxHeadingsValue = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___headings___value',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxHeadingsDepth = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___headings___depth',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxHtml = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___html',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxMdxAst = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___mdxAST',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxTableOfContents = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___tableOfContents',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxTimeToRead = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___timeToRead',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxWordCountParagraphs = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___wordCount___paragraphs',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxWordCountSentences = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___wordCount___sentences',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxWordCountWords = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___wordCount___words',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxId = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___id',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxParentId = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___parent___id',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxParentChildren = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___parent___children',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxChildren = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___children',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxChildrenId = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___children___id',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxChildrenChildren = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___children___children',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxInternalContent = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___internal___content',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxInternalContentDigest = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___internal___contentDigest',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxInternalDescription = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___internal___description',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxInternalFieldOwners = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___internal___fieldOwners',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxInternalIgnoreType = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___internal___ignoreType',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxInternalMediaType = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___internal___mediaType',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxInternalOwner = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___internal___owner',
  ChildrenContentfulCustomerStoryContentTextNodeChildrenMdxInternalType = 'childrenContentfulCustomerStoryContentTextNode___childrenMdx___internal___type',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxRawBody = 'childrenContentfulCustomerStoryContentTextNode___childMdx___rawBody',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxFileAbsolutePath = 'childrenContentfulCustomerStoryContentTextNode___childMdx___fileAbsolutePath',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxFrontmatterTitle = 'childrenContentfulCustomerStoryContentTextNode___childMdx___frontmatter___title',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxSlug = 'childrenContentfulCustomerStoryContentTextNode___childMdx___slug',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxBody = 'childrenContentfulCustomerStoryContentTextNode___childMdx___body',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxExcerpt = 'childrenContentfulCustomerStoryContentTextNode___childMdx___excerpt',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxHeadings = 'childrenContentfulCustomerStoryContentTextNode___childMdx___headings',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxHeadingsValue = 'childrenContentfulCustomerStoryContentTextNode___childMdx___headings___value',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxHeadingsDepth = 'childrenContentfulCustomerStoryContentTextNode___childMdx___headings___depth',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxHtml = 'childrenContentfulCustomerStoryContentTextNode___childMdx___html',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxMdxAst = 'childrenContentfulCustomerStoryContentTextNode___childMdx___mdxAST',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxTableOfContents = 'childrenContentfulCustomerStoryContentTextNode___childMdx___tableOfContents',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxTimeToRead = 'childrenContentfulCustomerStoryContentTextNode___childMdx___timeToRead',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxWordCountParagraphs = 'childrenContentfulCustomerStoryContentTextNode___childMdx___wordCount___paragraphs',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxWordCountSentences = 'childrenContentfulCustomerStoryContentTextNode___childMdx___wordCount___sentences',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxWordCountWords = 'childrenContentfulCustomerStoryContentTextNode___childMdx___wordCount___words',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxId = 'childrenContentfulCustomerStoryContentTextNode___childMdx___id',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxParentId = 'childrenContentfulCustomerStoryContentTextNode___childMdx___parent___id',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxParentChildren = 'childrenContentfulCustomerStoryContentTextNode___childMdx___parent___children',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxChildren = 'childrenContentfulCustomerStoryContentTextNode___childMdx___children',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxChildrenId = 'childrenContentfulCustomerStoryContentTextNode___childMdx___children___id',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxChildrenChildren = 'childrenContentfulCustomerStoryContentTextNode___childMdx___children___children',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxInternalContent = 'childrenContentfulCustomerStoryContentTextNode___childMdx___internal___content',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxInternalContentDigest = 'childrenContentfulCustomerStoryContentTextNode___childMdx___internal___contentDigest',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxInternalDescription = 'childrenContentfulCustomerStoryContentTextNode___childMdx___internal___description',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxInternalFieldOwners = 'childrenContentfulCustomerStoryContentTextNode___childMdx___internal___fieldOwners',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxInternalIgnoreType = 'childrenContentfulCustomerStoryContentTextNode___childMdx___internal___ignoreType',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxInternalMediaType = 'childrenContentfulCustomerStoryContentTextNode___childMdx___internal___mediaType',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxInternalOwner = 'childrenContentfulCustomerStoryContentTextNode___childMdx___internal___owner',
  ChildrenContentfulCustomerStoryContentTextNodeChildMdxInternalType = 'childrenContentfulCustomerStoryContentTextNode___childMdx___internal___type',
  ChildContentfulCustomerStoryContentTextNodeId = 'childContentfulCustomerStoryContentTextNode___id',
  ChildContentfulCustomerStoryContentTextNodeParentId = 'childContentfulCustomerStoryContentTextNode___parent___id',
  ChildContentfulCustomerStoryContentTextNodeParentParentId = 'childContentfulCustomerStoryContentTextNode___parent___parent___id',
  ChildContentfulCustomerStoryContentTextNodeParentParentChildren = 'childContentfulCustomerStoryContentTextNode___parent___parent___children',
  ChildContentfulCustomerStoryContentTextNodeParentChildren = 'childContentfulCustomerStoryContentTextNode___parent___children',
  ChildContentfulCustomerStoryContentTextNodeParentChildrenId = 'childContentfulCustomerStoryContentTextNode___parent___children___id',
  ChildContentfulCustomerStoryContentTextNodeParentChildrenChildren = 'childContentfulCustomerStoryContentTextNode___parent___children___children',
  ChildContentfulCustomerStoryContentTextNodeParentInternalContent = 'childContentfulCustomerStoryContentTextNode___parent___internal___content',
  ChildContentfulCustomerStoryContentTextNodeParentInternalContentDigest = 'childContentfulCustomerStoryContentTextNode___parent___internal___contentDigest',
  ChildContentfulCustomerStoryContentTextNodeParentInternalDescription = 'childContentfulCustomerStoryContentTextNode___parent___internal___description',
  ChildContentfulCustomerStoryContentTextNodeParentInternalFieldOwners = 'childContentfulCustomerStoryContentTextNode___parent___internal___fieldOwners',
  ChildContentfulCustomerStoryContentTextNodeParentInternalIgnoreType = 'childContentfulCustomerStoryContentTextNode___parent___internal___ignoreType',
  ChildContentfulCustomerStoryContentTextNodeParentInternalMediaType = 'childContentfulCustomerStoryContentTextNode___parent___internal___mediaType',
  ChildContentfulCustomerStoryContentTextNodeParentInternalOwner = 'childContentfulCustomerStoryContentTextNode___parent___internal___owner',
  ChildContentfulCustomerStoryContentTextNodeParentInternalType = 'childContentfulCustomerStoryContentTextNode___parent___internal___type',
  ChildContentfulCustomerStoryContentTextNodeChildren = 'childContentfulCustomerStoryContentTextNode___children',
  ChildContentfulCustomerStoryContentTextNodeChildrenId = 'childContentfulCustomerStoryContentTextNode___children___id',
  ChildContentfulCustomerStoryContentTextNodeChildrenParentId = 'childContentfulCustomerStoryContentTextNode___children___parent___id',
  ChildContentfulCustomerStoryContentTextNodeChildrenParentChildren = 'childContentfulCustomerStoryContentTextNode___children___parent___children',
  ChildContentfulCustomerStoryContentTextNodeChildrenChildren = 'childContentfulCustomerStoryContentTextNode___children___children',
  ChildContentfulCustomerStoryContentTextNodeChildrenChildrenId = 'childContentfulCustomerStoryContentTextNode___children___children___id',
  ChildContentfulCustomerStoryContentTextNodeChildrenChildrenChildren = 'childContentfulCustomerStoryContentTextNode___children___children___children',
  ChildContentfulCustomerStoryContentTextNodeChildrenInternalContent = 'childContentfulCustomerStoryContentTextNode___children___internal___content',
  ChildContentfulCustomerStoryContentTextNodeChildrenInternalContentDigest = 'childContentfulCustomerStoryContentTextNode___children___internal___contentDigest',
  ChildContentfulCustomerStoryContentTextNodeChildrenInternalDescription = 'childContentfulCustomerStoryContentTextNode___children___internal___description',
  ChildContentfulCustomerStoryContentTextNodeChildrenInternalFieldOwners = 'childContentfulCustomerStoryContentTextNode___children___internal___fieldOwners',
  ChildContentfulCustomerStoryContentTextNodeChildrenInternalIgnoreType = 'childContentfulCustomerStoryContentTextNode___children___internal___ignoreType',
  ChildContentfulCustomerStoryContentTextNodeChildrenInternalMediaType = 'childContentfulCustomerStoryContentTextNode___children___internal___mediaType',
  ChildContentfulCustomerStoryContentTextNodeChildrenInternalOwner = 'childContentfulCustomerStoryContentTextNode___children___internal___owner',
  ChildContentfulCustomerStoryContentTextNodeChildrenInternalType = 'childContentfulCustomerStoryContentTextNode___children___internal___type',
  ChildContentfulCustomerStoryContentTextNodeInternalContent = 'childContentfulCustomerStoryContentTextNode___internal___content',
  ChildContentfulCustomerStoryContentTextNodeInternalContentDigest = 'childContentfulCustomerStoryContentTextNode___internal___contentDigest',
  ChildContentfulCustomerStoryContentTextNodeInternalDescription = 'childContentfulCustomerStoryContentTextNode___internal___description',
  ChildContentfulCustomerStoryContentTextNodeInternalFieldOwners = 'childContentfulCustomerStoryContentTextNode___internal___fieldOwners',
  ChildContentfulCustomerStoryContentTextNodeInternalIgnoreType = 'childContentfulCustomerStoryContentTextNode___internal___ignoreType',
  ChildContentfulCustomerStoryContentTextNodeInternalMediaType = 'childContentfulCustomerStoryContentTextNode___internal___mediaType',
  ChildContentfulCustomerStoryContentTextNodeInternalOwner = 'childContentfulCustomerStoryContentTextNode___internal___owner',
  ChildContentfulCustomerStoryContentTextNodeInternalType = 'childContentfulCustomerStoryContentTextNode___internal___type',
  ChildContentfulCustomerStoryContentTextNodeContent = 'childContentfulCustomerStoryContentTextNode___content',
  ChildContentfulCustomerStoryContentTextNodeSysType = 'childContentfulCustomerStoryContentTextNode___sys___type',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdx = 'childContentfulCustomerStoryContentTextNode___childrenMdx',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxRawBody = 'childContentfulCustomerStoryContentTextNode___childrenMdx___rawBody',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxFileAbsolutePath = 'childContentfulCustomerStoryContentTextNode___childrenMdx___fileAbsolutePath',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxFrontmatterTitle = 'childContentfulCustomerStoryContentTextNode___childrenMdx___frontmatter___title',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxSlug = 'childContentfulCustomerStoryContentTextNode___childrenMdx___slug',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxBody = 'childContentfulCustomerStoryContentTextNode___childrenMdx___body',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxExcerpt = 'childContentfulCustomerStoryContentTextNode___childrenMdx___excerpt',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxHeadings = 'childContentfulCustomerStoryContentTextNode___childrenMdx___headings',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxHeadingsValue = 'childContentfulCustomerStoryContentTextNode___childrenMdx___headings___value',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxHeadingsDepth = 'childContentfulCustomerStoryContentTextNode___childrenMdx___headings___depth',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxHtml = 'childContentfulCustomerStoryContentTextNode___childrenMdx___html',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxMdxAst = 'childContentfulCustomerStoryContentTextNode___childrenMdx___mdxAST',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxTableOfContents = 'childContentfulCustomerStoryContentTextNode___childrenMdx___tableOfContents',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxTimeToRead = 'childContentfulCustomerStoryContentTextNode___childrenMdx___timeToRead',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxWordCountParagraphs = 'childContentfulCustomerStoryContentTextNode___childrenMdx___wordCount___paragraphs',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxWordCountSentences = 'childContentfulCustomerStoryContentTextNode___childrenMdx___wordCount___sentences',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxWordCountWords = 'childContentfulCustomerStoryContentTextNode___childrenMdx___wordCount___words',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxId = 'childContentfulCustomerStoryContentTextNode___childrenMdx___id',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxParentId = 'childContentfulCustomerStoryContentTextNode___childrenMdx___parent___id',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxParentChildren = 'childContentfulCustomerStoryContentTextNode___childrenMdx___parent___children',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxChildren = 'childContentfulCustomerStoryContentTextNode___childrenMdx___children',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxChildrenId = 'childContentfulCustomerStoryContentTextNode___childrenMdx___children___id',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxChildrenChildren = 'childContentfulCustomerStoryContentTextNode___childrenMdx___children___children',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxInternalContent = 'childContentfulCustomerStoryContentTextNode___childrenMdx___internal___content',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxInternalContentDigest = 'childContentfulCustomerStoryContentTextNode___childrenMdx___internal___contentDigest',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxInternalDescription = 'childContentfulCustomerStoryContentTextNode___childrenMdx___internal___description',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxInternalFieldOwners = 'childContentfulCustomerStoryContentTextNode___childrenMdx___internal___fieldOwners',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxInternalIgnoreType = 'childContentfulCustomerStoryContentTextNode___childrenMdx___internal___ignoreType',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxInternalMediaType = 'childContentfulCustomerStoryContentTextNode___childrenMdx___internal___mediaType',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxInternalOwner = 'childContentfulCustomerStoryContentTextNode___childrenMdx___internal___owner',
  ChildContentfulCustomerStoryContentTextNodeChildrenMdxInternalType = 'childContentfulCustomerStoryContentTextNode___childrenMdx___internal___type',
  ChildContentfulCustomerStoryContentTextNodeChildMdxRawBody = 'childContentfulCustomerStoryContentTextNode___childMdx___rawBody',
  ChildContentfulCustomerStoryContentTextNodeChildMdxFileAbsolutePath = 'childContentfulCustomerStoryContentTextNode___childMdx___fileAbsolutePath',
  ChildContentfulCustomerStoryContentTextNodeChildMdxFrontmatterTitle = 'childContentfulCustomerStoryContentTextNode___childMdx___frontmatter___title',
  ChildContentfulCustomerStoryContentTextNodeChildMdxSlug = 'childContentfulCustomerStoryContentTextNode___childMdx___slug',
  ChildContentfulCustomerStoryContentTextNodeChildMdxBody = 'childContentfulCustomerStoryContentTextNode___childMdx___body',
  ChildContentfulCustomerStoryContentTextNodeChildMdxExcerpt = 'childContentfulCustomerStoryContentTextNode___childMdx___excerpt',
  ChildContentfulCustomerStoryContentTextNodeChildMdxHeadings = 'childContentfulCustomerStoryContentTextNode___childMdx___headings',
  ChildContentfulCustomerStoryContentTextNodeChildMdxHeadingsValue = 'childContentfulCustomerStoryContentTextNode___childMdx___headings___value',
  ChildContentfulCustomerStoryContentTextNodeChildMdxHeadingsDepth = 'childContentfulCustomerStoryContentTextNode___childMdx___headings___depth',
  ChildContentfulCustomerStoryContentTextNodeChildMdxHtml = 'childContentfulCustomerStoryContentTextNode___childMdx___html',
  ChildContentfulCustomerStoryContentTextNodeChildMdxMdxAst = 'childContentfulCustomerStoryContentTextNode___childMdx___mdxAST',
  ChildContentfulCustomerStoryContentTextNodeChildMdxTableOfContents = 'childContentfulCustomerStoryContentTextNode___childMdx___tableOfContents',
  ChildContentfulCustomerStoryContentTextNodeChildMdxTimeToRead = 'childContentfulCustomerStoryContentTextNode___childMdx___timeToRead',
  ChildContentfulCustomerStoryContentTextNodeChildMdxWordCountParagraphs = 'childContentfulCustomerStoryContentTextNode___childMdx___wordCount___paragraphs',
  ChildContentfulCustomerStoryContentTextNodeChildMdxWordCountSentences = 'childContentfulCustomerStoryContentTextNode___childMdx___wordCount___sentences',
  ChildContentfulCustomerStoryContentTextNodeChildMdxWordCountWords = 'childContentfulCustomerStoryContentTextNode___childMdx___wordCount___words',
  ChildContentfulCustomerStoryContentTextNodeChildMdxId = 'childContentfulCustomerStoryContentTextNode___childMdx___id',
  ChildContentfulCustomerStoryContentTextNodeChildMdxParentId = 'childContentfulCustomerStoryContentTextNode___childMdx___parent___id',
  ChildContentfulCustomerStoryContentTextNodeChildMdxParentChildren = 'childContentfulCustomerStoryContentTextNode___childMdx___parent___children',
  ChildContentfulCustomerStoryContentTextNodeChildMdxChildren = 'childContentfulCustomerStoryContentTextNode___childMdx___children',
  ChildContentfulCustomerStoryContentTextNodeChildMdxChildrenId = 'childContentfulCustomerStoryContentTextNode___childMdx___children___id',
  ChildContentfulCustomerStoryContentTextNodeChildMdxChildrenChildren = 'childContentfulCustomerStoryContentTextNode___childMdx___children___children',
  ChildContentfulCustomerStoryContentTextNodeChildMdxInternalContent = 'childContentfulCustomerStoryContentTextNode___childMdx___internal___content',
  ChildContentfulCustomerStoryContentTextNodeChildMdxInternalContentDigest = 'childContentfulCustomerStoryContentTextNode___childMdx___internal___contentDigest',
  ChildContentfulCustomerStoryContentTextNodeChildMdxInternalDescription = 'childContentfulCustomerStoryContentTextNode___childMdx___internal___description',
  ChildContentfulCustomerStoryContentTextNodeChildMdxInternalFieldOwners = 'childContentfulCustomerStoryContentTextNode___childMdx___internal___fieldOwners',
  ChildContentfulCustomerStoryContentTextNodeChildMdxInternalIgnoreType = 'childContentfulCustomerStoryContentTextNode___childMdx___internal___ignoreType',
  ChildContentfulCustomerStoryContentTextNodeChildMdxInternalMediaType = 'childContentfulCustomerStoryContentTextNode___childMdx___internal___mediaType',
  ChildContentfulCustomerStoryContentTextNodeChildMdxInternalOwner = 'childContentfulCustomerStoryContentTextNode___childMdx___internal___owner',
  ChildContentfulCustomerStoryContentTextNodeChildMdxInternalType = 'childContentfulCustomerStoryContentTextNode___childMdx___internal___type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulCustomerStoryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<ContentfulCompanyFilterInput>;
  content?: Maybe<ContentfulCustomerStoryContentTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCustomerStorySysFilterInput>;
  childrenContentfulCustomerStoryContentTextNode?: Maybe<ContentfulCustomerStoryContentTextNodeFilterListInput>;
  childContentfulCustomerStoryContentTextNode?: Maybe<ContentfulCustomerStoryContentTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulCustomerStoryFilterListInput = {
  elemMatch?: Maybe<ContentfulCustomerStoryFilterInput>;
};

export type ContentfulCustomerStoryGroupConnection = {
  __typename?: 'ContentfulCustomerStoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulCustomerStoryEdge>;
  nodes: Array<ContentfulCustomerStory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulCustomerStorySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulCustomerStoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulCustomerStorySys = {
  __typename?: 'ContentfulCustomerStorySys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulCustomerStorySysContentType>;
};

export type ContentfulCustomerStorySysContentType = {
  __typename?: 'ContentfulCustomerStorySysContentType';
  sys?: Maybe<ContentfulCustomerStorySysContentTypeSys>;
};

export type ContentfulCustomerStorySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulCustomerStorySysContentTypeSysFilterInput>;
};

export type ContentfulCustomerStorySysContentTypeSys = {
  __typename?: 'ContentfulCustomerStorySysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulCustomerStorySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulCustomerStorySysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulCustomerStorySysContentTypeFilterInput>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
};

export type ContentfulEntryConnection = {
  __typename?: 'ContentfulEntryConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  __typename?: 'ContentfulEntryEdge';
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export enum ContentfulEntryFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale'
}

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEntryGroupConnection = {
  __typename?: 'ContentfulEntryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulExternalLogos = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulExternalLogos';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  logos?: Maybe<Array<Maybe<ContentfulAsset>>>;
  signup_page?: Maybe<Array<Maybe<ContentfulSignupPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulExternalLogosSys>;
  front_page?: Maybe<Array<Maybe<ContentfulFrontPage>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulExternalLogosCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulExternalLogosUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulExternalLogosConnection = {
  __typename?: 'ContentfulExternalLogosConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulExternalLogosEdge>;
  nodes: Array<ContentfulExternalLogos>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulExternalLogosGroupConnection>;
};


export type ContentfulExternalLogosConnectionDistinctArgs = {
  field: ContentfulExternalLogosFieldsEnum;
};


export type ContentfulExternalLogosConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulExternalLogosFieldsEnum;
};

export type ContentfulExternalLogosContentfulQuoteContentfulSellingPropositionUnion = ContentfulExternalLogos | ContentfulQuote | ContentfulSellingProposition;

export type ContentfulExternalLogosContentfulSellingPropositionUnion = ContentfulExternalLogos | ContentfulSellingProposition;

export type ContentfulExternalLogosEdge = {
  __typename?: 'ContentfulExternalLogosEdge';
  next?: Maybe<ContentfulExternalLogos>;
  node: ContentfulExternalLogos;
  previous?: Maybe<ContentfulExternalLogos>;
};

export enum ContentfulExternalLogosFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Title = 'title',
  Logos = 'logos',
  LogosContentfulId = 'logos___contentful_id',
  LogosId = 'logos___id',
  LogosSpaceId = 'logos___spaceId',
  LogosCreatedAt = 'logos___createdAt',
  LogosUpdatedAt = 'logos___updatedAt',
  LogosFileUrl = 'logos___file___url',
  LogosFileDetailsSize = 'logos___file___details___size',
  LogosFileFileName = 'logos___file___fileName',
  LogosFileContentType = 'logos___file___contentType',
  LogosFileErrorMessage = 'logos___file___error___message',
  LogosTitle = 'logos___title',
  LogosDescription = 'logos___description',
  LogosNodeLocale = 'logos___node_locale',
  LogosSysType = 'logos___sys___type',
  LogosSysRevision = 'logos___sys___revision',
  LogosLocalFileSourceInstanceName = 'logos___localFile___sourceInstanceName',
  LogosLocalFileAbsolutePath = 'logos___localFile___absolutePath',
  LogosLocalFileRelativePath = 'logos___localFile___relativePath',
  LogosLocalFileExtension = 'logos___localFile___extension',
  LogosLocalFileSize = 'logos___localFile___size',
  LogosLocalFilePrettySize = 'logos___localFile___prettySize',
  LogosLocalFileModifiedTime = 'logos___localFile___modifiedTime',
  LogosLocalFileAccessTime = 'logos___localFile___accessTime',
  LogosLocalFileChangeTime = 'logos___localFile___changeTime',
  LogosLocalFileBirthTime = 'logos___localFile___birthTime',
  LogosLocalFileRoot = 'logos___localFile___root',
  LogosLocalFileDir = 'logos___localFile___dir',
  LogosLocalFileBase = 'logos___localFile___base',
  LogosLocalFileExt = 'logos___localFile___ext',
  LogosLocalFileName = 'logos___localFile___name',
  LogosLocalFileRelativeDirectory = 'logos___localFile___relativeDirectory',
  LogosLocalFileDev = 'logos___localFile___dev',
  LogosLocalFileMode = 'logos___localFile___mode',
  LogosLocalFileNlink = 'logos___localFile___nlink',
  LogosLocalFileUid = 'logos___localFile___uid',
  LogosLocalFileGid = 'logos___localFile___gid',
  LogosLocalFileRdev = 'logos___localFile___rdev',
  LogosLocalFileIno = 'logos___localFile___ino',
  LogosLocalFileAtimeMs = 'logos___localFile___atimeMs',
  LogosLocalFileMtimeMs = 'logos___localFile___mtimeMs',
  LogosLocalFileCtimeMs = 'logos___localFile___ctimeMs',
  LogosLocalFileAtime = 'logos___localFile___atime',
  LogosLocalFileMtime = 'logos___localFile___mtime',
  LogosLocalFileCtime = 'logos___localFile___ctime',
  LogosLocalFileBirthtime = 'logos___localFile___birthtime',
  LogosLocalFileBirthtimeMs = 'logos___localFile___birthtimeMs',
  LogosLocalFileBlksize = 'logos___localFile___blksize',
  LogosLocalFileBlocks = 'logos___localFile___blocks',
  LogosLocalFileUrl = 'logos___localFile___url',
  LogosLocalFilePublicUrl = 'logos___localFile___publicURL',
  LogosLocalFileChildrenImageSharp = 'logos___localFile___childrenImageSharp',
  LogosLocalFileChildrenImageSharpGatsbyImageData = 'logos___localFile___childrenImageSharp___gatsbyImageData',
  LogosLocalFileChildrenImageSharpId = 'logos___localFile___childrenImageSharp___id',
  LogosLocalFileChildrenImageSharpChildren = 'logos___localFile___childrenImageSharp___children',
  LogosLocalFileChildImageSharpGatsbyImageData = 'logos___localFile___childImageSharp___gatsbyImageData',
  LogosLocalFileChildImageSharpId = 'logos___localFile___childImageSharp___id',
  LogosLocalFileChildImageSharpChildren = 'logos___localFile___childImageSharp___children',
  LogosLocalFileId = 'logos___localFile___id',
  LogosLocalFileParentId = 'logos___localFile___parent___id',
  LogosLocalFileParentChildren = 'logos___localFile___parent___children',
  LogosLocalFileChildren = 'logos___localFile___children',
  LogosLocalFileChildrenId = 'logos___localFile___children___id',
  LogosLocalFileChildrenChildren = 'logos___localFile___children___children',
  LogosLocalFileInternalContent = 'logos___localFile___internal___content',
  LogosLocalFileInternalContentDigest = 'logos___localFile___internal___contentDigest',
  LogosLocalFileInternalDescription = 'logos___localFile___internal___description',
  LogosLocalFileInternalFieldOwners = 'logos___localFile___internal___fieldOwners',
  LogosLocalFileInternalIgnoreType = 'logos___localFile___internal___ignoreType',
  LogosLocalFileInternalMediaType = 'logos___localFile___internal___mediaType',
  LogosLocalFileInternalOwner = 'logos___localFile___internal___owner',
  LogosLocalFileInternalType = 'logos___localFile___internal___type',
  LogosFixedBase64 = 'logos___fixed___base64',
  LogosFixedTracedSvg = 'logos___fixed___tracedSVG',
  LogosFixedAspectRatio = 'logos___fixed___aspectRatio',
  LogosFixedWidth = 'logos___fixed___width',
  LogosFixedHeight = 'logos___fixed___height',
  LogosFixedSrc = 'logos___fixed___src',
  LogosFixedSrcSet = 'logos___fixed___srcSet',
  LogosFixedSrcWebp = 'logos___fixed___srcWebp',
  LogosFixedSrcSetWebp = 'logos___fixed___srcSetWebp',
  LogosResolutionsBase64 = 'logos___resolutions___base64',
  LogosResolutionsTracedSvg = 'logos___resolutions___tracedSVG',
  LogosResolutionsAspectRatio = 'logos___resolutions___aspectRatio',
  LogosResolutionsWidth = 'logos___resolutions___width',
  LogosResolutionsHeight = 'logos___resolutions___height',
  LogosResolutionsSrc = 'logos___resolutions___src',
  LogosResolutionsSrcSet = 'logos___resolutions___srcSet',
  LogosResolutionsSrcWebp = 'logos___resolutions___srcWebp',
  LogosResolutionsSrcSetWebp = 'logos___resolutions___srcSetWebp',
  LogosFluidBase64 = 'logos___fluid___base64',
  LogosFluidTracedSvg = 'logos___fluid___tracedSVG',
  LogosFluidAspectRatio = 'logos___fluid___aspectRatio',
  LogosFluidSrc = 'logos___fluid___src',
  LogosFluidSrcSet = 'logos___fluid___srcSet',
  LogosFluidSrcWebp = 'logos___fluid___srcWebp',
  LogosFluidSrcSetWebp = 'logos___fluid___srcSetWebp',
  LogosFluidSizes = 'logos___fluid___sizes',
  LogosSizesBase64 = 'logos___sizes___base64',
  LogosSizesTracedSvg = 'logos___sizes___tracedSVG',
  LogosSizesAspectRatio = 'logos___sizes___aspectRatio',
  LogosSizesSrc = 'logos___sizes___src',
  LogosSizesSrcSet = 'logos___sizes___srcSet',
  LogosSizesSrcWebp = 'logos___sizes___srcWebp',
  LogosSizesSrcSetWebp = 'logos___sizes___srcSetWebp',
  LogosSizesSizes = 'logos___sizes___sizes',
  LogosResizeBase64 = 'logos___resize___base64',
  LogosResizeTracedSvg = 'logos___resize___tracedSVG',
  LogosResizeSrc = 'logos___resize___src',
  LogosResizeWidth = 'logos___resize___width',
  LogosResizeHeight = 'logos___resize___height',
  LogosResizeAspectRatio = 'logos___resize___aspectRatio',
  LogosParentId = 'logos___parent___id',
  LogosParentParentId = 'logos___parent___parent___id',
  LogosParentParentChildren = 'logos___parent___parent___children',
  LogosParentChildren = 'logos___parent___children',
  LogosParentChildrenId = 'logos___parent___children___id',
  LogosParentChildrenChildren = 'logos___parent___children___children',
  LogosParentInternalContent = 'logos___parent___internal___content',
  LogosParentInternalContentDigest = 'logos___parent___internal___contentDigest',
  LogosParentInternalDescription = 'logos___parent___internal___description',
  LogosParentInternalFieldOwners = 'logos___parent___internal___fieldOwners',
  LogosParentInternalIgnoreType = 'logos___parent___internal___ignoreType',
  LogosParentInternalMediaType = 'logos___parent___internal___mediaType',
  LogosParentInternalOwner = 'logos___parent___internal___owner',
  LogosParentInternalType = 'logos___parent___internal___type',
  LogosChildren = 'logos___children',
  LogosChildrenId = 'logos___children___id',
  LogosChildrenParentId = 'logos___children___parent___id',
  LogosChildrenParentChildren = 'logos___children___parent___children',
  LogosChildrenChildren = 'logos___children___children',
  LogosChildrenChildrenId = 'logos___children___children___id',
  LogosChildrenChildrenChildren = 'logos___children___children___children',
  LogosChildrenInternalContent = 'logos___children___internal___content',
  LogosChildrenInternalContentDigest = 'logos___children___internal___contentDigest',
  LogosChildrenInternalDescription = 'logos___children___internal___description',
  LogosChildrenInternalFieldOwners = 'logos___children___internal___fieldOwners',
  LogosChildrenInternalIgnoreType = 'logos___children___internal___ignoreType',
  LogosChildrenInternalMediaType = 'logos___children___internal___mediaType',
  LogosChildrenInternalOwner = 'logos___children___internal___owner',
  LogosChildrenInternalType = 'logos___children___internal___type',
  LogosInternalContent = 'logos___internal___content',
  LogosInternalContentDigest = 'logos___internal___contentDigest',
  LogosInternalDescription = 'logos___internal___description',
  LogosInternalFieldOwners = 'logos___internal___fieldOwners',
  LogosInternalIgnoreType = 'logos___internal___ignoreType',
  LogosInternalMediaType = 'logos___internal___mediaType',
  LogosInternalOwner = 'logos___internal___owner',
  LogosInternalType = 'logos___internal___type',
  SignupPage = 'signup_page',
  SignupPageContentfulId = 'signup_page___contentful_id',
  SignupPageId = 'signup_page___id',
  SignupPageNodeLocale = 'signup_page___node_locale',
  SignupPageSlug = 'signup_page___slug',
  SignupPageTitle = 'signup_page___title',
  SignupPageDescription = 'signup_page___description',
  SignupPageFormTitle = 'signup_page___formTitle',
  SignupPageFormButtonText = 'signup_page___formButtonText',
  SignupPageSpaceId = 'signup_page___spaceId',
  SignupPageCreatedAt = 'signup_page___createdAt',
  SignupPageUpdatedAt = 'signup_page___updatedAt',
  SignupPageSysType = 'signup_page___sys___type',
  SignupPageSysRevision = 'signup_page___sys___revision',
  SignupPageType = 'signup_page___type',
  SignupPageParentId = 'signup_page___parent___id',
  SignupPageParentParentId = 'signup_page___parent___parent___id',
  SignupPageParentParentChildren = 'signup_page___parent___parent___children',
  SignupPageParentChildren = 'signup_page___parent___children',
  SignupPageParentChildrenId = 'signup_page___parent___children___id',
  SignupPageParentChildrenChildren = 'signup_page___parent___children___children',
  SignupPageParentInternalContent = 'signup_page___parent___internal___content',
  SignupPageParentInternalContentDigest = 'signup_page___parent___internal___contentDigest',
  SignupPageParentInternalDescription = 'signup_page___parent___internal___description',
  SignupPageParentInternalFieldOwners = 'signup_page___parent___internal___fieldOwners',
  SignupPageParentInternalIgnoreType = 'signup_page___parent___internal___ignoreType',
  SignupPageParentInternalMediaType = 'signup_page___parent___internal___mediaType',
  SignupPageParentInternalOwner = 'signup_page___parent___internal___owner',
  SignupPageParentInternalType = 'signup_page___parent___internal___type',
  SignupPageChildren = 'signup_page___children',
  SignupPageChildrenId = 'signup_page___children___id',
  SignupPageChildrenParentId = 'signup_page___children___parent___id',
  SignupPageChildrenParentChildren = 'signup_page___children___parent___children',
  SignupPageChildrenChildren = 'signup_page___children___children',
  SignupPageChildrenChildrenId = 'signup_page___children___children___id',
  SignupPageChildrenChildrenChildren = 'signup_page___children___children___children',
  SignupPageChildrenInternalContent = 'signup_page___children___internal___content',
  SignupPageChildrenInternalContentDigest = 'signup_page___children___internal___contentDigest',
  SignupPageChildrenInternalDescription = 'signup_page___children___internal___description',
  SignupPageChildrenInternalFieldOwners = 'signup_page___children___internal___fieldOwners',
  SignupPageChildrenInternalIgnoreType = 'signup_page___children___internal___ignoreType',
  SignupPageChildrenInternalMediaType = 'signup_page___children___internal___mediaType',
  SignupPageChildrenInternalOwner = 'signup_page___children___internal___owner',
  SignupPageChildrenInternalType = 'signup_page___children___internal___type',
  SignupPageInternalContent = 'signup_page___internal___content',
  SignupPageInternalContentDigest = 'signup_page___internal___contentDigest',
  SignupPageInternalDescription = 'signup_page___internal___description',
  SignupPageInternalFieldOwners = 'signup_page___internal___fieldOwners',
  SignupPageInternalIgnoreType = 'signup_page___internal___ignoreType',
  SignupPageInternalMediaType = 'signup_page___internal___mediaType',
  SignupPageInternalOwner = 'signup_page___internal___owner',
  SignupPageInternalType = 'signup_page___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  FrontPage = 'front_page',
  FrontPageContentfulId = 'front_page___contentful_id',
  FrontPageId = 'front_page___id',
  FrontPageNodeLocale = 'front_page___node_locale',
  FrontPageTitle = 'front_page___title',
  FrontPageMainHeader = 'front_page___mainHeader',
  FrontPageDescription = 'front_page___description',
  FrontPageBannerImageContentfulId = 'front_page___bannerImage___contentful_id',
  FrontPageBannerImageId = 'front_page___bannerImage___id',
  FrontPageBannerImageSpaceId = 'front_page___bannerImage___spaceId',
  FrontPageBannerImageCreatedAt = 'front_page___bannerImage___createdAt',
  FrontPageBannerImageUpdatedAt = 'front_page___bannerImage___updatedAt',
  FrontPageBannerImageFileUrl = 'front_page___bannerImage___file___url',
  FrontPageBannerImageFileFileName = 'front_page___bannerImage___file___fileName',
  FrontPageBannerImageFileContentType = 'front_page___bannerImage___file___contentType',
  FrontPageBannerImageTitle = 'front_page___bannerImage___title',
  FrontPageBannerImageDescription = 'front_page___bannerImage___description',
  FrontPageBannerImageNodeLocale = 'front_page___bannerImage___node_locale',
  FrontPageBannerImageSysType = 'front_page___bannerImage___sys___type',
  FrontPageBannerImageSysRevision = 'front_page___bannerImage___sys___revision',
  FrontPageBannerImageLocalFileSourceInstanceName = 'front_page___bannerImage___localFile___sourceInstanceName',
  FrontPageBannerImageLocalFileAbsolutePath = 'front_page___bannerImage___localFile___absolutePath',
  FrontPageBannerImageLocalFileRelativePath = 'front_page___bannerImage___localFile___relativePath',
  FrontPageBannerImageLocalFileExtension = 'front_page___bannerImage___localFile___extension',
  FrontPageBannerImageLocalFileSize = 'front_page___bannerImage___localFile___size',
  FrontPageBannerImageLocalFilePrettySize = 'front_page___bannerImage___localFile___prettySize',
  FrontPageBannerImageLocalFileModifiedTime = 'front_page___bannerImage___localFile___modifiedTime',
  FrontPageBannerImageLocalFileAccessTime = 'front_page___bannerImage___localFile___accessTime',
  FrontPageBannerImageLocalFileChangeTime = 'front_page___bannerImage___localFile___changeTime',
  FrontPageBannerImageLocalFileBirthTime = 'front_page___bannerImage___localFile___birthTime',
  FrontPageBannerImageLocalFileRoot = 'front_page___bannerImage___localFile___root',
  FrontPageBannerImageLocalFileDir = 'front_page___bannerImage___localFile___dir',
  FrontPageBannerImageLocalFileBase = 'front_page___bannerImage___localFile___base',
  FrontPageBannerImageLocalFileExt = 'front_page___bannerImage___localFile___ext',
  FrontPageBannerImageLocalFileName = 'front_page___bannerImage___localFile___name',
  FrontPageBannerImageLocalFileRelativeDirectory = 'front_page___bannerImage___localFile___relativeDirectory',
  FrontPageBannerImageLocalFileDev = 'front_page___bannerImage___localFile___dev',
  FrontPageBannerImageLocalFileMode = 'front_page___bannerImage___localFile___mode',
  FrontPageBannerImageLocalFileNlink = 'front_page___bannerImage___localFile___nlink',
  FrontPageBannerImageLocalFileUid = 'front_page___bannerImage___localFile___uid',
  FrontPageBannerImageLocalFileGid = 'front_page___bannerImage___localFile___gid',
  FrontPageBannerImageLocalFileRdev = 'front_page___bannerImage___localFile___rdev',
  FrontPageBannerImageLocalFileIno = 'front_page___bannerImage___localFile___ino',
  FrontPageBannerImageLocalFileAtimeMs = 'front_page___bannerImage___localFile___atimeMs',
  FrontPageBannerImageLocalFileMtimeMs = 'front_page___bannerImage___localFile___mtimeMs',
  FrontPageBannerImageLocalFileCtimeMs = 'front_page___bannerImage___localFile___ctimeMs',
  FrontPageBannerImageLocalFileAtime = 'front_page___bannerImage___localFile___atime',
  FrontPageBannerImageLocalFileMtime = 'front_page___bannerImage___localFile___mtime',
  FrontPageBannerImageLocalFileCtime = 'front_page___bannerImage___localFile___ctime',
  FrontPageBannerImageLocalFileBirthtime = 'front_page___bannerImage___localFile___birthtime',
  FrontPageBannerImageLocalFileBirthtimeMs = 'front_page___bannerImage___localFile___birthtimeMs',
  FrontPageBannerImageLocalFileBlksize = 'front_page___bannerImage___localFile___blksize',
  FrontPageBannerImageLocalFileBlocks = 'front_page___bannerImage___localFile___blocks',
  FrontPageBannerImageLocalFileUrl = 'front_page___bannerImage___localFile___url',
  FrontPageBannerImageLocalFilePublicUrl = 'front_page___bannerImage___localFile___publicURL',
  FrontPageBannerImageLocalFileChildrenImageSharp = 'front_page___bannerImage___localFile___childrenImageSharp',
  FrontPageBannerImageLocalFileId = 'front_page___bannerImage___localFile___id',
  FrontPageBannerImageLocalFileChildren = 'front_page___bannerImage___localFile___children',
  FrontPageBannerImageFixedBase64 = 'front_page___bannerImage___fixed___base64',
  FrontPageBannerImageFixedTracedSvg = 'front_page___bannerImage___fixed___tracedSVG',
  FrontPageBannerImageFixedAspectRatio = 'front_page___bannerImage___fixed___aspectRatio',
  FrontPageBannerImageFixedWidth = 'front_page___bannerImage___fixed___width',
  FrontPageBannerImageFixedHeight = 'front_page___bannerImage___fixed___height',
  FrontPageBannerImageFixedSrc = 'front_page___bannerImage___fixed___src',
  FrontPageBannerImageFixedSrcSet = 'front_page___bannerImage___fixed___srcSet',
  FrontPageBannerImageFixedSrcWebp = 'front_page___bannerImage___fixed___srcWebp',
  FrontPageBannerImageFixedSrcSetWebp = 'front_page___bannerImage___fixed___srcSetWebp',
  FrontPageBannerImageResolutionsBase64 = 'front_page___bannerImage___resolutions___base64',
  FrontPageBannerImageResolutionsTracedSvg = 'front_page___bannerImage___resolutions___tracedSVG',
  FrontPageBannerImageResolutionsAspectRatio = 'front_page___bannerImage___resolutions___aspectRatio',
  FrontPageBannerImageResolutionsWidth = 'front_page___bannerImage___resolutions___width',
  FrontPageBannerImageResolutionsHeight = 'front_page___bannerImage___resolutions___height',
  FrontPageBannerImageResolutionsSrc = 'front_page___bannerImage___resolutions___src',
  FrontPageBannerImageResolutionsSrcSet = 'front_page___bannerImage___resolutions___srcSet',
  FrontPageBannerImageResolutionsSrcWebp = 'front_page___bannerImage___resolutions___srcWebp',
  FrontPageBannerImageResolutionsSrcSetWebp = 'front_page___bannerImage___resolutions___srcSetWebp',
  FrontPageBannerImageFluidBase64 = 'front_page___bannerImage___fluid___base64',
  FrontPageBannerImageFluidTracedSvg = 'front_page___bannerImage___fluid___tracedSVG',
  FrontPageBannerImageFluidAspectRatio = 'front_page___bannerImage___fluid___aspectRatio',
  FrontPageBannerImageFluidSrc = 'front_page___bannerImage___fluid___src',
  FrontPageBannerImageFluidSrcSet = 'front_page___bannerImage___fluid___srcSet',
  FrontPageBannerImageFluidSrcWebp = 'front_page___bannerImage___fluid___srcWebp',
  FrontPageBannerImageFluidSrcSetWebp = 'front_page___bannerImage___fluid___srcSetWebp',
  FrontPageBannerImageFluidSizes = 'front_page___bannerImage___fluid___sizes',
  FrontPageBannerImageSizesBase64 = 'front_page___bannerImage___sizes___base64',
  FrontPageBannerImageSizesTracedSvg = 'front_page___bannerImage___sizes___tracedSVG',
  FrontPageBannerImageSizesAspectRatio = 'front_page___bannerImage___sizes___aspectRatio',
  FrontPageBannerImageSizesSrc = 'front_page___bannerImage___sizes___src',
  FrontPageBannerImageSizesSrcSet = 'front_page___bannerImage___sizes___srcSet',
  FrontPageBannerImageSizesSrcWebp = 'front_page___bannerImage___sizes___srcWebp',
  FrontPageBannerImageSizesSrcSetWebp = 'front_page___bannerImage___sizes___srcSetWebp',
  FrontPageBannerImageSizesSizes = 'front_page___bannerImage___sizes___sizes',
  FrontPageBannerImageResizeBase64 = 'front_page___bannerImage___resize___base64',
  FrontPageBannerImageResizeTracedSvg = 'front_page___bannerImage___resize___tracedSVG',
  FrontPageBannerImageResizeSrc = 'front_page___bannerImage___resize___src',
  FrontPageBannerImageResizeWidth = 'front_page___bannerImage___resize___width',
  FrontPageBannerImageResizeHeight = 'front_page___bannerImage___resize___height',
  FrontPageBannerImageResizeAspectRatio = 'front_page___bannerImage___resize___aspectRatio',
  FrontPageBannerImageParentId = 'front_page___bannerImage___parent___id',
  FrontPageBannerImageParentChildren = 'front_page___bannerImage___parent___children',
  FrontPageBannerImageChildren = 'front_page___bannerImage___children',
  FrontPageBannerImageChildrenId = 'front_page___bannerImage___children___id',
  FrontPageBannerImageChildrenChildren = 'front_page___bannerImage___children___children',
  FrontPageBannerImageInternalContent = 'front_page___bannerImage___internal___content',
  FrontPageBannerImageInternalContentDigest = 'front_page___bannerImage___internal___contentDigest',
  FrontPageBannerImageInternalDescription = 'front_page___bannerImage___internal___description',
  FrontPageBannerImageInternalFieldOwners = 'front_page___bannerImage___internal___fieldOwners',
  FrontPageBannerImageInternalIgnoreType = 'front_page___bannerImage___internal___ignoreType',
  FrontPageBannerImageInternalMediaType = 'front_page___bannerImage___internal___mediaType',
  FrontPageBannerImageInternalOwner = 'front_page___bannerImage___internal___owner',
  FrontPageBannerImageInternalType = 'front_page___bannerImage___internal___type',
  FrontPageSpaceId = 'front_page___spaceId',
  FrontPageCreatedAt = 'front_page___createdAt',
  FrontPageUpdatedAt = 'front_page___updatedAt',
  FrontPageSysType = 'front_page___sys___type',
  FrontPageSysRevision = 'front_page___sys___revision',
  FrontPageParentId = 'front_page___parent___id',
  FrontPageParentParentId = 'front_page___parent___parent___id',
  FrontPageParentParentChildren = 'front_page___parent___parent___children',
  FrontPageParentChildren = 'front_page___parent___children',
  FrontPageParentChildrenId = 'front_page___parent___children___id',
  FrontPageParentChildrenChildren = 'front_page___parent___children___children',
  FrontPageParentInternalContent = 'front_page___parent___internal___content',
  FrontPageParentInternalContentDigest = 'front_page___parent___internal___contentDigest',
  FrontPageParentInternalDescription = 'front_page___parent___internal___description',
  FrontPageParentInternalFieldOwners = 'front_page___parent___internal___fieldOwners',
  FrontPageParentInternalIgnoreType = 'front_page___parent___internal___ignoreType',
  FrontPageParentInternalMediaType = 'front_page___parent___internal___mediaType',
  FrontPageParentInternalOwner = 'front_page___parent___internal___owner',
  FrontPageParentInternalType = 'front_page___parent___internal___type',
  FrontPageChildren = 'front_page___children',
  FrontPageChildrenId = 'front_page___children___id',
  FrontPageChildrenParentId = 'front_page___children___parent___id',
  FrontPageChildrenParentChildren = 'front_page___children___parent___children',
  FrontPageChildrenChildren = 'front_page___children___children',
  FrontPageChildrenChildrenId = 'front_page___children___children___id',
  FrontPageChildrenChildrenChildren = 'front_page___children___children___children',
  FrontPageChildrenInternalContent = 'front_page___children___internal___content',
  FrontPageChildrenInternalContentDigest = 'front_page___children___internal___contentDigest',
  FrontPageChildrenInternalDescription = 'front_page___children___internal___description',
  FrontPageChildrenInternalFieldOwners = 'front_page___children___internal___fieldOwners',
  FrontPageChildrenInternalIgnoreType = 'front_page___children___internal___ignoreType',
  FrontPageChildrenInternalMediaType = 'front_page___children___internal___mediaType',
  FrontPageChildrenInternalOwner = 'front_page___children___internal___owner',
  FrontPageChildrenInternalType = 'front_page___children___internal___type',
  FrontPageInternalContent = 'front_page___internal___content',
  FrontPageInternalContentDigest = 'front_page___internal___contentDigest',
  FrontPageInternalDescription = 'front_page___internal___description',
  FrontPageInternalFieldOwners = 'front_page___internal___fieldOwners',
  FrontPageInternalIgnoreType = 'front_page___internal___ignoreType',
  FrontPageInternalMediaType = 'front_page___internal___mediaType',
  FrontPageInternalOwner = 'front_page___internal___owner',
  FrontPageInternalType = 'front_page___internal___type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulExternalLogosFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  logos?: Maybe<ContentfulAssetFilterListInput>;
  signup_page?: Maybe<ContentfulSignupPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulExternalLogosSysFilterInput>;
  front_page?: Maybe<ContentfulFrontPageFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulExternalLogosGroupConnection = {
  __typename?: 'ContentfulExternalLogosGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulExternalLogosEdge>;
  nodes: Array<ContentfulExternalLogos>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulExternalLogosSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulExternalLogosFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulExternalLogosSys = {
  __typename?: 'ContentfulExternalLogosSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulExternalLogosSysContentType>;
};

export type ContentfulExternalLogosSysContentType = {
  __typename?: 'ContentfulExternalLogosSysContentType';
  sys?: Maybe<ContentfulExternalLogosSysContentTypeSys>;
};

export type ContentfulExternalLogosSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulExternalLogosSysContentTypeSysFilterInput>;
};

export type ContentfulExternalLogosSysContentTypeSys = {
  __typename?: 'ContentfulExternalLogosSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulExternalLogosSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulExternalLogosSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulExternalLogosSysContentTypeFilterInput>;
};

export type ContentfulFeature = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulFeature';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Array<Maybe<Scalars['String']>>>;
  image?: Maybe<ContentfulAsset>;
  feature_page?: Maybe<Array<Maybe<ContentfulFeaturePage>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulFeatureSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulFeatureCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulFeatureUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulFeatureConnection = {
  __typename?: 'ContentfulFeatureConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFeatureEdge>;
  nodes: Array<ContentfulFeature>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulFeatureGroupConnection>;
};


export type ContentfulFeatureConnectionDistinctArgs = {
  field: ContentfulFeatureFieldsEnum;
};


export type ContentfulFeatureConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulFeatureFieldsEnum;
};

export type ContentfulFeatureEdge = {
  __typename?: 'ContentfulFeatureEdge';
  next?: Maybe<ContentfulFeature>;
  node: ContentfulFeature;
  previous?: Maybe<ContentfulFeature>;
};

export enum ContentfulFeatureFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Title = 'title',
  Description = 'description',
  ImageContentfulId = 'image___contentful_id',
  ImageId = 'image___id',
  ImageSpaceId = 'image___spaceId',
  ImageCreatedAt = 'image___createdAt',
  ImageUpdatedAt = 'image___updatedAt',
  ImageFileUrl = 'image___file___url',
  ImageFileDetailsSize = 'image___file___details___size',
  ImageFileFileName = 'image___file___fileName',
  ImageFileContentType = 'image___file___contentType',
  ImageFileErrorMessage = 'image___file___error___message',
  ImageTitle = 'image___title',
  ImageDescription = 'image___description',
  ImageNodeLocale = 'image___node_locale',
  ImageSysType = 'image___sys___type',
  ImageSysRevision = 'image___sys___revision',
  ImageLocalFileSourceInstanceName = 'image___localFile___sourceInstanceName',
  ImageLocalFileAbsolutePath = 'image___localFile___absolutePath',
  ImageLocalFileRelativePath = 'image___localFile___relativePath',
  ImageLocalFileExtension = 'image___localFile___extension',
  ImageLocalFileSize = 'image___localFile___size',
  ImageLocalFilePrettySize = 'image___localFile___prettySize',
  ImageLocalFileModifiedTime = 'image___localFile___modifiedTime',
  ImageLocalFileAccessTime = 'image___localFile___accessTime',
  ImageLocalFileChangeTime = 'image___localFile___changeTime',
  ImageLocalFileBirthTime = 'image___localFile___birthTime',
  ImageLocalFileRoot = 'image___localFile___root',
  ImageLocalFileDir = 'image___localFile___dir',
  ImageLocalFileBase = 'image___localFile___base',
  ImageLocalFileExt = 'image___localFile___ext',
  ImageLocalFileName = 'image___localFile___name',
  ImageLocalFileRelativeDirectory = 'image___localFile___relativeDirectory',
  ImageLocalFileDev = 'image___localFile___dev',
  ImageLocalFileMode = 'image___localFile___mode',
  ImageLocalFileNlink = 'image___localFile___nlink',
  ImageLocalFileUid = 'image___localFile___uid',
  ImageLocalFileGid = 'image___localFile___gid',
  ImageLocalFileRdev = 'image___localFile___rdev',
  ImageLocalFileIno = 'image___localFile___ino',
  ImageLocalFileAtimeMs = 'image___localFile___atimeMs',
  ImageLocalFileMtimeMs = 'image___localFile___mtimeMs',
  ImageLocalFileCtimeMs = 'image___localFile___ctimeMs',
  ImageLocalFileAtime = 'image___localFile___atime',
  ImageLocalFileMtime = 'image___localFile___mtime',
  ImageLocalFileCtime = 'image___localFile___ctime',
  ImageLocalFileBirthtime = 'image___localFile___birthtime',
  ImageLocalFileBirthtimeMs = 'image___localFile___birthtimeMs',
  ImageLocalFileBlksize = 'image___localFile___blksize',
  ImageLocalFileBlocks = 'image___localFile___blocks',
  ImageLocalFileUrl = 'image___localFile___url',
  ImageLocalFilePublicUrl = 'image___localFile___publicURL',
  ImageLocalFileChildrenImageSharp = 'image___localFile___childrenImageSharp',
  ImageLocalFileChildrenImageSharpGatsbyImageData = 'image___localFile___childrenImageSharp___gatsbyImageData',
  ImageLocalFileChildrenImageSharpId = 'image___localFile___childrenImageSharp___id',
  ImageLocalFileChildrenImageSharpChildren = 'image___localFile___childrenImageSharp___children',
  ImageLocalFileChildImageSharpGatsbyImageData = 'image___localFile___childImageSharp___gatsbyImageData',
  ImageLocalFileChildImageSharpId = 'image___localFile___childImageSharp___id',
  ImageLocalFileChildImageSharpChildren = 'image___localFile___childImageSharp___children',
  ImageLocalFileId = 'image___localFile___id',
  ImageLocalFileParentId = 'image___localFile___parent___id',
  ImageLocalFileParentChildren = 'image___localFile___parent___children',
  ImageLocalFileChildren = 'image___localFile___children',
  ImageLocalFileChildrenId = 'image___localFile___children___id',
  ImageLocalFileChildrenChildren = 'image___localFile___children___children',
  ImageLocalFileInternalContent = 'image___localFile___internal___content',
  ImageLocalFileInternalContentDigest = 'image___localFile___internal___contentDigest',
  ImageLocalFileInternalDescription = 'image___localFile___internal___description',
  ImageLocalFileInternalFieldOwners = 'image___localFile___internal___fieldOwners',
  ImageLocalFileInternalIgnoreType = 'image___localFile___internal___ignoreType',
  ImageLocalFileInternalMediaType = 'image___localFile___internal___mediaType',
  ImageLocalFileInternalOwner = 'image___localFile___internal___owner',
  ImageLocalFileInternalType = 'image___localFile___internal___type',
  ImageFixedBase64 = 'image___fixed___base64',
  ImageFixedTracedSvg = 'image___fixed___tracedSVG',
  ImageFixedAspectRatio = 'image___fixed___aspectRatio',
  ImageFixedWidth = 'image___fixed___width',
  ImageFixedHeight = 'image___fixed___height',
  ImageFixedSrc = 'image___fixed___src',
  ImageFixedSrcSet = 'image___fixed___srcSet',
  ImageFixedSrcWebp = 'image___fixed___srcWebp',
  ImageFixedSrcSetWebp = 'image___fixed___srcSetWebp',
  ImageResolutionsBase64 = 'image___resolutions___base64',
  ImageResolutionsTracedSvg = 'image___resolutions___tracedSVG',
  ImageResolutionsAspectRatio = 'image___resolutions___aspectRatio',
  ImageResolutionsWidth = 'image___resolutions___width',
  ImageResolutionsHeight = 'image___resolutions___height',
  ImageResolutionsSrc = 'image___resolutions___src',
  ImageResolutionsSrcSet = 'image___resolutions___srcSet',
  ImageResolutionsSrcWebp = 'image___resolutions___srcWebp',
  ImageResolutionsSrcSetWebp = 'image___resolutions___srcSetWebp',
  ImageFluidBase64 = 'image___fluid___base64',
  ImageFluidTracedSvg = 'image___fluid___tracedSVG',
  ImageFluidAspectRatio = 'image___fluid___aspectRatio',
  ImageFluidSrc = 'image___fluid___src',
  ImageFluidSrcSet = 'image___fluid___srcSet',
  ImageFluidSrcWebp = 'image___fluid___srcWebp',
  ImageFluidSrcSetWebp = 'image___fluid___srcSetWebp',
  ImageFluidSizes = 'image___fluid___sizes',
  ImageSizesBase64 = 'image___sizes___base64',
  ImageSizesTracedSvg = 'image___sizes___tracedSVG',
  ImageSizesAspectRatio = 'image___sizes___aspectRatio',
  ImageSizesSrc = 'image___sizes___src',
  ImageSizesSrcSet = 'image___sizes___srcSet',
  ImageSizesSrcWebp = 'image___sizes___srcWebp',
  ImageSizesSrcSetWebp = 'image___sizes___srcSetWebp',
  ImageSizesSizes = 'image___sizes___sizes',
  ImageResizeBase64 = 'image___resize___base64',
  ImageResizeTracedSvg = 'image___resize___tracedSVG',
  ImageResizeSrc = 'image___resize___src',
  ImageResizeWidth = 'image___resize___width',
  ImageResizeHeight = 'image___resize___height',
  ImageResizeAspectRatio = 'image___resize___aspectRatio',
  ImageParentId = 'image___parent___id',
  ImageParentParentId = 'image___parent___parent___id',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageChildren = 'image___children',
  ImageChildrenId = 'image___children___id',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  FeaturePage = 'feature_page',
  FeaturePageContentfulId = 'feature_page___contentful_id',
  FeaturePageId = 'feature_page___id',
  FeaturePageNodeLocale = 'feature_page___node_locale',
  FeaturePageSlug = 'feature_page___slug',
  FeaturePageTitle = 'feature_page___title',
  FeaturePageDescription = 'feature_page___description',
  FeaturePageStartOnRight = 'feature_page___startOnRight',
  FeaturePageFeatures = 'feature_page___features',
  FeaturePageFeaturesContentfulId = 'feature_page___features___contentful_id',
  FeaturePageFeaturesId = 'feature_page___features___id',
  FeaturePageFeaturesNodeLocale = 'feature_page___features___node_locale',
  FeaturePageFeaturesTitle = 'feature_page___features___title',
  FeaturePageFeaturesDescription = 'feature_page___features___description',
  FeaturePageFeaturesImageContentfulId = 'feature_page___features___image___contentful_id',
  FeaturePageFeaturesImageId = 'feature_page___features___image___id',
  FeaturePageFeaturesImageSpaceId = 'feature_page___features___image___spaceId',
  FeaturePageFeaturesImageCreatedAt = 'feature_page___features___image___createdAt',
  FeaturePageFeaturesImageUpdatedAt = 'feature_page___features___image___updatedAt',
  FeaturePageFeaturesImageTitle = 'feature_page___features___image___title',
  FeaturePageFeaturesImageDescription = 'feature_page___features___image___description',
  FeaturePageFeaturesImageNodeLocale = 'feature_page___features___image___node_locale',
  FeaturePageFeaturesImageChildren = 'feature_page___features___image___children',
  FeaturePageFeaturesFeaturePage = 'feature_page___features___feature_page',
  FeaturePageFeaturesFeaturePageContentfulId = 'feature_page___features___feature_page___contentful_id',
  FeaturePageFeaturesFeaturePageId = 'feature_page___features___feature_page___id',
  FeaturePageFeaturesFeaturePageNodeLocale = 'feature_page___features___feature_page___node_locale',
  FeaturePageFeaturesFeaturePageSlug = 'feature_page___features___feature_page___slug',
  FeaturePageFeaturesFeaturePageTitle = 'feature_page___features___feature_page___title',
  FeaturePageFeaturesFeaturePageDescription = 'feature_page___features___feature_page___description',
  FeaturePageFeaturesFeaturePageStartOnRight = 'feature_page___features___feature_page___startOnRight',
  FeaturePageFeaturesFeaturePageFeatures = 'feature_page___features___feature_page___features',
  FeaturePageFeaturesFeaturePageSpaceId = 'feature_page___features___feature_page___spaceId',
  FeaturePageFeaturesFeaturePageCreatedAt = 'feature_page___features___feature_page___createdAt',
  FeaturePageFeaturesFeaturePageUpdatedAt = 'feature_page___features___feature_page___updatedAt',
  FeaturePageFeaturesFeaturePageChildren = 'feature_page___features___feature_page___children',
  FeaturePageFeaturesSpaceId = 'feature_page___features___spaceId',
  FeaturePageFeaturesCreatedAt = 'feature_page___features___createdAt',
  FeaturePageFeaturesUpdatedAt = 'feature_page___features___updatedAt',
  FeaturePageFeaturesSysType = 'feature_page___features___sys___type',
  FeaturePageFeaturesSysRevision = 'feature_page___features___sys___revision',
  FeaturePageFeaturesParentId = 'feature_page___features___parent___id',
  FeaturePageFeaturesParentChildren = 'feature_page___features___parent___children',
  FeaturePageFeaturesChildren = 'feature_page___features___children',
  FeaturePageFeaturesChildrenId = 'feature_page___features___children___id',
  FeaturePageFeaturesChildrenChildren = 'feature_page___features___children___children',
  FeaturePageFeaturesInternalContent = 'feature_page___features___internal___content',
  FeaturePageFeaturesInternalContentDigest = 'feature_page___features___internal___contentDigest',
  FeaturePageFeaturesInternalDescription = 'feature_page___features___internal___description',
  FeaturePageFeaturesInternalFieldOwners = 'feature_page___features___internal___fieldOwners',
  FeaturePageFeaturesInternalIgnoreType = 'feature_page___features___internal___ignoreType',
  FeaturePageFeaturesInternalMediaType = 'feature_page___features___internal___mediaType',
  FeaturePageFeaturesInternalOwner = 'feature_page___features___internal___owner',
  FeaturePageFeaturesInternalType = 'feature_page___features___internal___type',
  FeaturePageSpaceId = 'feature_page___spaceId',
  FeaturePageCreatedAt = 'feature_page___createdAt',
  FeaturePageUpdatedAt = 'feature_page___updatedAt',
  FeaturePageSysType = 'feature_page___sys___type',
  FeaturePageSysRevision = 'feature_page___sys___revision',
  FeaturePageParentId = 'feature_page___parent___id',
  FeaturePageParentParentId = 'feature_page___parent___parent___id',
  FeaturePageParentParentChildren = 'feature_page___parent___parent___children',
  FeaturePageParentChildren = 'feature_page___parent___children',
  FeaturePageParentChildrenId = 'feature_page___parent___children___id',
  FeaturePageParentChildrenChildren = 'feature_page___parent___children___children',
  FeaturePageParentInternalContent = 'feature_page___parent___internal___content',
  FeaturePageParentInternalContentDigest = 'feature_page___parent___internal___contentDigest',
  FeaturePageParentInternalDescription = 'feature_page___parent___internal___description',
  FeaturePageParentInternalFieldOwners = 'feature_page___parent___internal___fieldOwners',
  FeaturePageParentInternalIgnoreType = 'feature_page___parent___internal___ignoreType',
  FeaturePageParentInternalMediaType = 'feature_page___parent___internal___mediaType',
  FeaturePageParentInternalOwner = 'feature_page___parent___internal___owner',
  FeaturePageParentInternalType = 'feature_page___parent___internal___type',
  FeaturePageChildren = 'feature_page___children',
  FeaturePageChildrenId = 'feature_page___children___id',
  FeaturePageChildrenParentId = 'feature_page___children___parent___id',
  FeaturePageChildrenParentChildren = 'feature_page___children___parent___children',
  FeaturePageChildrenChildren = 'feature_page___children___children',
  FeaturePageChildrenChildrenId = 'feature_page___children___children___id',
  FeaturePageChildrenChildrenChildren = 'feature_page___children___children___children',
  FeaturePageChildrenInternalContent = 'feature_page___children___internal___content',
  FeaturePageChildrenInternalContentDigest = 'feature_page___children___internal___contentDigest',
  FeaturePageChildrenInternalDescription = 'feature_page___children___internal___description',
  FeaturePageChildrenInternalFieldOwners = 'feature_page___children___internal___fieldOwners',
  FeaturePageChildrenInternalIgnoreType = 'feature_page___children___internal___ignoreType',
  FeaturePageChildrenInternalMediaType = 'feature_page___children___internal___mediaType',
  FeaturePageChildrenInternalOwner = 'feature_page___children___internal___owner',
  FeaturePageChildrenInternalType = 'feature_page___children___internal___type',
  FeaturePageInternalContent = 'feature_page___internal___content',
  FeaturePageInternalContentDigest = 'feature_page___internal___contentDigest',
  FeaturePageInternalDescription = 'feature_page___internal___description',
  FeaturePageInternalFieldOwners = 'feature_page___internal___fieldOwners',
  FeaturePageInternalIgnoreType = 'feature_page___internal___ignoreType',
  FeaturePageInternalMediaType = 'feature_page___internal___mediaType',
  FeaturePageInternalOwner = 'feature_page___internal___owner',
  FeaturePageInternalType = 'feature_page___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulFeatureFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  feature_page?: Maybe<ContentfulFeaturePageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulFeatureSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulFeatureFilterListInput = {
  elemMatch?: Maybe<ContentfulFeatureFilterInput>;
};

export type ContentfulFeatureGroupConnection = {
  __typename?: 'ContentfulFeatureGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFeatureEdge>;
  nodes: Array<ContentfulFeature>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulFeaturePage = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulFeaturePage';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  startOnRight?: Maybe<Scalars['Boolean']>;
  features?: Maybe<Array<Maybe<ContentfulFeature>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulFeaturePageSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulFeaturePageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulFeaturePageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulFeaturePageConnection = {
  __typename?: 'ContentfulFeaturePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFeaturePageEdge>;
  nodes: Array<ContentfulFeaturePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulFeaturePageGroupConnection>;
};


export type ContentfulFeaturePageConnectionDistinctArgs = {
  field: ContentfulFeaturePageFieldsEnum;
};


export type ContentfulFeaturePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulFeaturePageFieldsEnum;
};

export type ContentfulFeaturePageEdge = {
  __typename?: 'ContentfulFeaturePageEdge';
  next?: Maybe<ContentfulFeaturePage>;
  node: ContentfulFeaturePage;
  previous?: Maybe<ContentfulFeaturePage>;
};

export enum ContentfulFeaturePageFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Slug = 'slug',
  Title = 'title',
  Description = 'description',
  StartOnRight = 'startOnRight',
  Features = 'features',
  FeaturesContentfulId = 'features___contentful_id',
  FeaturesId = 'features___id',
  FeaturesNodeLocale = 'features___node_locale',
  FeaturesTitle = 'features___title',
  FeaturesDescription = 'features___description',
  FeaturesImageContentfulId = 'features___image___contentful_id',
  FeaturesImageId = 'features___image___id',
  FeaturesImageSpaceId = 'features___image___spaceId',
  FeaturesImageCreatedAt = 'features___image___createdAt',
  FeaturesImageUpdatedAt = 'features___image___updatedAt',
  FeaturesImageFileUrl = 'features___image___file___url',
  FeaturesImageFileFileName = 'features___image___file___fileName',
  FeaturesImageFileContentType = 'features___image___file___contentType',
  FeaturesImageTitle = 'features___image___title',
  FeaturesImageDescription = 'features___image___description',
  FeaturesImageNodeLocale = 'features___image___node_locale',
  FeaturesImageSysType = 'features___image___sys___type',
  FeaturesImageSysRevision = 'features___image___sys___revision',
  FeaturesImageLocalFileSourceInstanceName = 'features___image___localFile___sourceInstanceName',
  FeaturesImageLocalFileAbsolutePath = 'features___image___localFile___absolutePath',
  FeaturesImageLocalFileRelativePath = 'features___image___localFile___relativePath',
  FeaturesImageLocalFileExtension = 'features___image___localFile___extension',
  FeaturesImageLocalFileSize = 'features___image___localFile___size',
  FeaturesImageLocalFilePrettySize = 'features___image___localFile___prettySize',
  FeaturesImageLocalFileModifiedTime = 'features___image___localFile___modifiedTime',
  FeaturesImageLocalFileAccessTime = 'features___image___localFile___accessTime',
  FeaturesImageLocalFileChangeTime = 'features___image___localFile___changeTime',
  FeaturesImageLocalFileBirthTime = 'features___image___localFile___birthTime',
  FeaturesImageLocalFileRoot = 'features___image___localFile___root',
  FeaturesImageLocalFileDir = 'features___image___localFile___dir',
  FeaturesImageLocalFileBase = 'features___image___localFile___base',
  FeaturesImageLocalFileExt = 'features___image___localFile___ext',
  FeaturesImageLocalFileName = 'features___image___localFile___name',
  FeaturesImageLocalFileRelativeDirectory = 'features___image___localFile___relativeDirectory',
  FeaturesImageLocalFileDev = 'features___image___localFile___dev',
  FeaturesImageLocalFileMode = 'features___image___localFile___mode',
  FeaturesImageLocalFileNlink = 'features___image___localFile___nlink',
  FeaturesImageLocalFileUid = 'features___image___localFile___uid',
  FeaturesImageLocalFileGid = 'features___image___localFile___gid',
  FeaturesImageLocalFileRdev = 'features___image___localFile___rdev',
  FeaturesImageLocalFileIno = 'features___image___localFile___ino',
  FeaturesImageLocalFileAtimeMs = 'features___image___localFile___atimeMs',
  FeaturesImageLocalFileMtimeMs = 'features___image___localFile___mtimeMs',
  FeaturesImageLocalFileCtimeMs = 'features___image___localFile___ctimeMs',
  FeaturesImageLocalFileAtime = 'features___image___localFile___atime',
  FeaturesImageLocalFileMtime = 'features___image___localFile___mtime',
  FeaturesImageLocalFileCtime = 'features___image___localFile___ctime',
  FeaturesImageLocalFileBirthtime = 'features___image___localFile___birthtime',
  FeaturesImageLocalFileBirthtimeMs = 'features___image___localFile___birthtimeMs',
  FeaturesImageLocalFileBlksize = 'features___image___localFile___blksize',
  FeaturesImageLocalFileBlocks = 'features___image___localFile___blocks',
  FeaturesImageLocalFileUrl = 'features___image___localFile___url',
  FeaturesImageLocalFilePublicUrl = 'features___image___localFile___publicURL',
  FeaturesImageLocalFileChildrenImageSharp = 'features___image___localFile___childrenImageSharp',
  FeaturesImageLocalFileId = 'features___image___localFile___id',
  FeaturesImageLocalFileChildren = 'features___image___localFile___children',
  FeaturesImageFixedBase64 = 'features___image___fixed___base64',
  FeaturesImageFixedTracedSvg = 'features___image___fixed___tracedSVG',
  FeaturesImageFixedAspectRatio = 'features___image___fixed___aspectRatio',
  FeaturesImageFixedWidth = 'features___image___fixed___width',
  FeaturesImageFixedHeight = 'features___image___fixed___height',
  FeaturesImageFixedSrc = 'features___image___fixed___src',
  FeaturesImageFixedSrcSet = 'features___image___fixed___srcSet',
  FeaturesImageFixedSrcWebp = 'features___image___fixed___srcWebp',
  FeaturesImageFixedSrcSetWebp = 'features___image___fixed___srcSetWebp',
  FeaturesImageResolutionsBase64 = 'features___image___resolutions___base64',
  FeaturesImageResolutionsTracedSvg = 'features___image___resolutions___tracedSVG',
  FeaturesImageResolutionsAspectRatio = 'features___image___resolutions___aspectRatio',
  FeaturesImageResolutionsWidth = 'features___image___resolutions___width',
  FeaturesImageResolutionsHeight = 'features___image___resolutions___height',
  FeaturesImageResolutionsSrc = 'features___image___resolutions___src',
  FeaturesImageResolutionsSrcSet = 'features___image___resolutions___srcSet',
  FeaturesImageResolutionsSrcWebp = 'features___image___resolutions___srcWebp',
  FeaturesImageResolutionsSrcSetWebp = 'features___image___resolutions___srcSetWebp',
  FeaturesImageFluidBase64 = 'features___image___fluid___base64',
  FeaturesImageFluidTracedSvg = 'features___image___fluid___tracedSVG',
  FeaturesImageFluidAspectRatio = 'features___image___fluid___aspectRatio',
  FeaturesImageFluidSrc = 'features___image___fluid___src',
  FeaturesImageFluidSrcSet = 'features___image___fluid___srcSet',
  FeaturesImageFluidSrcWebp = 'features___image___fluid___srcWebp',
  FeaturesImageFluidSrcSetWebp = 'features___image___fluid___srcSetWebp',
  FeaturesImageFluidSizes = 'features___image___fluid___sizes',
  FeaturesImageSizesBase64 = 'features___image___sizes___base64',
  FeaturesImageSizesTracedSvg = 'features___image___sizes___tracedSVG',
  FeaturesImageSizesAspectRatio = 'features___image___sizes___aspectRatio',
  FeaturesImageSizesSrc = 'features___image___sizes___src',
  FeaturesImageSizesSrcSet = 'features___image___sizes___srcSet',
  FeaturesImageSizesSrcWebp = 'features___image___sizes___srcWebp',
  FeaturesImageSizesSrcSetWebp = 'features___image___sizes___srcSetWebp',
  FeaturesImageSizesSizes = 'features___image___sizes___sizes',
  FeaturesImageResizeBase64 = 'features___image___resize___base64',
  FeaturesImageResizeTracedSvg = 'features___image___resize___tracedSVG',
  FeaturesImageResizeSrc = 'features___image___resize___src',
  FeaturesImageResizeWidth = 'features___image___resize___width',
  FeaturesImageResizeHeight = 'features___image___resize___height',
  FeaturesImageResizeAspectRatio = 'features___image___resize___aspectRatio',
  FeaturesImageParentId = 'features___image___parent___id',
  FeaturesImageParentChildren = 'features___image___parent___children',
  FeaturesImageChildren = 'features___image___children',
  FeaturesImageChildrenId = 'features___image___children___id',
  FeaturesImageChildrenChildren = 'features___image___children___children',
  FeaturesImageInternalContent = 'features___image___internal___content',
  FeaturesImageInternalContentDigest = 'features___image___internal___contentDigest',
  FeaturesImageInternalDescription = 'features___image___internal___description',
  FeaturesImageInternalFieldOwners = 'features___image___internal___fieldOwners',
  FeaturesImageInternalIgnoreType = 'features___image___internal___ignoreType',
  FeaturesImageInternalMediaType = 'features___image___internal___mediaType',
  FeaturesImageInternalOwner = 'features___image___internal___owner',
  FeaturesImageInternalType = 'features___image___internal___type',
  FeaturesFeaturePage = 'features___feature_page',
  FeaturesFeaturePageContentfulId = 'features___feature_page___contentful_id',
  FeaturesFeaturePageId = 'features___feature_page___id',
  FeaturesFeaturePageNodeLocale = 'features___feature_page___node_locale',
  FeaturesFeaturePageSlug = 'features___feature_page___slug',
  FeaturesFeaturePageTitle = 'features___feature_page___title',
  FeaturesFeaturePageDescription = 'features___feature_page___description',
  FeaturesFeaturePageStartOnRight = 'features___feature_page___startOnRight',
  FeaturesFeaturePageFeatures = 'features___feature_page___features',
  FeaturesFeaturePageFeaturesContentfulId = 'features___feature_page___features___contentful_id',
  FeaturesFeaturePageFeaturesId = 'features___feature_page___features___id',
  FeaturesFeaturePageFeaturesNodeLocale = 'features___feature_page___features___node_locale',
  FeaturesFeaturePageFeaturesTitle = 'features___feature_page___features___title',
  FeaturesFeaturePageFeaturesDescription = 'features___feature_page___features___description',
  FeaturesFeaturePageFeaturesFeaturePage = 'features___feature_page___features___feature_page',
  FeaturesFeaturePageFeaturesSpaceId = 'features___feature_page___features___spaceId',
  FeaturesFeaturePageFeaturesCreatedAt = 'features___feature_page___features___createdAt',
  FeaturesFeaturePageFeaturesUpdatedAt = 'features___feature_page___features___updatedAt',
  FeaturesFeaturePageFeaturesChildren = 'features___feature_page___features___children',
  FeaturesFeaturePageSpaceId = 'features___feature_page___spaceId',
  FeaturesFeaturePageCreatedAt = 'features___feature_page___createdAt',
  FeaturesFeaturePageUpdatedAt = 'features___feature_page___updatedAt',
  FeaturesFeaturePageSysType = 'features___feature_page___sys___type',
  FeaturesFeaturePageSysRevision = 'features___feature_page___sys___revision',
  FeaturesFeaturePageParentId = 'features___feature_page___parent___id',
  FeaturesFeaturePageParentChildren = 'features___feature_page___parent___children',
  FeaturesFeaturePageChildren = 'features___feature_page___children',
  FeaturesFeaturePageChildrenId = 'features___feature_page___children___id',
  FeaturesFeaturePageChildrenChildren = 'features___feature_page___children___children',
  FeaturesFeaturePageInternalContent = 'features___feature_page___internal___content',
  FeaturesFeaturePageInternalContentDigest = 'features___feature_page___internal___contentDigest',
  FeaturesFeaturePageInternalDescription = 'features___feature_page___internal___description',
  FeaturesFeaturePageInternalFieldOwners = 'features___feature_page___internal___fieldOwners',
  FeaturesFeaturePageInternalIgnoreType = 'features___feature_page___internal___ignoreType',
  FeaturesFeaturePageInternalMediaType = 'features___feature_page___internal___mediaType',
  FeaturesFeaturePageInternalOwner = 'features___feature_page___internal___owner',
  FeaturesFeaturePageInternalType = 'features___feature_page___internal___type',
  FeaturesSpaceId = 'features___spaceId',
  FeaturesCreatedAt = 'features___createdAt',
  FeaturesUpdatedAt = 'features___updatedAt',
  FeaturesSysType = 'features___sys___type',
  FeaturesSysRevision = 'features___sys___revision',
  FeaturesParentId = 'features___parent___id',
  FeaturesParentParentId = 'features___parent___parent___id',
  FeaturesParentParentChildren = 'features___parent___parent___children',
  FeaturesParentChildren = 'features___parent___children',
  FeaturesParentChildrenId = 'features___parent___children___id',
  FeaturesParentChildrenChildren = 'features___parent___children___children',
  FeaturesParentInternalContent = 'features___parent___internal___content',
  FeaturesParentInternalContentDigest = 'features___parent___internal___contentDigest',
  FeaturesParentInternalDescription = 'features___parent___internal___description',
  FeaturesParentInternalFieldOwners = 'features___parent___internal___fieldOwners',
  FeaturesParentInternalIgnoreType = 'features___parent___internal___ignoreType',
  FeaturesParentInternalMediaType = 'features___parent___internal___mediaType',
  FeaturesParentInternalOwner = 'features___parent___internal___owner',
  FeaturesParentInternalType = 'features___parent___internal___type',
  FeaturesChildren = 'features___children',
  FeaturesChildrenId = 'features___children___id',
  FeaturesChildrenParentId = 'features___children___parent___id',
  FeaturesChildrenParentChildren = 'features___children___parent___children',
  FeaturesChildrenChildren = 'features___children___children',
  FeaturesChildrenChildrenId = 'features___children___children___id',
  FeaturesChildrenChildrenChildren = 'features___children___children___children',
  FeaturesChildrenInternalContent = 'features___children___internal___content',
  FeaturesChildrenInternalContentDigest = 'features___children___internal___contentDigest',
  FeaturesChildrenInternalDescription = 'features___children___internal___description',
  FeaturesChildrenInternalFieldOwners = 'features___children___internal___fieldOwners',
  FeaturesChildrenInternalIgnoreType = 'features___children___internal___ignoreType',
  FeaturesChildrenInternalMediaType = 'features___children___internal___mediaType',
  FeaturesChildrenInternalOwner = 'features___children___internal___owner',
  FeaturesChildrenInternalType = 'features___children___internal___type',
  FeaturesInternalContent = 'features___internal___content',
  FeaturesInternalContentDigest = 'features___internal___contentDigest',
  FeaturesInternalDescription = 'features___internal___description',
  FeaturesInternalFieldOwners = 'features___internal___fieldOwners',
  FeaturesInternalIgnoreType = 'features___internal___ignoreType',
  FeaturesInternalMediaType = 'features___internal___mediaType',
  FeaturesInternalOwner = 'features___internal___owner',
  FeaturesInternalType = 'features___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulFeaturePageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  startOnRight?: Maybe<BooleanQueryOperatorInput>;
  features?: Maybe<ContentfulFeatureFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulFeaturePageSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulFeaturePageFilterListInput = {
  elemMatch?: Maybe<ContentfulFeaturePageFilterInput>;
};

export type ContentfulFeaturePageGroupConnection = {
  __typename?: 'ContentfulFeaturePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFeaturePageEdge>;
  nodes: Array<ContentfulFeaturePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulFeaturePageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulFeaturePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFeaturePageSys = {
  __typename?: 'ContentfulFeaturePageSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulFeaturePageSysContentType>;
};

export type ContentfulFeaturePageSysContentType = {
  __typename?: 'ContentfulFeaturePageSysContentType';
  sys?: Maybe<ContentfulFeaturePageSysContentTypeSys>;
};

export type ContentfulFeaturePageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulFeaturePageSysContentTypeSysFilterInput>;
};

export type ContentfulFeaturePageSysContentTypeSys = {
  __typename?: 'ContentfulFeaturePageSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulFeaturePageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFeaturePageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulFeaturePageSysContentTypeFilterInput>;
};

export type ContentfulFeatureSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulFeatureFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFeatureSys = {
  __typename?: 'ContentfulFeatureSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulFeatureSysContentType>;
};

export type ContentfulFeatureSysContentType = {
  __typename?: 'ContentfulFeatureSysContentType';
  sys?: Maybe<ContentfulFeatureSysContentTypeSys>;
};

export type ContentfulFeatureSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulFeatureSysContentTypeSysFilterInput>;
};

export type ContentfulFeatureSysContentTypeSys = {
  __typename?: 'ContentfulFeatureSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulFeatureSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFeatureSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulFeatureSysContentTypeFilterInput>;
};

export type ContentfulFixed = {
  __typename?: 'ContentfulFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  __typename?: 'ContentfulFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFrontPage = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulFrontPage';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  mainHeader?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  bannerImage?: Maybe<ContentfulAsset>;
  entries?: Maybe<Array<Maybe<ContentfulExternalLogosContentfulSellingPropositionUnion>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulFrontPageSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulFrontPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulFrontPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulFrontPageConnection = {
  __typename?: 'ContentfulFrontPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFrontPageEdge>;
  nodes: Array<ContentfulFrontPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulFrontPageGroupConnection>;
};


export type ContentfulFrontPageConnectionDistinctArgs = {
  field: ContentfulFrontPageFieldsEnum;
};


export type ContentfulFrontPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulFrontPageFieldsEnum;
};

export type ContentfulFrontPageEdge = {
  __typename?: 'ContentfulFrontPageEdge';
  next?: Maybe<ContentfulFrontPage>;
  node: ContentfulFrontPage;
  previous?: Maybe<ContentfulFrontPage>;
};

export enum ContentfulFrontPageFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Title = 'title',
  MainHeader = 'mainHeader',
  Description = 'description',
  BannerImageContentfulId = 'bannerImage___contentful_id',
  BannerImageId = 'bannerImage___id',
  BannerImageSpaceId = 'bannerImage___spaceId',
  BannerImageCreatedAt = 'bannerImage___createdAt',
  BannerImageUpdatedAt = 'bannerImage___updatedAt',
  BannerImageFileUrl = 'bannerImage___file___url',
  BannerImageFileDetailsSize = 'bannerImage___file___details___size',
  BannerImageFileFileName = 'bannerImage___file___fileName',
  BannerImageFileContentType = 'bannerImage___file___contentType',
  BannerImageFileErrorMessage = 'bannerImage___file___error___message',
  BannerImageTitle = 'bannerImage___title',
  BannerImageDescription = 'bannerImage___description',
  BannerImageNodeLocale = 'bannerImage___node_locale',
  BannerImageSysType = 'bannerImage___sys___type',
  BannerImageSysRevision = 'bannerImage___sys___revision',
  BannerImageLocalFileSourceInstanceName = 'bannerImage___localFile___sourceInstanceName',
  BannerImageLocalFileAbsolutePath = 'bannerImage___localFile___absolutePath',
  BannerImageLocalFileRelativePath = 'bannerImage___localFile___relativePath',
  BannerImageLocalFileExtension = 'bannerImage___localFile___extension',
  BannerImageLocalFileSize = 'bannerImage___localFile___size',
  BannerImageLocalFilePrettySize = 'bannerImage___localFile___prettySize',
  BannerImageLocalFileModifiedTime = 'bannerImage___localFile___modifiedTime',
  BannerImageLocalFileAccessTime = 'bannerImage___localFile___accessTime',
  BannerImageLocalFileChangeTime = 'bannerImage___localFile___changeTime',
  BannerImageLocalFileBirthTime = 'bannerImage___localFile___birthTime',
  BannerImageLocalFileRoot = 'bannerImage___localFile___root',
  BannerImageLocalFileDir = 'bannerImage___localFile___dir',
  BannerImageLocalFileBase = 'bannerImage___localFile___base',
  BannerImageLocalFileExt = 'bannerImage___localFile___ext',
  BannerImageLocalFileName = 'bannerImage___localFile___name',
  BannerImageLocalFileRelativeDirectory = 'bannerImage___localFile___relativeDirectory',
  BannerImageLocalFileDev = 'bannerImage___localFile___dev',
  BannerImageLocalFileMode = 'bannerImage___localFile___mode',
  BannerImageLocalFileNlink = 'bannerImage___localFile___nlink',
  BannerImageLocalFileUid = 'bannerImage___localFile___uid',
  BannerImageLocalFileGid = 'bannerImage___localFile___gid',
  BannerImageLocalFileRdev = 'bannerImage___localFile___rdev',
  BannerImageLocalFileIno = 'bannerImage___localFile___ino',
  BannerImageLocalFileAtimeMs = 'bannerImage___localFile___atimeMs',
  BannerImageLocalFileMtimeMs = 'bannerImage___localFile___mtimeMs',
  BannerImageLocalFileCtimeMs = 'bannerImage___localFile___ctimeMs',
  BannerImageLocalFileAtime = 'bannerImage___localFile___atime',
  BannerImageLocalFileMtime = 'bannerImage___localFile___mtime',
  BannerImageLocalFileCtime = 'bannerImage___localFile___ctime',
  BannerImageLocalFileBirthtime = 'bannerImage___localFile___birthtime',
  BannerImageLocalFileBirthtimeMs = 'bannerImage___localFile___birthtimeMs',
  BannerImageLocalFileBlksize = 'bannerImage___localFile___blksize',
  BannerImageLocalFileBlocks = 'bannerImage___localFile___blocks',
  BannerImageLocalFileUrl = 'bannerImage___localFile___url',
  BannerImageLocalFilePublicUrl = 'bannerImage___localFile___publicURL',
  BannerImageLocalFileChildrenImageSharp = 'bannerImage___localFile___childrenImageSharp',
  BannerImageLocalFileChildrenImageSharpGatsbyImageData = 'bannerImage___localFile___childrenImageSharp___gatsbyImageData',
  BannerImageLocalFileChildrenImageSharpId = 'bannerImage___localFile___childrenImageSharp___id',
  BannerImageLocalFileChildrenImageSharpChildren = 'bannerImage___localFile___childrenImageSharp___children',
  BannerImageLocalFileChildImageSharpGatsbyImageData = 'bannerImage___localFile___childImageSharp___gatsbyImageData',
  BannerImageLocalFileChildImageSharpId = 'bannerImage___localFile___childImageSharp___id',
  BannerImageLocalFileChildImageSharpChildren = 'bannerImage___localFile___childImageSharp___children',
  BannerImageLocalFileId = 'bannerImage___localFile___id',
  BannerImageLocalFileParentId = 'bannerImage___localFile___parent___id',
  BannerImageLocalFileParentChildren = 'bannerImage___localFile___parent___children',
  BannerImageLocalFileChildren = 'bannerImage___localFile___children',
  BannerImageLocalFileChildrenId = 'bannerImage___localFile___children___id',
  BannerImageLocalFileChildrenChildren = 'bannerImage___localFile___children___children',
  BannerImageLocalFileInternalContent = 'bannerImage___localFile___internal___content',
  BannerImageLocalFileInternalContentDigest = 'bannerImage___localFile___internal___contentDigest',
  BannerImageLocalFileInternalDescription = 'bannerImage___localFile___internal___description',
  BannerImageLocalFileInternalFieldOwners = 'bannerImage___localFile___internal___fieldOwners',
  BannerImageLocalFileInternalIgnoreType = 'bannerImage___localFile___internal___ignoreType',
  BannerImageLocalFileInternalMediaType = 'bannerImage___localFile___internal___mediaType',
  BannerImageLocalFileInternalOwner = 'bannerImage___localFile___internal___owner',
  BannerImageLocalFileInternalType = 'bannerImage___localFile___internal___type',
  BannerImageFixedBase64 = 'bannerImage___fixed___base64',
  BannerImageFixedTracedSvg = 'bannerImage___fixed___tracedSVG',
  BannerImageFixedAspectRatio = 'bannerImage___fixed___aspectRatio',
  BannerImageFixedWidth = 'bannerImage___fixed___width',
  BannerImageFixedHeight = 'bannerImage___fixed___height',
  BannerImageFixedSrc = 'bannerImage___fixed___src',
  BannerImageFixedSrcSet = 'bannerImage___fixed___srcSet',
  BannerImageFixedSrcWebp = 'bannerImage___fixed___srcWebp',
  BannerImageFixedSrcSetWebp = 'bannerImage___fixed___srcSetWebp',
  BannerImageResolutionsBase64 = 'bannerImage___resolutions___base64',
  BannerImageResolutionsTracedSvg = 'bannerImage___resolutions___tracedSVG',
  BannerImageResolutionsAspectRatio = 'bannerImage___resolutions___aspectRatio',
  BannerImageResolutionsWidth = 'bannerImage___resolutions___width',
  BannerImageResolutionsHeight = 'bannerImage___resolutions___height',
  BannerImageResolutionsSrc = 'bannerImage___resolutions___src',
  BannerImageResolutionsSrcSet = 'bannerImage___resolutions___srcSet',
  BannerImageResolutionsSrcWebp = 'bannerImage___resolutions___srcWebp',
  BannerImageResolutionsSrcSetWebp = 'bannerImage___resolutions___srcSetWebp',
  BannerImageFluidBase64 = 'bannerImage___fluid___base64',
  BannerImageFluidTracedSvg = 'bannerImage___fluid___tracedSVG',
  BannerImageFluidAspectRatio = 'bannerImage___fluid___aspectRatio',
  BannerImageFluidSrc = 'bannerImage___fluid___src',
  BannerImageFluidSrcSet = 'bannerImage___fluid___srcSet',
  BannerImageFluidSrcWebp = 'bannerImage___fluid___srcWebp',
  BannerImageFluidSrcSetWebp = 'bannerImage___fluid___srcSetWebp',
  BannerImageFluidSizes = 'bannerImage___fluid___sizes',
  BannerImageSizesBase64 = 'bannerImage___sizes___base64',
  BannerImageSizesTracedSvg = 'bannerImage___sizes___tracedSVG',
  BannerImageSizesAspectRatio = 'bannerImage___sizes___aspectRatio',
  BannerImageSizesSrc = 'bannerImage___sizes___src',
  BannerImageSizesSrcSet = 'bannerImage___sizes___srcSet',
  BannerImageSizesSrcWebp = 'bannerImage___sizes___srcWebp',
  BannerImageSizesSrcSetWebp = 'bannerImage___sizes___srcSetWebp',
  BannerImageSizesSizes = 'bannerImage___sizes___sizes',
  BannerImageResizeBase64 = 'bannerImage___resize___base64',
  BannerImageResizeTracedSvg = 'bannerImage___resize___tracedSVG',
  BannerImageResizeSrc = 'bannerImage___resize___src',
  BannerImageResizeWidth = 'bannerImage___resize___width',
  BannerImageResizeHeight = 'bannerImage___resize___height',
  BannerImageResizeAspectRatio = 'bannerImage___resize___aspectRatio',
  BannerImageParentId = 'bannerImage___parent___id',
  BannerImageParentParentId = 'bannerImage___parent___parent___id',
  BannerImageParentParentChildren = 'bannerImage___parent___parent___children',
  BannerImageParentChildren = 'bannerImage___parent___children',
  BannerImageParentChildrenId = 'bannerImage___parent___children___id',
  BannerImageParentChildrenChildren = 'bannerImage___parent___children___children',
  BannerImageParentInternalContent = 'bannerImage___parent___internal___content',
  BannerImageParentInternalContentDigest = 'bannerImage___parent___internal___contentDigest',
  BannerImageParentInternalDescription = 'bannerImage___parent___internal___description',
  BannerImageParentInternalFieldOwners = 'bannerImage___parent___internal___fieldOwners',
  BannerImageParentInternalIgnoreType = 'bannerImage___parent___internal___ignoreType',
  BannerImageParentInternalMediaType = 'bannerImage___parent___internal___mediaType',
  BannerImageParentInternalOwner = 'bannerImage___parent___internal___owner',
  BannerImageParentInternalType = 'bannerImage___parent___internal___type',
  BannerImageChildren = 'bannerImage___children',
  BannerImageChildrenId = 'bannerImage___children___id',
  BannerImageChildrenParentId = 'bannerImage___children___parent___id',
  BannerImageChildrenParentChildren = 'bannerImage___children___parent___children',
  BannerImageChildrenChildren = 'bannerImage___children___children',
  BannerImageChildrenChildrenId = 'bannerImage___children___children___id',
  BannerImageChildrenChildrenChildren = 'bannerImage___children___children___children',
  BannerImageChildrenInternalContent = 'bannerImage___children___internal___content',
  BannerImageChildrenInternalContentDigest = 'bannerImage___children___internal___contentDigest',
  BannerImageChildrenInternalDescription = 'bannerImage___children___internal___description',
  BannerImageChildrenInternalFieldOwners = 'bannerImage___children___internal___fieldOwners',
  BannerImageChildrenInternalIgnoreType = 'bannerImage___children___internal___ignoreType',
  BannerImageChildrenInternalMediaType = 'bannerImage___children___internal___mediaType',
  BannerImageChildrenInternalOwner = 'bannerImage___children___internal___owner',
  BannerImageChildrenInternalType = 'bannerImage___children___internal___type',
  BannerImageInternalContent = 'bannerImage___internal___content',
  BannerImageInternalContentDigest = 'bannerImage___internal___contentDigest',
  BannerImageInternalDescription = 'bannerImage___internal___description',
  BannerImageInternalFieldOwners = 'bannerImage___internal___fieldOwners',
  BannerImageInternalIgnoreType = 'bannerImage___internal___ignoreType',
  BannerImageInternalMediaType = 'bannerImage___internal___mediaType',
  BannerImageInternalOwner = 'bannerImage___internal___owner',
  BannerImageInternalType = 'bannerImage___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulFrontPageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  mainHeader?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  bannerImage?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulFrontPageSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulFrontPageFilterListInput = {
  elemMatch?: Maybe<ContentfulFrontPageFilterInput>;
};

export type ContentfulFrontPageGroupConnection = {
  __typename?: 'ContentfulFrontPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulFrontPageEdge>;
  nodes: Array<ContentfulFrontPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulFrontPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulFrontPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFrontPageSys = {
  __typename?: 'ContentfulFrontPageSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulFrontPageSysContentType>;
};

export type ContentfulFrontPageSysContentType = {
  __typename?: 'ContentfulFrontPageSysContentType';
  sys?: Maybe<ContentfulFrontPageSysContentTypeSys>;
};

export type ContentfulFrontPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulFrontPageSysContentTypeSysFilterInput>;
};

export type ContentfulFrontPageSysContentTypeSys = {
  __typename?: 'ContentfulFrontPageSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulFrontPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFrontPageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulFrontPageSysContentTypeFilterInput>;
};

export type ContentfulGlossary = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulGlossary';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  description?: Maybe<ContentfulGlossaryDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulGlossarySys>;
  /** Returns all children nodes filtered by type contentfulGlossaryDescriptionTextNode */
  childrenContentfulGlossaryDescriptionTextNode?: Maybe<Array<Maybe<ContentfulGlossaryDescriptionTextNode>>>;
  /**
   * Returns the first child node of type contentfulGlossaryDescriptionTextNode or
   * null if there are no children of given type on this node
   */
  childContentfulGlossaryDescriptionTextNode?: Maybe<ContentfulGlossaryDescriptionTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulGlossaryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulGlossaryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulGlossaryConnection = {
  __typename?: 'ContentfulGlossaryConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGlossaryEdge>;
  nodes: Array<ContentfulGlossary>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulGlossaryGroupConnection>;
};


export type ContentfulGlossaryConnectionDistinctArgs = {
  field: ContentfulGlossaryFieldsEnum;
};


export type ContentfulGlossaryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulGlossaryFieldsEnum;
};

export type ContentfulGlossaryDescriptionTextNode = Node & {
  __typename?: 'contentfulGlossaryDescriptionTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulGlossaryDescriptionTextNodeSys>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
};

export type ContentfulGlossaryDescriptionTextNodeConnection = {
  __typename?: 'contentfulGlossaryDescriptionTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGlossaryDescriptionTextNodeEdge>;
  nodes: Array<ContentfulGlossaryDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulGlossaryDescriptionTextNodeGroupConnection>;
};


export type ContentfulGlossaryDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulGlossaryDescriptionTextNodeFieldsEnum;
};


export type ContentfulGlossaryDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulGlossaryDescriptionTextNodeFieldsEnum;
};

export type ContentfulGlossaryDescriptionTextNodeEdge = {
  __typename?: 'contentfulGlossaryDescriptionTextNodeEdge';
  next?: Maybe<ContentfulGlossaryDescriptionTextNode>;
  node: ContentfulGlossaryDescriptionTextNode;
  previous?: Maybe<ContentfulGlossaryDescriptionTextNode>;
};

export enum ContentfulGlossaryDescriptionTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Description = 'description',
  SysType = 'sys___type',
  ChildrenMdx = 'childrenMdx',
  ChildrenMdxRawBody = 'childrenMdx___rawBody',
  ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
  ChildrenMdxSlug = 'childrenMdx___slug',
  ChildrenMdxBody = 'childrenMdx___body',
  ChildrenMdxExcerpt = 'childrenMdx___excerpt',
  ChildrenMdxHeadings = 'childrenMdx___headings',
  ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
  ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
  ChildrenMdxHtml = 'childrenMdx___html',
  ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
  ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
  ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
  ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
  ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
  ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
  ChildrenMdxId = 'childrenMdx___id',
  ChildrenMdxParentId = 'childrenMdx___parent___id',
  ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
  ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
  ChildrenMdxParentChildren = 'childrenMdx___parent___children',
  ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
  ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
  ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
  ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
  ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
  ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
  ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
  ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
  ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
  ChildrenMdxChildren = 'childrenMdx___children',
  ChildrenMdxChildrenId = 'childrenMdx___children___id',
  ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
  ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
  ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
  ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
  ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
  ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
  ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
  ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
  ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
  ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
  ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
  ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
  ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
  ChildrenMdxInternalContent = 'childrenMdx___internal___content',
  ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
  ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
  ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
  ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
  ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
  ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
  ChildrenMdxInternalType = 'childrenMdx___internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxSlug = 'childMdx___slug',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type'
}

export type ContentfulGlossaryDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulGlossaryDescriptionTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulGlossaryDescriptionTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulGlossaryDescriptionTextNodeFilterInput>;
};

export type ContentfulGlossaryDescriptionTextNodeGroupConnection = {
  __typename?: 'contentfulGlossaryDescriptionTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGlossaryDescriptionTextNodeEdge>;
  nodes: Array<ContentfulGlossaryDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulGlossaryDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulGlossaryDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulGlossaryDescriptionTextNodeSys = {
  __typename?: 'contentfulGlossaryDescriptionTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulGlossaryDescriptionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulGlossaryEdge = {
  __typename?: 'ContentfulGlossaryEdge';
  next?: Maybe<ContentfulGlossary>;
  node: ContentfulGlossary;
  previous?: Maybe<ContentfulGlossary>;
};

export enum ContentfulGlossaryFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Title = 'title',
  Slug = 'slug',
  DescriptionId = 'description___id',
  DescriptionParentId = 'description___parent___id',
  DescriptionParentParentId = 'description___parent___parent___id',
  DescriptionParentParentChildren = 'description___parent___parent___children',
  DescriptionParentChildren = 'description___parent___children',
  DescriptionParentChildrenId = 'description___parent___children___id',
  DescriptionParentChildrenChildren = 'description___parent___children___children',
  DescriptionParentInternalContent = 'description___parent___internal___content',
  DescriptionParentInternalContentDigest = 'description___parent___internal___contentDigest',
  DescriptionParentInternalDescription = 'description___parent___internal___description',
  DescriptionParentInternalFieldOwners = 'description___parent___internal___fieldOwners',
  DescriptionParentInternalIgnoreType = 'description___parent___internal___ignoreType',
  DescriptionParentInternalMediaType = 'description___parent___internal___mediaType',
  DescriptionParentInternalOwner = 'description___parent___internal___owner',
  DescriptionParentInternalType = 'description___parent___internal___type',
  DescriptionChildren = 'description___children',
  DescriptionChildrenId = 'description___children___id',
  DescriptionChildrenParentId = 'description___children___parent___id',
  DescriptionChildrenParentChildren = 'description___children___parent___children',
  DescriptionChildrenChildren = 'description___children___children',
  DescriptionChildrenChildrenId = 'description___children___children___id',
  DescriptionChildrenChildrenChildren = 'description___children___children___children',
  DescriptionChildrenInternalContent = 'description___children___internal___content',
  DescriptionChildrenInternalContentDigest = 'description___children___internal___contentDigest',
  DescriptionChildrenInternalDescription = 'description___children___internal___description',
  DescriptionChildrenInternalFieldOwners = 'description___children___internal___fieldOwners',
  DescriptionChildrenInternalIgnoreType = 'description___children___internal___ignoreType',
  DescriptionChildrenInternalMediaType = 'description___children___internal___mediaType',
  DescriptionChildrenInternalOwner = 'description___children___internal___owner',
  DescriptionChildrenInternalType = 'description___children___internal___type',
  DescriptionInternalContent = 'description___internal___content',
  DescriptionInternalContentDigest = 'description___internal___contentDigest',
  DescriptionInternalDescription = 'description___internal___description',
  DescriptionInternalFieldOwners = 'description___internal___fieldOwners',
  DescriptionInternalIgnoreType = 'description___internal___ignoreType',
  DescriptionInternalMediaType = 'description___internal___mediaType',
  DescriptionInternalOwner = 'description___internal___owner',
  DescriptionInternalType = 'description___internal___type',
  DescriptionDescription = 'description___description',
  DescriptionSysType = 'description___sys___type',
  DescriptionChildrenMdx = 'description___childrenMdx',
  DescriptionChildrenMdxRawBody = 'description___childrenMdx___rawBody',
  DescriptionChildrenMdxFileAbsolutePath = 'description___childrenMdx___fileAbsolutePath',
  DescriptionChildrenMdxFrontmatterTitle = 'description___childrenMdx___frontmatter___title',
  DescriptionChildrenMdxSlug = 'description___childrenMdx___slug',
  DescriptionChildrenMdxBody = 'description___childrenMdx___body',
  DescriptionChildrenMdxExcerpt = 'description___childrenMdx___excerpt',
  DescriptionChildrenMdxHeadings = 'description___childrenMdx___headings',
  DescriptionChildrenMdxHeadingsValue = 'description___childrenMdx___headings___value',
  DescriptionChildrenMdxHeadingsDepth = 'description___childrenMdx___headings___depth',
  DescriptionChildrenMdxHtml = 'description___childrenMdx___html',
  DescriptionChildrenMdxMdxAst = 'description___childrenMdx___mdxAST',
  DescriptionChildrenMdxTableOfContents = 'description___childrenMdx___tableOfContents',
  DescriptionChildrenMdxTimeToRead = 'description___childrenMdx___timeToRead',
  DescriptionChildrenMdxWordCountParagraphs = 'description___childrenMdx___wordCount___paragraphs',
  DescriptionChildrenMdxWordCountSentences = 'description___childrenMdx___wordCount___sentences',
  DescriptionChildrenMdxWordCountWords = 'description___childrenMdx___wordCount___words',
  DescriptionChildrenMdxId = 'description___childrenMdx___id',
  DescriptionChildrenMdxParentId = 'description___childrenMdx___parent___id',
  DescriptionChildrenMdxParentChildren = 'description___childrenMdx___parent___children',
  DescriptionChildrenMdxChildren = 'description___childrenMdx___children',
  DescriptionChildrenMdxChildrenId = 'description___childrenMdx___children___id',
  DescriptionChildrenMdxChildrenChildren = 'description___childrenMdx___children___children',
  DescriptionChildrenMdxInternalContent = 'description___childrenMdx___internal___content',
  DescriptionChildrenMdxInternalContentDigest = 'description___childrenMdx___internal___contentDigest',
  DescriptionChildrenMdxInternalDescription = 'description___childrenMdx___internal___description',
  DescriptionChildrenMdxInternalFieldOwners = 'description___childrenMdx___internal___fieldOwners',
  DescriptionChildrenMdxInternalIgnoreType = 'description___childrenMdx___internal___ignoreType',
  DescriptionChildrenMdxInternalMediaType = 'description___childrenMdx___internal___mediaType',
  DescriptionChildrenMdxInternalOwner = 'description___childrenMdx___internal___owner',
  DescriptionChildrenMdxInternalType = 'description___childrenMdx___internal___type',
  DescriptionChildMdxRawBody = 'description___childMdx___rawBody',
  DescriptionChildMdxFileAbsolutePath = 'description___childMdx___fileAbsolutePath',
  DescriptionChildMdxFrontmatterTitle = 'description___childMdx___frontmatter___title',
  DescriptionChildMdxSlug = 'description___childMdx___slug',
  DescriptionChildMdxBody = 'description___childMdx___body',
  DescriptionChildMdxExcerpt = 'description___childMdx___excerpt',
  DescriptionChildMdxHeadings = 'description___childMdx___headings',
  DescriptionChildMdxHeadingsValue = 'description___childMdx___headings___value',
  DescriptionChildMdxHeadingsDepth = 'description___childMdx___headings___depth',
  DescriptionChildMdxHtml = 'description___childMdx___html',
  DescriptionChildMdxMdxAst = 'description___childMdx___mdxAST',
  DescriptionChildMdxTableOfContents = 'description___childMdx___tableOfContents',
  DescriptionChildMdxTimeToRead = 'description___childMdx___timeToRead',
  DescriptionChildMdxWordCountParagraphs = 'description___childMdx___wordCount___paragraphs',
  DescriptionChildMdxWordCountSentences = 'description___childMdx___wordCount___sentences',
  DescriptionChildMdxWordCountWords = 'description___childMdx___wordCount___words',
  DescriptionChildMdxId = 'description___childMdx___id',
  DescriptionChildMdxParentId = 'description___childMdx___parent___id',
  DescriptionChildMdxParentChildren = 'description___childMdx___parent___children',
  DescriptionChildMdxChildren = 'description___childMdx___children',
  DescriptionChildMdxChildrenId = 'description___childMdx___children___id',
  DescriptionChildMdxChildrenChildren = 'description___childMdx___children___children',
  DescriptionChildMdxInternalContent = 'description___childMdx___internal___content',
  DescriptionChildMdxInternalContentDigest = 'description___childMdx___internal___contentDigest',
  DescriptionChildMdxInternalDescription = 'description___childMdx___internal___description',
  DescriptionChildMdxInternalFieldOwners = 'description___childMdx___internal___fieldOwners',
  DescriptionChildMdxInternalIgnoreType = 'description___childMdx___internal___ignoreType',
  DescriptionChildMdxInternalMediaType = 'description___childMdx___internal___mediaType',
  DescriptionChildMdxInternalOwner = 'description___childMdx___internal___owner',
  DescriptionChildMdxInternalType = 'description___childMdx___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ChildrenContentfulGlossaryDescriptionTextNode = 'childrenContentfulGlossaryDescriptionTextNode',
  ChildrenContentfulGlossaryDescriptionTextNodeId = 'childrenContentfulGlossaryDescriptionTextNode___id',
  ChildrenContentfulGlossaryDescriptionTextNodeParentId = 'childrenContentfulGlossaryDescriptionTextNode___parent___id',
  ChildrenContentfulGlossaryDescriptionTextNodeParentParentId = 'childrenContentfulGlossaryDescriptionTextNode___parent___parent___id',
  ChildrenContentfulGlossaryDescriptionTextNodeParentParentChildren = 'childrenContentfulGlossaryDescriptionTextNode___parent___parent___children',
  ChildrenContentfulGlossaryDescriptionTextNodeParentChildren = 'childrenContentfulGlossaryDescriptionTextNode___parent___children',
  ChildrenContentfulGlossaryDescriptionTextNodeParentChildrenId = 'childrenContentfulGlossaryDescriptionTextNode___parent___children___id',
  ChildrenContentfulGlossaryDescriptionTextNodeParentChildrenChildren = 'childrenContentfulGlossaryDescriptionTextNode___parent___children___children',
  ChildrenContentfulGlossaryDescriptionTextNodeParentInternalContent = 'childrenContentfulGlossaryDescriptionTextNode___parent___internal___content',
  ChildrenContentfulGlossaryDescriptionTextNodeParentInternalContentDigest = 'childrenContentfulGlossaryDescriptionTextNode___parent___internal___contentDigest',
  ChildrenContentfulGlossaryDescriptionTextNodeParentInternalDescription = 'childrenContentfulGlossaryDescriptionTextNode___parent___internal___description',
  ChildrenContentfulGlossaryDescriptionTextNodeParentInternalFieldOwners = 'childrenContentfulGlossaryDescriptionTextNode___parent___internal___fieldOwners',
  ChildrenContentfulGlossaryDescriptionTextNodeParentInternalIgnoreType = 'childrenContentfulGlossaryDescriptionTextNode___parent___internal___ignoreType',
  ChildrenContentfulGlossaryDescriptionTextNodeParentInternalMediaType = 'childrenContentfulGlossaryDescriptionTextNode___parent___internal___mediaType',
  ChildrenContentfulGlossaryDescriptionTextNodeParentInternalOwner = 'childrenContentfulGlossaryDescriptionTextNode___parent___internal___owner',
  ChildrenContentfulGlossaryDescriptionTextNodeParentInternalType = 'childrenContentfulGlossaryDescriptionTextNode___parent___internal___type',
  ChildrenContentfulGlossaryDescriptionTextNodeChildren = 'childrenContentfulGlossaryDescriptionTextNode___children',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenId = 'childrenContentfulGlossaryDescriptionTextNode___children___id',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenParentId = 'childrenContentfulGlossaryDescriptionTextNode___children___parent___id',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenParentChildren = 'childrenContentfulGlossaryDescriptionTextNode___children___parent___children',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenChildren = 'childrenContentfulGlossaryDescriptionTextNode___children___children',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenChildrenId = 'childrenContentfulGlossaryDescriptionTextNode___children___children___id',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenChildrenChildren = 'childrenContentfulGlossaryDescriptionTextNode___children___children___children',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenInternalContent = 'childrenContentfulGlossaryDescriptionTextNode___children___internal___content',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenInternalContentDigest = 'childrenContentfulGlossaryDescriptionTextNode___children___internal___contentDigest',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenInternalDescription = 'childrenContentfulGlossaryDescriptionTextNode___children___internal___description',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenInternalFieldOwners = 'childrenContentfulGlossaryDescriptionTextNode___children___internal___fieldOwners',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenInternalIgnoreType = 'childrenContentfulGlossaryDescriptionTextNode___children___internal___ignoreType',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenInternalMediaType = 'childrenContentfulGlossaryDescriptionTextNode___children___internal___mediaType',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenInternalOwner = 'childrenContentfulGlossaryDescriptionTextNode___children___internal___owner',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenInternalType = 'childrenContentfulGlossaryDescriptionTextNode___children___internal___type',
  ChildrenContentfulGlossaryDescriptionTextNodeInternalContent = 'childrenContentfulGlossaryDescriptionTextNode___internal___content',
  ChildrenContentfulGlossaryDescriptionTextNodeInternalContentDigest = 'childrenContentfulGlossaryDescriptionTextNode___internal___contentDigest',
  ChildrenContentfulGlossaryDescriptionTextNodeInternalDescription = 'childrenContentfulGlossaryDescriptionTextNode___internal___description',
  ChildrenContentfulGlossaryDescriptionTextNodeInternalFieldOwners = 'childrenContentfulGlossaryDescriptionTextNode___internal___fieldOwners',
  ChildrenContentfulGlossaryDescriptionTextNodeInternalIgnoreType = 'childrenContentfulGlossaryDescriptionTextNode___internal___ignoreType',
  ChildrenContentfulGlossaryDescriptionTextNodeInternalMediaType = 'childrenContentfulGlossaryDescriptionTextNode___internal___mediaType',
  ChildrenContentfulGlossaryDescriptionTextNodeInternalOwner = 'childrenContentfulGlossaryDescriptionTextNode___internal___owner',
  ChildrenContentfulGlossaryDescriptionTextNodeInternalType = 'childrenContentfulGlossaryDescriptionTextNode___internal___type',
  ChildrenContentfulGlossaryDescriptionTextNodeDescription = 'childrenContentfulGlossaryDescriptionTextNode___description',
  ChildrenContentfulGlossaryDescriptionTextNodeSysType = 'childrenContentfulGlossaryDescriptionTextNode___sys___type',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdx = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxRawBody = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___rawBody',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxFileAbsolutePath = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___fileAbsolutePath',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxFrontmatterTitle = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___frontmatter___title',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxSlug = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___slug',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxBody = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___body',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxExcerpt = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___excerpt',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxHeadings = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___headings',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxHeadingsValue = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___headings___value',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxHeadingsDepth = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___headings___depth',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxHtml = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___html',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxMdxAst = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___mdxAST',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxTableOfContents = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___tableOfContents',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxTimeToRead = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___timeToRead',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxWordCountParagraphs = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___wordCount___paragraphs',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxWordCountSentences = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___wordCount___sentences',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxWordCountWords = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___wordCount___words',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxId = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___id',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxParentId = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___parent___id',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxParentChildren = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___parent___children',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxChildren = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___children',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxChildrenId = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___children___id',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxChildrenChildren = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___children___children',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxInternalContent = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___internal___content',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxInternalContentDigest = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___internal___contentDigest',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxInternalDescription = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___internal___description',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxInternalFieldOwners = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___internal___fieldOwners',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxInternalIgnoreType = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___internal___ignoreType',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxInternalMediaType = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___internal___mediaType',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxInternalOwner = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___internal___owner',
  ChildrenContentfulGlossaryDescriptionTextNodeChildrenMdxInternalType = 'childrenContentfulGlossaryDescriptionTextNode___childrenMdx___internal___type',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxRawBody = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___rawBody',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxFileAbsolutePath = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___fileAbsolutePath',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxFrontmatterTitle = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___frontmatter___title',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxSlug = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___slug',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxBody = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___body',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxExcerpt = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___excerpt',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxHeadings = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___headings',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxHeadingsValue = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___headings___value',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxHeadingsDepth = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___headings___depth',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxHtml = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___html',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxMdxAst = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___mdxAST',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxTableOfContents = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___tableOfContents',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxTimeToRead = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___timeToRead',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxWordCountParagraphs = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___wordCount___paragraphs',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxWordCountSentences = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___wordCount___sentences',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxWordCountWords = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___wordCount___words',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxId = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___id',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxParentId = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___parent___id',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxParentChildren = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___parent___children',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxChildren = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___children',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxChildrenId = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___children___id',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxChildrenChildren = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___children___children',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxInternalContent = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___internal___content',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxInternalContentDigest = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___internal___contentDigest',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxInternalDescription = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___internal___description',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxInternalFieldOwners = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___internal___fieldOwners',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxInternalIgnoreType = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___internal___ignoreType',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxInternalMediaType = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___internal___mediaType',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxInternalOwner = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___internal___owner',
  ChildrenContentfulGlossaryDescriptionTextNodeChildMdxInternalType = 'childrenContentfulGlossaryDescriptionTextNode___childMdx___internal___type',
  ChildContentfulGlossaryDescriptionTextNodeId = 'childContentfulGlossaryDescriptionTextNode___id',
  ChildContentfulGlossaryDescriptionTextNodeParentId = 'childContentfulGlossaryDescriptionTextNode___parent___id',
  ChildContentfulGlossaryDescriptionTextNodeParentParentId = 'childContentfulGlossaryDescriptionTextNode___parent___parent___id',
  ChildContentfulGlossaryDescriptionTextNodeParentParentChildren = 'childContentfulGlossaryDescriptionTextNode___parent___parent___children',
  ChildContentfulGlossaryDescriptionTextNodeParentChildren = 'childContentfulGlossaryDescriptionTextNode___parent___children',
  ChildContentfulGlossaryDescriptionTextNodeParentChildrenId = 'childContentfulGlossaryDescriptionTextNode___parent___children___id',
  ChildContentfulGlossaryDescriptionTextNodeParentChildrenChildren = 'childContentfulGlossaryDescriptionTextNode___parent___children___children',
  ChildContentfulGlossaryDescriptionTextNodeParentInternalContent = 'childContentfulGlossaryDescriptionTextNode___parent___internal___content',
  ChildContentfulGlossaryDescriptionTextNodeParentInternalContentDigest = 'childContentfulGlossaryDescriptionTextNode___parent___internal___contentDigest',
  ChildContentfulGlossaryDescriptionTextNodeParentInternalDescription = 'childContentfulGlossaryDescriptionTextNode___parent___internal___description',
  ChildContentfulGlossaryDescriptionTextNodeParentInternalFieldOwners = 'childContentfulGlossaryDescriptionTextNode___parent___internal___fieldOwners',
  ChildContentfulGlossaryDescriptionTextNodeParentInternalIgnoreType = 'childContentfulGlossaryDescriptionTextNode___parent___internal___ignoreType',
  ChildContentfulGlossaryDescriptionTextNodeParentInternalMediaType = 'childContentfulGlossaryDescriptionTextNode___parent___internal___mediaType',
  ChildContentfulGlossaryDescriptionTextNodeParentInternalOwner = 'childContentfulGlossaryDescriptionTextNode___parent___internal___owner',
  ChildContentfulGlossaryDescriptionTextNodeParentInternalType = 'childContentfulGlossaryDescriptionTextNode___parent___internal___type',
  ChildContentfulGlossaryDescriptionTextNodeChildren = 'childContentfulGlossaryDescriptionTextNode___children',
  ChildContentfulGlossaryDescriptionTextNodeChildrenId = 'childContentfulGlossaryDescriptionTextNode___children___id',
  ChildContentfulGlossaryDescriptionTextNodeChildrenParentId = 'childContentfulGlossaryDescriptionTextNode___children___parent___id',
  ChildContentfulGlossaryDescriptionTextNodeChildrenParentChildren = 'childContentfulGlossaryDescriptionTextNode___children___parent___children',
  ChildContentfulGlossaryDescriptionTextNodeChildrenChildren = 'childContentfulGlossaryDescriptionTextNode___children___children',
  ChildContentfulGlossaryDescriptionTextNodeChildrenChildrenId = 'childContentfulGlossaryDescriptionTextNode___children___children___id',
  ChildContentfulGlossaryDescriptionTextNodeChildrenChildrenChildren = 'childContentfulGlossaryDescriptionTextNode___children___children___children',
  ChildContentfulGlossaryDescriptionTextNodeChildrenInternalContent = 'childContentfulGlossaryDescriptionTextNode___children___internal___content',
  ChildContentfulGlossaryDescriptionTextNodeChildrenInternalContentDigest = 'childContentfulGlossaryDescriptionTextNode___children___internal___contentDigest',
  ChildContentfulGlossaryDescriptionTextNodeChildrenInternalDescription = 'childContentfulGlossaryDescriptionTextNode___children___internal___description',
  ChildContentfulGlossaryDescriptionTextNodeChildrenInternalFieldOwners = 'childContentfulGlossaryDescriptionTextNode___children___internal___fieldOwners',
  ChildContentfulGlossaryDescriptionTextNodeChildrenInternalIgnoreType = 'childContentfulGlossaryDescriptionTextNode___children___internal___ignoreType',
  ChildContentfulGlossaryDescriptionTextNodeChildrenInternalMediaType = 'childContentfulGlossaryDescriptionTextNode___children___internal___mediaType',
  ChildContentfulGlossaryDescriptionTextNodeChildrenInternalOwner = 'childContentfulGlossaryDescriptionTextNode___children___internal___owner',
  ChildContentfulGlossaryDescriptionTextNodeChildrenInternalType = 'childContentfulGlossaryDescriptionTextNode___children___internal___type',
  ChildContentfulGlossaryDescriptionTextNodeInternalContent = 'childContentfulGlossaryDescriptionTextNode___internal___content',
  ChildContentfulGlossaryDescriptionTextNodeInternalContentDigest = 'childContentfulGlossaryDescriptionTextNode___internal___contentDigest',
  ChildContentfulGlossaryDescriptionTextNodeInternalDescription = 'childContentfulGlossaryDescriptionTextNode___internal___description',
  ChildContentfulGlossaryDescriptionTextNodeInternalFieldOwners = 'childContentfulGlossaryDescriptionTextNode___internal___fieldOwners',
  ChildContentfulGlossaryDescriptionTextNodeInternalIgnoreType = 'childContentfulGlossaryDescriptionTextNode___internal___ignoreType',
  ChildContentfulGlossaryDescriptionTextNodeInternalMediaType = 'childContentfulGlossaryDescriptionTextNode___internal___mediaType',
  ChildContentfulGlossaryDescriptionTextNodeInternalOwner = 'childContentfulGlossaryDescriptionTextNode___internal___owner',
  ChildContentfulGlossaryDescriptionTextNodeInternalType = 'childContentfulGlossaryDescriptionTextNode___internal___type',
  ChildContentfulGlossaryDescriptionTextNodeDescription = 'childContentfulGlossaryDescriptionTextNode___description',
  ChildContentfulGlossaryDescriptionTextNodeSysType = 'childContentfulGlossaryDescriptionTextNode___sys___type',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdx = 'childContentfulGlossaryDescriptionTextNode___childrenMdx',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxRawBody = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___rawBody',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxFileAbsolutePath = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___fileAbsolutePath',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxFrontmatterTitle = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___frontmatter___title',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxSlug = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___slug',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxBody = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___body',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxExcerpt = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___excerpt',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxHeadings = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___headings',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxHeadingsValue = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___headings___value',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxHeadingsDepth = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___headings___depth',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxHtml = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___html',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxMdxAst = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___mdxAST',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxTableOfContents = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___tableOfContents',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxTimeToRead = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___timeToRead',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxWordCountParagraphs = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___wordCount___paragraphs',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxWordCountSentences = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___wordCount___sentences',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxWordCountWords = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___wordCount___words',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxId = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___id',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxParentId = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___parent___id',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxParentChildren = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___parent___children',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxChildren = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___children',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxChildrenId = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___children___id',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxChildrenChildren = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___children___children',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxInternalContent = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___internal___content',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxInternalContentDigest = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___internal___contentDigest',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxInternalDescription = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___internal___description',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxInternalFieldOwners = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___internal___fieldOwners',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxInternalIgnoreType = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___internal___ignoreType',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxInternalMediaType = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___internal___mediaType',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxInternalOwner = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___internal___owner',
  ChildContentfulGlossaryDescriptionTextNodeChildrenMdxInternalType = 'childContentfulGlossaryDescriptionTextNode___childrenMdx___internal___type',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxRawBody = 'childContentfulGlossaryDescriptionTextNode___childMdx___rawBody',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxFileAbsolutePath = 'childContentfulGlossaryDescriptionTextNode___childMdx___fileAbsolutePath',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxFrontmatterTitle = 'childContentfulGlossaryDescriptionTextNode___childMdx___frontmatter___title',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxSlug = 'childContentfulGlossaryDescriptionTextNode___childMdx___slug',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxBody = 'childContentfulGlossaryDescriptionTextNode___childMdx___body',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxExcerpt = 'childContentfulGlossaryDescriptionTextNode___childMdx___excerpt',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxHeadings = 'childContentfulGlossaryDescriptionTextNode___childMdx___headings',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxHeadingsValue = 'childContentfulGlossaryDescriptionTextNode___childMdx___headings___value',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxHeadingsDepth = 'childContentfulGlossaryDescriptionTextNode___childMdx___headings___depth',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxHtml = 'childContentfulGlossaryDescriptionTextNode___childMdx___html',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxMdxAst = 'childContentfulGlossaryDescriptionTextNode___childMdx___mdxAST',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxTableOfContents = 'childContentfulGlossaryDescriptionTextNode___childMdx___tableOfContents',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxTimeToRead = 'childContentfulGlossaryDescriptionTextNode___childMdx___timeToRead',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxWordCountParagraphs = 'childContentfulGlossaryDescriptionTextNode___childMdx___wordCount___paragraphs',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxWordCountSentences = 'childContentfulGlossaryDescriptionTextNode___childMdx___wordCount___sentences',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxWordCountWords = 'childContentfulGlossaryDescriptionTextNode___childMdx___wordCount___words',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxId = 'childContentfulGlossaryDescriptionTextNode___childMdx___id',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxParentId = 'childContentfulGlossaryDescriptionTextNode___childMdx___parent___id',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxParentChildren = 'childContentfulGlossaryDescriptionTextNode___childMdx___parent___children',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxChildren = 'childContentfulGlossaryDescriptionTextNode___childMdx___children',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxChildrenId = 'childContentfulGlossaryDescriptionTextNode___childMdx___children___id',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxChildrenChildren = 'childContentfulGlossaryDescriptionTextNode___childMdx___children___children',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxInternalContent = 'childContentfulGlossaryDescriptionTextNode___childMdx___internal___content',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxInternalContentDigest = 'childContentfulGlossaryDescriptionTextNode___childMdx___internal___contentDigest',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxInternalDescription = 'childContentfulGlossaryDescriptionTextNode___childMdx___internal___description',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxInternalFieldOwners = 'childContentfulGlossaryDescriptionTextNode___childMdx___internal___fieldOwners',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxInternalIgnoreType = 'childContentfulGlossaryDescriptionTextNode___childMdx___internal___ignoreType',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxInternalMediaType = 'childContentfulGlossaryDescriptionTextNode___childMdx___internal___mediaType',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxInternalOwner = 'childContentfulGlossaryDescriptionTextNode___childMdx___internal___owner',
  ChildContentfulGlossaryDescriptionTextNodeChildMdxInternalType = 'childContentfulGlossaryDescriptionTextNode___childMdx___internal___type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulGlossaryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulGlossaryDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulGlossarySysFilterInput>;
  childrenContentfulGlossaryDescriptionTextNode?: Maybe<ContentfulGlossaryDescriptionTextNodeFilterListInput>;
  childContentfulGlossaryDescriptionTextNode?: Maybe<ContentfulGlossaryDescriptionTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulGlossaryGroupConnection = {
  __typename?: 'ContentfulGlossaryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulGlossaryEdge>;
  nodes: Array<ContentfulGlossary>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulGlossarySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulGlossaryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulGlossarySys = {
  __typename?: 'ContentfulGlossarySys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulGlossarySysContentType>;
};

export type ContentfulGlossarySysContentType = {
  __typename?: 'ContentfulGlossarySysContentType';
  sys?: Maybe<ContentfulGlossarySysContentTypeSys>;
};

export type ContentfulGlossarySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulGlossarySysContentTypeSysFilterInput>;
};

export type ContentfulGlossarySysContentTypeSys = {
  __typename?: 'ContentfulGlossarySysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulGlossarySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulGlossarySysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulGlossarySysContentTypeFilterInput>;
};

export enum ContentfulImageCropFocus {
  Top = 'TOP',
  TopLeft = 'TOP_LEFT',
  TopRight = 'TOP_RIGHT',
  Bottom = 'BOTTOM',
  BottomRight = 'BOTTOM_RIGHT',
  BottomLeft = 'BOTTOM_LEFT',
  Right = 'RIGHT',
  Left = 'LEFT',
  Face = 'FACE',
  Faces = 'FACES',
  Center = 'CENTER'
}

export enum ContentfulImageFormat {
  NoChange = 'NO_CHANGE',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export type ContentfulPage = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulPage';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  namespace?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  cover?: Maybe<ContentfulAsset>;
  content?: Maybe<ContentfulPageContentTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPageSys>;
  date?: Maybe<Scalars['Date']>;
  author?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type contentfulPageContentTextNode */
  childrenContentfulPageContentTextNode?: Maybe<Array<Maybe<ContentfulPageContentTextNode>>>;
  /**
   * Returns the first child node of type contentfulPageContentTextNode or null if
   * there are no children of given type on this node
   */
  childContentfulPageContentTextNode?: Maybe<ContentfulPageContentTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPageDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPageConnection = {
  __typename?: 'ContentfulPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageGroupConnection>;
};


export type ContentfulPageConnectionDistinctArgs = {
  field: ContentfulPageFieldsEnum;
};


export type ContentfulPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageFieldsEnum;
};

export type ContentfulPageContentTextNode = Node & {
  __typename?: 'contentfulPageContentTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulPageContentTextNodeSys>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
};

export type ContentfulPageContentTextNodeConnection = {
  __typename?: 'contentfulPageContentTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageContentTextNodeEdge>;
  nodes: Array<ContentfulPageContentTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPageContentTextNodeGroupConnection>;
};


export type ContentfulPageContentTextNodeConnectionDistinctArgs = {
  field: ContentfulPageContentTextNodeFieldsEnum;
};


export type ContentfulPageContentTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPageContentTextNodeFieldsEnum;
};

export type ContentfulPageContentTextNodeEdge = {
  __typename?: 'contentfulPageContentTextNodeEdge';
  next?: Maybe<ContentfulPageContentTextNode>;
  node: ContentfulPageContentTextNode;
  previous?: Maybe<ContentfulPageContentTextNode>;
};

export enum ContentfulPageContentTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Content = 'content',
  SysType = 'sys___type',
  ChildrenMdx = 'childrenMdx',
  ChildrenMdxRawBody = 'childrenMdx___rawBody',
  ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
  ChildrenMdxSlug = 'childrenMdx___slug',
  ChildrenMdxBody = 'childrenMdx___body',
  ChildrenMdxExcerpt = 'childrenMdx___excerpt',
  ChildrenMdxHeadings = 'childrenMdx___headings',
  ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
  ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
  ChildrenMdxHtml = 'childrenMdx___html',
  ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
  ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
  ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
  ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
  ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
  ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
  ChildrenMdxId = 'childrenMdx___id',
  ChildrenMdxParentId = 'childrenMdx___parent___id',
  ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
  ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
  ChildrenMdxParentChildren = 'childrenMdx___parent___children',
  ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
  ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
  ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
  ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
  ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
  ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
  ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
  ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
  ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
  ChildrenMdxChildren = 'childrenMdx___children',
  ChildrenMdxChildrenId = 'childrenMdx___children___id',
  ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
  ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
  ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
  ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
  ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
  ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
  ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
  ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
  ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
  ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
  ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
  ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
  ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
  ChildrenMdxInternalContent = 'childrenMdx___internal___content',
  ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
  ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
  ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
  ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
  ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
  ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
  ChildrenMdxInternalType = 'childrenMdx___internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxSlug = 'childMdx___slug',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type'
}

export type ContentfulPageContentTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulPageContentTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulPageContentTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulPageContentTextNodeFilterInput>;
};

export type ContentfulPageContentTextNodeGroupConnection = {
  __typename?: 'contentfulPageContentTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageContentTextNodeEdge>;
  nodes: Array<ContentfulPageContentTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageContentTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageContentTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageContentTextNodeSys = {
  __typename?: 'contentfulPageContentTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulPageContentTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageEdge = {
  __typename?: 'ContentfulPageEdge';
  next?: Maybe<ContentfulPage>;
  node: ContentfulPage;
  previous?: Maybe<ContentfulPage>;
};

export enum ContentfulPageFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Namespace = 'namespace',
  Title = 'title',
  Description = 'description',
  Slug = 'slug',
  Language = 'language',
  CoverContentfulId = 'cover___contentful_id',
  CoverId = 'cover___id',
  CoverSpaceId = 'cover___spaceId',
  CoverCreatedAt = 'cover___createdAt',
  CoverUpdatedAt = 'cover___updatedAt',
  CoverFileUrl = 'cover___file___url',
  CoverFileDetailsSize = 'cover___file___details___size',
  CoverFileFileName = 'cover___file___fileName',
  CoverFileContentType = 'cover___file___contentType',
  CoverFileErrorMessage = 'cover___file___error___message',
  CoverTitle = 'cover___title',
  CoverDescription = 'cover___description',
  CoverNodeLocale = 'cover___node_locale',
  CoverSysType = 'cover___sys___type',
  CoverSysRevision = 'cover___sys___revision',
  CoverLocalFileSourceInstanceName = 'cover___localFile___sourceInstanceName',
  CoverLocalFileAbsolutePath = 'cover___localFile___absolutePath',
  CoverLocalFileRelativePath = 'cover___localFile___relativePath',
  CoverLocalFileExtension = 'cover___localFile___extension',
  CoverLocalFileSize = 'cover___localFile___size',
  CoverLocalFilePrettySize = 'cover___localFile___prettySize',
  CoverLocalFileModifiedTime = 'cover___localFile___modifiedTime',
  CoverLocalFileAccessTime = 'cover___localFile___accessTime',
  CoverLocalFileChangeTime = 'cover___localFile___changeTime',
  CoverLocalFileBirthTime = 'cover___localFile___birthTime',
  CoverLocalFileRoot = 'cover___localFile___root',
  CoverLocalFileDir = 'cover___localFile___dir',
  CoverLocalFileBase = 'cover___localFile___base',
  CoverLocalFileExt = 'cover___localFile___ext',
  CoverLocalFileName = 'cover___localFile___name',
  CoverLocalFileRelativeDirectory = 'cover___localFile___relativeDirectory',
  CoverLocalFileDev = 'cover___localFile___dev',
  CoverLocalFileMode = 'cover___localFile___mode',
  CoverLocalFileNlink = 'cover___localFile___nlink',
  CoverLocalFileUid = 'cover___localFile___uid',
  CoverLocalFileGid = 'cover___localFile___gid',
  CoverLocalFileRdev = 'cover___localFile___rdev',
  CoverLocalFileIno = 'cover___localFile___ino',
  CoverLocalFileAtimeMs = 'cover___localFile___atimeMs',
  CoverLocalFileMtimeMs = 'cover___localFile___mtimeMs',
  CoverLocalFileCtimeMs = 'cover___localFile___ctimeMs',
  CoverLocalFileAtime = 'cover___localFile___atime',
  CoverLocalFileMtime = 'cover___localFile___mtime',
  CoverLocalFileCtime = 'cover___localFile___ctime',
  CoverLocalFileBirthtime = 'cover___localFile___birthtime',
  CoverLocalFileBirthtimeMs = 'cover___localFile___birthtimeMs',
  CoverLocalFileBlksize = 'cover___localFile___blksize',
  CoverLocalFileBlocks = 'cover___localFile___blocks',
  CoverLocalFileUrl = 'cover___localFile___url',
  CoverLocalFilePublicUrl = 'cover___localFile___publicURL',
  CoverLocalFileChildrenImageSharp = 'cover___localFile___childrenImageSharp',
  CoverLocalFileChildrenImageSharpGatsbyImageData = 'cover___localFile___childrenImageSharp___gatsbyImageData',
  CoverLocalFileChildrenImageSharpId = 'cover___localFile___childrenImageSharp___id',
  CoverLocalFileChildrenImageSharpChildren = 'cover___localFile___childrenImageSharp___children',
  CoverLocalFileChildImageSharpGatsbyImageData = 'cover___localFile___childImageSharp___gatsbyImageData',
  CoverLocalFileChildImageSharpId = 'cover___localFile___childImageSharp___id',
  CoverLocalFileChildImageSharpChildren = 'cover___localFile___childImageSharp___children',
  CoverLocalFileId = 'cover___localFile___id',
  CoverLocalFileParentId = 'cover___localFile___parent___id',
  CoverLocalFileParentChildren = 'cover___localFile___parent___children',
  CoverLocalFileChildren = 'cover___localFile___children',
  CoverLocalFileChildrenId = 'cover___localFile___children___id',
  CoverLocalFileChildrenChildren = 'cover___localFile___children___children',
  CoverLocalFileInternalContent = 'cover___localFile___internal___content',
  CoverLocalFileInternalContentDigest = 'cover___localFile___internal___contentDigest',
  CoverLocalFileInternalDescription = 'cover___localFile___internal___description',
  CoverLocalFileInternalFieldOwners = 'cover___localFile___internal___fieldOwners',
  CoverLocalFileInternalIgnoreType = 'cover___localFile___internal___ignoreType',
  CoverLocalFileInternalMediaType = 'cover___localFile___internal___mediaType',
  CoverLocalFileInternalOwner = 'cover___localFile___internal___owner',
  CoverLocalFileInternalType = 'cover___localFile___internal___type',
  CoverFixedBase64 = 'cover___fixed___base64',
  CoverFixedTracedSvg = 'cover___fixed___tracedSVG',
  CoverFixedAspectRatio = 'cover___fixed___aspectRatio',
  CoverFixedWidth = 'cover___fixed___width',
  CoverFixedHeight = 'cover___fixed___height',
  CoverFixedSrc = 'cover___fixed___src',
  CoverFixedSrcSet = 'cover___fixed___srcSet',
  CoverFixedSrcWebp = 'cover___fixed___srcWebp',
  CoverFixedSrcSetWebp = 'cover___fixed___srcSetWebp',
  CoverResolutionsBase64 = 'cover___resolutions___base64',
  CoverResolutionsTracedSvg = 'cover___resolutions___tracedSVG',
  CoverResolutionsAspectRatio = 'cover___resolutions___aspectRatio',
  CoverResolutionsWidth = 'cover___resolutions___width',
  CoverResolutionsHeight = 'cover___resolutions___height',
  CoverResolutionsSrc = 'cover___resolutions___src',
  CoverResolutionsSrcSet = 'cover___resolutions___srcSet',
  CoverResolutionsSrcWebp = 'cover___resolutions___srcWebp',
  CoverResolutionsSrcSetWebp = 'cover___resolutions___srcSetWebp',
  CoverFluidBase64 = 'cover___fluid___base64',
  CoverFluidTracedSvg = 'cover___fluid___tracedSVG',
  CoverFluidAspectRatio = 'cover___fluid___aspectRatio',
  CoverFluidSrc = 'cover___fluid___src',
  CoverFluidSrcSet = 'cover___fluid___srcSet',
  CoverFluidSrcWebp = 'cover___fluid___srcWebp',
  CoverFluidSrcSetWebp = 'cover___fluid___srcSetWebp',
  CoverFluidSizes = 'cover___fluid___sizes',
  CoverSizesBase64 = 'cover___sizes___base64',
  CoverSizesTracedSvg = 'cover___sizes___tracedSVG',
  CoverSizesAspectRatio = 'cover___sizes___aspectRatio',
  CoverSizesSrc = 'cover___sizes___src',
  CoverSizesSrcSet = 'cover___sizes___srcSet',
  CoverSizesSrcWebp = 'cover___sizes___srcWebp',
  CoverSizesSrcSetWebp = 'cover___sizes___srcSetWebp',
  CoverSizesSizes = 'cover___sizes___sizes',
  CoverResizeBase64 = 'cover___resize___base64',
  CoverResizeTracedSvg = 'cover___resize___tracedSVG',
  CoverResizeSrc = 'cover___resize___src',
  CoverResizeWidth = 'cover___resize___width',
  CoverResizeHeight = 'cover___resize___height',
  CoverResizeAspectRatio = 'cover___resize___aspectRatio',
  CoverParentId = 'cover___parent___id',
  CoverParentParentId = 'cover___parent___parent___id',
  CoverParentParentChildren = 'cover___parent___parent___children',
  CoverParentChildren = 'cover___parent___children',
  CoverParentChildrenId = 'cover___parent___children___id',
  CoverParentChildrenChildren = 'cover___parent___children___children',
  CoverParentInternalContent = 'cover___parent___internal___content',
  CoverParentInternalContentDigest = 'cover___parent___internal___contentDigest',
  CoverParentInternalDescription = 'cover___parent___internal___description',
  CoverParentInternalFieldOwners = 'cover___parent___internal___fieldOwners',
  CoverParentInternalIgnoreType = 'cover___parent___internal___ignoreType',
  CoverParentInternalMediaType = 'cover___parent___internal___mediaType',
  CoverParentInternalOwner = 'cover___parent___internal___owner',
  CoverParentInternalType = 'cover___parent___internal___type',
  CoverChildren = 'cover___children',
  CoverChildrenId = 'cover___children___id',
  CoverChildrenParentId = 'cover___children___parent___id',
  CoverChildrenParentChildren = 'cover___children___parent___children',
  CoverChildrenChildren = 'cover___children___children',
  CoverChildrenChildrenId = 'cover___children___children___id',
  CoverChildrenChildrenChildren = 'cover___children___children___children',
  CoverChildrenInternalContent = 'cover___children___internal___content',
  CoverChildrenInternalContentDigest = 'cover___children___internal___contentDigest',
  CoverChildrenInternalDescription = 'cover___children___internal___description',
  CoverChildrenInternalFieldOwners = 'cover___children___internal___fieldOwners',
  CoverChildrenInternalIgnoreType = 'cover___children___internal___ignoreType',
  CoverChildrenInternalMediaType = 'cover___children___internal___mediaType',
  CoverChildrenInternalOwner = 'cover___children___internal___owner',
  CoverChildrenInternalType = 'cover___children___internal___type',
  CoverInternalContent = 'cover___internal___content',
  CoverInternalContentDigest = 'cover___internal___contentDigest',
  CoverInternalDescription = 'cover___internal___description',
  CoverInternalFieldOwners = 'cover___internal___fieldOwners',
  CoverInternalIgnoreType = 'cover___internal___ignoreType',
  CoverInternalMediaType = 'cover___internal___mediaType',
  CoverInternalOwner = 'cover___internal___owner',
  CoverInternalType = 'cover___internal___type',
  ContentId = 'content___id',
  ContentParentId = 'content___parent___id',
  ContentParentParentId = 'content___parent___parent___id',
  ContentParentParentChildren = 'content___parent___parent___children',
  ContentParentChildren = 'content___parent___children',
  ContentParentChildrenId = 'content___parent___children___id',
  ContentParentChildrenChildren = 'content___parent___children___children',
  ContentParentInternalContent = 'content___parent___internal___content',
  ContentParentInternalContentDigest = 'content___parent___internal___contentDigest',
  ContentParentInternalDescription = 'content___parent___internal___description',
  ContentParentInternalFieldOwners = 'content___parent___internal___fieldOwners',
  ContentParentInternalIgnoreType = 'content___parent___internal___ignoreType',
  ContentParentInternalMediaType = 'content___parent___internal___mediaType',
  ContentParentInternalOwner = 'content___parent___internal___owner',
  ContentParentInternalType = 'content___parent___internal___type',
  ContentChildren = 'content___children',
  ContentChildrenId = 'content___children___id',
  ContentChildrenParentId = 'content___children___parent___id',
  ContentChildrenParentChildren = 'content___children___parent___children',
  ContentChildrenChildren = 'content___children___children',
  ContentChildrenChildrenId = 'content___children___children___id',
  ContentChildrenChildrenChildren = 'content___children___children___children',
  ContentChildrenInternalContent = 'content___children___internal___content',
  ContentChildrenInternalContentDigest = 'content___children___internal___contentDigest',
  ContentChildrenInternalDescription = 'content___children___internal___description',
  ContentChildrenInternalFieldOwners = 'content___children___internal___fieldOwners',
  ContentChildrenInternalIgnoreType = 'content___children___internal___ignoreType',
  ContentChildrenInternalMediaType = 'content___children___internal___mediaType',
  ContentChildrenInternalOwner = 'content___children___internal___owner',
  ContentChildrenInternalType = 'content___children___internal___type',
  ContentInternalContent = 'content___internal___content',
  ContentInternalContentDigest = 'content___internal___contentDigest',
  ContentInternalDescription = 'content___internal___description',
  ContentInternalFieldOwners = 'content___internal___fieldOwners',
  ContentInternalIgnoreType = 'content___internal___ignoreType',
  ContentInternalMediaType = 'content___internal___mediaType',
  ContentInternalOwner = 'content___internal___owner',
  ContentInternalType = 'content___internal___type',
  ContentContent = 'content___content',
  ContentSysType = 'content___sys___type',
  ContentChildrenMdx = 'content___childrenMdx',
  ContentChildrenMdxRawBody = 'content___childrenMdx___rawBody',
  ContentChildrenMdxFileAbsolutePath = 'content___childrenMdx___fileAbsolutePath',
  ContentChildrenMdxFrontmatterTitle = 'content___childrenMdx___frontmatter___title',
  ContentChildrenMdxSlug = 'content___childrenMdx___slug',
  ContentChildrenMdxBody = 'content___childrenMdx___body',
  ContentChildrenMdxExcerpt = 'content___childrenMdx___excerpt',
  ContentChildrenMdxHeadings = 'content___childrenMdx___headings',
  ContentChildrenMdxHeadingsValue = 'content___childrenMdx___headings___value',
  ContentChildrenMdxHeadingsDepth = 'content___childrenMdx___headings___depth',
  ContentChildrenMdxHtml = 'content___childrenMdx___html',
  ContentChildrenMdxMdxAst = 'content___childrenMdx___mdxAST',
  ContentChildrenMdxTableOfContents = 'content___childrenMdx___tableOfContents',
  ContentChildrenMdxTimeToRead = 'content___childrenMdx___timeToRead',
  ContentChildrenMdxWordCountParagraphs = 'content___childrenMdx___wordCount___paragraphs',
  ContentChildrenMdxWordCountSentences = 'content___childrenMdx___wordCount___sentences',
  ContentChildrenMdxWordCountWords = 'content___childrenMdx___wordCount___words',
  ContentChildrenMdxId = 'content___childrenMdx___id',
  ContentChildrenMdxParentId = 'content___childrenMdx___parent___id',
  ContentChildrenMdxParentChildren = 'content___childrenMdx___parent___children',
  ContentChildrenMdxChildren = 'content___childrenMdx___children',
  ContentChildrenMdxChildrenId = 'content___childrenMdx___children___id',
  ContentChildrenMdxChildrenChildren = 'content___childrenMdx___children___children',
  ContentChildrenMdxInternalContent = 'content___childrenMdx___internal___content',
  ContentChildrenMdxInternalContentDigest = 'content___childrenMdx___internal___contentDigest',
  ContentChildrenMdxInternalDescription = 'content___childrenMdx___internal___description',
  ContentChildrenMdxInternalFieldOwners = 'content___childrenMdx___internal___fieldOwners',
  ContentChildrenMdxInternalIgnoreType = 'content___childrenMdx___internal___ignoreType',
  ContentChildrenMdxInternalMediaType = 'content___childrenMdx___internal___mediaType',
  ContentChildrenMdxInternalOwner = 'content___childrenMdx___internal___owner',
  ContentChildrenMdxInternalType = 'content___childrenMdx___internal___type',
  ContentChildMdxRawBody = 'content___childMdx___rawBody',
  ContentChildMdxFileAbsolutePath = 'content___childMdx___fileAbsolutePath',
  ContentChildMdxFrontmatterTitle = 'content___childMdx___frontmatter___title',
  ContentChildMdxSlug = 'content___childMdx___slug',
  ContentChildMdxBody = 'content___childMdx___body',
  ContentChildMdxExcerpt = 'content___childMdx___excerpt',
  ContentChildMdxHeadings = 'content___childMdx___headings',
  ContentChildMdxHeadingsValue = 'content___childMdx___headings___value',
  ContentChildMdxHeadingsDepth = 'content___childMdx___headings___depth',
  ContentChildMdxHtml = 'content___childMdx___html',
  ContentChildMdxMdxAst = 'content___childMdx___mdxAST',
  ContentChildMdxTableOfContents = 'content___childMdx___tableOfContents',
  ContentChildMdxTimeToRead = 'content___childMdx___timeToRead',
  ContentChildMdxWordCountParagraphs = 'content___childMdx___wordCount___paragraphs',
  ContentChildMdxWordCountSentences = 'content___childMdx___wordCount___sentences',
  ContentChildMdxWordCountWords = 'content___childMdx___wordCount___words',
  ContentChildMdxId = 'content___childMdx___id',
  ContentChildMdxParentId = 'content___childMdx___parent___id',
  ContentChildMdxParentChildren = 'content___childMdx___parent___children',
  ContentChildMdxChildren = 'content___childMdx___children',
  ContentChildMdxChildrenId = 'content___childMdx___children___id',
  ContentChildMdxChildrenChildren = 'content___childMdx___children___children',
  ContentChildMdxInternalContent = 'content___childMdx___internal___content',
  ContentChildMdxInternalContentDigest = 'content___childMdx___internal___contentDigest',
  ContentChildMdxInternalDescription = 'content___childMdx___internal___description',
  ContentChildMdxInternalFieldOwners = 'content___childMdx___internal___fieldOwners',
  ContentChildMdxInternalIgnoreType = 'content___childMdx___internal___ignoreType',
  ContentChildMdxInternalMediaType = 'content___childMdx___internal___mediaType',
  ContentChildMdxInternalOwner = 'content___childMdx___internal___owner',
  ContentChildMdxInternalType = 'content___childMdx___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  Date = 'date',
  Author = 'author',
  ChildrenContentfulPageContentTextNode = 'childrenContentfulPageContentTextNode',
  ChildrenContentfulPageContentTextNodeId = 'childrenContentfulPageContentTextNode___id',
  ChildrenContentfulPageContentTextNodeParentId = 'childrenContentfulPageContentTextNode___parent___id',
  ChildrenContentfulPageContentTextNodeParentParentId = 'childrenContentfulPageContentTextNode___parent___parent___id',
  ChildrenContentfulPageContentTextNodeParentParentChildren = 'childrenContentfulPageContentTextNode___parent___parent___children',
  ChildrenContentfulPageContentTextNodeParentChildren = 'childrenContentfulPageContentTextNode___parent___children',
  ChildrenContentfulPageContentTextNodeParentChildrenId = 'childrenContentfulPageContentTextNode___parent___children___id',
  ChildrenContentfulPageContentTextNodeParentChildrenChildren = 'childrenContentfulPageContentTextNode___parent___children___children',
  ChildrenContentfulPageContentTextNodeParentInternalContent = 'childrenContentfulPageContentTextNode___parent___internal___content',
  ChildrenContentfulPageContentTextNodeParentInternalContentDigest = 'childrenContentfulPageContentTextNode___parent___internal___contentDigest',
  ChildrenContentfulPageContentTextNodeParentInternalDescription = 'childrenContentfulPageContentTextNode___parent___internal___description',
  ChildrenContentfulPageContentTextNodeParentInternalFieldOwners = 'childrenContentfulPageContentTextNode___parent___internal___fieldOwners',
  ChildrenContentfulPageContentTextNodeParentInternalIgnoreType = 'childrenContentfulPageContentTextNode___parent___internal___ignoreType',
  ChildrenContentfulPageContentTextNodeParentInternalMediaType = 'childrenContentfulPageContentTextNode___parent___internal___mediaType',
  ChildrenContentfulPageContentTextNodeParentInternalOwner = 'childrenContentfulPageContentTextNode___parent___internal___owner',
  ChildrenContentfulPageContentTextNodeParentInternalType = 'childrenContentfulPageContentTextNode___parent___internal___type',
  ChildrenContentfulPageContentTextNodeChildren = 'childrenContentfulPageContentTextNode___children',
  ChildrenContentfulPageContentTextNodeChildrenId = 'childrenContentfulPageContentTextNode___children___id',
  ChildrenContentfulPageContentTextNodeChildrenParentId = 'childrenContentfulPageContentTextNode___children___parent___id',
  ChildrenContentfulPageContentTextNodeChildrenParentChildren = 'childrenContentfulPageContentTextNode___children___parent___children',
  ChildrenContentfulPageContentTextNodeChildrenChildren = 'childrenContentfulPageContentTextNode___children___children',
  ChildrenContentfulPageContentTextNodeChildrenChildrenId = 'childrenContentfulPageContentTextNode___children___children___id',
  ChildrenContentfulPageContentTextNodeChildrenChildrenChildren = 'childrenContentfulPageContentTextNode___children___children___children',
  ChildrenContentfulPageContentTextNodeChildrenInternalContent = 'childrenContentfulPageContentTextNode___children___internal___content',
  ChildrenContentfulPageContentTextNodeChildrenInternalContentDigest = 'childrenContentfulPageContentTextNode___children___internal___contentDigest',
  ChildrenContentfulPageContentTextNodeChildrenInternalDescription = 'childrenContentfulPageContentTextNode___children___internal___description',
  ChildrenContentfulPageContentTextNodeChildrenInternalFieldOwners = 'childrenContentfulPageContentTextNode___children___internal___fieldOwners',
  ChildrenContentfulPageContentTextNodeChildrenInternalIgnoreType = 'childrenContentfulPageContentTextNode___children___internal___ignoreType',
  ChildrenContentfulPageContentTextNodeChildrenInternalMediaType = 'childrenContentfulPageContentTextNode___children___internal___mediaType',
  ChildrenContentfulPageContentTextNodeChildrenInternalOwner = 'childrenContentfulPageContentTextNode___children___internal___owner',
  ChildrenContentfulPageContentTextNodeChildrenInternalType = 'childrenContentfulPageContentTextNode___children___internal___type',
  ChildrenContentfulPageContentTextNodeInternalContent = 'childrenContentfulPageContentTextNode___internal___content',
  ChildrenContentfulPageContentTextNodeInternalContentDigest = 'childrenContentfulPageContentTextNode___internal___contentDigest',
  ChildrenContentfulPageContentTextNodeInternalDescription = 'childrenContentfulPageContentTextNode___internal___description',
  ChildrenContentfulPageContentTextNodeInternalFieldOwners = 'childrenContentfulPageContentTextNode___internal___fieldOwners',
  ChildrenContentfulPageContentTextNodeInternalIgnoreType = 'childrenContentfulPageContentTextNode___internal___ignoreType',
  ChildrenContentfulPageContentTextNodeInternalMediaType = 'childrenContentfulPageContentTextNode___internal___mediaType',
  ChildrenContentfulPageContentTextNodeInternalOwner = 'childrenContentfulPageContentTextNode___internal___owner',
  ChildrenContentfulPageContentTextNodeInternalType = 'childrenContentfulPageContentTextNode___internal___type',
  ChildrenContentfulPageContentTextNodeContent = 'childrenContentfulPageContentTextNode___content',
  ChildrenContentfulPageContentTextNodeSysType = 'childrenContentfulPageContentTextNode___sys___type',
  ChildrenContentfulPageContentTextNodeChildrenMdx = 'childrenContentfulPageContentTextNode___childrenMdx',
  ChildrenContentfulPageContentTextNodeChildrenMdxRawBody = 'childrenContentfulPageContentTextNode___childrenMdx___rawBody',
  ChildrenContentfulPageContentTextNodeChildrenMdxFileAbsolutePath = 'childrenContentfulPageContentTextNode___childrenMdx___fileAbsolutePath',
  ChildrenContentfulPageContentTextNodeChildrenMdxFrontmatterTitle = 'childrenContentfulPageContentTextNode___childrenMdx___frontmatter___title',
  ChildrenContentfulPageContentTextNodeChildrenMdxSlug = 'childrenContentfulPageContentTextNode___childrenMdx___slug',
  ChildrenContentfulPageContentTextNodeChildrenMdxBody = 'childrenContentfulPageContentTextNode___childrenMdx___body',
  ChildrenContentfulPageContentTextNodeChildrenMdxExcerpt = 'childrenContentfulPageContentTextNode___childrenMdx___excerpt',
  ChildrenContentfulPageContentTextNodeChildrenMdxHeadings = 'childrenContentfulPageContentTextNode___childrenMdx___headings',
  ChildrenContentfulPageContentTextNodeChildrenMdxHeadingsValue = 'childrenContentfulPageContentTextNode___childrenMdx___headings___value',
  ChildrenContentfulPageContentTextNodeChildrenMdxHeadingsDepth = 'childrenContentfulPageContentTextNode___childrenMdx___headings___depth',
  ChildrenContentfulPageContentTextNodeChildrenMdxHtml = 'childrenContentfulPageContentTextNode___childrenMdx___html',
  ChildrenContentfulPageContentTextNodeChildrenMdxMdxAst = 'childrenContentfulPageContentTextNode___childrenMdx___mdxAST',
  ChildrenContentfulPageContentTextNodeChildrenMdxTableOfContents = 'childrenContentfulPageContentTextNode___childrenMdx___tableOfContents',
  ChildrenContentfulPageContentTextNodeChildrenMdxTimeToRead = 'childrenContentfulPageContentTextNode___childrenMdx___timeToRead',
  ChildrenContentfulPageContentTextNodeChildrenMdxWordCountParagraphs = 'childrenContentfulPageContentTextNode___childrenMdx___wordCount___paragraphs',
  ChildrenContentfulPageContentTextNodeChildrenMdxWordCountSentences = 'childrenContentfulPageContentTextNode___childrenMdx___wordCount___sentences',
  ChildrenContentfulPageContentTextNodeChildrenMdxWordCountWords = 'childrenContentfulPageContentTextNode___childrenMdx___wordCount___words',
  ChildrenContentfulPageContentTextNodeChildrenMdxId = 'childrenContentfulPageContentTextNode___childrenMdx___id',
  ChildrenContentfulPageContentTextNodeChildrenMdxParentId = 'childrenContentfulPageContentTextNode___childrenMdx___parent___id',
  ChildrenContentfulPageContentTextNodeChildrenMdxParentChildren = 'childrenContentfulPageContentTextNode___childrenMdx___parent___children',
  ChildrenContentfulPageContentTextNodeChildrenMdxChildren = 'childrenContentfulPageContentTextNode___childrenMdx___children',
  ChildrenContentfulPageContentTextNodeChildrenMdxChildrenId = 'childrenContentfulPageContentTextNode___childrenMdx___children___id',
  ChildrenContentfulPageContentTextNodeChildrenMdxChildrenChildren = 'childrenContentfulPageContentTextNode___childrenMdx___children___children',
  ChildrenContentfulPageContentTextNodeChildrenMdxInternalContent = 'childrenContentfulPageContentTextNode___childrenMdx___internal___content',
  ChildrenContentfulPageContentTextNodeChildrenMdxInternalContentDigest = 'childrenContentfulPageContentTextNode___childrenMdx___internal___contentDigest',
  ChildrenContentfulPageContentTextNodeChildrenMdxInternalDescription = 'childrenContentfulPageContentTextNode___childrenMdx___internal___description',
  ChildrenContentfulPageContentTextNodeChildrenMdxInternalFieldOwners = 'childrenContentfulPageContentTextNode___childrenMdx___internal___fieldOwners',
  ChildrenContentfulPageContentTextNodeChildrenMdxInternalIgnoreType = 'childrenContentfulPageContentTextNode___childrenMdx___internal___ignoreType',
  ChildrenContentfulPageContentTextNodeChildrenMdxInternalMediaType = 'childrenContentfulPageContentTextNode___childrenMdx___internal___mediaType',
  ChildrenContentfulPageContentTextNodeChildrenMdxInternalOwner = 'childrenContentfulPageContentTextNode___childrenMdx___internal___owner',
  ChildrenContentfulPageContentTextNodeChildrenMdxInternalType = 'childrenContentfulPageContentTextNode___childrenMdx___internal___type',
  ChildrenContentfulPageContentTextNodeChildMdxRawBody = 'childrenContentfulPageContentTextNode___childMdx___rawBody',
  ChildrenContentfulPageContentTextNodeChildMdxFileAbsolutePath = 'childrenContentfulPageContentTextNode___childMdx___fileAbsolutePath',
  ChildrenContentfulPageContentTextNodeChildMdxFrontmatterTitle = 'childrenContentfulPageContentTextNode___childMdx___frontmatter___title',
  ChildrenContentfulPageContentTextNodeChildMdxSlug = 'childrenContentfulPageContentTextNode___childMdx___slug',
  ChildrenContentfulPageContentTextNodeChildMdxBody = 'childrenContentfulPageContentTextNode___childMdx___body',
  ChildrenContentfulPageContentTextNodeChildMdxExcerpt = 'childrenContentfulPageContentTextNode___childMdx___excerpt',
  ChildrenContentfulPageContentTextNodeChildMdxHeadings = 'childrenContentfulPageContentTextNode___childMdx___headings',
  ChildrenContentfulPageContentTextNodeChildMdxHeadingsValue = 'childrenContentfulPageContentTextNode___childMdx___headings___value',
  ChildrenContentfulPageContentTextNodeChildMdxHeadingsDepth = 'childrenContentfulPageContentTextNode___childMdx___headings___depth',
  ChildrenContentfulPageContentTextNodeChildMdxHtml = 'childrenContentfulPageContentTextNode___childMdx___html',
  ChildrenContentfulPageContentTextNodeChildMdxMdxAst = 'childrenContentfulPageContentTextNode___childMdx___mdxAST',
  ChildrenContentfulPageContentTextNodeChildMdxTableOfContents = 'childrenContentfulPageContentTextNode___childMdx___tableOfContents',
  ChildrenContentfulPageContentTextNodeChildMdxTimeToRead = 'childrenContentfulPageContentTextNode___childMdx___timeToRead',
  ChildrenContentfulPageContentTextNodeChildMdxWordCountParagraphs = 'childrenContentfulPageContentTextNode___childMdx___wordCount___paragraphs',
  ChildrenContentfulPageContentTextNodeChildMdxWordCountSentences = 'childrenContentfulPageContentTextNode___childMdx___wordCount___sentences',
  ChildrenContentfulPageContentTextNodeChildMdxWordCountWords = 'childrenContentfulPageContentTextNode___childMdx___wordCount___words',
  ChildrenContentfulPageContentTextNodeChildMdxId = 'childrenContentfulPageContentTextNode___childMdx___id',
  ChildrenContentfulPageContentTextNodeChildMdxParentId = 'childrenContentfulPageContentTextNode___childMdx___parent___id',
  ChildrenContentfulPageContentTextNodeChildMdxParentChildren = 'childrenContentfulPageContentTextNode___childMdx___parent___children',
  ChildrenContentfulPageContentTextNodeChildMdxChildren = 'childrenContentfulPageContentTextNode___childMdx___children',
  ChildrenContentfulPageContentTextNodeChildMdxChildrenId = 'childrenContentfulPageContentTextNode___childMdx___children___id',
  ChildrenContentfulPageContentTextNodeChildMdxChildrenChildren = 'childrenContentfulPageContentTextNode___childMdx___children___children',
  ChildrenContentfulPageContentTextNodeChildMdxInternalContent = 'childrenContentfulPageContentTextNode___childMdx___internal___content',
  ChildrenContentfulPageContentTextNodeChildMdxInternalContentDigest = 'childrenContentfulPageContentTextNode___childMdx___internal___contentDigest',
  ChildrenContentfulPageContentTextNodeChildMdxInternalDescription = 'childrenContentfulPageContentTextNode___childMdx___internal___description',
  ChildrenContentfulPageContentTextNodeChildMdxInternalFieldOwners = 'childrenContentfulPageContentTextNode___childMdx___internal___fieldOwners',
  ChildrenContentfulPageContentTextNodeChildMdxInternalIgnoreType = 'childrenContentfulPageContentTextNode___childMdx___internal___ignoreType',
  ChildrenContentfulPageContentTextNodeChildMdxInternalMediaType = 'childrenContentfulPageContentTextNode___childMdx___internal___mediaType',
  ChildrenContentfulPageContentTextNodeChildMdxInternalOwner = 'childrenContentfulPageContentTextNode___childMdx___internal___owner',
  ChildrenContentfulPageContentTextNodeChildMdxInternalType = 'childrenContentfulPageContentTextNode___childMdx___internal___type',
  ChildContentfulPageContentTextNodeId = 'childContentfulPageContentTextNode___id',
  ChildContentfulPageContentTextNodeParentId = 'childContentfulPageContentTextNode___parent___id',
  ChildContentfulPageContentTextNodeParentParentId = 'childContentfulPageContentTextNode___parent___parent___id',
  ChildContentfulPageContentTextNodeParentParentChildren = 'childContentfulPageContentTextNode___parent___parent___children',
  ChildContentfulPageContentTextNodeParentChildren = 'childContentfulPageContentTextNode___parent___children',
  ChildContentfulPageContentTextNodeParentChildrenId = 'childContentfulPageContentTextNode___parent___children___id',
  ChildContentfulPageContentTextNodeParentChildrenChildren = 'childContentfulPageContentTextNode___parent___children___children',
  ChildContentfulPageContentTextNodeParentInternalContent = 'childContentfulPageContentTextNode___parent___internal___content',
  ChildContentfulPageContentTextNodeParentInternalContentDigest = 'childContentfulPageContentTextNode___parent___internal___contentDigest',
  ChildContentfulPageContentTextNodeParentInternalDescription = 'childContentfulPageContentTextNode___parent___internal___description',
  ChildContentfulPageContentTextNodeParentInternalFieldOwners = 'childContentfulPageContentTextNode___parent___internal___fieldOwners',
  ChildContentfulPageContentTextNodeParentInternalIgnoreType = 'childContentfulPageContentTextNode___parent___internal___ignoreType',
  ChildContentfulPageContentTextNodeParentInternalMediaType = 'childContentfulPageContentTextNode___parent___internal___mediaType',
  ChildContentfulPageContentTextNodeParentInternalOwner = 'childContentfulPageContentTextNode___parent___internal___owner',
  ChildContentfulPageContentTextNodeParentInternalType = 'childContentfulPageContentTextNode___parent___internal___type',
  ChildContentfulPageContentTextNodeChildren = 'childContentfulPageContentTextNode___children',
  ChildContentfulPageContentTextNodeChildrenId = 'childContentfulPageContentTextNode___children___id',
  ChildContentfulPageContentTextNodeChildrenParentId = 'childContentfulPageContentTextNode___children___parent___id',
  ChildContentfulPageContentTextNodeChildrenParentChildren = 'childContentfulPageContentTextNode___children___parent___children',
  ChildContentfulPageContentTextNodeChildrenChildren = 'childContentfulPageContentTextNode___children___children',
  ChildContentfulPageContentTextNodeChildrenChildrenId = 'childContentfulPageContentTextNode___children___children___id',
  ChildContentfulPageContentTextNodeChildrenChildrenChildren = 'childContentfulPageContentTextNode___children___children___children',
  ChildContentfulPageContentTextNodeChildrenInternalContent = 'childContentfulPageContentTextNode___children___internal___content',
  ChildContentfulPageContentTextNodeChildrenInternalContentDigest = 'childContentfulPageContentTextNode___children___internal___contentDigest',
  ChildContentfulPageContentTextNodeChildrenInternalDescription = 'childContentfulPageContentTextNode___children___internal___description',
  ChildContentfulPageContentTextNodeChildrenInternalFieldOwners = 'childContentfulPageContentTextNode___children___internal___fieldOwners',
  ChildContentfulPageContentTextNodeChildrenInternalIgnoreType = 'childContentfulPageContentTextNode___children___internal___ignoreType',
  ChildContentfulPageContentTextNodeChildrenInternalMediaType = 'childContentfulPageContentTextNode___children___internal___mediaType',
  ChildContentfulPageContentTextNodeChildrenInternalOwner = 'childContentfulPageContentTextNode___children___internal___owner',
  ChildContentfulPageContentTextNodeChildrenInternalType = 'childContentfulPageContentTextNode___children___internal___type',
  ChildContentfulPageContentTextNodeInternalContent = 'childContentfulPageContentTextNode___internal___content',
  ChildContentfulPageContentTextNodeInternalContentDigest = 'childContentfulPageContentTextNode___internal___contentDigest',
  ChildContentfulPageContentTextNodeInternalDescription = 'childContentfulPageContentTextNode___internal___description',
  ChildContentfulPageContentTextNodeInternalFieldOwners = 'childContentfulPageContentTextNode___internal___fieldOwners',
  ChildContentfulPageContentTextNodeInternalIgnoreType = 'childContentfulPageContentTextNode___internal___ignoreType',
  ChildContentfulPageContentTextNodeInternalMediaType = 'childContentfulPageContentTextNode___internal___mediaType',
  ChildContentfulPageContentTextNodeInternalOwner = 'childContentfulPageContentTextNode___internal___owner',
  ChildContentfulPageContentTextNodeInternalType = 'childContentfulPageContentTextNode___internal___type',
  ChildContentfulPageContentTextNodeContent = 'childContentfulPageContentTextNode___content',
  ChildContentfulPageContentTextNodeSysType = 'childContentfulPageContentTextNode___sys___type',
  ChildContentfulPageContentTextNodeChildrenMdx = 'childContentfulPageContentTextNode___childrenMdx',
  ChildContentfulPageContentTextNodeChildrenMdxRawBody = 'childContentfulPageContentTextNode___childrenMdx___rawBody',
  ChildContentfulPageContentTextNodeChildrenMdxFileAbsolutePath = 'childContentfulPageContentTextNode___childrenMdx___fileAbsolutePath',
  ChildContentfulPageContentTextNodeChildrenMdxFrontmatterTitle = 'childContentfulPageContentTextNode___childrenMdx___frontmatter___title',
  ChildContentfulPageContentTextNodeChildrenMdxSlug = 'childContentfulPageContentTextNode___childrenMdx___slug',
  ChildContentfulPageContentTextNodeChildrenMdxBody = 'childContentfulPageContentTextNode___childrenMdx___body',
  ChildContentfulPageContentTextNodeChildrenMdxExcerpt = 'childContentfulPageContentTextNode___childrenMdx___excerpt',
  ChildContentfulPageContentTextNodeChildrenMdxHeadings = 'childContentfulPageContentTextNode___childrenMdx___headings',
  ChildContentfulPageContentTextNodeChildrenMdxHeadingsValue = 'childContentfulPageContentTextNode___childrenMdx___headings___value',
  ChildContentfulPageContentTextNodeChildrenMdxHeadingsDepth = 'childContentfulPageContentTextNode___childrenMdx___headings___depth',
  ChildContentfulPageContentTextNodeChildrenMdxHtml = 'childContentfulPageContentTextNode___childrenMdx___html',
  ChildContentfulPageContentTextNodeChildrenMdxMdxAst = 'childContentfulPageContentTextNode___childrenMdx___mdxAST',
  ChildContentfulPageContentTextNodeChildrenMdxTableOfContents = 'childContentfulPageContentTextNode___childrenMdx___tableOfContents',
  ChildContentfulPageContentTextNodeChildrenMdxTimeToRead = 'childContentfulPageContentTextNode___childrenMdx___timeToRead',
  ChildContentfulPageContentTextNodeChildrenMdxWordCountParagraphs = 'childContentfulPageContentTextNode___childrenMdx___wordCount___paragraphs',
  ChildContentfulPageContentTextNodeChildrenMdxWordCountSentences = 'childContentfulPageContentTextNode___childrenMdx___wordCount___sentences',
  ChildContentfulPageContentTextNodeChildrenMdxWordCountWords = 'childContentfulPageContentTextNode___childrenMdx___wordCount___words',
  ChildContentfulPageContentTextNodeChildrenMdxId = 'childContentfulPageContentTextNode___childrenMdx___id',
  ChildContentfulPageContentTextNodeChildrenMdxParentId = 'childContentfulPageContentTextNode___childrenMdx___parent___id',
  ChildContentfulPageContentTextNodeChildrenMdxParentChildren = 'childContentfulPageContentTextNode___childrenMdx___parent___children',
  ChildContentfulPageContentTextNodeChildrenMdxChildren = 'childContentfulPageContentTextNode___childrenMdx___children',
  ChildContentfulPageContentTextNodeChildrenMdxChildrenId = 'childContentfulPageContentTextNode___childrenMdx___children___id',
  ChildContentfulPageContentTextNodeChildrenMdxChildrenChildren = 'childContentfulPageContentTextNode___childrenMdx___children___children',
  ChildContentfulPageContentTextNodeChildrenMdxInternalContent = 'childContentfulPageContentTextNode___childrenMdx___internal___content',
  ChildContentfulPageContentTextNodeChildrenMdxInternalContentDigest = 'childContentfulPageContentTextNode___childrenMdx___internal___contentDigest',
  ChildContentfulPageContentTextNodeChildrenMdxInternalDescription = 'childContentfulPageContentTextNode___childrenMdx___internal___description',
  ChildContentfulPageContentTextNodeChildrenMdxInternalFieldOwners = 'childContentfulPageContentTextNode___childrenMdx___internal___fieldOwners',
  ChildContentfulPageContentTextNodeChildrenMdxInternalIgnoreType = 'childContentfulPageContentTextNode___childrenMdx___internal___ignoreType',
  ChildContentfulPageContentTextNodeChildrenMdxInternalMediaType = 'childContentfulPageContentTextNode___childrenMdx___internal___mediaType',
  ChildContentfulPageContentTextNodeChildrenMdxInternalOwner = 'childContentfulPageContentTextNode___childrenMdx___internal___owner',
  ChildContentfulPageContentTextNodeChildrenMdxInternalType = 'childContentfulPageContentTextNode___childrenMdx___internal___type',
  ChildContentfulPageContentTextNodeChildMdxRawBody = 'childContentfulPageContentTextNode___childMdx___rawBody',
  ChildContentfulPageContentTextNodeChildMdxFileAbsolutePath = 'childContentfulPageContentTextNode___childMdx___fileAbsolutePath',
  ChildContentfulPageContentTextNodeChildMdxFrontmatterTitle = 'childContentfulPageContentTextNode___childMdx___frontmatter___title',
  ChildContentfulPageContentTextNodeChildMdxSlug = 'childContentfulPageContentTextNode___childMdx___slug',
  ChildContentfulPageContentTextNodeChildMdxBody = 'childContentfulPageContentTextNode___childMdx___body',
  ChildContentfulPageContentTextNodeChildMdxExcerpt = 'childContentfulPageContentTextNode___childMdx___excerpt',
  ChildContentfulPageContentTextNodeChildMdxHeadings = 'childContentfulPageContentTextNode___childMdx___headings',
  ChildContentfulPageContentTextNodeChildMdxHeadingsValue = 'childContentfulPageContentTextNode___childMdx___headings___value',
  ChildContentfulPageContentTextNodeChildMdxHeadingsDepth = 'childContentfulPageContentTextNode___childMdx___headings___depth',
  ChildContentfulPageContentTextNodeChildMdxHtml = 'childContentfulPageContentTextNode___childMdx___html',
  ChildContentfulPageContentTextNodeChildMdxMdxAst = 'childContentfulPageContentTextNode___childMdx___mdxAST',
  ChildContentfulPageContentTextNodeChildMdxTableOfContents = 'childContentfulPageContentTextNode___childMdx___tableOfContents',
  ChildContentfulPageContentTextNodeChildMdxTimeToRead = 'childContentfulPageContentTextNode___childMdx___timeToRead',
  ChildContentfulPageContentTextNodeChildMdxWordCountParagraphs = 'childContentfulPageContentTextNode___childMdx___wordCount___paragraphs',
  ChildContentfulPageContentTextNodeChildMdxWordCountSentences = 'childContentfulPageContentTextNode___childMdx___wordCount___sentences',
  ChildContentfulPageContentTextNodeChildMdxWordCountWords = 'childContentfulPageContentTextNode___childMdx___wordCount___words',
  ChildContentfulPageContentTextNodeChildMdxId = 'childContentfulPageContentTextNode___childMdx___id',
  ChildContentfulPageContentTextNodeChildMdxParentId = 'childContentfulPageContentTextNode___childMdx___parent___id',
  ChildContentfulPageContentTextNodeChildMdxParentChildren = 'childContentfulPageContentTextNode___childMdx___parent___children',
  ChildContentfulPageContentTextNodeChildMdxChildren = 'childContentfulPageContentTextNode___childMdx___children',
  ChildContentfulPageContentTextNodeChildMdxChildrenId = 'childContentfulPageContentTextNode___childMdx___children___id',
  ChildContentfulPageContentTextNodeChildMdxChildrenChildren = 'childContentfulPageContentTextNode___childMdx___children___children',
  ChildContentfulPageContentTextNodeChildMdxInternalContent = 'childContentfulPageContentTextNode___childMdx___internal___content',
  ChildContentfulPageContentTextNodeChildMdxInternalContentDigest = 'childContentfulPageContentTextNode___childMdx___internal___contentDigest',
  ChildContentfulPageContentTextNodeChildMdxInternalDescription = 'childContentfulPageContentTextNode___childMdx___internal___description',
  ChildContentfulPageContentTextNodeChildMdxInternalFieldOwners = 'childContentfulPageContentTextNode___childMdx___internal___fieldOwners',
  ChildContentfulPageContentTextNodeChildMdxInternalIgnoreType = 'childContentfulPageContentTextNode___childMdx___internal___ignoreType',
  ChildContentfulPageContentTextNodeChildMdxInternalMediaType = 'childContentfulPageContentTextNode___childMdx___internal___mediaType',
  ChildContentfulPageContentTextNodeChildMdxInternalOwner = 'childContentfulPageContentTextNode___childMdx___internal___owner',
  ChildContentfulPageContentTextNodeChildMdxInternalType = 'childContentfulPageContentTextNode___childMdx___internal___type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulPageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  cover?: Maybe<ContentfulAssetFilterInput>;
  content?: Maybe<ContentfulPageContentTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  childrenContentfulPageContentTextNode?: Maybe<ContentfulPageContentTextNodeFilterListInput>;
  childContentfulPageContentTextNode?: Maybe<ContentfulPageContentTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulPageGroupConnection = {
  __typename?: 'ContentfulPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPageEdge>;
  nodes: Array<ContentfulPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPageSys = {
  __typename?: 'ContentfulPageSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPageSysContentType>;
};

export type ContentfulPageSysContentType = {
  __typename?: 'ContentfulPageSysContentType';
  sys?: Maybe<ContentfulPageSysContentTypeSys>;
};

export type ContentfulPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPageSysContentTypeSysFilterInput>;
};

export type ContentfulPageSysContentTypeSys = {
  __typename?: 'ContentfulPageSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPageSysContentTypeFilterInput>;
};

export type ContentfulProductUpdate = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulProductUpdate';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  image?: Maybe<ContentfulAsset>;
  content?: Maybe<ContentfulProductUpdateContentTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulProductUpdateSys>;
  /** Returns all children nodes filtered by type contentfulProductUpdateContentTextNode */
  childrenContentfulProductUpdateContentTextNode?: Maybe<Array<Maybe<ContentfulProductUpdateContentTextNode>>>;
  /**
   * Returns the first child node of type contentfulProductUpdateContentTextNode or
   * null if there are no children of given type on this node
   */
  childContentfulProductUpdateContentTextNode?: Maybe<ContentfulProductUpdateContentTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulProductUpdateDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProductUpdateCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulProductUpdateUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulProductUpdateConnection = {
  __typename?: 'ContentfulProductUpdateConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProductUpdateEdge>;
  nodes: Array<ContentfulProductUpdate>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulProductUpdateGroupConnection>;
};


export type ContentfulProductUpdateConnectionDistinctArgs = {
  field: ContentfulProductUpdateFieldsEnum;
};


export type ContentfulProductUpdateConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulProductUpdateFieldsEnum;
};

export type ContentfulProductUpdateContentTextNode = Node & {
  __typename?: 'contentfulProductUpdateContentTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  content?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulProductUpdateContentTextNodeSys>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
};

export type ContentfulProductUpdateContentTextNodeConnection = {
  __typename?: 'contentfulProductUpdateContentTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProductUpdateContentTextNodeEdge>;
  nodes: Array<ContentfulProductUpdateContentTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulProductUpdateContentTextNodeGroupConnection>;
};


export type ContentfulProductUpdateContentTextNodeConnectionDistinctArgs = {
  field: ContentfulProductUpdateContentTextNodeFieldsEnum;
};


export type ContentfulProductUpdateContentTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulProductUpdateContentTextNodeFieldsEnum;
};

export type ContentfulProductUpdateContentTextNodeEdge = {
  __typename?: 'contentfulProductUpdateContentTextNodeEdge';
  next?: Maybe<ContentfulProductUpdateContentTextNode>;
  node: ContentfulProductUpdateContentTextNode;
  previous?: Maybe<ContentfulProductUpdateContentTextNode>;
};

export enum ContentfulProductUpdateContentTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Content = 'content',
  SysType = 'sys___type',
  ChildrenMdx = 'childrenMdx',
  ChildrenMdxRawBody = 'childrenMdx___rawBody',
  ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
  ChildrenMdxSlug = 'childrenMdx___slug',
  ChildrenMdxBody = 'childrenMdx___body',
  ChildrenMdxExcerpt = 'childrenMdx___excerpt',
  ChildrenMdxHeadings = 'childrenMdx___headings',
  ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
  ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
  ChildrenMdxHtml = 'childrenMdx___html',
  ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
  ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
  ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
  ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
  ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
  ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
  ChildrenMdxId = 'childrenMdx___id',
  ChildrenMdxParentId = 'childrenMdx___parent___id',
  ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
  ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
  ChildrenMdxParentChildren = 'childrenMdx___parent___children',
  ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
  ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
  ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
  ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
  ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
  ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
  ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
  ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
  ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
  ChildrenMdxChildren = 'childrenMdx___children',
  ChildrenMdxChildrenId = 'childrenMdx___children___id',
  ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
  ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
  ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
  ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
  ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
  ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
  ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
  ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
  ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
  ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
  ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
  ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
  ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
  ChildrenMdxInternalContent = 'childrenMdx___internal___content',
  ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
  ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
  ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
  ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
  ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
  ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
  ChildrenMdxInternalType = 'childrenMdx___internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxSlug = 'childMdx___slug',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type'
}

export type ContentfulProductUpdateContentTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulProductUpdateContentTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulProductUpdateContentTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulProductUpdateContentTextNodeFilterInput>;
};

export type ContentfulProductUpdateContentTextNodeGroupConnection = {
  __typename?: 'contentfulProductUpdateContentTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProductUpdateContentTextNodeEdge>;
  nodes: Array<ContentfulProductUpdateContentTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulProductUpdateContentTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProductUpdateContentTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulProductUpdateContentTextNodeSys = {
  __typename?: 'contentfulProductUpdateContentTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulProductUpdateContentTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProductUpdateEdge = {
  __typename?: 'ContentfulProductUpdateEdge';
  next?: Maybe<ContentfulProductUpdate>;
  node: ContentfulProductUpdate;
  previous?: Maybe<ContentfulProductUpdate>;
};

export enum ContentfulProductUpdateFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Title = 'title',
  Date = 'date',
  ImageContentfulId = 'image___contentful_id',
  ImageId = 'image___id',
  ImageSpaceId = 'image___spaceId',
  ImageCreatedAt = 'image___createdAt',
  ImageUpdatedAt = 'image___updatedAt',
  ImageFileUrl = 'image___file___url',
  ImageFileDetailsSize = 'image___file___details___size',
  ImageFileFileName = 'image___file___fileName',
  ImageFileContentType = 'image___file___contentType',
  ImageFileErrorMessage = 'image___file___error___message',
  ImageTitle = 'image___title',
  ImageDescription = 'image___description',
  ImageNodeLocale = 'image___node_locale',
  ImageSysType = 'image___sys___type',
  ImageSysRevision = 'image___sys___revision',
  ImageLocalFileSourceInstanceName = 'image___localFile___sourceInstanceName',
  ImageLocalFileAbsolutePath = 'image___localFile___absolutePath',
  ImageLocalFileRelativePath = 'image___localFile___relativePath',
  ImageLocalFileExtension = 'image___localFile___extension',
  ImageLocalFileSize = 'image___localFile___size',
  ImageLocalFilePrettySize = 'image___localFile___prettySize',
  ImageLocalFileModifiedTime = 'image___localFile___modifiedTime',
  ImageLocalFileAccessTime = 'image___localFile___accessTime',
  ImageLocalFileChangeTime = 'image___localFile___changeTime',
  ImageLocalFileBirthTime = 'image___localFile___birthTime',
  ImageLocalFileRoot = 'image___localFile___root',
  ImageLocalFileDir = 'image___localFile___dir',
  ImageLocalFileBase = 'image___localFile___base',
  ImageLocalFileExt = 'image___localFile___ext',
  ImageLocalFileName = 'image___localFile___name',
  ImageLocalFileRelativeDirectory = 'image___localFile___relativeDirectory',
  ImageLocalFileDev = 'image___localFile___dev',
  ImageLocalFileMode = 'image___localFile___mode',
  ImageLocalFileNlink = 'image___localFile___nlink',
  ImageLocalFileUid = 'image___localFile___uid',
  ImageLocalFileGid = 'image___localFile___gid',
  ImageLocalFileRdev = 'image___localFile___rdev',
  ImageLocalFileIno = 'image___localFile___ino',
  ImageLocalFileAtimeMs = 'image___localFile___atimeMs',
  ImageLocalFileMtimeMs = 'image___localFile___mtimeMs',
  ImageLocalFileCtimeMs = 'image___localFile___ctimeMs',
  ImageLocalFileAtime = 'image___localFile___atime',
  ImageLocalFileMtime = 'image___localFile___mtime',
  ImageLocalFileCtime = 'image___localFile___ctime',
  ImageLocalFileBirthtime = 'image___localFile___birthtime',
  ImageLocalFileBirthtimeMs = 'image___localFile___birthtimeMs',
  ImageLocalFileBlksize = 'image___localFile___blksize',
  ImageLocalFileBlocks = 'image___localFile___blocks',
  ImageLocalFileUrl = 'image___localFile___url',
  ImageLocalFilePublicUrl = 'image___localFile___publicURL',
  ImageLocalFileChildrenImageSharp = 'image___localFile___childrenImageSharp',
  ImageLocalFileChildrenImageSharpGatsbyImageData = 'image___localFile___childrenImageSharp___gatsbyImageData',
  ImageLocalFileChildrenImageSharpId = 'image___localFile___childrenImageSharp___id',
  ImageLocalFileChildrenImageSharpChildren = 'image___localFile___childrenImageSharp___children',
  ImageLocalFileChildImageSharpGatsbyImageData = 'image___localFile___childImageSharp___gatsbyImageData',
  ImageLocalFileChildImageSharpId = 'image___localFile___childImageSharp___id',
  ImageLocalFileChildImageSharpChildren = 'image___localFile___childImageSharp___children',
  ImageLocalFileId = 'image___localFile___id',
  ImageLocalFileParentId = 'image___localFile___parent___id',
  ImageLocalFileParentChildren = 'image___localFile___parent___children',
  ImageLocalFileChildren = 'image___localFile___children',
  ImageLocalFileChildrenId = 'image___localFile___children___id',
  ImageLocalFileChildrenChildren = 'image___localFile___children___children',
  ImageLocalFileInternalContent = 'image___localFile___internal___content',
  ImageLocalFileInternalContentDigest = 'image___localFile___internal___contentDigest',
  ImageLocalFileInternalDescription = 'image___localFile___internal___description',
  ImageLocalFileInternalFieldOwners = 'image___localFile___internal___fieldOwners',
  ImageLocalFileInternalIgnoreType = 'image___localFile___internal___ignoreType',
  ImageLocalFileInternalMediaType = 'image___localFile___internal___mediaType',
  ImageLocalFileInternalOwner = 'image___localFile___internal___owner',
  ImageLocalFileInternalType = 'image___localFile___internal___type',
  ImageFixedBase64 = 'image___fixed___base64',
  ImageFixedTracedSvg = 'image___fixed___tracedSVG',
  ImageFixedAspectRatio = 'image___fixed___aspectRatio',
  ImageFixedWidth = 'image___fixed___width',
  ImageFixedHeight = 'image___fixed___height',
  ImageFixedSrc = 'image___fixed___src',
  ImageFixedSrcSet = 'image___fixed___srcSet',
  ImageFixedSrcWebp = 'image___fixed___srcWebp',
  ImageFixedSrcSetWebp = 'image___fixed___srcSetWebp',
  ImageResolutionsBase64 = 'image___resolutions___base64',
  ImageResolutionsTracedSvg = 'image___resolutions___tracedSVG',
  ImageResolutionsAspectRatio = 'image___resolutions___aspectRatio',
  ImageResolutionsWidth = 'image___resolutions___width',
  ImageResolutionsHeight = 'image___resolutions___height',
  ImageResolutionsSrc = 'image___resolutions___src',
  ImageResolutionsSrcSet = 'image___resolutions___srcSet',
  ImageResolutionsSrcWebp = 'image___resolutions___srcWebp',
  ImageResolutionsSrcSetWebp = 'image___resolutions___srcSetWebp',
  ImageFluidBase64 = 'image___fluid___base64',
  ImageFluidTracedSvg = 'image___fluid___tracedSVG',
  ImageFluidAspectRatio = 'image___fluid___aspectRatio',
  ImageFluidSrc = 'image___fluid___src',
  ImageFluidSrcSet = 'image___fluid___srcSet',
  ImageFluidSrcWebp = 'image___fluid___srcWebp',
  ImageFluidSrcSetWebp = 'image___fluid___srcSetWebp',
  ImageFluidSizes = 'image___fluid___sizes',
  ImageSizesBase64 = 'image___sizes___base64',
  ImageSizesTracedSvg = 'image___sizes___tracedSVG',
  ImageSizesAspectRatio = 'image___sizes___aspectRatio',
  ImageSizesSrc = 'image___sizes___src',
  ImageSizesSrcSet = 'image___sizes___srcSet',
  ImageSizesSrcWebp = 'image___sizes___srcWebp',
  ImageSizesSrcSetWebp = 'image___sizes___srcSetWebp',
  ImageSizesSizes = 'image___sizes___sizes',
  ImageResizeBase64 = 'image___resize___base64',
  ImageResizeTracedSvg = 'image___resize___tracedSVG',
  ImageResizeSrc = 'image___resize___src',
  ImageResizeWidth = 'image___resize___width',
  ImageResizeHeight = 'image___resize___height',
  ImageResizeAspectRatio = 'image___resize___aspectRatio',
  ImageParentId = 'image___parent___id',
  ImageParentParentId = 'image___parent___parent___id',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageChildren = 'image___children',
  ImageChildrenId = 'image___children___id',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  ContentId = 'content___id',
  ContentParentId = 'content___parent___id',
  ContentParentParentId = 'content___parent___parent___id',
  ContentParentParentChildren = 'content___parent___parent___children',
  ContentParentChildren = 'content___parent___children',
  ContentParentChildrenId = 'content___parent___children___id',
  ContentParentChildrenChildren = 'content___parent___children___children',
  ContentParentInternalContent = 'content___parent___internal___content',
  ContentParentInternalContentDigest = 'content___parent___internal___contentDigest',
  ContentParentInternalDescription = 'content___parent___internal___description',
  ContentParentInternalFieldOwners = 'content___parent___internal___fieldOwners',
  ContentParentInternalIgnoreType = 'content___parent___internal___ignoreType',
  ContentParentInternalMediaType = 'content___parent___internal___mediaType',
  ContentParentInternalOwner = 'content___parent___internal___owner',
  ContentParentInternalType = 'content___parent___internal___type',
  ContentChildren = 'content___children',
  ContentChildrenId = 'content___children___id',
  ContentChildrenParentId = 'content___children___parent___id',
  ContentChildrenParentChildren = 'content___children___parent___children',
  ContentChildrenChildren = 'content___children___children',
  ContentChildrenChildrenId = 'content___children___children___id',
  ContentChildrenChildrenChildren = 'content___children___children___children',
  ContentChildrenInternalContent = 'content___children___internal___content',
  ContentChildrenInternalContentDigest = 'content___children___internal___contentDigest',
  ContentChildrenInternalDescription = 'content___children___internal___description',
  ContentChildrenInternalFieldOwners = 'content___children___internal___fieldOwners',
  ContentChildrenInternalIgnoreType = 'content___children___internal___ignoreType',
  ContentChildrenInternalMediaType = 'content___children___internal___mediaType',
  ContentChildrenInternalOwner = 'content___children___internal___owner',
  ContentChildrenInternalType = 'content___children___internal___type',
  ContentInternalContent = 'content___internal___content',
  ContentInternalContentDigest = 'content___internal___contentDigest',
  ContentInternalDescription = 'content___internal___description',
  ContentInternalFieldOwners = 'content___internal___fieldOwners',
  ContentInternalIgnoreType = 'content___internal___ignoreType',
  ContentInternalMediaType = 'content___internal___mediaType',
  ContentInternalOwner = 'content___internal___owner',
  ContentInternalType = 'content___internal___type',
  ContentContent = 'content___content',
  ContentSysType = 'content___sys___type',
  ContentChildrenMdx = 'content___childrenMdx',
  ContentChildrenMdxRawBody = 'content___childrenMdx___rawBody',
  ContentChildrenMdxFileAbsolutePath = 'content___childrenMdx___fileAbsolutePath',
  ContentChildrenMdxFrontmatterTitle = 'content___childrenMdx___frontmatter___title',
  ContentChildrenMdxSlug = 'content___childrenMdx___slug',
  ContentChildrenMdxBody = 'content___childrenMdx___body',
  ContentChildrenMdxExcerpt = 'content___childrenMdx___excerpt',
  ContentChildrenMdxHeadings = 'content___childrenMdx___headings',
  ContentChildrenMdxHeadingsValue = 'content___childrenMdx___headings___value',
  ContentChildrenMdxHeadingsDepth = 'content___childrenMdx___headings___depth',
  ContentChildrenMdxHtml = 'content___childrenMdx___html',
  ContentChildrenMdxMdxAst = 'content___childrenMdx___mdxAST',
  ContentChildrenMdxTableOfContents = 'content___childrenMdx___tableOfContents',
  ContentChildrenMdxTimeToRead = 'content___childrenMdx___timeToRead',
  ContentChildrenMdxWordCountParagraphs = 'content___childrenMdx___wordCount___paragraphs',
  ContentChildrenMdxWordCountSentences = 'content___childrenMdx___wordCount___sentences',
  ContentChildrenMdxWordCountWords = 'content___childrenMdx___wordCount___words',
  ContentChildrenMdxId = 'content___childrenMdx___id',
  ContentChildrenMdxParentId = 'content___childrenMdx___parent___id',
  ContentChildrenMdxParentChildren = 'content___childrenMdx___parent___children',
  ContentChildrenMdxChildren = 'content___childrenMdx___children',
  ContentChildrenMdxChildrenId = 'content___childrenMdx___children___id',
  ContentChildrenMdxChildrenChildren = 'content___childrenMdx___children___children',
  ContentChildrenMdxInternalContent = 'content___childrenMdx___internal___content',
  ContentChildrenMdxInternalContentDigest = 'content___childrenMdx___internal___contentDigest',
  ContentChildrenMdxInternalDescription = 'content___childrenMdx___internal___description',
  ContentChildrenMdxInternalFieldOwners = 'content___childrenMdx___internal___fieldOwners',
  ContentChildrenMdxInternalIgnoreType = 'content___childrenMdx___internal___ignoreType',
  ContentChildrenMdxInternalMediaType = 'content___childrenMdx___internal___mediaType',
  ContentChildrenMdxInternalOwner = 'content___childrenMdx___internal___owner',
  ContentChildrenMdxInternalType = 'content___childrenMdx___internal___type',
  ContentChildMdxRawBody = 'content___childMdx___rawBody',
  ContentChildMdxFileAbsolutePath = 'content___childMdx___fileAbsolutePath',
  ContentChildMdxFrontmatterTitle = 'content___childMdx___frontmatter___title',
  ContentChildMdxSlug = 'content___childMdx___slug',
  ContentChildMdxBody = 'content___childMdx___body',
  ContentChildMdxExcerpt = 'content___childMdx___excerpt',
  ContentChildMdxHeadings = 'content___childMdx___headings',
  ContentChildMdxHeadingsValue = 'content___childMdx___headings___value',
  ContentChildMdxHeadingsDepth = 'content___childMdx___headings___depth',
  ContentChildMdxHtml = 'content___childMdx___html',
  ContentChildMdxMdxAst = 'content___childMdx___mdxAST',
  ContentChildMdxTableOfContents = 'content___childMdx___tableOfContents',
  ContentChildMdxTimeToRead = 'content___childMdx___timeToRead',
  ContentChildMdxWordCountParagraphs = 'content___childMdx___wordCount___paragraphs',
  ContentChildMdxWordCountSentences = 'content___childMdx___wordCount___sentences',
  ContentChildMdxWordCountWords = 'content___childMdx___wordCount___words',
  ContentChildMdxId = 'content___childMdx___id',
  ContentChildMdxParentId = 'content___childMdx___parent___id',
  ContentChildMdxParentChildren = 'content___childMdx___parent___children',
  ContentChildMdxChildren = 'content___childMdx___children',
  ContentChildMdxChildrenId = 'content___childMdx___children___id',
  ContentChildMdxChildrenChildren = 'content___childMdx___children___children',
  ContentChildMdxInternalContent = 'content___childMdx___internal___content',
  ContentChildMdxInternalContentDigest = 'content___childMdx___internal___contentDigest',
  ContentChildMdxInternalDescription = 'content___childMdx___internal___description',
  ContentChildMdxInternalFieldOwners = 'content___childMdx___internal___fieldOwners',
  ContentChildMdxInternalIgnoreType = 'content___childMdx___internal___ignoreType',
  ContentChildMdxInternalMediaType = 'content___childMdx___internal___mediaType',
  ContentChildMdxInternalOwner = 'content___childMdx___internal___owner',
  ContentChildMdxInternalType = 'content___childMdx___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ChildrenContentfulProductUpdateContentTextNode = 'childrenContentfulProductUpdateContentTextNode',
  ChildrenContentfulProductUpdateContentTextNodeId = 'childrenContentfulProductUpdateContentTextNode___id',
  ChildrenContentfulProductUpdateContentTextNodeParentId = 'childrenContentfulProductUpdateContentTextNode___parent___id',
  ChildrenContentfulProductUpdateContentTextNodeParentParentId = 'childrenContentfulProductUpdateContentTextNode___parent___parent___id',
  ChildrenContentfulProductUpdateContentTextNodeParentParentChildren = 'childrenContentfulProductUpdateContentTextNode___parent___parent___children',
  ChildrenContentfulProductUpdateContentTextNodeParentChildren = 'childrenContentfulProductUpdateContentTextNode___parent___children',
  ChildrenContentfulProductUpdateContentTextNodeParentChildrenId = 'childrenContentfulProductUpdateContentTextNode___parent___children___id',
  ChildrenContentfulProductUpdateContentTextNodeParentChildrenChildren = 'childrenContentfulProductUpdateContentTextNode___parent___children___children',
  ChildrenContentfulProductUpdateContentTextNodeParentInternalContent = 'childrenContentfulProductUpdateContentTextNode___parent___internal___content',
  ChildrenContentfulProductUpdateContentTextNodeParentInternalContentDigest = 'childrenContentfulProductUpdateContentTextNode___parent___internal___contentDigest',
  ChildrenContentfulProductUpdateContentTextNodeParentInternalDescription = 'childrenContentfulProductUpdateContentTextNode___parent___internal___description',
  ChildrenContentfulProductUpdateContentTextNodeParentInternalFieldOwners = 'childrenContentfulProductUpdateContentTextNode___parent___internal___fieldOwners',
  ChildrenContentfulProductUpdateContentTextNodeParentInternalIgnoreType = 'childrenContentfulProductUpdateContentTextNode___parent___internal___ignoreType',
  ChildrenContentfulProductUpdateContentTextNodeParentInternalMediaType = 'childrenContentfulProductUpdateContentTextNode___parent___internal___mediaType',
  ChildrenContentfulProductUpdateContentTextNodeParentInternalOwner = 'childrenContentfulProductUpdateContentTextNode___parent___internal___owner',
  ChildrenContentfulProductUpdateContentTextNodeParentInternalType = 'childrenContentfulProductUpdateContentTextNode___parent___internal___type',
  ChildrenContentfulProductUpdateContentTextNodeChildren = 'childrenContentfulProductUpdateContentTextNode___children',
  ChildrenContentfulProductUpdateContentTextNodeChildrenId = 'childrenContentfulProductUpdateContentTextNode___children___id',
  ChildrenContentfulProductUpdateContentTextNodeChildrenParentId = 'childrenContentfulProductUpdateContentTextNode___children___parent___id',
  ChildrenContentfulProductUpdateContentTextNodeChildrenParentChildren = 'childrenContentfulProductUpdateContentTextNode___children___parent___children',
  ChildrenContentfulProductUpdateContentTextNodeChildrenChildren = 'childrenContentfulProductUpdateContentTextNode___children___children',
  ChildrenContentfulProductUpdateContentTextNodeChildrenChildrenId = 'childrenContentfulProductUpdateContentTextNode___children___children___id',
  ChildrenContentfulProductUpdateContentTextNodeChildrenChildrenChildren = 'childrenContentfulProductUpdateContentTextNode___children___children___children',
  ChildrenContentfulProductUpdateContentTextNodeChildrenInternalContent = 'childrenContentfulProductUpdateContentTextNode___children___internal___content',
  ChildrenContentfulProductUpdateContentTextNodeChildrenInternalContentDigest = 'childrenContentfulProductUpdateContentTextNode___children___internal___contentDigest',
  ChildrenContentfulProductUpdateContentTextNodeChildrenInternalDescription = 'childrenContentfulProductUpdateContentTextNode___children___internal___description',
  ChildrenContentfulProductUpdateContentTextNodeChildrenInternalFieldOwners = 'childrenContentfulProductUpdateContentTextNode___children___internal___fieldOwners',
  ChildrenContentfulProductUpdateContentTextNodeChildrenInternalIgnoreType = 'childrenContentfulProductUpdateContentTextNode___children___internal___ignoreType',
  ChildrenContentfulProductUpdateContentTextNodeChildrenInternalMediaType = 'childrenContentfulProductUpdateContentTextNode___children___internal___mediaType',
  ChildrenContentfulProductUpdateContentTextNodeChildrenInternalOwner = 'childrenContentfulProductUpdateContentTextNode___children___internal___owner',
  ChildrenContentfulProductUpdateContentTextNodeChildrenInternalType = 'childrenContentfulProductUpdateContentTextNode___children___internal___type',
  ChildrenContentfulProductUpdateContentTextNodeInternalContent = 'childrenContentfulProductUpdateContentTextNode___internal___content',
  ChildrenContentfulProductUpdateContentTextNodeInternalContentDigest = 'childrenContentfulProductUpdateContentTextNode___internal___contentDigest',
  ChildrenContentfulProductUpdateContentTextNodeInternalDescription = 'childrenContentfulProductUpdateContentTextNode___internal___description',
  ChildrenContentfulProductUpdateContentTextNodeInternalFieldOwners = 'childrenContentfulProductUpdateContentTextNode___internal___fieldOwners',
  ChildrenContentfulProductUpdateContentTextNodeInternalIgnoreType = 'childrenContentfulProductUpdateContentTextNode___internal___ignoreType',
  ChildrenContentfulProductUpdateContentTextNodeInternalMediaType = 'childrenContentfulProductUpdateContentTextNode___internal___mediaType',
  ChildrenContentfulProductUpdateContentTextNodeInternalOwner = 'childrenContentfulProductUpdateContentTextNode___internal___owner',
  ChildrenContentfulProductUpdateContentTextNodeInternalType = 'childrenContentfulProductUpdateContentTextNode___internal___type',
  ChildrenContentfulProductUpdateContentTextNodeContent = 'childrenContentfulProductUpdateContentTextNode___content',
  ChildrenContentfulProductUpdateContentTextNodeSysType = 'childrenContentfulProductUpdateContentTextNode___sys___type',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdx = 'childrenContentfulProductUpdateContentTextNode___childrenMdx',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxRawBody = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___rawBody',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxFileAbsolutePath = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___fileAbsolutePath',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxFrontmatterTitle = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___frontmatter___title',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxSlug = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___slug',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxBody = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___body',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxExcerpt = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___excerpt',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxHeadings = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___headings',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxHeadingsValue = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___headings___value',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxHeadingsDepth = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___headings___depth',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxHtml = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___html',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxMdxAst = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___mdxAST',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxTableOfContents = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___tableOfContents',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxTimeToRead = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___timeToRead',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxWordCountParagraphs = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___wordCount___paragraphs',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxWordCountSentences = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___wordCount___sentences',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxWordCountWords = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___wordCount___words',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxId = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___id',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxParentId = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___parent___id',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxParentChildren = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___parent___children',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxChildren = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___children',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxChildrenId = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___children___id',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxChildrenChildren = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___children___children',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxInternalContent = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___internal___content',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxInternalContentDigest = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___internal___contentDigest',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxInternalDescription = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___internal___description',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxInternalFieldOwners = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___internal___fieldOwners',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxInternalIgnoreType = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___internal___ignoreType',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxInternalMediaType = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___internal___mediaType',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxInternalOwner = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___internal___owner',
  ChildrenContentfulProductUpdateContentTextNodeChildrenMdxInternalType = 'childrenContentfulProductUpdateContentTextNode___childrenMdx___internal___type',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxRawBody = 'childrenContentfulProductUpdateContentTextNode___childMdx___rawBody',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxFileAbsolutePath = 'childrenContentfulProductUpdateContentTextNode___childMdx___fileAbsolutePath',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxFrontmatterTitle = 'childrenContentfulProductUpdateContentTextNode___childMdx___frontmatter___title',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxSlug = 'childrenContentfulProductUpdateContentTextNode___childMdx___slug',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxBody = 'childrenContentfulProductUpdateContentTextNode___childMdx___body',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxExcerpt = 'childrenContentfulProductUpdateContentTextNode___childMdx___excerpt',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxHeadings = 'childrenContentfulProductUpdateContentTextNode___childMdx___headings',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxHeadingsValue = 'childrenContentfulProductUpdateContentTextNode___childMdx___headings___value',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxHeadingsDepth = 'childrenContentfulProductUpdateContentTextNode___childMdx___headings___depth',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxHtml = 'childrenContentfulProductUpdateContentTextNode___childMdx___html',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxMdxAst = 'childrenContentfulProductUpdateContentTextNode___childMdx___mdxAST',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxTableOfContents = 'childrenContentfulProductUpdateContentTextNode___childMdx___tableOfContents',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxTimeToRead = 'childrenContentfulProductUpdateContentTextNode___childMdx___timeToRead',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxWordCountParagraphs = 'childrenContentfulProductUpdateContentTextNode___childMdx___wordCount___paragraphs',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxWordCountSentences = 'childrenContentfulProductUpdateContentTextNode___childMdx___wordCount___sentences',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxWordCountWords = 'childrenContentfulProductUpdateContentTextNode___childMdx___wordCount___words',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxId = 'childrenContentfulProductUpdateContentTextNode___childMdx___id',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxParentId = 'childrenContentfulProductUpdateContentTextNode___childMdx___parent___id',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxParentChildren = 'childrenContentfulProductUpdateContentTextNode___childMdx___parent___children',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxChildren = 'childrenContentfulProductUpdateContentTextNode___childMdx___children',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxChildrenId = 'childrenContentfulProductUpdateContentTextNode___childMdx___children___id',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxChildrenChildren = 'childrenContentfulProductUpdateContentTextNode___childMdx___children___children',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxInternalContent = 'childrenContentfulProductUpdateContentTextNode___childMdx___internal___content',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxInternalContentDigest = 'childrenContentfulProductUpdateContentTextNode___childMdx___internal___contentDigest',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxInternalDescription = 'childrenContentfulProductUpdateContentTextNode___childMdx___internal___description',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxInternalFieldOwners = 'childrenContentfulProductUpdateContentTextNode___childMdx___internal___fieldOwners',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxInternalIgnoreType = 'childrenContentfulProductUpdateContentTextNode___childMdx___internal___ignoreType',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxInternalMediaType = 'childrenContentfulProductUpdateContentTextNode___childMdx___internal___mediaType',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxInternalOwner = 'childrenContentfulProductUpdateContentTextNode___childMdx___internal___owner',
  ChildrenContentfulProductUpdateContentTextNodeChildMdxInternalType = 'childrenContentfulProductUpdateContentTextNode___childMdx___internal___type',
  ChildContentfulProductUpdateContentTextNodeId = 'childContentfulProductUpdateContentTextNode___id',
  ChildContentfulProductUpdateContentTextNodeParentId = 'childContentfulProductUpdateContentTextNode___parent___id',
  ChildContentfulProductUpdateContentTextNodeParentParentId = 'childContentfulProductUpdateContentTextNode___parent___parent___id',
  ChildContentfulProductUpdateContentTextNodeParentParentChildren = 'childContentfulProductUpdateContentTextNode___parent___parent___children',
  ChildContentfulProductUpdateContentTextNodeParentChildren = 'childContentfulProductUpdateContentTextNode___parent___children',
  ChildContentfulProductUpdateContentTextNodeParentChildrenId = 'childContentfulProductUpdateContentTextNode___parent___children___id',
  ChildContentfulProductUpdateContentTextNodeParentChildrenChildren = 'childContentfulProductUpdateContentTextNode___parent___children___children',
  ChildContentfulProductUpdateContentTextNodeParentInternalContent = 'childContentfulProductUpdateContentTextNode___parent___internal___content',
  ChildContentfulProductUpdateContentTextNodeParentInternalContentDigest = 'childContentfulProductUpdateContentTextNode___parent___internal___contentDigest',
  ChildContentfulProductUpdateContentTextNodeParentInternalDescription = 'childContentfulProductUpdateContentTextNode___parent___internal___description',
  ChildContentfulProductUpdateContentTextNodeParentInternalFieldOwners = 'childContentfulProductUpdateContentTextNode___parent___internal___fieldOwners',
  ChildContentfulProductUpdateContentTextNodeParentInternalIgnoreType = 'childContentfulProductUpdateContentTextNode___parent___internal___ignoreType',
  ChildContentfulProductUpdateContentTextNodeParentInternalMediaType = 'childContentfulProductUpdateContentTextNode___parent___internal___mediaType',
  ChildContentfulProductUpdateContentTextNodeParentInternalOwner = 'childContentfulProductUpdateContentTextNode___parent___internal___owner',
  ChildContentfulProductUpdateContentTextNodeParentInternalType = 'childContentfulProductUpdateContentTextNode___parent___internal___type',
  ChildContentfulProductUpdateContentTextNodeChildren = 'childContentfulProductUpdateContentTextNode___children',
  ChildContentfulProductUpdateContentTextNodeChildrenId = 'childContentfulProductUpdateContentTextNode___children___id',
  ChildContentfulProductUpdateContentTextNodeChildrenParentId = 'childContentfulProductUpdateContentTextNode___children___parent___id',
  ChildContentfulProductUpdateContentTextNodeChildrenParentChildren = 'childContentfulProductUpdateContentTextNode___children___parent___children',
  ChildContentfulProductUpdateContentTextNodeChildrenChildren = 'childContentfulProductUpdateContentTextNode___children___children',
  ChildContentfulProductUpdateContentTextNodeChildrenChildrenId = 'childContentfulProductUpdateContentTextNode___children___children___id',
  ChildContentfulProductUpdateContentTextNodeChildrenChildrenChildren = 'childContentfulProductUpdateContentTextNode___children___children___children',
  ChildContentfulProductUpdateContentTextNodeChildrenInternalContent = 'childContentfulProductUpdateContentTextNode___children___internal___content',
  ChildContentfulProductUpdateContentTextNodeChildrenInternalContentDigest = 'childContentfulProductUpdateContentTextNode___children___internal___contentDigest',
  ChildContentfulProductUpdateContentTextNodeChildrenInternalDescription = 'childContentfulProductUpdateContentTextNode___children___internal___description',
  ChildContentfulProductUpdateContentTextNodeChildrenInternalFieldOwners = 'childContentfulProductUpdateContentTextNode___children___internal___fieldOwners',
  ChildContentfulProductUpdateContentTextNodeChildrenInternalIgnoreType = 'childContentfulProductUpdateContentTextNode___children___internal___ignoreType',
  ChildContentfulProductUpdateContentTextNodeChildrenInternalMediaType = 'childContentfulProductUpdateContentTextNode___children___internal___mediaType',
  ChildContentfulProductUpdateContentTextNodeChildrenInternalOwner = 'childContentfulProductUpdateContentTextNode___children___internal___owner',
  ChildContentfulProductUpdateContentTextNodeChildrenInternalType = 'childContentfulProductUpdateContentTextNode___children___internal___type',
  ChildContentfulProductUpdateContentTextNodeInternalContent = 'childContentfulProductUpdateContentTextNode___internal___content',
  ChildContentfulProductUpdateContentTextNodeInternalContentDigest = 'childContentfulProductUpdateContentTextNode___internal___contentDigest',
  ChildContentfulProductUpdateContentTextNodeInternalDescription = 'childContentfulProductUpdateContentTextNode___internal___description',
  ChildContentfulProductUpdateContentTextNodeInternalFieldOwners = 'childContentfulProductUpdateContentTextNode___internal___fieldOwners',
  ChildContentfulProductUpdateContentTextNodeInternalIgnoreType = 'childContentfulProductUpdateContentTextNode___internal___ignoreType',
  ChildContentfulProductUpdateContentTextNodeInternalMediaType = 'childContentfulProductUpdateContentTextNode___internal___mediaType',
  ChildContentfulProductUpdateContentTextNodeInternalOwner = 'childContentfulProductUpdateContentTextNode___internal___owner',
  ChildContentfulProductUpdateContentTextNodeInternalType = 'childContentfulProductUpdateContentTextNode___internal___type',
  ChildContentfulProductUpdateContentTextNodeContent = 'childContentfulProductUpdateContentTextNode___content',
  ChildContentfulProductUpdateContentTextNodeSysType = 'childContentfulProductUpdateContentTextNode___sys___type',
  ChildContentfulProductUpdateContentTextNodeChildrenMdx = 'childContentfulProductUpdateContentTextNode___childrenMdx',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxRawBody = 'childContentfulProductUpdateContentTextNode___childrenMdx___rawBody',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxFileAbsolutePath = 'childContentfulProductUpdateContentTextNode___childrenMdx___fileAbsolutePath',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxFrontmatterTitle = 'childContentfulProductUpdateContentTextNode___childrenMdx___frontmatter___title',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxSlug = 'childContentfulProductUpdateContentTextNode___childrenMdx___slug',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxBody = 'childContentfulProductUpdateContentTextNode___childrenMdx___body',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxExcerpt = 'childContentfulProductUpdateContentTextNode___childrenMdx___excerpt',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxHeadings = 'childContentfulProductUpdateContentTextNode___childrenMdx___headings',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxHeadingsValue = 'childContentfulProductUpdateContentTextNode___childrenMdx___headings___value',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxHeadingsDepth = 'childContentfulProductUpdateContentTextNode___childrenMdx___headings___depth',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxHtml = 'childContentfulProductUpdateContentTextNode___childrenMdx___html',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxMdxAst = 'childContentfulProductUpdateContentTextNode___childrenMdx___mdxAST',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxTableOfContents = 'childContentfulProductUpdateContentTextNode___childrenMdx___tableOfContents',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxTimeToRead = 'childContentfulProductUpdateContentTextNode___childrenMdx___timeToRead',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxWordCountParagraphs = 'childContentfulProductUpdateContentTextNode___childrenMdx___wordCount___paragraphs',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxWordCountSentences = 'childContentfulProductUpdateContentTextNode___childrenMdx___wordCount___sentences',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxWordCountWords = 'childContentfulProductUpdateContentTextNode___childrenMdx___wordCount___words',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxId = 'childContentfulProductUpdateContentTextNode___childrenMdx___id',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxParentId = 'childContentfulProductUpdateContentTextNode___childrenMdx___parent___id',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxParentChildren = 'childContentfulProductUpdateContentTextNode___childrenMdx___parent___children',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxChildren = 'childContentfulProductUpdateContentTextNode___childrenMdx___children',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxChildrenId = 'childContentfulProductUpdateContentTextNode___childrenMdx___children___id',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxChildrenChildren = 'childContentfulProductUpdateContentTextNode___childrenMdx___children___children',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxInternalContent = 'childContentfulProductUpdateContentTextNode___childrenMdx___internal___content',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxInternalContentDigest = 'childContentfulProductUpdateContentTextNode___childrenMdx___internal___contentDigest',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxInternalDescription = 'childContentfulProductUpdateContentTextNode___childrenMdx___internal___description',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxInternalFieldOwners = 'childContentfulProductUpdateContentTextNode___childrenMdx___internal___fieldOwners',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxInternalIgnoreType = 'childContentfulProductUpdateContentTextNode___childrenMdx___internal___ignoreType',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxInternalMediaType = 'childContentfulProductUpdateContentTextNode___childrenMdx___internal___mediaType',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxInternalOwner = 'childContentfulProductUpdateContentTextNode___childrenMdx___internal___owner',
  ChildContentfulProductUpdateContentTextNodeChildrenMdxInternalType = 'childContentfulProductUpdateContentTextNode___childrenMdx___internal___type',
  ChildContentfulProductUpdateContentTextNodeChildMdxRawBody = 'childContentfulProductUpdateContentTextNode___childMdx___rawBody',
  ChildContentfulProductUpdateContentTextNodeChildMdxFileAbsolutePath = 'childContentfulProductUpdateContentTextNode___childMdx___fileAbsolutePath',
  ChildContentfulProductUpdateContentTextNodeChildMdxFrontmatterTitle = 'childContentfulProductUpdateContentTextNode___childMdx___frontmatter___title',
  ChildContentfulProductUpdateContentTextNodeChildMdxSlug = 'childContentfulProductUpdateContentTextNode___childMdx___slug',
  ChildContentfulProductUpdateContentTextNodeChildMdxBody = 'childContentfulProductUpdateContentTextNode___childMdx___body',
  ChildContentfulProductUpdateContentTextNodeChildMdxExcerpt = 'childContentfulProductUpdateContentTextNode___childMdx___excerpt',
  ChildContentfulProductUpdateContentTextNodeChildMdxHeadings = 'childContentfulProductUpdateContentTextNode___childMdx___headings',
  ChildContentfulProductUpdateContentTextNodeChildMdxHeadingsValue = 'childContentfulProductUpdateContentTextNode___childMdx___headings___value',
  ChildContentfulProductUpdateContentTextNodeChildMdxHeadingsDepth = 'childContentfulProductUpdateContentTextNode___childMdx___headings___depth',
  ChildContentfulProductUpdateContentTextNodeChildMdxHtml = 'childContentfulProductUpdateContentTextNode___childMdx___html',
  ChildContentfulProductUpdateContentTextNodeChildMdxMdxAst = 'childContentfulProductUpdateContentTextNode___childMdx___mdxAST',
  ChildContentfulProductUpdateContentTextNodeChildMdxTableOfContents = 'childContentfulProductUpdateContentTextNode___childMdx___tableOfContents',
  ChildContentfulProductUpdateContentTextNodeChildMdxTimeToRead = 'childContentfulProductUpdateContentTextNode___childMdx___timeToRead',
  ChildContentfulProductUpdateContentTextNodeChildMdxWordCountParagraphs = 'childContentfulProductUpdateContentTextNode___childMdx___wordCount___paragraphs',
  ChildContentfulProductUpdateContentTextNodeChildMdxWordCountSentences = 'childContentfulProductUpdateContentTextNode___childMdx___wordCount___sentences',
  ChildContentfulProductUpdateContentTextNodeChildMdxWordCountWords = 'childContentfulProductUpdateContentTextNode___childMdx___wordCount___words',
  ChildContentfulProductUpdateContentTextNodeChildMdxId = 'childContentfulProductUpdateContentTextNode___childMdx___id',
  ChildContentfulProductUpdateContentTextNodeChildMdxParentId = 'childContentfulProductUpdateContentTextNode___childMdx___parent___id',
  ChildContentfulProductUpdateContentTextNodeChildMdxParentChildren = 'childContentfulProductUpdateContentTextNode___childMdx___parent___children',
  ChildContentfulProductUpdateContentTextNodeChildMdxChildren = 'childContentfulProductUpdateContentTextNode___childMdx___children',
  ChildContentfulProductUpdateContentTextNodeChildMdxChildrenId = 'childContentfulProductUpdateContentTextNode___childMdx___children___id',
  ChildContentfulProductUpdateContentTextNodeChildMdxChildrenChildren = 'childContentfulProductUpdateContentTextNode___childMdx___children___children',
  ChildContentfulProductUpdateContentTextNodeChildMdxInternalContent = 'childContentfulProductUpdateContentTextNode___childMdx___internal___content',
  ChildContentfulProductUpdateContentTextNodeChildMdxInternalContentDigest = 'childContentfulProductUpdateContentTextNode___childMdx___internal___contentDigest',
  ChildContentfulProductUpdateContentTextNodeChildMdxInternalDescription = 'childContentfulProductUpdateContentTextNode___childMdx___internal___description',
  ChildContentfulProductUpdateContentTextNodeChildMdxInternalFieldOwners = 'childContentfulProductUpdateContentTextNode___childMdx___internal___fieldOwners',
  ChildContentfulProductUpdateContentTextNodeChildMdxInternalIgnoreType = 'childContentfulProductUpdateContentTextNode___childMdx___internal___ignoreType',
  ChildContentfulProductUpdateContentTextNodeChildMdxInternalMediaType = 'childContentfulProductUpdateContentTextNode___childMdx___internal___mediaType',
  ChildContentfulProductUpdateContentTextNodeChildMdxInternalOwner = 'childContentfulProductUpdateContentTextNode___childMdx___internal___owner',
  ChildContentfulProductUpdateContentTextNodeChildMdxInternalType = 'childContentfulProductUpdateContentTextNode___childMdx___internal___type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulProductUpdateFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  content?: Maybe<ContentfulProductUpdateContentTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProductUpdateSysFilterInput>;
  childrenContentfulProductUpdateContentTextNode?: Maybe<ContentfulProductUpdateContentTextNodeFilterListInput>;
  childContentfulProductUpdateContentTextNode?: Maybe<ContentfulProductUpdateContentTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulProductUpdateGroupConnection = {
  __typename?: 'ContentfulProductUpdateGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulProductUpdateEdge>;
  nodes: Array<ContentfulProductUpdate>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulProductUpdateSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulProductUpdateFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulProductUpdateSys = {
  __typename?: 'ContentfulProductUpdateSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulProductUpdateSysContentType>;
};

export type ContentfulProductUpdateSysContentType = {
  __typename?: 'ContentfulProductUpdateSysContentType';
  sys?: Maybe<ContentfulProductUpdateSysContentTypeSys>;
};

export type ContentfulProductUpdateSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulProductUpdateSysContentTypeSysFilterInput>;
};

export type ContentfulProductUpdateSysContentTypeSys = {
  __typename?: 'ContentfulProductUpdateSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulProductUpdateSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulProductUpdateSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulProductUpdateSysContentTypeFilterInput>;
};

export type ContentfulQuote = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulQuote';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  quote?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  signup_page?: Maybe<Array<Maybe<ContentfulSignupPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulQuoteSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulQuoteCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulQuoteUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulQuoteConnection = {
  __typename?: 'ContentfulQuoteConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuoteEdge>;
  nodes: Array<ContentfulQuote>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulQuoteGroupConnection>;
};


export type ContentfulQuoteConnectionDistinctArgs = {
  field: ContentfulQuoteFieldsEnum;
};


export type ContentfulQuoteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulQuoteFieldsEnum;
};

export type ContentfulQuoteEdge = {
  __typename?: 'ContentfulQuoteEdge';
  next?: Maybe<ContentfulQuote>;
  node: ContentfulQuote;
  previous?: Maybe<ContentfulQuote>;
};

export enum ContentfulQuoteFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Quote = 'quote',
  Name = 'name',
  SignupPage = 'signup_page',
  SignupPageContentfulId = 'signup_page___contentful_id',
  SignupPageId = 'signup_page___id',
  SignupPageNodeLocale = 'signup_page___node_locale',
  SignupPageSlug = 'signup_page___slug',
  SignupPageTitle = 'signup_page___title',
  SignupPageDescription = 'signup_page___description',
  SignupPageFormTitle = 'signup_page___formTitle',
  SignupPageFormButtonText = 'signup_page___formButtonText',
  SignupPageSpaceId = 'signup_page___spaceId',
  SignupPageCreatedAt = 'signup_page___createdAt',
  SignupPageUpdatedAt = 'signup_page___updatedAt',
  SignupPageSysType = 'signup_page___sys___type',
  SignupPageSysRevision = 'signup_page___sys___revision',
  SignupPageType = 'signup_page___type',
  SignupPageParentId = 'signup_page___parent___id',
  SignupPageParentParentId = 'signup_page___parent___parent___id',
  SignupPageParentParentChildren = 'signup_page___parent___parent___children',
  SignupPageParentChildren = 'signup_page___parent___children',
  SignupPageParentChildrenId = 'signup_page___parent___children___id',
  SignupPageParentChildrenChildren = 'signup_page___parent___children___children',
  SignupPageParentInternalContent = 'signup_page___parent___internal___content',
  SignupPageParentInternalContentDigest = 'signup_page___parent___internal___contentDigest',
  SignupPageParentInternalDescription = 'signup_page___parent___internal___description',
  SignupPageParentInternalFieldOwners = 'signup_page___parent___internal___fieldOwners',
  SignupPageParentInternalIgnoreType = 'signup_page___parent___internal___ignoreType',
  SignupPageParentInternalMediaType = 'signup_page___parent___internal___mediaType',
  SignupPageParentInternalOwner = 'signup_page___parent___internal___owner',
  SignupPageParentInternalType = 'signup_page___parent___internal___type',
  SignupPageChildren = 'signup_page___children',
  SignupPageChildrenId = 'signup_page___children___id',
  SignupPageChildrenParentId = 'signup_page___children___parent___id',
  SignupPageChildrenParentChildren = 'signup_page___children___parent___children',
  SignupPageChildrenChildren = 'signup_page___children___children',
  SignupPageChildrenChildrenId = 'signup_page___children___children___id',
  SignupPageChildrenChildrenChildren = 'signup_page___children___children___children',
  SignupPageChildrenInternalContent = 'signup_page___children___internal___content',
  SignupPageChildrenInternalContentDigest = 'signup_page___children___internal___contentDigest',
  SignupPageChildrenInternalDescription = 'signup_page___children___internal___description',
  SignupPageChildrenInternalFieldOwners = 'signup_page___children___internal___fieldOwners',
  SignupPageChildrenInternalIgnoreType = 'signup_page___children___internal___ignoreType',
  SignupPageChildrenInternalMediaType = 'signup_page___children___internal___mediaType',
  SignupPageChildrenInternalOwner = 'signup_page___children___internal___owner',
  SignupPageChildrenInternalType = 'signup_page___children___internal___type',
  SignupPageInternalContent = 'signup_page___internal___content',
  SignupPageInternalContentDigest = 'signup_page___internal___contentDigest',
  SignupPageInternalDescription = 'signup_page___internal___description',
  SignupPageInternalFieldOwners = 'signup_page___internal___fieldOwners',
  SignupPageInternalIgnoreType = 'signup_page___internal___ignoreType',
  SignupPageInternalMediaType = 'signup_page___internal___mediaType',
  SignupPageInternalOwner = 'signup_page___internal___owner',
  SignupPageInternalType = 'signup_page___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulQuoteFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  quote?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  signup_page?: Maybe<ContentfulSignupPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQuoteSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulQuoteGroupConnection = {
  __typename?: 'ContentfulQuoteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulQuoteEdge>;
  nodes: Array<ContentfulQuote>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulQuoteSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulQuoteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulQuoteSys = {
  __typename?: 'ContentfulQuoteSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulQuoteSysContentType>;
};

export type ContentfulQuoteSysContentType = {
  __typename?: 'ContentfulQuoteSysContentType';
  sys?: Maybe<ContentfulQuoteSysContentTypeSys>;
};

export type ContentfulQuoteSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulQuoteSysContentTypeSysFilterInput>;
};

export type ContentfulQuoteSysContentTypeSys = {
  __typename?: 'ContentfulQuoteSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulQuoteSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulQuoteSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulQuoteSysContentTypeFilterInput>;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulResize = {
  __typename?: 'ContentfulResize';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  __typename?: 'ContentfulResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSellingProposition = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulSellingProposition';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  linkTo?: Maybe<Scalars['String']>;
  image?: Maybe<ContentfulAsset>;
  front_page?: Maybe<Array<Maybe<ContentfulFrontPage>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSellingPropositionSys>;
  signup_page?: Maybe<Array<Maybe<ContentfulSignupPage>>>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulSellingPropositionCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSellingPropositionUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSellingPropositionConnection = {
  __typename?: 'ContentfulSellingPropositionConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSellingPropositionEdge>;
  nodes: Array<ContentfulSellingProposition>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSellingPropositionGroupConnection>;
};


export type ContentfulSellingPropositionConnectionDistinctArgs = {
  field: ContentfulSellingPropositionFieldsEnum;
};


export type ContentfulSellingPropositionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSellingPropositionFieldsEnum;
};

export type ContentfulSellingPropositionEdge = {
  __typename?: 'ContentfulSellingPropositionEdge';
  next?: Maybe<ContentfulSellingProposition>;
  node: ContentfulSellingProposition;
  previous?: Maybe<ContentfulSellingProposition>;
};

export enum ContentfulSellingPropositionFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Title = 'title',
  Description = 'description',
  Link = 'link',
  LinkTo = 'linkTo',
  ImageContentfulId = 'image___contentful_id',
  ImageId = 'image___id',
  ImageSpaceId = 'image___spaceId',
  ImageCreatedAt = 'image___createdAt',
  ImageUpdatedAt = 'image___updatedAt',
  ImageFileUrl = 'image___file___url',
  ImageFileDetailsSize = 'image___file___details___size',
  ImageFileFileName = 'image___file___fileName',
  ImageFileContentType = 'image___file___contentType',
  ImageFileErrorMessage = 'image___file___error___message',
  ImageTitle = 'image___title',
  ImageDescription = 'image___description',
  ImageNodeLocale = 'image___node_locale',
  ImageSysType = 'image___sys___type',
  ImageSysRevision = 'image___sys___revision',
  ImageLocalFileSourceInstanceName = 'image___localFile___sourceInstanceName',
  ImageLocalFileAbsolutePath = 'image___localFile___absolutePath',
  ImageLocalFileRelativePath = 'image___localFile___relativePath',
  ImageLocalFileExtension = 'image___localFile___extension',
  ImageLocalFileSize = 'image___localFile___size',
  ImageLocalFilePrettySize = 'image___localFile___prettySize',
  ImageLocalFileModifiedTime = 'image___localFile___modifiedTime',
  ImageLocalFileAccessTime = 'image___localFile___accessTime',
  ImageLocalFileChangeTime = 'image___localFile___changeTime',
  ImageLocalFileBirthTime = 'image___localFile___birthTime',
  ImageLocalFileRoot = 'image___localFile___root',
  ImageLocalFileDir = 'image___localFile___dir',
  ImageLocalFileBase = 'image___localFile___base',
  ImageLocalFileExt = 'image___localFile___ext',
  ImageLocalFileName = 'image___localFile___name',
  ImageLocalFileRelativeDirectory = 'image___localFile___relativeDirectory',
  ImageLocalFileDev = 'image___localFile___dev',
  ImageLocalFileMode = 'image___localFile___mode',
  ImageLocalFileNlink = 'image___localFile___nlink',
  ImageLocalFileUid = 'image___localFile___uid',
  ImageLocalFileGid = 'image___localFile___gid',
  ImageLocalFileRdev = 'image___localFile___rdev',
  ImageLocalFileIno = 'image___localFile___ino',
  ImageLocalFileAtimeMs = 'image___localFile___atimeMs',
  ImageLocalFileMtimeMs = 'image___localFile___mtimeMs',
  ImageLocalFileCtimeMs = 'image___localFile___ctimeMs',
  ImageLocalFileAtime = 'image___localFile___atime',
  ImageLocalFileMtime = 'image___localFile___mtime',
  ImageLocalFileCtime = 'image___localFile___ctime',
  ImageLocalFileBirthtime = 'image___localFile___birthtime',
  ImageLocalFileBirthtimeMs = 'image___localFile___birthtimeMs',
  ImageLocalFileBlksize = 'image___localFile___blksize',
  ImageLocalFileBlocks = 'image___localFile___blocks',
  ImageLocalFileUrl = 'image___localFile___url',
  ImageLocalFilePublicUrl = 'image___localFile___publicURL',
  ImageLocalFileChildrenImageSharp = 'image___localFile___childrenImageSharp',
  ImageLocalFileChildrenImageSharpGatsbyImageData = 'image___localFile___childrenImageSharp___gatsbyImageData',
  ImageLocalFileChildrenImageSharpId = 'image___localFile___childrenImageSharp___id',
  ImageLocalFileChildrenImageSharpChildren = 'image___localFile___childrenImageSharp___children',
  ImageLocalFileChildImageSharpGatsbyImageData = 'image___localFile___childImageSharp___gatsbyImageData',
  ImageLocalFileChildImageSharpId = 'image___localFile___childImageSharp___id',
  ImageLocalFileChildImageSharpChildren = 'image___localFile___childImageSharp___children',
  ImageLocalFileId = 'image___localFile___id',
  ImageLocalFileParentId = 'image___localFile___parent___id',
  ImageLocalFileParentChildren = 'image___localFile___parent___children',
  ImageLocalFileChildren = 'image___localFile___children',
  ImageLocalFileChildrenId = 'image___localFile___children___id',
  ImageLocalFileChildrenChildren = 'image___localFile___children___children',
  ImageLocalFileInternalContent = 'image___localFile___internal___content',
  ImageLocalFileInternalContentDigest = 'image___localFile___internal___contentDigest',
  ImageLocalFileInternalDescription = 'image___localFile___internal___description',
  ImageLocalFileInternalFieldOwners = 'image___localFile___internal___fieldOwners',
  ImageLocalFileInternalIgnoreType = 'image___localFile___internal___ignoreType',
  ImageLocalFileInternalMediaType = 'image___localFile___internal___mediaType',
  ImageLocalFileInternalOwner = 'image___localFile___internal___owner',
  ImageLocalFileInternalType = 'image___localFile___internal___type',
  ImageFixedBase64 = 'image___fixed___base64',
  ImageFixedTracedSvg = 'image___fixed___tracedSVG',
  ImageFixedAspectRatio = 'image___fixed___aspectRatio',
  ImageFixedWidth = 'image___fixed___width',
  ImageFixedHeight = 'image___fixed___height',
  ImageFixedSrc = 'image___fixed___src',
  ImageFixedSrcSet = 'image___fixed___srcSet',
  ImageFixedSrcWebp = 'image___fixed___srcWebp',
  ImageFixedSrcSetWebp = 'image___fixed___srcSetWebp',
  ImageResolutionsBase64 = 'image___resolutions___base64',
  ImageResolutionsTracedSvg = 'image___resolutions___tracedSVG',
  ImageResolutionsAspectRatio = 'image___resolutions___aspectRatio',
  ImageResolutionsWidth = 'image___resolutions___width',
  ImageResolutionsHeight = 'image___resolutions___height',
  ImageResolutionsSrc = 'image___resolutions___src',
  ImageResolutionsSrcSet = 'image___resolutions___srcSet',
  ImageResolutionsSrcWebp = 'image___resolutions___srcWebp',
  ImageResolutionsSrcSetWebp = 'image___resolutions___srcSetWebp',
  ImageFluidBase64 = 'image___fluid___base64',
  ImageFluidTracedSvg = 'image___fluid___tracedSVG',
  ImageFluidAspectRatio = 'image___fluid___aspectRatio',
  ImageFluidSrc = 'image___fluid___src',
  ImageFluidSrcSet = 'image___fluid___srcSet',
  ImageFluidSrcWebp = 'image___fluid___srcWebp',
  ImageFluidSrcSetWebp = 'image___fluid___srcSetWebp',
  ImageFluidSizes = 'image___fluid___sizes',
  ImageSizesBase64 = 'image___sizes___base64',
  ImageSizesTracedSvg = 'image___sizes___tracedSVG',
  ImageSizesAspectRatio = 'image___sizes___aspectRatio',
  ImageSizesSrc = 'image___sizes___src',
  ImageSizesSrcSet = 'image___sizes___srcSet',
  ImageSizesSrcWebp = 'image___sizes___srcWebp',
  ImageSizesSrcSetWebp = 'image___sizes___srcSetWebp',
  ImageSizesSizes = 'image___sizes___sizes',
  ImageResizeBase64 = 'image___resize___base64',
  ImageResizeTracedSvg = 'image___resize___tracedSVG',
  ImageResizeSrc = 'image___resize___src',
  ImageResizeWidth = 'image___resize___width',
  ImageResizeHeight = 'image___resize___height',
  ImageResizeAspectRatio = 'image___resize___aspectRatio',
  ImageParentId = 'image___parent___id',
  ImageParentParentId = 'image___parent___parent___id',
  ImageParentParentChildren = 'image___parent___parent___children',
  ImageParentChildren = 'image___parent___children',
  ImageParentChildrenId = 'image___parent___children___id',
  ImageParentChildrenChildren = 'image___parent___children___children',
  ImageParentInternalContent = 'image___parent___internal___content',
  ImageParentInternalContentDigest = 'image___parent___internal___contentDigest',
  ImageParentInternalDescription = 'image___parent___internal___description',
  ImageParentInternalFieldOwners = 'image___parent___internal___fieldOwners',
  ImageParentInternalIgnoreType = 'image___parent___internal___ignoreType',
  ImageParentInternalMediaType = 'image___parent___internal___mediaType',
  ImageParentInternalOwner = 'image___parent___internal___owner',
  ImageParentInternalType = 'image___parent___internal___type',
  ImageChildren = 'image___children',
  ImageChildrenId = 'image___children___id',
  ImageChildrenParentId = 'image___children___parent___id',
  ImageChildrenParentChildren = 'image___children___parent___children',
  ImageChildrenChildren = 'image___children___children',
  ImageChildrenChildrenId = 'image___children___children___id',
  ImageChildrenChildrenChildren = 'image___children___children___children',
  ImageChildrenInternalContent = 'image___children___internal___content',
  ImageChildrenInternalContentDigest = 'image___children___internal___contentDigest',
  ImageChildrenInternalDescription = 'image___children___internal___description',
  ImageChildrenInternalFieldOwners = 'image___children___internal___fieldOwners',
  ImageChildrenInternalIgnoreType = 'image___children___internal___ignoreType',
  ImageChildrenInternalMediaType = 'image___children___internal___mediaType',
  ImageChildrenInternalOwner = 'image___children___internal___owner',
  ImageChildrenInternalType = 'image___children___internal___type',
  ImageInternalContent = 'image___internal___content',
  ImageInternalContentDigest = 'image___internal___contentDigest',
  ImageInternalDescription = 'image___internal___description',
  ImageInternalFieldOwners = 'image___internal___fieldOwners',
  ImageInternalIgnoreType = 'image___internal___ignoreType',
  ImageInternalMediaType = 'image___internal___mediaType',
  ImageInternalOwner = 'image___internal___owner',
  ImageInternalType = 'image___internal___type',
  FrontPage = 'front_page',
  FrontPageContentfulId = 'front_page___contentful_id',
  FrontPageId = 'front_page___id',
  FrontPageNodeLocale = 'front_page___node_locale',
  FrontPageTitle = 'front_page___title',
  FrontPageMainHeader = 'front_page___mainHeader',
  FrontPageDescription = 'front_page___description',
  FrontPageBannerImageContentfulId = 'front_page___bannerImage___contentful_id',
  FrontPageBannerImageId = 'front_page___bannerImage___id',
  FrontPageBannerImageSpaceId = 'front_page___bannerImage___spaceId',
  FrontPageBannerImageCreatedAt = 'front_page___bannerImage___createdAt',
  FrontPageBannerImageUpdatedAt = 'front_page___bannerImage___updatedAt',
  FrontPageBannerImageFileUrl = 'front_page___bannerImage___file___url',
  FrontPageBannerImageFileFileName = 'front_page___bannerImage___file___fileName',
  FrontPageBannerImageFileContentType = 'front_page___bannerImage___file___contentType',
  FrontPageBannerImageTitle = 'front_page___bannerImage___title',
  FrontPageBannerImageDescription = 'front_page___bannerImage___description',
  FrontPageBannerImageNodeLocale = 'front_page___bannerImage___node_locale',
  FrontPageBannerImageSysType = 'front_page___bannerImage___sys___type',
  FrontPageBannerImageSysRevision = 'front_page___bannerImage___sys___revision',
  FrontPageBannerImageLocalFileSourceInstanceName = 'front_page___bannerImage___localFile___sourceInstanceName',
  FrontPageBannerImageLocalFileAbsolutePath = 'front_page___bannerImage___localFile___absolutePath',
  FrontPageBannerImageLocalFileRelativePath = 'front_page___bannerImage___localFile___relativePath',
  FrontPageBannerImageLocalFileExtension = 'front_page___bannerImage___localFile___extension',
  FrontPageBannerImageLocalFileSize = 'front_page___bannerImage___localFile___size',
  FrontPageBannerImageLocalFilePrettySize = 'front_page___bannerImage___localFile___prettySize',
  FrontPageBannerImageLocalFileModifiedTime = 'front_page___bannerImage___localFile___modifiedTime',
  FrontPageBannerImageLocalFileAccessTime = 'front_page___bannerImage___localFile___accessTime',
  FrontPageBannerImageLocalFileChangeTime = 'front_page___bannerImage___localFile___changeTime',
  FrontPageBannerImageLocalFileBirthTime = 'front_page___bannerImage___localFile___birthTime',
  FrontPageBannerImageLocalFileRoot = 'front_page___bannerImage___localFile___root',
  FrontPageBannerImageLocalFileDir = 'front_page___bannerImage___localFile___dir',
  FrontPageBannerImageLocalFileBase = 'front_page___bannerImage___localFile___base',
  FrontPageBannerImageLocalFileExt = 'front_page___bannerImage___localFile___ext',
  FrontPageBannerImageLocalFileName = 'front_page___bannerImage___localFile___name',
  FrontPageBannerImageLocalFileRelativeDirectory = 'front_page___bannerImage___localFile___relativeDirectory',
  FrontPageBannerImageLocalFileDev = 'front_page___bannerImage___localFile___dev',
  FrontPageBannerImageLocalFileMode = 'front_page___bannerImage___localFile___mode',
  FrontPageBannerImageLocalFileNlink = 'front_page___bannerImage___localFile___nlink',
  FrontPageBannerImageLocalFileUid = 'front_page___bannerImage___localFile___uid',
  FrontPageBannerImageLocalFileGid = 'front_page___bannerImage___localFile___gid',
  FrontPageBannerImageLocalFileRdev = 'front_page___bannerImage___localFile___rdev',
  FrontPageBannerImageLocalFileIno = 'front_page___bannerImage___localFile___ino',
  FrontPageBannerImageLocalFileAtimeMs = 'front_page___bannerImage___localFile___atimeMs',
  FrontPageBannerImageLocalFileMtimeMs = 'front_page___bannerImage___localFile___mtimeMs',
  FrontPageBannerImageLocalFileCtimeMs = 'front_page___bannerImage___localFile___ctimeMs',
  FrontPageBannerImageLocalFileAtime = 'front_page___bannerImage___localFile___atime',
  FrontPageBannerImageLocalFileMtime = 'front_page___bannerImage___localFile___mtime',
  FrontPageBannerImageLocalFileCtime = 'front_page___bannerImage___localFile___ctime',
  FrontPageBannerImageLocalFileBirthtime = 'front_page___bannerImage___localFile___birthtime',
  FrontPageBannerImageLocalFileBirthtimeMs = 'front_page___bannerImage___localFile___birthtimeMs',
  FrontPageBannerImageLocalFileBlksize = 'front_page___bannerImage___localFile___blksize',
  FrontPageBannerImageLocalFileBlocks = 'front_page___bannerImage___localFile___blocks',
  FrontPageBannerImageLocalFileUrl = 'front_page___bannerImage___localFile___url',
  FrontPageBannerImageLocalFilePublicUrl = 'front_page___bannerImage___localFile___publicURL',
  FrontPageBannerImageLocalFileChildrenImageSharp = 'front_page___bannerImage___localFile___childrenImageSharp',
  FrontPageBannerImageLocalFileId = 'front_page___bannerImage___localFile___id',
  FrontPageBannerImageLocalFileChildren = 'front_page___bannerImage___localFile___children',
  FrontPageBannerImageFixedBase64 = 'front_page___bannerImage___fixed___base64',
  FrontPageBannerImageFixedTracedSvg = 'front_page___bannerImage___fixed___tracedSVG',
  FrontPageBannerImageFixedAspectRatio = 'front_page___bannerImage___fixed___aspectRatio',
  FrontPageBannerImageFixedWidth = 'front_page___bannerImage___fixed___width',
  FrontPageBannerImageFixedHeight = 'front_page___bannerImage___fixed___height',
  FrontPageBannerImageFixedSrc = 'front_page___bannerImage___fixed___src',
  FrontPageBannerImageFixedSrcSet = 'front_page___bannerImage___fixed___srcSet',
  FrontPageBannerImageFixedSrcWebp = 'front_page___bannerImage___fixed___srcWebp',
  FrontPageBannerImageFixedSrcSetWebp = 'front_page___bannerImage___fixed___srcSetWebp',
  FrontPageBannerImageResolutionsBase64 = 'front_page___bannerImage___resolutions___base64',
  FrontPageBannerImageResolutionsTracedSvg = 'front_page___bannerImage___resolutions___tracedSVG',
  FrontPageBannerImageResolutionsAspectRatio = 'front_page___bannerImage___resolutions___aspectRatio',
  FrontPageBannerImageResolutionsWidth = 'front_page___bannerImage___resolutions___width',
  FrontPageBannerImageResolutionsHeight = 'front_page___bannerImage___resolutions___height',
  FrontPageBannerImageResolutionsSrc = 'front_page___bannerImage___resolutions___src',
  FrontPageBannerImageResolutionsSrcSet = 'front_page___bannerImage___resolutions___srcSet',
  FrontPageBannerImageResolutionsSrcWebp = 'front_page___bannerImage___resolutions___srcWebp',
  FrontPageBannerImageResolutionsSrcSetWebp = 'front_page___bannerImage___resolutions___srcSetWebp',
  FrontPageBannerImageFluidBase64 = 'front_page___bannerImage___fluid___base64',
  FrontPageBannerImageFluidTracedSvg = 'front_page___bannerImage___fluid___tracedSVG',
  FrontPageBannerImageFluidAspectRatio = 'front_page___bannerImage___fluid___aspectRatio',
  FrontPageBannerImageFluidSrc = 'front_page___bannerImage___fluid___src',
  FrontPageBannerImageFluidSrcSet = 'front_page___bannerImage___fluid___srcSet',
  FrontPageBannerImageFluidSrcWebp = 'front_page___bannerImage___fluid___srcWebp',
  FrontPageBannerImageFluidSrcSetWebp = 'front_page___bannerImage___fluid___srcSetWebp',
  FrontPageBannerImageFluidSizes = 'front_page___bannerImage___fluid___sizes',
  FrontPageBannerImageSizesBase64 = 'front_page___bannerImage___sizes___base64',
  FrontPageBannerImageSizesTracedSvg = 'front_page___bannerImage___sizes___tracedSVG',
  FrontPageBannerImageSizesAspectRatio = 'front_page___bannerImage___sizes___aspectRatio',
  FrontPageBannerImageSizesSrc = 'front_page___bannerImage___sizes___src',
  FrontPageBannerImageSizesSrcSet = 'front_page___bannerImage___sizes___srcSet',
  FrontPageBannerImageSizesSrcWebp = 'front_page___bannerImage___sizes___srcWebp',
  FrontPageBannerImageSizesSrcSetWebp = 'front_page___bannerImage___sizes___srcSetWebp',
  FrontPageBannerImageSizesSizes = 'front_page___bannerImage___sizes___sizes',
  FrontPageBannerImageResizeBase64 = 'front_page___bannerImage___resize___base64',
  FrontPageBannerImageResizeTracedSvg = 'front_page___bannerImage___resize___tracedSVG',
  FrontPageBannerImageResizeSrc = 'front_page___bannerImage___resize___src',
  FrontPageBannerImageResizeWidth = 'front_page___bannerImage___resize___width',
  FrontPageBannerImageResizeHeight = 'front_page___bannerImage___resize___height',
  FrontPageBannerImageResizeAspectRatio = 'front_page___bannerImage___resize___aspectRatio',
  FrontPageBannerImageParentId = 'front_page___bannerImage___parent___id',
  FrontPageBannerImageParentChildren = 'front_page___bannerImage___parent___children',
  FrontPageBannerImageChildren = 'front_page___bannerImage___children',
  FrontPageBannerImageChildrenId = 'front_page___bannerImage___children___id',
  FrontPageBannerImageChildrenChildren = 'front_page___bannerImage___children___children',
  FrontPageBannerImageInternalContent = 'front_page___bannerImage___internal___content',
  FrontPageBannerImageInternalContentDigest = 'front_page___bannerImage___internal___contentDigest',
  FrontPageBannerImageInternalDescription = 'front_page___bannerImage___internal___description',
  FrontPageBannerImageInternalFieldOwners = 'front_page___bannerImage___internal___fieldOwners',
  FrontPageBannerImageInternalIgnoreType = 'front_page___bannerImage___internal___ignoreType',
  FrontPageBannerImageInternalMediaType = 'front_page___bannerImage___internal___mediaType',
  FrontPageBannerImageInternalOwner = 'front_page___bannerImage___internal___owner',
  FrontPageBannerImageInternalType = 'front_page___bannerImage___internal___type',
  FrontPageSpaceId = 'front_page___spaceId',
  FrontPageCreatedAt = 'front_page___createdAt',
  FrontPageUpdatedAt = 'front_page___updatedAt',
  FrontPageSysType = 'front_page___sys___type',
  FrontPageSysRevision = 'front_page___sys___revision',
  FrontPageParentId = 'front_page___parent___id',
  FrontPageParentParentId = 'front_page___parent___parent___id',
  FrontPageParentParentChildren = 'front_page___parent___parent___children',
  FrontPageParentChildren = 'front_page___parent___children',
  FrontPageParentChildrenId = 'front_page___parent___children___id',
  FrontPageParentChildrenChildren = 'front_page___parent___children___children',
  FrontPageParentInternalContent = 'front_page___parent___internal___content',
  FrontPageParentInternalContentDigest = 'front_page___parent___internal___contentDigest',
  FrontPageParentInternalDescription = 'front_page___parent___internal___description',
  FrontPageParentInternalFieldOwners = 'front_page___parent___internal___fieldOwners',
  FrontPageParentInternalIgnoreType = 'front_page___parent___internal___ignoreType',
  FrontPageParentInternalMediaType = 'front_page___parent___internal___mediaType',
  FrontPageParentInternalOwner = 'front_page___parent___internal___owner',
  FrontPageParentInternalType = 'front_page___parent___internal___type',
  FrontPageChildren = 'front_page___children',
  FrontPageChildrenId = 'front_page___children___id',
  FrontPageChildrenParentId = 'front_page___children___parent___id',
  FrontPageChildrenParentChildren = 'front_page___children___parent___children',
  FrontPageChildrenChildren = 'front_page___children___children',
  FrontPageChildrenChildrenId = 'front_page___children___children___id',
  FrontPageChildrenChildrenChildren = 'front_page___children___children___children',
  FrontPageChildrenInternalContent = 'front_page___children___internal___content',
  FrontPageChildrenInternalContentDigest = 'front_page___children___internal___contentDigest',
  FrontPageChildrenInternalDescription = 'front_page___children___internal___description',
  FrontPageChildrenInternalFieldOwners = 'front_page___children___internal___fieldOwners',
  FrontPageChildrenInternalIgnoreType = 'front_page___children___internal___ignoreType',
  FrontPageChildrenInternalMediaType = 'front_page___children___internal___mediaType',
  FrontPageChildrenInternalOwner = 'front_page___children___internal___owner',
  FrontPageChildrenInternalType = 'front_page___children___internal___type',
  FrontPageInternalContent = 'front_page___internal___content',
  FrontPageInternalContentDigest = 'front_page___internal___contentDigest',
  FrontPageInternalDescription = 'front_page___internal___description',
  FrontPageInternalFieldOwners = 'front_page___internal___fieldOwners',
  FrontPageInternalIgnoreType = 'front_page___internal___ignoreType',
  FrontPageInternalMediaType = 'front_page___internal___mediaType',
  FrontPageInternalOwner = 'front_page___internal___owner',
  FrontPageInternalType = 'front_page___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  SignupPage = 'signup_page',
  SignupPageContentfulId = 'signup_page___contentful_id',
  SignupPageId = 'signup_page___id',
  SignupPageNodeLocale = 'signup_page___node_locale',
  SignupPageSlug = 'signup_page___slug',
  SignupPageTitle = 'signup_page___title',
  SignupPageDescription = 'signup_page___description',
  SignupPageFormTitle = 'signup_page___formTitle',
  SignupPageFormButtonText = 'signup_page___formButtonText',
  SignupPageSpaceId = 'signup_page___spaceId',
  SignupPageCreatedAt = 'signup_page___createdAt',
  SignupPageUpdatedAt = 'signup_page___updatedAt',
  SignupPageSysType = 'signup_page___sys___type',
  SignupPageSysRevision = 'signup_page___sys___revision',
  SignupPageType = 'signup_page___type',
  SignupPageParentId = 'signup_page___parent___id',
  SignupPageParentParentId = 'signup_page___parent___parent___id',
  SignupPageParentParentChildren = 'signup_page___parent___parent___children',
  SignupPageParentChildren = 'signup_page___parent___children',
  SignupPageParentChildrenId = 'signup_page___parent___children___id',
  SignupPageParentChildrenChildren = 'signup_page___parent___children___children',
  SignupPageParentInternalContent = 'signup_page___parent___internal___content',
  SignupPageParentInternalContentDigest = 'signup_page___parent___internal___contentDigest',
  SignupPageParentInternalDescription = 'signup_page___parent___internal___description',
  SignupPageParentInternalFieldOwners = 'signup_page___parent___internal___fieldOwners',
  SignupPageParentInternalIgnoreType = 'signup_page___parent___internal___ignoreType',
  SignupPageParentInternalMediaType = 'signup_page___parent___internal___mediaType',
  SignupPageParentInternalOwner = 'signup_page___parent___internal___owner',
  SignupPageParentInternalType = 'signup_page___parent___internal___type',
  SignupPageChildren = 'signup_page___children',
  SignupPageChildrenId = 'signup_page___children___id',
  SignupPageChildrenParentId = 'signup_page___children___parent___id',
  SignupPageChildrenParentChildren = 'signup_page___children___parent___children',
  SignupPageChildrenChildren = 'signup_page___children___children',
  SignupPageChildrenChildrenId = 'signup_page___children___children___id',
  SignupPageChildrenChildrenChildren = 'signup_page___children___children___children',
  SignupPageChildrenInternalContent = 'signup_page___children___internal___content',
  SignupPageChildrenInternalContentDigest = 'signup_page___children___internal___contentDigest',
  SignupPageChildrenInternalDescription = 'signup_page___children___internal___description',
  SignupPageChildrenInternalFieldOwners = 'signup_page___children___internal___fieldOwners',
  SignupPageChildrenInternalIgnoreType = 'signup_page___children___internal___ignoreType',
  SignupPageChildrenInternalMediaType = 'signup_page___children___internal___mediaType',
  SignupPageChildrenInternalOwner = 'signup_page___children___internal___owner',
  SignupPageChildrenInternalType = 'signup_page___children___internal___type',
  SignupPageInternalContent = 'signup_page___internal___content',
  SignupPageInternalContentDigest = 'signup_page___internal___contentDigest',
  SignupPageInternalDescription = 'signup_page___internal___description',
  SignupPageInternalFieldOwners = 'signup_page___internal___fieldOwners',
  SignupPageInternalIgnoreType = 'signup_page___internal___ignoreType',
  SignupPageInternalMediaType = 'signup_page___internal___mediaType',
  SignupPageInternalOwner = 'signup_page___internal___owner',
  SignupPageInternalType = 'signup_page___internal___type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulSellingPropositionFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  linkTo?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  front_page?: Maybe<ContentfulFrontPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSellingPropositionSysFilterInput>;
  signup_page?: Maybe<ContentfulSignupPageFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulSellingPropositionGroupConnection = {
  __typename?: 'ContentfulSellingPropositionGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSellingPropositionEdge>;
  nodes: Array<ContentfulSellingProposition>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSellingPropositionSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSellingPropositionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSellingPropositionSys = {
  __typename?: 'ContentfulSellingPropositionSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSellingPropositionSysContentType>;
};

export type ContentfulSellingPropositionSysContentType = {
  __typename?: 'ContentfulSellingPropositionSysContentType';
  sys?: Maybe<ContentfulSellingPropositionSysContentTypeSys>;
};

export type ContentfulSellingPropositionSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSellingPropositionSysContentTypeSysFilterInput>;
};

export type ContentfulSellingPropositionSysContentTypeSys = {
  __typename?: 'ContentfulSellingPropositionSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulSellingPropositionSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSellingPropositionSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSellingPropositionSysContentTypeFilterInput>;
};

export type ContentfulSignupPage = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulSignupPage';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  formTitle?: Maybe<Scalars['String']>;
  formButtonText?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<ContentfulExternalLogosContentfulQuoteContentfulSellingPropositionUnion>>>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulSignupPageSys>;
  type?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulSignupPageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulSignupPageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulSignupPageConnection = {
  __typename?: 'ContentfulSignupPageConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSignupPageEdge>;
  nodes: Array<ContentfulSignupPage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulSignupPageGroupConnection>;
};


export type ContentfulSignupPageConnectionDistinctArgs = {
  field: ContentfulSignupPageFieldsEnum;
};


export type ContentfulSignupPageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulSignupPageFieldsEnum;
};

export type ContentfulSignupPageEdge = {
  __typename?: 'ContentfulSignupPageEdge';
  next?: Maybe<ContentfulSignupPage>;
  node: ContentfulSignupPage;
  previous?: Maybe<ContentfulSignupPage>;
};

export enum ContentfulSignupPageFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Slug = 'slug',
  Title = 'title',
  Description = 'description',
  FormTitle = 'formTitle',
  FormButtonText = 'formButtonText',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  Type = 'type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulSignupPageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  formTitle?: Maybe<StringQueryOperatorInput>;
  formButtonText?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSignupPageSysFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulSignupPageFilterListInput = {
  elemMatch?: Maybe<ContentfulSignupPageFilterInput>;
};

export type ContentfulSignupPageGroupConnection = {
  __typename?: 'ContentfulSignupPageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulSignupPageEdge>;
  nodes: Array<ContentfulSignupPage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulSignupPageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulSignupPageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulSignupPageSys = {
  __typename?: 'ContentfulSignupPageSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulSignupPageSysContentType>;
};

export type ContentfulSignupPageSysContentType = {
  __typename?: 'ContentfulSignupPageSysContentType';
  sys?: Maybe<ContentfulSignupPageSysContentTypeSys>;
};

export type ContentfulSignupPageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulSignupPageSysContentTypeSysFilterInput>;
};

export type ContentfulSignupPageSysContentTypeSys = {
  __typename?: 'ContentfulSignupPageSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulSignupPageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSignupPageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulSignupPageSysContentTypeFilterInput>;
};

export type ContentfulSizes = {
  __typename?: 'ContentfulSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWebinar = ContentfulReference & ContentfulEntry & Node & {
  __typename?: 'ContentfulWebinar';
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  youtube?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  category?: Maybe<Scalars['String']>;
  cover?: Maybe<ContentfulAsset>;
  description?: Maybe<ContentfulWebinarDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulWebinarSys>;
  /** Returns all children nodes filtered by type contentfulWebinarDescriptionTextNode */
  childrenContentfulWebinarDescriptionTextNode?: Maybe<Array<Maybe<ContentfulWebinarDescriptionTextNode>>>;
  /**
   * Returns the first child node of type contentfulWebinarDescriptionTextNode or
   * null if there are no children of given type on this node
   */
  childContentfulWebinarDescriptionTextNode?: Maybe<ContentfulWebinarDescriptionTextNode>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulWebinarDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulWebinarCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulWebinarUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulWebinarConnection = {
  __typename?: 'ContentfulWebinarConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWebinarEdge>;
  nodes: Array<ContentfulWebinar>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulWebinarGroupConnection>;
};


export type ContentfulWebinarConnectionDistinctArgs = {
  field: ContentfulWebinarFieldsEnum;
};


export type ContentfulWebinarConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulWebinarFieldsEnum;
};

export type ContentfulWebinarDescriptionTextNode = Node & {
  __typename?: 'contentfulWebinarDescriptionTextNode';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulWebinarDescriptionTextNodeSys>;
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>;
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>;
};

export type ContentfulWebinarDescriptionTextNodeConnection = {
  __typename?: 'contentfulWebinarDescriptionTextNodeConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWebinarDescriptionTextNodeEdge>;
  nodes: Array<ContentfulWebinarDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulWebinarDescriptionTextNodeGroupConnection>;
};


export type ContentfulWebinarDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulWebinarDescriptionTextNodeFieldsEnum;
};


export type ContentfulWebinarDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulWebinarDescriptionTextNodeFieldsEnum;
};

export type ContentfulWebinarDescriptionTextNodeEdge = {
  __typename?: 'contentfulWebinarDescriptionTextNodeEdge';
  next?: Maybe<ContentfulWebinarDescriptionTextNode>;
  node: ContentfulWebinarDescriptionTextNode;
  previous?: Maybe<ContentfulWebinarDescriptionTextNode>;
};

export enum ContentfulWebinarDescriptionTextNodeFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Description = 'description',
  SysType = 'sys___type',
  ChildrenMdx = 'childrenMdx',
  ChildrenMdxRawBody = 'childrenMdx___rawBody',
  ChildrenMdxFileAbsolutePath = 'childrenMdx___fileAbsolutePath',
  ChildrenMdxFrontmatterTitle = 'childrenMdx___frontmatter___title',
  ChildrenMdxSlug = 'childrenMdx___slug',
  ChildrenMdxBody = 'childrenMdx___body',
  ChildrenMdxExcerpt = 'childrenMdx___excerpt',
  ChildrenMdxHeadings = 'childrenMdx___headings',
  ChildrenMdxHeadingsValue = 'childrenMdx___headings___value',
  ChildrenMdxHeadingsDepth = 'childrenMdx___headings___depth',
  ChildrenMdxHtml = 'childrenMdx___html',
  ChildrenMdxMdxAst = 'childrenMdx___mdxAST',
  ChildrenMdxTableOfContents = 'childrenMdx___tableOfContents',
  ChildrenMdxTimeToRead = 'childrenMdx___timeToRead',
  ChildrenMdxWordCountParagraphs = 'childrenMdx___wordCount___paragraphs',
  ChildrenMdxWordCountSentences = 'childrenMdx___wordCount___sentences',
  ChildrenMdxWordCountWords = 'childrenMdx___wordCount___words',
  ChildrenMdxId = 'childrenMdx___id',
  ChildrenMdxParentId = 'childrenMdx___parent___id',
  ChildrenMdxParentParentId = 'childrenMdx___parent___parent___id',
  ChildrenMdxParentParentChildren = 'childrenMdx___parent___parent___children',
  ChildrenMdxParentChildren = 'childrenMdx___parent___children',
  ChildrenMdxParentChildrenId = 'childrenMdx___parent___children___id',
  ChildrenMdxParentChildrenChildren = 'childrenMdx___parent___children___children',
  ChildrenMdxParentInternalContent = 'childrenMdx___parent___internal___content',
  ChildrenMdxParentInternalContentDigest = 'childrenMdx___parent___internal___contentDigest',
  ChildrenMdxParentInternalDescription = 'childrenMdx___parent___internal___description',
  ChildrenMdxParentInternalFieldOwners = 'childrenMdx___parent___internal___fieldOwners',
  ChildrenMdxParentInternalIgnoreType = 'childrenMdx___parent___internal___ignoreType',
  ChildrenMdxParentInternalMediaType = 'childrenMdx___parent___internal___mediaType',
  ChildrenMdxParentInternalOwner = 'childrenMdx___parent___internal___owner',
  ChildrenMdxParentInternalType = 'childrenMdx___parent___internal___type',
  ChildrenMdxChildren = 'childrenMdx___children',
  ChildrenMdxChildrenId = 'childrenMdx___children___id',
  ChildrenMdxChildrenParentId = 'childrenMdx___children___parent___id',
  ChildrenMdxChildrenParentChildren = 'childrenMdx___children___parent___children',
  ChildrenMdxChildrenChildren = 'childrenMdx___children___children',
  ChildrenMdxChildrenChildrenId = 'childrenMdx___children___children___id',
  ChildrenMdxChildrenChildrenChildren = 'childrenMdx___children___children___children',
  ChildrenMdxChildrenInternalContent = 'childrenMdx___children___internal___content',
  ChildrenMdxChildrenInternalContentDigest = 'childrenMdx___children___internal___contentDigest',
  ChildrenMdxChildrenInternalDescription = 'childrenMdx___children___internal___description',
  ChildrenMdxChildrenInternalFieldOwners = 'childrenMdx___children___internal___fieldOwners',
  ChildrenMdxChildrenInternalIgnoreType = 'childrenMdx___children___internal___ignoreType',
  ChildrenMdxChildrenInternalMediaType = 'childrenMdx___children___internal___mediaType',
  ChildrenMdxChildrenInternalOwner = 'childrenMdx___children___internal___owner',
  ChildrenMdxChildrenInternalType = 'childrenMdx___children___internal___type',
  ChildrenMdxInternalContent = 'childrenMdx___internal___content',
  ChildrenMdxInternalContentDigest = 'childrenMdx___internal___contentDigest',
  ChildrenMdxInternalDescription = 'childrenMdx___internal___description',
  ChildrenMdxInternalFieldOwners = 'childrenMdx___internal___fieldOwners',
  ChildrenMdxInternalIgnoreType = 'childrenMdx___internal___ignoreType',
  ChildrenMdxInternalMediaType = 'childrenMdx___internal___mediaType',
  ChildrenMdxInternalOwner = 'childrenMdx___internal___owner',
  ChildrenMdxInternalType = 'childrenMdx___internal___type',
  ChildMdxRawBody = 'childMdx___rawBody',
  ChildMdxFileAbsolutePath = 'childMdx___fileAbsolutePath',
  ChildMdxFrontmatterTitle = 'childMdx___frontmatter___title',
  ChildMdxSlug = 'childMdx___slug',
  ChildMdxBody = 'childMdx___body',
  ChildMdxExcerpt = 'childMdx___excerpt',
  ChildMdxHeadings = 'childMdx___headings',
  ChildMdxHeadingsValue = 'childMdx___headings___value',
  ChildMdxHeadingsDepth = 'childMdx___headings___depth',
  ChildMdxHtml = 'childMdx___html',
  ChildMdxMdxAst = 'childMdx___mdxAST',
  ChildMdxTableOfContents = 'childMdx___tableOfContents',
  ChildMdxTimeToRead = 'childMdx___timeToRead',
  ChildMdxWordCountParagraphs = 'childMdx___wordCount___paragraphs',
  ChildMdxWordCountSentences = 'childMdx___wordCount___sentences',
  ChildMdxWordCountWords = 'childMdx___wordCount___words',
  ChildMdxId = 'childMdx___id',
  ChildMdxParentId = 'childMdx___parent___id',
  ChildMdxParentParentId = 'childMdx___parent___parent___id',
  ChildMdxParentParentChildren = 'childMdx___parent___parent___children',
  ChildMdxParentChildren = 'childMdx___parent___children',
  ChildMdxParentChildrenId = 'childMdx___parent___children___id',
  ChildMdxParentChildrenChildren = 'childMdx___parent___children___children',
  ChildMdxParentInternalContent = 'childMdx___parent___internal___content',
  ChildMdxParentInternalContentDigest = 'childMdx___parent___internal___contentDigest',
  ChildMdxParentInternalDescription = 'childMdx___parent___internal___description',
  ChildMdxParentInternalFieldOwners = 'childMdx___parent___internal___fieldOwners',
  ChildMdxParentInternalIgnoreType = 'childMdx___parent___internal___ignoreType',
  ChildMdxParentInternalMediaType = 'childMdx___parent___internal___mediaType',
  ChildMdxParentInternalOwner = 'childMdx___parent___internal___owner',
  ChildMdxParentInternalType = 'childMdx___parent___internal___type',
  ChildMdxChildren = 'childMdx___children',
  ChildMdxChildrenId = 'childMdx___children___id',
  ChildMdxChildrenParentId = 'childMdx___children___parent___id',
  ChildMdxChildrenParentChildren = 'childMdx___children___parent___children',
  ChildMdxChildrenChildren = 'childMdx___children___children',
  ChildMdxChildrenChildrenId = 'childMdx___children___children___id',
  ChildMdxChildrenChildrenChildren = 'childMdx___children___children___children',
  ChildMdxChildrenInternalContent = 'childMdx___children___internal___content',
  ChildMdxChildrenInternalContentDigest = 'childMdx___children___internal___contentDigest',
  ChildMdxChildrenInternalDescription = 'childMdx___children___internal___description',
  ChildMdxChildrenInternalFieldOwners = 'childMdx___children___internal___fieldOwners',
  ChildMdxChildrenInternalIgnoreType = 'childMdx___children___internal___ignoreType',
  ChildMdxChildrenInternalMediaType = 'childMdx___children___internal___mediaType',
  ChildMdxChildrenInternalOwner = 'childMdx___children___internal___owner',
  ChildMdxChildrenInternalType = 'childMdx___children___internal___type',
  ChildMdxInternalContent = 'childMdx___internal___content',
  ChildMdxInternalContentDigest = 'childMdx___internal___contentDigest',
  ChildMdxInternalDescription = 'childMdx___internal___description',
  ChildMdxInternalFieldOwners = 'childMdx___internal___fieldOwners',
  ChildMdxInternalIgnoreType = 'childMdx___internal___ignoreType',
  ChildMdxInternalMediaType = 'childMdx___internal___mediaType',
  ChildMdxInternalOwner = 'childMdx___internal___owner',
  ChildMdxInternalType = 'childMdx___internal___type'
}

export type ContentfulWebinarDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulWebinarDescriptionTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};

export type ContentfulWebinarDescriptionTextNodeFilterListInput = {
  elemMatch?: Maybe<ContentfulWebinarDescriptionTextNodeFilterInput>;
};

export type ContentfulWebinarDescriptionTextNodeGroupConnection = {
  __typename?: 'contentfulWebinarDescriptionTextNodeGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWebinarDescriptionTextNodeEdge>;
  nodes: Array<ContentfulWebinarDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulWebinarDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulWebinarDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulWebinarDescriptionTextNodeSys = {
  __typename?: 'contentfulWebinarDescriptionTextNodeSys';
  type?: Maybe<Scalars['String']>;
};

export type ContentfulWebinarDescriptionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWebinarEdge = {
  __typename?: 'ContentfulWebinarEdge';
  next?: Maybe<ContentfulWebinar>;
  node: ContentfulWebinar;
  previous?: Maybe<ContentfulWebinar>;
};

export enum ContentfulWebinarFieldsEnum {
  ContentfulId = 'contentful_id',
  Id = 'id',
  NodeLocale = 'node_locale',
  Title = 'title',
  Youtube = 'youtube',
  Date = 'date',
  Category = 'category',
  CoverContentfulId = 'cover___contentful_id',
  CoverId = 'cover___id',
  CoverSpaceId = 'cover___spaceId',
  CoverCreatedAt = 'cover___createdAt',
  CoverUpdatedAt = 'cover___updatedAt',
  CoverFileUrl = 'cover___file___url',
  CoverFileDetailsSize = 'cover___file___details___size',
  CoverFileFileName = 'cover___file___fileName',
  CoverFileContentType = 'cover___file___contentType',
  CoverFileErrorMessage = 'cover___file___error___message',
  CoverTitle = 'cover___title',
  CoverDescription = 'cover___description',
  CoverNodeLocale = 'cover___node_locale',
  CoverSysType = 'cover___sys___type',
  CoverSysRevision = 'cover___sys___revision',
  CoverLocalFileSourceInstanceName = 'cover___localFile___sourceInstanceName',
  CoverLocalFileAbsolutePath = 'cover___localFile___absolutePath',
  CoverLocalFileRelativePath = 'cover___localFile___relativePath',
  CoverLocalFileExtension = 'cover___localFile___extension',
  CoverLocalFileSize = 'cover___localFile___size',
  CoverLocalFilePrettySize = 'cover___localFile___prettySize',
  CoverLocalFileModifiedTime = 'cover___localFile___modifiedTime',
  CoverLocalFileAccessTime = 'cover___localFile___accessTime',
  CoverLocalFileChangeTime = 'cover___localFile___changeTime',
  CoverLocalFileBirthTime = 'cover___localFile___birthTime',
  CoverLocalFileRoot = 'cover___localFile___root',
  CoverLocalFileDir = 'cover___localFile___dir',
  CoverLocalFileBase = 'cover___localFile___base',
  CoverLocalFileExt = 'cover___localFile___ext',
  CoverLocalFileName = 'cover___localFile___name',
  CoverLocalFileRelativeDirectory = 'cover___localFile___relativeDirectory',
  CoverLocalFileDev = 'cover___localFile___dev',
  CoverLocalFileMode = 'cover___localFile___mode',
  CoverLocalFileNlink = 'cover___localFile___nlink',
  CoverLocalFileUid = 'cover___localFile___uid',
  CoverLocalFileGid = 'cover___localFile___gid',
  CoverLocalFileRdev = 'cover___localFile___rdev',
  CoverLocalFileIno = 'cover___localFile___ino',
  CoverLocalFileAtimeMs = 'cover___localFile___atimeMs',
  CoverLocalFileMtimeMs = 'cover___localFile___mtimeMs',
  CoverLocalFileCtimeMs = 'cover___localFile___ctimeMs',
  CoverLocalFileAtime = 'cover___localFile___atime',
  CoverLocalFileMtime = 'cover___localFile___mtime',
  CoverLocalFileCtime = 'cover___localFile___ctime',
  CoverLocalFileBirthtime = 'cover___localFile___birthtime',
  CoverLocalFileBirthtimeMs = 'cover___localFile___birthtimeMs',
  CoverLocalFileBlksize = 'cover___localFile___blksize',
  CoverLocalFileBlocks = 'cover___localFile___blocks',
  CoverLocalFileUrl = 'cover___localFile___url',
  CoverLocalFilePublicUrl = 'cover___localFile___publicURL',
  CoverLocalFileChildrenImageSharp = 'cover___localFile___childrenImageSharp',
  CoverLocalFileChildrenImageSharpGatsbyImageData = 'cover___localFile___childrenImageSharp___gatsbyImageData',
  CoverLocalFileChildrenImageSharpId = 'cover___localFile___childrenImageSharp___id',
  CoverLocalFileChildrenImageSharpChildren = 'cover___localFile___childrenImageSharp___children',
  CoverLocalFileChildImageSharpGatsbyImageData = 'cover___localFile___childImageSharp___gatsbyImageData',
  CoverLocalFileChildImageSharpId = 'cover___localFile___childImageSharp___id',
  CoverLocalFileChildImageSharpChildren = 'cover___localFile___childImageSharp___children',
  CoverLocalFileId = 'cover___localFile___id',
  CoverLocalFileParentId = 'cover___localFile___parent___id',
  CoverLocalFileParentChildren = 'cover___localFile___parent___children',
  CoverLocalFileChildren = 'cover___localFile___children',
  CoverLocalFileChildrenId = 'cover___localFile___children___id',
  CoverLocalFileChildrenChildren = 'cover___localFile___children___children',
  CoverLocalFileInternalContent = 'cover___localFile___internal___content',
  CoverLocalFileInternalContentDigest = 'cover___localFile___internal___contentDigest',
  CoverLocalFileInternalDescription = 'cover___localFile___internal___description',
  CoverLocalFileInternalFieldOwners = 'cover___localFile___internal___fieldOwners',
  CoverLocalFileInternalIgnoreType = 'cover___localFile___internal___ignoreType',
  CoverLocalFileInternalMediaType = 'cover___localFile___internal___mediaType',
  CoverLocalFileInternalOwner = 'cover___localFile___internal___owner',
  CoverLocalFileInternalType = 'cover___localFile___internal___type',
  CoverFixedBase64 = 'cover___fixed___base64',
  CoverFixedTracedSvg = 'cover___fixed___tracedSVG',
  CoverFixedAspectRatio = 'cover___fixed___aspectRatio',
  CoverFixedWidth = 'cover___fixed___width',
  CoverFixedHeight = 'cover___fixed___height',
  CoverFixedSrc = 'cover___fixed___src',
  CoverFixedSrcSet = 'cover___fixed___srcSet',
  CoverFixedSrcWebp = 'cover___fixed___srcWebp',
  CoverFixedSrcSetWebp = 'cover___fixed___srcSetWebp',
  CoverResolutionsBase64 = 'cover___resolutions___base64',
  CoverResolutionsTracedSvg = 'cover___resolutions___tracedSVG',
  CoverResolutionsAspectRatio = 'cover___resolutions___aspectRatio',
  CoverResolutionsWidth = 'cover___resolutions___width',
  CoverResolutionsHeight = 'cover___resolutions___height',
  CoverResolutionsSrc = 'cover___resolutions___src',
  CoverResolutionsSrcSet = 'cover___resolutions___srcSet',
  CoverResolutionsSrcWebp = 'cover___resolutions___srcWebp',
  CoverResolutionsSrcSetWebp = 'cover___resolutions___srcSetWebp',
  CoverFluidBase64 = 'cover___fluid___base64',
  CoverFluidTracedSvg = 'cover___fluid___tracedSVG',
  CoverFluidAspectRatio = 'cover___fluid___aspectRatio',
  CoverFluidSrc = 'cover___fluid___src',
  CoverFluidSrcSet = 'cover___fluid___srcSet',
  CoverFluidSrcWebp = 'cover___fluid___srcWebp',
  CoverFluidSrcSetWebp = 'cover___fluid___srcSetWebp',
  CoverFluidSizes = 'cover___fluid___sizes',
  CoverSizesBase64 = 'cover___sizes___base64',
  CoverSizesTracedSvg = 'cover___sizes___tracedSVG',
  CoverSizesAspectRatio = 'cover___sizes___aspectRatio',
  CoverSizesSrc = 'cover___sizes___src',
  CoverSizesSrcSet = 'cover___sizes___srcSet',
  CoverSizesSrcWebp = 'cover___sizes___srcWebp',
  CoverSizesSrcSetWebp = 'cover___sizes___srcSetWebp',
  CoverSizesSizes = 'cover___sizes___sizes',
  CoverResizeBase64 = 'cover___resize___base64',
  CoverResizeTracedSvg = 'cover___resize___tracedSVG',
  CoverResizeSrc = 'cover___resize___src',
  CoverResizeWidth = 'cover___resize___width',
  CoverResizeHeight = 'cover___resize___height',
  CoverResizeAspectRatio = 'cover___resize___aspectRatio',
  CoverParentId = 'cover___parent___id',
  CoverParentParentId = 'cover___parent___parent___id',
  CoverParentParentChildren = 'cover___parent___parent___children',
  CoverParentChildren = 'cover___parent___children',
  CoverParentChildrenId = 'cover___parent___children___id',
  CoverParentChildrenChildren = 'cover___parent___children___children',
  CoverParentInternalContent = 'cover___parent___internal___content',
  CoverParentInternalContentDigest = 'cover___parent___internal___contentDigest',
  CoverParentInternalDescription = 'cover___parent___internal___description',
  CoverParentInternalFieldOwners = 'cover___parent___internal___fieldOwners',
  CoverParentInternalIgnoreType = 'cover___parent___internal___ignoreType',
  CoverParentInternalMediaType = 'cover___parent___internal___mediaType',
  CoverParentInternalOwner = 'cover___parent___internal___owner',
  CoverParentInternalType = 'cover___parent___internal___type',
  CoverChildren = 'cover___children',
  CoverChildrenId = 'cover___children___id',
  CoverChildrenParentId = 'cover___children___parent___id',
  CoverChildrenParentChildren = 'cover___children___parent___children',
  CoverChildrenChildren = 'cover___children___children',
  CoverChildrenChildrenId = 'cover___children___children___id',
  CoverChildrenChildrenChildren = 'cover___children___children___children',
  CoverChildrenInternalContent = 'cover___children___internal___content',
  CoverChildrenInternalContentDigest = 'cover___children___internal___contentDigest',
  CoverChildrenInternalDescription = 'cover___children___internal___description',
  CoverChildrenInternalFieldOwners = 'cover___children___internal___fieldOwners',
  CoverChildrenInternalIgnoreType = 'cover___children___internal___ignoreType',
  CoverChildrenInternalMediaType = 'cover___children___internal___mediaType',
  CoverChildrenInternalOwner = 'cover___children___internal___owner',
  CoverChildrenInternalType = 'cover___children___internal___type',
  CoverInternalContent = 'cover___internal___content',
  CoverInternalContentDigest = 'cover___internal___contentDigest',
  CoverInternalDescription = 'cover___internal___description',
  CoverInternalFieldOwners = 'cover___internal___fieldOwners',
  CoverInternalIgnoreType = 'cover___internal___ignoreType',
  CoverInternalMediaType = 'cover___internal___mediaType',
  CoverInternalOwner = 'cover___internal___owner',
  CoverInternalType = 'cover___internal___type',
  DescriptionId = 'description___id',
  DescriptionParentId = 'description___parent___id',
  DescriptionParentParentId = 'description___parent___parent___id',
  DescriptionParentParentChildren = 'description___parent___parent___children',
  DescriptionParentChildren = 'description___parent___children',
  DescriptionParentChildrenId = 'description___parent___children___id',
  DescriptionParentChildrenChildren = 'description___parent___children___children',
  DescriptionParentInternalContent = 'description___parent___internal___content',
  DescriptionParentInternalContentDigest = 'description___parent___internal___contentDigest',
  DescriptionParentInternalDescription = 'description___parent___internal___description',
  DescriptionParentInternalFieldOwners = 'description___parent___internal___fieldOwners',
  DescriptionParentInternalIgnoreType = 'description___parent___internal___ignoreType',
  DescriptionParentInternalMediaType = 'description___parent___internal___mediaType',
  DescriptionParentInternalOwner = 'description___parent___internal___owner',
  DescriptionParentInternalType = 'description___parent___internal___type',
  DescriptionChildren = 'description___children',
  DescriptionChildrenId = 'description___children___id',
  DescriptionChildrenParentId = 'description___children___parent___id',
  DescriptionChildrenParentChildren = 'description___children___parent___children',
  DescriptionChildrenChildren = 'description___children___children',
  DescriptionChildrenChildrenId = 'description___children___children___id',
  DescriptionChildrenChildrenChildren = 'description___children___children___children',
  DescriptionChildrenInternalContent = 'description___children___internal___content',
  DescriptionChildrenInternalContentDigest = 'description___children___internal___contentDigest',
  DescriptionChildrenInternalDescription = 'description___children___internal___description',
  DescriptionChildrenInternalFieldOwners = 'description___children___internal___fieldOwners',
  DescriptionChildrenInternalIgnoreType = 'description___children___internal___ignoreType',
  DescriptionChildrenInternalMediaType = 'description___children___internal___mediaType',
  DescriptionChildrenInternalOwner = 'description___children___internal___owner',
  DescriptionChildrenInternalType = 'description___children___internal___type',
  DescriptionInternalContent = 'description___internal___content',
  DescriptionInternalContentDigest = 'description___internal___contentDigest',
  DescriptionInternalDescription = 'description___internal___description',
  DescriptionInternalFieldOwners = 'description___internal___fieldOwners',
  DescriptionInternalIgnoreType = 'description___internal___ignoreType',
  DescriptionInternalMediaType = 'description___internal___mediaType',
  DescriptionInternalOwner = 'description___internal___owner',
  DescriptionInternalType = 'description___internal___type',
  DescriptionDescription = 'description___description',
  DescriptionSysType = 'description___sys___type',
  DescriptionChildrenMdx = 'description___childrenMdx',
  DescriptionChildrenMdxRawBody = 'description___childrenMdx___rawBody',
  DescriptionChildrenMdxFileAbsolutePath = 'description___childrenMdx___fileAbsolutePath',
  DescriptionChildrenMdxFrontmatterTitle = 'description___childrenMdx___frontmatter___title',
  DescriptionChildrenMdxSlug = 'description___childrenMdx___slug',
  DescriptionChildrenMdxBody = 'description___childrenMdx___body',
  DescriptionChildrenMdxExcerpt = 'description___childrenMdx___excerpt',
  DescriptionChildrenMdxHeadings = 'description___childrenMdx___headings',
  DescriptionChildrenMdxHeadingsValue = 'description___childrenMdx___headings___value',
  DescriptionChildrenMdxHeadingsDepth = 'description___childrenMdx___headings___depth',
  DescriptionChildrenMdxHtml = 'description___childrenMdx___html',
  DescriptionChildrenMdxMdxAst = 'description___childrenMdx___mdxAST',
  DescriptionChildrenMdxTableOfContents = 'description___childrenMdx___tableOfContents',
  DescriptionChildrenMdxTimeToRead = 'description___childrenMdx___timeToRead',
  DescriptionChildrenMdxWordCountParagraphs = 'description___childrenMdx___wordCount___paragraphs',
  DescriptionChildrenMdxWordCountSentences = 'description___childrenMdx___wordCount___sentences',
  DescriptionChildrenMdxWordCountWords = 'description___childrenMdx___wordCount___words',
  DescriptionChildrenMdxId = 'description___childrenMdx___id',
  DescriptionChildrenMdxParentId = 'description___childrenMdx___parent___id',
  DescriptionChildrenMdxParentChildren = 'description___childrenMdx___parent___children',
  DescriptionChildrenMdxChildren = 'description___childrenMdx___children',
  DescriptionChildrenMdxChildrenId = 'description___childrenMdx___children___id',
  DescriptionChildrenMdxChildrenChildren = 'description___childrenMdx___children___children',
  DescriptionChildrenMdxInternalContent = 'description___childrenMdx___internal___content',
  DescriptionChildrenMdxInternalContentDigest = 'description___childrenMdx___internal___contentDigest',
  DescriptionChildrenMdxInternalDescription = 'description___childrenMdx___internal___description',
  DescriptionChildrenMdxInternalFieldOwners = 'description___childrenMdx___internal___fieldOwners',
  DescriptionChildrenMdxInternalIgnoreType = 'description___childrenMdx___internal___ignoreType',
  DescriptionChildrenMdxInternalMediaType = 'description___childrenMdx___internal___mediaType',
  DescriptionChildrenMdxInternalOwner = 'description___childrenMdx___internal___owner',
  DescriptionChildrenMdxInternalType = 'description___childrenMdx___internal___type',
  DescriptionChildMdxRawBody = 'description___childMdx___rawBody',
  DescriptionChildMdxFileAbsolutePath = 'description___childMdx___fileAbsolutePath',
  DescriptionChildMdxFrontmatterTitle = 'description___childMdx___frontmatter___title',
  DescriptionChildMdxSlug = 'description___childMdx___slug',
  DescriptionChildMdxBody = 'description___childMdx___body',
  DescriptionChildMdxExcerpt = 'description___childMdx___excerpt',
  DescriptionChildMdxHeadings = 'description___childMdx___headings',
  DescriptionChildMdxHeadingsValue = 'description___childMdx___headings___value',
  DescriptionChildMdxHeadingsDepth = 'description___childMdx___headings___depth',
  DescriptionChildMdxHtml = 'description___childMdx___html',
  DescriptionChildMdxMdxAst = 'description___childMdx___mdxAST',
  DescriptionChildMdxTableOfContents = 'description___childMdx___tableOfContents',
  DescriptionChildMdxTimeToRead = 'description___childMdx___timeToRead',
  DescriptionChildMdxWordCountParagraphs = 'description___childMdx___wordCount___paragraphs',
  DescriptionChildMdxWordCountSentences = 'description___childMdx___wordCount___sentences',
  DescriptionChildMdxWordCountWords = 'description___childMdx___wordCount___words',
  DescriptionChildMdxId = 'description___childMdx___id',
  DescriptionChildMdxParentId = 'description___childMdx___parent___id',
  DescriptionChildMdxParentChildren = 'description___childMdx___parent___children',
  DescriptionChildMdxChildren = 'description___childMdx___children',
  DescriptionChildMdxChildrenId = 'description___childMdx___children___id',
  DescriptionChildMdxChildrenChildren = 'description___childMdx___children___children',
  DescriptionChildMdxInternalContent = 'description___childMdx___internal___content',
  DescriptionChildMdxInternalContentDigest = 'description___childMdx___internal___contentDigest',
  DescriptionChildMdxInternalDescription = 'description___childMdx___internal___description',
  DescriptionChildMdxInternalFieldOwners = 'description___childMdx___internal___fieldOwners',
  DescriptionChildMdxInternalIgnoreType = 'description___childMdx___internal___ignoreType',
  DescriptionChildMdxInternalMediaType = 'description___childMdx___internal___mediaType',
  DescriptionChildMdxInternalOwner = 'description___childMdx___internal___owner',
  DescriptionChildMdxInternalType = 'description___childMdx___internal___type',
  SpaceId = 'spaceId',
  CreatedAt = 'createdAt',
  UpdatedAt = 'updatedAt',
  SysType = 'sys___type',
  SysRevision = 'sys___revision',
  SysContentTypeSysType = 'sys___contentType___sys___type',
  SysContentTypeSysLinkType = 'sys___contentType___sys___linkType',
  SysContentTypeSysId = 'sys___contentType___sys___id',
  ChildrenContentfulWebinarDescriptionTextNode = 'childrenContentfulWebinarDescriptionTextNode',
  ChildrenContentfulWebinarDescriptionTextNodeId = 'childrenContentfulWebinarDescriptionTextNode___id',
  ChildrenContentfulWebinarDescriptionTextNodeParentId = 'childrenContentfulWebinarDescriptionTextNode___parent___id',
  ChildrenContentfulWebinarDescriptionTextNodeParentParentId = 'childrenContentfulWebinarDescriptionTextNode___parent___parent___id',
  ChildrenContentfulWebinarDescriptionTextNodeParentParentChildren = 'childrenContentfulWebinarDescriptionTextNode___parent___parent___children',
  ChildrenContentfulWebinarDescriptionTextNodeParentChildren = 'childrenContentfulWebinarDescriptionTextNode___parent___children',
  ChildrenContentfulWebinarDescriptionTextNodeParentChildrenId = 'childrenContentfulWebinarDescriptionTextNode___parent___children___id',
  ChildrenContentfulWebinarDescriptionTextNodeParentChildrenChildren = 'childrenContentfulWebinarDescriptionTextNode___parent___children___children',
  ChildrenContentfulWebinarDescriptionTextNodeParentInternalContent = 'childrenContentfulWebinarDescriptionTextNode___parent___internal___content',
  ChildrenContentfulWebinarDescriptionTextNodeParentInternalContentDigest = 'childrenContentfulWebinarDescriptionTextNode___parent___internal___contentDigest',
  ChildrenContentfulWebinarDescriptionTextNodeParentInternalDescription = 'childrenContentfulWebinarDescriptionTextNode___parent___internal___description',
  ChildrenContentfulWebinarDescriptionTextNodeParentInternalFieldOwners = 'childrenContentfulWebinarDescriptionTextNode___parent___internal___fieldOwners',
  ChildrenContentfulWebinarDescriptionTextNodeParentInternalIgnoreType = 'childrenContentfulWebinarDescriptionTextNode___parent___internal___ignoreType',
  ChildrenContentfulWebinarDescriptionTextNodeParentInternalMediaType = 'childrenContentfulWebinarDescriptionTextNode___parent___internal___mediaType',
  ChildrenContentfulWebinarDescriptionTextNodeParentInternalOwner = 'childrenContentfulWebinarDescriptionTextNode___parent___internal___owner',
  ChildrenContentfulWebinarDescriptionTextNodeParentInternalType = 'childrenContentfulWebinarDescriptionTextNode___parent___internal___type',
  ChildrenContentfulWebinarDescriptionTextNodeChildren = 'childrenContentfulWebinarDescriptionTextNode___children',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenId = 'childrenContentfulWebinarDescriptionTextNode___children___id',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenParentId = 'childrenContentfulWebinarDescriptionTextNode___children___parent___id',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenParentChildren = 'childrenContentfulWebinarDescriptionTextNode___children___parent___children',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenChildren = 'childrenContentfulWebinarDescriptionTextNode___children___children',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenChildrenId = 'childrenContentfulWebinarDescriptionTextNode___children___children___id',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenChildrenChildren = 'childrenContentfulWebinarDescriptionTextNode___children___children___children',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenInternalContent = 'childrenContentfulWebinarDescriptionTextNode___children___internal___content',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenInternalContentDigest = 'childrenContentfulWebinarDescriptionTextNode___children___internal___contentDigest',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenInternalDescription = 'childrenContentfulWebinarDescriptionTextNode___children___internal___description',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenInternalFieldOwners = 'childrenContentfulWebinarDescriptionTextNode___children___internal___fieldOwners',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenInternalIgnoreType = 'childrenContentfulWebinarDescriptionTextNode___children___internal___ignoreType',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenInternalMediaType = 'childrenContentfulWebinarDescriptionTextNode___children___internal___mediaType',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenInternalOwner = 'childrenContentfulWebinarDescriptionTextNode___children___internal___owner',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenInternalType = 'childrenContentfulWebinarDescriptionTextNode___children___internal___type',
  ChildrenContentfulWebinarDescriptionTextNodeInternalContent = 'childrenContentfulWebinarDescriptionTextNode___internal___content',
  ChildrenContentfulWebinarDescriptionTextNodeInternalContentDigest = 'childrenContentfulWebinarDescriptionTextNode___internal___contentDigest',
  ChildrenContentfulWebinarDescriptionTextNodeInternalDescription = 'childrenContentfulWebinarDescriptionTextNode___internal___description',
  ChildrenContentfulWebinarDescriptionTextNodeInternalFieldOwners = 'childrenContentfulWebinarDescriptionTextNode___internal___fieldOwners',
  ChildrenContentfulWebinarDescriptionTextNodeInternalIgnoreType = 'childrenContentfulWebinarDescriptionTextNode___internal___ignoreType',
  ChildrenContentfulWebinarDescriptionTextNodeInternalMediaType = 'childrenContentfulWebinarDescriptionTextNode___internal___mediaType',
  ChildrenContentfulWebinarDescriptionTextNodeInternalOwner = 'childrenContentfulWebinarDescriptionTextNode___internal___owner',
  ChildrenContentfulWebinarDescriptionTextNodeInternalType = 'childrenContentfulWebinarDescriptionTextNode___internal___type',
  ChildrenContentfulWebinarDescriptionTextNodeDescription = 'childrenContentfulWebinarDescriptionTextNode___description',
  ChildrenContentfulWebinarDescriptionTextNodeSysType = 'childrenContentfulWebinarDescriptionTextNode___sys___type',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdx = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxRawBody = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___rawBody',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxFileAbsolutePath = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___fileAbsolutePath',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxFrontmatterTitle = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___frontmatter___title',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxSlug = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___slug',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxBody = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___body',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxExcerpt = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___excerpt',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxHeadings = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___headings',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxHeadingsValue = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___headings___value',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxHeadingsDepth = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___headings___depth',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxHtml = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___html',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxMdxAst = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___mdxAST',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxTableOfContents = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___tableOfContents',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxTimeToRead = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___timeToRead',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxWordCountParagraphs = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___wordCount___paragraphs',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxWordCountSentences = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___wordCount___sentences',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxWordCountWords = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___wordCount___words',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxId = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___id',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxParentId = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___parent___id',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxParentChildren = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___parent___children',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxChildren = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___children',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxChildrenId = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___children___id',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxChildrenChildren = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___children___children',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxInternalContent = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___internal___content',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxInternalContentDigest = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___internal___contentDigest',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxInternalDescription = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___internal___description',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxInternalFieldOwners = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___internal___fieldOwners',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxInternalIgnoreType = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___internal___ignoreType',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxInternalMediaType = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___internal___mediaType',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxInternalOwner = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___internal___owner',
  ChildrenContentfulWebinarDescriptionTextNodeChildrenMdxInternalType = 'childrenContentfulWebinarDescriptionTextNode___childrenMdx___internal___type',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxRawBody = 'childrenContentfulWebinarDescriptionTextNode___childMdx___rawBody',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxFileAbsolutePath = 'childrenContentfulWebinarDescriptionTextNode___childMdx___fileAbsolutePath',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxFrontmatterTitle = 'childrenContentfulWebinarDescriptionTextNode___childMdx___frontmatter___title',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxSlug = 'childrenContentfulWebinarDescriptionTextNode___childMdx___slug',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxBody = 'childrenContentfulWebinarDescriptionTextNode___childMdx___body',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxExcerpt = 'childrenContentfulWebinarDescriptionTextNode___childMdx___excerpt',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxHeadings = 'childrenContentfulWebinarDescriptionTextNode___childMdx___headings',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxHeadingsValue = 'childrenContentfulWebinarDescriptionTextNode___childMdx___headings___value',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxHeadingsDepth = 'childrenContentfulWebinarDescriptionTextNode___childMdx___headings___depth',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxHtml = 'childrenContentfulWebinarDescriptionTextNode___childMdx___html',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxMdxAst = 'childrenContentfulWebinarDescriptionTextNode___childMdx___mdxAST',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxTableOfContents = 'childrenContentfulWebinarDescriptionTextNode___childMdx___tableOfContents',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxTimeToRead = 'childrenContentfulWebinarDescriptionTextNode___childMdx___timeToRead',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxWordCountParagraphs = 'childrenContentfulWebinarDescriptionTextNode___childMdx___wordCount___paragraphs',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxWordCountSentences = 'childrenContentfulWebinarDescriptionTextNode___childMdx___wordCount___sentences',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxWordCountWords = 'childrenContentfulWebinarDescriptionTextNode___childMdx___wordCount___words',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxId = 'childrenContentfulWebinarDescriptionTextNode___childMdx___id',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxParentId = 'childrenContentfulWebinarDescriptionTextNode___childMdx___parent___id',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxParentChildren = 'childrenContentfulWebinarDescriptionTextNode___childMdx___parent___children',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxChildren = 'childrenContentfulWebinarDescriptionTextNode___childMdx___children',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxChildrenId = 'childrenContentfulWebinarDescriptionTextNode___childMdx___children___id',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxChildrenChildren = 'childrenContentfulWebinarDescriptionTextNode___childMdx___children___children',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxInternalContent = 'childrenContentfulWebinarDescriptionTextNode___childMdx___internal___content',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxInternalContentDigest = 'childrenContentfulWebinarDescriptionTextNode___childMdx___internal___contentDigest',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxInternalDescription = 'childrenContentfulWebinarDescriptionTextNode___childMdx___internal___description',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxInternalFieldOwners = 'childrenContentfulWebinarDescriptionTextNode___childMdx___internal___fieldOwners',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxInternalIgnoreType = 'childrenContentfulWebinarDescriptionTextNode___childMdx___internal___ignoreType',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxInternalMediaType = 'childrenContentfulWebinarDescriptionTextNode___childMdx___internal___mediaType',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxInternalOwner = 'childrenContentfulWebinarDescriptionTextNode___childMdx___internal___owner',
  ChildrenContentfulWebinarDescriptionTextNodeChildMdxInternalType = 'childrenContentfulWebinarDescriptionTextNode___childMdx___internal___type',
  ChildContentfulWebinarDescriptionTextNodeId = 'childContentfulWebinarDescriptionTextNode___id',
  ChildContentfulWebinarDescriptionTextNodeParentId = 'childContentfulWebinarDescriptionTextNode___parent___id',
  ChildContentfulWebinarDescriptionTextNodeParentParentId = 'childContentfulWebinarDescriptionTextNode___parent___parent___id',
  ChildContentfulWebinarDescriptionTextNodeParentParentChildren = 'childContentfulWebinarDescriptionTextNode___parent___parent___children',
  ChildContentfulWebinarDescriptionTextNodeParentChildren = 'childContentfulWebinarDescriptionTextNode___parent___children',
  ChildContentfulWebinarDescriptionTextNodeParentChildrenId = 'childContentfulWebinarDescriptionTextNode___parent___children___id',
  ChildContentfulWebinarDescriptionTextNodeParentChildrenChildren = 'childContentfulWebinarDescriptionTextNode___parent___children___children',
  ChildContentfulWebinarDescriptionTextNodeParentInternalContent = 'childContentfulWebinarDescriptionTextNode___parent___internal___content',
  ChildContentfulWebinarDescriptionTextNodeParentInternalContentDigest = 'childContentfulWebinarDescriptionTextNode___parent___internal___contentDigest',
  ChildContentfulWebinarDescriptionTextNodeParentInternalDescription = 'childContentfulWebinarDescriptionTextNode___parent___internal___description',
  ChildContentfulWebinarDescriptionTextNodeParentInternalFieldOwners = 'childContentfulWebinarDescriptionTextNode___parent___internal___fieldOwners',
  ChildContentfulWebinarDescriptionTextNodeParentInternalIgnoreType = 'childContentfulWebinarDescriptionTextNode___parent___internal___ignoreType',
  ChildContentfulWebinarDescriptionTextNodeParentInternalMediaType = 'childContentfulWebinarDescriptionTextNode___parent___internal___mediaType',
  ChildContentfulWebinarDescriptionTextNodeParentInternalOwner = 'childContentfulWebinarDescriptionTextNode___parent___internal___owner',
  ChildContentfulWebinarDescriptionTextNodeParentInternalType = 'childContentfulWebinarDescriptionTextNode___parent___internal___type',
  ChildContentfulWebinarDescriptionTextNodeChildren = 'childContentfulWebinarDescriptionTextNode___children',
  ChildContentfulWebinarDescriptionTextNodeChildrenId = 'childContentfulWebinarDescriptionTextNode___children___id',
  ChildContentfulWebinarDescriptionTextNodeChildrenParentId = 'childContentfulWebinarDescriptionTextNode___children___parent___id',
  ChildContentfulWebinarDescriptionTextNodeChildrenParentChildren = 'childContentfulWebinarDescriptionTextNode___children___parent___children',
  ChildContentfulWebinarDescriptionTextNodeChildrenChildren = 'childContentfulWebinarDescriptionTextNode___children___children',
  ChildContentfulWebinarDescriptionTextNodeChildrenChildrenId = 'childContentfulWebinarDescriptionTextNode___children___children___id',
  ChildContentfulWebinarDescriptionTextNodeChildrenChildrenChildren = 'childContentfulWebinarDescriptionTextNode___children___children___children',
  ChildContentfulWebinarDescriptionTextNodeChildrenInternalContent = 'childContentfulWebinarDescriptionTextNode___children___internal___content',
  ChildContentfulWebinarDescriptionTextNodeChildrenInternalContentDigest = 'childContentfulWebinarDescriptionTextNode___children___internal___contentDigest',
  ChildContentfulWebinarDescriptionTextNodeChildrenInternalDescription = 'childContentfulWebinarDescriptionTextNode___children___internal___description',
  ChildContentfulWebinarDescriptionTextNodeChildrenInternalFieldOwners = 'childContentfulWebinarDescriptionTextNode___children___internal___fieldOwners',
  ChildContentfulWebinarDescriptionTextNodeChildrenInternalIgnoreType = 'childContentfulWebinarDescriptionTextNode___children___internal___ignoreType',
  ChildContentfulWebinarDescriptionTextNodeChildrenInternalMediaType = 'childContentfulWebinarDescriptionTextNode___children___internal___mediaType',
  ChildContentfulWebinarDescriptionTextNodeChildrenInternalOwner = 'childContentfulWebinarDescriptionTextNode___children___internal___owner',
  ChildContentfulWebinarDescriptionTextNodeChildrenInternalType = 'childContentfulWebinarDescriptionTextNode___children___internal___type',
  ChildContentfulWebinarDescriptionTextNodeInternalContent = 'childContentfulWebinarDescriptionTextNode___internal___content',
  ChildContentfulWebinarDescriptionTextNodeInternalContentDigest = 'childContentfulWebinarDescriptionTextNode___internal___contentDigest',
  ChildContentfulWebinarDescriptionTextNodeInternalDescription = 'childContentfulWebinarDescriptionTextNode___internal___description',
  ChildContentfulWebinarDescriptionTextNodeInternalFieldOwners = 'childContentfulWebinarDescriptionTextNode___internal___fieldOwners',
  ChildContentfulWebinarDescriptionTextNodeInternalIgnoreType = 'childContentfulWebinarDescriptionTextNode___internal___ignoreType',
  ChildContentfulWebinarDescriptionTextNodeInternalMediaType = 'childContentfulWebinarDescriptionTextNode___internal___mediaType',
  ChildContentfulWebinarDescriptionTextNodeInternalOwner = 'childContentfulWebinarDescriptionTextNode___internal___owner',
  ChildContentfulWebinarDescriptionTextNodeInternalType = 'childContentfulWebinarDescriptionTextNode___internal___type',
  ChildContentfulWebinarDescriptionTextNodeDescription = 'childContentfulWebinarDescriptionTextNode___description',
  ChildContentfulWebinarDescriptionTextNodeSysType = 'childContentfulWebinarDescriptionTextNode___sys___type',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdx = 'childContentfulWebinarDescriptionTextNode___childrenMdx',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxRawBody = 'childContentfulWebinarDescriptionTextNode___childrenMdx___rawBody',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxFileAbsolutePath = 'childContentfulWebinarDescriptionTextNode___childrenMdx___fileAbsolutePath',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxFrontmatterTitle = 'childContentfulWebinarDescriptionTextNode___childrenMdx___frontmatter___title',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxSlug = 'childContentfulWebinarDescriptionTextNode___childrenMdx___slug',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxBody = 'childContentfulWebinarDescriptionTextNode___childrenMdx___body',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxExcerpt = 'childContentfulWebinarDescriptionTextNode___childrenMdx___excerpt',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxHeadings = 'childContentfulWebinarDescriptionTextNode___childrenMdx___headings',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxHeadingsValue = 'childContentfulWebinarDescriptionTextNode___childrenMdx___headings___value',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxHeadingsDepth = 'childContentfulWebinarDescriptionTextNode___childrenMdx___headings___depth',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxHtml = 'childContentfulWebinarDescriptionTextNode___childrenMdx___html',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxMdxAst = 'childContentfulWebinarDescriptionTextNode___childrenMdx___mdxAST',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxTableOfContents = 'childContentfulWebinarDescriptionTextNode___childrenMdx___tableOfContents',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxTimeToRead = 'childContentfulWebinarDescriptionTextNode___childrenMdx___timeToRead',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxWordCountParagraphs = 'childContentfulWebinarDescriptionTextNode___childrenMdx___wordCount___paragraphs',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxWordCountSentences = 'childContentfulWebinarDescriptionTextNode___childrenMdx___wordCount___sentences',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxWordCountWords = 'childContentfulWebinarDescriptionTextNode___childrenMdx___wordCount___words',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxId = 'childContentfulWebinarDescriptionTextNode___childrenMdx___id',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxParentId = 'childContentfulWebinarDescriptionTextNode___childrenMdx___parent___id',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxParentChildren = 'childContentfulWebinarDescriptionTextNode___childrenMdx___parent___children',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxChildren = 'childContentfulWebinarDescriptionTextNode___childrenMdx___children',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxChildrenId = 'childContentfulWebinarDescriptionTextNode___childrenMdx___children___id',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxChildrenChildren = 'childContentfulWebinarDescriptionTextNode___childrenMdx___children___children',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxInternalContent = 'childContentfulWebinarDescriptionTextNode___childrenMdx___internal___content',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxInternalContentDigest = 'childContentfulWebinarDescriptionTextNode___childrenMdx___internal___contentDigest',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxInternalDescription = 'childContentfulWebinarDescriptionTextNode___childrenMdx___internal___description',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxInternalFieldOwners = 'childContentfulWebinarDescriptionTextNode___childrenMdx___internal___fieldOwners',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxInternalIgnoreType = 'childContentfulWebinarDescriptionTextNode___childrenMdx___internal___ignoreType',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxInternalMediaType = 'childContentfulWebinarDescriptionTextNode___childrenMdx___internal___mediaType',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxInternalOwner = 'childContentfulWebinarDescriptionTextNode___childrenMdx___internal___owner',
  ChildContentfulWebinarDescriptionTextNodeChildrenMdxInternalType = 'childContentfulWebinarDescriptionTextNode___childrenMdx___internal___type',
  ChildContentfulWebinarDescriptionTextNodeChildMdxRawBody = 'childContentfulWebinarDescriptionTextNode___childMdx___rawBody',
  ChildContentfulWebinarDescriptionTextNodeChildMdxFileAbsolutePath = 'childContentfulWebinarDescriptionTextNode___childMdx___fileAbsolutePath',
  ChildContentfulWebinarDescriptionTextNodeChildMdxFrontmatterTitle = 'childContentfulWebinarDescriptionTextNode___childMdx___frontmatter___title',
  ChildContentfulWebinarDescriptionTextNodeChildMdxSlug = 'childContentfulWebinarDescriptionTextNode___childMdx___slug',
  ChildContentfulWebinarDescriptionTextNodeChildMdxBody = 'childContentfulWebinarDescriptionTextNode___childMdx___body',
  ChildContentfulWebinarDescriptionTextNodeChildMdxExcerpt = 'childContentfulWebinarDescriptionTextNode___childMdx___excerpt',
  ChildContentfulWebinarDescriptionTextNodeChildMdxHeadings = 'childContentfulWebinarDescriptionTextNode___childMdx___headings',
  ChildContentfulWebinarDescriptionTextNodeChildMdxHeadingsValue = 'childContentfulWebinarDescriptionTextNode___childMdx___headings___value',
  ChildContentfulWebinarDescriptionTextNodeChildMdxHeadingsDepth = 'childContentfulWebinarDescriptionTextNode___childMdx___headings___depth',
  ChildContentfulWebinarDescriptionTextNodeChildMdxHtml = 'childContentfulWebinarDescriptionTextNode___childMdx___html',
  ChildContentfulWebinarDescriptionTextNodeChildMdxMdxAst = 'childContentfulWebinarDescriptionTextNode___childMdx___mdxAST',
  ChildContentfulWebinarDescriptionTextNodeChildMdxTableOfContents = 'childContentfulWebinarDescriptionTextNode___childMdx___tableOfContents',
  ChildContentfulWebinarDescriptionTextNodeChildMdxTimeToRead = 'childContentfulWebinarDescriptionTextNode___childMdx___timeToRead',
  ChildContentfulWebinarDescriptionTextNodeChildMdxWordCountParagraphs = 'childContentfulWebinarDescriptionTextNode___childMdx___wordCount___paragraphs',
  ChildContentfulWebinarDescriptionTextNodeChildMdxWordCountSentences = 'childContentfulWebinarDescriptionTextNode___childMdx___wordCount___sentences',
  ChildContentfulWebinarDescriptionTextNodeChildMdxWordCountWords = 'childContentfulWebinarDescriptionTextNode___childMdx___wordCount___words',
  ChildContentfulWebinarDescriptionTextNodeChildMdxId = 'childContentfulWebinarDescriptionTextNode___childMdx___id',
  ChildContentfulWebinarDescriptionTextNodeChildMdxParentId = 'childContentfulWebinarDescriptionTextNode___childMdx___parent___id',
  ChildContentfulWebinarDescriptionTextNodeChildMdxParentChildren = 'childContentfulWebinarDescriptionTextNode___childMdx___parent___children',
  ChildContentfulWebinarDescriptionTextNodeChildMdxChildren = 'childContentfulWebinarDescriptionTextNode___childMdx___children',
  ChildContentfulWebinarDescriptionTextNodeChildMdxChildrenId = 'childContentfulWebinarDescriptionTextNode___childMdx___children___id',
  ChildContentfulWebinarDescriptionTextNodeChildMdxChildrenChildren = 'childContentfulWebinarDescriptionTextNode___childMdx___children___children',
  ChildContentfulWebinarDescriptionTextNodeChildMdxInternalContent = 'childContentfulWebinarDescriptionTextNode___childMdx___internal___content',
  ChildContentfulWebinarDescriptionTextNodeChildMdxInternalContentDigest = 'childContentfulWebinarDescriptionTextNode___childMdx___internal___contentDigest',
  ChildContentfulWebinarDescriptionTextNodeChildMdxInternalDescription = 'childContentfulWebinarDescriptionTextNode___childMdx___internal___description',
  ChildContentfulWebinarDescriptionTextNodeChildMdxInternalFieldOwners = 'childContentfulWebinarDescriptionTextNode___childMdx___internal___fieldOwners',
  ChildContentfulWebinarDescriptionTextNodeChildMdxInternalIgnoreType = 'childContentfulWebinarDescriptionTextNode___childMdx___internal___ignoreType',
  ChildContentfulWebinarDescriptionTextNodeChildMdxInternalMediaType = 'childContentfulWebinarDescriptionTextNode___childMdx___internal___mediaType',
  ChildContentfulWebinarDescriptionTextNodeChildMdxInternalOwner = 'childContentfulWebinarDescriptionTextNode___childMdx___internal___owner',
  ChildContentfulWebinarDescriptionTextNodeChildMdxInternalType = 'childContentfulWebinarDescriptionTextNode___childMdx___internal___type',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ContentfulWebinarFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  youtube?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  category?: Maybe<StringQueryOperatorInput>;
  cover?: Maybe<ContentfulAssetFilterInput>;
  description?: Maybe<ContentfulWebinarDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulWebinarSysFilterInput>;
  childrenContentfulWebinarDescriptionTextNode?: Maybe<ContentfulWebinarDescriptionTextNodeFilterListInput>;
  childContentfulWebinarDescriptionTextNode?: Maybe<ContentfulWebinarDescriptionTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulWebinarGroupConnection = {
  __typename?: 'ContentfulWebinarGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ContentfulWebinarEdge>;
  nodes: Array<ContentfulWebinar>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulWebinarSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulWebinarFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulWebinarSys = {
  __typename?: 'ContentfulWebinarSys';
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulWebinarSysContentType>;
};

export type ContentfulWebinarSysContentType = {
  __typename?: 'ContentfulWebinarSysContentType';
  sys?: Maybe<ContentfulWebinarSysContentTypeSys>;
};

export type ContentfulWebinarSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulWebinarSysContentTypeSysFilterInput>;
};

export type ContentfulWebinarSysContentTypeSys = {
  __typename?: 'ContentfulWebinarSysContentTypeSys';
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulWebinarSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulWebinarSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulWebinarSysContentTypeFilterInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  url?: Maybe<Scalars['String']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Url = 'url',
  PublicUrl = 'publicURL',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpResolutionsBase64 = 'childrenImageSharp___resolutions___base64',
  ChildrenImageSharpResolutionsTracedSvg = 'childrenImageSharp___resolutions___tracedSVG',
  ChildrenImageSharpResolutionsAspectRatio = 'childrenImageSharp___resolutions___aspectRatio',
  ChildrenImageSharpResolutionsWidth = 'childrenImageSharp___resolutions___width',
  ChildrenImageSharpResolutionsHeight = 'childrenImageSharp___resolutions___height',
  ChildrenImageSharpResolutionsSrc = 'childrenImageSharp___resolutions___src',
  ChildrenImageSharpResolutionsSrcSet = 'childrenImageSharp___resolutions___srcSet',
  ChildrenImageSharpResolutionsSrcWebp = 'childrenImageSharp___resolutions___srcWebp',
  ChildrenImageSharpResolutionsSrcSetWebp = 'childrenImageSharp___resolutions___srcSetWebp',
  ChildrenImageSharpResolutionsOriginalName = 'childrenImageSharp___resolutions___originalName',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpSizesBase64 = 'childrenImageSharp___sizes___base64',
  ChildrenImageSharpSizesTracedSvg = 'childrenImageSharp___sizes___tracedSVG',
  ChildrenImageSharpSizesAspectRatio = 'childrenImageSharp___sizes___aspectRatio',
  ChildrenImageSharpSizesSrc = 'childrenImageSharp___sizes___src',
  ChildrenImageSharpSizesSrcSet = 'childrenImageSharp___sizes___srcSet',
  ChildrenImageSharpSizesSrcWebp = 'childrenImageSharp___sizes___srcWebp',
  ChildrenImageSharpSizesSrcSetWebp = 'childrenImageSharp___sizes___srcSetWebp',
  ChildrenImageSharpSizesSizes = 'childrenImageSharp___sizes___sizes',
  ChildrenImageSharpSizesOriginalImg = 'childrenImageSharp___sizes___originalImg',
  ChildrenImageSharpSizesOriginalName = 'childrenImageSharp___sizes___originalName',
  ChildrenImageSharpSizesPresentationWidth = 'childrenImageSharp___sizes___presentationWidth',
  ChildrenImageSharpSizesPresentationHeight = 'childrenImageSharp___sizes___presentationHeight',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpResolutionsBase64 = 'childImageSharp___resolutions___base64',
  ChildImageSharpResolutionsTracedSvg = 'childImageSharp___resolutions___tracedSVG',
  ChildImageSharpResolutionsAspectRatio = 'childImageSharp___resolutions___aspectRatio',
  ChildImageSharpResolutionsWidth = 'childImageSharp___resolutions___width',
  ChildImageSharpResolutionsHeight = 'childImageSharp___resolutions___height',
  ChildImageSharpResolutionsSrc = 'childImageSharp___resolutions___src',
  ChildImageSharpResolutionsSrcSet = 'childImageSharp___resolutions___srcSet',
  ChildImageSharpResolutionsSrcWebp = 'childImageSharp___resolutions___srcWebp',
  ChildImageSharpResolutionsSrcSetWebp = 'childImageSharp___resolutions___srcSetWebp',
  ChildImageSharpResolutionsOriginalName = 'childImageSharp___resolutions___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpSizesBase64 = 'childImageSharp___sizes___base64',
  ChildImageSharpSizesTracedSvg = 'childImageSharp___sizes___tracedSVG',
  ChildImageSharpSizesAspectRatio = 'childImageSharp___sizes___aspectRatio',
  ChildImageSharpSizesSrc = 'childImageSharp___sizes___src',
  ChildImageSharpSizesSrcSet = 'childImageSharp___sizes___srcSet',
  ChildImageSharpSizesSrcWebp = 'childImageSharp___sizes___srcWebp',
  ChildImageSharpSizesSrcSetWebp = 'childImageSharp___sizes___srcSetWebp',
  ChildImageSharpSizesSizes = 'childImageSharp___sizes___sizes',
  ChildImageSharpSizesOriginalImg = 'childImageSharp___sizes___originalImg',
  ChildImageSharpSizesOriginalName = 'childImageSharp___sizes___originalName',
  ChildImageSharpSizesPresentationWidth = 'childImageSharp___sizes___presentationWidth',
  ChildImageSharpSizesPresentationHeight = 'childImageSharp___sizes___presentationHeight',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum HeadingsMdx {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Auto = 'AUTO',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
  Avif = 'AVIF'
}

export enum ImageLayout {
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
  Constrained = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED',
  None = 'NONE'
}

export enum ImageResizingBehavior {
  NoChange = 'NO_CHANGE',
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  Pad = 'PAD',
  /** Crop a part of the original image to match the specified size. */
  Crop = 'CROP',
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  Fill = 'FILL',
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  Thumb = 'THUMB',
  /** Scale the image regardless of the original aspect ratio. */
  Scale = 'SCALE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  background?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  ResolutionsBase64 = 'resolutions___base64',
  ResolutionsTracedSvg = 'resolutions___tracedSVG',
  ResolutionsAspectRatio = 'resolutions___aspectRatio',
  ResolutionsWidth = 'resolutions___width',
  ResolutionsHeight = 'resolutions___height',
  ResolutionsSrc = 'resolutions___src',
  ResolutionsSrcSet = 'resolutions___srcSet',
  ResolutionsSrcWebp = 'resolutions___srcWebp',
  ResolutionsSrcSetWebp = 'resolutions___srcSetWebp',
  ResolutionsOriginalName = 'resolutions___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  SizesBase64 = 'sizes___base64',
  SizesTracedSvg = 'sizes___tracedSVG',
  SizesAspectRatio = 'sizes___aspectRatio',
  SizesSrc = 'sizes___src',
  SizesSrcSet = 'sizes___srcSet',
  SizesSrcWebp = 'sizes___srcWebp',
  SizesSrcSetWebp = 'sizes___srcSetWebp',
  SizesSizes = 'sizes___sizes',
  SizesOriginalImg = 'sizes___originalImg',
  SizesOriginalName = 'sizes___originalName',
  SizesPresentationWidth = 'sizes___presentationWidth',
  SizesPresentationHeight = 'sizes___presentationHeight',
  GatsbyImageData = 'gatsbyImageData',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  __typename?: 'ImageSharpResolutions';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  __typename?: 'ImageSharpSizes';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export type Mdx = Node & {
  __typename?: 'Mdx';
  rawBody: Scalars['String'];
  fileAbsolutePath: Scalars['String'];
  frontmatter?: Maybe<MdxFrontmatter>;
  slug?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  excerpt: Scalars['String'];
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>;
  html?: Maybe<Scalars['String']>;
  mdxAST?: Maybe<Scalars['JSON']>;
  tableOfContents?: Maybe<Scalars['JSON']>;
  timeToRead?: Maybe<Scalars['Int']>;
  wordCount?: Maybe<MdxWordCount>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MdxExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>;
};


export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>;
};

export type MdxConnection = {
  __typename?: 'MdxConnection';
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<MdxGroupConnection>;
};


export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum;
};


export type MdxConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MdxFieldsEnum;
};

export type MdxEdge = {
  __typename?: 'MdxEdge';
  next?: Maybe<Mdx>;
  node: Mdx;
  previous?: Maybe<Mdx>;
};

export enum MdxFieldsEnum {
  RawBody = 'rawBody',
  FileAbsolutePath = 'fileAbsolutePath',
  FrontmatterTitle = 'frontmatter___title',
  Slug = 'slug',
  Body = 'body',
  Excerpt = 'excerpt',
  Headings = 'headings',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  Html = 'html',
  MdxAst = 'mdxAST',
  TableOfContents = 'tableOfContents',
  TimeToRead = 'timeToRead',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>;
};

export type MdxFrontmatter = {
  __typename?: 'MdxFrontmatter';
  title: Scalars['String'];
};

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
};

export type MdxGroupConnection = {
  __typename?: 'MdxGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MdxEdge>;
  nodes: Array<Mdx>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MdxHeadingMdx = {
  __typename?: 'MdxHeadingMdx';
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>;
};

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MdxWordCount = {
  __typename?: 'MdxWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query';
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulPage?: Maybe<ContentfulPage>;
  allContentfulPage: ContentfulPageConnection;
  contentfulWebinar?: Maybe<ContentfulWebinar>;
  allContentfulWebinar: ContentfulWebinarConnection;
  contentfulGlossary?: Maybe<ContentfulGlossary>;
  allContentfulGlossary: ContentfulGlossaryConnection;
  contentfulBanner?: Maybe<ContentfulBanner>;
  allContentfulBanner: ContentfulBannerConnection;
  contentfulCompany?: Maybe<ContentfulCompany>;
  allContentfulCompany: ContentfulCompanyConnection;
  contentfulCustomerStory?: Maybe<ContentfulCustomerStory>;
  allContentfulCustomerStory: ContentfulCustomerStoryConnection;
  contentfulFeature?: Maybe<ContentfulFeature>;
  allContentfulFeature: ContentfulFeatureConnection;
  contentfulFeaturePage?: Maybe<ContentfulFeaturePage>;
  allContentfulFeaturePage: ContentfulFeaturePageConnection;
  contentfulExternalLogos?: Maybe<ContentfulExternalLogos>;
  allContentfulExternalLogos: ContentfulExternalLogosConnection;
  contentfulFrontPage?: Maybe<ContentfulFrontPage>;
  allContentfulFrontPage: ContentfulFrontPageConnection;
  contentfulSellingProposition?: Maybe<ContentfulSellingProposition>;
  allContentfulSellingProposition: ContentfulSellingPropositionConnection;
  contentfulProductUpdate?: Maybe<ContentfulProductUpdate>;
  allContentfulProductUpdate: ContentfulProductUpdateConnection;
  contentfulSignupPage?: Maybe<ContentfulSignupPage>;
  allContentfulSignupPage: ContentfulSignupPageConnection;
  contentfulQuote?: Maybe<ContentfulQuote>;
  allContentfulQuote: ContentfulQuoteConnection;
  contentfulCallToAction?: Maybe<ContentfulCallToAction>;
  allContentfulCallToAction: ContentfulCallToActionConnection;
  mdx?: Maybe<Mdx>;
  allMdx: MdxConnection;
  contentfulProductUpdateContentTextNode?: Maybe<ContentfulProductUpdateContentTextNode>;
  allContentfulProductUpdateContentTextNode: ContentfulProductUpdateContentTextNodeConnection;
  contentfulCustomerStoryContentTextNode?: Maybe<ContentfulCustomerStoryContentTextNode>;
  allContentfulCustomerStoryContentTextNode: ContentfulCustomerStoryContentTextNodeConnection;
  contentfulCompanyMainQuoteTextNode?: Maybe<ContentfulCompanyMainQuoteTextNode>;
  allContentfulCompanyMainQuoteTextNode: ContentfulCompanyMainQuoteTextNodeConnection;
  contentfulBannerContentTextNode?: Maybe<ContentfulBannerContentTextNode>;
  allContentfulBannerContentTextNode: ContentfulBannerContentTextNodeConnection;
  contentfulGlossaryDescriptionTextNode?: Maybe<ContentfulGlossaryDescriptionTextNode>;
  allContentfulGlossaryDescriptionTextNode: ContentfulGlossaryDescriptionTextNodeConnection;
  contentfulWebinarDescriptionTextNode?: Maybe<ContentfulWebinarDescriptionTextNode>;
  allContentfulWebinarDescriptionTextNode: ContentfulWebinarDescriptionTextNodeConnection;
  contentfulPageContentTextNode?: Maybe<ContentfulPageContentTextNode>;
  allContentfulPageContentTextNode: ContentfulPageContentTextNodeConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>;
  sort?: Maybe<ContentfulEntrySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  proxy?: Maybe<SiteProxyFilterListInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  localFile?: Maybe<FileFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  cover?: Maybe<ContentfulAssetFilterInput>;
  content?: Maybe<ContentfulPageContentTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPageSysFilterInput>;
  date?: Maybe<DateQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  childrenContentfulPageContentTextNode?: Maybe<ContentfulPageContentTextNodeFilterListInput>;
  childContentfulPageContentTextNode?: Maybe<ContentfulPageContentTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulPageArgs = {
  filter?: Maybe<ContentfulPageFilterInput>;
  sort?: Maybe<ContentfulPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulWebinarArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  youtube?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  category?: Maybe<StringQueryOperatorInput>;
  cover?: Maybe<ContentfulAssetFilterInput>;
  description?: Maybe<ContentfulWebinarDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulWebinarSysFilterInput>;
  childrenContentfulWebinarDescriptionTextNode?: Maybe<ContentfulWebinarDescriptionTextNodeFilterListInput>;
  childContentfulWebinarDescriptionTextNode?: Maybe<ContentfulWebinarDescriptionTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulWebinarArgs = {
  filter?: Maybe<ContentfulWebinarFilterInput>;
  sort?: Maybe<ContentfulWebinarSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulGlossaryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<ContentfulGlossaryDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulGlossarySysFilterInput>;
  childrenContentfulGlossaryDescriptionTextNode?: Maybe<ContentfulGlossaryDescriptionTextNodeFilterListInput>;
  childContentfulGlossaryDescriptionTextNode?: Maybe<ContentfulGlossaryDescriptionTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulGlossaryArgs = {
  filter?: Maybe<ContentfulGlossaryFilterInput>;
  sort?: Maybe<ContentfulGlossarySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBannerArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  hideOnPage?: Maybe<StringQueryOperatorInput>;
  startAt?: Maybe<DateQueryOperatorInput>;
  endAt?: Maybe<DateQueryOperatorInput>;
  content?: Maybe<ContentfulBannerContentTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulBannerSysFilterInput>;
  childrenContentfulBannerContentTextNode?: Maybe<ContentfulBannerContentTextNodeFilterListInput>;
  childContentfulBannerContentTextNode?: Maybe<ContentfulBannerContentTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulBannerArgs = {
  filter?: Maybe<ContentfulBannerFilterInput>;
  sort?: Maybe<ContentfulBannerSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCompanyArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  contactName?: Maybe<StringQueryOperatorInput>;
  contactTitle?: Maybe<StringQueryOperatorInput>;
  funding?: Maybe<StringQueryOperatorInput>;
  yearFounded?: Maybe<DateQueryOperatorInput>;
  employeeCount?: Maybe<StringQueryOperatorInput>;
  sector?: Maybe<StringQueryOperatorInput>;
  location?: Maybe<StringQueryOperatorInput>;
  stage?: Maybe<StringQueryOperatorInput>;
  logo?: Maybe<ContentfulAssetFilterInput>;
  customer_story?: Maybe<ContentfulCustomerStoryFilterListInput>;
  mainQuote?: Maybe<ContentfulCompanyMainQuoteTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCompanySysFilterInput>;
  cover?: Maybe<ContentfulAssetFilterInput>;
  childrenContentfulCompanyMainQuoteTextNode?: Maybe<ContentfulCompanyMainQuoteTextNodeFilterListInput>;
  childContentfulCompanyMainQuoteTextNode?: Maybe<ContentfulCompanyMainQuoteTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulCompanyArgs = {
  filter?: Maybe<ContentfulCompanyFilterInput>;
  sort?: Maybe<ContentfulCompanySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCustomerStoryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  subtitle?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  language?: Maybe<StringQueryOperatorInput>;
  company?: Maybe<ContentfulCompanyFilterInput>;
  content?: Maybe<ContentfulCustomerStoryContentTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCustomerStorySysFilterInput>;
  childrenContentfulCustomerStoryContentTextNode?: Maybe<ContentfulCustomerStoryContentTextNodeFilterListInput>;
  childContentfulCustomerStoryContentTextNode?: Maybe<ContentfulCustomerStoryContentTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulCustomerStoryArgs = {
  filter?: Maybe<ContentfulCustomerStoryFilterInput>;
  sort?: Maybe<ContentfulCustomerStorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulFeatureArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  feature_page?: Maybe<ContentfulFeaturePageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulFeatureSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulFeatureArgs = {
  filter?: Maybe<ContentfulFeatureFilterInput>;
  sort?: Maybe<ContentfulFeatureSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulFeaturePageArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  startOnRight?: Maybe<BooleanQueryOperatorInput>;
  features?: Maybe<ContentfulFeatureFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulFeaturePageSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulFeaturePageArgs = {
  filter?: Maybe<ContentfulFeaturePageFilterInput>;
  sort?: Maybe<ContentfulFeaturePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulExternalLogosArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  logos?: Maybe<ContentfulAssetFilterListInput>;
  signup_page?: Maybe<ContentfulSignupPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulExternalLogosSysFilterInput>;
  front_page?: Maybe<ContentfulFrontPageFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulExternalLogosArgs = {
  filter?: Maybe<ContentfulExternalLogosFilterInput>;
  sort?: Maybe<ContentfulExternalLogosSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulFrontPageArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  mainHeader?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  bannerImage?: Maybe<ContentfulAssetFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulFrontPageSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulFrontPageArgs = {
  filter?: Maybe<ContentfulFrontPageFilterInput>;
  sort?: Maybe<ContentfulFrontPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSellingPropositionArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  link?: Maybe<StringQueryOperatorInput>;
  linkTo?: Maybe<StringQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  front_page?: Maybe<ContentfulFrontPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSellingPropositionSysFilterInput>;
  signup_page?: Maybe<ContentfulSignupPageFilterListInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulSellingPropositionArgs = {
  filter?: Maybe<ContentfulSellingPropositionFilterInput>;
  sort?: Maybe<ContentfulSellingPropositionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulProductUpdateArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFilterInput>;
  content?: Maybe<ContentfulProductUpdateContentTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulProductUpdateSysFilterInput>;
  childrenContentfulProductUpdateContentTextNode?: Maybe<ContentfulProductUpdateContentTextNodeFilterListInput>;
  childContentfulProductUpdateContentTextNode?: Maybe<ContentfulProductUpdateContentTextNodeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulProductUpdateArgs = {
  filter?: Maybe<ContentfulProductUpdateFilterInput>;
  sort?: Maybe<ContentfulProductUpdateSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulSignupPageArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  formTitle?: Maybe<StringQueryOperatorInput>;
  formButtonText?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulSignupPageSysFilterInput>;
  type?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulSignupPageArgs = {
  filter?: Maybe<ContentfulSignupPageFilterInput>;
  sort?: Maybe<ContentfulSignupPageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulQuoteArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  quote?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  signup_page?: Maybe<ContentfulSignupPageFilterListInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulQuoteSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulQuoteArgs = {
  filter?: Maybe<ContentfulQuoteFilterInput>;
  sort?: Maybe<ContentfulQuoteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCallToActionArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulCallToActionSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulCallToActionArgs = {
  filter?: Maybe<ContentfulCallToActionFilterInput>;
  sort?: Maybe<ContentfulCallToActionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MdxFrontmatterFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  body?: Maybe<StringQueryOperatorInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  headings?: Maybe<MdxHeadingMdxFilterListInput>;
  html?: Maybe<StringQueryOperatorInput>;
  mdxAST?: Maybe<JsonQueryOperatorInput>;
  tableOfContents?: Maybe<JsonQueryOperatorInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  wordCount?: Maybe<MdxWordCountFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>;
  sort?: Maybe<MdxSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulProductUpdateContentTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulProductUpdateContentTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulProductUpdateContentTextNodeArgs = {
  filter?: Maybe<ContentfulProductUpdateContentTextNodeFilterInput>;
  sort?: Maybe<ContentfulProductUpdateContentTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCustomerStoryContentTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulCustomerStoryContentTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulCustomerStoryContentTextNodeArgs = {
  filter?: Maybe<ContentfulCustomerStoryContentTextNodeFilterInput>;
  sort?: Maybe<ContentfulCustomerStoryContentTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulCompanyMainQuoteTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  mainQuote?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulCompanyMainQuoteTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulCompanyMainQuoteTextNodeArgs = {
  filter?: Maybe<ContentfulCompanyMainQuoteTextNodeFilterInput>;
  sort?: Maybe<ContentfulCompanyMainQuoteTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulBannerContentTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulBannerContentTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulBannerContentTextNodeArgs = {
  filter?: Maybe<ContentfulBannerContentTextNodeFilterInput>;
  sort?: Maybe<ContentfulBannerContentTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulGlossaryDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulGlossaryDescriptionTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulGlossaryDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulGlossaryDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulGlossaryDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulWebinarDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulWebinarDescriptionTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulWebinarDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulWebinarDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulWebinarDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPageContentTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  content?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulPageContentTextNodeSysFilterInput>;
  childrenMdx?: Maybe<MdxFilterListInput>;
  childMdx?: Maybe<MdxFilterInput>;
};


export type QueryAllContentfulPageContentTextNodeArgs = {
  filter?: Maybe<ContentfulPageContentTextNodeFilterInput>;
  sort?: Maybe<ContentfulPageContentTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  proxy?: Maybe<Array<Maybe<SiteProxy>>>;
  flags?: Maybe<SiteFlags>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataSiteUrl = 'siteMetadata___siteUrl',
  SiteMetadataBranch = 'siteMetadata___branch',
  SiteMetadataSegmentDestinations = 'siteMetadata___segmentDestinations',
  Port = 'port',
  Host = 'host',
  Proxy = 'proxy',
  ProxyPrefix = 'proxy___prefix',
  ProxyUrl = 'proxy___url',
  FlagsFastRefresh = 'flags___FAST_REFRESH',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  proxy?: Maybe<SiteProxyFilterListInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFlags = {
  __typename?: 'SiteFlags';
  FAST_REFRESH?: Maybe<Scalars['Boolean']>;
};

export type SiteFlagsFilterInput = {
  FAST_REFRESH?: Maybe<BooleanQueryOperatorInput>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  id?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  lang?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  ContextId = 'context___id',
  ContextLang = 'context___lang',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsOutput = 'pluginCreator___pluginOptions___output',
  PluginCreatorPluginOptionsCreateLinkInHead = 'pluginCreator___pluginOptions___createLinkInHead',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsSpaceId = 'pluginCreator___pluginOptions___spaceId',
  PluginCreatorPluginOptionsAccessToken = 'pluginCreator___pluginOptions___accessToken',
  PluginCreatorPluginOptionsHost = 'pluginCreator___pluginOptions___host',
  PluginCreatorPluginOptionsDownloadLocal = 'pluginCreator___pluginOptions___downloadLocal',
  PluginCreatorPluginOptionsEnvironment = 'pluginCreator___pluginOptions___environment',
  PluginCreatorPluginOptionsForceFullSync = 'pluginCreator___pluginOptions___forceFullSync',
  PluginCreatorPluginOptionsPageLimit = 'pluginCreator___pluginOptions___pageLimit',
  PluginCreatorPluginOptionsAssetDownloadWorkers = 'pluginCreator___pluginOptions___assetDownloadWorkers',
  PluginCreatorPluginOptionsUseNameForId = 'pluginCreator___pluginOptions___useNameForId',
  PluginCreatorPluginOptionsGatsbyRemarkPlugins = 'pluginCreator___pluginOptions___gatsbyRemarkPlugins',
  PluginCreatorPluginOptionsExtensions = 'pluginCreator___pluginOptions___extensions',
  PluginCreatorPluginOptionsLessBabel = 'pluginCreator___pluginOptions___lessBabel',
  PluginCreatorPluginOptionsMediaTypes = 'pluginCreator___pluginOptions___mediaTypes',
  PluginCreatorPluginOptionsRoot = 'pluginCreator___pluginOptions___root',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcons = 'pluginCreator___pluginOptions___icons',
  PluginCreatorPluginOptionsIconsSrc = 'pluginCreator___pluginOptions___icons___src',
  PluginCreatorPluginOptionsIconsSizes = 'pluginCreator___pluginOptions___icons___sizes',
  PluginCreatorPluginOptionsIconsType = 'pluginCreator___pluginOptions___icons___type',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsHeadersX = 'pluginCreator___pluginOptions___headers____x',
  PluginCreatorPluginOptionsCachePublic = 'pluginCreator___pluginOptions___cachePublic',
  PluginCreatorPluginOptionsWorkboxConfigRuntimeCaching = 'pluginCreator___pluginOptions___workboxConfig___runtimeCaching',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId',
  ComponentPath = 'componentPath'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsOutput = 'pluginOptions___output',
  PluginOptionsCreateLinkInHead = 'pluginOptions___createLinkInHead',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsSpaceId = 'pluginOptions___spaceId',
  PluginOptionsAccessToken = 'pluginOptions___accessToken',
  PluginOptionsHost = 'pluginOptions___host',
  PluginOptionsDownloadLocal = 'pluginOptions___downloadLocal',
  PluginOptionsEnvironment = 'pluginOptions___environment',
  PluginOptionsForceFullSync = 'pluginOptions___forceFullSync',
  PluginOptionsPageLimit = 'pluginOptions___pageLimit',
  PluginOptionsAssetDownloadWorkers = 'pluginOptions___assetDownloadWorkers',
  PluginOptionsUseNameForId = 'pluginOptions___useNameForId',
  PluginOptionsGatsbyRemarkPlugins = 'pluginOptions___gatsbyRemarkPlugins',
  PluginOptionsExtensions = 'pluginOptions___extensions',
  PluginOptionsLessBabel = 'pluginOptions___lessBabel',
  PluginOptionsMediaTypes = 'pluginOptions___mediaTypes',
  PluginOptionsRoot = 'pluginOptions___root',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcons = 'pluginOptions___icons',
  PluginOptionsIconsSrc = 'pluginOptions___icons___src',
  PluginOptionsIconsSizes = 'pluginOptions___icons___sizes',
  PluginOptionsIconsType = 'pluginOptions___icons___type',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsHeadersX = 'pluginOptions___headers____x',
  PluginOptionsCachePublic = 'pluginOptions___cachePublic',
  PluginOptionsWorkboxConfigRuntimeCaching = 'pluginOptions___workboxConfig___runtimeCaching',
  PluginOptionsWorkboxConfigRuntimeCachingHandler = 'pluginOptions___workboxConfig___runtimeCaching___handler',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  environment?: Maybe<Scalars['String']>;
  forceFullSync?: Maybe<Scalars['Boolean']>;
  pageLimit?: Maybe<Scalars['Int']>;
  assetDownloadWorkers?: Maybe<Scalars['Int']>;
  useNameForId?: Maybe<Scalars['Boolean']>;
  gatsbyRemarkPlugins?: Maybe<Array<Maybe<Scalars['String']>>>;
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>;
  lessBabel?: Maybe<Scalars['Boolean']>;
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  root?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icons?: Maybe<Array<Maybe<SitePluginPluginOptionsIcons>>>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  headers?: Maybe<SitePluginPluginOptionsHeaders>;
  cachePublic?: Maybe<Scalars['Boolean']>;
  workboxConfig?: Maybe<SitePluginPluginOptionsWorkboxConfig>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFilterInput = {
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  forceFullSync?: Maybe<BooleanQueryOperatorInput>;
  pageLimit?: Maybe<IntQueryOperatorInput>;
  assetDownloadWorkers?: Maybe<IntQueryOperatorInput>;
  useNameForId?: Maybe<BooleanQueryOperatorInput>;
  gatsbyRemarkPlugins?: Maybe<StringQueryOperatorInput>;
  extensions?: Maybe<StringQueryOperatorInput>;
  lessBabel?: Maybe<BooleanQueryOperatorInput>;
  mediaTypes?: Maybe<StringQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icons?: Maybe<SitePluginPluginOptionsIconsFilterListInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  headers?: Maybe<SitePluginPluginOptionsHeadersFilterInput>;
  cachePublic?: Maybe<BooleanQueryOperatorInput>;
  workboxConfig?: Maybe<SitePluginPluginOptionsWorkboxConfigFilterInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsHeaders = {
  __typename?: 'SitePluginPluginOptionsHeaders';
  _x?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPluginOptionsHeadersFilterInput = {
  _x?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIcons = {
  __typename?: 'SitePluginPluginOptionsIcons';
  src?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsIconsFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsIconsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsIconsFilterInput>;
};

export type SitePluginPluginOptionsWorkboxConfig = {
  __typename?: 'SitePluginPluginOptionsWorkboxConfig';
  runtimeCaching?: Maybe<Array<Maybe<SitePluginPluginOptionsWorkboxConfigRuntimeCaching>>>;
};

export type SitePluginPluginOptionsWorkboxConfigFilterInput = {
  runtimeCaching?: Maybe<SitePluginPluginOptionsWorkboxConfigRuntimeCachingFilterListInput>;
};

export type SitePluginPluginOptionsWorkboxConfigRuntimeCaching = {
  __typename?: 'SitePluginPluginOptionsWorkboxConfigRuntimeCaching';
  handler?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsWorkboxConfigRuntimeCachingFilterInput = {
  handler?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsWorkboxConfigRuntimeCachingFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsWorkboxConfigRuntimeCachingFilterInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteProxy = {
  __typename?: 'SiteProxy';
  prefix?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SiteProxyFilterInput = {
  prefix?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
};

export type SiteProxyFilterListInput = {
  elemMatch?: Maybe<SiteProxyFilterInput>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  branch?: Maybe<Scalars['String']>;
  segmentDestinations?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  branch?: Maybe<StringQueryOperatorInput>;
  segmentDestinations?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};
