export type Bool = $BoolFalse | $BoolTrue;
export type True = $True;
export type Error = $Error;
export type Null = $Null;
export type InputPeer = $InputPeerEmpty | $InputPeerSelf | $InputPeerChat | $InputPeerUser | $InputPeerChannel | $InputPeerUserFromMessage | $InputPeerChannelFromMessage;
export type InputUser = $InputUserEmpty | $InputUserSelf | $InputUser | $InputUserFromMessage;
export type InputContact = $InputPhoneContact;
export type InputFile = $InputFile | $InputFileBig;
export type InputMedia = $InputMediaEmpty | $InputMediaUploadedPhoto | $InputMediaPhoto | $InputMediaGeoPoint | $InputMediaContact | $InputMediaUploadedDocument | $InputMediaDocument | $InputMediaVenue | $InputMediaPhotoExternal | $InputMediaDocumentExternal | $InputMediaGame | $InputMediaInvoice | $InputMediaGeoLive | $InputMediaPoll | $InputMediaDice;
export type InputChatPhoto = $InputChatPhotoEmpty | $InputChatUploadedPhoto | $InputChatPhoto;
export type InputGeoPoint = $InputGeoPointEmpty | $InputGeoPoint;
export type InputPhoto = $InputPhotoEmpty | $InputPhoto;
export type InputFileLocation = $InputFileLocation | $InputEncryptedFileLocation | $InputDocumentFileLocation | $InputSecureFileLocation | $InputTakeoutFileLocation | $InputPhotoFileLocation | $InputPhotoLegacyFileLocation | $InputPeerPhotoFileLocation | $InputStickerSetThumb | $InputGroupCallStream;
export type Peer = $PeerUser | $PeerChat | $PeerChannel;
export type Storage$FileType = $Storage$FileUnknown | $Storage$FilePartial | $Storage$FileJpeg | $Storage$FileGif | $Storage$FilePng | $Storage$FilePdf | $Storage$FileMp3 | $Storage$FileMov | $Storage$FileMp4 | $Storage$FileWebp;
export type User = $UserEmpty | $User;
export type UserProfilePhoto = $UserProfilePhotoEmpty | $UserProfilePhoto;
export type UserStatus = $UserStatusEmpty | $UserStatusOnline | $UserStatusOffline | $UserStatusRecently | $UserStatusLastWeek | $UserStatusLastMonth;
export type Chat = $ChatEmpty | $Chat | $ChatForbidden | $Channel | $ChannelForbidden;
export type ChatFull = $ChatFull | $ChannelFull;
export type ChatParticipant = $ChatParticipant | $ChatParticipantCreator | $ChatParticipantAdmin;
export type ChatParticipants = $ChatParticipantsForbidden | $ChatParticipants;
export type ChatPhoto = $ChatPhotoEmpty | $ChatPhoto;
export type Message = $MessageEmpty | $Message | $MessageService;
export type MessageMedia = $MessageMediaEmpty | $MessageMediaPhoto | $MessageMediaGeo | $MessageMediaContact | $MessageMediaUnsupported | $MessageMediaDocument | $MessageMediaWebPage | $MessageMediaVenue | $MessageMediaGame | $MessageMediaInvoice | $MessageMediaGeoLive | $MessageMediaPoll | $MessageMediaDice;
export type MessageAction = $MessageActionEmpty | $MessageActionChatCreate | $MessageActionChatEditTitle | $MessageActionChatEditPhoto | $MessageActionChatDeletePhoto | $MessageActionChatAddUser | $MessageActionChatDeleteUser | $MessageActionChatJoinedByLink | $MessageActionChannelCreate | $MessageActionChatMigrateTo | $MessageActionChannelMigrateFrom | $MessageActionPinMessage | $MessageActionHistoryClear | $MessageActionGameScore | $MessageActionPaymentSentMe | $MessageActionPaymentSent | $MessageActionPhoneCall | $MessageActionScreenshotTaken | $MessageActionCustomAction | $MessageActionBotAllowed | $MessageActionSecureValuesSentMe | $MessageActionSecureValuesSent | $MessageActionContactSignUp | $MessageActionGeoProximityReached | $MessageActionGroupCall | $MessageActionInviteToGroupCall | $MessageActionSetMessagesTTL | $MessageActionGroupCallScheduled | $MessageActionSetChatTheme | $MessageActionChatJoinedByRequest | $MessageActionWebViewDataSentMe | $MessageActionWebViewDataSent | $MessageActionGiftPremium | $MessageActionTopicCreate | $MessageActionTopicEdit | $MessageActionSuggestProfilePhoto | $MessageActionRequestedPeer | $MessageActionSetChatWallPaper | $MessageActionSetSameChatWallPaper;
export type Dialog = $Dialog | $DialogFolder;
export type Photo = $PhotoEmpty | $Photo;
export type PhotoSize = $PhotoSizeEmpty | $PhotoSize | $PhotoCachedSize | $PhotoStrippedSize | $PhotoSizeProgressive | $PhotoPathSize;
export type GeoPoint = $GeoPointEmpty | $GeoPoint;
export type Auth$SentCode = $Auth$SentCode | $Auth$SentCodeSuccess;
export type Auth$Authorization = $Auth$Authorization | $Auth$AuthorizationSignUpRequired;
export type Auth$ExportedAuthorization = $Auth$ExportedAuthorization;
export type InputNotifyPeer = $InputNotifyPeer | $InputNotifyUsers | $InputNotifyChats | $InputNotifyBroadcasts | $InputNotifyForumTopic;
export type InputPeerNotifySettings = $InputPeerNotifySettings;
export type PeerNotifySettings = $PeerNotifySettings;
export type PeerSettings = $PeerSettings;
export type WallPaper = $WallPaper | $WallPaperNoFile;
export type ReportReason = $InputReportReasonSpam | $InputReportReasonViolence | $InputReportReasonPornography | $InputReportReasonChildAbuse | $InputReportReasonOther | $InputReportReasonCopyright | $InputReportReasonGeoIrrelevant | $InputReportReasonFake | $InputReportReasonIllegalDrugs | $InputReportReasonPersonalDetails;
export type UserFull = $UserFull;
export type Contact = $Contact;
export type ImportedContact = $ImportedContact;
export type ContactStatus = $ContactStatus;
export type Contacts$Contacts = $Contacts$ContactsNotModified | $Contacts$Contacts;
export type Contacts$ImportedContacts = $Contacts$ImportedContacts;
export type Contacts$Blocked = $Contacts$Blocked | $Contacts$BlockedSlice;
export type Messages$Dialogs = $Messages$Dialogs | $Messages$DialogsSlice | $Messages$DialogsNotModified;
export type Messages$Messages = $Messages$Messages | $Messages$MessagesSlice | $Messages$ChannelMessages | $Messages$MessagesNotModified;
export type Messages$Chats = $Messages$Chats | $Messages$ChatsSlice;
export type Messages$ChatFull = $Messages$ChatFull;
export type Messages$AffectedHistory = $Messages$AffectedHistory;
export type MessagesFilter = $InputMessagesFilterEmpty | $InputMessagesFilterPhotos | $InputMessagesFilterVideo | $InputMessagesFilterPhotoVideo | $InputMessagesFilterDocument | $InputMessagesFilterUrl | $InputMessagesFilterGif | $InputMessagesFilterVoice | $InputMessagesFilterMusic | $InputMessagesFilterChatPhotos | $InputMessagesFilterPhoneCalls | $InputMessagesFilterRoundVoice | $InputMessagesFilterRoundVideo | $InputMessagesFilterMyMentions | $InputMessagesFilterGeo | $InputMessagesFilterContacts | $InputMessagesFilterPinned;
export type Update = $UpdateNewMessage | $UpdateMessageID | $UpdateDeleteMessages | $UpdateUserTyping | $UpdateChatUserTyping | $UpdateChatParticipants | $UpdateUserStatus | $UpdateUserName | $UpdateNewEncryptedMessage | $UpdateEncryptedChatTyping | $UpdateEncryption | $UpdateEncryptedMessagesRead | $UpdateChatParticipantAdd | $UpdateChatParticipantDelete | $UpdateDcOptions | $UpdateNotifySettings | $UpdateServiceNotification | $UpdatePrivacy | $UpdateUserPhone | $UpdateReadHistoryInbox | $UpdateReadHistoryOutbox | $UpdateWebPage | $UpdateReadMessagesContents | $UpdateChannelTooLong | $UpdateChannel | $UpdateNewChannelMessage | $UpdateReadChannelInbox | $UpdateDeleteChannelMessages | $UpdateChannelMessageViews | $UpdateChatParticipantAdmin | $UpdateNewStickerSet | $UpdateStickerSetsOrder | $UpdateStickerSets | $UpdateSavedGifs | $UpdateBotInlineQuery | $UpdateBotInlineSend | $UpdateEditChannelMessage | $UpdateBotCallbackQuery | $UpdateEditMessage | $UpdateInlineBotCallbackQuery | $UpdateReadChannelOutbox | $UpdateDraftMessage | $UpdateReadFeaturedStickers | $UpdateRecentStickers | $UpdateConfig | $UpdatePtsChanged | $UpdateChannelWebPage | $UpdateDialogPinned | $UpdatePinnedDialogs | $UpdateBotWebhookJSON | $UpdateBotWebhookJSONQuery | $UpdateBotShippingQuery | $UpdateBotPrecheckoutQuery | $UpdatePhoneCall | $UpdateLangPackTooLong | $UpdateLangPack | $UpdateFavedStickers | $UpdateChannelReadMessagesContents | $UpdateContactsReset | $UpdateChannelAvailableMessages | $UpdateDialogUnreadMark | $UpdateMessagePoll | $UpdateChatDefaultBannedRights | $UpdateFolderPeers | $UpdatePeerSettings | $UpdatePeerLocated | $UpdateNewScheduledMessage | $UpdateDeleteScheduledMessages | $UpdateTheme | $UpdateGeoLiveViewed | $UpdateLoginToken | $UpdateMessagePollVote | $UpdateDialogFilter | $UpdateDialogFilterOrder | $UpdateDialogFilters | $UpdatePhoneCallSignalingData | $UpdateChannelMessageForwards | $UpdateReadChannelDiscussionInbox | $UpdateReadChannelDiscussionOutbox | $UpdatePeerBlocked | $UpdateChannelUserTyping | $UpdatePinnedMessages | $UpdatePinnedChannelMessages | $UpdateChat | $UpdateGroupCallParticipants | $UpdateGroupCall | $UpdatePeerHistoryTTL | $UpdateChatParticipant | $UpdateChannelParticipant | $UpdateBotStopped | $UpdateGroupCallConnection | $UpdateBotCommands | $UpdatePendingJoinRequests | $UpdateBotChatInviteRequester | $UpdateMessageReactions | $UpdateAttachMenuBots | $UpdateWebViewResultSent | $UpdateBotMenuButton | $UpdateSavedRingtones | $UpdateTranscribedAudio | $UpdateReadFeaturedEmojiStickers | $UpdateUserEmojiStatus | $UpdateRecentEmojiStatuses | $UpdateRecentReactions | $UpdateMoveStickerSetToTop | $UpdateMessageExtendedMedia | $UpdateChannelPinnedTopic | $UpdateChannelPinnedTopics | $UpdateUser | $UpdateAutoSaveSettings | $UpdateGroupInvitePrivacyForbidden;
export type Updates$State = $Updates$State;
export type Updates$Difference = $Updates$DifferenceEmpty | $Updates$Difference | $Updates$DifferenceSlice | $Updates$DifferenceTooLong;
export type Updates = $UpdatesTooLong | $UpdateShortMessage | $UpdateShortChatMessage | $UpdateShort | $UpdatesCombined | $Updates | $UpdateShortSentMessage;
export type Photos$Photos = $Photos$Photos | $Photos$PhotosSlice;
export type Photos$Photo = $Photos$Photo;
export type Upload$File = $Upload$File | $Upload$FileCdnRedirect;
export type DcOption = $DcOption;
export type Config = $Config;
export type NearestDc = $NearestDc;
export type Help$AppUpdate = $Help$AppUpdate | $Help$NoAppUpdate;
export type Help$InviteText = $Help$InviteText;
export type EncryptedChat = $EncryptedChatEmpty | $EncryptedChatWaiting | $EncryptedChatRequested | $EncryptedChat | $EncryptedChatDiscarded;
export type InputEncryptedChat = $InputEncryptedChat;
export type EncryptedFile = $EncryptedFileEmpty | $EncryptedFile;
export type InputEncryptedFile = $InputEncryptedFileEmpty | $InputEncryptedFileUploaded | $InputEncryptedFile | $InputEncryptedFileBigUploaded;
export type EncryptedMessage = $EncryptedMessage | $EncryptedMessageService;
export type Messages$DhConfig = $Messages$DhConfigNotModified | $Messages$DhConfig;
export type Messages$SentEncryptedMessage = $Messages$SentEncryptedMessage | $Messages$SentEncryptedFile;
export type InputDocument = $InputDocumentEmpty | $InputDocument;
export type Document = $DocumentEmpty | $Document;
export type Help$Support = $Help$Support;
export type NotifyPeer = $NotifyPeer | $NotifyUsers | $NotifyChats | $NotifyBroadcasts | $NotifyForumTopic;
export type SendMessageAction = $SendMessageTypingAction | $SendMessageCancelAction | $SendMessageRecordVideoAction | $SendMessageUploadVideoAction | $SendMessageRecordAudioAction | $SendMessageUploadAudioAction | $SendMessageUploadPhotoAction | $SendMessageUploadDocumentAction | $SendMessageGeoLocationAction | $SendMessageChooseContactAction | $SendMessageGamePlayAction | $SendMessageRecordRoundAction | $SendMessageUploadRoundAction | $SpeakingInGroupCallAction | $SendMessageHistoryImportAction | $SendMessageChooseStickerAction | $SendMessageEmojiInteraction | $SendMessageEmojiInteractionSeen;
export type Contacts$Found = $Contacts$Found;
export type InputPrivacyKey = $InputPrivacyKeyStatusTimestamp | $InputPrivacyKeyChatInvite | $InputPrivacyKeyPhoneCall | $InputPrivacyKeyPhoneP2P | $InputPrivacyKeyForwards | $InputPrivacyKeyProfilePhoto | $InputPrivacyKeyPhoneNumber | $InputPrivacyKeyAddedByPhone | $InputPrivacyKeyVoiceMessages;
export type PrivacyKey = $PrivacyKeyStatusTimestamp | $PrivacyKeyChatInvite | $PrivacyKeyPhoneCall | $PrivacyKeyPhoneP2P | $PrivacyKeyForwards | $PrivacyKeyProfilePhoto | $PrivacyKeyPhoneNumber | $PrivacyKeyAddedByPhone | $PrivacyKeyVoiceMessages;
export type InputPrivacyRule = $InputPrivacyValueAllowContacts | $InputPrivacyValueAllowAll | $InputPrivacyValueAllowUsers | $InputPrivacyValueDisallowContacts | $InputPrivacyValueDisallowAll | $InputPrivacyValueDisallowUsers | $InputPrivacyValueAllowChatParticipants | $InputPrivacyValueDisallowChatParticipants;
export type PrivacyRule = $PrivacyValueAllowContacts | $PrivacyValueAllowAll | $PrivacyValueAllowUsers | $PrivacyValueDisallowContacts | $PrivacyValueDisallowAll | $PrivacyValueDisallowUsers | $PrivacyValueAllowChatParticipants | $PrivacyValueDisallowChatParticipants;
export type Account$PrivacyRules = $Account$PrivacyRules;
export type AccountDaysTTL = $AccountDaysTTL;
export type DocumentAttribute = $DocumentAttributeImageSize | $DocumentAttributeAnimated | $DocumentAttributeSticker | $DocumentAttributeVideo | $DocumentAttributeAudio | $DocumentAttributeFilename | $DocumentAttributeHasStickers | $DocumentAttributeCustomEmoji;
export type Messages$Stickers = $Messages$StickersNotModified | $Messages$Stickers;
export type StickerPack = $StickerPack;
export type Messages$AllStickers = $Messages$AllStickersNotModified | $Messages$AllStickers;
export type Messages$AffectedMessages = $Messages$AffectedMessages;
export type WebPage = $WebPageEmpty | $WebPagePending | $WebPage | $WebPageNotModified;
export type Authorization = $Authorization;
export type Account$Authorizations = $Account$Authorizations;
export type Account$Password = $Account$Password;
export type Account$PasswordSettings = $Account$PasswordSettings;
export type Account$PasswordInputSettings = $Account$PasswordInputSettings;
export type Auth$PasswordRecovery = $Auth$PasswordRecovery;
export type ReceivedNotifyMessage = $ReceivedNotifyMessage;
export type ExportedChatInvite = $ChatInviteExported | $ChatInvitePublicJoinRequests;
export type ChatInvite = $ChatInviteAlready | $ChatInvite | $ChatInvitePeek;
export type InputStickerSet = $InputStickerSetEmpty | $InputStickerSetID | $InputStickerSetShortName | $InputStickerSetAnimatedEmoji | $InputStickerSetDice | $InputStickerSetAnimatedEmojiAnimations | $InputStickerSetPremiumGifts | $InputStickerSetEmojiGenericAnimations | $InputStickerSetEmojiDefaultStatuses | $InputStickerSetEmojiDefaultTopicIcons;
export type StickerSet = $StickerSet;
export type Messages$StickerSet = $Messages$StickerSet | $Messages$StickerSetNotModified;
export type BotCommand = $BotCommand;
export type BotInfo = $BotInfo;
export type KeyboardButton = $KeyboardButton | $KeyboardButtonUrl | $KeyboardButtonCallback | $KeyboardButtonRequestPhone | $KeyboardButtonRequestGeoLocation | $KeyboardButtonSwitchInline | $KeyboardButtonGame | $KeyboardButtonBuy | $KeyboardButtonUrlAuth | $InputKeyboardButtonUrlAuth | $KeyboardButtonRequestPoll | $InputKeyboardButtonUserProfile | $KeyboardButtonUserProfile | $KeyboardButtonWebView | $KeyboardButtonSimpleWebView | $KeyboardButtonRequestPeer;
export type KeyboardButtonRow = $KeyboardButtonRow;
export type ReplyMarkup = $ReplyKeyboardHide | $ReplyKeyboardForceReply | $ReplyKeyboardMarkup | $ReplyInlineMarkup;
export type MessageEntity = $MessageEntityUnknown | $MessageEntityMention | $MessageEntityHashtag | $MessageEntityBotCommand | $MessageEntityUrl | $MessageEntityEmail | $MessageEntityBold | $MessageEntityItalic | $MessageEntityCode | $MessageEntityPre | $MessageEntityTextUrl | $MessageEntityMentionName | $InputMessageEntityMentionName | $MessageEntityPhone | $MessageEntityCashtag | $MessageEntityUnderline | $MessageEntityStrike | $MessageEntityBlockquote | $MessageEntityBankCard | $MessageEntitySpoiler | $MessageEntityCustomEmoji;
export type InputChannel = $InputChannelEmpty | $InputChannel | $InputChannelFromMessage;
export type Contacts$ResolvedPeer = $Contacts$ResolvedPeer;
export type MessageRange = $MessageRange;
export type Updates$ChannelDifference = $Updates$ChannelDifferenceEmpty | $Updates$ChannelDifferenceTooLong | $Updates$ChannelDifference;
export type ChannelMessagesFilter = $ChannelMessagesFilterEmpty | $ChannelMessagesFilter;
export type ChannelParticipant = $ChannelParticipant | $ChannelParticipantSelf | $ChannelParticipantCreator | $ChannelParticipantAdmin | $ChannelParticipantBanned | $ChannelParticipantLeft;
export type ChannelParticipantsFilter = $ChannelParticipantsRecent | $ChannelParticipantsAdmins | $ChannelParticipantsKicked | $ChannelParticipantsBots | $ChannelParticipantsBanned | $ChannelParticipantsSearch | $ChannelParticipantsContacts | $ChannelParticipantsMentions;
export type Channels$ChannelParticipants = $Channels$ChannelParticipants | $Channels$ChannelParticipantsNotModified;
export type Channels$ChannelParticipant = $Channels$ChannelParticipant;
export type Help$TermsOfService = $Help$TermsOfService;
export type Messages$SavedGifs = $Messages$SavedGifsNotModified | $Messages$SavedGifs;
export type InputBotInlineMessage = $InputBotInlineMessageMediaAuto | $InputBotInlineMessageText | $InputBotInlineMessageMediaGeo | $InputBotInlineMessageMediaVenue | $InputBotInlineMessageMediaContact | $InputBotInlineMessageGame | $InputBotInlineMessageMediaInvoice;
export type InputBotInlineResult = $InputBotInlineResult | $InputBotInlineResultPhoto | $InputBotInlineResultDocument | $InputBotInlineResultGame;
export type BotInlineMessage = $BotInlineMessageMediaAuto | $BotInlineMessageText | $BotInlineMessageMediaGeo | $BotInlineMessageMediaVenue | $BotInlineMessageMediaContact | $BotInlineMessageMediaInvoice;
export type BotInlineResult = $BotInlineResult | $BotInlineMediaResult;
export type Messages$BotResults = $Messages$BotResults;
export type ExportedMessageLink = $ExportedMessageLink;
export type MessageFwdHeader = $MessageFwdHeader;
export type Auth$CodeType = $Auth$CodeTypeSms | $Auth$CodeTypeCall | $Auth$CodeTypeFlashCall | $Auth$CodeTypeMissedCall | $Auth$CodeTypeFragmentSms;
export type Auth$SentCodeType = $Auth$SentCodeTypeApp | $Auth$SentCodeTypeSms | $Auth$SentCodeTypeCall | $Auth$SentCodeTypeFlashCall | $Auth$SentCodeTypeMissedCall | $Auth$SentCodeTypeEmailCode | $Auth$SentCodeTypeSetUpEmailRequired | $Auth$SentCodeTypeFragmentSms | $Auth$SentCodeTypeFirebaseSms;
export type Messages$BotCallbackAnswer = $Messages$BotCallbackAnswer;
export type Messages$MessageEditData = $Messages$MessageEditData;
export type InputBotInlineMessageID = $InputBotInlineMessageID | $InputBotInlineMessageID64;
export type InlineBotSwitchPM = $InlineBotSwitchPM;
export type Messages$PeerDialogs = $Messages$PeerDialogs;
export type TopPeer = $TopPeer;
export type TopPeerCategory = $TopPeerCategoryBotsPM | $TopPeerCategoryBotsInline | $TopPeerCategoryCorrespondents | $TopPeerCategoryGroups | $TopPeerCategoryChannels | $TopPeerCategoryPhoneCalls | $TopPeerCategoryForwardUsers | $TopPeerCategoryForwardChats;
export type TopPeerCategoryPeers = $TopPeerCategoryPeers;
export type Contacts$TopPeers = $Contacts$TopPeersNotModified | $Contacts$TopPeers | $Contacts$TopPeersDisabled;
export type DraftMessage = $DraftMessageEmpty | $DraftMessage;
export type Messages$FeaturedStickers = $Messages$FeaturedStickersNotModified | $Messages$FeaturedStickers;
export type Messages$RecentStickers = $Messages$RecentStickersNotModified | $Messages$RecentStickers;
export type Messages$ArchivedStickers = $Messages$ArchivedStickers;
export type Messages$StickerSetInstallResult = $Messages$StickerSetInstallResultSuccess | $Messages$StickerSetInstallResultArchive;
export type StickerSetCovered = $StickerSetCovered | $StickerSetMultiCovered | $StickerSetFullCovered | $StickerSetNoCovered;
export type MaskCoords = $MaskCoords;
export type InputStickeredMedia = $InputStickeredMediaPhoto | $InputStickeredMediaDocument;
export type Game = $Game;
export type InputGame = $InputGameID | $InputGameShortName;
export type HighScore = $HighScore;
export type Messages$HighScores = $Messages$HighScores;
export type RichText = $TextEmpty | $TextPlain | $TextBold | $TextItalic | $TextUnderline | $TextStrike | $TextFixed | $TextUrl | $TextEmail | $TextConcat | $TextSubscript | $TextSuperscript | $TextMarked | $TextPhone | $TextImage | $TextAnchor;
export type PageBlock = $PageBlockUnsupported | $PageBlockTitle | $PageBlockSubtitle | $PageBlockAuthorDate | $PageBlockHeader | $PageBlockSubheader | $PageBlockParagraph | $PageBlockPreformatted | $PageBlockFooter | $PageBlockDivider | $PageBlockAnchor | $PageBlockList | $PageBlockBlockquote | $PageBlockPullquote | $PageBlockPhoto | $PageBlockVideo | $PageBlockCover | $PageBlockEmbed | $PageBlockEmbedPost | $PageBlockCollage | $PageBlockSlideshow | $PageBlockChannel | $PageBlockAudio | $PageBlockKicker | $PageBlockTable | $PageBlockOrderedList | $PageBlockDetails | $PageBlockRelatedArticles | $PageBlockMap;
export type PhoneCallDiscardReason = $PhoneCallDiscardReasonMissed | $PhoneCallDiscardReasonDisconnect | $PhoneCallDiscardReasonHangup | $PhoneCallDiscardReasonBusy;
export type DataJSON = $DataJSON;
export type LabeledPrice = $LabeledPrice;
export type Invoice = $Invoice;
export type PaymentCharge = $PaymentCharge;
export type PostAddress = $PostAddress;
export type PaymentRequestedInfo = $PaymentRequestedInfo;
export type PaymentSavedCredentials = $PaymentSavedCredentialsCard;
export type WebDocument = $WebDocument | $WebDocumentNoProxy;
export type InputWebDocument = $InputWebDocument;
export type InputWebFileLocation = $InputWebFileLocation | $InputWebFileGeoPointLocation | $InputWebFileAudioAlbumThumbLocation;
export type Upload$WebFile = $Upload$WebFile;
export type Payments$PaymentForm = $Payments$PaymentForm;
export type Payments$ValidatedRequestedInfo = $Payments$ValidatedRequestedInfo;
export type Payments$PaymentResult = $Payments$PaymentResult | $Payments$PaymentVerificationNeeded;
export type Payments$PaymentReceipt = $Payments$PaymentReceipt;
export type Payments$SavedInfo = $Payments$SavedInfo;
export type InputPaymentCredentials = $InputPaymentCredentialsSaved | $InputPaymentCredentials | $InputPaymentCredentialsApplePay | $InputPaymentCredentialsGooglePay;
export type Account$TmpPassword = $Account$TmpPassword;
export type ShippingOption = $ShippingOption;
export type InputStickerSetItem = $InputStickerSetItem;
export type InputPhoneCall = $InputPhoneCall;
export type PhoneCall = $PhoneCallEmpty | $PhoneCallWaiting | $PhoneCallRequested | $PhoneCallAccepted | $PhoneCall | $PhoneCallDiscarded;
export type PhoneConnection = $PhoneConnection | $PhoneConnectionWebrtc;
export type PhoneCallProtocol = $PhoneCallProtocol;
export type Phone$PhoneCall = $Phone$PhoneCall;
export type Upload$CdnFile = $Upload$CdnFileReuploadNeeded | $Upload$CdnFile;
export type CdnPublicKey = $CdnPublicKey;
export type CdnConfig = $CdnConfig;
export type LangPackString = $LangPackString | $LangPackStringPluralized | $LangPackStringDeleted;
export type LangPackDifference = $LangPackDifference;
export type LangPackLanguage = $LangPackLanguage;
export type ChannelAdminLogEventAction = $ChannelAdminLogEventActionChangeTitle | $ChannelAdminLogEventActionChangeAbout | $ChannelAdminLogEventActionChangeUsername | $ChannelAdminLogEventActionChangePhoto | $ChannelAdminLogEventActionToggleInvites | $ChannelAdminLogEventActionToggleSignatures | $ChannelAdminLogEventActionUpdatePinned | $ChannelAdminLogEventActionEditMessage | $ChannelAdminLogEventActionDeleteMessage | $ChannelAdminLogEventActionParticipantJoin | $ChannelAdminLogEventActionParticipantLeave | $ChannelAdminLogEventActionParticipantInvite | $ChannelAdminLogEventActionParticipantToggleBan | $ChannelAdminLogEventActionParticipantToggleAdmin | $ChannelAdminLogEventActionChangeStickerSet | $ChannelAdminLogEventActionTogglePreHistoryHidden | $ChannelAdminLogEventActionDefaultBannedRights | $ChannelAdminLogEventActionStopPoll | $ChannelAdminLogEventActionChangeLinkedChat | $ChannelAdminLogEventActionChangeLocation | $ChannelAdminLogEventActionToggleSlowMode | $ChannelAdminLogEventActionStartGroupCall | $ChannelAdminLogEventActionDiscardGroupCall | $ChannelAdminLogEventActionParticipantMute | $ChannelAdminLogEventActionParticipantUnmute | $ChannelAdminLogEventActionToggleGroupCallSetting | $ChannelAdminLogEventActionParticipantJoinByInvite | $ChannelAdminLogEventActionExportedInviteDelete | $ChannelAdminLogEventActionExportedInviteRevoke | $ChannelAdminLogEventActionExportedInviteEdit | $ChannelAdminLogEventActionParticipantVolume | $ChannelAdminLogEventActionChangeHistoryTTL | $ChannelAdminLogEventActionParticipantJoinByRequest | $ChannelAdminLogEventActionToggleNoForwards | $ChannelAdminLogEventActionSendMessage | $ChannelAdminLogEventActionChangeAvailableReactions | $ChannelAdminLogEventActionChangeUsernames | $ChannelAdminLogEventActionToggleForum | $ChannelAdminLogEventActionCreateTopic | $ChannelAdminLogEventActionEditTopic | $ChannelAdminLogEventActionDeleteTopic | $ChannelAdminLogEventActionPinTopic | $ChannelAdminLogEventActionToggleAntiSpam;
export type ChannelAdminLogEvent = $ChannelAdminLogEvent;
export type Channels$AdminLogResults = $Channels$AdminLogResults;
export type ChannelAdminLogEventsFilter = $ChannelAdminLogEventsFilter;
export type PopularContact = $PopularContact;
export type Messages$FavedStickers = $Messages$FavedStickersNotModified | $Messages$FavedStickers;
export type RecentMeUrl = $RecentMeUrlUnknown | $RecentMeUrlUser | $RecentMeUrlChat | $RecentMeUrlChatInvite | $RecentMeUrlStickerSet;
export type Help$RecentMeUrls = $Help$RecentMeUrls;
export type InputSingleMedia = $InputSingleMedia;
export type WebAuthorization = $WebAuthorization;
export type Account$WebAuthorizations = $Account$WebAuthorizations;
export type InputMessage = $InputMessageID | $InputMessageReplyTo | $InputMessagePinned | $InputMessageCallbackQuery;
export type InputDialogPeer = $InputDialogPeer | $InputDialogPeerFolder;
export type DialogPeer = $DialogPeer | $DialogPeerFolder;
export type Messages$FoundStickerSets = $Messages$FoundStickerSetsNotModified | $Messages$FoundStickerSets;
export type FileHash = $FileHash;
export type InputClientProxy = $InputClientProxy;
export type Help$TermsOfServiceUpdate = $Help$TermsOfServiceUpdateEmpty | $Help$TermsOfServiceUpdate;
export type InputSecureFile = $InputSecureFileUploaded | $InputSecureFile;
export type SecureFile = $SecureFileEmpty | $SecureFile;
export type SecureData = $SecureData;
export type SecurePlainData = $SecurePlainPhone | $SecurePlainEmail;
export type SecureValueType = $SecureValueTypePersonalDetails | $SecureValueTypePassport | $SecureValueTypeDriverLicense | $SecureValueTypeIdentityCard | $SecureValueTypeInternalPassport | $SecureValueTypeAddress | $SecureValueTypeUtilityBill | $SecureValueTypeBankStatement | $SecureValueTypeRentalAgreement | $SecureValueTypePassportRegistration | $SecureValueTypeTemporaryRegistration | $SecureValueTypePhone | $SecureValueTypeEmail;
export type SecureValue = $SecureValue;
export type InputSecureValue = $InputSecureValue;
export type SecureValueHash = $SecureValueHash;
export type SecureValueError = $SecureValueErrorData | $SecureValueErrorFrontSide | $SecureValueErrorReverseSide | $SecureValueErrorSelfie | $SecureValueErrorFile | $SecureValueErrorFiles | $SecureValueError | $SecureValueErrorTranslationFile | $SecureValueErrorTranslationFiles;
export type SecureCredentialsEncrypted = $SecureCredentialsEncrypted;
export type Account$AuthorizationForm = $Account$AuthorizationForm;
export type Account$SentEmailCode = $Account$SentEmailCode;
export type Help$DeepLinkInfo = $Help$DeepLinkInfoEmpty | $Help$DeepLinkInfo;
export type SavedContact = $SavedPhoneContact;
export type Account$Takeout = $Account$Takeout;
export type PasswordKdfAlgo = $PasswordKdfAlgoUnknown | $PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow;
export type SecurePasswordKdfAlgo = $SecurePasswordKdfAlgoUnknown | $SecurePasswordKdfAlgoPBKDF2HMACSHA512iter100000 | $SecurePasswordKdfAlgoSHA512;
export type SecureSecretSettings = $SecureSecretSettings;
export type InputCheckPasswordSRP = $InputCheckPasswordEmpty | $InputCheckPasswordSRP;
export type SecureRequiredType = $SecureRequiredType | $SecureRequiredTypeOneOf;
export type Help$PassportConfig = $Help$PassportConfigNotModified | $Help$PassportConfig;
export type InputAppEvent = $InputAppEvent;
export type JSONObjectValue = $JsonObjectValue;
export type JSONValue = $JsonNull | $JsonBool | $JsonNumber | $JsonString | $JsonArray | $JsonObject;
export type PageTableCell = $PageTableCell;
export type PageTableRow = $PageTableRow;
export type PageCaption = $PageCaption;
export type PageListItem = $PageListItemText | $PageListItemBlocks;
export type PageListOrderedItem = $PageListOrderedItemText | $PageListOrderedItemBlocks;
export type PageRelatedArticle = $PageRelatedArticle;
export type Page = $Page;
export type Help$SupportName = $Help$SupportName;
export type Help$UserInfo = $Help$UserInfoEmpty | $Help$UserInfo;
export type PollAnswer = $PollAnswer;
export type Poll = $Poll;
export type PollAnswerVoters = $PollAnswerVoters;
export type PollResults = $PollResults;
export type ChatOnlines = $ChatOnlines;
export type StatsURL = $StatsURL;
export type ChatAdminRights = $ChatAdminRights;
export type ChatBannedRights = $ChatBannedRights;
export type InputWallPaper = $InputWallPaper | $InputWallPaperSlug | $InputWallPaperNoFile;
export type Account$WallPapers = $Account$WallPapersNotModified | $Account$WallPapers;
export type CodeSettings = $CodeSettings;
export type WallPaperSettings = $WallPaperSettings;
export type AutoDownloadSettings = $AutoDownloadSettings;
export type Account$AutoDownloadSettings = $Account$AutoDownloadSettings;
export type EmojiKeyword = $EmojiKeyword | $EmojiKeywordDeleted;
export type EmojiKeywordsDifference = $EmojiKeywordsDifference;
export type EmojiURL = $EmojiURL;
export type EmojiLanguage = $EmojiLanguage;
export type Folder = $Folder;
export type InputFolderPeer = $InputFolderPeer;
export type FolderPeer = $FolderPeer;
export type Messages$SearchCounter = $Messages$SearchCounter;
export type UrlAuthResult = $UrlAuthResultRequest | $UrlAuthResultAccepted | $UrlAuthResultDefault;
export type ChannelLocation = $ChannelLocationEmpty | $ChannelLocation;
export type PeerLocated = $PeerLocated | $PeerSelfLocated;
export type RestrictionReason = $RestrictionReason;
export type InputTheme = $InputTheme | $InputThemeSlug;
export type Theme = $Theme;
export type Account$Themes = $Account$ThemesNotModified | $Account$Themes;
export type Auth$LoginToken = $Auth$LoginToken | $Auth$LoginTokenMigrateTo | $Auth$LoginTokenSuccess;
export type Account$ContentSettings = $Account$ContentSettings;
export type Messages$InactiveChats = $Messages$InactiveChats;
export type BaseTheme = $BaseThemeClassic | $BaseThemeDay | $BaseThemeNight | $BaseThemeTinted | $BaseThemeArctic;
export type InputThemeSettings = $InputThemeSettings;
export type ThemeSettings = $ThemeSettings;
export type WebPageAttribute = $WebPageAttributeTheme;
export type MessageUserVote = $MessageUserVote | $MessageUserVoteInputOption | $MessageUserVoteMultiple;
export type Messages$VotesList = $Messages$VotesList;
export type BankCardOpenUrl = $BankCardOpenUrl;
export type Payments$BankCardData = $Payments$BankCardData;
export type DialogFilter = $DialogFilter | $DialogFilterDefault | $DialogFilterChatlist;
export type DialogFilterSuggested = $DialogFilterSuggested;
export type StatsDateRangeDays = $StatsDateRangeDays;
export type StatsAbsValueAndPrev = $StatsAbsValueAndPrev;
export type StatsPercentValue = $StatsPercentValue;
export type StatsGraph = $StatsGraphAsync | $StatsGraphError | $StatsGraph;
export type MessageInteractionCounters = $MessageInteractionCounters;
export type Stats$BroadcastStats = $Stats$BroadcastStats;
export type Help$PromoData = $Help$PromoDataEmpty | $Help$PromoData;
export type VideoSize = $VideoSize | $VideoSizeEmojiMarkup | $VideoSizeStickerMarkup;
export type StatsGroupTopPoster = $StatsGroupTopPoster;
export type StatsGroupTopAdmin = $StatsGroupTopAdmin;
export type StatsGroupTopInviter = $StatsGroupTopInviter;
export type Stats$MegagroupStats = $Stats$MegagroupStats;
export type GlobalPrivacySettings = $GlobalPrivacySettings;
export type Help$CountryCode = $Help$CountryCode;
export type Help$Country = $Help$Country;
export type Help$CountriesList = $Help$CountriesListNotModified | $Help$CountriesList;
export type MessageViews = $MessageViews;
export type Messages$MessageViews = $Messages$MessageViews;
export type Messages$DiscussionMessage = $Messages$DiscussionMessage;
export type MessageReplyHeader = $MessageReplyHeader;
export type MessageReplies = $MessageReplies;
export type PeerBlocked = $PeerBlocked;
export type Stats$MessageStats = $Stats$MessageStats;
export type GroupCall = $GroupCallDiscarded | $GroupCall;
export type InputGroupCall = $InputGroupCall;
export type GroupCallParticipant = $GroupCallParticipant;
export type Phone$GroupCall = $Phone$GroupCall;
export type Phone$GroupParticipants = $Phone$GroupParticipants;
export type InlineQueryPeerType = $InlineQueryPeerTypeSameBotPM | $InlineQueryPeerTypePM | $InlineQueryPeerTypeChat | $InlineQueryPeerTypeMegagroup | $InlineQueryPeerTypeBroadcast | $InlineQueryPeerTypeBotPM;
export type Messages$HistoryImport = $Messages$HistoryImport;
export type Messages$HistoryImportParsed = $Messages$HistoryImportParsed;
export type Messages$AffectedFoundMessages = $Messages$AffectedFoundMessages;
export type ChatInviteImporter = $ChatInviteImporter;
export type Messages$ExportedChatInvites = $Messages$ExportedChatInvites;
export type Messages$ExportedChatInvite = $Messages$ExportedChatInvite | $Messages$ExportedChatInviteReplaced;
export type Messages$ChatInviteImporters = $Messages$ChatInviteImporters;
export type ChatAdminWithInvites = $ChatAdminWithInvites;
export type Messages$ChatAdminsWithInvites = $Messages$ChatAdminsWithInvites;
export type Messages$CheckedHistoryImportPeer = $Messages$CheckedHistoryImportPeer;
export type Phone$JoinAsPeers = $Phone$JoinAsPeers;
export type Phone$ExportedGroupCallInvite = $Phone$ExportedGroupCallInvite;
export type GroupCallParticipantVideoSourceGroup = $GroupCallParticipantVideoSourceGroup;
export type GroupCallParticipantVideo = $GroupCallParticipantVideo;
export type Stickers$SuggestedShortName = $Stickers$SuggestedShortName;
export type BotCommandScope = $BotCommandScopeDefault | $BotCommandScopeUsers | $BotCommandScopeChats | $BotCommandScopeChatAdmins | $BotCommandScopePeer | $BotCommandScopePeerAdmins | $BotCommandScopePeerUser;
export type Account$ResetPasswordResult = $Account$ResetPasswordFailedWait | $Account$ResetPasswordRequestedWait | $Account$ResetPasswordOk;
export type SponsoredMessage = $SponsoredMessage;
export type Messages$SponsoredMessages = $Messages$SponsoredMessages | $Messages$SponsoredMessagesEmpty;
export type SearchResultsCalendarPeriod = $SearchResultsCalendarPeriod;
export type Messages$SearchResultsCalendar = $Messages$SearchResultsCalendar;
export type SearchResultsPosition = $SearchResultPosition;
export type Messages$SearchResultsPositions = $Messages$SearchResultsPositions;
export type Channels$SendAsPeers = $Channels$SendAsPeers;
export type Users$UserFull = $Users$UserFull;
export type Messages$PeerSettings = $Messages$PeerSettings;
export type Auth$LoggedOut = $Auth$LoggedOut;
export type ReactionCount = $ReactionCount;
export type MessageReactions = $MessageReactions;
export type Messages$MessageReactionsList = $Messages$MessageReactionsList;
export type AvailableReaction = $AvailableReaction;
export type Messages$AvailableReactions = $Messages$AvailableReactionsNotModified | $Messages$AvailableReactions;
export type MessagePeerReaction = $MessagePeerReaction;
export type GroupCallStreamChannel = $GroupCallStreamChannel;
export type Phone$GroupCallStreamChannels = $Phone$GroupCallStreamChannels;
export type Phone$GroupCallStreamRtmpUrl = $Phone$GroupCallStreamRtmpUrl;
export type AttachMenuBotIconColor = $AttachMenuBotIconColor;
export type AttachMenuBotIcon = $AttachMenuBotIcon;
export type AttachMenuBot = $AttachMenuBot;
export type AttachMenuBots = $AttachMenuBotsNotModified | $AttachMenuBots;
export type AttachMenuBotsBot = $AttachMenuBotsBot;
export type WebViewResult = $WebViewResultUrl;
export type SimpleWebViewResult = $SimpleWebViewResultUrl;
export type WebViewMessageSent = $WebViewMessageSent;
export type BotMenuButton = $BotMenuButtonDefault | $BotMenuButtonCommands | $BotMenuButton;
export type Account$SavedRingtones = $Account$SavedRingtonesNotModified | $Account$SavedRingtones;
export type NotificationSound = $NotificationSoundDefault | $NotificationSoundNone | $NotificationSoundLocal | $NotificationSoundRingtone;
export type Account$SavedRingtone = $Account$SavedRingtone | $Account$SavedRingtoneConverted;
export type AttachMenuPeerType = $AttachMenuPeerTypeSameBotPM | $AttachMenuPeerTypeBotPM | $AttachMenuPeerTypePM | $AttachMenuPeerTypeChat | $AttachMenuPeerTypeBroadcast;
export type InputInvoice = $InputInvoiceMessage | $InputInvoiceSlug;
export type Payments$ExportedInvoice = $Payments$ExportedInvoice;
export type Messages$TranscribedAudio = $Messages$TranscribedAudio;
export type Help$PremiumPromo = $Help$PremiumPromo;
export type InputStorePaymentPurpose = $InputStorePaymentPremiumSubscription | $InputStorePaymentGiftPremium;
export type PremiumGiftOption = $PremiumGiftOption;
export type PaymentFormMethod = $PaymentFormMethod;
export type EmojiStatus = $EmojiStatusEmpty | $EmojiStatus | $EmojiStatusUntil;
export type Account$EmojiStatuses = $Account$EmojiStatusesNotModified | $Account$EmojiStatuses;
export type Reaction = $ReactionEmpty | $ReactionEmoji | $ReactionCustomEmoji;
export type ChatReactions = $ChatReactionsNone | $ChatReactionsAll | $ChatReactionsSome;
export type Messages$Reactions = $Messages$ReactionsNotModified | $Messages$Reactions;
export type EmailVerifyPurpose = $EmailVerifyPurposeLoginSetup | $EmailVerifyPurposeLoginChange | $EmailVerifyPurposePassport;
export type EmailVerification = $EmailVerificationCode | $EmailVerificationGoogle | $EmailVerificationApple;
export type Account$EmailVerified = $Account$EmailVerified | $Account$EmailVerifiedLogin;
export type PremiumSubscriptionOption = $PremiumSubscriptionOption;
export type SendAsPeer = $SendAsPeer;
export type MessageExtendedMedia = $MessageExtendedMediaPreview | $MessageExtendedMedia;
export type StickerKeyword = $StickerKeyword;
export type Username = $Username;
export type ForumTopic = $ForumTopicDeleted | $ForumTopic;
export type Messages$ForumTopics = $Messages$ForumTopics;
export type DefaultHistoryTTL = $DefaultHistoryTTL;
export type ExportedContactToken = $ExportedContactToken;
export type RequestPeerType = $RequestPeerTypeUser | $RequestPeerTypeChat | $RequestPeerTypeBroadcast;
export type EmojiList = $EmojiListNotModified | $EmojiList;
export type EmojiGroup = $EmojiGroup;
export type Messages$EmojiGroups = $Messages$EmojiGroupsNotModified | $Messages$EmojiGroups;
export type TextWithEntities = $TextWithEntities;
export type Messages$TranslatedText = $Messages$TranslateResult;
export type AutoSaveSettings = $AutoSaveSettings;
export type AutoSaveException = $AutoSaveException;
export type Account$AutoSaveSettings = $Account$AutoSaveSettings;
export type Help$AppConfig = $Help$AppConfigNotModified | $Help$AppConfig;
export type InputBotApp = $InputBotAppID | $InputBotAppShortName;
export type BotApp = $BotAppNotModified | $BotApp;
export type Messages$BotApp = $Messages$BotApp;
export type AppWebViewResult = $AppWebViewResultUrl;
export type InlineBotWebView = $InlineBotWebView;
export type ReadParticipantDate = $ReadParticipantDate;
export type InputChatlist = $InputChatlistDialogFilter;
export type ExportedChatlistInvite = $ExportedChatlistInvite;
export type Chatlists$ExportedChatlistInvite = $Chatlists$ExportedChatlistInvite;
export type Chatlists$ExportedInvites = $Chatlists$ExportedInvites;
export type Chatlists$ChatlistInvite = $Chatlists$ChatlistInviteAlready | $Chatlists$ChatlistInvite;
export type Chatlists$ChatlistUpdates = $Chatlists$ChatlistUpdates;
export type Bots$BotInfo = $Bots$BotInfo;export interface $BoolFalse {
  _: "boolFalse";
}

export interface $BoolTrue {
  _: "boolTrue";
}

export interface $True {
  _: "true";
}

export interface $Error {
  _: "error";
  code: number;
  text: string;
}

export interface $Null {
  _: "null";
}

export interface $InputPeerEmpty {
  _: "inputPeerEmpty";
}

export interface $InputPeerSelf {
  _: "inputPeerSelf";
}

export interface $InputPeerChat {
  _: "inputPeerChat";
  chat_id: number;
}

export interface $InputUserEmpty {
  _: "inputUserEmpty";
}

export interface $InputUserSelf {
  _: "inputUserSelf";
}

export interface $InputPhoneContact {
  _: "inputPhoneContact";
  client_id: number;
  phone: string;
  first_name: string;
  last_name: string;
}

export interface $InputFile {
  _: "inputFile";
  id: number;
  parts: number;
  name: string;
  md5_checksum: string;
}

export interface $InputMediaEmpty {
  _: "inputMediaEmpty";
}

export interface $InputMediaUploadedPhoto {
  _: "inputMediaUploadedPhoto";
  flags?: Number;
  spoiler?: True;
  file: InputFile;
  stickers?: InputDocument;
  ttl_seconds?: number;
}

export interface $InputMediaPhoto {
  _: "inputMediaPhoto";
  flags?: Number;
  spoiler?: True;
  id: InputPhoto;
  ttl_seconds?: number;
}

export interface $InputMediaGeoPoint {
  _: "inputMediaGeoPoint";
  geo_point: InputGeoPoint;
}

export interface $InputMediaContact {
  _: "inputMediaContact";
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
}

export interface $InputChatPhotoEmpty {
  _: "inputChatPhotoEmpty";
}

export interface $InputChatUploadedPhoto {
  _: "inputChatUploadedPhoto";
  flags?: Number;
  file?: InputFile;
  video?: InputFile;
  video_start_ts?: number;
  video_emoji_markup?: VideoSize;
}

export interface $InputChatPhoto {
  _: "inputChatPhoto";
  id: InputPhoto;
}

export interface $InputGeoPointEmpty {
  _: "inputGeoPointEmpty";
}

export interface $InputGeoPoint {
  _: "inputGeoPoint";
  flags?: Number;
  lat: number;
  long: number;
  accuracy_radius?: number;
}

export interface $InputPhotoEmpty {
  _: "inputPhotoEmpty";
}

export interface $InputPhoto {
  _: "inputPhoto";
  id: number;
  access_hash: number;
  file_reference: Uint8Array;
}

export interface $InputFileLocation {
  _: "inputFileLocation";
  volume_id: number;
  local_id: number;
  secret: number;
  file_reference: Uint8Array;
}

export interface $PeerUser {
  _: "peerUser";
  user_id: number;
}

export interface $PeerChat {
  _: "peerChat";
  chat_id: number;
}

export interface $Storage$FileUnknown {
  _: "storage.fileUnknown";
}

export interface $Storage$FilePartial {
  _: "storage.filePartial";
}

export interface $Storage$FileJpeg {
  _: "storage.fileJpeg";
}

export interface $Storage$FileGif {
  _: "storage.fileGif";
}

export interface $Storage$FilePng {
  _: "storage.filePng";
}

export interface $Storage$FilePdf {
  _: "storage.filePdf";
}

export interface $Storage$FileMp3 {
  _: "storage.fileMp3";
}

export interface $Storage$FileMov {
  _: "storage.fileMov";
}

export interface $Storage$FileMp4 {
  _: "storage.fileMp4";
}

export interface $Storage$FileWebp {
  _: "storage.fileWebp";
}

export interface $UserEmpty {
  _: "userEmpty";
  id: number;
}

export interface $UserProfilePhotoEmpty {
  _: "userProfilePhotoEmpty";
}

export interface $UserProfilePhoto {
  _: "userProfilePhoto";
  flags?: Number;
  has_video?: True;
  personal?: True;
  photo_id: number;
  stripped_thumb?: Uint8Array;
  dc_id: number;
}

export interface $UserStatusEmpty {
  _: "userStatusEmpty";
}

export interface $UserStatusOnline {
  _: "userStatusOnline";
  expires: number;
}

export interface $UserStatusOffline {
  _: "userStatusOffline";
  was_online: number;
}

export interface $ChatEmpty {
  _: "chatEmpty";
  id: number;
}

export interface $Chat {
  _: "chat";
  flags?: Number;
  creator?: True;
  left?: True;
  deactivated?: True;
  call_active?: True;
  call_not_empty?: True;
  noforwards?: True;
  id: number;
  title: string;
  photo: ChatPhoto;
  participants_count: number;
  date: number;
  version: number;
  migrated_to?: InputChannel;
  admin_rights?: ChatAdminRights;
  default_banned_rights?: ChatBannedRights;
}

export interface $ChatForbidden {
  _: "chatForbidden";
  id: number;
  title: string;
}

export interface $ChatFull {
  _: "chatFull";
  flags?: Number;
  can_set_username?: True;
  has_scheduled?: True;
  translations_disabled?: True;
  id: number;
  about: string;
  participants: ChatParticipants;
  chat_photo?: Photo;
  notify_settings: PeerNotifySettings;
  exported_invite?: ExportedChatInvite;
  bot_info?: BotInfo;
  pinned_msg_id?: number;
  folder_id?: number;
  call?: InputGroupCall;
  ttl_period?: number;
  groupcall_default_join_as?: Peer;
  theme_emoticon?: string;
  requests_pending?: number;
  recent_requesters?: number[];
  available_reactions?: ChatReactions;
}

export interface $ChatParticipant {
  _: "chatParticipant";
  user_id: number;
  inviter_id: number;
  date: number;
}

export interface $ChatParticipantsForbidden {
  _: "chatParticipantsForbidden";
  flags?: Number;
  chat_id: number;
  self_participant?: ChatParticipant;
}

export interface $ChatParticipants {
  _: "chatParticipants";
  chat_id: number;
  participants: ChatParticipant;
  version: number;
}

export interface $ChatPhotoEmpty {
  _: "chatPhotoEmpty";
}

export interface $ChatPhoto {
  _: "chatPhoto";
  flags?: Number;
  has_video?: True;
  photo_id: number;
  stripped_thumb?: Uint8Array;
  dc_id: number;
}

export interface $MessageEmpty {
  _: "messageEmpty";
  flags?: Number;
  id: number;
  peer_id?: Peer;
}

export interface $Message {
  _: "message";
  flags?: Number;
  out?: True;
  mentioned?: True;
  media_unread?: True;
  silent?: True;
  post?: True;
  from_scheduled?: True;
  legacy?: True;
  edit_hide?: True;
  pinned?: True;
  noforwards?: True;
  id: number;
  from_id?: Peer;
  peer_id: Peer;
  fwd_from?: MessageFwdHeader;
  via_bot_id?: number;
  reply_to?: MessageReplyHeader;
  date: number;
  message: string;
  media?: MessageMedia;
  reply_markup?: ReplyMarkup;
  entities?: MessageEntity;
  views?: number;
  forwards?: number;
  replies?: MessageReplies;
  edit_date?: number;
  post_author?: string;
  grouped_id?: number;
  reactions?: MessageReactions;
  restriction_reason?: RestrictionReason;
  ttl_period?: number;
}

export interface $MessageService {
  _: "messageService";
  flags?: Number;
  out?: True;
  mentioned?: True;
  media_unread?: True;
  silent?: True;
  post?: True;
  legacy?: True;
  id: number;
  from_id?: Peer;
  peer_id: Peer;
  reply_to?: MessageReplyHeader;
  date: number;
  action: MessageAction;
  ttl_period?: number;
}

export interface $MessageMediaEmpty {
  _: "messageMediaEmpty";
}

export interface $MessageMediaPhoto {
  _: "messageMediaPhoto";
  flags?: Number;
  spoiler?: True;
  photo?: Photo;
  ttl_seconds?: number;
}

export interface $MessageMediaGeo {
  _: "messageMediaGeo";
  geo: GeoPoint;
}

export interface $MessageMediaContact {
  _: "messageMediaContact";
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
  user_id: number;
}

export interface $MessageMediaUnsupported {
  _: "messageMediaUnsupported";
}

export interface $MessageActionEmpty {
  _: "messageActionEmpty";
}

export interface $MessageActionChatCreate {
  _: "messageActionChatCreate";
  title: string;
  users: number[];
}

export interface $MessageActionChatEditTitle {
  _: "messageActionChatEditTitle";
  title: string;
}

export interface $MessageActionChatEditPhoto {
  _: "messageActionChatEditPhoto";
  photo: Photo;
}

export interface $MessageActionChatDeletePhoto {
  _: "messageActionChatDeletePhoto";
}

export interface $MessageActionChatAddUser {
  _: "messageActionChatAddUser";
  users: number[];
}

export interface $MessageActionChatDeleteUser {
  _: "messageActionChatDeleteUser";
  user_id: number;
}

export interface $Dialog {
  _: "dialog";
  flags?: Number;
  pinned?: True;
  unread_mark?: True;
  peer: Peer;
  top_message: number;
  read_inbox_max_id: number;
  read_outbox_max_id: number;
  unread_count: number;
  unread_mentions_count: number;
  unread_reactions_count: number;
  notify_settings: PeerNotifySettings;
  pts?: number;
  draft?: DraftMessage;
  folder_id?: number;
  ttl_period?: number;
}

export interface $PhotoEmpty {
  _: "photoEmpty";
  id: number;
}

export interface $Photo {
  _: "photo";
  flags?: Number;
  has_stickers?: True;
  id: number;
  access_hash: number;
  file_reference: Uint8Array;
  date: number;
  sizes: PhotoSize;
  video_sizes?: VideoSize;
  dc_id: number;
}

export interface $PhotoSizeEmpty {
  _: "photoSizeEmpty";
  type: string;
}

export interface $PhotoSize {
  _: "photoSize";
  type: string;
  w: number;
  h: number;
  size: number;
}

export interface $PhotoCachedSize {
  _: "photoCachedSize";
  type: string;
  w: number;
  h: number;
  bytes: Uint8Array;
}

export interface $GeoPointEmpty {
  _: "geoPointEmpty";
}

export interface $GeoPoint {
  _: "geoPoint";
  flags?: Number;
  long: number;
  lat: number;
  access_hash: number;
  accuracy_radius?: number;
}

export interface $Auth$SentCode {
  _: "auth.sentCode";
  flags?: Number;
  type: Auth$SentCodeType;
  phone_code_hash: string;
  next_type?: Auth$CodeType;
  timeout?: number;
}

export interface $Auth$Authorization {
  _: "auth.authorization";
  flags?: Number;
  setup_password_required?: True;
  otherwise_relogin_days?: number;
  tmp_sessions?: number;
  future_auth_token?: Uint8Array;
  user: User;
}

export interface $Auth$ExportedAuthorization {
  _: "auth.exportedAuthorization";
  id: number;
  bytes: Uint8Array;
}

export interface $InputNotifyPeer {
  _: "inputNotifyPeer";
  peer: InputPeer;
}

export interface $InputNotifyUsers {
  _: "inputNotifyUsers";
}

export interface $InputNotifyChats {
  _: "inputNotifyChats";
}

export interface $InputPeerNotifySettings {
  _: "inputPeerNotifySettings";
  flags?: Number;
  show_previews?: Bool;
  silent?: Bool;
  mute_until?: number;
  sound?: NotificationSound;
}

export interface $PeerNotifySettings {
  _: "peerNotifySettings";
  flags?: Number;
  show_previews?: Bool;
  silent?: Bool;
  mute_until?: number;
  ios_sound?: NotificationSound;
  android_sound?: NotificationSound;
  other_sound?: NotificationSound;
}

export interface $PeerSettings {
  _: "peerSettings";
  flags?: Number;
  report_spam?: True;
  add_contact?: True;
  block_contact?: True;
  share_contact?: True;
  need_contacts_exception?: True;
  report_geo?: True;
  autoarchived?: True;
  invite_members?: True;
  request_chat_broadcast?: True;
  geo_distance?: number;
  request_chat_title?: string;
  request_chat_date?: number;
}

export interface $WallPaper {
  _: "wallPaper";
  id: number;
  flags?: Number;
  creator?: True;
  default?: True;
  pattern?: True;
  dark?: True;
  access_hash: number;
  slug: string;
  document: Document;
  settings?: WallPaperSettings;
}

export interface $InputReportReasonSpam {
  _: "inputReportReasonSpam";
}

export interface $InputReportReasonViolence {
  _: "inputReportReasonViolence";
}

export interface $InputReportReasonPornography {
  _: "inputReportReasonPornography";
}

export interface $InputReportReasonChildAbuse {
  _: "inputReportReasonChildAbuse";
}

export interface $InputReportReasonOther {
  _: "inputReportReasonOther";
}

export interface $UserFull {
  _: "userFull";
  flags?: Number;
  blocked?: True;
  phone_calls_available?: True;
  phone_calls_private?: True;
  can_pin_message?: True;
  has_scheduled?: True;
  video_calls_available?: True;
  voice_messages_forbidden?: True;
  translations_disabled?: True;
  id: number;
  about?: string;
  settings: PeerSettings;
  personal_photo?: Photo;
  profile_photo?: Photo;
  fallback_photo?: Photo;
  notify_settings: PeerNotifySettings;
  bot_info?: BotInfo;
  pinned_msg_id?: number;
  common_chats_count: number;
  folder_id?: number;
  ttl_period?: number;
  theme_emoticon?: string;
  private_forward_name?: string;
  bot_group_admin_rights?: ChatAdminRights;
  bot_broadcast_admin_rights?: ChatAdminRights;
  premium_gifts?: PremiumGiftOption;
  wallpaper?: WallPaper;
}

export interface $Contact {
  _: "contact";
  user_id: number;
  mutual: Bool;
}

export interface $ImportedContact {
  _: "importedContact";
  user_id: number;
  client_id: number;
}

export interface $ContactStatus {
  _: "contactStatus";
  user_id: number;
  status: UserStatus;
}

export interface $Contacts$ContactsNotModified {
  _: "contacts.contactsNotModified";
}

export interface $Contacts$Contacts {
  _: "contacts.contacts";
  contacts: Contact;
  saved_count: number;
  users: User;
}

export interface $Contacts$ImportedContacts {
  _: "contacts.importedContacts";
  imported: ImportedContact;
  popular_invites: PopularContact;
  retry_contacts: number[];
  users: User;
}

export interface $Contacts$Blocked {
  _: "contacts.blocked";
  blocked: PeerBlocked;
  chats: Chat;
  users: User;
}

export interface $Contacts$BlockedSlice {
  _: "contacts.blockedSlice";
  count: number;
  blocked: PeerBlocked;
  chats: Chat;
  users: User;
}

export interface $Messages$Dialogs {
  _: "messages.dialogs";
  dialogs: Dialog;
  messages: Message;
  chats: Chat;
  users: User;
}

export interface $Messages$DialogsSlice {
  _: "messages.dialogsSlice";
  count: number;
  dialogs: Dialog;
  messages: Message;
  chats: Chat;
  users: User;
}

export interface $Messages$Messages {
  _: "messages.messages";
  messages: Message;
  chats: Chat;
  users: User;
}

export interface $Messages$MessagesSlice {
  _: "messages.messagesSlice";
  flags?: Number;
  inexact?: True;
  count: number;
  next_rate?: number;
  offset_id_offset?: number;
  messages: Message;
  chats: Chat;
  users: User;
}

export interface $Messages$Chats {
  _: "messages.chats";
  chats: Chat;
}

export interface $Messages$ChatFull {
  _: "messages.chatFull";
  full_chat: ChatFull;
  chats: Chat;
  users: User;
}

export interface $Messages$AffectedHistory {
  _: "messages.affectedHistory";
  pts: number;
  pts_count: number;
  offset: number;
}

export interface $InputMessagesFilterEmpty {
  _: "inputMessagesFilterEmpty";
}

export interface $InputMessagesFilterPhotos {
  _: "inputMessagesFilterPhotos";
}

export interface $InputMessagesFilterVideo {
  _: "inputMessagesFilterVideo";
}

export interface $InputMessagesFilterPhotoVideo {
  _: "inputMessagesFilterPhotoVideo";
}

export interface $InputMessagesFilterDocument {
  _: "inputMessagesFilterDocument";
}

export interface $InputMessagesFilterUrl {
  _: "inputMessagesFilterUrl";
}

export interface $InputMessagesFilterGif {
  _: "inputMessagesFilterGif";
}

export interface $UpdateNewMessage {
  _: "updateNewMessage";
  message: Message;
  pts: number;
  pts_count: number;
}

export interface $UpdateMessageID {
  _: "updateMessageID";
  id: number;
  random_id: number;
}

export interface $UpdateDeleteMessages {
  _: "updateDeleteMessages";
  messages: number[];
  pts: number;
  pts_count: number;
}

export interface $UpdateUserTyping {
  _: "updateUserTyping";
  user_id: number;
  action: SendMessageAction;
}

export interface $UpdateChatUserTyping {
  _: "updateChatUserTyping";
  chat_id: number;
  from_id: Peer;
  action: SendMessageAction;
}

export interface $UpdateChatParticipants {
  _: "updateChatParticipants";
  participants: ChatParticipants;
}

export interface $UpdateUserStatus {
  _: "updateUserStatus";
  user_id: number;
  status: UserStatus;
}

export interface $UpdateUserName {
  _: "updateUserName";
  user_id: number;
  first_name: string;
  last_name: string;
  usernames: Username;
}

export interface $Updates$State {
  _: "updates.state";
  pts: number;
  qts: number;
  date: number;
  seq: number;
  unread_count: number;
}

export interface $Updates$DifferenceEmpty {
  _: "updates.differenceEmpty";
  date: number;
  seq: number;
}

export interface $Updates$Difference {
  _: "updates.difference";
  new_messages: Message;
  new_encrypted_messages: EncryptedMessage;
  other_updates: Update;
  chats: Chat;
  users: User;
  state: Updates$State;
}

export interface $Updates$DifferenceSlice {
  _: "updates.differenceSlice";
  new_messages: Message;
  new_encrypted_messages: EncryptedMessage;
  other_updates: Update;
  chats: Chat;
  users: User;
  intermediate_state: Updates$State;
}

export interface $UpdatesTooLong {
  _: "updatesTooLong";
}

export interface $UpdateShortMessage {
  _: "updateShortMessage";
  flags?: Number;
  out?: True;
  mentioned?: True;
  media_unread?: True;
  silent?: True;
  id: number;
  user_id: number;
  message: string;
  pts: number;
  pts_count: number;
  date: number;
  fwd_from?: MessageFwdHeader;
  via_bot_id?: number;
  reply_to?: MessageReplyHeader;
  entities?: MessageEntity;
  ttl_period?: number;
}

export interface $UpdateShortChatMessage {
  _: "updateShortChatMessage";
  flags?: Number;
  out?: True;
  mentioned?: True;
  media_unread?: True;
  silent?: True;
  id: number;
  from_id: number;
  chat_id: number;
  message: string;
  pts: number;
  pts_count: number;
  date: number;
  fwd_from?: MessageFwdHeader;
  via_bot_id?: number;
  reply_to?: MessageReplyHeader;
  entities?: MessageEntity;
  ttl_period?: number;
}

export interface $UpdateShort {
  _: "updateShort";
  update: Update;
  date: number;
}

export interface $UpdatesCombined {
  _: "updatesCombined";
  updates: Update;
  users: User;
  chats: Chat;
  date: number;
  seq_start: number;
  seq: number;
}

export interface $Updates {
  _: "updates";
  updates: Update;
  users: User;
  chats: Chat;
  date: number;
  seq: number;
}

export interface $Photos$Photos {
  _: "photos.photos";
  photos: Photo;
  users: User;
}

export interface $Photos$PhotosSlice {
  _: "photos.photosSlice";
  count: number;
  photos: Photo;
  users: User;
}

export interface $Photos$Photo {
  _: "photos.photo";
  photo: Photo;
  users: User;
}

export interface $Upload$File {
  _: "upload.file";
  type: Storage$FileType;
  mtime: number;
  bytes: Uint8Array;
}

export interface $DcOption {
  _: "dcOption";
  flags?: Number;
  ipv6?: True;
  media_only?: True;
  tcpo_only?: True;
  cdn?: True;
  static?: True;
  this_port_only?: True;
  id: number;
  ip_address: string;
  port: number;
  secret?: Uint8Array;
}

export interface $Config {
  _: "config";
  flags?: Number;
  default_p2p_contacts?: True;
  preload_featured_stickers?: True;
  revoke_pm_inbox?: True;
  blocked_mode?: True;
  force_try_ipv6?: True;
  date: number;
  expires: number;
  test_mode: Bool;
  this_dc: number;
  dc_options: DcOption;
  dc_txt_domain_name: string;
  chat_size_max: number;
  megagroup_size_max: number;
  forwarded_count_max: number;
  online_update_period_ms: number;
  offline_blur_timeout_ms: number;
  offline_idle_timeout_ms: number;
  online_cloud_timeout_ms: number;
  notify_cloud_delay_ms: number;
  notify_default_delay_ms: number;
  push_chat_period_ms: number;
  push_chat_limit: number;
  edit_time_limit: number;
  revoke_time_limit: number;
  revoke_pm_time_limit: number;
  rating_e_decay: number;
  stickers_recent_limit: number;
  channels_read_media_period: number;
  tmp_sessions?: number;
  call_receive_timeout_ms: number;
  call_ring_timeout_ms: number;
  call_connect_timeout_ms: number;
  call_packet_timeout_ms: number;
  me_url_prefix: string;
  autoupdate_url_prefix?: string;
  gif_search_username?: string;
  venue_search_username?: string;
  img_search_username?: string;
  static_maps_provider?: string;
  caption_length_max: number;
  message_length_max: number;
  webfile_dc_id: number;
  suggested_lang_code?: string;
  lang_pack_version?: number;
  base_lang_pack_version?: number;
  reactions_default?: Reaction;
  autologin_token?: string;
}

export interface $NearestDc {
  _: "nearestDc";
  country: string;
  this_dc: number;
  nearest_dc: number;
}

export interface $Help$AppUpdate {
  _: "help.appUpdate";
  flags?: Number;
  can_not_skip?: True;
  id: number;
  version: string;
  text: string;
  entities: MessageEntity;
  document?: Document;
  url?: string;
  sticker?: Document;
}

export interface $Help$NoAppUpdate {
  _: "help.noAppUpdate";
}

export interface $Help$InviteText {
  _: "help.inviteText";
  message: string;
}

export interface $UpdateNewEncryptedMessage {
  _: "updateNewEncryptedMessage";
  message: EncryptedMessage;
  qts: number;
}

export interface $UpdateEncryptedChatTyping {
  _: "updateEncryptedChatTyping";
  chat_id: number;
}

export interface $UpdateEncryption {
  _: "updateEncryption";
  chat: EncryptedChat;
  date: number;
}

export interface $UpdateEncryptedMessagesRead {
  _: "updateEncryptedMessagesRead";
  chat_id: number;
  max_date: number;
  date: number;
}

export interface $EncryptedChatEmpty {
  _: "encryptedChatEmpty";
  id: number;
}

export interface $EncryptedChatWaiting {
  _: "encryptedChatWaiting";
  id: number;
  access_hash: number;
  date: number;
  admin_id: number;
  participant_id: number;
}

export interface $EncryptedChatRequested {
  _: "encryptedChatRequested";
  flags?: Number;
  folder_id?: number;
  id: number;
  access_hash: number;
  date: number;
  admin_id: number;
  participant_id: number;
  g_a: Uint8Array;
}

export interface $EncryptedChat {
  _: "encryptedChat";
  id: number;
  access_hash: number;
  date: number;
  admin_id: number;
  participant_id: number;
  g_a_or_b: Uint8Array;
  key_fingerprint: number;
}

export interface $EncryptedChatDiscarded {
  _: "encryptedChatDiscarded";
  flags?: Number;
  history_deleted?: True;
  id: number;
}

export interface $InputEncryptedChat {
  _: "inputEncryptedChat";
  chat_id: number;
  access_hash: number;
}

export interface $EncryptedFileEmpty {
  _: "encryptedFileEmpty";
}

export interface $EncryptedFile {
  _: "encryptedFile";
  id: number;
  access_hash: number;
  size: number;
  dc_id: number;
  key_fingerprint: number;
}

export interface $InputEncryptedFileEmpty {
  _: "inputEncryptedFileEmpty";
}

export interface $InputEncryptedFileUploaded {
  _: "inputEncryptedFileUploaded";
  id: number;
  parts: number;
  md5_checksum: string;
  key_fingerprint: number;
}

export interface $InputEncryptedFile {
  _: "inputEncryptedFile";
  id: number;
  access_hash: number;
}

export interface $InputEncryptedFileLocation {
  _: "inputEncryptedFileLocation";
  id: number;
  access_hash: number;
}

export interface $EncryptedMessage {
  _: "encryptedMessage";
  random_id: number;
  chat_id: number;
  date: number;
  bytes: Uint8Array;
  file: EncryptedFile;
}

export interface $EncryptedMessageService {
  _: "encryptedMessageService";
  random_id: number;
  chat_id: number;
  date: number;
  bytes: Uint8Array;
}

export interface $Messages$DhConfigNotModified {
  _: "messages.dhConfigNotModified";
  random: Uint8Array;
}

export interface $Messages$DhConfig {
  _: "messages.dhConfig";
  g: number;
  p: Uint8Array;
  version: number;
  random: Uint8Array;
}

export interface $Messages$SentEncryptedMessage {
  _: "messages.sentEncryptedMessage";
  date: number;
}

export interface $Messages$SentEncryptedFile {
  _: "messages.sentEncryptedFile";
  date: number;
  file: EncryptedFile;
}

export interface $InputFileBig {
  _: "inputFileBig";
  id: number;
  parts: number;
  name: string;
}

export interface $InputEncryptedFileBigUploaded {
  _: "inputEncryptedFileBigUploaded";
  id: number;
  parts: number;
  key_fingerprint: number;
}

export interface $UpdateChatParticipantAdd {
  _: "updateChatParticipantAdd";
  chat_id: number;
  user_id: number;
  inviter_id: number;
  date: number;
  version: number;
}

export interface $UpdateChatParticipantDelete {
  _: "updateChatParticipantDelete";
  chat_id: number;
  user_id: number;
  version: number;
}

export interface $UpdateDcOptions {
  _: "updateDcOptions";
  dc_options: DcOption;
}

export interface $InputMediaUploadedDocument {
  _: "inputMediaUploadedDocument";
  flags?: Number;
  nosound_video?: True;
  force_file?: True;
  spoiler?: True;
  file: InputFile;
  thumb?: InputFile;
  mime_type: string;
  attributes: DocumentAttribute;
  stickers?: InputDocument;
  ttl_seconds?: number;
}

export interface $InputMediaDocument {
  _: "inputMediaDocument";
  flags?: Number;
  spoiler?: True;
  id: InputDocument;
  ttl_seconds?: number;
  query?: string;
}

export interface $MessageMediaDocument {
  _: "messageMediaDocument";
  flags?: Number;
  nopremium?: True;
  spoiler?: True;
  document?: Document;
  ttl_seconds?: number;
}

export interface $InputDocumentEmpty {
  _: "inputDocumentEmpty";
}

export interface $InputDocument {
  _: "inputDocument";
  id: number;
  access_hash: number;
  file_reference: Uint8Array;
}

export interface $InputDocumentFileLocation {
  _: "inputDocumentFileLocation";
  id: number;
  access_hash: number;
  file_reference: Uint8Array;
  thumb_size: string;
}

export interface $DocumentEmpty {
  _: "documentEmpty";
  id: number;
}

export interface $Document {
  _: "document";
  flags?: Number;
  id: number;
  access_hash: number;
  file_reference: Uint8Array;
  date: number;
  mime_type: string;
  size: number;
  thumbs?: PhotoSize;
  video_thumbs?: VideoSize;
  dc_id: number;
  attributes: DocumentAttribute;
}

export interface $Help$Support {
  _: "help.support";
  phone_number: string;
  user: User;
}

export interface $NotifyPeer {
  _: "notifyPeer";
  peer: Peer;
}

export interface $NotifyUsers {
  _: "notifyUsers";
}

export interface $NotifyChats {
  _: "notifyChats";
}

export interface $UpdateNotifySettings {
  _: "updateNotifySettings";
  peer: NotifyPeer;
  notify_settings: PeerNotifySettings;
}

export interface $SendMessageTypingAction {
  _: "sendMessageTypingAction";
}

export interface $SendMessageCancelAction {
  _: "sendMessageCancelAction";
}

export interface $SendMessageRecordVideoAction {
  _: "sendMessageRecordVideoAction";
}

export interface $SendMessageUploadVideoAction {
  _: "sendMessageUploadVideoAction";
  progress: number;
}

export interface $SendMessageRecordAudioAction {
  _: "sendMessageRecordAudioAction";
}

export interface $SendMessageUploadAudioAction {
  _: "sendMessageUploadAudioAction";
  progress: number;
}

export interface $SendMessageUploadPhotoAction {
  _: "sendMessageUploadPhotoAction";
  progress: number;
}

export interface $SendMessageUploadDocumentAction {
  _: "sendMessageUploadDocumentAction";
  progress: number;
}

export interface $SendMessageGeoLocationAction {
  _: "sendMessageGeoLocationAction";
}

export interface $SendMessageChooseContactAction {
  _: "sendMessageChooseContactAction";
}

export interface $Contacts$Found {
  _: "contacts.found";
  my_results: Peer;
  results: Peer;
  chats: Chat;
  users: User;
}

export interface $UpdateServiceNotification {
  _: "updateServiceNotification";
  flags?: Number;
  popup?: True;
  inbox_date?: number;
  type: string;
  message: string;
  media: MessageMedia;
  entities: MessageEntity;
}

export interface $UserStatusRecently {
  _: "userStatusRecently";
}

export interface $UserStatusLastWeek {
  _: "userStatusLastWeek";
}

export interface $UserStatusLastMonth {
  _: "userStatusLastMonth";
}

export interface $UpdatePrivacy {
  _: "updatePrivacy";
  key: PrivacyKey;
  rules: PrivacyRule;
}

export interface $InputPrivacyKeyStatusTimestamp {
  _: "inputPrivacyKeyStatusTimestamp";
}

export interface $PrivacyKeyStatusTimestamp {
  _: "privacyKeyStatusTimestamp";
}

export interface $InputPrivacyValueAllowContacts {
  _: "inputPrivacyValueAllowContacts";
}

export interface $InputPrivacyValueAllowAll {
  _: "inputPrivacyValueAllowAll";
}

export interface $InputPrivacyValueAllowUsers {
  _: "inputPrivacyValueAllowUsers";
  users: InputUser;
}

export interface $InputPrivacyValueDisallowContacts {
  _: "inputPrivacyValueDisallowContacts";
}

export interface $InputPrivacyValueDisallowAll {
  _: "inputPrivacyValueDisallowAll";
}

export interface $InputPrivacyValueDisallowUsers {
  _: "inputPrivacyValueDisallowUsers";
  users: InputUser;
}

export interface $PrivacyValueAllowContacts {
  _: "privacyValueAllowContacts";
}

export interface $PrivacyValueAllowAll {
  _: "privacyValueAllowAll";
}

export interface $PrivacyValueAllowUsers {
  _: "privacyValueAllowUsers";
  users: number[];
}

export interface $PrivacyValueDisallowContacts {
  _: "privacyValueDisallowContacts";
}

export interface $PrivacyValueDisallowAll {
  _: "privacyValueDisallowAll";
}

export interface $PrivacyValueDisallowUsers {
  _: "privacyValueDisallowUsers";
  users: number[];
}

export interface $Account$PrivacyRules {
  _: "account.privacyRules";
  rules: PrivacyRule;
  chats: Chat;
  users: User;
}

export interface $AccountDaysTTL {
  _: "accountDaysTTL";
  days: number;
}

export interface $UpdateUserPhone {
  _: "updateUserPhone";
  user_id: number;
  phone: string;
}

export interface $DocumentAttributeImageSize {
  _: "documentAttributeImageSize";
  w: number;
  h: number;
}

export interface $DocumentAttributeAnimated {
  _: "documentAttributeAnimated";
}

export interface $DocumentAttributeSticker {
  _: "documentAttributeSticker";
  flags?: Number;
  mask?: True;
  alt: string;
  stickerset: InputStickerSet;
  mask_coords?: MaskCoords;
}

export interface $DocumentAttributeVideo {
  _: "documentAttributeVideo";
  flags?: Number;
  round_message?: True;
  supports_streaming?: True;
  duration: number;
  w: number;
  h: number;
}

export interface $DocumentAttributeAudio {
  _: "documentAttributeAudio";
  flags?: Number;
  voice?: True;
  duration: number;
  title?: string;
  performer?: string;
  waveform?: Uint8Array;
}

export interface $DocumentAttributeFilename {
  _: "documentAttributeFilename";
  file_name: string;
}

export interface $Messages$StickersNotModified {
  _: "messages.stickersNotModified";
}

export interface $Messages$Stickers {
  _: "messages.stickers";
  hash: number;
  stickers: Document;
}

export interface $StickerPack {
  _: "stickerPack";
  emoticon: string;
  documents: number[];
}

export interface $Messages$AllStickersNotModified {
  _: "messages.allStickersNotModified";
}

export interface $Messages$AllStickers {
  _: "messages.allStickers";
  hash: number;
  sets: StickerSet;
}

export interface $UpdateReadHistoryInbox {
  _: "updateReadHistoryInbox";
  flags?: Number;
  folder_id?: number;
  peer: Peer;
  max_id: number;
  still_unread_count: number;
  pts: number;
  pts_count: number;
}

export interface $UpdateReadHistoryOutbox {
  _: "updateReadHistoryOutbox";
  peer: Peer;
  max_id: number;
  pts: number;
  pts_count: number;
}

export interface $Messages$AffectedMessages {
  _: "messages.affectedMessages";
  pts: number;
  pts_count: number;
}

export interface $UpdateWebPage {
  _: "updateWebPage";
  webpage: WebPage;
  pts: number;
  pts_count: number;
}

export interface $WebPageEmpty {
  _: "webPageEmpty";
  id: number;
}

export interface $WebPagePending {
  _: "webPagePending";
  id: number;
  date: number;
}

export interface $WebPage {
  _: "webPage";
  flags?: Number;
  id: number;
  url: string;
  display_url: string;
  hash: number;
  type?: string;
  site_name?: string;
  title?: string;
  description?: string;
  photo?: Photo;
  embed_url?: string;
  embed_type?: string;
  embed_width?: number;
  embed_height?: number;
  duration?: number;
  author?: string;
  document?: Document;
  cached_page?: Page;
  attributes?: WebPageAttribute;
}

export interface $MessageMediaWebPage {
  _: "messageMediaWebPage";
  webpage: WebPage;
}

export interface $Authorization {
  _: "authorization";
  flags?: Number;
  current?: True;
  official_app?: True;
  password_pending?: True;
  encrypted_requests_disabled?: True;
  call_requests_disabled?: True;
  hash: number;
  device_model: string;
  platform: string;
  system_version: string;
  api_id: number;
  app_name: string;
  app_version: string;
  date_created: number;
  date_active: number;
  ip: string;
  country: string;
  region: string;
}

export interface $Account$Authorizations {
  _: "account.authorizations";
  authorization_ttl_days: number;
  authorizations: Authorization;
}

export interface $Account$Password {
  _: "account.password";
  flags?: Number;
  has_recovery?: True;
  has_secure_values?: True;
  has_password?: True;
  current_algo?: PasswordKdfAlgo;
  srp_B?: Uint8Array;
  srp_id?: number;
  hint?: string;
  email_unconfirmed_pattern?: string;
  new_algo: PasswordKdfAlgo;
  new_secure_algo: SecurePasswordKdfAlgo;
  secure_random: Uint8Array;
  pending_reset_date?: number;
  login_email_pattern?: string;
}

export interface $Account$PasswordSettings {
  _: "account.passwordSettings";
  flags?: Number;
  email?: string;
  secure_settings?: SecureSecretSettings;
}

export interface $Account$PasswordInputSettings {
  _: "account.passwordInputSettings";
  flags?: Number;
  new_algo?: PasswordKdfAlgo;
  new_password_hash?: Uint8Array;
  hint?: string;
  email?: string;
  new_secure_settings?: SecureSecretSettings;
}

export interface $Auth$PasswordRecovery {
  _: "auth.passwordRecovery";
  email_pattern: string;
}

export interface $InputMediaVenue {
  _: "inputMediaVenue";
  geo_point: InputGeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
}

export interface $MessageMediaVenue {
  _: "messageMediaVenue";
  geo: GeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
}

export interface $ReceivedNotifyMessage {
  _: "receivedNotifyMessage";
  id: number;
  flags: number;
}

export interface $ChatInviteExported {
  _: "chatInviteExported";
  flags?: Number;
  revoked?: True;
  permanent?: True;
  request_needed?: True;
  link: string;
  admin_id: number;
  date: number;
  start_date?: number;
  expire_date?: number;
  usage_limit?: number;
  usage?: number;
  requested?: number;
  title?: string;
}

export interface $ChatInviteAlready {
  _: "chatInviteAlready";
  chat: Chat;
}

export interface $ChatInvite {
  _: "chatInvite";
  flags?: Number;
  channel?: True;
  broadcast?: True;
  public?: True;
  megagroup?: True;
  request_needed?: True;
  title: string;
  about?: string;
  photo: Photo;
  participants_count: number;
  participants?: User;
}

export interface $MessageActionChatJoinedByLink {
  _: "messageActionChatJoinedByLink";
  inviter_id: number;
}

export interface $UpdateReadMessagesContents {
  _: "updateReadMessagesContents";
  messages: number[];
  pts: number;
  pts_count: number;
}

export interface $InputStickerSetEmpty {
  _: "inputStickerSetEmpty";
}

export interface $InputStickerSetID {
  _: "inputStickerSetID";
  id: number;
  access_hash: number;
}

export interface $InputStickerSetShortName {
  _: "inputStickerSetShortName";
  short_name: string;
}

export interface $StickerSet {
  _: "stickerSet";
  flags?: Number;
  archived?: True;
  official?: True;
  masks?: True;
  animated?: True;
  videos?: True;
  emojis?: True;
  installed_date?: number;
  id: number;
  access_hash: number;
  title: string;
  short_name: string;
  thumbs?: PhotoSize;
  thumb_dc_id?: number;
  thumb_version?: number;
  thumb_document_id?: number;
  count: number;
  hash: number;
}

export interface $Messages$StickerSet {
  _: "messages.stickerSet";
  set: StickerSet;
  packs: StickerPack;
  keywords: StickerKeyword;
  documents: Document;
}

export interface $User {
  _: "user";
  flags?: Number;
  self?: True;
  contact?: True;
  mutual_contact?: True;
  deleted?: True;
  bot?: True;
  bot_chat_history?: True;
  bot_nochats?: True;
  verified?: True;
  restricted?: True;
  min?: True;
  bot_inline_geo?: True;
  support?: True;
  scam?: True;
  apply_min_photo?: True;
  fake?: True;
  bot_attach_menu?: True;
  premium?: True;
  attach_menu_enabled?: True;
  flags2?: Number;
  bot_can_edit?: True;
  id: number;
  access_hash?: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  phone?: string;
  photo?: UserProfilePhoto;
  status?: UserStatus;
  bot_info_version?: number;
  restriction_reason?: RestrictionReason;
  bot_inline_placeholder?: string;
  lang_code?: string;
  emoji_status?: EmojiStatus;
  usernames?: Username;
}

export interface $BotCommand {
  _: "botCommand";
  command: string;
  description: string;
}

export interface $BotInfo {
  _: "botInfo";
  flags?: Number;
  user_id?: number;
  description?: string;
  description_photo?: Photo;
  description_document?: Document;
  commands?: BotCommand;
  menu_button?: BotMenuButton;
}

export interface $KeyboardButton {
  _: "keyboardButton";
  text: string;
}

export interface $KeyboardButtonRow {
  _: "keyboardButtonRow";
  buttons: KeyboardButton;
}

export interface $ReplyKeyboardHide {
  _: "replyKeyboardHide";
  flags?: Number;
  selective?: True;
}

export interface $ReplyKeyboardForceReply {
  _: "replyKeyboardForceReply";
  flags?: Number;
  single_use?: True;
  selective?: True;
  placeholder?: string;
}

export interface $ReplyKeyboardMarkup {
  _: "replyKeyboardMarkup";
  flags?: Number;
  resize?: True;
  single_use?: True;
  selective?: True;
  persistent?: True;
  rows: KeyboardButtonRow;
  placeholder?: string;
}

export interface $InputPeerUser {
  _: "inputPeerUser";
  user_id: number;
  access_hash: number;
}

export interface $InputUser {
  _: "inputUser";
  user_id: number;
  access_hash: number;
}

export interface $MessageEntityUnknown {
  _: "messageEntityUnknown";
  offset: number;
  length: number;
}

export interface $MessageEntityMention {
  _: "messageEntityMention";
  offset: number;
  length: number;
}

export interface $MessageEntityHashtag {
  _: "messageEntityHashtag";
  offset: number;
  length: number;
}

export interface $MessageEntityBotCommand {
  _: "messageEntityBotCommand";
  offset: number;
  length: number;
}

export interface $MessageEntityUrl {
  _: "messageEntityUrl";
  offset: number;
  length: number;
}

export interface $MessageEntityEmail {
  _: "messageEntityEmail";
  offset: number;
  length: number;
}

export interface $MessageEntityBold {
  _: "messageEntityBold";
  offset: number;
  length: number;
}

export interface $MessageEntityItalic {
  _: "messageEntityItalic";
  offset: number;
  length: number;
}

export interface $MessageEntityCode {
  _: "messageEntityCode";
  offset: number;
  length: number;
}

export interface $MessageEntityPre {
  _: "messageEntityPre";
  offset: number;
  length: number;
  language: string;
}

export interface $MessageEntityTextUrl {
  _: "messageEntityTextUrl";
  offset: number;
  length: number;
  url: string;
}

export interface $UpdateShortSentMessage {
  _: "updateShortSentMessage";
  flags?: Number;
  out?: True;
  id: number;
  pts: number;
  pts_count: number;
  date: number;
  media?: MessageMedia;
  entities?: MessageEntity;
  ttl_period?: number;
}

export interface $InputChannelEmpty {
  _: "inputChannelEmpty";
}

export interface $InputChannel {
  _: "inputChannel";
  channel_id: number;
  access_hash: number;
}

export interface $PeerChannel {
  _: "peerChannel";
  channel_id: number;
}

export interface $InputPeerChannel {
  _: "inputPeerChannel";
  channel_id: number;
  access_hash: number;
}

export interface $Channel {
  _: "channel";
  flags?: Number;
  creator?: True;
  left?: True;
  broadcast?: True;
  verified?: True;
  megagroup?: True;
  restricted?: True;
  signatures?: True;
  min?: True;
  scam?: True;
  has_link?: True;
  has_geo?: True;
  slowmode_enabled?: True;
  call_active?: True;
  call_not_empty?: True;
  fake?: True;
  gigagroup?: True;
  noforwards?: True;
  join_to_send?: True;
  join_request?: True;
  forum?: True;
  flags2?: Number;
  id: number;
  access_hash?: number;
  title: string;
  username?: string;
  photo: ChatPhoto;
  date: number;
  restriction_reason?: RestrictionReason;
  admin_rights?: ChatAdminRights;
  banned_rights?: ChatBannedRights;
  default_banned_rights?: ChatBannedRights;
  participants_count?: number;
  usernames?: Username;
}

export interface $ChannelForbidden {
  _: "channelForbidden";
  flags?: Number;
  broadcast?: True;
  megagroup?: True;
  id: number;
  access_hash: number;
  title: string;
  until_date?: number;
}

export interface $Contacts$ResolvedPeer {
  _: "contacts.resolvedPeer";
  peer: Peer;
  chats: Chat;
  users: User;
}

export interface $ChannelFull {
  _: "channelFull";
  flags?: Number;
  can_view_participants?: True;
  can_set_username?: True;
  can_set_stickers?: True;
  hidden_prehistory?: True;
  can_set_location?: True;
  has_scheduled?: True;
  can_view_stats?: True;
  blocked?: True;
  flags2?: Number;
  can_delete_channel?: True;
  antispam?: True;
  participants_hidden?: True;
  translations_disabled?: True;
  id: number;
  about: string;
  participants_count?: number;
  admins_count?: number;
  kicked_count?: number;
  banned_count?: number;
  online_count?: number;
  read_inbox_max_id: number;
  read_outbox_max_id: number;
  unread_count: number;
  chat_photo: Photo;
  notify_settings: PeerNotifySettings;
  exported_invite?: ExportedChatInvite;
  bot_info: BotInfo;
  migrated_from_chat_id?: number;
  migrated_from_max_id?: number;
  pinned_msg_id?: number;
  stickerset?: StickerSet;
  available_min_id?: number;
  folder_id?: number;
  linked_chat_id?: number;
  location?: ChannelLocation;
  slowmode_seconds?: number;
  slowmode_next_send_date?: number;
  stats_dc?: number;
  pts: number;
  call?: InputGroupCall;
  ttl_period?: number;
  pending_suggestions?: string[];
  groupcall_default_join_as?: Peer;
  theme_emoticon?: string;
  requests_pending?: number;
  recent_requesters?: number[];
  default_send_as?: Peer;
  available_reactions?: ChatReactions;
}

export interface $MessageRange {
  _: "messageRange";
  min_id: number;
  max_id: number;
}

export interface $Messages$ChannelMessages {
  _: "messages.channelMessages";
  flags?: Number;
  inexact?: True;
  pts: number;
  count: number;
  offset_id_offset?: number;
  messages: Message;
  topics: ForumTopic;
  chats: Chat;
  users: User;
}

export interface $MessageActionChannelCreate {
  _: "messageActionChannelCreate";
  title: string;
}

export interface $UpdateChannelTooLong {
  _: "updateChannelTooLong";
  flags?: Number;
  channel_id: number;
  pts?: number;
}

export interface $UpdateChannel {
  _: "updateChannel";
  channel_id: number;
}

export interface $UpdateNewChannelMessage {
  _: "updateNewChannelMessage";
  message: Message;
  pts: number;
  pts_count: number;
}

export interface $UpdateReadChannelInbox {
  _: "updateReadChannelInbox";
  flags?: Number;
  folder_id?: number;
  channel_id: number;
  max_id: number;
  still_unread_count: number;
  pts: number;
}

export interface $UpdateDeleteChannelMessages {
  _: "updateDeleteChannelMessages";
  channel_id: number;
  messages: number[];
  pts: number;
  pts_count: number;
}

export interface $UpdateChannelMessageViews {
  _: "updateChannelMessageViews";
  channel_id: number;
  id: number;
  views: number;
}

export interface $Updates$ChannelDifferenceEmpty {
  _: "updates.channelDifferenceEmpty";
  flags?: Number;
  final?: True;
  pts: number;
  timeout?: number;
}

export interface $Updates$ChannelDifferenceTooLong {
  _: "updates.channelDifferenceTooLong";
  flags?: Number;
  final?: True;
  timeout?: number;
  dialog: Dialog;
  messages: Message;
  chats: Chat;
  users: User;
}

export interface $Updates$ChannelDifference {
  _: "updates.channelDifference";
  flags?: Number;
  final?: True;
  pts: number;
  timeout?: number;
  new_messages: Message;
  other_updates: Update;
  chats: Chat;
  users: User;
}

export interface $ChannelMessagesFilterEmpty {
  _: "channelMessagesFilterEmpty";
}

export interface $ChannelMessagesFilter {
  _: "channelMessagesFilter";
  flags?: Number;
  exclude_new_messages?: True;
  ranges: MessageRange;
}

export interface $ChannelParticipant {
  _: "channelParticipant";
  user_id: number;
  date: number;
}

export interface $ChannelParticipantSelf {
  _: "channelParticipantSelf";
  flags?: Number;
  via_request?: True;
  user_id: number;
  inviter_id: number;
  date: number;
}

export interface $ChannelParticipantCreator {
  _: "channelParticipantCreator";
  flags?: Number;
  user_id: number;
  admin_rights: ChatAdminRights;
  rank?: string;
}

export interface $ChannelParticipantsRecent {
  _: "channelParticipantsRecent";
}

export interface $ChannelParticipantsAdmins {
  _: "channelParticipantsAdmins";
}

export interface $ChannelParticipantsKicked {
  _: "channelParticipantsKicked";
  q: string;
}

export interface $Channels$ChannelParticipants {
  _: "channels.channelParticipants";
  count: number;
  participants: ChannelParticipant;
  chats: Chat;
  users: User;
}

export interface $Channels$ChannelParticipant {
  _: "channels.channelParticipant";
  participant: ChannelParticipant;
  chats: Chat;
  users: User;
}

export interface $ChatParticipantCreator {
  _: "chatParticipantCreator";
  user_id: number;
}

export interface $ChatParticipantAdmin {
  _: "chatParticipantAdmin";
  user_id: number;
  inviter_id: number;
  date: number;
}

export interface $UpdateChatParticipantAdmin {
  _: "updateChatParticipantAdmin";
  chat_id: number;
  user_id: number;
  is_admin: Bool;
  version: number;
}

export interface $MessageActionChatMigrateTo {
  _: "messageActionChatMigrateTo";
  channel_id: number;
}

export interface $MessageActionChannelMigrateFrom {
  _: "messageActionChannelMigrateFrom";
  title: string;
  chat_id: number;
}

export interface $ChannelParticipantsBots {
  _: "channelParticipantsBots";
}

export interface $Help$TermsOfService {
  _: "help.termsOfService";
  flags?: Number;
  popup?: True;
  id: DataJSON;
  text: string;
  entities: MessageEntity;
  min_age_confirm?: number;
}

export interface $UpdateNewStickerSet {
  _: "updateNewStickerSet";
  stickerset: Messages$StickerSet;
}

export interface $UpdateStickerSetsOrder {
  _: "updateStickerSetsOrder";
  flags?: Number;
  masks?: True;
  emojis?: True;
  order: number[];
}

export interface $UpdateStickerSets {
  _: "updateStickerSets";
  flags?: Number;
  masks?: True;
  emojis?: True;
}

export interface $Messages$SavedGifsNotModified {
  _: "messages.savedGifsNotModified";
}

export interface $Messages$SavedGifs {
  _: "messages.savedGifs";
  hash: number;
  gifs: Document;
}

export interface $UpdateSavedGifs {
  _: "updateSavedGifs";
}

export interface $InputBotInlineMessageMediaAuto {
  _: "inputBotInlineMessageMediaAuto";
  flags?: Number;
  message: string;
  entities?: MessageEntity;
  reply_markup?: ReplyMarkup;
}

export interface $InputBotInlineMessageText {
  _: "inputBotInlineMessageText";
  flags?: Number;
  no_webpage?: True;
  message: string;
  entities?: MessageEntity;
  reply_markup?: ReplyMarkup;
}

export interface $InputBotInlineResult {
  _: "inputBotInlineResult";
  flags?: Number;
  id: string;
  type: string;
  title?: string;
  description?: string;
  url?: string;
  thumb?: InputWebDocument;
  content?: InputWebDocument;
  send_message: InputBotInlineMessage;
}

export interface $BotInlineMessageMediaAuto {
  _: "botInlineMessageMediaAuto";
  flags?: Number;
  message: string;
  entities?: MessageEntity;
  reply_markup?: ReplyMarkup;
}

export interface $BotInlineMessageText {
  _: "botInlineMessageText";
  flags?: Number;
  no_webpage?: True;
  message: string;
  entities?: MessageEntity;
  reply_markup?: ReplyMarkup;
}

export interface $BotInlineResult {
  _: "botInlineResult";
  flags?: Number;
  id: string;
  type: string;
  title?: string;
  description?: string;
  url?: string;
  thumb?: WebDocument;
  content?: WebDocument;
  send_message: BotInlineMessage;
}

export interface $Messages$BotResults {
  _: "messages.botResults";
  flags?: Number;
  gallery?: True;
  query_id: number;
  next_offset?: string;
  switch_pm?: InlineBotSwitchPM;
  switch_webview?: InlineBotWebView;
  results: BotInlineResult;
  cache_time: number;
  users: User;
}

export interface $UpdateBotInlineQuery {
  _: "updateBotInlineQuery";
  flags?: Number;
  query_id: number;
  user_id: number;
  query: string;
  geo?: GeoPoint;
  peer_type?: InlineQueryPeerType;
  offset: string;
}

export interface $UpdateBotInlineSend {
  _: "updateBotInlineSend";
  flags?: Number;
  user_id: number;
  query: string;
  geo?: GeoPoint;
  id: string;
  msg_id?: InputBotInlineMessageID;
}

export interface $InputMessagesFilterVoice {
  _: "inputMessagesFilterVoice";
}

export interface $InputMessagesFilterMusic {
  _: "inputMessagesFilterMusic";
}

export interface $InputPrivacyKeyChatInvite {
  _: "inputPrivacyKeyChatInvite";
}

export interface $PrivacyKeyChatInvite {
  _: "privacyKeyChatInvite";
}

export interface $ExportedMessageLink {
  _: "exportedMessageLink";
  link: string;
  html: string;
}

export interface $MessageFwdHeader {
  _: "messageFwdHeader";
  flags?: Number;
  imported?: True;
  from_id?: Peer;
  from_name?: string;
  date: number;
  channel_post?: number;
  post_author?: string;
  saved_from_peer?: Peer;
  saved_from_msg_id?: number;
  psa_type?: string;
}

export interface $UpdateEditChannelMessage {
  _: "updateEditChannelMessage";
  message: Message;
  pts: number;
  pts_count: number;
}

export interface $MessageActionPinMessage {
  _: "messageActionPinMessage";
}

export interface $Auth$CodeTypeSms {
  _: "auth.codeTypeSms";
}

export interface $Auth$CodeTypeCall {
  _: "auth.codeTypeCall";
}

export interface $Auth$CodeTypeFlashCall {
  _: "auth.codeTypeFlashCall";
}

export interface $Auth$SentCodeTypeApp {
  _: "auth.sentCodeTypeApp";
  length: number;
}

export interface $Auth$SentCodeTypeSms {
  _: "auth.sentCodeTypeSms";
  length: number;
}

export interface $Auth$SentCodeTypeCall {
  _: "auth.sentCodeTypeCall";
  length: number;
}

export interface $Auth$SentCodeTypeFlashCall {
  _: "auth.sentCodeTypeFlashCall";
  pattern: string;
}

export interface $KeyboardButtonUrl {
  _: "keyboardButtonUrl";
  text: string;
  url: string;
}

export interface $KeyboardButtonCallback {
  _: "keyboardButtonCallback";
  flags?: Number;
  requires_password?: True;
  text: string;
  data: Uint8Array;
}

export interface $KeyboardButtonRequestPhone {
  _: "keyboardButtonRequestPhone";
  text: string;
}

export interface $KeyboardButtonRequestGeoLocation {
  _: "keyboardButtonRequestGeoLocation";
  text: string;
}

export interface $KeyboardButtonSwitchInline {
  _: "keyboardButtonSwitchInline";
  flags?: Number;
  same_peer?: True;
  text: string;
  query: string;
  peer_types?: InlineQueryPeerType;
}

export interface $ReplyInlineMarkup {
  _: "replyInlineMarkup";
  rows: KeyboardButtonRow;
}

export interface $Messages$BotCallbackAnswer {
  _: "messages.botCallbackAnswer";
  flags?: Number;
  alert?: True;
  has_url?: True;
  native_ui?: True;
  message?: string;
  url?: string;
  cache_time: number;
}

export interface $UpdateBotCallbackQuery {
  _: "updateBotCallbackQuery";
  flags?: Number;
  query_id: number;
  user_id: number;
  peer: Peer;
  msg_id: number;
  chat_instance: number;
  data?: Uint8Array;
  game_short_name?: string;
}

export interface $Messages$MessageEditData {
  _: "messages.messageEditData";
  flags?: Number;
  caption?: True;
}

export interface $UpdateEditMessage {
  _: "updateEditMessage";
  message: Message;
  pts: number;
  pts_count: number;
}

export interface $InputBotInlineMessageMediaGeo {
  _: "inputBotInlineMessageMediaGeo";
  flags?: Number;
  geo_point: InputGeoPoint;
  heading?: number;
  period?: number;
  proximity_notification_radius?: number;
  reply_markup?: ReplyMarkup;
}

export interface $InputBotInlineMessageMediaVenue {
  _: "inputBotInlineMessageMediaVenue";
  flags?: Number;
  geo_point: InputGeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
  reply_markup?: ReplyMarkup;
}

export interface $InputBotInlineMessageMediaContact {
  _: "inputBotInlineMessageMediaContact";
  flags?: Number;
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
  reply_markup?: ReplyMarkup;
}

export interface $BotInlineMessageMediaGeo {
  _: "botInlineMessageMediaGeo";
  flags?: Number;
  geo: GeoPoint;
  heading?: number;
  period?: number;
  proximity_notification_radius?: number;
  reply_markup?: ReplyMarkup;
}

export interface $BotInlineMessageMediaVenue {
  _: "botInlineMessageMediaVenue";
  flags?: Number;
  geo: GeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
  reply_markup?: ReplyMarkup;
}

export interface $BotInlineMessageMediaContact {
  _: "botInlineMessageMediaContact";
  flags?: Number;
  phone_number: string;
  first_name: string;
  last_name: string;
  vcard: string;
  reply_markup?: ReplyMarkup;
}

export interface $InputBotInlineResultPhoto {
  _: "inputBotInlineResultPhoto";
  id: string;
  type: string;
  photo: InputPhoto;
  send_message: InputBotInlineMessage;
}

export interface $InputBotInlineResultDocument {
  _: "inputBotInlineResultDocument";
  flags?: Number;
  id: string;
  type: string;
  title?: string;
  description?: string;
  document: InputDocument;
  send_message: InputBotInlineMessage;
}

export interface $BotInlineMediaResult {
  _: "botInlineMediaResult";
  flags?: Number;
  id: string;
  type: string;
  photo?: Photo;
  document?: Document;
  title?: string;
  description?: string;
  send_message: BotInlineMessage;
}

export interface $InputBotInlineMessageID {
  _: "inputBotInlineMessageID";
  dc_id: number;
  id: number;
  access_hash: number;
}

export interface $UpdateInlineBotCallbackQuery {
  _: "updateInlineBotCallbackQuery";
  flags?: Number;
  query_id: number;
  user_id: number;
  msg_id: InputBotInlineMessageID;
  chat_instance: number;
  data?: Uint8Array;
  game_short_name?: string;
}

export interface $InlineBotSwitchPM {
  _: "inlineBotSwitchPM";
  text: string;
  start_param: string;
}

export interface $Messages$PeerDialogs {
  _: "messages.peerDialogs";
  dialogs: Dialog;
  messages: Message;
  chats: Chat;
  users: User;
  state: Updates$State;
}

export interface $TopPeer {
  _: "topPeer";
  peer: Peer;
  rating: number;
}

export interface $TopPeerCategoryBotsPM {
  _: "topPeerCategoryBotsPM";
}

export interface $TopPeerCategoryBotsInline {
  _: "topPeerCategoryBotsInline";
}

export interface $TopPeerCategoryCorrespondents {
  _: "topPeerCategoryCorrespondents";
}

export interface $TopPeerCategoryGroups {
  _: "topPeerCategoryGroups";
}

export interface $TopPeerCategoryChannels {
  _: "topPeerCategoryChannels";
}

export interface $TopPeerCategoryPeers {
  _: "topPeerCategoryPeers";
  category: TopPeerCategory;
  count: number;
  peers: TopPeer;
}

export interface $Contacts$TopPeersNotModified {
  _: "contacts.topPeersNotModified";
}

export interface $Contacts$TopPeers {
  _: "contacts.topPeers";
  categories: TopPeerCategoryPeers;
  chats: Chat;
  users: User;
}

export interface $MessageEntityMentionName {
  _: "messageEntityMentionName";
  offset: number;
  length: number;
  user_id: number;
}

export interface $InputMessageEntityMentionName {
  _: "inputMessageEntityMentionName";
  offset: number;
  length: number;
  user_id: InputUser;
}

export interface $InputMessagesFilterChatPhotos {
  _: "inputMessagesFilterChatPhotos";
}

export interface $UpdateReadChannelOutbox {
  _: "updateReadChannelOutbox";
  channel_id: number;
  max_id: number;
}

export interface $UpdateDraftMessage {
  _: "updateDraftMessage";
  flags?: Number;
  peer: Peer;
  top_msg_id?: number;
  draft: DraftMessage;
}

export interface $DraftMessageEmpty {
  _: "draftMessageEmpty";
  flags?: Number;
  date?: number;
}

export interface $DraftMessage {
  _: "draftMessage";
  flags?: Number;
  no_webpage?: True;
  reply_to_msg_id?: number;
  message: string;
  entities?: MessageEntity;
  date: number;
}

export interface $MessageActionHistoryClear {
  _: "messageActionHistoryClear";
}

export interface $Messages$FeaturedStickersNotModified {
  _: "messages.featuredStickersNotModified";
  count: number;
}

export interface $Messages$FeaturedStickers {
  _: "messages.featuredStickers";
  flags?: Number;
  premium?: True;
  hash: number;
  count: number;
  sets: StickerSetCovered;
  unread: number[];
}

export interface $UpdateReadFeaturedStickers {
  _: "updateReadFeaturedStickers";
}

export interface $Messages$RecentStickersNotModified {
  _: "messages.recentStickersNotModified";
}

export interface $Messages$RecentStickers {
  _: "messages.recentStickers";
  hash: number;
  packs: StickerPack;
  stickers: Document;
  dates: number[];
}

export interface $UpdateRecentStickers {
  _: "updateRecentStickers";
}

export interface $Messages$ArchivedStickers {
  _: "messages.archivedStickers";
  count: number;
  sets: StickerSetCovered;
}

export interface $Messages$StickerSetInstallResultSuccess {
  _: "messages.stickerSetInstallResultSuccess";
}

export interface $Messages$StickerSetInstallResultArchive {
  _: "messages.stickerSetInstallResultArchive";
  sets: StickerSetCovered;
}

export interface $StickerSetCovered {
  _: "stickerSetCovered";
  set: StickerSet;
  cover: Document;
}

export interface $UpdateConfig {
  _: "updateConfig";
}

export interface $UpdatePtsChanged {
  _: "updatePtsChanged";
}

export interface $InputMediaPhotoExternal {
  _: "inputMediaPhotoExternal";
  flags?: Number;
  spoiler?: True;
  url: string;
  ttl_seconds?: number;
}

export interface $InputMediaDocumentExternal {
  _: "inputMediaDocumentExternal";
  flags?: Number;
  spoiler?: True;
  url: string;
  ttl_seconds?: number;
}

export interface $StickerSetMultiCovered {
  _: "stickerSetMultiCovered";
  set: StickerSet;
  covers: Document;
}

export interface $MaskCoords {
  _: "maskCoords";
  n: number;
  x: number;
  y: number;
  zoom: number;
}

export interface $DocumentAttributeHasStickers {
  _: "documentAttributeHasStickers";
}

export interface $InputStickeredMediaPhoto {
  _: "inputStickeredMediaPhoto";
  id: InputPhoto;
}

export interface $InputStickeredMediaDocument {
  _: "inputStickeredMediaDocument";
  id: InputDocument;
}

export interface $Game {
  _: "game";
  flags?: Number;
  id: number;
  access_hash: number;
  short_name: string;
  title: string;
  description: string;
  photo: Photo;
  document?: Document;
}

export interface $InputBotInlineResultGame {
  _: "inputBotInlineResultGame";
  id: string;
  short_name: string;
  send_message: InputBotInlineMessage;
}

export interface $InputBotInlineMessageGame {
  _: "inputBotInlineMessageGame";
  flags?: Number;
  reply_markup?: ReplyMarkup;
}

export interface $MessageMediaGame {
  _: "messageMediaGame";
  game: Game;
}

export interface $InputMediaGame {
  _: "inputMediaGame";
  id: InputGame;
}

export interface $InputGameID {
  _: "inputGameID";
  id: number;
  access_hash: number;
}

export interface $InputGameShortName {
  _: "inputGameShortName";
  bot_id: InputUser;
  short_name: string;
}

export interface $KeyboardButtonGame {
  _: "keyboardButtonGame";
  text: string;
}

export interface $MessageActionGameScore {
  _: "messageActionGameScore";
  game_id: number;
  score: number;
}

export interface $HighScore {
  _: "highScore";
  pos: number;
  user_id: number;
  score: number;
}

export interface $Messages$HighScores {
  _: "messages.highScores";
  scores: HighScore;
  users: User;
}

export interface $Updates$DifferenceTooLong {
  _: "updates.differenceTooLong";
  pts: number;
}

export interface $UpdateChannelWebPage {
  _: "updateChannelWebPage";
  channel_id: number;
  webpage: WebPage;
  pts: number;
  pts_count: number;
}

export interface $Messages$ChatsSlice {
  _: "messages.chatsSlice";
  count: number;
  chats: Chat;
}

export interface $TextEmpty {
  _: "textEmpty";
}

export interface $TextPlain {
  _: "textPlain";
  text: string;
}

export interface $TextBold {
  _: "textBold";
  text: RichText;
}

export interface $TextItalic {
  _: "textItalic";
  text: RichText;
}

export interface $TextUnderline {
  _: "textUnderline";
  text: RichText;
}

export interface $TextStrike {
  _: "textStrike";
  text: RichText;
}

export interface $TextFixed {
  _: "textFixed";
  text: RichText;
}

export interface $TextUrl {
  _: "textUrl";
  text: RichText;
  url: string;
  webpage_id: number;
}

export interface $TextEmail {
  _: "textEmail";
  text: RichText;
  email: string;
}

export interface $TextConcat {
  _: "textConcat";
  texts: RichText;
}

export interface $PageBlockUnsupported {
  _: "pageBlockUnsupported";
}

export interface $PageBlockTitle {
  _: "pageBlockTitle";
  text: RichText;
}

export interface $PageBlockSubtitle {
  _: "pageBlockSubtitle";
  text: RichText;
}

export interface $PageBlockAuthorDate {
  _: "pageBlockAuthorDate";
  author: RichText;
  published_date: number;
}

export interface $PageBlockHeader {
  _: "pageBlockHeader";
  text: RichText;
}

export interface $PageBlockSubheader {
  _: "pageBlockSubheader";
  text: RichText;
}

export interface $PageBlockParagraph {
  _: "pageBlockParagraph";
  text: RichText;
}

export interface $PageBlockPreformatted {
  _: "pageBlockPreformatted";
  text: RichText;
  language: string;
}

export interface $PageBlockFooter {
  _: "pageBlockFooter";
  text: RichText;
}

export interface $PageBlockDivider {
  _: "pageBlockDivider";
}

export interface $PageBlockAnchor {
  _: "pageBlockAnchor";
  name: string;
}

export interface $PageBlockList {
  _: "pageBlockList";
  items: PageListItem;
}

export interface $PageBlockBlockquote {
  _: "pageBlockBlockquote";
  text: RichText;
  caption: RichText;
}

export interface $PageBlockPullquote {
  _: "pageBlockPullquote";
  text: RichText;
  caption: RichText;
}

export interface $PageBlockPhoto {
  _: "pageBlockPhoto";
  flags?: Number;
  photo_id: number;
  caption: PageCaption;
  url?: string;
  webpage_id?: number;
}

export interface $PageBlockVideo {
  _: "pageBlockVideo";
  flags?: Number;
  autoplay?: True;
  loop?: True;
  video_id: number;
  caption: PageCaption;
}

export interface $PageBlockCover {
  _: "pageBlockCover";
  cover: PageBlock;
}

export interface $PageBlockEmbed {
  _: "pageBlockEmbed";
  flags?: Number;
  full_width?: True;
  allow_scrolling?: True;
  url?: string;
  html?: string;
  poster_photo_id?: number;
  w?: number;
  h?: number;
  caption: PageCaption;
}

export interface $PageBlockEmbedPost {
  _: "pageBlockEmbedPost";
  url: string;
  webpage_id: number;
  author_photo_id: number;
  author: string;
  date: number;
  blocks: PageBlock;
  caption: PageCaption;
}

export interface $PageBlockCollage {
  _: "pageBlockCollage";
  items: PageBlock;
  caption: PageCaption;
}

export interface $PageBlockSlideshow {
  _: "pageBlockSlideshow";
  items: PageBlock;
  caption: PageCaption;
}

export interface $WebPageNotModified {
  _: "webPageNotModified";
  flags?: Number;
  cached_page_views?: number;
}

export interface $InputPrivacyKeyPhoneCall {
  _: "inputPrivacyKeyPhoneCall";
}

export interface $PrivacyKeyPhoneCall {
  _: "privacyKeyPhoneCall";
}

export interface $SendMessageGamePlayAction {
  _: "sendMessageGamePlayAction";
}

export interface $PhoneCallDiscardReasonMissed {
  _: "phoneCallDiscardReasonMissed";
}

export interface $PhoneCallDiscardReasonDisconnect {
  _: "phoneCallDiscardReasonDisconnect";
}

export interface $PhoneCallDiscardReasonHangup {
  _: "phoneCallDiscardReasonHangup";
}

export interface $PhoneCallDiscardReasonBusy {
  _: "phoneCallDiscardReasonBusy";
}

export interface $UpdateDialogPinned {
  _: "updateDialogPinned";
  flags?: Number;
  pinned?: True;
  folder_id?: number;
  peer: DialogPeer;
}

export interface $UpdatePinnedDialogs {
  _: "updatePinnedDialogs";
  flags?: Number;
  folder_id?: number;
  order?: DialogPeer;
}

export interface $DataJSON {
  _: "dataJSON";
  data: string;
}

export interface $UpdateBotWebhookJSON {
  _: "updateBotWebhookJSON";
  data: DataJSON;
}

export interface $UpdateBotWebhookJSONQuery {
  _: "updateBotWebhookJSONQuery";
  query_id: number;
  data: DataJSON;
  timeout: number;
}

export interface $LabeledPrice {
  _: "labeledPrice";
  label: string;
  amount: number;
}

export interface $Invoice {
  _: "invoice";
  flags?: Number;
  test?: True;
  name_requested?: True;
  phone_requested?: True;
  email_requested?: True;
  shipping_address_requested?: True;
  flexible?: True;
  phone_to_provider?: True;
  email_to_provider?: True;
  recurring?: True;
  currency: string;
  prices: LabeledPrice;
  max_tip_amount?: number;
  suggested_tip_amounts?: number[];
  recurring_terms_url?: string;
}

export interface $InputMediaInvoice {
  _: "inputMediaInvoice";
  flags?: Number;
  title: string;
  description: string;
  photo?: InputWebDocument;
  invoice: Invoice;
  payload: Uint8Array;
  provider: string;
  provider_data: DataJSON;
  start_param?: string;
  extended_media?: InputMedia;
}

export interface $PaymentCharge {
  _: "paymentCharge";
  id: string;
  provider_charge_id: string;
}

export interface $MessageActionPaymentSentMe {
  _: "messageActionPaymentSentMe";
  flags?: Number;
  recurring_init?: True;
  recurring_used?: True;
  currency: string;
  total_amount: number;
  payload: Uint8Array;
  info?: PaymentRequestedInfo;
  shipping_option_id?: string;
  charge: PaymentCharge;
}

export interface $MessageMediaInvoice {
  _: "messageMediaInvoice";
  flags?: Number;
  shipping_address_requested?: True;
  test?: True;
  title: string;
  description: string;
  photo?: WebDocument;
  receipt_msg_id?: number;
  currency: string;
  total_amount: number;
  start_param: string;
  extended_media?: MessageExtendedMedia;
}

export interface $PostAddress {
  _: "postAddress";
  street_line1: string;
  street_line2: string;
  city: string;
  state: string;
  country_iso2: string;
  post_code: string;
}

export interface $PaymentRequestedInfo {
  _: "paymentRequestedInfo";
  flags?: Number;
  name?: string;
  phone?: string;
  email?: string;
  shipping_address?: PostAddress;
}

export interface $KeyboardButtonBuy {
  _: "keyboardButtonBuy";
  text: string;
}

export interface $MessageActionPaymentSent {
  _: "messageActionPaymentSent";
  flags?: Number;
  recurring_init?: True;
  recurring_used?: True;
  currency: string;
  total_amount: number;
  invoice_slug?: string;
}

export interface $PaymentSavedCredentialsCard {
  _: "paymentSavedCredentialsCard";
  id: string;
  title: string;
}

export interface $WebDocument {
  _: "webDocument";
  url: string;
  access_hash: number;
  size: number;
  mime_type: string;
  attributes: DocumentAttribute;
}

export interface $InputWebDocument {
  _: "inputWebDocument";
  url: string;
  size: number;
  mime_type: string;
  attributes: DocumentAttribute;
}

export interface $InputWebFileLocation {
  _: "inputWebFileLocation";
  url: string;
  access_hash: number;
}

export interface $Upload$WebFile {
  _: "upload.webFile";
  size: number;
  mime_type: string;
  file_type: Storage$FileType;
  mtime: number;
  bytes: Uint8Array;
}

export interface $Payments$PaymentForm {
  _: "payments.paymentForm";
  flags?: Number;
  can_save_credentials?: True;
  password_missing?: True;
  form_id: number;
  bot_id: number;
  title: string;
  description: string;
  photo?: WebDocument;
  invoice: Invoice;
  provider_id: number;
  url: string;
  native_provider?: string;
  native_params?: DataJSON;
  additional_methods?: PaymentFormMethod;
  saved_info?: PaymentRequestedInfo;
  saved_credentials?: PaymentSavedCredentials;
  users: User;
}

export interface $Payments$ValidatedRequestedInfo {
  _: "payments.validatedRequestedInfo";
  flags?: Number;
  id?: string;
  shipping_options?: ShippingOption;
}

export interface $Payments$PaymentResult {
  _: "payments.paymentResult";
  updates: Updates;
}

export interface $Payments$PaymentReceipt {
  _: "payments.paymentReceipt";
  flags?: Number;
  date: number;
  bot_id: number;
  provider_id: number;
  title: string;
  description: string;
  photo?: WebDocument;
  invoice: Invoice;
  info?: PaymentRequestedInfo;
  shipping?: ShippingOption;
  tip_amount?: number;
  currency: string;
  total_amount: number;
  credentials_title: string;
  users: User;
}

export interface $Payments$SavedInfo {
  _: "payments.savedInfo";
  flags?: Number;
  has_saved_credentials?: True;
  saved_info?: PaymentRequestedInfo;
}

export interface $InputPaymentCredentialsSaved {
  _: "inputPaymentCredentialsSaved";
  id: string;
  tmp_password: Uint8Array;
}

export interface $InputPaymentCredentials {
  _: "inputPaymentCredentials";
  flags?: Number;
  save?: True;
  data: DataJSON;
}

export interface $Account$TmpPassword {
  _: "account.tmpPassword";
  tmp_password: Uint8Array;
  valid_until: number;
}

export interface $ShippingOption {
  _: "shippingOption";
  id: string;
  title: string;
  prices: LabeledPrice;
}

export interface $UpdateBotShippingQuery {
  _: "updateBotShippingQuery";
  query_id: number;
  user_id: number;
  payload: Uint8Array;
  shipping_address: PostAddress;
}

export interface $UpdateBotPrecheckoutQuery {
  _: "updateBotPrecheckoutQuery";
  flags?: Number;
  query_id: number;
  user_id: number;
  payload: Uint8Array;
  info?: PaymentRequestedInfo;
  shipping_option_id?: string;
  currency: string;
  total_amount: number;
}

export interface $InputStickerSetItem {
  _: "inputStickerSetItem";
  flags?: Number;
  document: InputDocument;
  emoji: string;
  mask_coords?: MaskCoords;
  keywords?: string;
}

export interface $UpdatePhoneCall {
  _: "updatePhoneCall";
  phone_call: PhoneCall;
}

export interface $InputPhoneCall {
  _: "inputPhoneCall";
  id: number;
  access_hash: number;
}

export interface $PhoneCallEmpty {
  _: "phoneCallEmpty";
  id: number;
}

export interface $PhoneCallWaiting {
  _: "phoneCallWaiting";
  flags?: Number;
  video?: True;
  id: number;
  access_hash: number;
  date: number;
  admin_id: number;
  participant_id: number;
  protocol: PhoneCallProtocol;
  receive_date?: number;
}

export interface $PhoneCallRequested {
  _: "phoneCallRequested";
  flags?: Number;
  video?: True;
  id: number;
  access_hash: number;
  date: number;
  admin_id: number;
  participant_id: number;
  g_a_hash: Uint8Array;
  protocol: PhoneCallProtocol;
}

export interface $PhoneCallAccepted {
  _: "phoneCallAccepted";
  flags?: Number;
  video?: True;
  id: number;
  access_hash: number;
  date: number;
  admin_id: number;
  participant_id: number;
  g_b: Uint8Array;
  protocol: PhoneCallProtocol;
}

export interface $PhoneCall {
  _: "phoneCall";
  flags?: Number;
  p2p_allowed?: True;
  video?: True;
  id: number;
  access_hash: number;
  date: number;
  admin_id: number;
  participant_id: number;
  g_a_or_b: Uint8Array;
  key_fingerprint: number;
  protocol: PhoneCallProtocol;
  connections: PhoneConnection;
  start_date: number;
}

export interface $PhoneCallDiscarded {
  _: "phoneCallDiscarded";
  flags?: Number;
  need_rating?: True;
  need_debug?: True;
  video?: True;
  id: number;
  reason?: PhoneCallDiscardReason;
  duration?: number;
}

export interface $PhoneConnection {
  _: "phoneConnection";
  flags?: Number;
  tcp?: True;
  id: number;
  ip: string;
  ipv6: string;
  port: number;
  peer_tag: Uint8Array;
}

export interface $PhoneCallProtocol {
  _: "phoneCallProtocol";
  flags?: Number;
  udp_p2p?: True;
  udp_reflector?: True;
  min_layer: number;
  max_layer: number;
  library_versions: string[];
}

export interface $Phone$PhoneCall {
  _: "phone.phoneCall";
  phone_call: PhoneCall;
  users: User;
}

export interface $InputMessagesFilterPhoneCalls {
  _: "inputMessagesFilterPhoneCalls";
  flags?: Number;
  missed?: True;
}

export interface $MessageActionPhoneCall {
  _: "messageActionPhoneCall";
  flags?: Number;
  video?: True;
  call_id: number;
  reason?: PhoneCallDiscardReason;
  duration?: number;
}

export interface $InputMessagesFilterRoundVoice {
  _: "inputMessagesFilterRoundVoice";
}

export interface $InputMessagesFilterRoundVideo {
  _: "inputMessagesFilterRoundVideo";
}

export interface $SendMessageRecordRoundAction {
  _: "sendMessageRecordRoundAction";
}

export interface $SendMessageUploadRoundAction {
  _: "sendMessageUploadRoundAction";
  progress: number;
}

export interface $Upload$FileCdnRedirect {
  _: "upload.fileCdnRedirect";
  dc_id: number;
  file_token: Uint8Array;
  encryption_key: Uint8Array;
  encryption_iv: Uint8Array;
  file_hashes: FileHash;
}

export interface $Upload$CdnFileReuploadNeeded {
  _: "upload.cdnFileReuploadNeeded";
  request_token: Uint8Array;
}

export interface $Upload$CdnFile {
  _: "upload.cdnFile";
  bytes: Uint8Array;
}

export interface $CdnPublicKey {
  _: "cdnPublicKey";
  dc_id: number;
  public_key: string;
}

export interface $CdnConfig {
  _: "cdnConfig";
  public_keys: CdnPublicKey;
}

export interface $PageBlockChannel {
  _: "pageBlockChannel";
  channel: Chat;
}

export interface $LangPackString {
  _: "langPackString";
  key: string;
  value: string;
}

export interface $LangPackStringPluralized {
  _: "langPackStringPluralized";
  flags?: Number;
  key: string;
  zero_value?: string;
  one_value?: string;
  two_value?: string;
  few_value?: string;
  many_value?: string;
  other_value: string;
}

export interface $LangPackStringDeleted {
  _: "langPackStringDeleted";
  key: string;
}

export interface $LangPackDifference {
  _: "langPackDifference";
  lang_code: string;
  from_version: number;
  version: number;
  strings: LangPackString;
}

export interface $LangPackLanguage {
  _: "langPackLanguage";
  flags?: Number;
  official?: True;
  rtl?: True;
  beta?: True;
  name: string;
  native_name: string;
  lang_code: string;
  base_lang_code?: string;
  plural_code: string;
  strings_count: number;
  translated_count: number;
  translations_url: string;
}

export interface $UpdateLangPackTooLong {
  _: "updateLangPackTooLong";
  lang_code: string;
}

export interface $UpdateLangPack {
  _: "updateLangPack";
  difference: LangPackDifference;
}

export interface $ChannelParticipantAdmin {
  _: "channelParticipantAdmin";
  flags?: Number;
  can_edit?: True;
  self?: True;
  user_id: number;
  inviter_id?: number;
  promoted_by: number;
  date: number;
  admin_rights: ChatAdminRights;
  rank?: string;
}

export interface $ChannelParticipantBanned {
  _: "channelParticipantBanned";
  flags?: Number;
  left?: True;
  peer: Peer;
  kicked_by: number;
  date: number;
  banned_rights: ChatBannedRights;
}

export interface $ChannelParticipantsBanned {
  _: "channelParticipantsBanned";
  q: string;
}

export interface $ChannelParticipantsSearch {
  _: "channelParticipantsSearch";
  q: string;
}

export interface $ChannelAdminLogEventActionChangeTitle {
  _: "channelAdminLogEventActionChangeTitle";
  prev_value: string;
  new_value: string;
}

export interface $ChannelAdminLogEventActionChangeAbout {
  _: "channelAdminLogEventActionChangeAbout";
  prev_value: string;
  new_value: string;
}

export interface $ChannelAdminLogEventActionChangeUsername {
  _: "channelAdminLogEventActionChangeUsername";
  prev_value: string;
  new_value: string;
}

export interface $ChannelAdminLogEventActionChangePhoto {
  _: "channelAdminLogEventActionChangePhoto";
  prev_photo: Photo;
  new_photo: Photo;
}

export interface $ChannelAdminLogEventActionToggleInvites {
  _: "channelAdminLogEventActionToggleInvites";
  new_value: Bool;
}

export interface $ChannelAdminLogEventActionToggleSignatures {
  _: "channelAdminLogEventActionToggleSignatures";
  new_value: Bool;
}

export interface $ChannelAdminLogEventActionUpdatePinned {
  _: "channelAdminLogEventActionUpdatePinned";
  message: Message;
}

export interface $ChannelAdminLogEventActionEditMessage {
  _: "channelAdminLogEventActionEditMessage";
  prev_message: Message;
  new_message: Message;
}

export interface $ChannelAdminLogEventActionDeleteMessage {
  _: "channelAdminLogEventActionDeleteMessage";
  message: Message;
}

export interface $ChannelAdminLogEventActionParticipantJoin {
  _: "channelAdminLogEventActionParticipantJoin";
}

export interface $ChannelAdminLogEventActionParticipantLeave {
  _: "channelAdminLogEventActionParticipantLeave";
}

export interface $ChannelAdminLogEventActionParticipantInvite {
  _: "channelAdminLogEventActionParticipantInvite";
  participant: ChannelParticipant;
}

export interface $ChannelAdminLogEventActionParticipantToggleBan {
  _: "channelAdminLogEventActionParticipantToggleBan";
  prev_participant: ChannelParticipant;
  new_participant: ChannelParticipant;
}

export interface $ChannelAdminLogEventActionParticipantToggleAdmin {
  _: "channelAdminLogEventActionParticipantToggleAdmin";
  prev_participant: ChannelParticipant;
  new_participant: ChannelParticipant;
}

export interface $ChannelAdminLogEvent {
  _: "channelAdminLogEvent";
  id: number;
  date: number;
  user_id: number;
  action: ChannelAdminLogEventAction;
}

export interface $Channels$AdminLogResults {
  _: "channels.adminLogResults";
  events: ChannelAdminLogEvent;
  chats: Chat;
  users: User;
}

export interface $ChannelAdminLogEventsFilter {
  _: "channelAdminLogEventsFilter";
  flags?: Number;
  join?: True;
  leave?: True;
  invite?: True;
  ban?: True;
  unban?: True;
  kick?: True;
  unkick?: True;
  promote?: True;
  demote?: True;
  info?: True;
  settings?: True;
  pinned?: True;
  edit?: True;
  delete?: True;
  group_call?: True;
  invites?: True;
  send?: True;
  forums?: True;
}

export interface $TopPeerCategoryPhoneCalls {
  _: "topPeerCategoryPhoneCalls";
}

export interface $PageBlockAudio {
  _: "pageBlockAudio";
  audio_id: number;
  caption: PageCaption;
}

export interface $PopularContact {
  _: "popularContact";
  client_id: number;
  importers: number;
}

export interface $MessageActionScreenshotTaken {
  _: "messageActionScreenshotTaken";
}

export interface $Messages$FavedStickersNotModified {
  _: "messages.favedStickersNotModified";
}

export interface $Messages$FavedStickers {
  _: "messages.favedStickers";
  hash: number;
  packs: StickerPack;
  stickers: Document;
}

export interface $UpdateFavedStickers {
  _: "updateFavedStickers";
}

export interface $UpdateChannelReadMessagesContents {
  _: "updateChannelReadMessagesContents";
  flags?: Number;
  channel_id: number;
  top_msg_id?: number;
  messages: number[];
}

export interface $InputMessagesFilterMyMentions {
  _: "inputMessagesFilterMyMentions";
}

export interface $UpdateContactsReset {
  _: "updateContactsReset";
}

export interface $ChannelAdminLogEventActionChangeStickerSet {
  _: "channelAdminLogEventActionChangeStickerSet";
  prev_stickerset: InputStickerSet;
  new_stickerset: InputStickerSet;
}

export interface $MessageActionCustomAction {
  _: "messageActionCustomAction";
  message: string;
}

export interface $InputPaymentCredentialsApplePay {
  _: "inputPaymentCredentialsApplePay";
  payment_data: DataJSON;
}

export interface $InputMessagesFilterGeo {
  _: "inputMessagesFilterGeo";
}

export interface $InputMessagesFilterContacts {
  _: "inputMessagesFilterContacts";
}

export interface $UpdateChannelAvailableMessages {
  _: "updateChannelAvailableMessages";
  channel_id: number;
  available_min_id: number;
}

export interface $ChannelAdminLogEventActionTogglePreHistoryHidden {
  _: "channelAdminLogEventActionTogglePreHistoryHidden";
  new_value: Bool;
}

export interface $InputMediaGeoLive {
  _: "inputMediaGeoLive";
  flags?: Number;
  stopped?: True;
  geo_point: InputGeoPoint;
  heading?: number;
  period?: number;
  proximity_notification_radius?: number;
}

export interface $MessageMediaGeoLive {
  _: "messageMediaGeoLive";
  flags?: Number;
  geo: GeoPoint;
  heading?: number;
  period: number;
  proximity_notification_radius?: number;
}

export interface $RecentMeUrlUnknown {
  _: "recentMeUrlUnknown";
  url: string;
}

export interface $RecentMeUrlUser {
  _: "recentMeUrlUser";
  url: string;
  user_id: number;
}

export interface $RecentMeUrlChat {
  _: "recentMeUrlChat";
  url: string;
  chat_id: number;
}

export interface $RecentMeUrlChatInvite {
  _: "recentMeUrlChatInvite";
  url: string;
  chat_invite: ChatInvite;
}

export interface $RecentMeUrlStickerSet {
  _: "recentMeUrlStickerSet";
  url: string;
  set: StickerSetCovered;
}

export interface $Help$RecentMeUrls {
  _: "help.recentMeUrls";
  urls: RecentMeUrl;
  chats: Chat;
  users: User;
}

export interface $Channels$ChannelParticipantsNotModified {
  _: "channels.channelParticipantsNotModified";
}

export interface $Messages$MessagesNotModified {
  _: "messages.messagesNotModified";
  count: number;
}

export interface $InputSingleMedia {
  _: "inputSingleMedia";
  flags?: Number;
  media: InputMedia;
  random_id: number;
  message: string;
  entities?: MessageEntity;
}

export interface $WebAuthorization {
  _: "webAuthorization";
  hash: number;
  bot_id: number;
  domain: string;
  browser: string;
  platform: string;
  date_created: number;
  date_active: number;
  ip: string;
  region: string;
}

export interface $Account$WebAuthorizations {
  _: "account.webAuthorizations";
  authorizations: WebAuthorization;
  users: User;
}

export interface $InputMessageID {
  _: "inputMessageID";
  id: number;
}

export interface $InputMessageReplyTo {
  _: "inputMessageReplyTo";
  id: number;
}

export interface $InputMessagePinned {
  _: "inputMessagePinned";
}

export interface $MessageEntityPhone {
  _: "messageEntityPhone";
  offset: number;
  length: number;
}

export interface $MessageEntityCashtag {
  _: "messageEntityCashtag";
  offset: number;
  length: number;
}

export interface $MessageActionBotAllowed {
  _: "messageActionBotAllowed";
  flags?: Number;
  attach_menu?: True;
  domain?: string;
  app?: BotApp;
}

export interface $InputDialogPeer {
  _: "inputDialogPeer";
  peer: InputPeer;
}

export interface $DialogPeer {
  _: "dialogPeer";
  peer: Peer;
}

export interface $Messages$FoundStickerSetsNotModified {
  _: "messages.foundStickerSetsNotModified";
}

export interface $Messages$FoundStickerSets {
  _: "messages.foundStickerSets";
  hash: number;
  sets: StickerSetCovered;
}

export interface $FileHash {
  _: "fileHash";
  offset: number;
  limit: number;
  hash: Uint8Array;
}

export interface $WebDocumentNoProxy {
  _: "webDocumentNoProxy";
  url: string;
  size: number;
  mime_type: string;
  attributes: DocumentAttribute;
}

export interface $InputClientProxy {
  _: "inputClientProxy";
  address: string;
  port: number;
}

export interface $Help$TermsOfServiceUpdateEmpty {
  _: "help.termsOfServiceUpdateEmpty";
  expires: number;
}

export interface $Help$TermsOfServiceUpdate {
  _: "help.termsOfServiceUpdate";
  expires: number;
  terms_of_service: Help$TermsOfService;
}

export interface $InputSecureFileUploaded {
  _: "inputSecureFileUploaded";
  id: number;
  parts: number;
  md5_checksum: string;
  file_hash: Uint8Array;
  secret: Uint8Array;
}

export interface $InputSecureFile {
  _: "inputSecureFile";
  id: number;
  access_hash: number;
}

export interface $InputSecureFileLocation {
  _: "inputSecureFileLocation";
  id: number;
  access_hash: number;
}

export interface $SecureFileEmpty {
  _: "secureFileEmpty";
}

export interface $SecureFile {
  _: "secureFile";
  id: number;
  access_hash: number;
  size: number;
  dc_id: number;
  date: number;
  file_hash: Uint8Array;
  secret: Uint8Array;
}

export interface $SecureData {
  _: "secureData";
  data: Uint8Array;
  data_hash: Uint8Array;
  secret: Uint8Array;
}

export interface $SecurePlainPhone {
  _: "securePlainPhone";
  phone: string;
}

export interface $SecurePlainEmail {
  _: "securePlainEmail";
  email: string;
}

export interface $SecureValueTypePersonalDetails {
  _: "secureValueTypePersonalDetails";
}

export interface $SecureValueTypePassport {
  _: "secureValueTypePassport";
}

export interface $SecureValueTypeDriverLicense {
  _: "secureValueTypeDriverLicense";
}

export interface $SecureValueTypeIdentityCard {
  _: "secureValueTypeIdentityCard";
}

export interface $SecureValueTypeInternalPassport {
  _: "secureValueTypeInternalPassport";
}

export interface $SecureValueTypeAddress {
  _: "secureValueTypeAddress";
}

export interface $SecureValueTypeUtilityBill {
  _: "secureValueTypeUtilityBill";
}

export interface $SecureValueTypeBankStatement {
  _: "secureValueTypeBankStatement";
}

export interface $SecureValueTypeRentalAgreement {
  _: "secureValueTypeRentalAgreement";
}

export interface $SecureValueTypePassportRegistration {
  _: "secureValueTypePassportRegistration";
}

export interface $SecureValueTypeTemporaryRegistration {
  _: "secureValueTypeTemporaryRegistration";
}

export interface $SecureValueTypePhone {
  _: "secureValueTypePhone";
}

export interface $SecureValueTypeEmail {
  _: "secureValueTypeEmail";
}

export interface $SecureValue {
  _: "secureValue";
  flags?: Number;
  type: SecureValueType;
  data?: SecureData;
  front_side?: SecureFile;
  reverse_side?: SecureFile;
  selfie?: SecureFile;
  translation?: SecureFile;
  files?: SecureFile;
  plain_data?: SecurePlainData;
  hash: Uint8Array;
}

export interface $InputSecureValue {
  _: "inputSecureValue";
  flags?: Number;
  type: SecureValueType;
  data?: SecureData;
  front_side?: InputSecureFile;
  reverse_side?: InputSecureFile;
  selfie?: InputSecureFile;
  translation?: InputSecureFile;
  files?: InputSecureFile;
  plain_data?: SecurePlainData;
}

export interface $SecureValueHash {
  _: "secureValueHash";
  type: SecureValueType;
  hash: Uint8Array;
}

export interface $SecureValueErrorData {
  _: "secureValueErrorData";
  type: SecureValueType;
  data_hash: Uint8Array;
  field: string;
  text: string;
}

export interface $SecureValueErrorFrontSide {
  _: "secureValueErrorFrontSide";
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}

export interface $SecureValueErrorReverseSide {
  _: "secureValueErrorReverseSide";
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}

export interface $SecureValueErrorSelfie {
  _: "secureValueErrorSelfie";
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}

export interface $SecureValueErrorFile {
  _: "secureValueErrorFile";
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}

export interface $SecureValueErrorFiles {
  _: "secureValueErrorFiles";
  type: SecureValueType;
  file_hash: Uint8Array[];
  text: string;
}

export interface $SecureCredentialsEncrypted {
  _: "secureCredentialsEncrypted";
  data: Uint8Array;
  hash: Uint8Array;
  secret: Uint8Array;
}

export interface $Account$AuthorizationForm {
  _: "account.authorizationForm";
  flags?: Number;
  required_types: SecureRequiredType;
  values: SecureValue;
  errors: SecureValueError;
  users: User;
  privacy_policy_url?: string;
}

export interface $Account$SentEmailCode {
  _: "account.sentEmailCode";
  email_pattern: string;
  length: number;
}

export interface $MessageActionSecureValuesSentMe {
  _: "messageActionSecureValuesSentMe";
  values: SecureValue;
  credentials: SecureCredentialsEncrypted;
}

export interface $MessageActionSecureValuesSent {
  _: "messageActionSecureValuesSent";
  types: SecureValueType;
}

export interface $Help$DeepLinkInfoEmpty {
  _: "help.deepLinkInfoEmpty";
}

export interface $Help$DeepLinkInfo {
  _: "help.deepLinkInfo";
  flags?: Number;
  update_app?: True;
  message: string;
  entities?: MessageEntity;
}

export interface $SavedPhoneContact {
  _: "savedPhoneContact";
  phone: string;
  first_name: string;
  last_name: string;
  date: number;
}

export interface $Account$Takeout {
  _: "account.takeout";
  id: number;
}

export interface $InputTakeoutFileLocation {
  _: "inputTakeoutFileLocation";
}

export interface $UpdateDialogUnreadMark {
  _: "updateDialogUnreadMark";
  flags?: Number;
  unread?: True;
  peer: DialogPeer;
}

export interface $Messages$DialogsNotModified {
  _: "messages.dialogsNotModified";
  count: number;
}

export interface $InputWebFileGeoPointLocation {
  _: "inputWebFileGeoPointLocation";
  geo_point: InputGeoPoint;
  access_hash: number;
  w: number;
  h: number;
  zoom: number;
  scale: number;
}

export interface $Contacts$TopPeersDisabled {
  _: "contacts.topPeersDisabled";
}

export interface $InputReportReasonCopyright {
  _: "inputReportReasonCopyright";
}

export interface $PasswordKdfAlgoUnknown {
  _: "passwordKdfAlgoUnknown";
}

export interface $SecurePasswordKdfAlgoUnknown {
  _: "securePasswordKdfAlgoUnknown";
}

export interface $SecurePasswordKdfAlgoPBKDF2HMACSHA512iter100000 {
  _: "securePasswordKdfAlgoPBKDF2HMACSHA512iter100000";
  salt: Uint8Array;
}

export interface $SecurePasswordKdfAlgoSHA512 {
  _: "securePasswordKdfAlgoSHA512";
  salt: Uint8Array;
}

export interface $SecureSecretSettings {
  _: "secureSecretSettings";
  secure_algo: SecurePasswordKdfAlgo;
  secure_secret: Uint8Array;
  secure_secret_id: number;
}

export interface $PasswordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow {
  _: "passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow";
  salt1: Uint8Array;
  salt2: Uint8Array;
  g: number;
  p: Uint8Array;
}

export interface $InputCheckPasswordEmpty {
  _: "inputCheckPasswordEmpty";
}

export interface $InputCheckPasswordSRP {
  _: "inputCheckPasswordSRP";
  srp_id: number;
  A: Uint8Array;
  M1: Uint8Array;
}

export interface $SecureValueError {
  _: "secureValueError";
  type: SecureValueType;
  hash: Uint8Array;
  text: string;
}

export interface $SecureValueErrorTranslationFile {
  _: "secureValueErrorTranslationFile";
  type: SecureValueType;
  file_hash: Uint8Array;
  text: string;
}

export interface $SecureValueErrorTranslationFiles {
  _: "secureValueErrorTranslationFiles";
  type: SecureValueType;
  file_hash: Uint8Array[];
  text: string;
}

export interface $SecureRequiredType {
  _: "secureRequiredType";
  flags?: Number;
  native_names?: True;
  selfie_required?: True;
  translation_required?: True;
  type: SecureValueType;
}

export interface $SecureRequiredTypeOneOf {
  _: "secureRequiredTypeOneOf";
  types: SecureRequiredType;
}

export interface $Help$PassportConfigNotModified {
  _: "help.passportConfigNotModified";
}

export interface $Help$PassportConfig {
  _: "help.passportConfig";
  hash: number;
  countries_langs: DataJSON;
}

export interface $InputAppEvent {
  _: "inputAppEvent";
  time: number;
  type: string;
  peer: number;
  data: JSONValue;
}

export interface $JsonObjectValue {
  _: "jsonObjectValue";
  key: string;
  value: JSONValue;
}

export interface $JsonNull {
  _: "jsonNull";
}

export interface $JsonBool {
  _: "jsonBool";
  value: Bool;
}

export interface $JsonNumber {
  _: "jsonNumber";
  value: number;
}

export interface $JsonString {
  _: "jsonString";
  value: string;
}

export interface $JsonArray {
  _: "jsonArray";
  value: JSONValue;
}

export interface $JsonObject {
  _: "jsonObject";
  value: JSONObjectValue;
}

export interface $InputNotifyBroadcasts {
  _: "inputNotifyBroadcasts";
}

export interface $NotifyBroadcasts {
  _: "notifyBroadcasts";
}

export interface $TextSubscript {
  _: "textSubscript";
  text: RichText;
}

export interface $TextSuperscript {
  _: "textSuperscript";
  text: RichText;
}

export interface $TextMarked {
  _: "textMarked";
  text: RichText;
}

export interface $TextPhone {
  _: "textPhone";
  text: RichText;
  phone: string;
}

export interface $TextImage {
  _: "textImage";
  document_id: number;
  w: number;
  h: number;
}

export interface $PageBlockKicker {
  _: "pageBlockKicker";
  text: RichText;
}

export interface $PageTableCell {
  _: "pageTableCell";
  flags?: Number;
  header?: True;
  align_center?: True;
  align_right?: True;
  valign_middle?: True;
  valign_bottom?: True;
  text?: RichText;
  colspan?: number;
  rowspan?: number;
}

export interface $PageTableRow {
  _: "pageTableRow";
  cells: PageTableCell;
}

export interface $PageBlockTable {
  _: "pageBlockTable";
  flags?: Number;
  bordered?: True;
  striped?: True;
  title: RichText;
  rows: PageTableRow;
}

export interface $PageCaption {
  _: "pageCaption";
  text: RichText;
  credit: RichText;
}

export interface $PageListItemText {
  _: "pageListItemText";
  text: RichText;
}

export interface $PageListItemBlocks {
  _: "pageListItemBlocks";
  blocks: PageBlock;
}

export interface $PageListOrderedItemText {
  _: "pageListOrderedItemText";
  num: string;
  text: RichText;
}

export interface $PageListOrderedItemBlocks {
  _: "pageListOrderedItemBlocks";
  num: string;
  blocks: PageBlock;
}

export interface $PageBlockOrderedList {
  _: "pageBlockOrderedList";
  items: PageListOrderedItem;
}

export interface $PageBlockDetails {
  _: "pageBlockDetails";
  flags?: Number;
  open?: True;
  blocks: PageBlock;
  title: RichText;
}

export interface $PageRelatedArticle {
  _: "pageRelatedArticle";
  flags?: Number;
  url: string;
  webpage_id: number;
  title?: string;
  description?: string;
  photo_id?: number;
  author?: string;
  published_date?: number;
}

export interface $PageBlockRelatedArticles {
  _: "pageBlockRelatedArticles";
  title: RichText;
  articles: PageRelatedArticle;
}

export interface $PageBlockMap {
  _: "pageBlockMap";
  geo: GeoPoint;
  zoom: number;
  w: number;
  h: number;
  caption: PageCaption;
}

export interface $Page {
  _: "page";
  flags?: Number;
  part?: True;
  rtl?: True;
  v2?: True;
  url: string;
  blocks: PageBlock;
  photos: Photo;
  documents: Document;
  views?: number;
}

export interface $InputPrivacyKeyPhoneP2P {
  _: "inputPrivacyKeyPhoneP2P";
}

export interface $PrivacyKeyPhoneP2P {
  _: "privacyKeyPhoneP2P";
}

export interface $TextAnchor {
  _: "textAnchor";
  text: RichText;
  name: string;
}

export interface $Help$SupportName {
  _: "help.supportName";
  name: string;
}

export interface $Help$UserInfoEmpty {
  _: "help.userInfoEmpty";
}

export interface $Help$UserInfo {
  _: "help.userInfo";
  message: string;
  entities: MessageEntity;
  author: string;
  date: number;
}

export interface $MessageActionContactSignUp {
  _: "messageActionContactSignUp";
}

export interface $UpdateMessagePoll {
  _: "updateMessagePoll";
  flags?: Number;
  poll_id: number;
  poll?: Poll;
  results: PollResults;
}

export interface $PollAnswer {
  _: "pollAnswer";
  text: string;
  option: Uint8Array;
}

export interface $Poll {
  _: "poll";
  id: number;
  flags?: Number;
  closed?: True;
  public_voters?: True;
  multiple_choice?: True;
  quiz?: True;
  question: string;
  answers: PollAnswer;
  close_period?: number;
  close_date?: number;
}

export interface $PollAnswerVoters {
  _: "pollAnswerVoters";
  flags?: Number;
  chosen?: True;
  correct?: True;
  option: Uint8Array;
  voters: number;
}

export interface $PollResults {
  _: "pollResults";
  flags?: Number;
  min?: True;
  results?: PollAnswerVoters;
  total_voters?: number;
  recent_voters?: number[];
  solution?: string;
  solution_entities?: MessageEntity;
}

export interface $InputMediaPoll {
  _: "inputMediaPoll";
  flags?: Number;
  poll: Poll;
  correct_answers?: Uint8Array[];
  solution?: string;
  solution_entities?: MessageEntity;
}

export interface $MessageMediaPoll {
  _: "messageMediaPoll";
  poll: Poll;
  results: PollResults;
}

export interface $ChatOnlines {
  _: "chatOnlines";
  onlines: number;
}

export interface $StatsURL {
  _: "statsURL";
  url: string;
}

export interface $PhotoStrippedSize {
  _: "photoStrippedSize";
  type: string;
  bytes: Uint8Array;
}

export interface $ChatAdminRights {
  _: "chatAdminRights";
  flags?: Number;
  change_info?: True;
  post_messages?: True;
  edit_messages?: True;
  delete_messages?: True;
  ban_users?: True;
  invite_users?: True;
  pin_messages?: True;
  add_admins?: True;
  anonymous?: True;
  manage_call?: True;
  other?: True;
  manage_topics?: True;
}

export interface $ChatBannedRights {
  _: "chatBannedRights";
  flags?: Number;
  view_messages?: True;
  send_messages?: True;
  send_media?: True;
  send_stickers?: True;
  send_gifs?: True;
  send_games?: True;
  send_inline?: True;
  embed_links?: True;
  send_polls?: True;
  change_info?: True;
  invite_users?: True;
  pin_messages?: True;
  manage_topics?: True;
  send_photos?: True;
  send_videos?: True;
  send_roundvideos?: True;
  send_audios?: True;
  send_voices?: True;
  send_docs?: True;
  send_plain?: True;
  until_date: number;
}

export interface $UpdateChatDefaultBannedRights {
  _: "updateChatDefaultBannedRights";
  peer: Peer;
  default_banned_rights: ChatBannedRights;
  version: number;
}

export interface $InputWallPaper {
  _: "inputWallPaper";
  id: number;
  access_hash: number;
}

export interface $InputWallPaperSlug {
  _: "inputWallPaperSlug";
  slug: string;
}

export interface $ChannelParticipantsContacts {
  _: "channelParticipantsContacts";
  q: string;
}

export interface $ChannelAdminLogEventActionDefaultBannedRights {
  _: "channelAdminLogEventActionDefaultBannedRights";
  prev_banned_rights: ChatBannedRights;
  new_banned_rights: ChatBannedRights;
}

export interface $ChannelAdminLogEventActionStopPoll {
  _: "channelAdminLogEventActionStopPoll";
  message: Message;
}

export interface $Account$WallPapersNotModified {
  _: "account.wallPapersNotModified";
}

export interface $Account$WallPapers {
  _: "account.wallPapers";
  hash: number;
  wallpapers: WallPaper;
}

export interface $CodeSettings {
  _: "codeSettings";
  flags?: Number;
  allow_flashcall?: True;
  current_number?: True;
  allow_app_hash?: True;
  allow_missed_call?: True;
  allow_firebase?: True;
  logout_tokens?: Uint8Array[];
  token?: string;
  app_sandbox?: Bool;
}

export interface $WallPaperSettings {
  _: "wallPaperSettings";
  flags?: Number;
  blur?: True;
  motion?: True;
  background_color?: number;
  second_background_color?: number;
  third_background_color?: number;
  fourth_background_color?: number;
  intensity?: number;
  rotation?: number;
}

export interface $AutoDownloadSettings {
  _: "autoDownloadSettings";
  flags?: Number;
  disabled?: True;
  video_preload_large?: True;
  audio_preload_next?: True;
  phonecalls_less_data?: True;
  photo_size_max: number;
  video_size_max: number;
  file_size_max: number;
  video_upload_maxbitrate: number;
}

export interface $Account$AutoDownloadSettings {
  _: "account.autoDownloadSettings";
  low: AutoDownloadSettings;
  medium: AutoDownloadSettings;
  high: AutoDownloadSettings;
}

export interface $EmojiKeyword {
  _: "emojiKeyword";
  keyword: string;
  emoticons: string[];
}

export interface $EmojiKeywordDeleted {
  _: "emojiKeywordDeleted";
  keyword: string;
  emoticons: string[];
}

export interface $EmojiKeywordsDifference {
  _: "emojiKeywordsDifference";
  lang_code: string;
  from_version: number;
  version: number;
  keywords: EmojiKeyword;
}

export interface $EmojiURL {
  _: "emojiURL";
  url: string;
}

export interface $EmojiLanguage {
  _: "emojiLanguage";
  lang_code: string;
}

export interface $InputPrivacyKeyForwards {
  _: "inputPrivacyKeyForwards";
}

export interface $PrivacyKeyForwards {
  _: "privacyKeyForwards";
}

export interface $InputPrivacyKeyProfilePhoto {
  _: "inputPrivacyKeyProfilePhoto";
}

export interface $PrivacyKeyProfilePhoto {
  _: "privacyKeyProfilePhoto";
}

export interface $InputPhotoFileLocation {
  _: "inputPhotoFileLocation";
  id: number;
  access_hash: number;
  file_reference: Uint8Array;
  thumb_size: string;
}

export interface $InputPhotoLegacyFileLocation {
  _: "inputPhotoLegacyFileLocation";
  id: number;
  access_hash: number;
  file_reference: Uint8Array;
  volume_id: number;
  local_id: number;
  secret: number;
}

export interface $InputPeerPhotoFileLocation {
  _: "inputPeerPhotoFileLocation";
  flags?: Number;
  big?: True;
  peer: InputPeer;
  photo_id: number;
}

export interface $InputStickerSetThumb {
  _: "inputStickerSetThumb";
  stickerset: InputStickerSet;
  thumb_version: number;
}

export interface $Folder {
  _: "folder";
  flags?: Number;
  autofill_new_broadcasts?: True;
  autofill_public_groups?: True;
  autofill_new_correspondents?: True;
  id: number;
  title: string;
  photo?: ChatPhoto;
}

export interface $DialogFolder {
  _: "dialogFolder";
  flags?: Number;
  pinned?: True;
  folder: Folder;
  peer: Peer;
  top_message: number;
  unread_muted_peers_count: number;
  unread_unmuted_peers_count: number;
  unread_muted_messages_count: number;
  unread_unmuted_messages_count: number;
}

export interface $InputDialogPeerFolder {
  _: "inputDialogPeerFolder";
  folder_id: number;
}

export interface $DialogPeerFolder {
  _: "dialogPeerFolder";
  folder_id: number;
}

export interface $InputFolderPeer {
  _: "inputFolderPeer";
  peer: InputPeer;
  folder_id: number;
}

export interface $FolderPeer {
  _: "folderPeer";
  peer: Peer;
  folder_id: number;
}

export interface $UpdateFolderPeers {
  _: "updateFolderPeers";
  folder_peers: FolderPeer;
  pts: number;
  pts_count: number;
}

export interface $InputUserFromMessage {
  _: "inputUserFromMessage";
  peer: InputPeer;
  msg_id: number;
  user_id: number;
}

export interface $InputChannelFromMessage {
  _: "inputChannelFromMessage";
  peer: InputPeer;
  msg_id: number;
  channel_id: number;
}

export interface $InputPeerUserFromMessage {
  _: "inputPeerUserFromMessage";
  peer: InputPeer;
  msg_id: number;
  user_id: number;
}

export interface $InputPeerChannelFromMessage {
  _: "inputPeerChannelFromMessage";
  peer: InputPeer;
  msg_id: number;
  channel_id: number;
}

export interface $InputPrivacyKeyPhoneNumber {
  _: "inputPrivacyKeyPhoneNumber";
}

export interface $PrivacyKeyPhoneNumber {
  _: "privacyKeyPhoneNumber";
}

export interface $TopPeerCategoryForwardUsers {
  _: "topPeerCategoryForwardUsers";
}

export interface $TopPeerCategoryForwardChats {
  _: "topPeerCategoryForwardChats";
}

export interface $ChannelAdminLogEventActionChangeLinkedChat {
  _: "channelAdminLogEventActionChangeLinkedChat";
  prev_value: number;
  new_value: number;
}

export interface $Messages$SearchCounter {
  _: "messages.searchCounter";
  flags?: Number;
  inexact?: True;
  filter: MessagesFilter;
  count: number;
}

export interface $KeyboardButtonUrlAuth {
  _: "keyboardButtonUrlAuth";
  flags?: Number;
  text: string;
  fwd_text?: string;
  url: string;
  button_id: number;
}

export interface $InputKeyboardButtonUrlAuth {
  _: "inputKeyboardButtonUrlAuth";
  flags?: Number;
  request_write_access?: True;
  text: string;
  fwd_text?: string;
  url: string;
  bot: InputUser;
}

export interface $UrlAuthResultRequest {
  _: "urlAuthResultRequest";
  flags?: Number;
  request_write_access?: True;
  bot: User;
  domain: string;
}

export interface $UrlAuthResultAccepted {
  _: "urlAuthResultAccepted";
  url: string;
}

export interface $UrlAuthResultDefault {
  _: "urlAuthResultDefault";
}

export interface $InputPrivacyValueAllowChatParticipants {
  _: "inputPrivacyValueAllowChatParticipants";
  chats: number[];
}

export interface $InputPrivacyValueDisallowChatParticipants {
  _: "inputPrivacyValueDisallowChatParticipants";
  chats: number[];
}

export interface $PrivacyValueAllowChatParticipants {
  _: "privacyValueAllowChatParticipants";
  chats: number[];
}

export interface $PrivacyValueDisallowChatParticipants {
  _: "privacyValueDisallowChatParticipants";
  chats: number[];
}

export interface $MessageEntityUnderline {
  _: "messageEntityUnderline";
  offset: number;
  length: number;
}

export interface $MessageEntityStrike {
  _: "messageEntityStrike";
  offset: number;
  length: number;
}

export interface $MessageEntityBlockquote {
  _: "messageEntityBlockquote";
  offset: number;
  length: number;
}

export interface $UpdatePeerSettings {
  _: "updatePeerSettings";
  peer: Peer;
  settings: PeerSettings;
}

export interface $ChannelLocationEmpty {
  _: "channelLocationEmpty";
}

export interface $ChannelLocation {
  _: "channelLocation";
  geo_point: GeoPoint;
  address: string;
}

export interface $PeerLocated {
  _: "peerLocated";
  peer: Peer;
  expires: number;
  distance: number;
}

export interface $UpdatePeerLocated {
  _: "updatePeerLocated";
  peers: PeerLocated;
}

export interface $ChannelAdminLogEventActionChangeLocation {
  _: "channelAdminLogEventActionChangeLocation";
  prev_value: ChannelLocation;
  new_value: ChannelLocation;
}

export interface $InputReportReasonGeoIrrelevant {
  _: "inputReportReasonGeoIrrelevant";
}

export interface $ChannelAdminLogEventActionToggleSlowMode {
  _: "channelAdminLogEventActionToggleSlowMode";
  prev_value: number;
  new_value: number;
}

export interface $Auth$AuthorizationSignUpRequired {
  _: "auth.authorizationSignUpRequired";
  flags?: Number;
  terms_of_service?: Help$TermsOfService;
}

export interface $Payments$PaymentVerificationNeeded {
  _: "payments.paymentVerificationNeeded";
  url: string;
}

export interface $InputStickerSetAnimatedEmoji {
  _: "inputStickerSetAnimatedEmoji";
}

export interface $UpdateNewScheduledMessage {
  _: "updateNewScheduledMessage";
  message: Message;
}

export interface $UpdateDeleteScheduledMessages {
  _: "updateDeleteScheduledMessages";
  peer: Peer;
  messages: number[];
}

export interface $RestrictionReason {
  _: "restrictionReason";
  platform: string;
  reason: string;
  text: string;
}

export interface $InputTheme {
  _: "inputTheme";
  id: number;
  access_hash: number;
}

export interface $InputThemeSlug {
  _: "inputThemeSlug";
  slug: string;
}

export interface $Theme {
  _: "theme";
  flags?: Number;
  creator?: True;
  default?: True;
  for_chat?: True;
  id: number;
  access_hash: number;
  slug: string;
  title: string;
  document?: Document;
  settings?: ThemeSettings;
  emoticon?: string;
  installs_count?: number;
}

export interface $Account$ThemesNotModified {
  _: "account.themesNotModified";
}

export interface $Account$Themes {
  _: "account.themes";
  hash: number;
  themes: Theme;
}

export interface $UpdateTheme {
  _: "updateTheme";
  theme: Theme;
}

export interface $InputPrivacyKeyAddedByPhone {
  _: "inputPrivacyKeyAddedByPhone";
}

export interface $PrivacyKeyAddedByPhone {
  _: "privacyKeyAddedByPhone";
}

export interface $UpdateGeoLiveViewed {
  _: "updateGeoLiveViewed";
  peer: Peer;
  msg_id: number;
}

export interface $UpdateLoginToken {
  _: "updateLoginToken";
}

export interface $Auth$LoginToken {
  _: "auth.loginToken";
  expires: number;
  token: Uint8Array;
}

export interface $Auth$LoginTokenMigrateTo {
  _: "auth.loginTokenMigrateTo";
  dc_id: number;
  token: Uint8Array;
}

export interface $Auth$LoginTokenSuccess {
  _: "auth.loginTokenSuccess";
  authorization: Auth$Authorization;
}

export interface $Account$ContentSettings {
  _: "account.contentSettings";
  flags?: Number;
  sensitive_enabled?: True;
  sensitive_can_change?: True;
}

export interface $Messages$InactiveChats {
  _: "messages.inactiveChats";
  dates: number[];
  chats: Chat;
  users: User;
}

export interface $BaseThemeClassic {
  _: "baseThemeClassic";
}

export interface $BaseThemeDay {
  _: "baseThemeDay";
}

export interface $BaseThemeNight {
  _: "baseThemeNight";
}

export interface $BaseThemeTinted {
  _: "baseThemeTinted";
}

export interface $BaseThemeArctic {
  _: "baseThemeArctic";
}

export interface $InputWallPaperNoFile {
  _: "inputWallPaperNoFile";
  id: number;
}

export interface $WallPaperNoFile {
  _: "wallPaperNoFile";
  id: number;
  flags?: Number;
  default?: True;
  dark?: True;
  settings?: WallPaperSettings;
}

export interface $InputThemeSettings {
  _: "inputThemeSettings";
  flags?: Number;
  message_colors_animated?: True;
  base_theme: BaseTheme;
  accent_color: number;
  outbox_accent_color?: number;
  message_colors?: number[];
  wallpaper?: InputWallPaper;
  wallpaper_settings?: WallPaperSettings;
}

export interface $ThemeSettings {
  _: "themeSettings";
  flags?: Number;
  message_colors_animated?: True;
  base_theme: BaseTheme;
  accent_color: number;
  outbox_accent_color?: number;
  message_colors?: number[];
  wallpaper?: WallPaper;
}

export interface $WebPageAttributeTheme {
  _: "webPageAttributeTheme";
  flags?: Number;
  documents?: Document;
  settings?: ThemeSettings;
}

export interface $UpdateMessagePollVote {
  _: "updateMessagePollVote";
  poll_id: number;
  user_id: number;
  options: Uint8Array[];
  qts: number;
}

export interface $MessageUserVote {
  _: "messageUserVote";
  user_id: number;
  option: Uint8Array;
  date: number;
}

export interface $MessageUserVoteInputOption {
  _: "messageUserVoteInputOption";
  user_id: number;
  date: number;
}

export interface $MessageUserVoteMultiple {
  _: "messageUserVoteMultiple";
  user_id: number;
  options: Uint8Array[];
  date: number;
}

export interface $Messages$VotesList {
  _: "messages.votesList";
  flags?: Number;
  count: number;
  votes: MessageUserVote;
  users: User;
  next_offset?: string;
}

export interface $KeyboardButtonRequestPoll {
  _: "keyboardButtonRequestPoll";
  flags?: Number;
  quiz?: Bool;
  text: string;
}

export interface $MessageEntityBankCard {
  _: "messageEntityBankCard";
  offset: number;
  length: number;
}

export interface $BankCardOpenUrl {
  _: "bankCardOpenUrl";
  url: string;
  name: string;
}

export interface $Payments$BankCardData {
  _: "payments.bankCardData";
  title: string;
  open_urls: BankCardOpenUrl;
}

export interface $PeerSelfLocated {
  _: "peerSelfLocated";
  expires: number;
}

export interface $DialogFilter {
  _: "dialogFilter";
  flags?: Number;
  contacts?: True;
  non_contacts?: True;
  groups?: True;
  broadcasts?: True;
  bots?: True;
  exclude_muted?: True;
  exclude_read?: True;
  exclude_archived?: True;
  id: number;
  title: string;
  emoticon?: string;
  pinned_peers: InputPeer;
  include_peers: InputPeer;
  exclude_peers: InputPeer;
}

export interface $DialogFilterSuggested {
  _: "dialogFilterSuggested";
  filter: DialogFilter;
  description: string;
}

export interface $UpdateDialogFilter {
  _: "updateDialogFilter";
  flags?: Number;
  id: number;
  filter?: DialogFilter;
}

export interface $UpdateDialogFilterOrder {
  _: "updateDialogFilterOrder";
  order: number[];
}

export interface $UpdateDialogFilters {
  _: "updateDialogFilters";
}

export interface $StatsDateRangeDays {
  _: "statsDateRangeDays";
  min_date: number;
  max_date: number;
}

export interface $StatsAbsValueAndPrev {
  _: "statsAbsValueAndPrev";
  current: number;
  previous: number;
}

export interface $StatsPercentValue {
  _: "statsPercentValue";
  part: number;
  total: number;
}

export interface $StatsGraphAsync {
  _: "statsGraphAsync";
  token: string;
}

export interface $StatsGraphError {
  _: "statsGraphError";
  error: string;
}

export interface $StatsGraph {
  _: "statsGraph";
  flags?: Number;
  json: DataJSON;
  zoom_token?: string;
}

export interface $MessageInteractionCounters {
  _: "messageInteractionCounters";
  msg_id: number;
  views: number;
  forwards: number;
}

export interface $Stats$BroadcastStats {
  _: "stats.broadcastStats";
  period: StatsDateRangeDays;
  followers: StatsAbsValueAndPrev;
  views_per_post: StatsAbsValueAndPrev;
  shares_per_post: StatsAbsValueAndPrev;
  enabled_notifications: StatsPercentValue;
  growth_graph: StatsGraph;
  followers_graph: StatsGraph;
  mute_graph: StatsGraph;
  top_hours_graph: StatsGraph;
  interactions_graph: StatsGraph;
  iv_interactions_graph: StatsGraph;
  views_by_source_graph: StatsGraph;
  new_followers_by_source_graph: StatsGraph;
  languages_graph: StatsGraph;
  recent_message_interactions: MessageInteractionCounters;
}

export interface $InputMediaDice {
  _: "inputMediaDice";
  emoticon: string;
}

export interface $MessageMediaDice {
  _: "messageMediaDice";
  value: number;
  emoticon: string;
}

export interface $InputStickerSetDice {
  _: "inputStickerSetDice";
  emoticon: string;
}

export interface $Help$PromoDataEmpty {
  _: "help.promoDataEmpty";
  expires: number;
}

export interface $Help$PromoData {
  _: "help.promoData";
  flags?: Number;
  proxy?: True;
  expires: number;
  peer: Peer;
  chats: Chat;
  users: User;
  psa_type?: string;
  psa_message?: string;
}

export interface $VideoSize {
  _: "videoSize";
  flags?: Number;
  type: string;
  w: number;
  h: number;
  size: number;
  video_start_ts?: number;
}

export interface $UpdatePhoneCallSignalingData {
  _: "updatePhoneCallSignalingData";
  phone_call_id: number;
  data: Uint8Array;
}

export interface $ChatInvitePeek {
  _: "chatInvitePeek";
  chat: Chat;
  expires: number;
}

export interface $StatsGroupTopPoster {
  _: "statsGroupTopPoster";
  user_id: number;
  messages: number;
  avg_chars: number;
}

export interface $StatsGroupTopAdmin {
  _: "statsGroupTopAdmin";
  user_id: number;
  deleted: number;
  kicked: number;
  banned: number;
}

export interface $StatsGroupTopInviter {
  _: "statsGroupTopInviter";
  user_id: number;
  invitations: number;
}

export interface $Stats$MegagroupStats {
  _: "stats.megagroupStats";
  period: StatsDateRangeDays;
  members: StatsAbsValueAndPrev;
  messages: StatsAbsValueAndPrev;
  viewers: StatsAbsValueAndPrev;
  posters: StatsAbsValueAndPrev;
  growth_graph: StatsGraph;
  members_graph: StatsGraph;
  new_members_by_source_graph: StatsGraph;
  languages_graph: StatsGraph;
  messages_graph: StatsGraph;
  actions_graph: StatsGraph;
  top_hours_graph: StatsGraph;
  weekdays_graph: StatsGraph;
  top_posters: StatsGroupTopPoster;
  top_admins: StatsGroupTopAdmin;
  top_inviters: StatsGroupTopInviter;
  users: User;
}

export interface $GlobalPrivacySettings {
  _: "globalPrivacySettings";
  flags?: Number;
  archive_and_mute_new_noncontact_peers?: Bool;
}

export interface $PhoneConnectionWebrtc {
  _: "phoneConnectionWebrtc";
  flags?: Number;
  turn?: True;
  stun?: True;
  id: number;
  ip: string;
  ipv6: string;
  port: number;
  username: string;
  password: string;
}

export interface $Help$CountryCode {
  _: "help.countryCode";
  flags?: Number;
  country_code: string;
  prefixes?: string[];
  patterns?: string[];
}

export interface $Help$Country {
  _: "help.country";
  flags?: Number;
  hidden?: True;
  iso2: string;
  default_name: string;
  name?: string;
  country_codes: Help$CountryCode;
}

export interface $Help$CountriesListNotModified {
  _: "help.countriesListNotModified";
}

export interface $Help$CountriesList {
  _: "help.countriesList";
  countries: Help$Country;
  hash: number;
}

export interface $MessageViews {
  _: "messageViews";
  flags?: Number;
  views?: number;
  forwards?: number;
  replies?: MessageReplies;
}

export interface $UpdateChannelMessageForwards {
  _: "updateChannelMessageForwards";
  channel_id: number;
  id: number;
  forwards: number;
}

export interface $PhotoSizeProgressive {
  _: "photoSizeProgressive";
  type: string;
  w: number;
  h: number;
  sizes: number[];
}

export interface $Messages$MessageViews {
  _: "messages.messageViews";
  views: MessageViews;
  chats: Chat;
  users: User;
}

export interface $UpdateReadChannelDiscussionInbox {
  _: "updateReadChannelDiscussionInbox";
  flags?: Number;
  channel_id: number;
  top_msg_id: number;
  read_max_id: number;
  broadcast_id?: number;
  broadcast_post?: number;
}

export interface $UpdateReadChannelDiscussionOutbox {
  _: "updateReadChannelDiscussionOutbox";
  channel_id: number;
  top_msg_id: number;
  read_max_id: number;
}

export interface $Messages$DiscussionMessage {
  _: "messages.discussionMessage";
  flags?: Number;
  messages: Message;
  max_id?: number;
  read_inbox_max_id?: number;
  read_outbox_max_id?: number;
  unread_count: number;
  chats: Chat;
  users: User;
}

export interface $MessageReplyHeader {
  _: "messageReplyHeader";
  flags?: Number;
  reply_to_scheduled?: True;
  forum_topic?: True;
  reply_to_msg_id: number;
  reply_to_peer_id?: Peer;
  reply_to_top_id?: number;
}

export interface $MessageReplies {
  _: "messageReplies";
  flags?: Number;
  comments?: True;
  replies: number;
  replies_pts: number;
  recent_repliers?: Peer;
  channel_id?: number;
  max_id?: number;
  read_max_id?: number;
}

export interface $UpdatePeerBlocked {
  _: "updatePeerBlocked";
  peer_id: Peer;
  blocked: Bool;
}

export interface $PeerBlocked {
  _: "peerBlocked";
  peer_id: Peer;
  date: number;
}

export interface $UpdateChannelUserTyping {
  _: "updateChannelUserTyping";
  flags?: Number;
  channel_id: number;
  top_msg_id?: number;
  from_id: Peer;
  action: SendMessageAction;
}

export interface $InputMessageCallbackQuery {
  _: "inputMessageCallbackQuery";
  id: number;
  query_id: number;
}

export interface $ChannelParticipantLeft {
  _: "channelParticipantLeft";
  peer: Peer;
}

export interface $ChannelParticipantsMentions {
  _: "channelParticipantsMentions";
  flags?: Number;
  q?: string;
  top_msg_id?: number;
}

export interface $UpdatePinnedMessages {
  _: "updatePinnedMessages";
  flags?: Number;
  pinned?: True;
  peer: Peer;
  messages: number[];
  pts: number;
  pts_count: number;
}

export interface $UpdatePinnedChannelMessages {
  _: "updatePinnedChannelMessages";
  flags?: Number;
  pinned?: True;
  channel_id: number;
  messages: number[];
  pts: number;
  pts_count: number;
}

export interface $InputMessagesFilterPinned {
  _: "inputMessagesFilterPinned";
}

export interface $Stats$MessageStats {
  _: "stats.messageStats";
  views_graph: StatsGraph;
}

export interface $MessageActionGeoProximityReached {
  _: "messageActionGeoProximityReached";
  from_id: Peer;
  to_id: Peer;
  distance: number;
}

export interface $PhotoPathSize {
  _: "photoPathSize";
  type: string;
  bytes: Uint8Array;
}

export interface $SpeakingInGroupCallAction {
  _: "speakingInGroupCallAction";
}

export interface $GroupCallDiscarded {
  _: "groupCallDiscarded";
  id: number;
  access_hash: number;
  duration: number;
}

export interface $GroupCall {
  _: "groupCall";
  flags?: Number;
  join_muted?: True;
  can_change_join_muted?: True;
  join_date_asc?: True;
  schedule_start_subscribed?: True;
  can_start_video?: True;
  record_video_active?: True;
  rtmp_stream?: True;
  listeners_hidden?: True;
  id: number;
  access_hash: number;
  participants_count: number;
  title?: string;
  stream_dc_id?: number;
  record_start_date?: number;
  schedule_date?: number;
  unmuted_video_count?: number;
  unmuted_video_limit: number;
  version: number;
}

export interface $InputGroupCall {
  _: "inputGroupCall";
  id: number;
  access_hash: number;
}

export interface $MessageActionGroupCall {
  _: "messageActionGroupCall";
  flags?: Number;
  call: InputGroupCall;
  duration?: number;
}

export interface $MessageActionInviteToGroupCall {
  _: "messageActionInviteToGroupCall";
  call: InputGroupCall;
  users: number[];
}

export interface $GroupCallParticipant {
  _: "groupCallParticipant";
  flags?: Number;
  muted?: True;
  left?: True;
  can_self_unmute?: True;
  just_joined?: True;
  versioned?: True;
  min?: True;
  muted_by_you?: True;
  volume_by_admin?: True;
  self?: True;
  video_joined?: True;
  peer: Peer;
  date: number;
  active_date?: number;
  source: number;
  volume?: number;
  about?: string;
  raise_hand_rating?: number;
  video?: GroupCallParticipantVideo;
  presentation?: GroupCallParticipantVideo;
}

export interface $UpdateChat {
  _: "updateChat";
  chat_id: number;
}

export interface $UpdateGroupCallParticipants {
  _: "updateGroupCallParticipants";
  call: InputGroupCall;
  participants: GroupCallParticipant;
  version: number;
}

export interface $UpdateGroupCall {
  _: "updateGroupCall";
  chat_id: number;
  call: GroupCall;
}

export interface $Phone$GroupCall {
  _: "phone.groupCall";
  call: GroupCall;
  participants: GroupCallParticipant;
  participants_next_offset: string;
  chats: Chat;
  users: User;
}

export interface $Phone$GroupParticipants {
  _: "phone.groupParticipants";
  count: number;
  participants: GroupCallParticipant;
  next_offset: string;
  chats: Chat;
  users: User;
  version: number;
}

export interface $InlineQueryPeerTypeSameBotPM {
  _: "inlineQueryPeerTypeSameBotPM";
}

export interface $InlineQueryPeerTypePM {
  _: "inlineQueryPeerTypePM";
}

export interface $InlineQueryPeerTypeChat {
  _: "inlineQueryPeerTypeChat";
}

export interface $InlineQueryPeerTypeMegagroup {
  _: "inlineQueryPeerTypeMegagroup";
}

export interface $InlineQueryPeerTypeBroadcast {
  _: "inlineQueryPeerTypeBroadcast";
}

export interface $ChannelAdminLogEventActionStartGroupCall {
  _: "channelAdminLogEventActionStartGroupCall";
  call: InputGroupCall;
}

export interface $ChannelAdminLogEventActionDiscardGroupCall {
  _: "channelAdminLogEventActionDiscardGroupCall";
  call: InputGroupCall;
}

export interface $ChannelAdminLogEventActionParticipantMute {
  _: "channelAdminLogEventActionParticipantMute";
  participant: GroupCallParticipant;
}

export interface $ChannelAdminLogEventActionParticipantUnmute {
  _: "channelAdminLogEventActionParticipantUnmute";
  participant: GroupCallParticipant;
}

export interface $ChannelAdminLogEventActionToggleGroupCallSetting {
  _: "channelAdminLogEventActionToggleGroupCallSetting";
  join_muted: Bool;
}

export interface $InputPaymentCredentialsGooglePay {
  _: "inputPaymentCredentialsGooglePay";
  payment_token: DataJSON;
}

export interface $Messages$HistoryImport {
  _: "messages.historyImport";
  id: number;
}

export interface $SendMessageHistoryImportAction {
  _: "sendMessageHistoryImportAction";
  progress: number;
}

export interface $Messages$HistoryImportParsed {
  _: "messages.historyImportParsed";
  flags?: Number;
  pm?: True;
  group?: True;
  title?: string;
}

export interface $InputReportReasonFake {
  _: "inputReportReasonFake";
}

export interface $Messages$AffectedFoundMessages {
  _: "messages.affectedFoundMessages";
  pts: number;
  pts_count: number;
  offset: number;
  messages: number[];
}

export interface $MessageActionSetMessagesTTL {
  _: "messageActionSetMessagesTTL";
  flags?: Number;
  period: number;
  auto_setting_from?: number;
}

export interface $UpdatePeerHistoryTTL {
  _: "updatePeerHistoryTTL";
  flags?: Number;
  peer: Peer;
  ttl_period?: number;
}

export interface $UpdateChatParticipant {
  _: "updateChatParticipant";
  flags?: Number;
  chat_id: number;
  date: number;
  actor_id: number;
  user_id: number;
  prev_participant?: ChatParticipant;
  new_participant?: ChatParticipant;
  invite?: ExportedChatInvite;
  qts: number;
}

export interface $UpdateChannelParticipant {
  _: "updateChannelParticipant";
  flags?: Number;
  via_chatlist?: True;
  channel_id: number;
  date: number;
  actor_id: number;
  user_id: number;
  prev_participant?: ChannelParticipant;
  new_participant?: ChannelParticipant;
  invite?: ExportedChatInvite;
  qts: number;
}

export interface $UpdateBotStopped {
  _: "updateBotStopped";
  user_id: number;
  date: number;
  stopped: Bool;
  qts: number;
}

export interface $ChatInviteImporter {
  _: "chatInviteImporter";
  flags?: Number;
  requested?: True;
  via_chatlist?: True;
  user_id: number;
  date: number;
  about?: string;
  approved_by?: number;
}

export interface $Messages$ExportedChatInvites {
  _: "messages.exportedChatInvites";
  count: number;
  invites: ExportedChatInvite;
  users: User;
}

export interface $Messages$ExportedChatInvite {
  _: "messages.exportedChatInvite";
  invite: ExportedChatInvite;
  users: User;
}

export interface $Messages$ExportedChatInviteReplaced {
  _: "messages.exportedChatInviteReplaced";
  invite: ExportedChatInvite;
  new_invite: ExportedChatInvite;
  users: User;
}

export interface $Messages$ChatInviteImporters {
  _: "messages.chatInviteImporters";
  count: number;
  importers: ChatInviteImporter;
  users: User;
}

export interface $ChatAdminWithInvites {
  _: "chatAdminWithInvites";
  admin_id: number;
  invites_count: number;
  revoked_invites_count: number;
}

export interface $Messages$ChatAdminsWithInvites {
  _: "messages.chatAdminsWithInvites";
  admins: ChatAdminWithInvites;
  users: User;
}

export interface $ChannelAdminLogEventActionParticipantJoinByInvite {
  _: "channelAdminLogEventActionParticipantJoinByInvite";
  flags?: Number;
  via_chatlist?: True;
  invite: ExportedChatInvite;
}

export interface $ChannelAdminLogEventActionExportedInviteDelete {
  _: "channelAdminLogEventActionExportedInviteDelete";
  invite: ExportedChatInvite;
}

export interface $ChannelAdminLogEventActionExportedInviteRevoke {
  _: "channelAdminLogEventActionExportedInviteRevoke";
  invite: ExportedChatInvite;
}

export interface $ChannelAdminLogEventActionExportedInviteEdit {
  _: "channelAdminLogEventActionExportedInviteEdit";
  prev_invite: ExportedChatInvite;
  new_invite: ExportedChatInvite;
}

export interface $ChannelAdminLogEventActionParticipantVolume {
  _: "channelAdminLogEventActionParticipantVolume";
  participant: GroupCallParticipant;
}

export interface $ChannelAdminLogEventActionChangeHistoryTTL {
  _: "channelAdminLogEventActionChangeHistoryTTL";
  prev_value: number;
  new_value: number;
}

export interface $Messages$CheckedHistoryImportPeer {
  _: "messages.checkedHistoryImportPeer";
  confirm_text: string;
}

export interface $InputGroupCallStream {
  _: "inputGroupCallStream";
  flags?: Number;
  call: InputGroupCall;
  time_ms: number;
  scale: number;
  video_channel?: number;
  video_quality?: number;
}

export interface $Phone$JoinAsPeers {
  _: "phone.joinAsPeers";
  peers: Peer;
  chats: Chat;
  users: User;
}

export interface $Phone$ExportedGroupCallInvite {
  _: "phone.exportedGroupCallInvite";
  link: string;
}

export interface $InputBotInlineMessageMediaInvoice {
  _: "inputBotInlineMessageMediaInvoice";
  flags?: Number;
  title: string;
  description: string;
  photo?: InputWebDocument;
  invoice: Invoice;
  payload: Uint8Array;
  provider: string;
  provider_data: DataJSON;
  reply_markup?: ReplyMarkup;
}

export interface $BotInlineMessageMediaInvoice {
  _: "botInlineMessageMediaInvoice";
  flags?: Number;
  shipping_address_requested?: True;
  test?: True;
  title: string;
  description: string;
  photo?: WebDocument;
  currency: string;
  total_amount: number;
  reply_markup?: ReplyMarkup;
}

export interface $MessageActionGroupCallScheduled {
  _: "messageActionGroupCallScheduled";
  call: InputGroupCall;
  schedule_date: number;
}

export interface $GroupCallParticipantVideoSourceGroup {
  _: "groupCallParticipantVideoSourceGroup";
  semantics: string;
  sources: number[];
}

export interface $GroupCallParticipantVideo {
  _: "groupCallParticipantVideo";
  flags?: Number;
  paused?: True;
  endpoint: string;
  source_groups: GroupCallParticipantVideoSourceGroup;
  audio_source?: number;
}

export interface $UpdateGroupCallConnection {
  _: "updateGroupCallConnection";
  flags?: Number;
  presentation?: True;
  params: DataJSON;
}

export interface $Stickers$SuggestedShortName {
  _: "stickers.suggestedShortName";
  short_name: string;
}

export interface $BotCommandScopeDefault {
  _: "botCommandScopeDefault";
}

export interface $BotCommandScopeUsers {
  _: "botCommandScopeUsers";
}

export interface $BotCommandScopeChats {
  _: "botCommandScopeChats";
}

export interface $BotCommandScopeChatAdmins {
  _: "botCommandScopeChatAdmins";
}

export interface $BotCommandScopePeer {
  _: "botCommandScopePeer";
  peer: InputPeer;
}

export interface $BotCommandScopePeerAdmins {
  _: "botCommandScopePeerAdmins";
  peer: InputPeer;
}

export interface $BotCommandScopePeerUser {
  _: "botCommandScopePeerUser";
  peer: InputPeer;
  user_id: InputUser;
}

export interface $Account$ResetPasswordFailedWait {
  _: "account.resetPasswordFailedWait";
  retry_date: number;
}

export interface $Account$ResetPasswordRequestedWait {
  _: "account.resetPasswordRequestedWait";
  until_date: number;
}

export interface $Account$ResetPasswordOk {
  _: "account.resetPasswordOk";
}

export interface $UpdateBotCommands {
  _: "updateBotCommands";
  peer: Peer;
  bot_id: number;
  commands: BotCommand;
}

export interface $MessageActionSetChatTheme {
  _: "messageActionSetChatTheme";
  emoticon: string;
}

export interface $SendMessageChooseStickerAction {
  _: "sendMessageChooseStickerAction";
}

export interface $SponsoredMessage {
  _: "sponsoredMessage";
  flags?: Number;
  recommended?: True;
  show_peer_photo?: True;
  random_id: Uint8Array;
  from_id?: Peer;
  chat_invite?: ChatInvite;
  chat_invite_hash?: string;
  channel_post?: number;
  start_param?: string;
  message: string;
  entities?: MessageEntity;
  sponsor_info?: string;
  additional_info?: string;
}

export interface $Messages$SponsoredMessages {
  _: "messages.sponsoredMessages";
  flags?: Number;
  posts_between?: number;
  messages: SponsoredMessage;
  chats: Chat;
  users: User;
}

export interface $InputStickerSetAnimatedEmojiAnimations {
  _: "inputStickerSetAnimatedEmojiAnimations";
}

export interface $SendMessageEmojiInteraction {
  _: "sendMessageEmojiInteraction";
  emoticon: string;
  msg_id: number;
  interaction: DataJSON;
}

export interface $SendMessageEmojiInteractionSeen {
  _: "sendMessageEmojiInteractionSeen";
  emoticon: string;
}

export interface $InputBotInlineMessageID64 {
  _: "inputBotInlineMessageID64";
  dc_id: number;
  owner_id: number;
  id: number;
  access_hash: number;
}

export interface $SearchResultsCalendarPeriod {
  _: "searchResultsCalendarPeriod";
  date: number;
  min_msg_id: number;
  max_msg_id: number;
  count: number;
}

export interface $Messages$SearchResultsCalendar {
  _: "messages.searchResultsCalendar";
  flags?: Number;
  inexact?: True;
  count: number;
  min_date: number;
  min_msg_id: number;
  offset_id_offset?: number;
  periods: SearchResultsCalendarPeriod;
  messages: Message;
  chats: Chat;
  users: User;
}

export interface $SearchResultPosition {
  _: "searchResultPosition";
  msg_id: number;
  date: number;
  offset: number;
}

export interface $Messages$SearchResultsPositions {
  _: "messages.searchResultsPositions";
  count: number;
  positions: SearchResultsPosition;
}

export interface $MessageActionChatJoinedByRequest {
  _: "messageActionChatJoinedByRequest";
}

export interface $UpdatePendingJoinRequests {
  _: "updatePendingJoinRequests";
  peer: Peer;
  requests_pending: number;
  recent_requesters: number[];
}

export interface $UpdateBotChatInviteRequester {
  _: "updateBotChatInviteRequester";
  peer: Peer;
  date: number;
  user_id: number;
  about: string;
  invite: ExportedChatInvite;
  qts: number;
}

export interface $ChannelAdminLogEventActionParticipantJoinByRequest {
  _: "channelAdminLogEventActionParticipantJoinByRequest";
  invite: ExportedChatInvite;
  approved_by: number;
}

export interface $InputKeyboardButtonUserProfile {
  _: "inputKeyboardButtonUserProfile";
  text: string;
  user_id: InputUser;
}

export interface $KeyboardButtonUserProfile {
  _: "keyboardButtonUserProfile";
  text: string;
  user_id: number;
}

export interface $Channels$SendAsPeers {
  _: "channels.sendAsPeers";
  peers: SendAsPeer;
  chats: Chat;
  users: User;
}

export interface $ChannelAdminLogEventActionToggleNoForwards {
  _: "channelAdminLogEventActionToggleNoForwards";
  new_value: Bool;
}

export interface $Messages$StickerSetNotModified {
  _: "messages.stickerSetNotModified";
}

export interface $Users$UserFull {
  _: "users.userFull";
  full_user: UserFull;
  chats: Chat;
  users: User;
}

export interface $Messages$PeerSettings {
  _: "messages.peerSettings";
  settings: PeerSettings;
  chats: Chat;
  users: User;
}

export interface $ChannelAdminLogEventActionSendMessage {
  _: "channelAdminLogEventActionSendMessage";
  message: Message;
}

export interface $Auth$CodeTypeMissedCall {
  _: "auth.codeTypeMissedCall";
}

export interface $Auth$SentCodeTypeMissedCall {
  _: "auth.sentCodeTypeMissedCall";
  prefix: string;
  length: number;
}

export interface $Auth$LoggedOut {
  _: "auth.loggedOut";
  flags?: Number;
  future_auth_token?: Uint8Array;
}

export interface $UpdateMessageReactions {
  _: "updateMessageReactions";
  flags?: Number;
  peer: Peer;
  msg_id: number;
  top_msg_id?: number;
  reactions: MessageReactions;
}

export interface $ReactionCount {
  _: "reactionCount";
  flags?: Number;
  chosen_order?: number;
  reaction: Reaction;
  count: number;
}

export interface $MessageReactions {
  _: "messageReactions";
  flags?: Number;
  min?: True;
  can_see_list?: True;
  results: ReactionCount;
  recent_reactions?: MessagePeerReaction;
}

export interface $Messages$MessageReactionsList {
  _: "messages.messageReactionsList";
  flags?: Number;
  count: number;
  reactions: MessagePeerReaction;
  chats: Chat;
  users: User;
  next_offset?: string;
}

export interface $AvailableReaction {
  _: "availableReaction";
  flags?: Number;
  inactive?: True;
  premium?: True;
  reaction: string;
  title: string;
  static_icon: Document;
  appear_animation: Document;
  select_animation: Document;
  activate_animation: Document;
  effect_animation: Document;
  around_animation?: Document;
  center_icon?: Document;
}

export interface $Messages$AvailableReactionsNotModified {
  _: "messages.availableReactionsNotModified";
}

export interface $Messages$AvailableReactions {
  _: "messages.availableReactions";
  hash: number;
  reactions: AvailableReaction;
}

export interface $MessageEntitySpoiler {
  _: "messageEntitySpoiler";
  offset: number;
  length: number;
}

export interface $ChannelAdminLogEventActionChangeAvailableReactions {
  _: "channelAdminLogEventActionChangeAvailableReactions";
  prev_value: ChatReactions;
  new_value: ChatReactions;
}

export interface $MessagePeerReaction {
  _: "messagePeerReaction";
  flags?: Number;
  big?: True;
  unread?: True;
  my?: True;
  peer_id: Peer;
  date: number;
  reaction: Reaction;
}

export interface $GroupCallStreamChannel {
  _: "groupCallStreamChannel";
  channel: number;
  scale: number;
  last_timestamp_ms: number;
}

export interface $Phone$GroupCallStreamChannels {
  _: "phone.groupCallStreamChannels";
  channels: GroupCallStreamChannel;
}

export interface $InputReportReasonIllegalDrugs {
  _: "inputReportReasonIllegalDrugs";
}

export interface $InputReportReasonPersonalDetails {
  _: "inputReportReasonPersonalDetails";
}

export interface $Phone$GroupCallStreamRtmpUrl {
  _: "phone.groupCallStreamRtmpUrl";
  url: string;
  key: string;
}

export interface $AttachMenuBotIconColor {
  _: "attachMenuBotIconColor";
  name: string;
  color: number;
}

export interface $AttachMenuBotIcon {
  _: "attachMenuBotIcon";
  flags?: Number;
  name: string;
  icon: Document;
  colors?: AttachMenuBotIconColor;
}

export interface $AttachMenuBot {
  _: "attachMenuBot";
  flags?: Number;
  inactive?: True;
  has_settings?: True;
  request_write_access?: True;
  bot_id: number;
  short_name: string;
  peer_types: AttachMenuPeerType;
  icons: AttachMenuBotIcon;
}

export interface $AttachMenuBotsNotModified {
  _: "attachMenuBotsNotModified";
}

export interface $AttachMenuBots {
  _: "attachMenuBots";
  hash: number;
  bots: AttachMenuBot;
  users: User;
}

export interface $AttachMenuBotsBot {
  _: "attachMenuBotsBot";
  bot: AttachMenuBot;
  users: User;
}

export interface $UpdateAttachMenuBots {
  _: "updateAttachMenuBots";
}

export interface $WebViewResultUrl {
  _: "webViewResultUrl";
  query_id: number;
  url: string;
}

export interface $SimpleWebViewResultUrl {
  _: "simpleWebViewResultUrl";
  url: string;
}

export interface $WebViewMessageSent {
  _: "webViewMessageSent";
  flags?: Number;
  msg_id?: InputBotInlineMessageID;
}

export interface $UpdateWebViewResultSent {
  _: "updateWebViewResultSent";
  query_id: number;
}

export interface $KeyboardButtonWebView {
  _: "keyboardButtonWebView";
  text: string;
  url: string;
}

export interface $KeyboardButtonSimpleWebView {
  _: "keyboardButtonSimpleWebView";
  text: string;
  url: string;
}

export interface $MessageActionWebViewDataSentMe {
  _: "messageActionWebViewDataSentMe";
  text: string;
  data: string;
}

export interface $MessageActionWebViewDataSent {
  _: "messageActionWebViewDataSent";
  text: string;
}

export interface $UpdateBotMenuButton {
  _: "updateBotMenuButton";
  bot_id: number;
  button: BotMenuButton;
}

export interface $BotMenuButtonDefault {
  _: "botMenuButtonDefault";
}

export interface $BotMenuButtonCommands {
  _: "botMenuButtonCommands";
}

export interface $BotMenuButton {
  _: "botMenuButton";
  text: string;
  url: string;
}

export interface $Account$SavedRingtonesNotModified {
  _: "account.savedRingtonesNotModified";
}

export interface $Account$SavedRingtones {
  _: "account.savedRingtones";
  hash: number;
  ringtones: Document;
}

export interface $UpdateSavedRingtones {
  _: "updateSavedRingtones";
}

export interface $NotificationSoundDefault {
  _: "notificationSoundDefault";
}

export interface $NotificationSoundNone {
  _: "notificationSoundNone";
}

export interface $NotificationSoundLocal {
  _: "notificationSoundLocal";
  title: string;
  data: string;
}

export interface $NotificationSoundRingtone {
  _: "notificationSoundRingtone";
  id: number;
}

export interface $Account$SavedRingtone {
  _: "account.savedRingtone";
}

export interface $Account$SavedRingtoneConverted {
  _: "account.savedRingtoneConverted";
  document: Document;
}

export interface $AttachMenuPeerTypeSameBotPM {
  _: "attachMenuPeerTypeSameBotPM";
}

export interface $AttachMenuPeerTypeBotPM {
  _: "attachMenuPeerTypeBotPM";
}

export interface $AttachMenuPeerTypePM {
  _: "attachMenuPeerTypePM";
}

export interface $AttachMenuPeerTypeChat {
  _: "attachMenuPeerTypeChat";
}

export interface $AttachMenuPeerTypeBroadcast {
  _: "attachMenuPeerTypeBroadcast";
}

export interface $ChatInvitePublicJoinRequests {
  _: "chatInvitePublicJoinRequests";
}

export interface $InputInvoiceMessage {
  _: "inputInvoiceMessage";
  peer: InputPeer;
  msg_id: number;
}

export interface $InputInvoiceSlug {
  _: "inputInvoiceSlug";
  slug: string;
}

export interface $Payments$ExportedInvoice {
  _: "payments.exportedInvoice";
  url: string;
}

export interface $UpdateTranscribedAudio {
  _: "updateTranscribedAudio";
  flags?: Number;
  pending?: True;
  peer: Peer;
  msg_id: number;
  transcription_id: number;
  text: string;
}

export interface $Messages$TranscribedAudio {
  _: "messages.transcribedAudio";
  flags?: Number;
  pending?: True;
  transcription_id: number;
  text: string;
}

export interface $DialogFilterDefault {
  _: "dialogFilterDefault";
}

export interface $Help$PremiumPromo {
  _: "help.premiumPromo";
  status_text: string;
  status_entities: MessageEntity;
  video_sections: string[];
  videos: Document;
  period_options: PremiumSubscriptionOption;
  users: User;
}

export interface $MessageEntityCustomEmoji {
  _: "messageEntityCustomEmoji";
  offset: number;
  length: number;
  document_id: number;
}

export interface $DocumentAttributeCustomEmoji {
  _: "documentAttributeCustomEmoji";
  flags?: Number;
  free?: True;
  text_color?: True;
  alt: string;
  stickerset: InputStickerSet;
}

export interface $StickerSetFullCovered {
  _: "stickerSetFullCovered";
  set: StickerSet;
  packs: StickerPack;
  keywords: StickerKeyword;
  documents: Document;
}

export interface $InputStorePaymentPremiumSubscription {
  _: "inputStorePaymentPremiumSubscription";
  flags?: Number;
  restore?: True;
  upgrade?: True;
}

export interface $InputStorePaymentGiftPremium {
  _: "inputStorePaymentGiftPremium";
  user_id: InputUser;
  currency: string;
  amount: number;
}

export interface $MessageActionGiftPremium {
  _: "messageActionGiftPremium";
  flags?: Number;
  currency: string;
  amount: number;
  months: number;
  crypto_currency?: string;
  crypto_amount?: number;
}

export interface $PremiumGiftOption {
  _: "premiumGiftOption";
  flags?: Number;
  months: number;
  currency: string;
  amount: number;
  bot_url: string;
  store_product?: string;
}

export interface $InputStickerSetPremiumGifts {
  _: "inputStickerSetPremiumGifts";
}

export interface $UpdateReadFeaturedEmojiStickers {
  _: "updateReadFeaturedEmojiStickers";
}

export interface $InputPrivacyKeyVoiceMessages {
  _: "inputPrivacyKeyVoiceMessages";
}

export interface $PrivacyKeyVoiceMessages {
  _: "privacyKeyVoiceMessages";
}

export interface $PaymentFormMethod {
  _: "paymentFormMethod";
  url: string;
  title: string;
}

export interface $InputWebFileAudioAlbumThumbLocation {
  _: "inputWebFileAudioAlbumThumbLocation";
  flags?: Number;
  small?: True;
  document?: InputDocument;
  title?: string;
  performer?: string;
}

export interface $EmojiStatusEmpty {
  _: "emojiStatusEmpty";
}

export interface $EmojiStatus {
  _: "emojiStatus";
  document_id: number;
}

export interface $EmojiStatusUntil {
  _: "emojiStatusUntil";
  document_id: number;
  until: number;
}

export interface $UpdateUserEmojiStatus {
  _: "updateUserEmojiStatus";
  user_id: number;
  emoji_status: EmojiStatus;
}

export interface $UpdateRecentEmojiStatuses {
  _: "updateRecentEmojiStatuses";
}

export interface $Account$EmojiStatusesNotModified {
  _: "account.emojiStatusesNotModified";
}

export interface $Account$EmojiStatuses {
  _: "account.emojiStatuses";
  hash: number;
  statuses: EmojiStatus;
}

export interface $ReactionEmpty {
  _: "reactionEmpty";
}

export interface $ReactionEmoji {
  _: "reactionEmoji";
  emoticon: string;
}

export interface $ReactionCustomEmoji {
  _: "reactionCustomEmoji";
  document_id: number;
}

export interface $ChatReactionsNone {
  _: "chatReactionsNone";
}

export interface $ChatReactionsAll {
  _: "chatReactionsAll";
  flags?: Number;
  allow_custom?: True;
}

export interface $ChatReactionsSome {
  _: "chatReactionsSome";
  reactions: Reaction;
}

export interface $Messages$ReactionsNotModified {
  _: "messages.reactionsNotModified";
}

export interface $Messages$Reactions {
  _: "messages.reactions";
  hash: number;
  reactions: Reaction;
}

export interface $UpdateRecentReactions {
  _: "updateRecentReactions";
}

export interface $UpdateMoveStickerSetToTop {
  _: "updateMoveStickerSetToTop";
  flags?: Number;
  masks?: True;
  emojis?: True;
  stickerset: number;
}

export interface $Auth$SentCodeTypeEmailCode {
  _: "auth.sentCodeTypeEmailCode";
  flags?: Number;
  apple_signin_allowed?: True;
  google_signin_allowed?: True;
  email_pattern: string;
  length: number;
  reset_available_period?: number;
  reset_pending_date?: number;
}

export interface $Auth$SentCodeTypeSetUpEmailRequired {
  _: "auth.sentCodeTypeSetUpEmailRequired";
  flags?: Number;
  apple_signin_allowed?: True;
  google_signin_allowed?: True;
}

export interface $EmailVerifyPurposeLoginSetup {
  _: "emailVerifyPurposeLoginSetup";
  phone_number: string;
  phone_code_hash: string;
}

export interface $EmailVerifyPurposeLoginChange {
  _: "emailVerifyPurposeLoginChange";
}

export interface $EmailVerifyPurposePassport {
  _: "emailVerifyPurposePassport";
}

export interface $EmailVerificationCode {
  _: "emailVerificationCode";
  code: string;
}

export interface $EmailVerificationGoogle {
  _: "emailVerificationGoogle";
  token: string;
}

export interface $EmailVerificationApple {
  _: "emailVerificationApple";
  token: string;
}

export interface $Account$EmailVerified {
  _: "account.emailVerified";
  email: string;
}

export interface $Account$EmailVerifiedLogin {
  _: "account.emailVerifiedLogin";
  email: string;
  sent_code: Auth$SentCode;
}

export interface $PremiumSubscriptionOption {
  _: "premiumSubscriptionOption";
  flags?: Number;
  current?: True;
  can_purchase_upgrade?: True;
  transaction?: string;
  months: number;
  currency: string;
  amount: number;
  bot_url: string;
  store_product?: string;
}

export interface $InputStickerSetEmojiGenericAnimations {
  _: "inputStickerSetEmojiGenericAnimations";
}

export interface $InputStickerSetEmojiDefaultStatuses {
  _: "inputStickerSetEmojiDefaultStatuses";
}

export interface $SendAsPeer {
  _: "sendAsPeer";
  flags?: Number;
  premium_required?: True;
  peer: Peer;
}

export interface $MessageExtendedMediaPreview {
  _: "messageExtendedMediaPreview";
  flags?: Number;
  w?: number;
  h?: number;
  thumb?: PhotoSize;
  video_duration?: number;
}

export interface $MessageExtendedMedia {
  _: "messageExtendedMedia";
  media: MessageMedia;
}

export interface $UpdateMessageExtendedMedia {
  _: "updateMessageExtendedMedia";
  peer: Peer;
  msg_id: number;
  extended_media: MessageExtendedMedia;
}

export interface $StickerKeyword {
  _: "stickerKeyword";
  document_id: number;
  keyword: string[];
}

export interface $Username {
  _: "username";
  flags?: Number;
  editable?: True;
  active?: True;
  username: string;
}

export interface $ChannelAdminLogEventActionChangeUsernames {
  _: "channelAdminLogEventActionChangeUsernames";
  prev_value: string[];
  new_value: string[];
}

export interface $ChannelAdminLogEventActionToggleForum {
  _: "channelAdminLogEventActionToggleForum";
  new_value: Bool;
}

export interface $ChannelAdminLogEventActionCreateTopic {
  _: "channelAdminLogEventActionCreateTopic";
  topic: ForumTopic;
}

export interface $ChannelAdminLogEventActionEditTopic {
  _: "channelAdminLogEventActionEditTopic";
  prev_topic: ForumTopic;
  new_topic: ForumTopic;
}

export interface $ChannelAdminLogEventActionDeleteTopic {
  _: "channelAdminLogEventActionDeleteTopic";
  topic: ForumTopic;
}

export interface $ChannelAdminLogEventActionPinTopic {
  _: "channelAdminLogEventActionPinTopic";
  flags?: Number;
  prev_topic?: ForumTopic;
  new_topic?: ForumTopic;
}

export interface $ForumTopicDeleted {
  _: "forumTopicDeleted";
  id: number;
}

export interface $ForumTopic {
  _: "forumTopic";
  flags?: Number;
  my?: True;
  closed?: True;
  pinned?: True;
  short?: True;
  hidden?: True;
  id: number;
  date: number;
  title: string;
  icon_color: number;
  icon_emoji_id?: number;
  top_message: number;
  read_inbox_max_id: number;
  read_outbox_max_id: number;
  unread_count: number;
  unread_mentions_count: number;
  unread_reactions_count: number;
  from_id: Peer;
  notify_settings: PeerNotifySettings;
  draft?: DraftMessage;
}

export interface $Messages$ForumTopics {
  _: "messages.forumTopics";
  flags?: Number;
  order_by_create_date?: True;
  count: number;
  topics: ForumTopic;
  messages: Message;
  chats: Chat;
  users: User;
  pts: number;
}

export interface $MessageActionTopicCreate {
  _: "messageActionTopicCreate";
  flags?: Number;
  title: string;
  icon_color: number;
  icon_emoji_id?: number;
}

export interface $MessageActionTopicEdit {
  _: "messageActionTopicEdit";
  flags?: Number;
  title?: string;
  icon_emoji_id?: number;
  closed?: Bool;
  hidden?: Bool;
}

export interface $UpdateChannelPinnedTopic {
  _: "updateChannelPinnedTopic";
  flags?: Number;
  pinned?: True;
  channel_id: number;
  topic_id: number;
}

export interface $InputNotifyForumTopic {
  _: "inputNotifyForumTopic";
  peer: InputPeer;
  top_msg_id: number;
}

export interface $NotifyForumTopic {
  _: "notifyForumTopic";
  peer: Peer;
  top_msg_id: number;
}

export interface $InputStickerSetEmojiDefaultTopicIcons {
  _: "inputStickerSetEmojiDefaultTopicIcons";
}

export interface $Messages$SponsoredMessagesEmpty {
  _: "messages.sponsoredMessagesEmpty";
}

export interface $UpdateChannelPinnedTopics {
  _: "updateChannelPinnedTopics";
  flags?: Number;
  channel_id: number;
  order?: number[];
}

export interface $DefaultHistoryTTL {
  _: "defaultHistoryTTL";
  period: number;
}

export interface $Auth$CodeTypeFragmentSms {
  _: "auth.codeTypeFragmentSms";
}

export interface $Auth$SentCodeTypeFragmentSms {
  _: "auth.sentCodeTypeFragmentSms";
  url: string;
  length: number;
}

export interface $ExportedContactToken {
  _: "exportedContactToken";
  url: string;
  expires: number;
}

export interface $ChannelAdminLogEventActionToggleAntiSpam {
  _: "channelAdminLogEventActionToggleAntiSpam";
  new_value: Bool;
}

export interface $MessageActionSuggestProfilePhoto {
  _: "messageActionSuggestProfilePhoto";
  photo: Photo;
}

export interface $StickerSetNoCovered {
  _: "stickerSetNoCovered";
  set: StickerSet;
}

export interface $UpdateUser {
  _: "updateUser";
  user_id: number;
}

export interface $Auth$SentCodeSuccess {
  _: "auth.sentCodeSuccess";
  authorization: Auth$Authorization;
}

export interface $MessageActionRequestedPeer {
  _: "messageActionRequestedPeer";
  button_id: number;
  peer: Peer;
}

export interface $RequestPeerTypeUser {
  _: "requestPeerTypeUser";
  flags?: Number;
  bot?: Bool;
  premium?: Bool;
}

export interface $RequestPeerTypeChat {
  _: "requestPeerTypeChat";
  flags?: Number;
  creator?: True;
  bot_participant?: True;
  has_username?: Bool;
  forum?: Bool;
  user_admin_rights?: ChatAdminRights;
  bot_admin_rights?: ChatAdminRights;
}

export interface $RequestPeerTypeBroadcast {
  _: "requestPeerTypeBroadcast";
  flags?: Number;
  creator?: True;
  has_username?: Bool;
  user_admin_rights?: ChatAdminRights;
  bot_admin_rights?: ChatAdminRights;
}

export interface $KeyboardButtonRequestPeer {
  _: "keyboardButtonRequestPeer";
  text: string;
  button_id: number;
  peer_type: RequestPeerType;
}

export interface $EmojiListNotModified {
  _: "emojiListNotModified";
}

export interface $EmojiList {
  _: "emojiList";
  hash: number;
  document_id: number[];
}

export interface $Auth$SentCodeTypeFirebaseSms {
  _: "auth.sentCodeTypeFirebaseSms";
  flags?: Number;
  nonce?: Uint8Array;
  receipt?: string;
  push_timeout?: number;
  length: number;
}

export interface $EmojiGroup {
  _: "emojiGroup";
  title: string;
  icon_emoji_id: number;
  emoticons: string[];
}

export interface $Messages$EmojiGroupsNotModified {
  _: "messages.emojiGroupsNotModified";
}

export interface $Messages$EmojiGroups {
  _: "messages.emojiGroups";
  hash: number;
  groups: EmojiGroup;
}

export interface $VideoSizeEmojiMarkup {
  _: "videoSizeEmojiMarkup";
  emoji_id: number;
  background_colors: number[];
}

export interface $VideoSizeStickerMarkup {
  _: "videoSizeStickerMarkup";
  stickerset: InputStickerSet;
  sticker_id: number;
  background_colors: number[];
}

export interface $TextWithEntities {
  _: "textWithEntities";
  text: string;
  entities: MessageEntity;
}

export interface $Messages$TranslateResult {
  _: "messages.translateResult";
  result: TextWithEntities;
}

export interface $AutoSaveSettings {
  _: "autoSaveSettings";
  flags?: Number;
  photos?: True;
  videos?: True;
  video_max_size?: number;
}

export interface $AutoSaveException {
  _: "autoSaveException";
  peer: Peer;
  settings: AutoSaveSettings;
}

export interface $Account$AutoSaveSettings {
  _: "account.autoSaveSettings";
  users_settings: AutoSaveSettings;
  chats_settings: AutoSaveSettings;
  broadcasts_settings: AutoSaveSettings;
  exceptions: AutoSaveException;
  chats: Chat;
  users: User;
}

export interface $UpdateAutoSaveSettings {
  _: "updateAutoSaveSettings";
}

export interface $Help$AppConfigNotModified {
  _: "help.appConfigNotModified";
}

export interface $Help$AppConfig {
  _: "help.appConfig";
  hash: number;
  config: JSONValue;
}

export interface $InputBotAppID {
  _: "inputBotAppID";
  id: number;
  access_hash: number;
}

export interface $InputBotAppShortName {
  _: "inputBotAppShortName";
  bot_id: InputUser;
  short_name: string;
}

export interface $BotAppNotModified {
  _: "botAppNotModified";
}

export interface $BotApp {
  _: "botApp";
  flags?: Number;
  id: number;
  access_hash: number;
  short_name: string;
  title: string;
  description: string;
  photo: Photo;
  document?: Document;
  hash: number;
}

export interface $Messages$BotApp {
  _: "messages.botApp";
  flags?: Number;
  inactive?: True;
  request_write_access?: True;
  app: BotApp;
}

export interface $AppWebViewResultUrl {
  _: "appWebViewResultUrl";
  url: string;
}

export interface $InlineBotWebView {
  _: "inlineBotWebView";
  text: string;
  url: string;
}

export interface $ReadParticipantDate {
  _: "readParticipantDate";
  user_id: number;
  date: number;
}

export interface $UpdateGroupInvitePrivacyForbidden {
  _: "updateGroupInvitePrivacyForbidden";
  user_id: number;
}

export interface $DialogFilterChatlist {
  _: "dialogFilterChatlist";
  flags?: Number;
  has_my_invites?: True;
  id: number;
  title: string;
  emoticon?: string;
  pinned_peers: InputPeer;
  include_peers: InputPeer;
}

export interface $InputChatlistDialogFilter {
  _: "inputChatlistDialogFilter";
  filter_id: number;
}

export interface $ExportedChatlistInvite {
  _: "exportedChatlistInvite";
  flags?: Number;
  title: string;
  url: string;
  peers: Peer;
}

export interface $Chatlists$ExportedChatlistInvite {
  _: "chatlists.exportedChatlistInvite";
  filter: DialogFilter;
  invite: ExportedChatlistInvite;
}

export interface $Chatlists$ExportedInvites {
  _: "chatlists.exportedInvites";
  invites: ExportedChatlistInvite;
  chats: Chat;
  users: User;
}

export interface $Chatlists$ChatlistInviteAlready {
  _: "chatlists.chatlistInviteAlready";
  filter_id: number;
  missing_peers: Peer;
  already_peers: Peer;
  chats: Chat;
  users: User;
}

export interface $Chatlists$ChatlistInvite {
  _: "chatlists.chatlistInvite";
  flags?: Number;
  title: string;
  emoticon?: string;
  peers: Peer;
  chats: Chat;
  users: User;
}

export interface $Chatlists$ChatlistUpdates {
  _: "chatlists.chatlistUpdates";
  missing_peers: Peer;
  chats: Chat;
  users: User;
}

export interface $MessageActionSetChatWallPaper {
  _: "messageActionSetChatWallPaper";
  wallpaper: WallPaper;
}

export interface $MessageActionSetSameChatWallPaper {
  _: "messageActionSetSameChatWallPaper";
  wallpaper: WallPaper;
}

export interface $Bots$BotInfo {
  _: "bots.botInfo";
  name: string;
  about: string;
  description: string;
}

export interface $InlineQueryPeerTypeBotPM {
  _: "inlineQueryPeerTypeBotPM";
}
export type Methods = InvokeAfterMsg |
  InvokeAfterMsgs |
  Auth$SendCode |
  Auth$SignUp |
  Auth$SignIn |
  Auth$LogOut |
  Auth$ResetAuthorizations |
  Auth$ExportAuthorization |
  Auth$ImportAuthorization |
  Auth$BindTempAuthKey |
  Account$RegisterDevice |
  Account$UnregisterDevice |
  Account$UpdateNotifySettings |
  Account$GetNotifySettings |
  Account$ResetNotifySettings |
  Account$UpdateProfile |
  Account$UpdateStatus |
  Account$GetWallPapers |
  Account$ReportPeer |
  Users$GetUsers |
  Users$GetFullUser |
  Contacts$GetContactIDs |
  Contacts$GetStatuses |
  Contacts$GetContacts |
  Contacts$ImportContacts |
  Contacts$DeleteContacts |
  Contacts$DeleteByPhones |
  Contacts$Block |
  Contacts$Unblock |
  Contacts$GetBlocked |
  Messages$GetMessages |
  Messages$GetDialogs |
  Messages$GetHistory |
  Messages$Search |
  Messages$ReadHistory |
  Messages$DeleteHistory |
  Messages$DeleteMessages |
  Messages$ReceivedMessages |
  Messages$SetTyping |
  Messages$SendMessage |
  Messages$SendMedia |
  Messages$ForwardMessages |
  Messages$ReportSpam |
  Messages$GetPeerSettings |
  Messages$Report |
  Messages$GetChats |
  Messages$GetFullChat |
  Messages$EditChatTitle |
  Messages$EditChatPhoto |
  Messages$AddChatUser |
  Messages$DeleteChatUser |
  Messages$CreateChat |
  Updates$GetState |
  Updates$GetDifference |
  Photos$UpdateProfilePhoto |
  Photos$UploadProfilePhoto |
  Photos$DeletePhotos |
  Upload$SaveFilePart |
  Upload$GetFile |
  Help$GetConfig |
  Help$GetNearestDc |
  Help$GetAppUpdate |
  Help$GetInviteText |
  Photos$GetUserPhotos |
  Messages$GetDhConfig |
  Messages$RequestEncryption |
  Messages$AcceptEncryption |
  Messages$DiscardEncryption |
  Messages$SetEncryptedTyping |
  Messages$ReadEncryptedHistory |
  Messages$SendEncrypted |
  Messages$SendEncryptedFile |
  Messages$SendEncryptedService |
  Messages$ReceivedQueue |
  Messages$ReportEncryptedSpam |
  Upload$SaveBigFilePart |
  InitConnection |
  Help$GetSupport |
  Messages$ReadMessageContents |
  Account$CheckUsername |
  Account$UpdateUsername |
  Contacts$Search |
  Account$GetPrivacy |
  Account$SetPrivacy |
  Account$DeleteAccount |
  Account$GetAccountTTL |
  Account$SetAccountTTL |
  InvokeWithLayer |
  Contacts$ResolveUsername |
  Account$SendChangePhoneCode |
  Account$ChangePhone |
  Messages$GetStickers |
  Messages$GetAllStickers |
  Account$UpdateDeviceLocked |
  Auth$ImportBotAuthorization |
  Messages$GetWebPagePreview |
  Account$GetAuthorizations |
  Account$ResetAuthorization |
  Account$GetPassword |
  Account$GetPasswordSettings |
  Account$UpdatePasswordSettings |
  Auth$CheckPassword |
  Auth$RequestPasswordRecovery |
  Auth$RecoverPassword |
  InvokeWithoutUpdates |
  Messages$ExportChatInvite |
  Messages$CheckChatInvite |
  Messages$ImportChatInvite |
  Messages$GetStickerSet |
  Messages$InstallStickerSet |
  Messages$UninstallStickerSet |
  Messages$StartBot |
  Help$GetAppChangelog |
  Messages$GetMessagesViews |
  Channels$ReadHistory |
  Channels$DeleteMessages |
  Channels$ReportSpam |
  Channels$GetMessages |
  Channels$GetParticipants |
  Channels$GetParticipant |
  Channels$GetChannels |
  Channels$GetFullChannel |
  Channels$CreateChannel |
  Channels$EditAdmin |
  Channels$EditTitle |
  Channels$EditPhoto |
  Channels$CheckUsername |
  Channels$UpdateUsername |
  Channels$JoinChannel |
  Channels$LeaveChannel |
  Channels$InviteToChannel |
  Channels$DeleteChannel |
  Updates$GetChannelDifference |
  Messages$EditChatAdmin |
  Messages$MigrateChat |
  Messages$SearchGlobal |
  Messages$ReorderStickerSets |
  Messages$GetDocumentByHash |
  Messages$GetSavedGifs |
  Messages$SaveGif |
  Messages$GetInlineBotResults |
  Messages$SetInlineBotResults |
  Messages$SendInlineBotResult |
  Channels$ExportMessageLink |
  Channels$ToggleSignatures |
  Auth$ResendCode |
  Auth$CancelCode |
  Messages$GetMessageEditData |
  Messages$EditMessage |
  Messages$EditInlineBotMessage |
  Messages$GetBotCallbackAnswer |
  Messages$SetBotCallbackAnswer |
  Contacts$GetTopPeers |
  Contacts$ResetTopPeerRating |
  Messages$GetPeerDialogs |
  Messages$SaveDraft |
  Messages$GetAllDrafts |
  Messages$GetFeaturedStickers |
  Messages$ReadFeaturedStickers |
  Messages$GetRecentStickers |
  Messages$SaveRecentSticker |
  Messages$ClearRecentStickers |
  Messages$GetArchivedStickers |
  Account$SendConfirmPhoneCode |
  Account$ConfirmPhone |
  Channels$GetAdminedPublicChannels |
  Messages$GetMaskStickers |
  Messages$GetAttachedStickers |
  Auth$DropTempAuthKeys |
  Messages$SetGameScore |
  Messages$SetInlineGameScore |
  Messages$GetGameHighScores |
  Messages$GetInlineGameHighScores |
  Messages$GetCommonChats |
  Help$SetBotUpdatesStatus |
  Messages$GetWebPage |
  Messages$ToggleDialogPin |
  Messages$ReorderPinnedDialogs |
  Messages$GetPinnedDialogs |
  Bots$SendCustomRequest |
  Bots$AnswerWebhookJSONQuery |
  Upload$GetWebFile |
  Payments$GetPaymentForm |
  Payments$GetPaymentReceipt |
  Payments$ValidateRequestedInfo |
  Payments$SendPaymentForm |
  Account$GetTmpPassword |
  Payments$GetSavedInfo |
  Payments$ClearSavedInfo |
  Messages$SetBotShippingResults |
  Messages$SetBotPrecheckoutResults |
  Stickers$CreateStickerSet |
  Stickers$RemoveStickerFromSet |
  Stickers$ChangeStickerPosition |
  Stickers$AddStickerToSet |
  Messages$UploadMedia |
  Phone$GetCallConfig |
  Phone$RequestCall |
  Phone$AcceptCall |
  Phone$ConfirmCall |
  Phone$ReceivedCall |
  Phone$DiscardCall |
  Phone$SetCallRating |
  Phone$SaveCallDebug |
  Upload$GetCdnFile |
  Upload$ReuploadCdnFile |
  Help$GetCdnConfig |
  Langpack$GetLangPack |
  Langpack$GetStrings |
  Langpack$GetDifference |
  Langpack$GetLanguages |
  Channels$EditBanned |
  Channels$GetAdminLog |
  Upload$GetCdnFileHashes |
  Messages$SendScreenshotNotification |
  Channels$SetStickers |
  Messages$GetFavedStickers |
  Messages$FaveSticker |
  Channels$ReadMessageContents |
  Contacts$ResetSaved |
  Messages$GetUnreadMentions |
  Channels$DeleteHistory |
  Help$GetRecentMeUrls |
  Channels$TogglePreHistoryHidden |
  Messages$ReadMentions |
  Messages$GetRecentLocations |
  Messages$SendMultiMedia |
  Messages$UploadEncryptedFile |
  Account$GetWebAuthorizations |
  Account$ResetWebAuthorization |
  Account$ResetWebAuthorizations |
  Messages$SearchStickerSets |
  Upload$GetFileHashes |
  Help$GetTermsOfServiceUpdate |
  Help$AcceptTermsOfService |
  Account$GetAllSecureValues |
  Account$GetSecureValue |
  Account$SaveSecureValue |
  Account$DeleteSecureValue |
  Users$SetSecureValueErrors |
  Account$GetAuthorizationForm |
  Account$AcceptAuthorization |
  Account$SendVerifyPhoneCode |
  Account$VerifyPhone |
  Account$SendVerifyEmailCode |
  Account$VerifyEmail |
  Help$GetDeepLinkInfo |
  Contacts$GetSaved |
  Channels$GetLeftChannels |
  Account$InitTakeoutSession |
  Account$FinishTakeoutSession |
  Messages$GetSplitRanges |
  InvokeWithMessagesRange |
  InvokeWithTakeout |
  Messages$MarkDialogUnread |
  Messages$GetDialogUnreadMarks |
  Contacts$ToggleTopPeers |
  Messages$ClearAllDrafts |
  Help$GetAppConfig |
  Help$SaveAppLog |
  Help$GetPassportConfig |
  Langpack$GetLanguage |
  Messages$UpdatePinnedMessage |
  Account$ConfirmPasswordEmail |
  Account$ResendPasswordEmail |
  Account$CancelPasswordEmail |
  Help$GetSupportName |
  Help$GetUserInfo |
  Help$EditUserInfo |
  Account$GetContactSignUpNotification |
  Account$SetContactSignUpNotification |
  Account$GetNotifyExceptions |
  Messages$SendVote |
  Messages$GetPollResults |
  Messages$GetOnlines |
  Messages$EditChatAbout |
  Messages$EditChatDefaultBannedRights |
  Account$GetWallPaper |
  Account$UploadWallPaper |
  Account$SaveWallPaper |
  Account$InstallWallPaper |
  Account$ResetWallPapers |
  Account$GetAutoDownloadSettings |
  Account$SaveAutoDownloadSettings |
  Messages$GetEmojiKeywords |
  Messages$GetEmojiKeywordsDifference |
  Messages$GetEmojiKeywordsLanguages |
  Messages$GetEmojiURL |
  Folders$EditPeerFolders |
  Messages$GetSearchCounters |
  Channels$GetGroupsForDiscussion |
  Channels$SetDiscussionGroup |
  Messages$RequestUrlAuth |
  Messages$AcceptUrlAuth |
  Messages$HidePeerSettingsBar |
  Contacts$AddContact |
  Contacts$AcceptContact |
  Channels$EditCreator |
  Contacts$GetLocated |
  Channels$EditLocation |
  Channels$ToggleSlowMode |
  Messages$GetScheduledHistory |
  Messages$GetScheduledMessages |
  Messages$SendScheduledMessages |
  Messages$DeleteScheduledMessages |
  Account$UploadTheme |
  Account$CreateTheme |
  Account$UpdateTheme |
  Account$SaveTheme |
  Account$InstallTheme |
  Account$GetTheme |
  Account$GetThemes |
  Auth$ExportLoginToken |
  Auth$ImportLoginToken |
  Auth$AcceptLoginToken |
  Account$SetContentSettings |
  Account$GetContentSettings |
  Channels$GetInactiveChannels |
  Account$GetMultiWallPapers |
  Messages$GetPollVotes |
  Messages$ToggleStickerSets |
  Payments$GetBankCardData |
  Messages$GetDialogFilters |
  Messages$GetSuggestedDialogFilters |
  Messages$UpdateDialogFilter |
  Messages$UpdateDialogFiltersOrder |
  Stats$GetBroadcastStats |
  Stats$LoadAsyncGraph |
  Stickers$SetStickerSetThumb |
  Bots$SetBotCommands |
  Messages$GetOldFeaturedStickers |
  Help$GetPromoData |
  Help$HidePromoData |
  Phone$SendSignalingData |
  Stats$GetMegagroupStats |
  Account$GetGlobalPrivacySettings |
  Account$SetGlobalPrivacySettings |
  Help$DismissSuggestion |
  Help$GetCountriesList |
  Messages$GetReplies |
  Messages$GetDiscussionMessage |
  Messages$ReadDiscussion |
  Contacts$BlockFromReplies |
  Stats$GetMessagePublicForwards |
  Stats$GetMessageStats |
  Messages$UnpinAllMessages |
  Phone$CreateGroupCall |
  Phone$JoinGroupCall |
  Phone$LeaveGroupCall |
  Phone$InviteToGroupCall |
  Phone$DiscardGroupCall |
  Phone$ToggleGroupCallSettings |
  Phone$GetGroupCall |
  Phone$GetGroupParticipants |
  Phone$CheckGroupCall |
  Messages$DeleteChat |
  Messages$DeletePhoneCallHistory |
  Messages$CheckHistoryImport |
  Messages$InitHistoryImport |
  Messages$UploadImportedMedia |
  Messages$StartHistoryImport |
  Messages$GetExportedChatInvites |
  Messages$GetExportedChatInvite |
  Messages$EditExportedChatInvite |
  Messages$DeleteRevokedExportedChatInvites |
  Messages$DeleteExportedChatInvite |
  Messages$GetAdminsWithInvites |
  Messages$GetChatInviteImporters |
  Messages$SetHistoryTTL |
  Account$ReportProfilePhoto |
  Channels$ConvertToGigagroup |
  Messages$CheckHistoryImportPeer |
  Phone$ToggleGroupCallRecord |
  Phone$EditGroupCallParticipant |
  Phone$EditGroupCallTitle |
  Phone$GetGroupCallJoinAs |
  Phone$ExportGroupCallInvite |
  Phone$ToggleGroupCallStartSubscription |
  Phone$StartScheduledGroupCall |
  Phone$SaveDefaultGroupCallJoinAs |
  Phone$JoinGroupCallPresentation |
  Phone$LeaveGroupCallPresentation |
  Stickers$CheckShortName |
  Stickers$SuggestShortName |
  Bots$ResetBotCommands |
  Bots$GetBotCommands |
  Account$ResetPassword |
  Account$DeclinePasswordReset |
  Auth$CheckRecoveryPassword |
  Account$GetChatThemes |
  Messages$SetChatTheme |
  Channels$ViewSponsoredMessage |
  Channels$GetSponsoredMessages |
  Messages$GetMessageReadParticipants |
  Messages$GetSearchResultsCalendar |
  Messages$GetSearchResultsPositions |
  Messages$HideChatJoinRequest |
  Messages$HideAllChatJoinRequests |
  Messages$ToggleNoForwards |
  Messages$SaveDefaultSendAs |
  Channels$GetSendAs |
  Account$SetAuthorizationTTL |
  Account$ChangeAuthorizationSettings |
  Channels$DeleteParticipantHistory |
  Messages$SendReaction |
  Messages$GetMessagesReactions |
  Messages$GetMessageReactionsList |
  Messages$SetChatAvailableReactions |
  Messages$GetAvailableReactions |
  Messages$SetDefaultReaction |
  Messages$TranslateText |
  Messages$GetUnreadReactions |
  Messages$ReadReactions |
  Contacts$ResolvePhone |
  Phone$GetGroupCallStreamChannels |
  Phone$GetGroupCallStreamRtmpUrl |
  Messages$SearchSentMedia |
  Messages$GetAttachMenuBots |
  Messages$GetAttachMenuBot |
  Messages$ToggleBotInAttachMenu |
  Messages$RequestWebView |
  Messages$ProlongWebView |
  Messages$RequestSimpleWebView |
  Messages$SendWebViewResultMessage |
  Messages$SendWebViewData |
  Bots$SetBotMenuButton |
  Bots$GetBotMenuButton |
  Account$GetSavedRingtones |
  Account$SaveRingtone |
  Account$UploadRingtone |
  Bots$SetBotBroadcastDefaultAdminRights |
  Bots$SetBotGroupDefaultAdminRights |
  Phone$SaveCallLog |
  Channels$ToggleJoinToSend |
  Channels$ToggleJoinRequest |
  Payments$ExportInvoice |
  Messages$TranscribeAudio |
  Messages$RateTranscribedAudio |
  Payments$AssignAppStoreTransaction |
  Payments$AssignPlayMarketTransaction |
  Payments$CanPurchasePremium |
  Help$GetPremiumPromo |
  Messages$GetCustomEmojiDocuments |
  Messages$GetEmojiStickers |
  Messages$GetFeaturedEmojiStickers |
  Account$UpdateEmojiStatus |
  Account$GetDefaultEmojiStatuses |
  Account$GetRecentEmojiStatuses |
  Account$ClearRecentEmojiStatuses |
  Messages$ReportReaction |
  Messages$GetTopReactions |
  Messages$GetRecentReactions |
  Messages$ClearRecentReactions |
  Messages$GetExtendedMedia |
  Auth$ImportWebTokenAuthorization |
  Account$ReorderUsernames |
  Account$ToggleUsername |
  Channels$ReorderUsernames |
  Channels$ToggleUsername |
  Channels$DeactivateAllUsernames |
  Channels$ToggleForum |
  Channels$CreateForumTopic |
  Channels$GetForumTopics |
  Channels$GetForumTopicsByID |
  Channels$EditForumTopic |
  Channels$UpdatePinnedForumTopic |
  Channels$DeleteTopicHistory |
  Channels$ReorderPinnedForumTopics |
  Channels$ToggleAntiSpam |
  Channels$ReportAntiSpamFalsePositive |
  Messages$SetDefaultHistoryTTL |
  Messages$GetDefaultHistoryTTL |
  Contacts$ExportContactToken |
  Contacts$ImportContactToken |
  Photos$UploadContactProfilePhoto |
  Channels$ToggleParticipantsHidden |
  Messages$SendBotRequestedPeer |
  Account$GetDefaultProfilePhotoEmojis |
  Account$GetDefaultGroupPhotoEmojis |
  Auth$RequestFirebaseSms |
  Messages$GetEmojiGroups |
  Messages$GetEmojiStatusGroups |
  Messages$GetEmojiProfilePhotoGroups |
  Messages$SearchCustomEmoji |
  Messages$TogglePeerTranslations |
  Account$GetAutoSaveSettings |
  Account$SaveAutoSaveSettings |
  Account$DeleteAutoSaveExceptions |
  Stickers$ChangeSticker |
  Stickers$RenameStickerSet |
  Stickers$DeleteStickerSet |
  Messages$GetBotApp |
  Messages$RequestAppWebView |
  Bots$SetBotInfo |
  Bots$GetBotInfo |
  Auth$ResetLoginEmail |
  Chatlists$ExportChatlistInvite |
  Chatlists$DeleteExportedInvite |
  Chatlists$EditExportedInvite |
  Chatlists$GetExportedInvites |
  Chatlists$CheckChatlistInvite |
  Chatlists$JoinChatlistInvite |
  Chatlists$GetChatlistUpdates |
  Chatlists$JoinChatlistUpdates |
  Chatlists$HideChatlistUpdates |
  Chatlists$GetLeaveChatlistSuggestions |
  Chatlists$LeaveChatlist |
  Bots$ReorderUsernames |
  Bots$ToggleUsername |
  Messages$SetChatWallPaper

export interface InvokeAfterMsg {
  method: "invokeAfterMsg";
  params: {
    msg_id: number;
    query: unknown;
  }
  response: unknown
}

export interface InvokeAfterMsgs {
  method: "invokeAfterMsgs";
  params: {
    msg_ids: number[];
    query: unknown;
  }
  response: unknown
}

export interface Auth$SendCode {
  method: "auth.sendCode";
  params: {
    phone_number: string;
    api_id: number;
    api_hash: string;
    settings: CodeSettings;
  }
  response: Auth$SentCode
}

export interface Auth$SignUp {
  method: "auth.signUp";
  params: {
    phone_number: string;
    phone_code_hash: string;
    first_name: string;
    last_name: string;
  }
  response: Auth$Authorization
}

export interface Auth$SignIn {
  method: "auth.signIn";
  params: {
    flags?: Number;
    phone_number: string;
    phone_code_hash: string;
    phone_code?: string;
    email_verification?: EmailVerification;
  }
  response: Auth$Authorization
}

export interface Auth$LogOut {
  method: "auth.logOut";
  params: {
  }
  response: Auth$LoggedOut
}

export interface Auth$ResetAuthorizations {
  method: "auth.resetAuthorizations";
  params: {
  }
  response: Bool
}

export interface Auth$ExportAuthorization {
  method: "auth.exportAuthorization";
  params: {
    dc_id: number;
  }
  response: Auth$ExportedAuthorization
}

export interface Auth$ImportAuthorization {
  method: "auth.importAuthorization";
  params: {
    id: number;
    bytes: Uint8Array;
  }
  response: Auth$Authorization
}

export interface Auth$BindTempAuthKey {
  method: "auth.bindTempAuthKey";
  params: {
    perm_auth_key_id: number;
    nonce: number;
    expires_at: number;
    encrypted_message: Uint8Array;
  }
  response: Bool
}

export interface Account$RegisterDevice {
  method: "account.registerDevice";
  params: {
    flags?: Number;
    no_muted?: True;
    token_type: number;
    token: string;
    app_sandbox: Bool;
    secret: Uint8Array;
    other_uids: number[];
  }
  response: Bool
}

export interface Account$UnregisterDevice {
  method: "account.unregisterDevice";
  params: {
    token_type: number;
    token: string;
    other_uids: number[];
  }
  response: Bool
}

export interface Account$UpdateNotifySettings {
  method: "account.updateNotifySettings";
  params: {
    peer: InputNotifyPeer;
    settings: InputPeerNotifySettings;
  }
  response: Bool
}

export interface Account$GetNotifySettings {
  method: "account.getNotifySettings";
  params: {
    peer: InputNotifyPeer;
  }
  response: PeerNotifySettings
}

export interface Account$ResetNotifySettings {
  method: "account.resetNotifySettings";
  params: {
  }
  response: Bool
}

export interface Account$UpdateProfile {
  method: "account.updateProfile";
  params: {
    flags?: Number;
    first_name?: string;
    last_name?: string;
    about?: string;
  }
  response: User
}

export interface Account$UpdateStatus {
  method: "account.updateStatus";
  params: {
    offline: Bool;
  }
  response: Bool
}

export interface Account$GetWallPapers {
  method: "account.getWallPapers";
  params: {
    hash: number;
  }
  response: Account$WallPapers
}

export interface Account$ReportPeer {
  method: "account.reportPeer";
  params: {
    peer: InputPeer;
    reason: ReportReason;
    message: string;
  }
  response: Bool
}

export interface Users$GetUsers {
  method: "users.getUsers";
  params: {
    id: InputUser;
  }
  response: User[]
}

export interface Users$GetFullUser {
  method: "users.getFullUser";
  params: {
    id: InputUser;
  }
  response: Users$UserFull
}

export interface Contacts$GetContactIDs {
  method: "contacts.getContactIDs";
  params: {
    hash: number;
  }
  response: Number[]
}

export interface Contacts$GetStatuses {
  method: "contacts.getStatuses";
  params: {
  }
  response: ContactStatus[]
}

export interface Contacts$GetContacts {
  method: "contacts.getContacts";
  params: {
    hash: number;
  }
  response: Contacts$Contacts
}

export interface Contacts$ImportContacts {
  method: "contacts.importContacts";
  params: {
    contacts: InputContact;
  }
  response: Contacts$ImportedContacts
}

export interface Contacts$DeleteContacts {
  method: "contacts.deleteContacts";
  params: {
    id: InputUser;
  }
  response: Updates
}

export interface Contacts$DeleteByPhones {
  method: "contacts.deleteByPhones";
  params: {
    phones: string[];
  }
  response: Bool
}

export interface Contacts$Block {
  method: "contacts.block";
  params: {
    id: InputPeer;
  }
  response: Bool
}

export interface Contacts$Unblock {
  method: "contacts.unblock";
  params: {
    id: InputPeer;
  }
  response: Bool
}

export interface Contacts$GetBlocked {
  method: "contacts.getBlocked";
  params: {
    offset: number;
    limit: number;
  }
  response: Contacts$Blocked
}

export interface Messages$GetMessages {
  method: "messages.getMessages";
  params: {
    id: InputMessage;
  }
  response: Messages$Messages
}

export interface Messages$GetDialogs {
  method: "messages.getDialogs";
  params: {
    flags?: Number;
    exclude_pinned?: True;
    folder_id?: number;
    offset_date: number;
    offset_id: number;
    offset_peer: InputPeer;
    limit: number;
    hash: number;
  }
  response: Messages$Dialogs
}

export interface Messages$GetHistory {
  method: "messages.getHistory";
  params: {
    peer: InputPeer;
    offset_id: number;
    offset_date: number;
    add_offset: number;
    limit: number;
    max_id: number;
    min_id: number;
    hash: number;
  }
  response: Messages$Messages
}

export interface Messages$Search {
  method: "messages.search";
  params: {
    flags?: Number;
    peer: InputPeer;
    q: string;
    from_id?: InputPeer;
    top_msg_id?: number;
    filter: MessagesFilter;
    min_date: number;
    max_date: number;
    offset_id: number;
    add_offset: number;
    limit: number;
    max_id: number;
    min_id: number;
    hash: number;
  }
  response: Messages$Messages
}

export interface Messages$ReadHistory {
  method: "messages.readHistory";
  params: {
    peer: InputPeer;
    max_id: number;
  }
  response: Messages$AffectedMessages
}

export interface Messages$DeleteHistory {
  method: "messages.deleteHistory";
  params: {
    flags?: Number;
    just_clear?: True;
    revoke?: True;
    peer: InputPeer;
    max_id: number;
    min_date?: number;
    max_date?: number;
  }
  response: Messages$AffectedHistory
}

export interface Messages$DeleteMessages {
  method: "messages.deleteMessages";
  params: {
    flags?: Number;
    revoke?: True;
    id: number[];
  }
  response: Messages$AffectedMessages
}

export interface Messages$ReceivedMessages {
  method: "messages.receivedMessages";
  params: {
    max_id: number;
  }
  response: ReceivedNotifyMessage[]
}

export interface Messages$SetTyping {
  method: "messages.setTyping";
  params: {
    flags?: Number;
    peer: InputPeer;
    top_msg_id?: number;
    action: SendMessageAction;
  }
  response: Bool
}

export interface Messages$SendMessage {
  method: "messages.sendMessage";
  params: {
    flags?: Number;
    no_webpage?: True;
    silent?: True;
    background?: True;
    clear_draft?: True;
    noforwards?: True;
    update_stickersets_order?: True;
    peer: InputPeer;
    reply_to_msg_id?: number;
    top_msg_id?: number;
    message: string;
    random_id: number;
    reply_markup?: ReplyMarkup;
    entities?: MessageEntity;
    schedule_date?: number;
    send_as?: InputPeer;
  }
  response: Updates
}

export interface Messages$SendMedia {
  method: "messages.sendMedia";
  params: {
    flags?: Number;
    silent?: True;
    background?: True;
    clear_draft?: True;
    noforwards?: True;
    update_stickersets_order?: True;
    peer: InputPeer;
    reply_to_msg_id?: number;
    top_msg_id?: number;
    media: InputMedia;
    message: string;
    random_id: number;
    reply_markup?: ReplyMarkup;
    entities?: MessageEntity;
    schedule_date?: number;
    send_as?: InputPeer;
  }
  response: Updates
}

export interface Messages$ForwardMessages {
  method: "messages.forwardMessages";
  params: {
    flags?: Number;
    silent?: True;
    background?: True;
    with_my_score?: True;
    drop_author?: True;
    drop_media_captions?: True;
    noforwards?: True;
    from_peer: InputPeer;
    id: number[];
    random_id: number[];
    to_peer: InputPeer;
    top_msg_id?: number;
    schedule_date?: number;
    send_as?: InputPeer;
  }
  response: Updates
}

export interface Messages$ReportSpam {
  method: "messages.reportSpam";
  params: {
    peer: InputPeer;
  }
  response: Bool
}

export interface Messages$GetPeerSettings {
  method: "messages.getPeerSettings";
  params: {
    peer: InputPeer;
  }
  response: Messages$PeerSettings
}

export interface Messages$Report {
  method: "messages.report";
  params: {
    peer: InputPeer;
    id: number[];
    reason: ReportReason;
    message: string;
  }
  response: Bool
}

export interface Messages$GetChats {
  method: "messages.getChats";
  params: {
    id: number[];
  }
  response: Messages$Chats
}

export interface Messages$GetFullChat {
  method: "messages.getFullChat";
  params: {
    chat_id: number;
  }
  response: Messages$ChatFull
}

export interface Messages$EditChatTitle {
  method: "messages.editChatTitle";
  params: {
    chat_id: number;
    title: string;
  }
  response: Updates
}

export interface Messages$EditChatPhoto {
  method: "messages.editChatPhoto";
  params: {
    chat_id: number;
    photo: InputChatPhoto;
  }
  response: Updates
}

export interface Messages$AddChatUser {
  method: "messages.addChatUser";
  params: {
    chat_id: number;
    user_id: InputUser;
    fwd_limit: number;
  }
  response: Updates
}

export interface Messages$DeleteChatUser {
  method: "messages.deleteChatUser";
  params: {
    flags?: Number;
    revoke_history?: True;
    chat_id: number;
    user_id: InputUser;
  }
  response: Updates
}

export interface Messages$CreateChat {
  method: "messages.createChat";
  params: {
    flags?: Number;
    users: InputUser;
    title: string;
    ttl_period?: number;
  }
  response: Updates
}

export interface Updates$GetState {
  method: "updates.getState";
  params: {
  }
  response: Updates$State
}

export interface Updates$GetDifference {
  method: "updates.getDifference";
  params: {
    flags?: Number;
    pts: number;
    pts_total_limit?: number;
    date: number;
    qts: number;
  }
  response: Updates$Difference
}

export interface Photos$UpdateProfilePhoto {
  method: "photos.updateProfilePhoto";
  params: {
    flags?: Number;
    fallback?: True;
    bot?: InputUser;
    id: InputPhoto;
  }
  response: Photos$Photo
}

export interface Photos$UploadProfilePhoto {
  method: "photos.uploadProfilePhoto";
  params: {
    flags?: Number;
    fallback?: True;
    bot?: InputUser;
    file?: InputFile;
    video?: InputFile;
    video_start_ts?: number;
    video_emoji_markup?: VideoSize;
  }
  response: Photos$Photo
}

export interface Photos$DeletePhotos {
  method: "photos.deletePhotos";
  params: {
    id: InputPhoto;
  }
  response: Number[]
}

export interface Upload$SaveFilePart {
  method: "upload.saveFilePart";
  params: {
    file_id: number;
    file_part: number;
    bytes: Uint8Array;
  }
  response: Bool
}

export interface Upload$GetFile {
  method: "upload.getFile";
  params: {
    flags?: Number;
    precise?: True;
    cdn_supported?: True;
    location: InputFileLocation;
    offset: number;
    limit: number;
  }
  response: Upload$File
}

export interface Help$GetConfig {
  method: "help.getConfig";
  params: {
  }
  response: Config
}

export interface Help$GetNearestDc {
  method: "help.getNearestDc";
  params: {
  }
  response: NearestDc
}

export interface Help$GetAppUpdate {
  method: "help.getAppUpdate";
  params: {
    source: string;
  }
  response: Help$AppUpdate
}

export interface Help$GetInviteText {
  method: "help.getInviteText";
  params: {
  }
  response: Help$InviteText
}

export interface Photos$GetUserPhotos {
  method: "photos.getUserPhotos";
  params: {
    user_id: InputUser;
    offset: number;
    max_id: number;
    limit: number;
  }
  response: Photos$Photos
}

export interface Messages$GetDhConfig {
  method: "messages.getDhConfig";
  params: {
    version: number;
    random_length: number;
  }
  response: Messages$DhConfig
}

export interface Messages$RequestEncryption {
  method: "messages.requestEncryption";
  params: {
    user_id: InputUser;
    random_id: number;
    g_a: Uint8Array;
  }
  response: EncryptedChat
}

export interface Messages$AcceptEncryption {
  method: "messages.acceptEncryption";
  params: {
    peer: InputEncryptedChat;
    g_b: Uint8Array;
    key_fingerprint: number;
  }
  response: EncryptedChat
}

export interface Messages$DiscardEncryption {
  method: "messages.discardEncryption";
  params: {
    flags?: Number;
    delete_history?: True;
    chat_id: number;
  }
  response: Bool
}

export interface Messages$SetEncryptedTyping {
  method: "messages.setEncryptedTyping";
  params: {
    peer: InputEncryptedChat;
    typing: Bool;
  }
  response: Bool
}

export interface Messages$ReadEncryptedHistory {
  method: "messages.readEncryptedHistory";
  params: {
    peer: InputEncryptedChat;
    max_date: number;
  }
  response: Bool
}

export interface Messages$SendEncrypted {
  method: "messages.sendEncrypted";
  params: {
    flags?: Number;
    silent?: True;
    peer: InputEncryptedChat;
    random_id: number;
    data: Uint8Array;
  }
  response: Messages$SentEncryptedMessage
}

export interface Messages$SendEncryptedFile {
  method: "messages.sendEncryptedFile";
  params: {
    flags?: Number;
    silent?: True;
    peer: InputEncryptedChat;
    random_id: number;
    data: Uint8Array;
    file: InputEncryptedFile;
  }
  response: Messages$SentEncryptedMessage
}

export interface Messages$SendEncryptedService {
  method: "messages.sendEncryptedService";
  params: {
    peer: InputEncryptedChat;
    random_id: number;
    data: Uint8Array;
  }
  response: Messages$SentEncryptedMessage
}

export interface Messages$ReceivedQueue {
  method: "messages.receivedQueue";
  params: {
    max_qts: number;
  }
  response: Number[]
}

export interface Messages$ReportEncryptedSpam {
  method: "messages.reportEncryptedSpam";
  params: {
    peer: InputEncryptedChat;
  }
  response: Bool
}

export interface Upload$SaveBigFilePart {
  method: "upload.saveBigFilePart";
  params: {
    file_id: number;
    file_part: number;
    file_total_parts: number;
    bytes: Uint8Array;
  }
  response: Bool
}

export interface InitConnection {
  method: "initConnection";
  params: {
    flags?: Number;
    api_id: number;
    device_model: string;
    system_version: string;
    app_version: string;
    system_lang_code: string;
    lang_pack: string;
    lang_code: string;
    proxy?: InputClientProxy;
    params?: JSONValue;
    query: unknown;
  }
  response: unknown
}

export interface Help$GetSupport {
  method: "help.getSupport";
  params: {
  }
  response: Help$Support
}

export interface Messages$ReadMessageContents {
  method: "messages.readMessageContents";
  params: {
    id: number[];
  }
  response: Messages$AffectedMessages
}

export interface Account$CheckUsername {
  method: "account.checkUsername";
  params: {
    username: string;
  }
  response: Bool
}

export interface Account$UpdateUsername {
  method: "account.updateUsername";
  params: {
    username: string;
  }
  response: User
}

export interface Contacts$Search {
  method: "contacts.search";
  params: {
    q: string;
    limit: number;
  }
  response: Contacts$Found
}

export interface Account$GetPrivacy {
  method: "account.getPrivacy";
  params: {
    key: InputPrivacyKey;
  }
  response: Account$PrivacyRules
}

export interface Account$SetPrivacy {
  method: "account.setPrivacy";
  params: {
    key: InputPrivacyKey;
    rules: InputPrivacyRule;
  }
  response: Account$PrivacyRules
}

export interface Account$DeleteAccount {
  method: "account.deleteAccount";
  params: {
    flags?: Number;
    reason: string;
    password?: InputCheckPasswordSRP;
  }
  response: Bool
}

export interface Account$GetAccountTTL {
  method: "account.getAccountTTL";
  params: {
  }
  response: AccountDaysTTL
}

export interface Account$SetAccountTTL {
  method: "account.setAccountTTL";
  params: {
    ttl: AccountDaysTTL;
  }
  response: Bool
}

export interface InvokeWithLayer {
  method: "invokeWithLayer";
  params: {
    layer: number;
    query: unknown;
  }
  response: unknown
}

export interface Contacts$ResolveUsername {
  method: "contacts.resolveUsername";
  params: {
    username: string;
  }
  response: Contacts$ResolvedPeer
}

export interface Account$SendChangePhoneCode {
  method: "account.sendChangePhoneCode";
  params: {
    phone_number: string;
    settings: CodeSettings;
  }
  response: Auth$SentCode
}

export interface Account$ChangePhone {
  method: "account.changePhone";
  params: {
    phone_number: string;
    phone_code_hash: string;
    phone_code: string;
  }
  response: User
}

export interface Messages$GetStickers {
  method: "messages.getStickers";
  params: {
    emoticon: string;
    hash: number;
  }
  response: Messages$Stickers
}

export interface Messages$GetAllStickers {
  method: "messages.getAllStickers";
  params: {
    hash: number;
  }
  response: Messages$AllStickers
}

export interface Account$UpdateDeviceLocked {
  method: "account.updateDeviceLocked";
  params: {
    period: number;
  }
  response: Bool
}

export interface Auth$ImportBotAuthorization {
  method: "auth.importBotAuthorization";
  params: {
    flags: number;
    api_id: number;
    api_hash: string;
    bot_auth_token: string;
  }
  response: Auth$Authorization
}

export interface Messages$GetWebPagePreview {
  method: "messages.getWebPagePreview";
  params: {
    flags?: Number;
    message: string;
    entities?: MessageEntity;
  }
  response: MessageMedia
}

export interface Account$GetAuthorizations {
  method: "account.getAuthorizations";
  params: {
  }
  response: Account$Authorizations
}

export interface Account$ResetAuthorization {
  method: "account.resetAuthorization";
  params: {
    hash: number;
  }
  response: Bool
}

export interface Account$GetPassword {
  method: "account.getPassword";
  params: {
  }
  response: Account$Password
}

export interface Account$GetPasswordSettings {
  method: "account.getPasswordSettings";
  params: {
    password: InputCheckPasswordSRP;
  }
  response: Account$PasswordSettings
}

export interface Account$UpdatePasswordSettings {
  method: "account.updatePasswordSettings";
  params: {
    password: InputCheckPasswordSRP;
    new_settings: Account$PasswordInputSettings;
  }
  response: Bool
}

export interface Auth$CheckPassword {
  method: "auth.checkPassword";
  params: {
    password: InputCheckPasswordSRP;
  }
  response: Auth$Authorization
}

export interface Auth$RequestPasswordRecovery {
  method: "auth.requestPasswordRecovery";
  params: {
  }
  response: Auth$PasswordRecovery
}

export interface Auth$RecoverPassword {
  method: "auth.recoverPassword";
  params: {
    flags?: Number;
    code: string;
    new_settings?: Account$PasswordInputSettings;
  }
  response: Auth$Authorization
}

export interface InvokeWithoutUpdates {
  method: "invokeWithoutUpdates";
  params: {
    query: unknown;
  }
  response: unknown
}

export interface Messages$ExportChatInvite {
  method: "messages.exportChatInvite";
  params: {
    flags?: Number;
    legacy_revoke_permanent?: True;
    request_needed?: True;
    peer: InputPeer;
    expire_date?: number;
    usage_limit?: number;
    title?: string;
  }
  response: ExportedChatInvite
}

export interface Messages$CheckChatInvite {
  method: "messages.checkChatInvite";
  params: {
    hash: string;
  }
  response: ChatInvite
}

export interface Messages$ImportChatInvite {
  method: "messages.importChatInvite";
  params: {
    hash: string;
  }
  response: Updates
}

export interface Messages$GetStickerSet {
  method: "messages.getStickerSet";
  params: {
    stickerset: InputStickerSet;
    hash: number;
  }
  response: Messages$StickerSet
}

export interface Messages$InstallStickerSet {
  method: "messages.installStickerSet";
  params: {
    stickerset: InputStickerSet;
    archived: Bool;
  }
  response: Messages$StickerSetInstallResult
}

export interface Messages$UninstallStickerSet {
  method: "messages.uninstallStickerSet";
  params: {
    stickerset: InputStickerSet;
  }
  response: Bool
}

export interface Messages$StartBot {
  method: "messages.startBot";
  params: {
    bot: InputUser;
    peer: InputPeer;
    random_id: number;
    start_param: string;
  }
  response: Updates
}

export interface Help$GetAppChangelog {
  method: "help.getAppChangelog";
  params: {
    prev_app_version: string;
  }
  response: Updates
}

export interface Messages$GetMessagesViews {
  method: "messages.getMessagesViews";
  params: {
    peer: InputPeer;
    id: number[];
    increment: Bool;
  }
  response: Messages$MessageViews
}

export interface Channels$ReadHistory {
  method: "channels.readHistory";
  params: {
    channel: InputChannel;
    max_id: number;
  }
  response: Bool
}

export interface Channels$DeleteMessages {
  method: "channels.deleteMessages";
  params: {
    channel: InputChannel;
    id: number[];
  }
  response: Messages$AffectedMessages
}

export interface Channels$ReportSpam {
  method: "channels.reportSpam";
  params: {
    channel: InputChannel;
    participant: InputPeer;
    id: number[];
  }
  response: Bool
}

export interface Channels$GetMessages {
  method: "channels.getMessages";
  params: {
    channel: InputChannel;
    id: InputMessage;
  }
  response: Messages$Messages
}

export interface Channels$GetParticipants {
  method: "channels.getParticipants";
  params: {
    channel: InputChannel;
    filter: ChannelParticipantsFilter;
    offset: number;
    limit: number;
    hash: number;
  }
  response: Channels$ChannelParticipants
}

export interface Channels$GetParticipant {
  method: "channels.getParticipant";
  params: {
    channel: InputChannel;
    participant: InputPeer;
  }
  response: Channels$ChannelParticipant
}

export interface Channels$GetChannels {
  method: "channels.getChannels";
  params: {
    id: InputChannel;
  }
  response: Messages$Chats
}

export interface Channels$GetFullChannel {
  method: "channels.getFullChannel";
  params: {
    channel: InputChannel;
  }
  response: Messages$ChatFull
}

export interface Channels$CreateChannel {
  method: "channels.createChannel";
  params: {
    flags?: Number;
    broadcast?: True;
    megagroup?: True;
    for_import?: True;
    forum?: True;
    title: string;
    about: string;
    geo_point?: InputGeoPoint;
    address?: string;
    ttl_period?: number;
  }
  response: Updates
}

export interface Channels$EditAdmin {
  method: "channels.editAdmin";
  params: {
    channel: InputChannel;
    user_id: InputUser;
    admin_rights: ChatAdminRights;
    rank: string;
  }
  response: Updates
}

export interface Channels$EditTitle {
  method: "channels.editTitle";
  params: {
    channel: InputChannel;
    title: string;
  }
  response: Updates
}

export interface Channels$EditPhoto {
  method: "channels.editPhoto";
  params: {
    channel: InputChannel;
    photo: InputChatPhoto;
  }
  response: Updates
}

export interface Channels$CheckUsername {
  method: "channels.checkUsername";
  params: {
    channel: InputChannel;
    username: string;
  }
  response: Bool
}

export interface Channels$UpdateUsername {
  method: "channels.updateUsername";
  params: {
    channel: InputChannel;
    username: string;
  }
  response: Bool
}

export interface Channels$JoinChannel {
  method: "channels.joinChannel";
  params: {
    channel: InputChannel;
  }
  response: Updates
}

export interface Channels$LeaveChannel {
  method: "channels.leaveChannel";
  params: {
    channel: InputChannel;
  }
  response: Updates
}

export interface Channels$InviteToChannel {
  method: "channels.inviteToChannel";
  params: {
    channel: InputChannel;
    users: InputUser;
  }
  response: Updates
}

export interface Channels$DeleteChannel {
  method: "channels.deleteChannel";
  params: {
    channel: InputChannel;
  }
  response: Updates
}

export interface Updates$GetChannelDifference {
  method: "updates.getChannelDifference";
  params: {
    flags?: Number;
    force?: True;
    channel: InputChannel;
    filter: ChannelMessagesFilter;
    pts: number;
    limit: number;
  }
  response: Updates$ChannelDifference
}

export interface Messages$EditChatAdmin {
  method: "messages.editChatAdmin";
  params: {
    chat_id: number;
    user_id: InputUser;
    is_admin: Bool;
  }
  response: Bool
}

export interface Messages$MigrateChat {
  method: "messages.migrateChat";
  params: {
    chat_id: number;
  }
  response: Updates
}

export interface Messages$SearchGlobal {
  method: "messages.searchGlobal";
  params: {
    flags?: Number;
    folder_id?: number;
    q: string;
    filter: MessagesFilter;
    min_date: number;
    max_date: number;
    offset_rate: number;
    offset_peer: InputPeer;
    offset_id: number;
    limit: number;
  }
  response: Messages$Messages
}

export interface Messages$ReorderStickerSets {
  method: "messages.reorderStickerSets";
  params: {
    flags?: Number;
    masks?: True;
    emojis?: True;
    order: number[];
  }
  response: Bool
}

export interface Messages$GetDocumentByHash {
  method: "messages.getDocumentByHash";
  params: {
    sha256: Uint8Array;
    size: number;
    mime_type: string;
  }
  response: Document
}

export interface Messages$GetSavedGifs {
  method: "messages.getSavedGifs";
  params: {
    hash: number;
  }
  response: Messages$SavedGifs
}

export interface Messages$SaveGif {
  method: "messages.saveGif";
  params: {
    id: InputDocument;
    unsave: Bool;
  }
  response: Bool
}

export interface Messages$GetInlineBotResults {
  method: "messages.getInlineBotResults";
  params: {
    flags?: Number;
    bot: InputUser;
    peer: InputPeer;
    geo_point?: InputGeoPoint;
    query: string;
    offset: string;
  }
  response: Messages$BotResults
}

export interface Messages$SetInlineBotResults {
  method: "messages.setInlineBotResults";
  params: {
    flags?: Number;
    gallery?: True;
    private?: True;
    query_id: number;
    results: InputBotInlineResult;
    cache_time: number;
    next_offset?: string;
    switch_pm?: InlineBotSwitchPM;
    switch_webview?: InlineBotWebView;
  }
  response: Bool
}

export interface Messages$SendInlineBotResult {
  method: "messages.sendInlineBotResult";
  params: {
    flags?: Number;
    silent?: True;
    background?: True;
    clear_draft?: True;
    hide_via?: True;
    peer: InputPeer;
    reply_to_msg_id?: number;
    top_msg_id?: number;
    random_id: number;
    query_id: number;
    id: string;
    schedule_date?: number;
    send_as?: InputPeer;
  }
  response: Updates
}

export interface Channels$ExportMessageLink {
  method: "channels.exportMessageLink";
  params: {
    flags?: Number;
    grouped?: True;
    thread?: True;
    channel: InputChannel;
    id: number;
  }
  response: ExportedMessageLink
}

export interface Channels$ToggleSignatures {
  method: "channels.toggleSignatures";
  params: {
    channel: InputChannel;
    enabled: Bool;
  }
  response: Updates
}

export interface Auth$ResendCode {
  method: "auth.resendCode";
  params: {
    phone_number: string;
    phone_code_hash: string;
  }
  response: Auth$SentCode
}

export interface Auth$CancelCode {
  method: "auth.cancelCode";
  params: {
    phone_number: string;
    phone_code_hash: string;
  }
  response: Bool
}

export interface Messages$GetMessageEditData {
  method: "messages.getMessageEditData";
  params: {
    peer: InputPeer;
    id: number;
  }
  response: Messages$MessageEditData
}

export interface Messages$EditMessage {
  method: "messages.editMessage";
  params: {
    flags?: Number;
    no_webpage?: True;
    peer: InputPeer;
    id: number;
    message?: string;
    media?: InputMedia;
    reply_markup?: ReplyMarkup;
    entities?: MessageEntity;
    schedule_date?: number;
  }
  response: Updates
}

export interface Messages$EditInlineBotMessage {
  method: "messages.editInlineBotMessage";
  params: {
    flags?: Number;
    no_webpage?: True;
    id: InputBotInlineMessageID;
    message?: string;
    media?: InputMedia;
    reply_markup?: ReplyMarkup;
    entities?: MessageEntity;
  }
  response: Bool
}

export interface Messages$GetBotCallbackAnswer {
  method: "messages.getBotCallbackAnswer";
  params: {
    flags?: Number;
    game?: True;
    peer: InputPeer;
    msg_id: number;
    data?: Uint8Array;
    password?: InputCheckPasswordSRP;
  }
  response: Messages$BotCallbackAnswer
}

export interface Messages$SetBotCallbackAnswer {
  method: "messages.setBotCallbackAnswer";
  params: {
    flags?: Number;
    alert?: True;
    query_id: number;
    message?: string;
    url?: string;
    cache_time: number;
  }
  response: Bool
}

export interface Contacts$GetTopPeers {
  method: "contacts.getTopPeers";
  params: {
    flags?: Number;
    correspondents?: True;
    bots_pm?: True;
    bots_inline?: True;
    phone_calls?: True;
    forward_users?: True;
    forward_chats?: True;
    groups?: True;
    channels?: True;
    offset: number;
    limit: number;
    hash: number;
  }
  response: Contacts$TopPeers
}

export interface Contacts$ResetTopPeerRating {
  method: "contacts.resetTopPeerRating";
  params: {
    category: TopPeerCategory;
    peer: InputPeer;
  }
  response: Bool
}

export interface Messages$GetPeerDialogs {
  method: "messages.getPeerDialogs";
  params: {
    peers: InputDialogPeer;
  }
  response: Messages$PeerDialogs
}

export interface Messages$SaveDraft {
  method: "messages.saveDraft";
  params: {
    flags?: Number;
    no_webpage?: True;
    reply_to_msg_id?: number;
    top_msg_id?: number;
    peer: InputPeer;
    message: string;
    entities?: MessageEntity;
  }
  response: Bool
}

export interface Messages$GetAllDrafts {
  method: "messages.getAllDrafts";
  params: {
  }
  response: Updates
}

export interface Messages$GetFeaturedStickers {
  method: "messages.getFeaturedStickers";
  params: {
    hash: number;
  }
  response: Messages$FeaturedStickers
}

export interface Messages$ReadFeaturedStickers {
  method: "messages.readFeaturedStickers";
  params: {
    id: number[];
  }
  response: Bool
}

export interface Messages$GetRecentStickers {
  method: "messages.getRecentStickers";
  params: {
    flags?: Number;
    attached?: True;
    hash: number;
  }
  response: Messages$RecentStickers
}

export interface Messages$SaveRecentSticker {
  method: "messages.saveRecentSticker";
  params: {
    flags?: Number;
    attached?: True;
    id: InputDocument;
    unsave: Bool;
  }
  response: Bool
}

export interface Messages$ClearRecentStickers {
  method: "messages.clearRecentStickers";
  params: {
    flags?: Number;
    attached?: True;
  }
  response: Bool
}

export interface Messages$GetArchivedStickers {
  method: "messages.getArchivedStickers";
  params: {
    flags?: Number;
    masks?: True;
    emojis?: True;
    offset_id: number;
    limit: number;
  }
  response: Messages$ArchivedStickers
}

export interface Account$SendConfirmPhoneCode {
  method: "account.sendConfirmPhoneCode";
  params: {
    hash: string;
    settings: CodeSettings;
  }
  response: Auth$SentCode
}

export interface Account$ConfirmPhone {
  method: "account.confirmPhone";
  params: {
    phone_code_hash: string;
    phone_code: string;
  }
  response: Bool
}

export interface Channels$GetAdminedPublicChannels {
  method: "channels.getAdminedPublicChannels";
  params: {
    flags?: Number;
    by_location?: True;
    check_limit?: True;
  }
  response: Messages$Chats
}

export interface Messages$GetMaskStickers {
  method: "messages.getMaskStickers";
  params: {
    hash: number;
  }
  response: Messages$AllStickers
}

export interface Messages$GetAttachedStickers {
  method: "messages.getAttachedStickers";
  params: {
    media: InputStickeredMedia;
  }
  response: StickerSetCovered[]
}

export interface Auth$DropTempAuthKeys {
  method: "auth.dropTempAuthKeys";
  params: {
    except_auth_keys: number[];
  }
  response: Bool
}

export interface Messages$SetGameScore {
  method: "messages.setGameScore";
  params: {
    flags?: Number;
    edit_message?: True;
    force?: True;
    peer: InputPeer;
    id: number;
    user_id: InputUser;
    score: number;
  }
  response: Updates
}

export interface Messages$SetInlineGameScore {
  method: "messages.setInlineGameScore";
  params: {
    flags?: Number;
    edit_message?: True;
    force?: True;
    id: InputBotInlineMessageID;
    user_id: InputUser;
    score: number;
  }
  response: Bool
}

export interface Messages$GetGameHighScores {
  method: "messages.getGameHighScores";
  params: {
    peer: InputPeer;
    id: number;
    user_id: InputUser;
  }
  response: Messages$HighScores
}

export interface Messages$GetInlineGameHighScores {
  method: "messages.getInlineGameHighScores";
  params: {
    id: InputBotInlineMessageID;
    user_id: InputUser;
  }
  response: Messages$HighScores
}

export interface Messages$GetCommonChats {
  method: "messages.getCommonChats";
  params: {
    user_id: InputUser;
    max_id: number;
    limit: number;
  }
  response: Messages$Chats
}

export interface Help$SetBotUpdatesStatus {
  method: "help.setBotUpdatesStatus";
  params: {
    pending_updates_count: number;
    message: string;
  }
  response: Bool
}

export interface Messages$GetWebPage {
  method: "messages.getWebPage";
  params: {
    url: string;
    hash: number;
  }
  response: WebPage
}

export interface Messages$ToggleDialogPin {
  method: "messages.toggleDialogPin";
  params: {
    flags?: Number;
    pinned?: True;
    peer: InputDialogPeer;
  }
  response: Bool
}

export interface Messages$ReorderPinnedDialogs {
  method: "messages.reorderPinnedDialogs";
  params: {
    flags?: Number;
    force?: True;
    folder_id: number;
    order: InputDialogPeer;
  }
  response: Bool
}

export interface Messages$GetPinnedDialogs {
  method: "messages.getPinnedDialogs";
  params: {
    folder_id: number;
  }
  response: Messages$PeerDialogs
}

export interface Bots$SendCustomRequest {
  method: "bots.sendCustomRequest";
  params: {
    custom_method: string;
    params: DataJSON;
  }
  response: DataJSON
}

export interface Bots$AnswerWebhookJSONQuery {
  method: "bots.answerWebhookJSONQuery";
  params: {
    query_id: number;
    data: DataJSON;
  }
  response: Bool
}

export interface Upload$GetWebFile {
  method: "upload.getWebFile";
  params: {
    location: InputWebFileLocation;
    offset: number;
    limit: number;
  }
  response: Upload$WebFile
}

export interface Payments$GetPaymentForm {
  method: "payments.getPaymentForm";
  params: {
    flags?: Number;
    invoice: InputInvoice;
    theme_params?: DataJSON;
  }
  response: Payments$PaymentForm
}

export interface Payments$GetPaymentReceipt {
  method: "payments.getPaymentReceipt";
  params: {
    peer: InputPeer;
    msg_id: number;
  }
  response: Payments$PaymentReceipt
}

export interface Payments$ValidateRequestedInfo {
  method: "payments.validateRequestedInfo";
  params: {
    flags?: Number;
    save?: True;
    invoice: InputInvoice;
    info: PaymentRequestedInfo;
  }
  response: Payments$ValidatedRequestedInfo
}

export interface Payments$SendPaymentForm {
  method: "payments.sendPaymentForm";
  params: {
    flags?: Number;
    form_id: number;
    invoice: InputInvoice;
    requested_info_id?: string;
    shipping_option_id?: string;
    credentials: InputPaymentCredentials;
    tip_amount?: number;
  }
  response: Payments$PaymentResult
}

export interface Account$GetTmpPassword {
  method: "account.getTmpPassword";
  params: {
    password: InputCheckPasswordSRP;
    period: number;
  }
  response: Account$TmpPassword
}

export interface Payments$GetSavedInfo {
  method: "payments.getSavedInfo";
  params: {
  }
  response: Payments$SavedInfo
}

export interface Payments$ClearSavedInfo {
  method: "payments.clearSavedInfo";
  params: {
    flags?: Number;
    credentials?: True;
    info?: True;
  }
  response: Bool
}

export interface Messages$SetBotShippingResults {
  method: "messages.setBotShippingResults";
  params: {
    flags?: Number;
    query_id: number;
    error?: string;
    shipping_options?: ShippingOption;
  }
  response: Bool
}

export interface Messages$SetBotPrecheckoutResults {
  method: "messages.setBotPrecheckoutResults";
  params: {
    flags?: Number;
    success?: True;
    query_id: number;
    error?: string;
  }
  response: Bool
}

export interface Stickers$CreateStickerSet {
  method: "stickers.createStickerSet";
  params: {
    flags?: Number;
    masks?: True;
    animated?: True;
    videos?: True;
    emojis?: True;
    text_color?: True;
    user_id: InputUser;
    title: string;
    short_name: string;
    thumb?: InputDocument;
    stickers: InputStickerSetItem;
    software?: string;
  }
  response: Messages$StickerSet
}

export interface Stickers$RemoveStickerFromSet {
  method: "stickers.removeStickerFromSet";
  params: {
    sticker: InputDocument;
  }
  response: Messages$StickerSet
}

export interface Stickers$ChangeStickerPosition {
  method: "stickers.changeStickerPosition";
  params: {
    sticker: InputDocument;
    position: number;
  }
  response: Messages$StickerSet
}

export interface Stickers$AddStickerToSet {
  method: "stickers.addStickerToSet";
  params: {
    stickerset: InputStickerSet;
    sticker: InputStickerSetItem;
  }
  response: Messages$StickerSet
}

export interface Messages$UploadMedia {
  method: "messages.uploadMedia";
  params: {
    peer: InputPeer;
    media: InputMedia;
  }
  response: MessageMedia
}

export interface Phone$GetCallConfig {
  method: "phone.getCallConfig";
  params: {
  }
  response: DataJSON
}

export interface Phone$RequestCall {
  method: "phone.requestCall";
  params: {
    flags?: Number;
    video?: True;
    user_id: InputUser;
    random_id: number;
    g_a_hash: Uint8Array;
    protocol: PhoneCallProtocol;
  }
  response: Phone$PhoneCall
}

export interface Phone$AcceptCall {
  method: "phone.acceptCall";
  params: {
    peer: InputPhoneCall;
    g_b: Uint8Array;
    protocol: PhoneCallProtocol;
  }
  response: Phone$PhoneCall
}

export interface Phone$ConfirmCall {
  method: "phone.confirmCall";
  params: {
    peer: InputPhoneCall;
    g_a: Uint8Array;
    key_fingerprint: number;
    protocol: PhoneCallProtocol;
  }
  response: Phone$PhoneCall
}

export interface Phone$ReceivedCall {
  method: "phone.receivedCall";
  params: {
    peer: InputPhoneCall;
  }
  response: Bool
}

export interface Phone$DiscardCall {
  method: "phone.discardCall";
  params: {
    flags?: Number;
    video?: True;
    peer: InputPhoneCall;
    duration: number;
    reason: PhoneCallDiscardReason;
    connection_id: number;
  }
  response: Updates
}

export interface Phone$SetCallRating {
  method: "phone.setCallRating";
  params: {
    flags?: Number;
    user_initiative?: True;
    peer: InputPhoneCall;
    rating: number;
    comment: string;
  }
  response: Updates
}

export interface Phone$SaveCallDebug {
  method: "phone.saveCallDebug";
  params: {
    peer: InputPhoneCall;
    debug: DataJSON;
  }
  response: Bool
}

export interface Upload$GetCdnFile {
  method: "upload.getCdnFile";
  params: {
    file_token: Uint8Array;
    offset: number;
    limit: number;
  }
  response: Upload$CdnFile
}

export interface Upload$ReuploadCdnFile {
  method: "upload.reuploadCdnFile";
  params: {
    file_token: Uint8Array;
    request_token: Uint8Array;
  }
  response: FileHash[]
}

export interface Help$GetCdnConfig {
  method: "help.getCdnConfig";
  params: {
  }
  response: CdnConfig
}

export interface Langpack$GetLangPack {
  method: "langpack.getLangPack";
  params: {
    lang_pack: string;
    lang_code: string;
  }
  response: LangPackDifference
}

export interface Langpack$GetStrings {
  method: "langpack.getStrings";
  params: {
    lang_pack: string;
    lang_code: string;
    keys: string[];
  }
  response: LangPackString[]
}

export interface Langpack$GetDifference {
  method: "langpack.getDifference";
  params: {
    lang_pack: string;
    lang_code: string;
    from_version: number;
  }
  response: LangPackDifference
}

export interface Langpack$GetLanguages {
  method: "langpack.getLanguages";
  params: {
    lang_pack: string;
  }
  response: LangPackLanguage[]
}

export interface Channels$EditBanned {
  method: "channels.editBanned";
  params: {
    channel: InputChannel;
    participant: InputPeer;
    banned_rights: ChatBannedRights;
  }
  response: Updates
}

export interface Channels$GetAdminLog {
  method: "channels.getAdminLog";
  params: {
    flags?: Number;
    channel: InputChannel;
    q: string;
    events_filter?: ChannelAdminLogEventsFilter;
    admins?: InputUser;
    max_id: number;
    min_id: number;
    limit: number;
  }
  response: Channels$AdminLogResults
}

export interface Upload$GetCdnFileHashes {
  method: "upload.getCdnFileHashes";
  params: {
    file_token: Uint8Array;
    offset: number;
  }
  response: FileHash[]
}

export interface Messages$SendScreenshotNotification {
  method: "messages.sendScreenshotNotification";
  params: {
    peer: InputPeer;
    reply_to_msg_id: number;
    random_id: number;
  }
  response: Updates
}

export interface Channels$SetStickers {
  method: "channels.setStickers";
  params: {
    channel: InputChannel;
    stickerset: InputStickerSet;
  }
  response: Bool
}

export interface Messages$GetFavedStickers {
  method: "messages.getFavedStickers";
  params: {
    hash: number;
  }
  response: Messages$FavedStickers
}

export interface Messages$FaveSticker {
  method: "messages.faveSticker";
  params: {
    id: InputDocument;
    unfave: Bool;
  }
  response: Bool
}

export interface Channels$ReadMessageContents {
  method: "channels.readMessageContents";
  params: {
    channel: InputChannel;
    id: number[];
  }
  response: Bool
}

export interface Contacts$ResetSaved {
  method: "contacts.resetSaved";
  params: {
  }
  response: Bool
}

export interface Messages$GetUnreadMentions {
  method: "messages.getUnreadMentions";
  params: {
    flags?: Number;
    peer: InputPeer;
    top_msg_id?: number;
    offset_id: number;
    add_offset: number;
    limit: number;
    max_id: number;
    min_id: number;
  }
  response: Messages$Messages
}

export interface Channels$DeleteHistory {
  method: "channels.deleteHistory";
  params: {
    flags?: Number;
    for_everyone?: True;
    channel: InputChannel;
    max_id: number;
  }
  response: Updates
}

export interface Help$GetRecentMeUrls {
  method: "help.getRecentMeUrls";
  params: {
    referer: string;
  }
  response: Help$RecentMeUrls
}

export interface Channels$TogglePreHistoryHidden {
  method: "channels.togglePreHistoryHidden";
  params: {
    channel: InputChannel;
    enabled: Bool;
  }
  response: Updates
}

export interface Messages$ReadMentions {
  method: "messages.readMentions";
  params: {
    flags?: Number;
    peer: InputPeer;
    top_msg_id?: number;
  }
  response: Messages$AffectedHistory
}

export interface Messages$GetRecentLocations {
  method: "messages.getRecentLocations";
  params: {
    peer: InputPeer;
    limit: number;
    hash: number;
  }
  response: Messages$Messages
}

export interface Messages$SendMultiMedia {
  method: "messages.sendMultiMedia";
  params: {
    flags?: Number;
    silent?: True;
    background?: True;
    clear_draft?: True;
    noforwards?: True;
    update_stickersets_order?: True;
    peer: InputPeer;
    reply_to_msg_id?: number;
    top_msg_id?: number;
    multi_media: InputSingleMedia;
    schedule_date?: number;
    send_as?: InputPeer;
  }
  response: Updates
}

export interface Messages$UploadEncryptedFile {
  method: "messages.uploadEncryptedFile";
  params: {
    peer: InputEncryptedChat;
    file: InputEncryptedFile;
  }
  response: EncryptedFile
}

export interface Account$GetWebAuthorizations {
  method: "account.getWebAuthorizations";
  params: {
  }
  response: Account$WebAuthorizations
}

export interface Account$ResetWebAuthorization {
  method: "account.resetWebAuthorization";
  params: {
    hash: number;
  }
  response: Bool
}

export interface Account$ResetWebAuthorizations {
  method: "account.resetWebAuthorizations";
  params: {
  }
  response: Bool
}

export interface Messages$SearchStickerSets {
  method: "messages.searchStickerSets";
  params: {
    flags?: Number;
    exclude_featured?: True;
    q: string;
    hash: number;
  }
  response: Messages$FoundStickerSets
}

export interface Upload$GetFileHashes {
  method: "upload.getFileHashes";
  params: {
    location: InputFileLocation;
    offset: number;
  }
  response: FileHash[]
}

export interface Help$GetTermsOfServiceUpdate {
  method: "help.getTermsOfServiceUpdate";
  params: {
  }
  response: Help$TermsOfServiceUpdate
}

export interface Help$AcceptTermsOfService {
  method: "help.acceptTermsOfService";
  params: {
    id: DataJSON;
  }
  response: Bool
}

export interface Account$GetAllSecureValues {
  method: "account.getAllSecureValues";
  params: {
  }
  response: SecureValue[]
}

export interface Account$GetSecureValue {
  method: "account.getSecureValue";
  params: {
    types: SecureValueType;
  }
  response: SecureValue[]
}

export interface Account$SaveSecureValue {
  method: "account.saveSecureValue";
  params: {
    value: InputSecureValue;
    secure_secret_id: number;
  }
  response: SecureValue
}

export interface Account$DeleteSecureValue {
  method: "account.deleteSecureValue";
  params: {
    types: SecureValueType;
  }
  response: Bool
}

export interface Users$SetSecureValueErrors {
  method: "users.setSecureValueErrors";
  params: {
    id: InputUser;
    errors: SecureValueError;
  }
  response: Bool
}

export interface Account$GetAuthorizationForm {
  method: "account.getAuthorizationForm";
  params: {
    bot_id: number;
    scope: string;
    public_key: string;
  }
  response: Account$AuthorizationForm
}

export interface Account$AcceptAuthorization {
  method: "account.acceptAuthorization";
  params: {
    bot_id: number;
    scope: string;
    public_key: string;
    value_hashes: SecureValueHash;
    credentials: SecureCredentialsEncrypted;
  }
  response: Bool
}

export interface Account$SendVerifyPhoneCode {
  method: "account.sendVerifyPhoneCode";
  params: {
    phone_number: string;
    settings: CodeSettings;
  }
  response: Auth$SentCode
}

export interface Account$VerifyPhone {
  method: "account.verifyPhone";
  params: {
    phone_number: string;
    phone_code_hash: string;
    phone_code: string;
  }
  response: Bool
}

export interface Account$SendVerifyEmailCode {
  method: "account.sendVerifyEmailCode";
  params: {
    purpose: EmailVerifyPurpose;
    email: string;
  }
  response: Account$SentEmailCode
}

export interface Account$VerifyEmail {
  method: "account.verifyEmail";
  params: {
    purpose: EmailVerifyPurpose;
    verification: EmailVerification;
  }
  response: Account$EmailVerified
}

export interface Help$GetDeepLinkInfo {
  method: "help.getDeepLinkInfo";
  params: {
    path: string;
  }
  response: Help$DeepLinkInfo
}

export interface Contacts$GetSaved {
  method: "contacts.getSaved";
  params: {
  }
  response: SavedContact[]
}

export interface Channels$GetLeftChannels {
  method: "channels.getLeftChannels";
  params: {
    offset: number;
  }
  response: Messages$Chats
}

export interface Account$InitTakeoutSession {
  method: "account.initTakeoutSession";
  params: {
    flags?: Number;
    contacts?: True;
    message_users?: True;
    message_chats?: True;
    message_megagroups?: True;
    message_channels?: True;
    files?: True;
    file_max_size?: number;
  }
  response: Account$Takeout
}

export interface Account$FinishTakeoutSession {
  method: "account.finishTakeoutSession";
  params: {
    flags?: Number;
    success?: True;
  }
  response: Bool
}

export interface Messages$GetSplitRanges {
  method: "messages.getSplitRanges";
  params: {
  }
  response: MessageRange[]
}

export interface InvokeWithMessagesRange {
  method: "invokeWithMessagesRange";
  params: {
    range: MessageRange;
    query: unknown;
  }
  response: unknown
}

export interface InvokeWithTakeout {
  method: "invokeWithTakeout";
  params: {
    takeout_id: number;
    query: unknown;
  }
  response: unknown
}

export interface Messages$MarkDialogUnread {
  method: "messages.markDialogUnread";
  params: {
    flags?: Number;
    unread?: True;
    peer: InputDialogPeer;
  }
  response: Bool
}

export interface Messages$GetDialogUnreadMarks {
  method: "messages.getDialogUnreadMarks";
  params: {
  }
  response: DialogPeer[]
}

export interface Contacts$ToggleTopPeers {
  method: "contacts.toggleTopPeers";
  params: {
    enabled: Bool;
  }
  response: Bool
}

export interface Messages$ClearAllDrafts {
  method: "messages.clearAllDrafts";
  params: {
  }
  response: Bool
}

export interface Help$GetAppConfig {
  method: "help.getAppConfig";
  params: {
    hash: number;
  }
  response: Help$AppConfig
}

export interface Help$SaveAppLog {
  method: "help.saveAppLog";
  params: {
    events: InputAppEvent;
  }
  response: Bool
}

export interface Help$GetPassportConfig {
  method: "help.getPassportConfig";
  params: {
    hash: number;
  }
  response: Help$PassportConfig
}

export interface Langpack$GetLanguage {
  method: "langpack.getLanguage";
  params: {
    lang_pack: string;
    lang_code: string;
  }
  response: LangPackLanguage
}

export interface Messages$UpdatePinnedMessage {
  method: "messages.updatePinnedMessage";
  params: {
    flags?: Number;
    silent?: True;
    unpin?: True;
    pm_oneside?: True;
    peer: InputPeer;
    id: number;
  }
  response: Updates
}

export interface Account$ConfirmPasswordEmail {
  method: "account.confirmPasswordEmail";
  params: {
    code: string;
  }
  response: Bool
}

export interface Account$ResendPasswordEmail {
  method: "account.resendPasswordEmail";
  params: {
  }
  response: Bool
}

export interface Account$CancelPasswordEmail {
  method: "account.cancelPasswordEmail";
  params: {
  }
  response: Bool
}

export interface Help$GetSupportName {
  method: "help.getSupportName";
  params: {
  }
  response: Help$SupportName
}

export interface Help$GetUserInfo {
  method: "help.getUserInfo";
  params: {
    user_id: InputUser;
  }
  response: Help$UserInfo
}

export interface Help$EditUserInfo {
  method: "help.editUserInfo";
  params: {
    user_id: InputUser;
    message: string;
    entities: MessageEntity;
  }
  response: Help$UserInfo
}

export interface Account$GetContactSignUpNotification {
  method: "account.getContactSignUpNotification";
  params: {
  }
  response: Bool
}

export interface Account$SetContactSignUpNotification {
  method: "account.setContactSignUpNotification";
  params: {
    silent: Bool;
  }
  response: Bool
}

export interface Account$GetNotifyExceptions {
  method: "account.getNotifyExceptions";
  params: {
    flags?: Number;
    compare_sound?: True;
    peer?: InputNotifyPeer;
  }
  response: Updates
}

export interface Messages$SendVote {
  method: "messages.sendVote";
  params: {
    peer: InputPeer;
    msg_id: number;
    options: Uint8Array[];
  }
  response: Updates
}

export interface Messages$GetPollResults {
  method: "messages.getPollResults";
  params: {
    peer: InputPeer;
    msg_id: number;
  }
  response: Updates
}

export interface Messages$GetOnlines {
  method: "messages.getOnlines";
  params: {
    peer: InputPeer;
  }
  response: ChatOnlines
}

export interface Messages$EditChatAbout {
  method: "messages.editChatAbout";
  params: {
    peer: InputPeer;
    about: string;
  }
  response: Bool
}

export interface Messages$EditChatDefaultBannedRights {
  method: "messages.editChatDefaultBannedRights";
  params: {
    peer: InputPeer;
    banned_rights: ChatBannedRights;
  }
  response: Updates
}

export interface Account$GetWallPaper {
  method: "account.getWallPaper";
  params: {
    wallpaper: InputWallPaper;
  }
  response: WallPaper
}

export interface Account$UploadWallPaper {
  method: "account.uploadWallPaper";
  params: {
    flags?: Number;
    for_chat?: True;
    file: InputFile;
    mime_type: string;
    settings: WallPaperSettings;
  }
  response: WallPaper
}

export interface Account$SaveWallPaper {
  method: "account.saveWallPaper";
  params: {
    wallpaper: InputWallPaper;
    unsave: Bool;
    settings: WallPaperSettings;
  }
  response: Bool
}

export interface Account$InstallWallPaper {
  method: "account.installWallPaper";
  params: {
    wallpaper: InputWallPaper;
    settings: WallPaperSettings;
  }
  response: Bool
}

export interface Account$ResetWallPapers {
  method: "account.resetWallPapers";
  params: {
  }
  response: Bool
}

export interface Account$GetAutoDownloadSettings {
  method: "account.getAutoDownloadSettings";
  params: {
  }
  response: Account$AutoDownloadSettings
}

export interface Account$SaveAutoDownloadSettings {
  method: "account.saveAutoDownloadSettings";
  params: {
    flags?: Number;
    low?: True;
    high?: True;
    settings: AutoDownloadSettings;
  }
  response: Bool
}

export interface Messages$GetEmojiKeywords {
  method: "messages.getEmojiKeywords";
  params: {
    lang_code: string;
  }
  response: EmojiKeywordsDifference
}

export interface Messages$GetEmojiKeywordsDifference {
  method: "messages.getEmojiKeywordsDifference";
  params: {
    lang_code: string;
    from_version: number;
  }
  response: EmojiKeywordsDifference
}

export interface Messages$GetEmojiKeywordsLanguages {
  method: "messages.getEmojiKeywordsLanguages";
  params: {
    lang_codes: string[];
  }
  response: EmojiLanguage[]
}

export interface Messages$GetEmojiURL {
  method: "messages.getEmojiURL";
  params: {
    lang_code: string;
  }
  response: EmojiURL
}

export interface Folders$EditPeerFolders {
  method: "folders.editPeerFolders";
  params: {
    folder_peers: InputFolderPeer;
  }
  response: Updates
}

export interface Messages$GetSearchCounters {
  method: "messages.getSearchCounters";
  params: {
    flags?: Number;
    peer: InputPeer;
    top_msg_id?: number;
    filters: MessagesFilter;
  }
  response: Messages$SearchCounter[]
}

export interface Channels$GetGroupsForDiscussion {
  method: "channels.getGroupsForDiscussion";
  params: {
  }
  response: Messages$Chats
}

export interface Channels$SetDiscussionGroup {
  method: "channels.setDiscussionGroup";
  params: {
    broadcast: InputChannel;
    group: InputChannel;
  }
  response: Bool
}

export interface Messages$RequestUrlAuth {
  method: "messages.requestUrlAuth";
  params: {
    flags?: Number;
    peer?: InputPeer;
    msg_id?: number;
    button_id?: number;
    url?: string;
  }
  response: UrlAuthResult
}

export interface Messages$AcceptUrlAuth {
  method: "messages.acceptUrlAuth";
  params: {
    flags?: Number;
    write_allowed?: True;
    peer?: InputPeer;
    msg_id?: number;
    button_id?: number;
    url?: string;
  }
  response: UrlAuthResult
}

export interface Messages$HidePeerSettingsBar {
  method: "messages.hidePeerSettingsBar";
  params: {
    peer: InputPeer;
  }
  response: Bool
}

export interface Contacts$AddContact {
  method: "contacts.addContact";
  params: {
    flags?: Number;
    add_phone_privacy_exception?: True;
    id: InputUser;
    first_name: string;
    last_name: string;
    phone: string;
  }
  response: Updates
}

export interface Contacts$AcceptContact {
  method: "contacts.acceptContact";
  params: {
    id: InputUser;
  }
  response: Updates
}

export interface Channels$EditCreator {
  method: "channels.editCreator";
  params: {
    channel: InputChannel;
    user_id: InputUser;
    password: InputCheckPasswordSRP;
  }
  response: Updates
}

export interface Contacts$GetLocated {
  method: "contacts.getLocated";
  params: {
    flags?: Number;
    background?: True;
    geo_point: InputGeoPoint;
    self_expires?: number;
  }
  response: Updates
}

export interface Channels$EditLocation {
  method: "channels.editLocation";
  params: {
    channel: InputChannel;
    geo_point: InputGeoPoint;
    address: string;
  }
  response: Bool
}

export interface Channels$ToggleSlowMode {
  method: "channels.toggleSlowMode";
  params: {
    channel: InputChannel;
    seconds: number;
  }
  response: Updates
}

export interface Messages$GetScheduledHistory {
  method: "messages.getScheduledHistory";
  params: {
    peer: InputPeer;
    hash: number;
  }
  response: Messages$Messages
}

export interface Messages$GetScheduledMessages {
  method: "messages.getScheduledMessages";
  params: {
    peer: InputPeer;
    id: number[];
  }
  response: Messages$Messages
}

export interface Messages$SendScheduledMessages {
  method: "messages.sendScheduledMessages";
  params: {
    peer: InputPeer;
    id: number[];
  }
  response: Updates
}

export interface Messages$DeleteScheduledMessages {
  method: "messages.deleteScheduledMessages";
  params: {
    peer: InputPeer;
    id: number[];
  }
  response: Updates
}

export interface Account$UploadTheme {
  method: "account.uploadTheme";
  params: {
    flags?: Number;
    file: InputFile;
    thumb?: InputFile;
    file_name: string;
    mime_type: string;
  }
  response: Document
}

export interface Account$CreateTheme {
  method: "account.createTheme";
  params: {
    flags?: Number;
    slug: string;
    title: string;
    document?: InputDocument;
    settings?: InputThemeSettings;
  }
  response: Theme
}

export interface Account$UpdateTheme {
  method: "account.updateTheme";
  params: {
    flags?: Number;
    format: string;
    theme: InputTheme;
    slug?: string;
    title?: string;
    document?: InputDocument;
    settings?: InputThemeSettings;
  }
  response: Theme
}

export interface Account$SaveTheme {
  method: "account.saveTheme";
  params: {
    theme: InputTheme;
    unsave: Bool;
  }
  response: Bool
}

export interface Account$InstallTheme {
  method: "account.installTheme";
  params: {
    flags?: Number;
    dark?: True;
    theme?: InputTheme;
    format?: string;
    base_theme?: BaseTheme;
  }
  response: Bool
}

export interface Account$GetTheme {
  method: "account.getTheme";
  params: {
    format: string;
    theme: InputTheme;
  }
  response: Theme
}

export interface Account$GetThemes {
  method: "account.getThemes";
  params: {
    format: string;
    hash: number;
  }
  response: Account$Themes
}

export interface Auth$ExportLoginToken {
  method: "auth.exportLoginToken";
  params: {
    api_id: number;
    api_hash: string;
    except_ids: number[];
  }
  response: Auth$LoginToken
}

export interface Auth$ImportLoginToken {
  method: "auth.importLoginToken";
  params: {
    token: Uint8Array;
  }
  response: Auth$LoginToken
}

export interface Auth$AcceptLoginToken {
  method: "auth.acceptLoginToken";
  params: {
    token: Uint8Array;
  }
  response: Authorization
}

export interface Account$SetContentSettings {
  method: "account.setContentSettings";
  params: {
    flags?: Number;
    sensitive_enabled?: True;
  }
  response: Bool
}

export interface Account$GetContentSettings {
  method: "account.getContentSettings";
  params: {
  }
  response: Account$ContentSettings
}

export interface Channels$GetInactiveChannels {
  method: "channels.getInactiveChannels";
  params: {
  }
  response: Messages$InactiveChats
}

export interface Account$GetMultiWallPapers {
  method: "account.getMultiWallPapers";
  params: {
    wallpapers: InputWallPaper;
  }
  response: WallPaper[]
}

export interface Messages$GetPollVotes {
  method: "messages.getPollVotes";
  params: {
    flags?: Number;
    peer: InputPeer;
    id: number;
    option?: Uint8Array;
    offset?: string;
    limit: number;
  }
  response: Messages$VotesList
}

export interface Messages$ToggleStickerSets {
  method: "messages.toggleStickerSets";
  params: {
    flags?: Number;
    uninstall?: True;
    archive?: True;
    unarchive?: True;
    stickersets: InputStickerSet;
  }
  response: Bool
}

export interface Payments$GetBankCardData {
  method: "payments.getBankCardData";
  params: {
    number: string;
  }
  response: Payments$BankCardData
}

export interface Messages$GetDialogFilters {
  method: "messages.getDialogFilters";
  params: {
  }
  response: DialogFilter[]
}

export interface Messages$GetSuggestedDialogFilters {
  method: "messages.getSuggestedDialogFilters";
  params: {
  }
  response: DialogFilterSuggested[]
}

export interface Messages$UpdateDialogFilter {
  method: "messages.updateDialogFilter";
  params: {
    flags?: Number;
    id: number;
    filter?: DialogFilter;
  }
  response: Bool
}

export interface Messages$UpdateDialogFiltersOrder {
  method: "messages.updateDialogFiltersOrder";
  params: {
    order: number[];
  }
  response: Bool
}

export interface Stats$GetBroadcastStats {
  method: "stats.getBroadcastStats";
  params: {
    flags?: Number;
    dark?: True;
    channel: InputChannel;
  }
  response: Stats$BroadcastStats
}

export interface Stats$LoadAsyncGraph {
  method: "stats.loadAsyncGraph";
  params: {
    flags?: Number;
    token: string;
    x?: number;
  }
  response: StatsGraph
}

export interface Stickers$SetStickerSetThumb {
  method: "stickers.setStickerSetThumb";
  params: {
    flags?: Number;
    stickerset: InputStickerSet;
    thumb?: InputDocument;
    thumb_document_id?: number;
  }
  response: Messages$StickerSet
}

export interface Bots$SetBotCommands {
  method: "bots.setBotCommands";
  params: {
    scope: BotCommandScope;
    lang_code: string;
    commands: BotCommand;
  }
  response: Bool
}

export interface Messages$GetOldFeaturedStickers {
  method: "messages.getOldFeaturedStickers";
  params: {
    offset: number;
    limit: number;
    hash: number;
  }
  response: Messages$FeaturedStickers
}

export interface Help$GetPromoData {
  method: "help.getPromoData";
  params: {
  }
  response: Help$PromoData
}

export interface Help$HidePromoData {
  method: "help.hidePromoData";
  params: {
    peer: InputPeer;
  }
  response: Bool
}

export interface Phone$SendSignalingData {
  method: "phone.sendSignalingData";
  params: {
    peer: InputPhoneCall;
    data: Uint8Array;
  }
  response: Bool
}

export interface Stats$GetMegagroupStats {
  method: "stats.getMegagroupStats";
  params: {
    flags?: Number;
    dark?: True;
    channel: InputChannel;
  }
  response: Stats$MegagroupStats
}

export interface Account$GetGlobalPrivacySettings {
  method: "account.getGlobalPrivacySettings";
  params: {
  }
  response: GlobalPrivacySettings
}

export interface Account$SetGlobalPrivacySettings {
  method: "account.setGlobalPrivacySettings";
  params: {
    settings: GlobalPrivacySettings;
  }
  response: GlobalPrivacySettings
}

export interface Help$DismissSuggestion {
  method: "help.dismissSuggestion";
  params: {
    peer: InputPeer;
    suggestion: string;
  }
  response: Bool
}

export interface Help$GetCountriesList {
  method: "help.getCountriesList";
  params: {
    lang_code: string;
    hash: number;
  }
  response: Help$CountriesList
}

export interface Messages$GetReplies {
  method: "messages.getReplies";
  params: {
    peer: InputPeer;
    msg_id: number;
    offset_id: number;
    offset_date: number;
    add_offset: number;
    limit: number;
    max_id: number;
    min_id: number;
    hash: number;
  }
  response: Messages$Messages
}

export interface Messages$GetDiscussionMessage {
  method: "messages.getDiscussionMessage";
  params: {
    peer: InputPeer;
    msg_id: number;
  }
  response: Messages$DiscussionMessage
}

export interface Messages$ReadDiscussion {
  method: "messages.readDiscussion";
  params: {
    peer: InputPeer;
    msg_id: number;
    read_max_id: number;
  }
  response: Bool
}

export interface Contacts$BlockFromReplies {
  method: "contacts.blockFromReplies";
  params: {
    flags?: Number;
    delete_message?: True;
    delete_history?: True;
    report_spam?: True;
    msg_id: number;
  }
  response: Updates
}

export interface Stats$GetMessagePublicForwards {
  method: "stats.getMessagePublicForwards";
  params: {
    channel: InputChannel;
    msg_id: number;
    offset_rate: number;
    offset_peer: InputPeer;
    offset_id: number;
    limit: number;
  }
  response: Messages$Messages
}

export interface Stats$GetMessageStats {
  method: "stats.getMessageStats";
  params: {
    flags?: Number;
    dark?: True;
    channel: InputChannel;
    msg_id: number;
  }
  response: Stats$MessageStats
}

export interface Messages$UnpinAllMessages {
  method: "messages.unpinAllMessages";
  params: {
    flags?: Number;
    peer: InputPeer;
    top_msg_id?: number;
  }
  response: Messages$AffectedHistory
}

export interface Phone$CreateGroupCall {
  method: "phone.createGroupCall";
  params: {
    flags?: Number;
    rtmp_stream?: True;
    peer: InputPeer;
    random_id: number;
    title?: string;
    schedule_date?: number;
  }
  response: Updates
}

export interface Phone$JoinGroupCall {
  method: "phone.joinGroupCall";
  params: {
    flags?: Number;
    muted?: True;
    video_stopped?: True;
    call: InputGroupCall;
    join_as: InputPeer;
    invite_hash?: string;
    params: DataJSON;
  }
  response: Updates
}

export interface Phone$LeaveGroupCall {
  method: "phone.leaveGroupCall";
  params: {
    call: InputGroupCall;
    source: number;
  }
  response: Updates
}

export interface Phone$InviteToGroupCall {
  method: "phone.inviteToGroupCall";
  params: {
    call: InputGroupCall;
    users: InputUser;
  }
  response: Updates
}

export interface Phone$DiscardGroupCall {
  method: "phone.discardGroupCall";
  params: {
    call: InputGroupCall;
  }
  response: Updates
}

export interface Phone$ToggleGroupCallSettings {
  method: "phone.toggleGroupCallSettings";
  params: {
    flags?: Number;
    reset_invite_hash?: True;
    call: InputGroupCall;
    join_muted?: Bool;
  }
  response: Updates
}

export interface Phone$GetGroupCall {
  method: "phone.getGroupCall";
  params: {
    call: InputGroupCall;
    limit: number;
  }
  response: Phone$GroupCall
}

export interface Phone$GetGroupParticipants {
  method: "phone.getGroupParticipants";
  params: {
    call: InputGroupCall;
    ids: InputPeer;
    sources: number[];
    offset: string;
    limit: number;
  }
  response: Phone$GroupParticipants
}

export interface Phone$CheckGroupCall {
  method: "phone.checkGroupCall";
  params: {
    call: InputGroupCall;
    sources: number[];
  }
  response: Number[]
}

export interface Messages$DeleteChat {
  method: "messages.deleteChat";
  params: {
    chat_id: number;
  }
  response: Bool
}

export interface Messages$DeletePhoneCallHistory {
  method: "messages.deletePhoneCallHistory";
  params: {
    flags?: Number;
    revoke?: True;
  }
  response: Messages$AffectedFoundMessages
}

export interface Messages$CheckHistoryImport {
  method: "messages.checkHistoryImport";
  params: {
    import_head: string;
  }
  response: Messages$HistoryImportParsed
}

export interface Messages$InitHistoryImport {
  method: "messages.initHistoryImport";
  params: {
    peer: InputPeer;
    file: InputFile;
    media_count: number;
  }
  response: Messages$HistoryImport
}

export interface Messages$UploadImportedMedia {
  method: "messages.uploadImportedMedia";
  params: {
    peer: InputPeer;
    import_id: number;
    file_name: string;
    media: InputMedia;
  }
  response: MessageMedia
}

export interface Messages$StartHistoryImport {
  method: "messages.startHistoryImport";
  params: {
    peer: InputPeer;
    import_id: number;
  }
  response: Bool
}

export interface Messages$GetExportedChatInvites {
  method: "messages.getExportedChatInvites";
  params: {
    flags?: Number;
    revoked?: True;
    peer: InputPeer;
    admin_id: InputUser;
    offset_date?: number;
    offset_link?: string;
    limit: number;
  }
  response: Messages$ExportedChatInvites
}

export interface Messages$GetExportedChatInvite {
  method: "messages.getExportedChatInvite";
  params: {
    peer: InputPeer;
    link: string;
  }
  response: Messages$ExportedChatInvite
}

export interface Messages$EditExportedChatInvite {
  method: "messages.editExportedChatInvite";
  params: {
    flags?: Number;
    revoked?: True;
    peer: InputPeer;
    link: string;
    expire_date?: number;
    usage_limit?: number;
    request_needed?: Bool;
    title?: string;
  }
  response: Messages$ExportedChatInvite
}

export interface Messages$DeleteRevokedExportedChatInvites {
  method: "messages.deleteRevokedExportedChatInvites";
  params: {
    peer: InputPeer;
    admin_id: InputUser;
  }
  response: Bool
}

export interface Messages$DeleteExportedChatInvite {
  method: "messages.deleteExportedChatInvite";
  params: {
    peer: InputPeer;
    link: string;
  }
  response: Bool
}

export interface Messages$GetAdminsWithInvites {
  method: "messages.getAdminsWithInvites";
  params: {
    peer: InputPeer;
  }
  response: Messages$ChatAdminsWithInvites
}

export interface Messages$GetChatInviteImporters {
  method: "messages.getChatInviteImporters";
  params: {
    flags?: Number;
    requested?: True;
    peer: InputPeer;
    link?: string;
    q?: string;
    offset_date: number;
    offset_user: InputUser;
    limit: number;
  }
  response: Messages$ChatInviteImporters
}

export interface Messages$SetHistoryTTL {
  method: "messages.setHistoryTTL";
  params: {
    peer: InputPeer;
    period: number;
  }
  response: Updates
}

export interface Account$ReportProfilePhoto {
  method: "account.reportProfilePhoto";
  params: {
    peer: InputPeer;
    photo_id: InputPhoto;
    reason: ReportReason;
    message: string;
  }
  response: Bool
}

export interface Channels$ConvertToGigagroup {
  method: "channels.convertToGigagroup";
  params: {
    channel: InputChannel;
  }
  response: Updates
}

export interface Messages$CheckHistoryImportPeer {
  method: "messages.checkHistoryImportPeer";
  params: {
    peer: InputPeer;
  }
  response: Messages$CheckedHistoryImportPeer
}

export interface Phone$ToggleGroupCallRecord {
  method: "phone.toggleGroupCallRecord";
  params: {
    flags?: Number;
    start?: True;
    video?: True;
    call: InputGroupCall;
    title?: string;
    video_portrait?: Bool;
  }
  response: Updates
}

export interface Phone$EditGroupCallParticipant {
  method: "phone.editGroupCallParticipant";
  params: {
    flags?: Number;
    call: InputGroupCall;
    participant: InputPeer;
    muted?: Bool;
    volume?: number;
    raise_hand?: Bool;
    video_stopped?: Bool;
    video_paused?: Bool;
    presentation_paused?: Bool;
  }
  response: Updates
}

export interface Phone$EditGroupCallTitle {
  method: "phone.editGroupCallTitle";
  params: {
    call: InputGroupCall;
    title: string;
  }
  response: Updates
}

export interface Phone$GetGroupCallJoinAs {
  method: "phone.getGroupCallJoinAs";
  params: {
    peer: InputPeer;
  }
  response: Phone$JoinAsPeers
}

export interface Phone$ExportGroupCallInvite {
  method: "phone.exportGroupCallInvite";
  params: {
    flags?: Number;
    can_self_unmute?: True;
    call: InputGroupCall;
  }
  response: Phone$ExportedGroupCallInvite
}

export interface Phone$ToggleGroupCallStartSubscription {
  method: "phone.toggleGroupCallStartSubscription";
  params: {
    call: InputGroupCall;
    subscribed: Bool;
  }
  response: Updates
}

export interface Phone$StartScheduledGroupCall {
  method: "phone.startScheduledGroupCall";
  params: {
    call: InputGroupCall;
  }
  response: Updates
}

export interface Phone$SaveDefaultGroupCallJoinAs {
  method: "phone.saveDefaultGroupCallJoinAs";
  params: {
    peer: InputPeer;
    join_as: InputPeer;
  }
  response: Bool
}

export interface Phone$JoinGroupCallPresentation {
  method: "phone.joinGroupCallPresentation";
  params: {
    call: InputGroupCall;
    params: DataJSON;
  }
  response: Updates
}

export interface Phone$LeaveGroupCallPresentation {
  method: "phone.leaveGroupCallPresentation";
  params: {
    call: InputGroupCall;
  }
  response: Updates
}

export interface Stickers$CheckShortName {
  method: "stickers.checkShortName";
  params: {
    short_name: string;
  }
  response: Bool
}

export interface Stickers$SuggestShortName {
  method: "stickers.suggestShortName";
  params: {
    title: string;
  }
  response: Stickers$SuggestedShortName
}

export interface Bots$ResetBotCommands {
  method: "bots.resetBotCommands";
  params: {
    scope: BotCommandScope;
    lang_code: string;
  }
  response: Bool
}

export interface Bots$GetBotCommands {
  method: "bots.getBotCommands";
  params: {
    scope: BotCommandScope;
    lang_code: string;
  }
  response: BotCommand[]
}

export interface Account$ResetPassword {
  method: "account.resetPassword";
  params: {
  }
  response: Account$ResetPasswordResult
}

export interface Account$DeclinePasswordReset {
  method: "account.declinePasswordReset";
  params: {
  }
  response: Bool
}

export interface Auth$CheckRecoveryPassword {
  method: "auth.checkRecoveryPassword";
  params: {
    code: string;
  }
  response: Bool
}

export interface Account$GetChatThemes {
  method: "account.getChatThemes";
  params: {
    hash: number;
  }
  response: Account$Themes
}

export interface Messages$SetChatTheme {
  method: "messages.setChatTheme";
  params: {
    peer: InputPeer;
    emoticon: string;
  }
  response: Updates
}

export interface Channels$ViewSponsoredMessage {
  method: "channels.viewSponsoredMessage";
  params: {
    channel: InputChannel;
    random_id: Uint8Array;
  }
  response: Bool
}

export interface Channels$GetSponsoredMessages {
  method: "channels.getSponsoredMessages";
  params: {
    channel: InputChannel;
  }
  response: Messages$SponsoredMessages
}

export interface Messages$GetMessageReadParticipants {
  method: "messages.getMessageReadParticipants";
  params: {
    peer: InputPeer;
    msg_id: number;
  }
  response: ReadParticipantDate[]
}

export interface Messages$GetSearchResultsCalendar {
  method: "messages.getSearchResultsCalendar";
  params: {
    peer: InputPeer;
    filter: MessagesFilter;
    offset_id: number;
    offset_date: number;
  }
  response: Messages$SearchResultsCalendar
}

export interface Messages$GetSearchResultsPositions {
  method: "messages.getSearchResultsPositions";
  params: {
    peer: InputPeer;
    filter: MessagesFilter;
    offset_id: number;
    limit: number;
  }
  response: Messages$SearchResultsPositions
}

export interface Messages$HideChatJoinRequest {
  method: "messages.hideChatJoinRequest";
  params: {
    flags?: Number;
    approved?: True;
    peer: InputPeer;
    user_id: InputUser;
  }
  response: Updates
}

export interface Messages$HideAllChatJoinRequests {
  method: "messages.hideAllChatJoinRequests";
  params: {
    flags?: Number;
    approved?: True;
    peer: InputPeer;
    link?: string;
  }
  response: Updates
}

export interface Messages$ToggleNoForwards {
  method: "messages.toggleNoForwards";
  params: {
    peer: InputPeer;
    enabled: Bool;
  }
  response: Updates
}

export interface Messages$SaveDefaultSendAs {
  method: "messages.saveDefaultSendAs";
  params: {
    peer: InputPeer;
    send_as: InputPeer;
  }
  response: Bool
}

export interface Channels$GetSendAs {
  method: "channels.getSendAs";
  params: {
    peer: InputPeer;
  }
  response: Channels$SendAsPeers
}

export interface Account$SetAuthorizationTTL {
  method: "account.setAuthorizationTTL";
  params: {
    authorization_ttl_days: number;
  }
  response: Bool
}

export interface Account$ChangeAuthorizationSettings {
  method: "account.changeAuthorizationSettings";
  params: {
    flags?: Number;
    hash: number;
    encrypted_requests_disabled?: Bool;
    call_requests_disabled?: Bool;
  }
  response: Bool
}

export interface Channels$DeleteParticipantHistory {
  method: "channels.deleteParticipantHistory";
  params: {
    channel: InputChannel;
    participant: InputPeer;
  }
  response: Messages$AffectedHistory
}

export interface Messages$SendReaction {
  method: "messages.sendReaction";
  params: {
    flags?: Number;
    big?: True;
    add_to_recent?: True;
    peer: InputPeer;
    msg_id: number;
    reaction?: Reaction;
  }
  response: Updates
}

export interface Messages$GetMessagesReactions {
  method: "messages.getMessagesReactions";
  params: {
    peer: InputPeer;
    id: number[];
  }
  response: Updates
}

export interface Messages$GetMessageReactionsList {
  method: "messages.getMessageReactionsList";
  params: {
    flags?: Number;
    peer: InputPeer;
    id: number;
    reaction?: Reaction;
    offset?: string;
    limit: number;
  }
  response: Messages$MessageReactionsList
}

export interface Messages$SetChatAvailableReactions {
  method: "messages.setChatAvailableReactions";
  params: {
    peer: InputPeer;
    available_reactions: ChatReactions;
  }
  response: Updates
}

export interface Messages$GetAvailableReactions {
  method: "messages.getAvailableReactions";
  params: {
    hash: number;
  }
  response: Messages$AvailableReactions
}

export interface Messages$SetDefaultReaction {
  method: "messages.setDefaultReaction";
  params: {
    reaction: Reaction;
  }
  response: Bool
}

export interface Messages$TranslateText {
  method: "messages.translateText";
  params: {
    flags?: Number;
    peer?: InputPeer;
    id?: number[];
    text?: TextWithEntities;
    to_lang: string;
  }
  response: Messages$TranslatedText
}

export interface Messages$GetUnreadReactions {
  method: "messages.getUnreadReactions";
  params: {
    flags?: Number;
    peer: InputPeer;
    top_msg_id?: number;
    offset_id: number;
    add_offset: number;
    limit: number;
    max_id: number;
    min_id: number;
  }
  response: Messages$Messages
}

export interface Messages$ReadReactions {
  method: "messages.readReactions";
  params: {
    flags?: Number;
    peer: InputPeer;
    top_msg_id?: number;
  }
  response: Messages$AffectedHistory
}

export interface Contacts$ResolvePhone {
  method: "contacts.resolvePhone";
  params: {
    phone: string;
  }
  response: Contacts$ResolvedPeer
}

export interface Phone$GetGroupCallStreamChannels {
  method: "phone.getGroupCallStreamChannels";
  params: {
    call: InputGroupCall;
  }
  response: Phone$GroupCallStreamChannels
}

export interface Phone$GetGroupCallStreamRtmpUrl {
  method: "phone.getGroupCallStreamRtmpUrl";
  params: {
    peer: InputPeer;
    revoke: Bool;
  }
  response: Phone$GroupCallStreamRtmpUrl
}

export interface Messages$SearchSentMedia {
  method: "messages.searchSentMedia";
  params: {
    q: string;
    filter: MessagesFilter;
    limit: number;
  }
  response: Messages$Messages
}

export interface Messages$GetAttachMenuBots {
  method: "messages.getAttachMenuBots";
  params: {
    hash: number;
  }
  response: AttachMenuBots
}

export interface Messages$GetAttachMenuBot {
  method: "messages.getAttachMenuBot";
  params: {
    bot: InputUser;
  }
  response: AttachMenuBotsBot
}

export interface Messages$ToggleBotInAttachMenu {
  method: "messages.toggleBotInAttachMenu";
  params: {
    flags?: Number;
    write_allowed?: True;
    bot: InputUser;
    enabled: Bool;
  }
  response: Bool
}

export interface Messages$RequestWebView {
  method: "messages.requestWebView";
  params: {
    flags?: Number;
    from_bot_menu?: True;
    silent?: True;
    peer: InputPeer;
    bot: InputUser;
    url?: string;
    start_param?: string;
    theme_params?: DataJSON;
    platform: string;
    reply_to_msg_id?: number;
    top_msg_id?: number;
    send_as?: InputPeer;
  }
  response: WebViewResult
}

export interface Messages$ProlongWebView {
  method: "messages.prolongWebView";
  params: {
    flags?: Number;
    silent?: True;
    peer: InputPeer;
    bot: InputUser;
    query_id: number;
    reply_to_msg_id?: number;
    top_msg_id?: number;
    send_as?: InputPeer;
  }
  response: Bool
}

export interface Messages$RequestSimpleWebView {
  method: "messages.requestSimpleWebView";
  params: {
    flags?: Number;
    from_switch_webview?: True;
    bot: InputUser;
    url: string;
    theme_params?: DataJSON;
    platform: string;
  }
  response: SimpleWebViewResult
}

export interface Messages$SendWebViewResultMessage {
  method: "messages.sendWebViewResultMessage";
  params: {
    bot_query_id: string;
    result: InputBotInlineResult;
  }
  response: WebViewMessageSent
}

export interface Messages$SendWebViewData {
  method: "messages.sendWebViewData";
  params: {
    bot: InputUser;
    random_id: number;
    button_text: string;
    data: string;
  }
  response: Updates
}

export interface Bots$SetBotMenuButton {
  method: "bots.setBotMenuButton";
  params: {
    user_id: InputUser;
    button: BotMenuButton;
  }
  response: Bool
}

export interface Bots$GetBotMenuButton {
  method: "bots.getBotMenuButton";
  params: {
    user_id: InputUser;
  }
  response: BotMenuButton
}

export interface Account$GetSavedRingtones {
  method: "account.getSavedRingtones";
  params: {
    hash: number;
  }
  response: Account$SavedRingtones
}

export interface Account$SaveRingtone {
  method: "account.saveRingtone";
  params: {
    id: InputDocument;
    unsave: Bool;
  }
  response: Account$SavedRingtone
}

export interface Account$UploadRingtone {
  method: "account.uploadRingtone";
  params: {
    file: InputFile;
    file_name: string;
    mime_type: string;
  }
  response: Document
}

export interface Bots$SetBotBroadcastDefaultAdminRights {
  method: "bots.setBotBroadcastDefaultAdminRights";
  params: {
    admin_rights: ChatAdminRights;
  }
  response: Bool
}

export interface Bots$SetBotGroupDefaultAdminRights {
  method: "bots.setBotGroupDefaultAdminRights";
  params: {
    admin_rights: ChatAdminRights;
  }
  response: Bool
}

export interface Phone$SaveCallLog {
  method: "phone.saveCallLog";
  params: {
    peer: InputPhoneCall;
    file: InputFile;
  }
  response: Bool
}

export interface Channels$ToggleJoinToSend {
  method: "channels.toggleJoinToSend";
  params: {
    channel: InputChannel;
    enabled: Bool;
  }
  response: Updates
}

export interface Channels$ToggleJoinRequest {
  method: "channels.toggleJoinRequest";
  params: {
    channel: InputChannel;
    enabled: Bool;
  }
  response: Updates
}

export interface Payments$ExportInvoice {
  method: "payments.exportInvoice";
  params: {
    invoice_media: InputMedia;
  }
  response: Payments$ExportedInvoice
}

export interface Messages$TranscribeAudio {
  method: "messages.transcribeAudio";
  params: {
    peer: InputPeer;
    msg_id: number;
  }
  response: Messages$TranscribedAudio
}

export interface Messages$RateTranscribedAudio {
  method: "messages.rateTranscribedAudio";
  params: {
    peer: InputPeer;
    msg_id: number;
    transcription_id: number;
    good: Bool;
  }
  response: Bool
}

export interface Payments$AssignAppStoreTransaction {
  method: "payments.assignAppStoreTransaction";
  params: {
    receipt: Uint8Array;
    purpose: InputStorePaymentPurpose;
  }
  response: Updates
}

export interface Payments$AssignPlayMarketTransaction {
  method: "payments.assignPlayMarketTransaction";
  params: {
    receipt: DataJSON;
    purpose: InputStorePaymentPurpose;
  }
  response: Updates
}

export interface Payments$CanPurchasePremium {
  method: "payments.canPurchasePremium";
  params: {
    purpose: InputStorePaymentPurpose;
  }
  response: Bool
}

export interface Help$GetPremiumPromo {
  method: "help.getPremiumPromo";
  params: {
  }
  response: Help$PremiumPromo
}

export interface Messages$GetCustomEmojiDocuments {
  method: "messages.getCustomEmojiDocuments";
  params: {
    document_id: number[];
  }
  response: Document[]
}

export interface Messages$GetEmojiStickers {
  method: "messages.getEmojiStickers";
  params: {
    hash: number;
  }
  response: Messages$AllStickers
}

export interface Messages$GetFeaturedEmojiStickers {
  method: "messages.getFeaturedEmojiStickers";
  params: {
    hash: number;
  }
  response: Messages$FeaturedStickers
}

export interface Account$UpdateEmojiStatus {
  method: "account.updateEmojiStatus";
  params: {
    emoji_status: EmojiStatus;
  }
  response: Bool
}

export interface Account$GetDefaultEmojiStatuses {
  method: "account.getDefaultEmojiStatuses";
  params: {
    hash: number;
  }
  response: Account$EmojiStatuses
}

export interface Account$GetRecentEmojiStatuses {
  method: "account.getRecentEmojiStatuses";
  params: {
    hash: number;
  }
  response: Account$EmojiStatuses
}

export interface Account$ClearRecentEmojiStatuses {
  method: "account.clearRecentEmojiStatuses";
  params: {
  }
  response: Bool
}

export interface Messages$ReportReaction {
  method: "messages.reportReaction";
  params: {
    peer: InputPeer;
    id: number;
    reaction_peer: InputPeer;
  }
  response: Bool
}

export interface Messages$GetTopReactions {
  method: "messages.getTopReactions";
  params: {
    limit: number;
    hash: number;
  }
  response: Messages$Reactions
}

export interface Messages$GetRecentReactions {
  method: "messages.getRecentReactions";
  params: {
    limit: number;
    hash: number;
  }
  response: Messages$Reactions
}

export interface Messages$ClearRecentReactions {
  method: "messages.clearRecentReactions";
  params: {
  }
  response: Bool
}

export interface Messages$GetExtendedMedia {
  method: "messages.getExtendedMedia";
  params: {
    peer: InputPeer;
    id: number[];
  }
  response: Updates
}

export interface Auth$ImportWebTokenAuthorization {
  method: "auth.importWebTokenAuthorization";
  params: {
    api_id: number;
    api_hash: string;
    web_auth_token: string;
  }
  response: Auth$Authorization
}

export interface Account$ReorderUsernames {
  method: "account.reorderUsernames";
  params: {
    order: string[];
  }
  response: Bool
}

export interface Account$ToggleUsername {
  method: "account.toggleUsername";
  params: {
    username: string;
    active: Bool;
  }
  response: Bool
}

export interface Channels$ReorderUsernames {
  method: "channels.reorderUsernames";
  params: {
    channel: InputChannel;
    order: string[];
  }
  response: Bool
}

export interface Channels$ToggleUsername {
  method: "channels.toggleUsername";
  params: {
    channel: InputChannel;
    username: string;
    active: Bool;
  }
  response: Bool
}

export interface Channels$DeactivateAllUsernames {
  method: "channels.deactivateAllUsernames";
  params: {
    channel: InputChannel;
  }
  response: Bool
}

export interface Channels$ToggleForum {
  method: "channels.toggleForum";
  params: {
    channel: InputChannel;
    enabled: Bool;
  }
  response: Updates
}

export interface Channels$CreateForumTopic {
  method: "channels.createForumTopic";
  params: {
    flags?: Number;
    channel: InputChannel;
    title: string;
    icon_color?: number;
    icon_emoji_id?: number;
    random_id: number;
    send_as?: InputPeer;
  }
  response: Updates
}

export interface Channels$GetForumTopics {
  method: "channels.getForumTopics";
  params: {
    flags?: Number;
    channel: InputChannel;
    q?: string;
    offset_date: number;
    offset_id: number;
    offset_topic: number;
    limit: number;
  }
  response: Messages$ForumTopics
}

export interface Channels$GetForumTopicsByID {
  method: "channels.getForumTopicsByID";
  params: {
    channel: InputChannel;
    topics: number[];
  }
  response: Messages$ForumTopics
}

export interface Channels$EditForumTopic {
  method: "channels.editForumTopic";
  params: {
    flags?: Number;
    channel: InputChannel;
    topic_id: number;
    title?: string;
    icon_emoji_id?: number;
    closed?: Bool;
    hidden?: Bool;
  }
  response: Updates
}

export interface Channels$UpdatePinnedForumTopic {
  method: "channels.updatePinnedForumTopic";
  params: {
    channel: InputChannel;
    topic_id: number;
    pinned: Bool;
  }
  response: Updates
}

export interface Channels$DeleteTopicHistory {
  method: "channels.deleteTopicHistory";
  params: {
    channel: InputChannel;
    top_msg_id: number;
  }
  response: Messages$AffectedHistory
}

export interface Channels$ReorderPinnedForumTopics {
  method: "channels.reorderPinnedForumTopics";
  params: {
    flags?: Number;
    force?: True;
    channel: InputChannel;
    order: number[];
  }
  response: Updates
}

export interface Channels$ToggleAntiSpam {
  method: "channels.toggleAntiSpam";
  params: {
    channel: InputChannel;
    enabled: Bool;
  }
  response: Updates
}

export interface Channels$ReportAntiSpamFalsePositive {
  method: "channels.reportAntiSpamFalsePositive";
  params: {
    channel: InputChannel;
    msg_id: number;
  }
  response: Bool
}

export interface Messages$SetDefaultHistoryTTL {
  method: "messages.setDefaultHistoryTTL";
  params: {
    period: number;
  }
  response: Bool
}

export interface Messages$GetDefaultHistoryTTL {
  method: "messages.getDefaultHistoryTTL";
  params: {
  }
  response: DefaultHistoryTTL
}

export interface Contacts$ExportContactToken {
  method: "contacts.exportContactToken";
  params: {
  }
  response: ExportedContactToken
}

export interface Contacts$ImportContactToken {
  method: "contacts.importContactToken";
  params: {
    token: string;
  }
  response: User
}

export interface Photos$UploadContactProfilePhoto {
  method: "photos.uploadContactProfilePhoto";
  params: {
    flags?: Number;
    suggest?: True;
    save?: True;
    user_id: InputUser;
    file?: InputFile;
    video?: InputFile;
    video_start_ts?: number;
    video_emoji_markup?: VideoSize;
  }
  response: Photos$Photo
}

export interface Channels$ToggleParticipantsHidden {
  method: "channels.toggleParticipantsHidden";
  params: {
    channel: InputChannel;
    enabled: Bool;
  }
  response: Updates
}

export interface Messages$SendBotRequestedPeer {
  method: "messages.sendBotRequestedPeer";
  params: {
    peer: InputPeer;
    msg_id: number;
    button_id: number;
    requested_peer: InputPeer;
  }
  response: Updates
}

export interface Account$GetDefaultProfilePhotoEmojis {
  method: "account.getDefaultProfilePhotoEmojis";
  params: {
    hash: number;
  }
  response: EmojiList
}

export interface Account$GetDefaultGroupPhotoEmojis {
  method: "account.getDefaultGroupPhotoEmojis";
  params: {
    hash: number;
  }
  response: EmojiList
}

export interface Auth$RequestFirebaseSms {
  method: "auth.requestFirebaseSms";
  params: {
    flags?: Number;
    phone_number: string;
    phone_code_hash: string;
    safety_net_token?: string;
    ios_push_secret?: string;
  }
  response: Bool
}

export interface Messages$GetEmojiGroups {
  method: "messages.getEmojiGroups";
  params: {
    hash: number;
  }
  response: Messages$EmojiGroups
}

export interface Messages$GetEmojiStatusGroups {
  method: "messages.getEmojiStatusGroups";
  params: {
    hash: number;
  }
  response: Messages$EmojiGroups
}

export interface Messages$GetEmojiProfilePhotoGroups {
  method: "messages.getEmojiProfilePhotoGroups";
  params: {
    hash: number;
  }
  response: Messages$EmojiGroups
}

export interface Messages$SearchCustomEmoji {
  method: "messages.searchCustomEmoji";
  params: {
    emoticon: string;
    hash: number;
  }
  response: EmojiList
}

export interface Messages$TogglePeerTranslations {
  method: "messages.togglePeerTranslations";
  params: {
    flags?: Number;
    disabled?: True;
    peer: InputPeer;
  }
  response: Bool
}

export interface Account$GetAutoSaveSettings {
  method: "account.getAutoSaveSettings";
  params: {
  }
  response: Account$AutoSaveSettings
}

export interface Account$SaveAutoSaveSettings {
  method: "account.saveAutoSaveSettings";
  params: {
    flags?: Number;
    users?: True;
    chats?: True;
    broadcasts?: True;
    peer?: InputPeer;
    settings: AutoSaveSettings;
  }
  response: Bool
}

export interface Account$DeleteAutoSaveExceptions {
  method: "account.deleteAutoSaveExceptions";
  params: {
  }
  response: Bool
}

export interface Stickers$ChangeSticker {
  method: "stickers.changeSticker";
  params: {
    flags?: Number;
    sticker: InputDocument;
    emoji?: string;
    mask_coords?: MaskCoords;
    keywords?: string;
  }
  response: Messages$StickerSet
}

export interface Stickers$RenameStickerSet {
  method: "stickers.renameStickerSet";
  params: {
    stickerset: InputStickerSet;
    title: string;
  }
  response: Messages$StickerSet
}

export interface Stickers$DeleteStickerSet {
  method: "stickers.deleteStickerSet";
  params: {
    stickerset: InputStickerSet;
  }
  response: Bool
}

export interface Messages$GetBotApp {
  method: "messages.getBotApp";
  params: {
    app: InputBotApp;
    hash: number;
  }
  response: Messages$BotApp
}

export interface Messages$RequestAppWebView {
  method: "messages.requestAppWebView";
  params: {
    flags?: Number;
    write_allowed?: True;
    peer: InputPeer;
    app: InputBotApp;
    start_param?: string;
    theme_params?: DataJSON;
    platform: string;
  }
  response: AppWebViewResult
}

export interface Bots$SetBotInfo {
  method: "bots.setBotInfo";
  params: {
    flags?: Number;
    bot?: InputUser;
    lang_code: string;
    name?: string;
    about?: string;
    description?: string;
  }
  response: Bool
}

export interface Bots$GetBotInfo {
  method: "bots.getBotInfo";
  params: {
    flags?: Number;
    bot?: InputUser;
    lang_code: string;
  }
  response: Bots$BotInfo
}

export interface Auth$ResetLoginEmail {
  method: "auth.resetLoginEmail";
  params: {
    phone_number: string;
    phone_code_hash: string;
  }
  response: Auth$SentCode
}

export interface Chatlists$ExportChatlistInvite {
  method: "chatlists.exportChatlistInvite";
  params: {
    chatlist: InputChatlist;
    title: string;
    peers: InputPeer;
  }
  response: Chatlists$ExportedChatlistInvite
}

export interface Chatlists$DeleteExportedInvite {
  method: "chatlists.deleteExportedInvite";
  params: {
    chatlist: InputChatlist;
    slug: string;
  }
  response: Bool
}

export interface Chatlists$EditExportedInvite {
  method: "chatlists.editExportedInvite";
  params: {
    flags?: Number;
    chatlist: InputChatlist;
    slug: string;
    title?: string;
    peers?: InputPeer;
  }
  response: ExportedChatlistInvite
}

export interface Chatlists$GetExportedInvites {
  method: "chatlists.getExportedInvites";
  params: {
    chatlist: InputChatlist;
  }
  response: Chatlists$ExportedInvites
}

export interface Chatlists$CheckChatlistInvite {
  method: "chatlists.checkChatlistInvite";
  params: {
    slug: string;
  }
  response: Chatlists$ChatlistInvite
}

export interface Chatlists$JoinChatlistInvite {
  method: "chatlists.joinChatlistInvite";
  params: {
    slug: string;
    peers: InputPeer;
  }
  response: Updates
}

export interface Chatlists$GetChatlistUpdates {
  method: "chatlists.getChatlistUpdates";
  params: {
    chatlist: InputChatlist;
  }
  response: Chatlists$ChatlistUpdates
}

export interface Chatlists$JoinChatlistUpdates {
  method: "chatlists.joinChatlistUpdates";
  params: {
    chatlist: InputChatlist;
    peers: InputPeer;
  }
  response: Updates
}

export interface Chatlists$HideChatlistUpdates {
  method: "chatlists.hideChatlistUpdates";
  params: {
    chatlist: InputChatlist;
  }
  response: Bool
}

export interface Chatlists$GetLeaveChatlistSuggestions {
  method: "chatlists.getLeaveChatlistSuggestions";
  params: {
    chatlist: InputChatlist;
  }
  response: Peer[]
}

export interface Chatlists$LeaveChatlist {
  method: "chatlists.leaveChatlist";
  params: {
    chatlist: InputChatlist;
    peers: InputPeer;
  }
  response: Updates
}

export interface Bots$ReorderUsernames {
  method: "bots.reorderUsernames";
  params: {
    bot: InputUser;
    order: string[];
  }
  response: Bool
}

export interface Bots$ToggleUsername {
  method: "bots.toggleUsername";
  params: {
    bot: InputUser;
    username: string;
    active: Bool;
  }
  response: Bool
}

export interface Messages$SetChatWallPaper {
  method: "messages.setChatWallPaper";
  params: {
    flags?: Number;
    peer: InputPeer;
    wallpaper?: InputWallPaper;
    settings?: WallPaperSettings;
    id?: number;
  }
  response: Updates
}
