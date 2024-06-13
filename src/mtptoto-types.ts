export type Bool = $BoolFalse | $BoolTrue;
export type True = $True;
export type Error = $Error;
export type Null = $Null;
export type InputPeer = $InputPeerEmpty | $InputPeerSelf | $InputPeerChat | $InputPeerUser | $InputPeerChannel | $InputPeerUserFromMessage | $InputPeerChannelFromMessage;
export type InputUser = $InputUserEmpty | $InputUserSelf | $InputUser | $InputUserFromMessage;
export type InputContact = $InputPhoneContact;
export type InputFile = $InputFile | $InputFileBig;
export type InputMedia = $InputMediaEmpty | $InputMediaUploadedPhoto | $InputMediaPhoto | $InputMediaGeoPoint | $InputMediaContact | $InputMediaUploadedDocument | $InputMediaDocument | $InputMediaVenue | $InputMediaPhotoExternal | $InputMediaDocumentExternal | $InputMediaGame | $InputMediaInvoice | $InputMediaGeoLive | $InputMediaPoll | $InputMediaDice | $InputMediaStory | $InputMediaWebPage;
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
export type MessageMedia = $MessageMediaEmpty | $MessageMediaPhoto | $MessageMediaGeo | $MessageMediaContact | $MessageMediaUnsupported | $MessageMediaDocument | $MessageMediaWebPage | $MessageMediaVenue | $MessageMediaGame | $MessageMediaInvoice | $MessageMediaGeoLive | $MessageMediaPoll | $MessageMediaDice | $MessageMediaStory | $MessageMediaGiveaway | $MessageMediaGiveawayResults;
export type MessageAction = $MessageActionEmpty | $MessageActionChatCreate | $MessageActionChatEditTitle | $MessageActionChatEditPhoto | $MessageActionChatDeletePhoto | $MessageActionChatAddUser | $MessageActionChatDeleteUser | $MessageActionChatJoinedByLink | $MessageActionChannelCreate | $MessageActionChatMigrateTo | $MessageActionChannelMigrateFrom | $MessageActionPinMessage | $MessageActionHistoryClear | $MessageActionGameScore | $MessageActionPaymentSentMe | $MessageActionPaymentSent | $MessageActionPhoneCall | $MessageActionScreenshotTaken | $MessageActionCustomAction | $MessageActionBotAllowed | $MessageActionSecureValuesSentMe | $MessageActionSecureValuesSent | $MessageActionContactSignUp | $MessageActionGeoProximityReached | $MessageActionGroupCall | $MessageActionInviteToGroupCall | $MessageActionSetMessagesTTL | $MessageActionGroupCallScheduled | $MessageActionSetChatTheme | $MessageActionChatJoinedByRequest | $MessageActionWebViewDataSentMe | $MessageActionWebViewDataSent | $MessageActionGiftPremium | $MessageActionTopicCreate | $MessageActionTopicEdit | $MessageActionSuggestProfilePhoto | $MessageActionRequestedPeer | $MessageActionSetChatWallPaper | $MessageActionGiftCode | $MessageActionGiveawayLaunch | $MessageActionGiveawayResults;
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
export type Update = $UpdateNewMessage | $UpdateMessageID | $UpdateDeleteMessages | $UpdateUserTyping | $UpdateChatUserTyping | $UpdateChatParticipants | $UpdateUserStatus | $UpdateUserName | $UpdateNewAuthorization | $UpdateNewEncryptedMessage | $UpdateEncryptedChatTyping | $UpdateEncryption | $UpdateEncryptedMessagesRead | $UpdateChatParticipantAdd | $UpdateChatParticipantDelete | $UpdateDcOptions | $UpdateNotifySettings | $UpdateServiceNotification | $UpdatePrivacy | $UpdateUserPhone | $UpdateReadHistoryInbox | $UpdateReadHistoryOutbox | $UpdateWebPage | $UpdateReadMessagesContents | $UpdateChannelTooLong | $UpdateChannel | $UpdateNewChannelMessage | $UpdateReadChannelInbox | $UpdateDeleteChannelMessages | $UpdateChannelMessageViews | $UpdateChatParticipantAdmin | $UpdateNewStickerSet | $UpdateStickerSetsOrder | $UpdateStickerSets | $UpdateSavedGifs | $UpdateBotInlineQuery | $UpdateBotInlineSend | $UpdateEditChannelMessage | $UpdateBotCallbackQuery | $UpdateEditMessage | $UpdateInlineBotCallbackQuery | $UpdateReadChannelOutbox | $UpdateDraftMessage | $UpdateReadFeaturedStickers | $UpdateRecentStickers | $UpdateConfig | $UpdatePtsChanged | $UpdateChannelWebPage | $UpdateDialogPinned | $UpdatePinnedDialogs | $UpdateBotWebhookJSON | $UpdateBotWebhookJSONQuery | $UpdateBotShippingQuery | $UpdateBotPrecheckoutQuery | $UpdatePhoneCall | $UpdateLangPackTooLong | $UpdateLangPack | $UpdateFavedStickers | $UpdateChannelReadMessagesContents | $UpdateContactsReset | $UpdateChannelAvailableMessages | $UpdateDialogUnreadMark | $UpdateMessagePoll | $UpdateChatDefaultBannedRights | $UpdateFolderPeers | $UpdatePeerSettings | $UpdatePeerLocated | $UpdateNewScheduledMessage | $UpdateDeleteScheduledMessages | $UpdateTheme | $UpdateGeoLiveViewed | $UpdateLoginToken | $UpdateMessagePollVote | $UpdateDialogFilter | $UpdateDialogFilterOrder | $UpdateDialogFilters | $UpdatePhoneCallSignalingData | $UpdateChannelMessageForwards | $UpdateReadChannelDiscussionInbox | $UpdateReadChannelDiscussionOutbox | $UpdatePeerBlocked | $UpdateChannelUserTyping | $UpdatePinnedMessages | $UpdatePinnedChannelMessages | $UpdateChat | $UpdateGroupCallParticipants | $UpdateGroupCall | $UpdatePeerHistoryTTL | $UpdateChatParticipant | $UpdateChannelParticipant | $UpdateBotStopped | $UpdateGroupCallConnection | $UpdateBotCommands | $UpdatePendingJoinRequests | $UpdateBotChatInviteRequester | $UpdateMessageReactions | $UpdateAttachMenuBots | $UpdateWebViewResultSent | $UpdateBotMenuButton | $UpdateSavedRingtones | $UpdateTranscribedAudio | $UpdateReadFeaturedEmojiStickers | $UpdateUserEmojiStatus | $UpdateRecentEmojiStatuses | $UpdateRecentReactions | $UpdateMoveStickerSetToTop | $UpdateMessageExtendedMedia | $UpdateChannelPinnedTopic | $UpdateChannelPinnedTopics | $UpdateUser | $UpdateAutoSaveSettings | $UpdateGroupInvitePrivacyForbidden | $UpdateStory | $UpdateReadStories | $UpdateStoryID | $UpdateStoriesStealthMode | $UpdateSentStoryReaction | $UpdateBotChatBoost | $UpdateChannelViewForumAsMessages | $UpdatePeerWallpaper | $UpdateBotMessageReaction | $UpdateBotMessageReactions | $UpdateSavedDialogPinned | $UpdatePinnedSavedDialogs;
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
export type InputPrivacyKey = $InputPrivacyKeyStatusTimestamp | $InputPrivacyKeyChatInvite | $InputPrivacyKeyPhoneCall | $InputPrivacyKeyPhoneP2P | $InputPrivacyKeyForwards | $InputPrivacyKeyProfilePhoto | $InputPrivacyKeyPhoneNumber | $InputPrivacyKeyAddedByPhone | $InputPrivacyKeyVoiceMessages | $InputPrivacyKeyAbout;
export type PrivacyKey = $PrivacyKeyStatusTimestamp | $PrivacyKeyChatInvite | $PrivacyKeyPhoneCall | $PrivacyKeyPhoneP2P | $PrivacyKeyForwards | $PrivacyKeyProfilePhoto | $PrivacyKeyPhoneNumber | $PrivacyKeyAddedByPhone | $PrivacyKeyVoiceMessages | $PrivacyKeyAbout;
export type InputPrivacyRule = $InputPrivacyValueAllowContacts | $InputPrivacyValueAllowAll | $InputPrivacyValueAllowUsers | $InputPrivacyValueDisallowContacts | $InputPrivacyValueDisallowAll | $InputPrivacyValueDisallowUsers | $InputPrivacyValueAllowChatParticipants | $InputPrivacyValueDisallowChatParticipants | $InputPrivacyValueAllowCloseFriends;
export type PrivacyRule = $PrivacyValueAllowContacts | $PrivacyValueAllowAll | $PrivacyValueAllowUsers | $PrivacyValueDisallowContacts | $PrivacyValueDisallowAll | $PrivacyValueDisallowUsers | $PrivacyValueAllowChatParticipants | $PrivacyValueDisallowChatParticipants | $PrivacyValueAllowCloseFriends;
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
export type InputStickerSet = $InputStickerSetEmpty | $InputStickerSetID | $InputStickerSetShortName | $InputStickerSetAnimatedEmoji | $InputStickerSetDice | $InputStickerSetAnimatedEmojiAnimations | $InputStickerSetPremiumGifts | $InputStickerSetEmojiGenericAnimations | $InputStickerSetEmojiDefaultStatuses | $InputStickerSetEmojiDefaultTopicIcons | $InputStickerSetEmojiChannelDefaultStatuses;
export type StickerSet = $StickerSet;
export type Messages$StickerSet = $Messages$StickerSet | $Messages$StickerSetNotModified;
export type BotCommand = $BotCommand;
export type BotInfo = $BotInfo;
export type KeyboardButton = $KeyboardButton | $KeyboardButtonUrl | $KeyboardButtonCallback | $KeyboardButtonRequestPhone | $KeyboardButtonRequestGeoLocation | $KeyboardButtonSwitchInline | $KeyboardButtonGame | $KeyboardButtonBuy | $KeyboardButtonUrlAuth | $InputKeyboardButtonUrlAuth | $KeyboardButtonRequestPoll | $InputKeyboardButtonUserProfile | $KeyboardButtonUserProfile | $KeyboardButtonWebView | $KeyboardButtonSimpleWebView | $KeyboardButtonRequestPeer;
export type KeyboardButtonRow = $KeyboardButtonRow;
export type ReplyMarkup = $ReplyKeyboardHide | $ReplyKeyboardForceReply | $ReplyKeyboardMarkup | $ReplyInlineMarkup;
export type MessageEntity = $MessageEntityUnknown | $MessageEntityMention | $MessageEntityHashtag | $MessageEntityBotCommand | $MessageEntityUrl | $MessageEntityEmail | $MessageEntityBold | $MessageEntityItalic | $MessageEntityCode | $MessageEntityPre | $MessageEntityTextUrl | $MessageEntityMentionName | $InputMessageEntityMentionName | $MessageEntityPhone | $MessageEntityCashtag | $MessageEntityUnderline | $MessageEntityStrike | $MessageEntityBankCard | $MessageEntitySpoiler | $MessageEntityCustomEmoji | $MessageEntityBlockquote;
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
export type InputBotInlineMessage = $InputBotInlineMessageMediaAuto | $InputBotInlineMessageText | $InputBotInlineMessageMediaGeo | $InputBotInlineMessageMediaVenue | $InputBotInlineMessageMediaContact | $InputBotInlineMessageGame | $InputBotInlineMessageMediaInvoice | $InputBotInlineMessageMediaWebPage;
export type InputBotInlineResult = $InputBotInlineResult | $InputBotInlineResultPhoto | $InputBotInlineResultDocument | $InputBotInlineResultGame;
export type BotInlineMessage = $BotInlineMessageMediaAuto | $BotInlineMessageText | $BotInlineMessageMediaGeo | $BotInlineMessageMediaVenue | $BotInlineMessageMediaContact | $BotInlineMessageMediaInvoice | $BotInlineMessageMediaWebPage;
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
export type ChannelAdminLogEventAction = $ChannelAdminLogEventActionChangeTitle | $ChannelAdminLogEventActionChangeAbout | $ChannelAdminLogEventActionChangeUsername | $ChannelAdminLogEventActionChangePhoto | $ChannelAdminLogEventActionToggleInvites | $ChannelAdminLogEventActionToggleSignatures | $ChannelAdminLogEventActionUpdatePinned | $ChannelAdminLogEventActionEditMessage | $ChannelAdminLogEventActionDeleteMessage | $ChannelAdminLogEventActionParticipantJoin | $ChannelAdminLogEventActionParticipantLeave | $ChannelAdminLogEventActionParticipantInvite | $ChannelAdminLogEventActionParticipantToggleBan | $ChannelAdminLogEventActionParticipantToggleAdmin | $ChannelAdminLogEventActionChangeStickerSet | $ChannelAdminLogEventActionTogglePreHistoryHidden | $ChannelAdminLogEventActionDefaultBannedRights | $ChannelAdminLogEventActionStopPoll | $ChannelAdminLogEventActionChangeLinkedChat | $ChannelAdminLogEventActionChangeLocation | $ChannelAdminLogEventActionToggleSlowMode | $ChannelAdminLogEventActionStartGroupCall | $ChannelAdminLogEventActionDiscardGroupCall | $ChannelAdminLogEventActionParticipantMute | $ChannelAdminLogEventActionParticipantUnmute | $ChannelAdminLogEventActionToggleGroupCallSetting | $ChannelAdminLogEventActionParticipantJoinByInvite | $ChannelAdminLogEventActionExportedInviteDelete | $ChannelAdminLogEventActionExportedInviteRevoke | $ChannelAdminLogEventActionExportedInviteEdit | $ChannelAdminLogEventActionParticipantVolume | $ChannelAdminLogEventActionChangeHistoryTTL | $ChannelAdminLogEventActionParticipantJoinByRequest | $ChannelAdminLogEventActionToggleNoForwards | $ChannelAdminLogEventActionSendMessage | $ChannelAdminLogEventActionChangeAvailableReactions | $ChannelAdminLogEventActionChangeUsernames | $ChannelAdminLogEventActionToggleForum | $ChannelAdminLogEventActionCreateTopic | $ChannelAdminLogEventActionEditTopic | $ChannelAdminLogEventActionDeleteTopic | $ChannelAdminLogEventActionPinTopic | $ChannelAdminLogEventActionToggleAntiSpam | $ChannelAdminLogEventActionChangePeerColor | $ChannelAdminLogEventActionChangeProfilePeerColor | $ChannelAdminLogEventActionChangeWallpaper | $ChannelAdminLogEventActionChangeEmojiStatus;
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
export type WebPageAttribute = $WebPageAttributeTheme | $WebPageAttributeStory;
export type Messages$VotesList = $Messages$VotesList;
export type BankCardOpenUrl = $BankCardOpenUrl;
export type Payments$BankCardData = $Payments$BankCardData;
export type DialogFilter = $DialogFilter | $DialogFilterDefault | $DialogFilterChatlist;
export type DialogFilterSuggested = $DialogFilterSuggested;
export type StatsDateRangeDays = $StatsDateRangeDays;
export type StatsAbsValueAndPrev = $StatsAbsValueAndPrev;
export type StatsPercentValue = $StatsPercentValue;
export type StatsGraph = $StatsGraphAsync | $StatsGraphError | $StatsGraph;
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
export type MessageReplyHeader = $MessageReplyHeader | $MessageReplyStoryHeader;
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
export type InputInvoice = $InputInvoiceMessage | $InputInvoiceSlug | $InputInvoicePremiumGiftCode;
export type Payments$ExportedInvoice = $Payments$ExportedInvoice;
export type Messages$TranscribedAudio = $Messages$TranscribedAudio;
export type Help$PremiumPromo = $Help$PremiumPromo;
export type InputStorePaymentPurpose = $InputStorePaymentPremiumSubscription | $InputStorePaymentGiftPremium | $InputStorePaymentPremiumGiftCode | $InputStorePaymentPremiumGiveaway;
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
export type Bots$BotInfo = $Bots$BotInfo;
export type MessagePeerVote = $MessagePeerVote | $MessagePeerVoteInputOption | $MessagePeerVoteMultiple;
export type SponsoredWebPage = $SponsoredWebPage;
export type StoryViews = $StoryViews;
export type StoryItem = $StoryItemDeleted | $StoryItemSkipped | $StoryItem;
export type Stories$AllStories = $Stories$AllStoriesNotModified | $Stories$AllStories;
export type Stories$Stories = $Stories$Stories;
export type StoryView = $StoryView | $StoryViewPublicForward | $StoryViewPublicRepost;
export type Stories$StoryViewsList = $Stories$StoryViewsList;
export type Stories$StoryViews = $Stories$StoryViews;
export type InputReplyTo = $InputReplyToMessage | $InputReplyToStory;
export type ExportedStoryLink = $ExportedStoryLink;
export type StoriesStealthMode = $StoriesStealthMode;
export type MediaAreaCoordinates = $MediaAreaCoordinates;
export type MediaArea = $MediaAreaVenue | $InputMediaAreaVenue | $MediaAreaGeoPoint | $MediaAreaSuggestedReaction | $MediaAreaChannelPost | $InputMediaAreaChannelPost;
export type PeerStories = $PeerStories;
export type Stories$PeerStories = $Stories$PeerStories;
export type Messages$WebPage = $Messages$WebPage;
export type PremiumGiftCodeOption = $PremiumGiftCodeOption;
export type Payments$CheckedGiftCode = $Payments$CheckedGiftCode;
export type Payments$GiveawayInfo = $Payments$GiveawayInfo | $Payments$GiveawayInfoResults;
export type PrepaidGiveaway = $PrepaidGiveaway;
export type Boost = $Boost;
export type Premium$BoostsList = $Premium$BoostsList;
export type MyBoost = $MyBoost;
export type Premium$MyBoosts = $Premium$MyBoosts;
export type Premium$BoostsStatus = $Premium$BoostsStatus;
export type StoryFwdHeader = $StoryFwdHeader;
export type PostInteractionCounters = $PostInteractionCountersMessage | $PostInteractionCountersStory;
export type Stats$StoryStats = $Stats$StoryStats;
export type PublicForward = $PublicForwardMessage | $PublicForwardStory;
export type Stats$PublicForwards = $Stats$PublicForwards;
export type PeerColor = $PeerColor;
export type Help$PeerColorSet = $Help$PeerColorSet | $Help$PeerColorProfileSet;
export type Help$PeerColorOption = $Help$PeerColorOption;
export type Help$PeerColors = $Help$PeerColorsNotModified | $Help$PeerColors;
export type StoryReaction = $StoryReaction | $StoryReactionPublicForward | $StoryReactionPublicRepost;
export type Stories$StoryReactionsList = $Stories$StoryReactionsList;
export type SavedDialog = $SavedDialog;
export type Messages$SavedDialogs = $Messages$SavedDialogs | $Messages$SavedDialogsSlice | $Messages$SavedDialogsNotModified;
export interface $BoolFalse {
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
  chat_id: string;
}

export interface $InputUserEmpty {
  _: "inputUserEmpty";
}

export interface $InputUserSelf {
  _: "inputUserSelf";
}

export interface $InputPhoneContact {
  _: "inputPhoneContact";
  client_id: string;
  phone: string;
  first_name: string;
  last_name: string;
}

export interface $InputFile {
  _: "inputFile";
  id: string;
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
  spoiler?: boolean;
  file: InputFile;
  stickers?: InputDocument[];
  ttl_seconds?: number;
}

export interface $InputMediaPhoto {
  _: "inputMediaPhoto";
  flags?: Number;
  spoiler?: boolean;
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
  id: string;
  access_hash: string;
  file_reference: Uint8Array;
}

export interface $InputFileLocation {
  _: "inputFileLocation";
  volume_id: string;
  local_id: number;
  secret: string;
  file_reference: Uint8Array;
}

export interface $PeerUser {
  _: "peerUser";
  user_id: string;
}

export interface $PeerChat {
  _: "peerChat";
  chat_id: string;
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
  id: string;
}

export interface $UserProfilePhotoEmpty {
  _: "userProfilePhotoEmpty";
}

export interface $UserProfilePhoto {
  _: "userProfilePhoto";
  flags?: Number;
  has_video?: boolean;
  personal?: boolean;
  photo_id: string;
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
  id: string;
}

export interface $Chat {
  _: "chat";
  flags?: Number;
  creator?: boolean;
  left?: boolean;
  deactivated?: boolean;
  call_active?: boolean;
  call_not_empty?: boolean;
  noforwards?: boolean;
  id: string;
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
  id: string;
  title: string;
}

export interface $ChatFull {
  _: "chatFull";
  flags?: Number;
  can_set_username?: boolean;
  has_scheduled?: boolean;
  translations_disabled?: boolean;
  id: string;
  about: string;
  participants: ChatParticipants;
  chat_photo?: Photo;
  notify_settings: PeerNotifySettings;
  exported_invite?: ExportedChatInvite;
  bot_info?: BotInfo[];
  pinned_msg_id?: number;
  folder_id?: number;
  call?: InputGroupCall;
  ttl_period?: number;
  groupcall_default_join_as?: Peer;
  theme_emoticon?: string;
  requests_pending?: number;
  recent_requesters?: string[];
  available_reactions?: ChatReactions;
}

export interface $ChatParticipant {
  _: "chatParticipant";
  user_id: string;
  inviter_id: string;
  date: number;
}

export interface $ChatParticipantsForbidden {
  _: "chatParticipantsForbidden";
  flags?: Number;
  chat_id: string;
  self_participant?: ChatParticipant;
}

export interface $ChatParticipants {
  _: "chatParticipants";
  chat_id: string;
  participants: ChatParticipant[];
  version: number;
}

export interface $ChatPhotoEmpty {
  _: "chatPhotoEmpty";
}

export interface $ChatPhoto {
  _: "chatPhoto";
  flags?: Number;
  has_video?: boolean;
  photo_id: string;
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
  out?: boolean;
  mentioned?: boolean;
  media_unread?: boolean;
  silent?: boolean;
  post?: boolean;
  from_scheduled?: boolean;
  legacy?: boolean;
  edit_hide?: boolean;
  pinned?: boolean;
  noforwards?: boolean;
  invert_media?: boolean;
  id: number;
  from_id?: Peer;
  peer_id: Peer;
  saved_peer_id?: Peer;
  fwd_from?: MessageFwdHeader;
  via_bot_id?: string;
  reply_to?: MessageReplyHeader;
  date: number;
  message: string;
  media?: MessageMedia;
  reply_markup?: ReplyMarkup;
  entities?: MessageEntity[];
  views?: number;
  forwards?: number;
  replies?: MessageReplies;
  edit_date?: number;
  post_author?: string;
  grouped_id?: string;
  reactions?: MessageReactions;
  restriction_reason?: RestrictionReason[];
  ttl_period?: number;
}

export interface $MessageService {
  _: "messageService";
  flags?: Number;
  out?: boolean;
  mentioned?: boolean;
  media_unread?: boolean;
  silent?: boolean;
  post?: boolean;
  legacy?: boolean;
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
  spoiler?: boolean;
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
  user_id: string;
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
  users: string[];
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
  users: string[];
}

export interface $MessageActionChatDeleteUser {
  _: "messageActionChatDeleteUser";
  user_id: string;
}

export interface $Dialog {
  _: "dialog";
  flags?: Number;
  pinned?: boolean;
  unread_mark?: boolean;
  view_forum_as_messages?: boolean;
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
  id: string;
}

export interface $Photo {
  _: "photo";
  flags?: Number;
  has_stickers?: boolean;
  id: string;
  access_hash: string;
  file_reference: Uint8Array;
  date: number;
  sizes: PhotoSize[];
  video_sizes?: VideoSize[];
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
  access_hash: string;
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
  setup_password_required?: boolean;
  otherwise_relogin_days?: number;
  tmp_sessions?: number;
  future_auth_token?: Uint8Array;
  user: User;
}

export interface $Auth$ExportedAuthorization {
  _: "auth.exportedAuthorization";
  id: string;
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
  show_previews?: boolean;
  silent?: boolean;
  mute_until?: number;
  sound?: NotificationSound;
  stories_muted?: boolean;
  stories_hide_sender?: boolean;
  stories_sound?: NotificationSound;
}

export interface $PeerNotifySettings {
  _: "peerNotifySettings";
  flags?: Number;
  show_previews?: boolean;
  silent?: boolean;
  mute_until?: number;
  ios_sound?: NotificationSound;
  android_sound?: NotificationSound;
  other_sound?: NotificationSound;
  stories_muted?: boolean;
  stories_hide_sender?: boolean;
  stories_ios_sound?: NotificationSound;
  stories_android_sound?: NotificationSound;
  stories_other_sound?: NotificationSound;
}

export interface $PeerSettings {
  _: "peerSettings";
  flags?: Number;
  report_spam?: boolean;
  add_contact?: boolean;
  block_contact?: boolean;
  share_contact?: boolean;
  need_contacts_exception?: boolean;
  report_geo?: boolean;
  autoarchived?: boolean;
  invite_members?: boolean;
  request_chat_broadcast?: boolean;
  geo_distance?: number;
  request_chat_title?: string;
  request_chat_date?: number;
}

export interface $WallPaper {
  _: "wallPaper";
  id: string;
  flags?: Number;
  creator?: boolean;
  default?: boolean;
  pattern?: boolean;
  dark?: boolean;
  access_hash: string;
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
  blocked?: boolean;
  phone_calls_available?: boolean;
  phone_calls_private?: boolean;
  can_pin_message?: boolean;
  has_scheduled?: boolean;
  video_calls_available?: boolean;
  voice_messages_forbidden?: boolean;
  translations_disabled?: boolean;
  stories_pinned_available?: boolean;
  blocked_my_stories_from?: boolean;
  wallpaper_overridden?: boolean;
  id: string;
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
  premium_gifts?: PremiumGiftOption[];
  wallpaper?: WallPaper;
  stories?: PeerStories;
}

export interface $Contact {
  _: "contact";
  user_id: string;
  mutual: boolean;
}

export interface $ImportedContact {
  _: "importedContact";
  user_id: string;
  client_id: string;
}

export interface $ContactStatus {
  _: "contactStatus";
  user_id: string;
  status: UserStatus;
}

export interface $Contacts$ContactsNotModified {
  _: "contacts.contactsNotModified";
}

export interface $Contacts$Contacts {
  _: "contacts.contacts";
  contacts: Contact[];
  saved_count: number;
  users: User[];
}

export interface $Contacts$ImportedContacts {
  _: "contacts.importedContacts";
  imported: ImportedContact[];
  popular_invites: PopularContact[];
  retry_contacts: string[];
  users: User[];
}

export interface $Contacts$Blocked {
  _: "contacts.blocked";
  blocked: PeerBlocked[];
  chats: Chat[];
  users: User[];
}

export interface $Contacts$BlockedSlice {
  _: "contacts.blockedSlice";
  count: number;
  blocked: PeerBlocked[];
  chats: Chat[];
  users: User[];
}

export interface $Messages$Dialogs {
  _: "messages.dialogs";
  dialogs: Dialog[];
  messages: Message[];
  chats: Chat[];
  users: User[];
}

export interface $Messages$DialogsSlice {
  _: "messages.dialogsSlice";
  count: number;
  dialogs: Dialog[];
  messages: Message[];
  chats: Chat[];
  users: User[];
}

export interface $Messages$Messages {
  _: "messages.messages";
  messages: Message[];
  chats: Chat[];
  users: User[];
}

export interface $Messages$MessagesSlice {
  _: "messages.messagesSlice";
  flags?: Number;
  inexact?: boolean;
  count: number;
  next_rate?: number;
  offset_id_offset?: number;
  messages: Message[];
  chats: Chat[];
  users: User[];
}

export interface $Messages$Chats {
  _: "messages.chats";
  chats: Chat[];
}

export interface $Messages$ChatFull {
  _: "messages.chatFull";
  full_chat: ChatFull;
  chats: Chat[];
  users: User[];
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
  random_id: string;
}

export interface $UpdateDeleteMessages {
  _: "updateDeleteMessages";
  messages: number[];
  pts: number;
  pts_count: number;
}

export interface $UpdateUserTyping {
  _: "updateUserTyping";
  user_id: string;
  action: SendMessageAction;
}

export interface $UpdateChatUserTyping {
  _: "updateChatUserTyping";
  chat_id: string;
  from_id: Peer;
  action: SendMessageAction;
}

export interface $UpdateChatParticipants {
  _: "updateChatParticipants";
  participants: ChatParticipants;
}

export interface $UpdateUserStatus {
  _: "updateUserStatus";
  user_id: string;
  status: UserStatus;
}

export interface $UpdateUserName {
  _: "updateUserName";
  user_id: string;
  first_name: string;
  last_name: string;
  usernames: Username[];
}

export interface $UpdateNewAuthorization {
  _: "updateNewAuthorization";
  flags?: Number;
  unconfirmed?: boolean;
  hash: string;
  date?: number;
  device?: string;
  location?: string;
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
  new_messages: Message[];
  new_encrypted_messages: EncryptedMessage[];
  other_updates: Update[];
  chats: Chat[];
  users: User[];
  state: Updates$State;
}

export interface $Updates$DifferenceSlice {
  _: "updates.differenceSlice";
  new_messages: Message[];
  new_encrypted_messages: EncryptedMessage[];
  other_updates: Update[];
  chats: Chat[];
  users: User[];
  intermediate_state: Updates$State;
}

export interface $UpdatesTooLong {
  _: "updatesTooLong";
}

export interface $UpdateShortMessage {
  _: "updateShortMessage";
  flags?: Number;
  out?: boolean;
  mentioned?: boolean;
  media_unread?: boolean;
  silent?: boolean;
  id: number;
  user_id: string;
  message: string;
  pts: number;
  pts_count: number;
  date: number;
  fwd_from?: MessageFwdHeader;
  via_bot_id?: string;
  reply_to?: MessageReplyHeader;
  entities?: MessageEntity[];
  ttl_period?: number;
}

export interface $UpdateShortChatMessage {
  _: "updateShortChatMessage";
  flags?: Number;
  out?: boolean;
  mentioned?: boolean;
  media_unread?: boolean;
  silent?: boolean;
  id: number;
  from_id: string;
  chat_id: string;
  message: string;
  pts: number;
  pts_count: number;
  date: number;
  fwd_from?: MessageFwdHeader;
  via_bot_id?: string;
  reply_to?: MessageReplyHeader;
  entities?: MessageEntity[];
  ttl_period?: number;
}

export interface $UpdateShort {
  _: "updateShort";
  update: Update;
  date: number;
}

export interface $UpdatesCombined {
  _: "updatesCombined";
  updates: Update[];
  users: User[];
  chats: Chat[];
  date: number;
  seq_start: number;
  seq: number;
}

export interface $Updates {
  _: "updates";
  updates: Update[];
  users: User[];
  chats: Chat[];
  date: number;
  seq: number;
}

export interface $Photos$Photos {
  _: "photos.photos";
  photos: Photo[];
  users: User[];
}

export interface $Photos$PhotosSlice {
  _: "photos.photosSlice";
  count: number;
  photos: Photo[];
  users: User[];
}

export interface $Photos$Photo {
  _: "photos.photo";
  photo: Photo;
  users: User[];
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
  ipv6?: boolean;
  media_only?: boolean;
  tcpo_only?: boolean;
  cdn?: boolean;
  static?: boolean;
  this_port_only?: boolean;
  id: number;
  ip_address: string;
  port: number;
  secret?: Uint8Array;
}

export interface $Config {
  _: "config";
  flags?: Number;
  default_p2p_contacts?: boolean;
  preload_featured_stickers?: boolean;
  revoke_pm_inbox?: boolean;
  blocked_mode?: boolean;
  force_try_ipv6?: boolean;
  date: number;
  expires: number;
  test_mode: boolean;
  this_dc: number;
  dc_options: DcOption[];
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
  can_not_skip?: boolean;
  id: number;
  version: string;
  text: string;
  entities: MessageEntity[];
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
  access_hash: string;
  date: number;
  admin_id: string;
  participant_id: string;
}

export interface $EncryptedChatRequested {
  _: "encryptedChatRequested";
  flags?: Number;
  folder_id?: number;
  id: number;
  access_hash: string;
  date: number;
  admin_id: string;
  participant_id: string;
  g_a: Uint8Array;
}

export interface $EncryptedChat {
  _: "encryptedChat";
  id: number;
  access_hash: string;
  date: number;
  admin_id: string;
  participant_id: string;
  g_a_or_b: Uint8Array;
  key_fingerprint: string;
}

export interface $EncryptedChatDiscarded {
  _: "encryptedChatDiscarded";
  flags?: Number;
  history_deleted?: boolean;
  id: number;
}

export interface $InputEncryptedChat {
  _: "inputEncryptedChat";
  chat_id: number;
  access_hash: string;
}

export interface $EncryptedFileEmpty {
  _: "encryptedFileEmpty";
}

export interface $EncryptedFile {
  _: "encryptedFile";
  id: string;
  access_hash: string;
  size: string;
  dc_id: number;
  key_fingerprint: number;
}

export interface $InputEncryptedFileEmpty {
  _: "inputEncryptedFileEmpty";
}

export interface $InputEncryptedFileUploaded {
  _: "inputEncryptedFileUploaded";
  id: string;
  parts: number;
  md5_checksum: string;
  key_fingerprint: number;
}

export interface $InputEncryptedFile {
  _: "inputEncryptedFile";
  id: string;
  access_hash: string;
}

export interface $InputEncryptedFileLocation {
  _: "inputEncryptedFileLocation";
  id: string;
  access_hash: string;
}

export interface $EncryptedMessage {
  _: "encryptedMessage";
  random_id: string;
  chat_id: number;
  date: number;
  bytes: Uint8Array;
  file: EncryptedFile;
}

export interface $EncryptedMessageService {
  _: "encryptedMessageService";
  random_id: string;
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
  id: string;
  parts: number;
  name: string;
}

export interface $InputEncryptedFileBigUploaded {
  _: "inputEncryptedFileBigUploaded";
  id: string;
  parts: number;
  key_fingerprint: number;
}

export interface $UpdateChatParticipantAdd {
  _: "updateChatParticipantAdd";
  chat_id: string;
  user_id: string;
  inviter_id: string;
  date: number;
  version: number;
}

export interface $UpdateChatParticipantDelete {
  _: "updateChatParticipantDelete";
  chat_id: string;
  user_id: string;
  version: number;
}

export interface $UpdateDcOptions {
  _: "updateDcOptions";
  dc_options: DcOption[];
}

export interface $InputMediaUploadedDocument {
  _: "inputMediaUploadedDocument";
  flags?: Number;
  nosound_video?: boolean;
  force_file?: boolean;
  spoiler?: boolean;
  file: InputFile;
  thumb?: InputFile;
  mime_type: string;
  attributes: DocumentAttribute[];
  stickers?: InputDocument[];
  ttl_seconds?: number;
}

export interface $InputMediaDocument {
  _: "inputMediaDocument";
  flags?: Number;
  spoiler?: boolean;
  id: InputDocument;
  ttl_seconds?: number;
  query?: string;
}

export interface $MessageMediaDocument {
  _: "messageMediaDocument";
  flags?: Number;
  nopremium?: boolean;
  spoiler?: boolean;
  video?: boolean;
  round?: boolean;
  voice?: boolean;
  document?: Document;
  alt_document?: Document;
  ttl_seconds?: number;
}

export interface $InputDocumentEmpty {
  _: "inputDocumentEmpty";
}

export interface $InputDocument {
  _: "inputDocument";
  id: string;
  access_hash: string;
  file_reference: Uint8Array;
}

export interface $InputDocumentFileLocation {
  _: "inputDocumentFileLocation";
  id: string;
  access_hash: string;
  file_reference: Uint8Array;
  thumb_size: string;
}

export interface $DocumentEmpty {
  _: "documentEmpty";
  id: string;
}

export interface $Document {
  _: "document";
  flags?: Number;
  id: string;
  access_hash: string;
  file_reference: Uint8Array;
  date: number;
  mime_type: string;
  size: string;
  thumbs?: PhotoSize[];
  video_thumbs?: VideoSize[];
  dc_id: number;
  attributes: DocumentAttribute[];
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
  my_results: Peer[];
  results: Peer[];
  chats: Chat[];
  users: User[];
}

export interface $UpdateServiceNotification {
  _: "updateServiceNotification";
  flags?: Number;
  popup?: boolean;
  invert_media?: boolean;
  inbox_date?: number;
  type: string;
  message: string;
  media: MessageMedia;
  entities: MessageEntity[];
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
  rules: PrivacyRule[];
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
  users: InputUser[];
}

export interface $InputPrivacyValueDisallowContacts {
  _: "inputPrivacyValueDisallowContacts";
}

export interface $InputPrivacyValueDisallowAll {
  _: "inputPrivacyValueDisallowAll";
}

export interface $InputPrivacyValueDisallowUsers {
  _: "inputPrivacyValueDisallowUsers";
  users: InputUser[];
}

export interface $PrivacyValueAllowContacts {
  _: "privacyValueAllowContacts";
}

export interface $PrivacyValueAllowAll {
  _: "privacyValueAllowAll";
}

export interface $PrivacyValueAllowUsers {
  _: "privacyValueAllowUsers";
  users: string[];
}

export interface $PrivacyValueDisallowContacts {
  _: "privacyValueDisallowContacts";
}

export interface $PrivacyValueDisallowAll {
  _: "privacyValueDisallowAll";
}

export interface $PrivacyValueDisallowUsers {
  _: "privacyValueDisallowUsers";
  users: string[];
}

export interface $Account$PrivacyRules {
  _: "account.privacyRules";
  rules: PrivacyRule[];
  chats: Chat[];
  users: User[];
}

export interface $AccountDaysTTL {
  _: "accountDaysTTL";
  days: number;
}

export interface $UpdateUserPhone {
  _: "updateUserPhone";
  user_id: string;
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
  mask?: boolean;
  alt: string;
  stickerset: InputStickerSet;
  mask_coords?: MaskCoords;
}

export interface $DocumentAttributeVideo {
  _: "documentAttributeVideo";
  flags?: Number;
  round_message?: boolean;
  supports_streaming?: boolean;
  nosound?: boolean;
  duration: number;
  w: number;
  h: number;
  preload_prefix_size?: number;
}

export interface $DocumentAttributeAudio {
  _: "documentAttributeAudio";
  flags?: Number;
  voice?: boolean;
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
  hash: string;
  stickers: Document[];
}

export interface $StickerPack {
  _: "stickerPack";
  emoticon: string;
  documents: string[];
}

export interface $Messages$AllStickersNotModified {
  _: "messages.allStickersNotModified";
}

export interface $Messages$AllStickers {
  _: "messages.allStickers";
  hash: string;
  sets: StickerSet[];
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
  flags?: Number;
  id: string;
  url?: string;
}

export interface $WebPagePending {
  _: "webPagePending";
  flags?: Number;
  id: string;
  url?: string;
  date: number;
}

export interface $WebPage {
  _: "webPage";
  flags?: Number;
  has_large_media?: boolean;
  id: string;
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
  attributes?: WebPageAttribute[];
}

export interface $MessageMediaWebPage {
  _: "messageMediaWebPage";
  flags?: Number;
  force_large_media?: boolean;
  force_small_media?: boolean;
  manual?: boolean;
  safe?: boolean;
  webpage: WebPage;
}

export interface $Authorization {
  _: "authorization";
  flags?: Number;
  current?: boolean;
  official_app?: boolean;
  password_pending?: boolean;
  encrypted_requests_disabled?: boolean;
  call_requests_disabled?: boolean;
  unconfirmed?: boolean;
  hash: string;
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
  authorizations: Authorization[];
}

export interface $Account$Password {
  _: "account.password";
  flags?: Number;
  has_recovery?: boolean;
  has_secure_values?: boolean;
  has_password?: boolean;
  current_algo?: PasswordKdfAlgo;
  srp_B?: Uint8Array;
  srp_id?: string;
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
  revoked?: boolean;
  permanent?: boolean;
  request_needed?: boolean;
  link: string;
  admin_id: string;
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
  channel?: boolean;
  broadcast?: boolean;
  public?: boolean;
  megagroup?: boolean;
  request_needed?: boolean;
  verified?: boolean;
  scam?: boolean;
  fake?: boolean;
  title: string;
  about?: string;
  photo: Photo;
  participants_count: number;
  participants?: User[];
  color: number;
}

export interface $MessageActionChatJoinedByLink {
  _: "messageActionChatJoinedByLink";
  inviter_id: string;
}

export interface $UpdateReadMessagesContents {
  _: "updateReadMessagesContents";
  flags?: Number;
  messages: number[];
  pts: number;
  pts_count: number;
  date?: number;
}

export interface $InputStickerSetEmpty {
  _: "inputStickerSetEmpty";
}

export interface $InputStickerSetID {
  _: "inputStickerSetID";
  id: string;
  access_hash: string;
}

export interface $InputStickerSetShortName {
  _: "inputStickerSetShortName";
  short_name: string;
}

export interface $StickerSet {
  _: "stickerSet";
  flags?: Number;
  archived?: boolean;
  official?: boolean;
  masks?: boolean;
  animated?: boolean;
  videos?: boolean;
  emojis?: boolean;
  text_color?: boolean;
  channel_emoji_status?: boolean;
  installed_date?: number;
  id: string;
  access_hash: string;
  title: string;
  short_name: string;
  thumbs?: PhotoSize[];
  thumb_dc_id?: number;
  thumb_version?: number;
  thumb_document_id?: string;
  count: number;
  hash: number;
}

export interface $Messages$StickerSet {
  _: "messages.stickerSet";
  set: StickerSet;
  packs: StickerPack[];
  keywords: StickerKeyword[];
  documents: Document[];
}

export interface $User {
  _: "user";
  flags?: Number;
  self?: boolean;
  contact?: boolean;
  mutual_contact?: boolean;
  deleted?: boolean;
  bot?: boolean;
  bot_chat_history?: boolean;
  bot_nochats?: boolean;
  verified?: boolean;
  restricted?: boolean;
  min?: boolean;
  bot_inline_geo?: boolean;
  support?: boolean;
  scam?: boolean;
  apply_min_photo?: boolean;
  fake?: boolean;
  bot_attach_menu?: boolean;
  premium?: boolean;
  attach_menu_enabled?: boolean;
  flags2?: Number;
  bot_can_edit?: boolean;
  close_friend?: boolean;
  stories_hidden?: boolean;
  stories_unavailable?: boolean;
  id: string;
  access_hash?: string;
  first_name?: string;
  last_name?: string;
  username?: string;
  phone?: string;
  photo?: UserProfilePhoto;
  status?: UserStatus;
  bot_info_version?: number;
  restriction_reason?: RestrictionReason[];
  bot_inline_placeholder?: string;
  lang_code?: string;
  emoji_status?: EmojiStatus;
  usernames?: Username[];
  stories_max_id?: number;
  color?: PeerColor;
  profile_color?: PeerColor;
}

export interface $BotCommand {
  _: "botCommand";
  command: string;
  description: string;
}

export interface $BotInfo {
  _: "botInfo";
  flags?: Number;
  user_id?: string;
  description?: string;
  description_photo?: Photo;
  description_document?: Document;
  commands?: BotCommand[];
  menu_button?: BotMenuButton;
}

export interface $KeyboardButton {
  _: "keyboardButton";
  text: string;
}

export interface $KeyboardButtonRow {
  _: "keyboardButtonRow";
  buttons: KeyboardButton[];
}

export interface $ReplyKeyboardHide {
  _: "replyKeyboardHide";
  flags?: Number;
  selective?: boolean;
}

export interface $ReplyKeyboardForceReply {
  _: "replyKeyboardForceReply";
  flags?: Number;
  single_use?: boolean;
  selective?: boolean;
  placeholder?: string;
}

export interface $ReplyKeyboardMarkup {
  _: "replyKeyboardMarkup";
  flags?: Number;
  resize?: boolean;
  single_use?: boolean;
  selective?: boolean;
  persistent?: boolean;
  rows: KeyboardButtonRow[];
  placeholder?: string;
}

export interface $InputPeerUser {
  _: "inputPeerUser";
  user_id: string;
  access_hash: string;
}

export interface $InputUser {
  _: "inputUser";
  user_id: string;
  access_hash: string;
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
  out?: boolean;
  id: number;
  pts: number;
  pts_count: number;
  date: number;
  media?: MessageMedia;
  entities?: MessageEntity[];
  ttl_period?: number;
}

export interface $InputChannelEmpty {
  _: "inputChannelEmpty";
}

export interface $InputChannel {
  _: "inputChannel";
  channel_id: string;
  access_hash: string;
}

export interface $PeerChannel {
  _: "peerChannel";
  channel_id: string;
}

export interface $InputPeerChannel {
  _: "inputPeerChannel";
  channel_id: string;
  access_hash: string;
}

export interface $Channel {
  _: "channel";
  flags?: Number;
  creator?: boolean;
  left?: boolean;
  broadcast?: boolean;
  verified?: boolean;
  megagroup?: boolean;
  restricted?: boolean;
  signatures?: boolean;
  min?: boolean;
  scam?: boolean;
  has_link?: boolean;
  has_geo?: boolean;
  slowmode_enabled?: boolean;
  call_active?: boolean;
  call_not_empty?: boolean;
  fake?: boolean;
  gigagroup?: boolean;
  noforwards?: boolean;
  join_to_send?: boolean;
  join_request?: boolean;
  forum?: boolean;
  flags2?: Number;
  stories_hidden?: boolean;
  stories_hidden_min?: boolean;
  stories_unavailable?: boolean;
  id: string;
  access_hash?: string;
  title: string;
  username?: string;
  photo: ChatPhoto;
  date: number;
  restriction_reason?: RestrictionReason[];
  admin_rights?: ChatAdminRights;
  banned_rights?: ChatBannedRights;
  default_banned_rights?: ChatBannedRights;
  participants_count?: number;
  usernames?: Username[];
  stories_max_id?: number;
  color?: PeerColor;
  profile_color?: PeerColor;
  emoji_status?: EmojiStatus;
  level?: number;
}

export interface $ChannelForbidden {
  _: "channelForbidden";
  flags?: Number;
  broadcast?: boolean;
  megagroup?: boolean;
  id: string;
  access_hash: string;
  title: string;
  until_date?: number;
}

export interface $Contacts$ResolvedPeer {
  _: "contacts.resolvedPeer";
  peer: Peer;
  chats: Chat[];
  users: User[];
}

export interface $ChannelFull {
  _: "channelFull";
  flags?: Number;
  can_view_participants?: boolean;
  can_set_username?: boolean;
  can_set_stickers?: boolean;
  hidden_prehistory?: boolean;
  can_set_location?: boolean;
  has_scheduled?: boolean;
  can_view_stats?: boolean;
  blocked?: boolean;
  flags2?: Number;
  can_delete_channel?: boolean;
  antispam?: boolean;
  participants_hidden?: boolean;
  translations_disabled?: boolean;
  stories_pinned_available?: boolean;
  view_forum_as_messages?: boolean;
  id: string;
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
  bot_info: BotInfo[];
  migrated_from_chat_id?: string;
  migrated_from_max_id?: number;
  pinned_msg_id?: number;
  stickerset?: StickerSet;
  available_min_id?: number;
  folder_id?: number;
  linked_chat_id?: string;
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
  recent_requesters?: string[];
  default_send_as?: Peer;
  available_reactions?: ChatReactions;
  stories?: PeerStories;
  wallpaper?: WallPaper;
}

export interface $MessageRange {
  _: "messageRange";
  min_id: number;
  max_id: number;
}

export interface $Messages$ChannelMessages {
  _: "messages.channelMessages";
  flags?: Number;
  inexact?: boolean;
  pts: number;
  count: number;
  offset_id_offset?: number;
  messages: Message[];
  topics: ForumTopic[];
  chats: Chat[];
  users: User[];
}

export interface $MessageActionChannelCreate {
  _: "messageActionChannelCreate";
  title: string;
}

export interface $UpdateChannelTooLong {
  _: "updateChannelTooLong";
  flags?: Number;
  channel_id: string;
  pts?: number;
}

export interface $UpdateChannel {
  _: "updateChannel";
  channel_id: string;
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
  channel_id: string;
  max_id: number;
  still_unread_count: number;
  pts: number;
}

export interface $UpdateDeleteChannelMessages {
  _: "updateDeleteChannelMessages";
  channel_id: string;
  messages: number[];
  pts: number;
  pts_count: number;
}

export interface $UpdateChannelMessageViews {
  _: "updateChannelMessageViews";
  channel_id: string;
  id: number;
  views: number;
}

export interface $Updates$ChannelDifferenceEmpty {
  _: "updates.channelDifferenceEmpty";
  flags?: Number;
  final?: boolean;
  pts: number;
  timeout?: number;
}

export interface $Updates$ChannelDifferenceTooLong {
  _: "updates.channelDifferenceTooLong";
  flags?: Number;
  final?: boolean;
  timeout?: number;
  dialog: Dialog;
  messages: Message[];
  chats: Chat[];
  users: User[];
}

export interface $Updates$ChannelDifference {
  _: "updates.channelDifference";
  flags?: Number;
  final?: boolean;
  pts: number;
  timeout?: number;
  new_messages: Message[];
  other_updates: Update[];
  chats: Chat[];
  users: User[];
}

export interface $ChannelMessagesFilterEmpty {
  _: "channelMessagesFilterEmpty";
}

export interface $ChannelMessagesFilter {
  _: "channelMessagesFilter";
  flags?: Number;
  exclude_new_messages?: boolean;
  ranges: MessageRange[];
}

export interface $ChannelParticipant {
  _: "channelParticipant";
  user_id: string;
  date: number;
}

export interface $ChannelParticipantSelf {
  _: "channelParticipantSelf";
  flags?: Number;
  via_request?: boolean;
  user_id: string;
  inviter_id: string;
  date: number;
}

export interface $ChannelParticipantCreator {
  _: "channelParticipantCreator";
  flags?: Number;
  user_id: string;
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
  participants: ChannelParticipant[];
  chats: Chat[];
  users: User[];
}

export interface $Channels$ChannelParticipant {
  _: "channels.channelParticipant";
  participant: ChannelParticipant;
  chats: Chat[];
  users: User[];
}

export interface $ChatParticipantCreator {
  _: "chatParticipantCreator";
  user_id: string;
}

export interface $ChatParticipantAdmin {
  _: "chatParticipantAdmin";
  user_id: string;
  inviter_id: string;
  date: number;
}

export interface $UpdateChatParticipantAdmin {
  _: "updateChatParticipantAdmin";
  chat_id: string;
  user_id: string;
  is_admin: boolean;
  version: number;
}

export interface $MessageActionChatMigrateTo {
  _: "messageActionChatMigrateTo";
  channel_id: string;
}

export interface $MessageActionChannelMigrateFrom {
  _: "messageActionChannelMigrateFrom";
  title: string;
  chat_id: string;
}

export interface $ChannelParticipantsBots {
  _: "channelParticipantsBots";
}

export interface $Help$TermsOfService {
  _: "help.termsOfService";
  flags?: Number;
  popup?: boolean;
  id: DataJSON;
  text: string;
  entities: MessageEntity[];
  min_age_confirm?: number;
}

export interface $UpdateNewStickerSet {
  _: "updateNewStickerSet";
  stickerset: Messages$StickerSet;
}

export interface $UpdateStickerSetsOrder {
  _: "updateStickerSetsOrder";
  flags?: Number;
  masks?: boolean;
  emojis?: boolean;
  order: string[];
}

export interface $UpdateStickerSets {
  _: "updateStickerSets";
  flags?: Number;
  masks?: boolean;
  emojis?: boolean;
}

export interface $Messages$SavedGifsNotModified {
  _: "messages.savedGifsNotModified";
}

export interface $Messages$SavedGifs {
  _: "messages.savedGifs";
  hash: string;
  gifs: Document[];
}

export interface $UpdateSavedGifs {
  _: "updateSavedGifs";
}

export interface $InputBotInlineMessageMediaAuto {
  _: "inputBotInlineMessageMediaAuto";
  flags?: Number;
  invert_media?: boolean;
  message: string;
  entities?: MessageEntity[];
  reply_markup?: ReplyMarkup;
}

export interface $InputBotInlineMessageText {
  _: "inputBotInlineMessageText";
  flags?: Number;
  no_webpage?: boolean;
  invert_media?: boolean;
  message: string;
  entities?: MessageEntity[];
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
  invert_media?: boolean;
  message: string;
  entities?: MessageEntity[];
  reply_markup?: ReplyMarkup;
}

export interface $BotInlineMessageText {
  _: "botInlineMessageText";
  flags?: Number;
  no_webpage?: boolean;
  invert_media?: boolean;
  message: string;
  entities?: MessageEntity[];
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
  gallery?: boolean;
  query_id: string;
  next_offset?: string;
  switch_pm?: InlineBotSwitchPM;
  switch_webview?: InlineBotWebView;
  results: BotInlineResult[];
  cache_time: number;
  users: User[];
}

export interface $UpdateBotInlineQuery {
  _: "updateBotInlineQuery";
  flags?: Number;
  query_id: string;
  user_id: string;
  query: string;
  geo?: GeoPoint;
  peer_type?: InlineQueryPeerType;
  offset: string;
}

export interface $UpdateBotInlineSend {
  _: "updateBotInlineSend";
  flags?: Number;
  user_id: string;
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
  imported?: boolean;
  saved_out?: boolean;
  from_id?: Peer;
  from_name?: string;
  date: number;
  channel_post?: number;
  post_author?: string;
  saved_from_peer?: Peer;
  saved_from_msg_id?: number;
  saved_from_id?: Peer;
  saved_from_name?: string;
  saved_date?: number;
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
  requires_password?: boolean;
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
  same_peer?: boolean;
  text: string;
  query: string;
  peer_types?: InlineQueryPeerType[];
}

export interface $ReplyInlineMarkup {
  _: "replyInlineMarkup";
  rows: KeyboardButtonRow[];
}

export interface $Messages$BotCallbackAnswer {
  _: "messages.botCallbackAnswer";
  flags?: Number;
  alert?: boolean;
  has_url?: boolean;
  native_ui?: boolean;
  message?: string;
  url?: string;
  cache_time: number;
}

export interface $UpdateBotCallbackQuery {
  _: "updateBotCallbackQuery";
  flags?: Number;
  query_id: string;
  user_id: string;
  peer: Peer;
  msg_id: number;
  chat_instance: string;
  data?: Uint8Array;
  game_short_name?: string;
}

export interface $Messages$MessageEditData {
  _: "messages.messageEditData";
  flags?: Number;
  caption?: boolean;
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
  id: string;
  access_hash: string;
}

export interface $UpdateInlineBotCallbackQuery {
  _: "updateInlineBotCallbackQuery";
  flags?: Number;
  query_id: string;
  user_id: string;
  msg_id: InputBotInlineMessageID;
  chat_instance: string;
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
  dialogs: Dialog[];
  messages: Message[];
  chats: Chat[];
  users: User[];
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
  peers: TopPeer[];
}

export interface $Contacts$TopPeersNotModified {
  _: "contacts.topPeersNotModified";
}

export interface $Contacts$TopPeers {
  _: "contacts.topPeers";
  categories: TopPeerCategoryPeers[];
  chats: Chat[];
  users: User[];
}

export interface $MessageEntityMentionName {
  _: "messageEntityMentionName";
  offset: number;
  length: number;
  user_id: string;
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
  channel_id: string;
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
  no_webpage?: boolean;
  invert_media?: boolean;
  reply_to?: InputReplyTo;
  message: string;
  entities?: MessageEntity[];
  media?: InputMedia;
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
  premium?: boolean;
  hash: string;
  count: number;
  sets: StickerSetCovered[];
  unread: string[];
}

export interface $UpdateReadFeaturedStickers {
  _: "updateReadFeaturedStickers";
}

export interface $Messages$RecentStickersNotModified {
  _: "messages.recentStickersNotModified";
}

export interface $Messages$RecentStickers {
  _: "messages.recentStickers";
  hash: string;
  packs: StickerPack[];
  stickers: Document[];
  dates: number[];
}

export interface $UpdateRecentStickers {
  _: "updateRecentStickers";
}

export interface $Messages$ArchivedStickers {
  _: "messages.archivedStickers";
  count: number;
  sets: StickerSetCovered[];
}

export interface $Messages$StickerSetInstallResultSuccess {
  _: "messages.stickerSetInstallResultSuccess";
}

export interface $Messages$StickerSetInstallResultArchive {
  _: "messages.stickerSetInstallResultArchive";
  sets: StickerSetCovered[];
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
  spoiler?: boolean;
  url: string;
  ttl_seconds?: number;
}

export interface $InputMediaDocumentExternal {
  _: "inputMediaDocumentExternal";
  flags?: Number;
  spoiler?: boolean;
  url: string;
  ttl_seconds?: number;
}

export interface $StickerSetMultiCovered {
  _: "stickerSetMultiCovered";
  set: StickerSet;
  covers: Document[];
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
  id: string;
  access_hash: string;
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
  id: string;
  access_hash: string;
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
  game_id: string;
  score: number;
}

export interface $HighScore {
  _: "highScore";
  pos: number;
  user_id: string;
  score: number;
}

export interface $Messages$HighScores {
  _: "messages.highScores";
  scores: HighScore[];
  users: User[];
}

export interface $Updates$DifferenceTooLong {
  _: "updates.differenceTooLong";
  pts: number;
}

export interface $UpdateChannelWebPage {
  _: "updateChannelWebPage";
  channel_id: string;
  webpage: WebPage;
  pts: number;
  pts_count: number;
}

export interface $Messages$ChatsSlice {
  _: "messages.chatsSlice";
  count: number;
  chats: Chat[];
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
  webpage_id: string;
}

export interface $TextEmail {
  _: "textEmail";
  text: RichText;
  email: string;
}

export interface $TextConcat {
  _: "textConcat";
  texts: RichText[];
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
  items: PageListItem[];
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
  photo_id: string;
  caption: PageCaption;
  url?: string;
  webpage_id?: string;
}

export interface $PageBlockVideo {
  _: "pageBlockVideo";
  flags?: Number;
  autoplay?: boolean;
  loop?: boolean;
  video_id: string;
  caption: PageCaption;
}

export interface $PageBlockCover {
  _: "pageBlockCover";
  cover: PageBlock;
}

export interface $PageBlockEmbed {
  _: "pageBlockEmbed";
  flags?: Number;
  full_width?: boolean;
  allow_scrolling?: boolean;
  url?: string;
  html?: string;
  poster_photo_id?: string;
  w?: number;
  h?: number;
  caption: PageCaption;
}

export interface $PageBlockEmbedPost {
  _: "pageBlockEmbedPost";
  url: string;
  webpage_id: string;
  author_photo_id: string;
  author: string;
  date: number;
  blocks: PageBlock[];
  caption: PageCaption;
}

export interface $PageBlockCollage {
  _: "pageBlockCollage";
  items: PageBlock[];
  caption: PageCaption;
}

export interface $PageBlockSlideshow {
  _: "pageBlockSlideshow";
  items: PageBlock[];
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
  pinned?: boolean;
  folder_id?: number;
  peer: DialogPeer;
}

export interface $UpdatePinnedDialogs {
  _: "updatePinnedDialogs";
  flags?: Number;
  folder_id?: number;
  order?: DialogPeer[];
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
  query_id: string;
  data: DataJSON;
  timeout: number;
}

export interface $LabeledPrice {
  _: "labeledPrice";
  label: string;
  amount: string;
}

export interface $Invoice {
  _: "invoice";
  flags?: Number;
  test?: boolean;
  name_requested?: boolean;
  phone_requested?: boolean;
  email_requested?: boolean;
  shipping_address_requested?: boolean;
  flexible?: boolean;
  phone_to_provider?: boolean;
  email_to_provider?: boolean;
  recurring?: boolean;
  currency: string;
  prices: LabeledPrice[];
  max_tip_amount?: string;
  suggested_tip_amounts?: string[];
  terms_url?: string;
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
  recurring_init?: boolean;
  recurring_used?: boolean;
  currency: string;
  total_amount: string;
  payload: Uint8Array;
  info?: PaymentRequestedInfo;
  shipping_option_id?: string;
  charge: PaymentCharge;
}

export interface $MessageMediaInvoice {
  _: "messageMediaInvoice";
  flags?: Number;
  shipping_address_requested?: boolean;
  test?: boolean;
  title: string;
  description: string;
  photo?: WebDocument;
  receipt_msg_id?: number;
  currency: string;
  total_amount: string;
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
  recurring_init?: boolean;
  recurring_used?: boolean;
  currency: string;
  total_amount: string;
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
  access_hash: string;
  size: number;
  mime_type: string;
  attributes: DocumentAttribute[];
}

export interface $InputWebDocument {
  _: "inputWebDocument";
  url: string;
  size: number;
  mime_type: string;
  attributes: DocumentAttribute[];
}

export interface $InputWebFileLocation {
  _: "inputWebFileLocation";
  url: string;
  access_hash: string;
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
  can_save_credentials?: boolean;
  password_missing?: boolean;
  form_id: string;
  bot_id: string;
  title: string;
  description: string;
  photo?: WebDocument;
  invoice: Invoice;
  provider_id: string;
  url: string;
  native_provider?: string;
  native_params?: DataJSON;
  additional_methods?: PaymentFormMethod[];
  saved_info?: PaymentRequestedInfo;
  saved_credentials?: PaymentSavedCredentials[];
  users: User[];
}

export interface $Payments$ValidatedRequestedInfo {
  _: "payments.validatedRequestedInfo";
  flags?: Number;
  id?: string;
  shipping_options?: ShippingOption[];
}

export interface $Payments$PaymentResult {
  _: "payments.paymentResult";
  updates: Updates;
}

export interface $Payments$PaymentReceipt {
  _: "payments.paymentReceipt";
  flags?: Number;
  date: number;
  bot_id: string;
  provider_id: string;
  title: string;
  description: string;
  photo?: WebDocument;
  invoice: Invoice;
  info?: PaymentRequestedInfo;
  shipping?: ShippingOption;
  tip_amount?: string;
  currency: string;
  total_amount: string;
  credentials_title: string;
  users: User[];
}

export interface $Payments$SavedInfo {
  _: "payments.savedInfo";
  flags?: Number;
  has_saved_credentials?: boolean;
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
  save?: boolean;
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
  prices: LabeledPrice[];
}

export interface $UpdateBotShippingQuery {
  _: "updateBotShippingQuery";
  query_id: string;
  user_id: string;
  payload: Uint8Array;
  shipping_address: PostAddress;
}

export interface $UpdateBotPrecheckoutQuery {
  _: "updateBotPrecheckoutQuery";
  flags?: Number;
  query_id: string;
  user_id: string;
  payload: Uint8Array;
  info?: PaymentRequestedInfo;
  shipping_option_id?: string;
  currency: string;
  total_amount: string;
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
  id: string;
  access_hash: string;
}

export interface $PhoneCallEmpty {
  _: "phoneCallEmpty";
  id: string;
}

export interface $PhoneCallWaiting {
  _: "phoneCallWaiting";
  flags?: Number;
  video?: boolean;
  id: string;
  access_hash: string;
  date: number;
  admin_id: string;
  participant_id: string;
  protocol: PhoneCallProtocol;
  receive_date?: number;
}

export interface $PhoneCallRequested {
  _: "phoneCallRequested";
  flags?: Number;
  video?: boolean;
  id: string;
  access_hash: string;
  date: number;
  admin_id: string;
  participant_id: string;
  g_a_hash: Uint8Array;
  protocol: PhoneCallProtocol;
}

export interface $PhoneCallAccepted {
  _: "phoneCallAccepted";
  flags?: Number;
  video?: boolean;
  id: string;
  access_hash: string;
  date: number;
  admin_id: string;
  participant_id: string;
  g_b: Uint8Array;
  protocol: PhoneCallProtocol;
}

export interface $PhoneCall {
  _: "phoneCall";
  flags?: Number;
  p2p_allowed?: boolean;
  video?: boolean;
  id: string;
  access_hash: string;
  date: number;
  admin_id: string;
  participant_id: string;
  g_a_or_b: Uint8Array;
  key_fingerprint: string;
  protocol: PhoneCallProtocol;
  connections: PhoneConnection[];
  start_date: number;
}

export interface $PhoneCallDiscarded {
  _: "phoneCallDiscarded";
  flags?: Number;
  need_rating?: boolean;
  need_debug?: boolean;
  video?: boolean;
  id: string;
  reason?: PhoneCallDiscardReason;
  duration?: number;
}

export interface $PhoneConnection {
  _: "phoneConnection";
  flags?: Number;
  tcp?: boolean;
  id: string;
  ip: string;
  ipv6: string;
  port: number;
  peer_tag: Uint8Array;
}

export interface $PhoneCallProtocol {
  _: "phoneCallProtocol";
  flags?: Number;
  udp_p2p?: boolean;
  udp_reflector?: boolean;
  min_layer: number;
  max_layer: number;
  library_versions: string[];
}

export interface $Phone$PhoneCall {
  _: "phone.phoneCall";
  phone_call: PhoneCall;
  users: User[];
}

export interface $InputMessagesFilterPhoneCalls {
  _: "inputMessagesFilterPhoneCalls";
  flags?: Number;
  missed?: boolean;
}

export interface $MessageActionPhoneCall {
  _: "messageActionPhoneCall";
  flags?: Number;
  video?: boolean;
  call_id: string;
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
  file_hashes: FileHash[];
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
  public_keys: CdnPublicKey[];
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
  strings: LangPackString[];
}

export interface $LangPackLanguage {
  _: "langPackLanguage";
  flags?: Number;
  official?: boolean;
  rtl?: boolean;
  beta?: boolean;
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
  can_edit?: boolean;
  self?: boolean;
  user_id: string;
  inviter_id?: string;
  promoted_by: string;
  date: number;
  admin_rights: ChatAdminRights;
  rank?: string;
}

export interface $ChannelParticipantBanned {
  _: "channelParticipantBanned";
  flags?: Number;
  left?: boolean;
  peer: Peer;
  kicked_by: string;
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
  new_value: boolean;
}

export interface $ChannelAdminLogEventActionToggleSignatures {
  _: "channelAdminLogEventActionToggleSignatures";
  new_value: boolean;
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
  id: string;
  date: number;
  user_id: string;
  action: ChannelAdminLogEventAction;
}

export interface $Channels$AdminLogResults {
  _: "channels.adminLogResults";
  events: ChannelAdminLogEvent[];
  chats: Chat[];
  users: User[];
}

export interface $ChannelAdminLogEventsFilter {
  _: "channelAdminLogEventsFilter";
  flags?: Number;
  join?: boolean;
  leave?: boolean;
  invite?: boolean;
  ban?: boolean;
  unban?: boolean;
  kick?: boolean;
  unkick?: boolean;
  promote?: boolean;
  demote?: boolean;
  info?: boolean;
  settings?: boolean;
  pinned?: boolean;
  edit?: boolean;
  delete?: boolean;
  group_call?: boolean;
  invites?: boolean;
  send?: boolean;
  forums?: boolean;
}

export interface $TopPeerCategoryPhoneCalls {
  _: "topPeerCategoryPhoneCalls";
}

export interface $PageBlockAudio {
  _: "pageBlockAudio";
  audio_id: string;
  caption: PageCaption;
}

export interface $PopularContact {
  _: "popularContact";
  client_id: string;
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
  hash: string;
  packs: StickerPack[];
  stickers: Document[];
}

export interface $UpdateFavedStickers {
  _: "updateFavedStickers";
}

export interface $UpdateChannelReadMessagesContents {
  _: "updateChannelReadMessagesContents";
  flags?: Number;
  channel_id: string;
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
  channel_id: string;
  available_min_id: number;
}

export interface $ChannelAdminLogEventActionTogglePreHistoryHidden {
  _: "channelAdminLogEventActionTogglePreHistoryHidden";
  new_value: boolean;
}

export interface $InputMediaGeoLive {
  _: "inputMediaGeoLive";
  flags?: Number;
  stopped?: boolean;
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
  user_id: string;
}

export interface $RecentMeUrlChat {
  _: "recentMeUrlChat";
  url: string;
  chat_id: string;
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
  urls: RecentMeUrl[];
  chats: Chat[];
  users: User[];
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
  random_id: string;
  message: string;
  entities?: MessageEntity[];
}

export interface $WebAuthorization {
  _: "webAuthorization";
  hash: string;
  bot_id: string;
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
  authorizations: WebAuthorization[];
  users: User[];
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
  attach_menu?: boolean;
  from_request?: boolean;
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
  hash: string;
  sets: StickerSetCovered[];
}

export interface $FileHash {
  _: "fileHash";
  offset: string;
  limit: number;
  hash: Uint8Array;
}

export interface $WebDocumentNoProxy {
  _: "webDocumentNoProxy";
  url: string;
  size: number;
  mime_type: string;
  attributes: DocumentAttribute[];
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
  id: string;
  parts: number;
  md5_checksum: string;
  file_hash: Uint8Array;
  secret: Uint8Array;
}

export interface $InputSecureFile {
  _: "inputSecureFile";
  id: string;
  access_hash: string;
}

export interface $InputSecureFileLocation {
  _: "inputSecureFileLocation";
  id: string;
  access_hash: string;
}

export interface $SecureFileEmpty {
  _: "secureFileEmpty";
}

export interface $SecureFile {
  _: "secureFile";
  id: string;
  access_hash: string;
  size: string;
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
  translation?: SecureFile[];
  files?: SecureFile[];
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
  translation?: InputSecureFile[];
  files?: InputSecureFile[];
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
  required_types: SecureRequiredType[];
  values: SecureValue[];
  errors: SecureValueError[];
  users: User[];
  privacy_policy_url?: string;
}

export interface $Account$SentEmailCode {
  _: "account.sentEmailCode";
  email_pattern: string;
  length: number;
}

export interface $MessageActionSecureValuesSentMe {
  _: "messageActionSecureValuesSentMe";
  values: SecureValue[];
  credentials: SecureCredentialsEncrypted;
}

export interface $MessageActionSecureValuesSent {
  _: "messageActionSecureValuesSent";
  types: SecureValueType[];
}

export interface $Help$DeepLinkInfoEmpty {
  _: "help.deepLinkInfoEmpty";
}

export interface $Help$DeepLinkInfo {
  _: "help.deepLinkInfo";
  flags?: Number;
  update_app?: boolean;
  message: string;
  entities?: MessageEntity[];
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
  id: string;
}

export interface $InputTakeoutFileLocation {
  _: "inputTakeoutFileLocation";
}

export interface $UpdateDialogUnreadMark {
  _: "updateDialogUnreadMark";
  flags?: Number;
  unread?: boolean;
  peer: DialogPeer;
}

export interface $Messages$DialogsNotModified {
  _: "messages.dialogsNotModified";
  count: number;
}

export interface $InputWebFileGeoPointLocation {
  _: "inputWebFileGeoPointLocation";
  geo_point: InputGeoPoint;
  access_hash: string;
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
  secure_secret_id: string;
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
  srp_id: string;
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
  native_names?: boolean;
  selfie_required?: boolean;
  translation_required?: boolean;
  type: SecureValueType;
}

export interface $SecureRequiredTypeOneOf {
  _: "secureRequiredTypeOneOf";
  types: SecureRequiredType[];
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
  peer: string;
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
  value: boolean;
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
  value: JSONValue[];
}

export interface $JsonObject {
  _: "jsonObject";
  value: JSONObjectValue[];
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
  document_id: string;
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
  header?: boolean;
  align_center?: boolean;
  align_right?: boolean;
  valign_middle?: boolean;
  valign_bottom?: boolean;
  text?: RichText;
  colspan?: number;
  rowspan?: number;
}

export interface $PageTableRow {
  _: "pageTableRow";
  cells: PageTableCell[];
}

export interface $PageBlockTable {
  _: "pageBlockTable";
  flags?: Number;
  bordered?: boolean;
  striped?: boolean;
  title: RichText;
  rows: PageTableRow[];
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
  blocks: PageBlock[];
}

export interface $PageListOrderedItemText {
  _: "pageListOrderedItemText";
  num: string;
  text: RichText;
}

export interface $PageListOrderedItemBlocks {
  _: "pageListOrderedItemBlocks";
  num: string;
  blocks: PageBlock[];
}

export interface $PageBlockOrderedList {
  _: "pageBlockOrderedList";
  items: PageListOrderedItem[];
}

export interface $PageBlockDetails {
  _: "pageBlockDetails";
  flags?: Number;
  open?: boolean;
  blocks: PageBlock[];
  title: RichText;
}

export interface $PageRelatedArticle {
  _: "pageRelatedArticle";
  flags?: Number;
  url: string;
  webpage_id: string;
  title?: string;
  description?: string;
  photo_id?: string;
  author?: string;
  published_date?: number;
}

export interface $PageBlockRelatedArticles {
  _: "pageBlockRelatedArticles";
  title: RichText;
  articles: PageRelatedArticle[];
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
  part?: boolean;
  rtl?: boolean;
  v2?: boolean;
  url: string;
  blocks: PageBlock[];
  photos: Photo[];
  documents: Document[];
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
  entities: MessageEntity[];
  author: string;
  date: number;
}

export interface $MessageActionContactSignUp {
  _: "messageActionContactSignUp";
}

export interface $UpdateMessagePoll {
  _: "updateMessagePoll";
  flags?: Number;
  poll_id: string;
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
  id: string;
  flags?: Number;
  closed?: boolean;
  public_voters?: boolean;
  multiple_choice?: boolean;
  quiz?: boolean;
  question: string;
  answers: PollAnswer[];
  close_period?: number;
  close_date?: number;
}

export interface $PollAnswerVoters {
  _: "pollAnswerVoters";
  flags?: Number;
  chosen?: boolean;
  correct?: boolean;
  option: Uint8Array;
  voters: number;
}

export interface $PollResults {
  _: "pollResults";
  flags?: Number;
  min?: boolean;
  results?: PollAnswerVoters[];
  total_voters?: number;
  recent_voters?: Peer[];
  solution?: string;
  solution_entities?: MessageEntity[];
}

export interface $InputMediaPoll {
  _: "inputMediaPoll";
  flags?: Number;
  poll: Poll;
  correct_answers?: Uint8Array[];
  solution?: string;
  solution_entities?: MessageEntity[];
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
  change_info?: boolean;
  post_messages?: boolean;
  edit_messages?: boolean;
  delete_messages?: boolean;
  ban_users?: boolean;
  invite_users?: boolean;
  pin_messages?: boolean;
  add_admins?: boolean;
  anonymous?: boolean;
  manage_call?: boolean;
  other?: boolean;
  manage_topics?: boolean;
  post_stories?: boolean;
  edit_stories?: boolean;
  delete_stories?: boolean;
}

export interface $ChatBannedRights {
  _: "chatBannedRights";
  flags?: Number;
  view_messages?: boolean;
  send_messages?: boolean;
  send_media?: boolean;
  send_stickers?: boolean;
  send_gifs?: boolean;
  send_games?: boolean;
  send_inline?: boolean;
  embed_links?: boolean;
  send_polls?: boolean;
  change_info?: boolean;
  invite_users?: boolean;
  pin_messages?: boolean;
  manage_topics?: boolean;
  send_photos?: boolean;
  send_videos?: boolean;
  send_roundvideos?: boolean;
  send_audios?: boolean;
  send_voices?: boolean;
  send_docs?: boolean;
  send_plain?: boolean;
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
  id: string;
  access_hash: string;
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
  hash: string;
  wallpapers: WallPaper[];
}

export interface $CodeSettings {
  _: "codeSettings";
  flags?: Number;
  allow_flashcall?: boolean;
  current_number?: boolean;
  allow_app_hash?: boolean;
  allow_missed_call?: boolean;
  allow_firebase?: boolean;
  logout_tokens?: Uint8Array[];
  token?: string;
  app_sandbox?: boolean;
}

export interface $WallPaperSettings {
  _: "wallPaperSettings";
  flags?: Number;
  blur?: boolean;
  motion?: boolean;
  background_color?: number;
  second_background_color?: number;
  third_background_color?: number;
  fourth_background_color?: number;
  intensity?: number;
  rotation?: number;
  emoticon?: string;
}

export interface $AutoDownloadSettings {
  _: "autoDownloadSettings";
  flags?: Number;
  disabled?: boolean;
  video_preload_large?: boolean;
  audio_preload_next?: boolean;
  phonecalls_less_data?: boolean;
  stories_preload?: boolean;
  photo_size_max: number;
  video_size_max: string;
  file_size_max: string;
  video_upload_maxbitrate: number;
  small_queue_active_operations_max: number;
  large_queue_active_operations_max: number;
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
  keywords: EmojiKeyword[];
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
  id: string;
  access_hash: string;
  file_reference: Uint8Array;
  thumb_size: string;
}

export interface $InputPhotoLegacyFileLocation {
  _: "inputPhotoLegacyFileLocation";
  id: string;
  access_hash: string;
  file_reference: Uint8Array;
  volume_id: string;
  local_id: number;
  secret: string;
}

export interface $InputPeerPhotoFileLocation {
  _: "inputPeerPhotoFileLocation";
  flags?: Number;
  big?: boolean;
  peer: InputPeer;
  photo_id: string;
}

export interface $InputStickerSetThumb {
  _: "inputStickerSetThumb";
  stickerset: InputStickerSet;
  thumb_version: number;
}

export interface $Folder {
  _: "folder";
  flags?: Number;
  autofill_new_broadcasts?: boolean;
  autofill_public_groups?: boolean;
  autofill_new_correspondents?: boolean;
  id: number;
  title: string;
  photo?: ChatPhoto;
}

export interface $DialogFolder {
  _: "dialogFolder";
  flags?: Number;
  pinned?: boolean;
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
  folder_peers: FolderPeer[];
  pts: number;
  pts_count: number;
}

export interface $InputUserFromMessage {
  _: "inputUserFromMessage";
  peer: InputPeer;
  msg_id: number;
  user_id: string;
}

export interface $InputChannelFromMessage {
  _: "inputChannelFromMessage";
  peer: InputPeer;
  msg_id: number;
  channel_id: string;
}

export interface $InputPeerUserFromMessage {
  _: "inputPeerUserFromMessage";
  peer: InputPeer;
  msg_id: number;
  user_id: string;
}

export interface $InputPeerChannelFromMessage {
  _: "inputPeerChannelFromMessage";
  peer: InputPeer;
  msg_id: number;
  channel_id: string;
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
  prev_value: string;
  new_value: string;
}

export interface $Messages$SearchCounter {
  _: "messages.searchCounter";
  flags?: Number;
  inexact?: boolean;
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
  request_write_access?: boolean;
  text: string;
  fwd_text?: string;
  url: string;
  bot: InputUser;
}

export interface $UrlAuthResultRequest {
  _: "urlAuthResultRequest";
  flags?: Number;
  request_write_access?: boolean;
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
  chats: string[];
}

export interface $InputPrivacyValueDisallowChatParticipants {
  _: "inputPrivacyValueDisallowChatParticipants";
  chats: string[];
}

export interface $PrivacyValueAllowChatParticipants {
  _: "privacyValueAllowChatParticipants";
  chats: string[];
}

export interface $PrivacyValueDisallowChatParticipants {
  _: "privacyValueDisallowChatParticipants";
  chats: string[];
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
  peers: PeerLocated[];
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
  id: string;
  access_hash: string;
}

export interface $InputThemeSlug {
  _: "inputThemeSlug";
  slug: string;
}

export interface $Theme {
  _: "theme";
  flags?: Number;
  creator?: boolean;
  default?: boolean;
  for_chat?: boolean;
  id: string;
  access_hash: string;
  slug: string;
  title: string;
  document?: Document;
  settings?: ThemeSettings[];
  emoticon?: string;
  installs_count?: number;
}

export interface $Account$ThemesNotModified {
  _: "account.themesNotModified";
}

export interface $Account$Themes {
  _: "account.themes";
  hash: string;
  themes: Theme[];
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
  sensitive_enabled?: boolean;
  sensitive_can_change?: boolean;
}

export interface $Messages$InactiveChats {
  _: "messages.inactiveChats";
  dates: number[];
  chats: Chat[];
  users: User[];
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
  id: string;
}

export interface $WallPaperNoFile {
  _: "wallPaperNoFile";
  id: string;
  flags?: Number;
  default?: boolean;
  dark?: boolean;
  settings?: WallPaperSettings;
}

export interface $InputThemeSettings {
  _: "inputThemeSettings";
  flags?: Number;
  message_colors_animated?: boolean;
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
  message_colors_animated?: boolean;
  base_theme: BaseTheme;
  accent_color: number;
  outbox_accent_color?: number;
  message_colors?: number[];
  wallpaper?: WallPaper;
}

export interface $WebPageAttributeTheme {
  _: "webPageAttributeTheme";
  flags?: Number;
  documents?: Document[];
  settings?: ThemeSettings;
}

export interface $UpdateMessagePollVote {
  _: "updateMessagePollVote";
  poll_id: string;
  peer: Peer;
  options: Uint8Array[];
  qts: number;
}

export interface $Messages$VotesList {
  _: "messages.votesList";
  flags?: Number;
  count: number;
  votes: MessagePeerVote[];
  chats: Chat[];
  users: User[];
  next_offset?: string;
}

export interface $KeyboardButtonRequestPoll {
  _: "keyboardButtonRequestPoll";
  flags?: Number;
  quiz?: boolean;
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
  open_urls: BankCardOpenUrl[];
}

export interface $PeerSelfLocated {
  _: "peerSelfLocated";
  expires: number;
}

export interface $DialogFilter {
  _: "dialogFilter";
  flags?: Number;
  contacts?: boolean;
  non_contacts?: boolean;
  groups?: boolean;
  broadcasts?: boolean;
  bots?: boolean;
  exclude_muted?: boolean;
  exclude_read?: boolean;
  exclude_archived?: boolean;
  id: number;
  title: string;
  emoticon?: string;
  pinned_peers: InputPeer[];
  include_peers: InputPeer[];
  exclude_peers: InputPeer[];
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

export interface $Stats$BroadcastStats {
  _: "stats.broadcastStats";
  period: StatsDateRangeDays;
  followers: StatsAbsValueAndPrev;
  views_per_post: StatsAbsValueAndPrev;
  shares_per_post: StatsAbsValueAndPrev;
  reactions_per_post: StatsAbsValueAndPrev;
  views_per_story: StatsAbsValueAndPrev;
  shares_per_story: StatsAbsValueAndPrev;
  reactions_per_story: StatsAbsValueAndPrev;
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
  reactions_by_emotion_graph: StatsGraph;
  story_interactions_graph: StatsGraph;
  story_reactions_by_emotion_graph: StatsGraph;
  recent_posts_interactions: PostInteractionCounters[];
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
  proxy?: boolean;
  expires: number;
  peer: Peer;
  chats: Chat[];
  users: User[];
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
  phone_call_id: string;
  data: Uint8Array;
}

export interface $ChatInvitePeek {
  _: "chatInvitePeek";
  chat: Chat;
  expires: number;
}

export interface $StatsGroupTopPoster {
  _: "statsGroupTopPoster";
  user_id: string;
  messages: number;
  avg_chars: number;
}

export interface $StatsGroupTopAdmin {
  _: "statsGroupTopAdmin";
  user_id: string;
  deleted: number;
  kicked: number;
  banned: number;
}

export interface $StatsGroupTopInviter {
  _: "statsGroupTopInviter";
  user_id: string;
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
  top_posters: StatsGroupTopPoster[];
  top_admins: StatsGroupTopAdmin[];
  top_inviters: StatsGroupTopInviter[];
  users: User[];
}

export interface $GlobalPrivacySettings {
  _: "globalPrivacySettings";
  flags?: Number;
  archive_and_mute_new_noncontact_peers?: boolean;
  keep_archived_unmuted?: boolean;
  keep_archived_folders?: boolean;
}

export interface $PhoneConnectionWebrtc {
  _: "phoneConnectionWebrtc";
  flags?: Number;
  turn?: boolean;
  stun?: boolean;
  id: string;
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
  hidden?: boolean;
  iso2: string;
  default_name: string;
  name?: string;
  country_codes: Help$CountryCode[];
}

export interface $Help$CountriesListNotModified {
  _: "help.countriesListNotModified";
}

export interface $Help$CountriesList {
  _: "help.countriesList";
  countries: Help$Country[];
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
  channel_id: string;
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
  views: MessageViews[];
  chats: Chat[];
  users: User[];
}

export interface $UpdateReadChannelDiscussionInbox {
  _: "updateReadChannelDiscussionInbox";
  flags?: Number;
  channel_id: string;
  top_msg_id: number;
  read_max_id: number;
  broadcast_id?: string;
  broadcast_post?: number;
}

export interface $UpdateReadChannelDiscussionOutbox {
  _: "updateReadChannelDiscussionOutbox";
  channel_id: string;
  top_msg_id: number;
  read_max_id: number;
}

export interface $Messages$DiscussionMessage {
  _: "messages.discussionMessage";
  flags?: Number;
  messages: Message[];
  max_id?: number;
  read_inbox_max_id?: number;
  read_outbox_max_id?: number;
  unread_count: number;
  chats: Chat[];
  users: User[];
}

export interface $MessageReplyHeader {
  _: "messageReplyHeader";
  flags?: Number;
  reply_to_scheduled?: boolean;
  forum_topic?: boolean;
  quote?: boolean;
  reply_to_msg_id?: number;
  reply_to_peer_id?: Peer;
  reply_from?: MessageFwdHeader;
  reply_media?: MessageMedia;
  reply_to_top_id?: number;
  quote_text?: string;
  quote_entities?: MessageEntity[];
  quote_offset?: number;
}

export interface $MessageReplies {
  _: "messageReplies";
  flags?: Number;
  comments?: boolean;
  replies: number;
  replies_pts: number;
  recent_repliers?: Peer[];
  channel_id?: string;
  max_id?: number;
  read_max_id?: number;
}

export interface $UpdatePeerBlocked {
  _: "updatePeerBlocked";
  flags?: Number;
  blocked?: boolean;
  blocked_my_stories_from?: boolean;
  peer_id: Peer;
}

export interface $PeerBlocked {
  _: "peerBlocked";
  peer_id: Peer;
  date: number;
}

export interface $UpdateChannelUserTyping {
  _: "updateChannelUserTyping";
  flags?: Number;
  channel_id: string;
  top_msg_id?: number;
  from_id: Peer;
  action: SendMessageAction;
}

export interface $InputMessageCallbackQuery {
  _: "inputMessageCallbackQuery";
  id: number;
  query_id: string;
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
  pinned?: boolean;
  peer: Peer;
  messages: number[];
  pts: number;
  pts_count: number;
}

export interface $UpdatePinnedChannelMessages {
  _: "updatePinnedChannelMessages";
  flags?: Number;
  pinned?: boolean;
  channel_id: string;
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
  reactions_by_emotion_graph: StatsGraph;
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
  id: string;
  access_hash: string;
  duration: number;
}

export interface $GroupCall {
  _: "groupCall";
  flags?: Number;
  join_muted?: boolean;
  can_change_join_muted?: boolean;
  join_date_asc?: boolean;
  schedule_start_subscribed?: boolean;
  can_start_video?: boolean;
  record_video_active?: boolean;
  rtmp_stream?: boolean;
  listeners_hidden?: boolean;
  id: string;
  access_hash: string;
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
  id: string;
  access_hash: string;
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
  users: string[];
}

export interface $GroupCallParticipant {
  _: "groupCallParticipant";
  flags?: Number;
  muted?: boolean;
  left?: boolean;
  can_self_unmute?: boolean;
  just_joined?: boolean;
  versioned?: boolean;
  min?: boolean;
  muted_by_you?: boolean;
  volume_by_admin?: boolean;
  self?: boolean;
  video_joined?: boolean;
  peer: Peer;
  date: number;
  active_date?: number;
  source: number;
  volume?: number;
  about?: string;
  raise_hand_rating?: string;
  video?: GroupCallParticipantVideo;
  presentation?: GroupCallParticipantVideo;
}

export interface $UpdateChat {
  _: "updateChat";
  chat_id: string;
}

export interface $UpdateGroupCallParticipants {
  _: "updateGroupCallParticipants";
  call: InputGroupCall;
  participants: GroupCallParticipant[];
  version: number;
}

export interface $UpdateGroupCall {
  _: "updateGroupCall";
  chat_id: string;
  call: GroupCall;
}

export interface $Phone$GroupCall {
  _: "phone.groupCall";
  call: GroupCall;
  participants: GroupCallParticipant[];
  participants_next_offset: string;
  chats: Chat[];
  users: User[];
}

export interface $Phone$GroupParticipants {
  _: "phone.groupParticipants";
  count: number;
  participants: GroupCallParticipant[];
  next_offset: string;
  chats: Chat[];
  users: User[];
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
  join_muted: boolean;
}

export interface $InputPaymentCredentialsGooglePay {
  _: "inputPaymentCredentialsGooglePay";
  payment_token: DataJSON;
}

export interface $Messages$HistoryImport {
  _: "messages.historyImport";
  id: string;
}

export interface $SendMessageHistoryImportAction {
  _: "sendMessageHistoryImportAction";
  progress: number;
}

export interface $Messages$HistoryImportParsed {
  _: "messages.historyImportParsed";
  flags?: Number;
  pm?: boolean;
  group?: boolean;
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
  auto_setting_from?: string;
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
  chat_id: string;
  date: number;
  actor_id: string;
  user_id: string;
  prev_participant?: ChatParticipant;
  new_participant?: ChatParticipant;
  invite?: ExportedChatInvite;
  qts: number;
}

export interface $UpdateChannelParticipant {
  _: "updateChannelParticipant";
  flags?: Number;
  via_chatlist?: boolean;
  channel_id: string;
  date: number;
  actor_id: string;
  user_id: string;
  prev_participant?: ChannelParticipant;
  new_participant?: ChannelParticipant;
  invite?: ExportedChatInvite;
  qts: number;
}

export interface $UpdateBotStopped {
  _: "updateBotStopped";
  user_id: string;
  date: number;
  stopped: boolean;
  qts: number;
}

export interface $ChatInviteImporter {
  _: "chatInviteImporter";
  flags?: Number;
  requested?: boolean;
  via_chatlist?: boolean;
  user_id: string;
  date: number;
  about?: string;
  approved_by?: string;
}

export interface $Messages$ExportedChatInvites {
  _: "messages.exportedChatInvites";
  count: number;
  invites: ExportedChatInvite[];
  users: User[];
}

export interface $Messages$ExportedChatInvite {
  _: "messages.exportedChatInvite";
  invite: ExportedChatInvite;
  users: User[];
}

export interface $Messages$ExportedChatInviteReplaced {
  _: "messages.exportedChatInviteReplaced";
  invite: ExportedChatInvite;
  new_invite: ExportedChatInvite;
  users: User[];
}

export interface $Messages$ChatInviteImporters {
  _: "messages.chatInviteImporters";
  count: number;
  importers: ChatInviteImporter[];
  users: User[];
}

export interface $ChatAdminWithInvites {
  _: "chatAdminWithInvites";
  admin_id: string;
  invites_count: number;
  revoked_invites_count: number;
}

export interface $Messages$ChatAdminsWithInvites {
  _: "messages.chatAdminsWithInvites";
  admins: ChatAdminWithInvites[];
  users: User[];
}

export interface $ChannelAdminLogEventActionParticipantJoinByInvite {
  _: "channelAdminLogEventActionParticipantJoinByInvite";
  flags?: Number;
  via_chatlist?: boolean;
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
  time_ms: string;
  scale: number;
  video_channel?: number;
  video_quality?: number;
}

export interface $Phone$JoinAsPeers {
  _: "phone.joinAsPeers";
  peers: Peer[];
  chats: Chat[];
  users: User[];
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
  shipping_address_requested?: boolean;
  test?: boolean;
  title: string;
  description: string;
  photo?: WebDocument;
  currency: string;
  total_amount: string;
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
  paused?: boolean;
  endpoint: string;
  source_groups: GroupCallParticipantVideoSourceGroup[];
  audio_source?: number;
}

export interface $UpdateGroupCallConnection {
  _: "updateGroupCallConnection";
  flags?: Number;
  presentation?: boolean;
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
  bot_id: string;
  commands: BotCommand[];
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
  recommended?: boolean;
  show_peer_photo?: boolean;
  random_id: Uint8Array;
  from_id?: Peer;
  chat_invite?: ChatInvite;
  chat_invite_hash?: string;
  channel_post?: number;
  start_param?: string;
  webpage?: SponsoredWebPage;
  app?: BotApp;
  message: string;
  entities?: MessageEntity[];
  button_text?: string;
  sponsor_info?: string;
  additional_info?: string;
}

export interface $Messages$SponsoredMessages {
  _: "messages.sponsoredMessages";
  flags?: Number;
  posts_between?: number;
  messages: SponsoredMessage[];
  chats: Chat[];
  users: User[];
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
  owner_id: string;
  id: number;
  access_hash: string;
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
  inexact?: boolean;
  count: number;
  min_date: number;
  min_msg_id: number;
  offset_id_offset?: number;
  periods: SearchResultsCalendarPeriod[];
  messages: Message[];
  chats: Chat[];
  users: User[];
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
  positions: SearchResultsPosition[];
}

export interface $MessageActionChatJoinedByRequest {
  _: "messageActionChatJoinedByRequest";
}

export interface $UpdatePendingJoinRequests {
  _: "updatePendingJoinRequests";
  peer: Peer;
  requests_pending: number;
  recent_requesters: string[];
}

export interface $UpdateBotChatInviteRequester {
  _: "updateBotChatInviteRequester";
  peer: Peer;
  date: number;
  user_id: string;
  about: string;
  invite: ExportedChatInvite;
  qts: number;
}

export interface $ChannelAdminLogEventActionParticipantJoinByRequest {
  _: "channelAdminLogEventActionParticipantJoinByRequest";
  invite: ExportedChatInvite;
  approved_by: string;
}

export interface $InputKeyboardButtonUserProfile {
  _: "inputKeyboardButtonUserProfile";
  text: string;
  user_id: InputUser;
}

export interface $KeyboardButtonUserProfile {
  _: "keyboardButtonUserProfile";
  text: string;
  user_id: string;
}

export interface $Channels$SendAsPeers {
  _: "channels.sendAsPeers";
  peers: SendAsPeer[];
  chats: Chat[];
  users: User[];
}

export interface $ChannelAdminLogEventActionToggleNoForwards {
  _: "channelAdminLogEventActionToggleNoForwards";
  new_value: boolean;
}

export interface $Messages$StickerSetNotModified {
  _: "messages.stickerSetNotModified";
}

export interface $Users$UserFull {
  _: "users.userFull";
  full_user: UserFull;
  chats: Chat[];
  users: User[];
}

export interface $Messages$PeerSettings {
  _: "messages.peerSettings";
  settings: PeerSettings;
  chats: Chat[];
  users: User[];
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
  min?: boolean;
  can_see_list?: boolean;
  results: ReactionCount[];
  recent_reactions?: MessagePeerReaction[];
}

export interface $Messages$MessageReactionsList {
  _: "messages.messageReactionsList";
  flags?: Number;
  count: number;
  reactions: MessagePeerReaction[];
  chats: Chat[];
  users: User[];
  next_offset?: string;
}

export interface $AvailableReaction {
  _: "availableReaction";
  flags?: Number;
  inactive?: boolean;
  premium?: boolean;
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
  reactions: AvailableReaction[];
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
  big?: boolean;
  unread?: boolean;
  my?: boolean;
  peer_id: Peer;
  date: number;
  reaction: Reaction;
}

export interface $GroupCallStreamChannel {
  _: "groupCallStreamChannel";
  channel: number;
  scale: number;
  last_timestamp_ms: string;
}

export interface $Phone$GroupCallStreamChannels {
  _: "phone.groupCallStreamChannels";
  channels: GroupCallStreamChannel[];
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
  colors?: AttachMenuBotIconColor[];
}

export interface $AttachMenuBot {
  _: "attachMenuBot";
  flags?: Number;
  inactive?: boolean;
  has_settings?: boolean;
  request_write_access?: boolean;
  show_in_attach_menu?: boolean;
  show_in_side_menu?: boolean;
  side_menu_disclaimer_needed?: boolean;
  bot_id: string;
  short_name: string;
  peer_types?: AttachMenuPeerType[];
  icons: AttachMenuBotIcon[];
}

export interface $AttachMenuBotsNotModified {
  _: "attachMenuBotsNotModified";
}

export interface $AttachMenuBots {
  _: "attachMenuBots";
  hash: string;
  bots: AttachMenuBot[];
  users: User[];
}

export interface $AttachMenuBotsBot {
  _: "attachMenuBotsBot";
  bot: AttachMenuBot;
  users: User[];
}

export interface $UpdateAttachMenuBots {
  _: "updateAttachMenuBots";
}

export interface $WebViewResultUrl {
  _: "webViewResultUrl";
  query_id: string;
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
  query_id: string;
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
  bot_id: string;
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
  hash: string;
  ringtones: Document[];
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
  id: string;
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
  pending?: boolean;
  peer: Peer;
  msg_id: number;
  transcription_id: string;
  text: string;
}

export interface $Messages$TranscribedAudio {
  _: "messages.transcribedAudio";
  flags?: Number;
  pending?: boolean;
  transcription_id: string;
  text: string;
  trial_remains_num?: number;
  trial_remains_until_date?: number;
}

export interface $DialogFilterDefault {
  _: "dialogFilterDefault";
}

export interface $Help$PremiumPromo {
  _: "help.premiumPromo";
  status_text: string;
  status_entities: MessageEntity[];
  video_sections: string[];
  videos: Document[];
  period_options: PremiumSubscriptionOption[];
  users: User[];
}

export interface $MessageEntityCustomEmoji {
  _: "messageEntityCustomEmoji";
  offset: number;
  length: number;
  document_id: string;
}

export interface $DocumentAttributeCustomEmoji {
  _: "documentAttributeCustomEmoji";
  flags?: Number;
  free?: boolean;
  text_color?: boolean;
  alt: string;
  stickerset: InputStickerSet;
}

export interface $StickerSetFullCovered {
  _: "stickerSetFullCovered";
  set: StickerSet;
  packs: StickerPack[];
  keywords: StickerKeyword[];
  documents: Document[];
}

export interface $InputStorePaymentPremiumSubscription {
  _: "inputStorePaymentPremiumSubscription";
  flags?: Number;
  restore?: boolean;
  upgrade?: boolean;
}

export interface $InputStorePaymentGiftPremium {
  _: "inputStorePaymentGiftPremium";
  user_id: InputUser;
  currency: string;
  amount: string;
}

export interface $MessageActionGiftPremium {
  _: "messageActionGiftPremium";
  flags?: Number;
  currency: string;
  amount: string;
  months: number;
  crypto_currency?: string;
  crypto_amount?: string;
}

export interface $PremiumGiftOption {
  _: "premiumGiftOption";
  flags?: Number;
  months: number;
  currency: string;
  amount: string;
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
  small?: boolean;
  document?: InputDocument;
  title?: string;
  performer?: string;
}

export interface $EmojiStatusEmpty {
  _: "emojiStatusEmpty";
}

export interface $EmojiStatus {
  _: "emojiStatus";
  document_id: string;
}

export interface $EmojiStatusUntil {
  _: "emojiStatusUntil";
  document_id: string;
  until: number;
}

export interface $UpdateUserEmojiStatus {
  _: "updateUserEmojiStatus";
  user_id: string;
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
  hash: string;
  statuses: EmojiStatus[];
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
  document_id: string;
}

export interface $ChatReactionsNone {
  _: "chatReactionsNone";
}

export interface $ChatReactionsAll {
  _: "chatReactionsAll";
  flags?: Number;
  allow_custom?: boolean;
}

export interface $ChatReactionsSome {
  _: "chatReactionsSome";
  reactions: Reaction[];
}

export interface $Messages$ReactionsNotModified {
  _: "messages.reactionsNotModified";
}

export interface $Messages$Reactions {
  _: "messages.reactions";
  hash: string;
  reactions: Reaction[];
}

export interface $UpdateRecentReactions {
  _: "updateRecentReactions";
}

export interface $UpdateMoveStickerSetToTop {
  _: "updateMoveStickerSetToTop";
  flags?: Number;
  masks?: boolean;
  emojis?: boolean;
  stickerset: string;
}

export interface $Auth$SentCodeTypeEmailCode {
  _: "auth.sentCodeTypeEmailCode";
  flags?: Number;
  apple_signin_allowed?: boolean;
  google_signin_allowed?: boolean;
  email_pattern: string;
  length: number;
  reset_available_period?: number;
  reset_pending_date?: number;
}

export interface $Auth$SentCodeTypeSetUpEmailRequired {
  _: "auth.sentCodeTypeSetUpEmailRequired";
  flags?: Number;
  apple_signin_allowed?: boolean;
  google_signin_allowed?: boolean;
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
  current?: boolean;
  can_purchase_upgrade?: boolean;
  transaction?: string;
  months: number;
  currency: string;
  amount: string;
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
  premium_required?: boolean;
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
  document_id: string;
  keyword: string[];
}

export interface $Username {
  _: "username";
  flags?: Number;
  editable?: boolean;
  active?: boolean;
  username: string;
}

export interface $ChannelAdminLogEventActionChangeUsernames {
  _: "channelAdminLogEventActionChangeUsernames";
  prev_value: string[];
  new_value: string[];
}

export interface $ChannelAdminLogEventActionToggleForum {
  _: "channelAdminLogEventActionToggleForum";
  new_value: boolean;
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
  my?: boolean;
  closed?: boolean;
  pinned?: boolean;
  short?: boolean;
  hidden?: boolean;
  id: number;
  date: number;
  title: string;
  icon_color: number;
  icon_emoji_id?: string;
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
  order_by_create_date?: boolean;
  count: number;
  topics: ForumTopic[];
  messages: Message[];
  chats: Chat[];
  users: User[];
  pts: number;
}

export interface $MessageActionTopicCreate {
  _: "messageActionTopicCreate";
  flags?: Number;
  title: string;
  icon_color: number;
  icon_emoji_id?: string;
}

export interface $MessageActionTopicEdit {
  _: "messageActionTopicEdit";
  flags?: Number;
  title?: string;
  icon_emoji_id?: string;
  closed?: boolean;
  hidden?: boolean;
}

export interface $UpdateChannelPinnedTopic {
  _: "updateChannelPinnedTopic";
  flags?: Number;
  pinned?: boolean;
  channel_id: string;
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
  channel_id: string;
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
  new_value: boolean;
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
  user_id: string;
}

export interface $Auth$SentCodeSuccess {
  _: "auth.sentCodeSuccess";
  authorization: Auth$Authorization;
}

export interface $MessageActionRequestedPeer {
  _: "messageActionRequestedPeer";
  button_id: number;
  peers: Peer[];
}

export interface $RequestPeerTypeUser {
  _: "requestPeerTypeUser";
  flags?: Number;
  bot?: boolean;
  premium?: boolean;
}

export interface $RequestPeerTypeChat {
  _: "requestPeerTypeChat";
  flags?: Number;
  creator?: boolean;
  bot_participant?: boolean;
  has_username?: boolean;
  forum?: boolean;
  user_admin_rights?: ChatAdminRights;
  bot_admin_rights?: ChatAdminRights;
}

export interface $RequestPeerTypeBroadcast {
  _: "requestPeerTypeBroadcast";
  flags?: Number;
  creator?: boolean;
  has_username?: boolean;
  user_admin_rights?: ChatAdminRights;
  bot_admin_rights?: ChatAdminRights;
}

export interface $KeyboardButtonRequestPeer {
  _: "keyboardButtonRequestPeer";
  text: string;
  button_id: number;
  peer_type: RequestPeerType;
  max_quantity: number;
}

export interface $EmojiListNotModified {
  _: "emojiListNotModified";
}

export interface $EmojiList {
  _: "emojiList";
  hash: string;
  document_id: string[];
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
  icon_emoji_id: string;
  emoticons: string[];
}

export interface $Messages$EmojiGroupsNotModified {
  _: "messages.emojiGroupsNotModified";
}

export interface $Messages$EmojiGroups {
  _: "messages.emojiGroups";
  hash: number;
  groups: EmojiGroup[];
}

export interface $VideoSizeEmojiMarkup {
  _: "videoSizeEmojiMarkup";
  emoji_id: string;
  background_colors: number[];
}

export interface $VideoSizeStickerMarkup {
  _: "videoSizeStickerMarkup";
  stickerset: InputStickerSet;
  sticker_id: string;
  background_colors: number[];
}

export interface $TextWithEntities {
  _: "textWithEntities";
  text: string;
  entities: MessageEntity[];
}

export interface $Messages$TranslateResult {
  _: "messages.translateResult";
  result: TextWithEntities[];
}

export interface $AutoSaveSettings {
  _: "autoSaveSettings";
  flags?: Number;
  photos?: boolean;
  videos?: boolean;
  video_max_size?: string;
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
  exceptions: AutoSaveException[];
  chats: Chat[];
  users: User[];
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
  id: string;
  access_hash: string;
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
  id: string;
  access_hash: string;
  short_name: string;
  title: string;
  description: string;
  photo: Photo;
  document?: Document;
  hash: string;
}

export interface $Messages$BotApp {
  _: "messages.botApp";
  flags?: Number;
  inactive?: boolean;
  request_write_access?: boolean;
  has_settings?: boolean;
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
  user_id: string;
  date: number;
}

export interface $UpdateGroupInvitePrivacyForbidden {
  _: "updateGroupInvitePrivacyForbidden";
  user_id: string;
}

export interface $DialogFilterChatlist {
  _: "dialogFilterChatlist";
  flags?: Number;
  has_my_invites?: boolean;
  id: number;
  title: string;
  emoticon?: string;
  pinned_peers: InputPeer[];
  include_peers: InputPeer[];
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
  peers: Peer[];
}

export interface $Chatlists$ExportedChatlistInvite {
  _: "chatlists.exportedChatlistInvite";
  filter: DialogFilter;
  invite: ExportedChatlistInvite;
}

export interface $Chatlists$ExportedInvites {
  _: "chatlists.exportedInvites";
  invites: ExportedChatlistInvite[];
  chats: Chat[];
  users: User[];
}

export interface $Chatlists$ChatlistInviteAlready {
  _: "chatlists.chatlistInviteAlready";
  filter_id: number;
  missing_peers: Peer[];
  already_peers: Peer[];
  chats: Chat[];
  users: User[];
}

export interface $Chatlists$ChatlistInvite {
  _: "chatlists.chatlistInvite";
  flags?: Number;
  title: string;
  emoticon?: string;
  peers: Peer[];
  chats: Chat[];
  users: User[];
}

export interface $Chatlists$ChatlistUpdates {
  _: "chatlists.chatlistUpdates";
  missing_peers: Peer[];
  chats: Chat[];
  users: User[];
}

export interface $MessageActionSetChatWallPaper {
  _: "messageActionSetChatWallPaper";
  flags?: Number;
  same?: boolean;
  for_both?: boolean;
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

export interface $MessagePeerVote {
  _: "messagePeerVote";
  peer: Peer;
  option: Uint8Array;
  date: number;
}

export interface $MessagePeerVoteInputOption {
  _: "messagePeerVoteInputOption";
  peer: Peer;
  date: number;
}

export interface $MessagePeerVoteMultiple {
  _: "messagePeerVoteMultiple";
  peer: Peer;
  options: Uint8Array[];
  date: number;
}

export interface $InputPrivacyKeyAbout {
  _: "inputPrivacyKeyAbout";
}

export interface $PrivacyKeyAbout {
  _: "privacyKeyAbout";
}

export interface $SponsoredWebPage {
  _: "sponsoredWebPage";
  flags?: Number;
  url: string;
  site_name: string;
  photo?: Photo;
}

export interface $StoryViews {
  _: "storyViews";
  flags?: Number;
  has_viewers?: boolean;
  views_count: number;
  forwards_count?: number;
  reactions?: ReactionCount[];
  reactions_count?: number;
  recent_viewers?: string[];
}

export interface $StoryItemDeleted {
  _: "storyItemDeleted";
  id: number;
}

export interface $StoryItemSkipped {
  _: "storyItemSkipped";
  flags?: Number;
  close_friends?: boolean;
  id: number;
  date: number;
  expire_date: number;
}

export interface $StoryItem {
  _: "storyItem";
  flags?: Number;
  pinned?: boolean;
  public?: boolean;
  close_friends?: boolean;
  min?: boolean;
  noforwards?: boolean;
  edited?: boolean;
  contacts?: boolean;
  selected_contacts?: boolean;
  out?: boolean;
  id: number;
  date: number;
  fwd_from?: StoryFwdHeader;
  expire_date: number;
  caption?: string;
  entities?: MessageEntity[];
  media: MessageMedia;
  media_areas?: MediaArea[];
  privacy?: PrivacyRule[];
  views?: StoryViews;
  sent_reaction?: Reaction;
}

export interface $UpdateStory {
  _: "updateStory";
  peer: Peer;
  story: StoryItem;
}

export interface $UpdateReadStories {
  _: "updateReadStories";
  peer: Peer;
  max_id: number;
}

export interface $Stories$AllStoriesNotModified {
  _: "stories.allStoriesNotModified";
  flags?: Number;
  state: string;
  stealth_mode: StoriesStealthMode;
}

export interface $Stories$AllStories {
  _: "stories.allStories";
  flags?: Number;
  has_more?: boolean;
  count: number;
  state: string;
  peer_stories: PeerStories[];
  chats: Chat[];
  users: User[];
  stealth_mode: StoriesStealthMode;
}

export interface $Stories$Stories {
  _: "stories.stories";
  count: number;
  stories: StoryItem[];
  chats: Chat[];
  users: User[];
}

export interface $InputPrivacyValueAllowCloseFriends {
  _: "inputPrivacyValueAllowCloseFriends";
}

export interface $PrivacyValueAllowCloseFriends {
  _: "privacyValueAllowCloseFriends";
}

export interface $StoryView {
  _: "storyView";
  flags?: Number;
  blocked?: boolean;
  blocked_my_stories_from?: boolean;
  user_id: string;
  date: number;
  reaction?: Reaction;
}

export interface $Stories$StoryViewsList {
  _: "stories.storyViewsList";
  flags?: Number;
  count: number;
  views_count: number;
  forwards_count: number;
  reactions_count: number;
  views: StoryView[];
  chats: Chat[];
  users: User[];
  next_offset?: string;
}

export interface $Stories$StoryViews {
  _: "stories.storyViews";
  views: StoryViews[];
  users: User[];
}

export interface $InputReplyToMessage {
  _: "inputReplyToMessage";
  flags?: Number;
  reply_to_msg_id: number;
  top_msg_id?: number;
  reply_to_peer_id?: InputPeer;
  quote_text?: string;
  quote_entities?: MessageEntity[];
  quote_offset?: number;
}

export interface $InputReplyToStory {
  _: "inputReplyToStory";
  user_id: InputUser;
  story_id: number;
}

export interface $MessageReplyStoryHeader {
  _: "messageReplyStoryHeader";
  user_id: string;
  story_id: number;
}

export interface $UpdateStoryID {
  _: "updateStoryID";
  id: number;
  random_id: string;
}

export interface $ExportedStoryLink {
  _: "exportedStoryLink";
  link: string;
}

export interface $InputMediaStory {
  _: "inputMediaStory";
  peer: InputPeer;
  id: number;
}

export interface $MessageMediaStory {
  _: "messageMediaStory";
  flags?: Number;
  via_mention?: boolean;
  peer: Peer;
  id: number;
  story?: StoryItem;
}

export interface $WebPageAttributeStory {
  _: "webPageAttributeStory";
  flags?: Number;
  peer: Peer;
  id: number;
  story?: StoryItem;
}

export interface $StoriesStealthMode {
  _: "storiesStealthMode";
  flags?: Number;
  active_until_date?: number;
  cooldown_until_date?: number;
}

export interface $UpdateStoriesStealthMode {
  _: "updateStoriesStealthMode";
  stealth_mode: StoriesStealthMode;
}

export interface $MediaAreaCoordinates {
  _: "mediaAreaCoordinates";
  x: number;
  y: number;
  w: number;
  h: number;
  rotation: number;
}

export interface $MediaAreaVenue {
  _: "mediaAreaVenue";
  coordinates: MediaAreaCoordinates;
  geo: GeoPoint;
  title: string;
  address: string;
  provider: string;
  venue_id: string;
  venue_type: string;
}

export interface $InputMediaAreaVenue {
  _: "inputMediaAreaVenue";
  coordinates: MediaAreaCoordinates;
  query_id: string;
  result_id: string;
}

export interface $MediaAreaGeoPoint {
  _: "mediaAreaGeoPoint";
  coordinates: MediaAreaCoordinates;
  geo: GeoPoint;
}

export interface $UpdateSentStoryReaction {
  _: "updateSentStoryReaction";
  peer: Peer;
  story_id: number;
  reaction: Reaction;
}

export interface $MediaAreaSuggestedReaction {
  _: "mediaAreaSuggestedReaction";
  flags?: Number;
  dark?: boolean;
  flipped?: boolean;
  coordinates: MediaAreaCoordinates;
  reaction: Reaction;
}

export interface $PeerStories {
  _: "peerStories";
  flags?: Number;
  peer: Peer;
  max_read_id?: number;
  stories: StoryItem[];
}

export interface $Stories$PeerStories {
  _: "stories.peerStories";
  stories: PeerStories;
  chats: Chat[];
  users: User[];
}

export interface $Messages$WebPage {
  _: "messages.webPage";
  webpage: WebPage;
  chats: Chat[];
  users: User[];
}

export interface $InputStorePaymentPremiumGiftCode {
  _: "inputStorePaymentPremiumGiftCode";
  flags?: Number;
  users: InputUser[];
  boost_peer?: InputPeer;
  currency: string;
  amount: string;
}

export interface $InputStorePaymentPremiumGiveaway {
  _: "inputStorePaymentPremiumGiveaway";
  flags?: Number;
  only_new_subscribers?: boolean;
  winners_are_visible?: boolean;
  boost_peer: InputPeer;
  additional_peers?: InputPeer[];
  countries_iso2?: string[];
  prize_description?: string;
  random_id: string;
  until_date: number;
  currency: string;
  amount: string;
}

export interface $InputInvoicePremiumGiftCode {
  _: "inputInvoicePremiumGiftCode";
  purpose: InputStorePaymentPurpose;
  option: PremiumGiftCodeOption;
}

export interface $PremiumGiftCodeOption {
  _: "premiumGiftCodeOption";
  flags?: Number;
  users: number;
  months: number;
  store_product?: string;
  store_quantity?: number;
  currency: string;
  amount: string;
}

export interface $Payments$CheckedGiftCode {
  _: "payments.checkedGiftCode";
  flags?: Number;
  via_giveaway?: boolean;
  from_id?: Peer;
  giveaway_msg_id?: number;
  to_id?: string;
  date: number;
  months: number;
  used_date?: number;
  chats: Chat[];
  users: User[];
}

export interface $MessageMediaGiveaway {
  _: "messageMediaGiveaway";
  flags?: Number;
  only_new_subscribers?: boolean;
  winners_are_visible?: boolean;
  channels: string[];
  countries_iso2?: string[];
  prize_description?: string;
  quantity: number;
  months: number;
  until_date: number;
}

export interface $MessageActionGiftCode {
  _: "messageActionGiftCode";
  flags?: Number;
  via_giveaway?: boolean;
  unclaimed?: boolean;
  boost_peer?: Peer;
  months: number;
  slug: string;
  currency?: string;
  amount?: string;
  crypto_currency?: string;
  crypto_amount?: string;
}

export interface $MessageActionGiveawayLaunch {
  _: "messageActionGiveawayLaunch";
}

export interface $Payments$GiveawayInfo {
  _: "payments.giveawayInfo";
  flags?: Number;
  participating?: boolean;
  preparing_results?: boolean;
  start_date: number;
  joined_too_early_date?: number;
  admin_disallowed_chat_id?: string;
  disallowed_country?: string;
}

export interface $Payments$GiveawayInfoResults {
  _: "payments.giveawayInfoResults";
  flags?: Number;
  winner?: boolean;
  refunded?: boolean;
  start_date: number;
  gift_code_slug?: string;
  finish_date: number;
  winners_count: number;
  activated_count: number;
}

export interface $MessageEntityBlockquote {
  _: "messageEntityBlockquote";
  offset: number;
  length: number;
}

export interface $PrepaidGiveaway {
  _: "prepaidGiveaway";
  id: string;
  months: number;
  quantity: number;
  date: number;
}

export interface $InputMediaWebPage {
  _: "inputMediaWebPage";
  flags?: Number;
  force_large_media?: boolean;
  force_small_media?: boolean;
  optional?: boolean;
  url: string;
}

export interface $InputBotInlineMessageMediaWebPage {
  _: "inputBotInlineMessageMediaWebPage";
  flags?: Number;
  invert_media?: boolean;
  force_large_media?: boolean;
  force_small_media?: boolean;
  optional?: boolean;
  message: string;
  entities?: MessageEntity[];
  url: string;
  reply_markup?: ReplyMarkup;
}

export interface $BotInlineMessageMediaWebPage {
  _: "botInlineMessageMediaWebPage";
  flags?: Number;
  invert_media?: boolean;
  force_large_media?: boolean;
  force_small_media?: boolean;
  manual?: boolean;
  safe?: boolean;
  message: string;
  entities?: MessageEntity[];
  url: string;
  reply_markup?: ReplyMarkup;
}

export interface $Boost {
  _: "boost";
  flags?: Number;
  gift?: boolean;
  giveaway?: boolean;
  unclaimed?: boolean;
  id: string;
  user_id?: string;
  giveaway_msg_id?: number;
  date: number;
  expires: number;
  used_gift_slug?: string;
  multiplier?: number;
}

export interface $Premium$BoostsList {
  _: "premium.boostsList";
  flags?: Number;
  count: number;
  boosts: Boost[];
  next_offset?: string;
  users: User[];
}

export interface $MyBoost {
  _: "myBoost";
  flags?: Number;
  slot: number;
  peer?: Peer;
  date: number;
  expires: number;
  cooldown_until_date?: number;
}

export interface $Premium$MyBoosts {
  _: "premium.myBoosts";
  my_boosts: MyBoost[];
  chats: Chat[];
  users: User[];
}

export interface $Premium$BoostsStatus {
  _: "premium.boostsStatus";
  flags?: Number;
  my_boost?: boolean;
  level: number;
  current_level_boosts: number;
  boosts: number;
  gift_boosts?: number;
  next_level_boosts?: number;
  premium_audience?: StatsPercentValue;
  boost_url: string;
  prepaid_giveaways?: PrepaidGiveaway[];
  my_boost_slots?: number[];
}

export interface $UpdateBotChatBoost {
  _: "updateBotChatBoost";
  peer: Peer;
  boost: Boost;
  qts: number;
}

export interface $UpdateChannelViewForumAsMessages {
  _: "updateChannelViewForumAsMessages";
  channel_id: string;
  enabled: boolean;
}

export interface $MessageActionGiveawayResults {
  _: "messageActionGiveawayResults";
  winners_count: number;
  unclaimed_count: number;
}

export interface $UpdatePeerWallpaper {
  _: "updatePeerWallpaper";
  flags?: Number;
  wallpaper_overridden?: boolean;
  peer: Peer;
  wallpaper?: WallPaper;
}

export interface $StoryFwdHeader {
  _: "storyFwdHeader";
  flags?: Number;
  modified?: boolean;
  from?: Peer;
  from_name?: string;
  story_id?: number;
}

export interface $PostInteractionCountersMessage {
  _: "postInteractionCountersMessage";
  msg_id: number;
  views: number;
  forwards: number;
  reactions: number;
}

export interface $PostInteractionCountersStory {
  _: "postInteractionCountersStory";
  story_id: number;
  views: number;
  forwards: number;
  reactions: number;
}

export interface $Stats$StoryStats {
  _: "stats.storyStats";
  views_graph: StatsGraph;
  reactions_by_emotion_graph: StatsGraph;
}

export interface $PublicForwardMessage {
  _: "publicForwardMessage";
  message: Message;
}

export interface $PublicForwardStory {
  _: "publicForwardStory";
  peer: Peer;
  story: StoryItem;
}

export interface $Stats$PublicForwards {
  _: "stats.publicForwards";
  flags?: Number;
  count: number;
  forwards: PublicForward[];
  next_offset?: string;
  chats: Chat[];
  users: User[];
}

export interface $PeerColor {
  _: "peerColor";
  flags?: Number;
  color?: number;
  background_emoji_id?: string;
}

export interface $Help$PeerColorSet {
  _: "help.peerColorSet";
  colors: number[];
}

export interface $Help$PeerColorProfileSet {
  _: "help.peerColorProfileSet";
  palette_colors: number[];
  bg_colors: number[];
  story_colors: number[];
}

export interface $Help$PeerColorOption {
  _: "help.peerColorOption";
  flags?: Number;
  hidden?: boolean;
  color_id: number;
  colors?: Help$PeerColorSet;
  dark_colors?: Help$PeerColorSet;
  channel_min_level?: number;
}

export interface $Help$PeerColorsNotModified {
  _: "help.peerColorsNotModified";
}

export interface $Help$PeerColors {
  _: "help.peerColors";
  hash: number;
  colors: Help$PeerColorOption[];
}

export interface $MessageMediaGiveawayResults {
  _: "messageMediaGiveawayResults";
  flags?: Number;
  only_new_subscribers?: boolean;
  refunded?: boolean;
  channel_id: string;
  additional_peers_count?: number;
  launch_msg_id: number;
  winners_count: number;
  unclaimed_count: number;
  winners: string[];
  months: number;
  prize_description?: string;
  until_date: number;
}

export interface $StoryReaction {
  _: "storyReaction";
  peer_id: Peer;
  date: number;
  reaction: Reaction;
}

export interface $StoryReactionPublicForward {
  _: "storyReactionPublicForward";
  message: Message;
}

export interface $StoryReactionPublicRepost {
  _: "storyReactionPublicRepost";
  peer_id: Peer;
  story: StoryItem;
}

export interface $Stories$StoryReactionsList {
  _: "stories.storyReactionsList";
  flags?: Number;
  count: number;
  reactions: StoryReaction[];
  chats: Chat[];
  users: User[];
  next_offset?: string;
}

export interface $StoryViewPublicForward {
  _: "storyViewPublicForward";
  flags?: Number;
  blocked?: boolean;
  blocked_my_stories_from?: boolean;
  message: Message;
}

export interface $StoryViewPublicRepost {
  _: "storyViewPublicRepost";
  flags?: Number;
  blocked?: boolean;
  blocked_my_stories_from?: boolean;
  peer_id: Peer;
  story: StoryItem;
}

export interface $ChannelAdminLogEventActionChangePeerColor {
  _: "channelAdminLogEventActionChangePeerColor";
  prev_value: PeerColor;
  new_value: PeerColor;
}

export interface $ChannelAdminLogEventActionChangeProfilePeerColor {
  _: "channelAdminLogEventActionChangeProfilePeerColor";
  prev_value: PeerColor;
  new_value: PeerColor;
}

export interface $ChannelAdminLogEventActionChangeWallpaper {
  _: "channelAdminLogEventActionChangeWallpaper";
  prev_value: WallPaper;
  new_value: WallPaper;
}

export interface $ChannelAdminLogEventActionChangeEmojiStatus {
  _: "channelAdminLogEventActionChangeEmojiStatus";
  prev_value: EmojiStatus;
  new_value: EmojiStatus;
}

export interface $InputStickerSetEmojiChannelDefaultStatuses {
  _: "inputStickerSetEmojiChannelDefaultStatuses";
}

export interface $MediaAreaChannelPost {
  _: "mediaAreaChannelPost";
  coordinates: MediaAreaCoordinates;
  channel_id: string;
  msg_id: number;
}

export interface $InputMediaAreaChannelPost {
  _: "inputMediaAreaChannelPost";
  coordinates: MediaAreaCoordinates;
  channel: InputChannel;
  msg_id: number;
}

export interface $UpdateBotMessageReaction {
  _: "updateBotMessageReaction";
  peer: Peer;
  msg_id: number;
  date: number;
  actor: Peer;
  old_reactions: Reaction[];
  new_reactions: Reaction[];
  qts: number;
}

export interface $UpdateBotMessageReactions {
  _: "updateBotMessageReactions";
  peer: Peer;
  msg_id: number;
  date: number;
  reactions: ReactionCount[];
  qts: number;
}

export interface $SavedDialog {
  _: "savedDialog";
  flags?: Number;
  pinned?: boolean;
  peer: Peer;
  top_message: number;
}

export interface $UpdateSavedDialogPinned {
  _: "updateSavedDialogPinned";
  flags?: Number;
  pinned?: boolean;
  peer: DialogPeer;
}

export interface $UpdatePinnedSavedDialogs {
  _: "updatePinnedSavedDialogs";
  flags?: Number;
  order?: DialogPeer[];
}

export interface $Messages$SavedDialogs {
  _: "messages.savedDialogs";
  dialogs: SavedDialog[];
  messages: Message[];
  chats: Chat[];
  users: User[];
}

export interface $Messages$SavedDialogsSlice {
  _: "messages.savedDialogsSlice";
  count: number;
  dialogs: SavedDialog[];
  messages: Message[];
  chats: Chat[];
  users: User[];
}

export interface $Messages$SavedDialogsNotModified {
  _: "messages.savedDialogsNotModified";
  count: number;
}

export interface Methods {
  'invokeAfterMsg': {
    params: {
      msg_id: string;
      query: unknown;
    }
    response: unknown
  }
  'invokeAfterMsgs': {
    params: {
      msg_ids: string[];
      query: unknown;
    }
    response: unknown
  }
  'auth.sendCode': {
    params: {
      phone_number: string;
      api_id: number;
      api_hash: string;
      settings: CodeSettings;
    }
    response: Auth$SentCode
  }
  'auth.signUp': {
    params: {
      phone_number: string;
      phone_code_hash: string;
      first_name: string;
      last_name: string;
    }
    response: Auth$Authorization
  }
  'auth.signIn': {
    params: {
      flags?: Number;
      phone_number: string;
      phone_code_hash: string;
      phone_code?: string;
      email_verification?: EmailVerification;
    }
    response: Auth$Authorization
  }
  'auth.logOut': {
    params: {
    }
    response: Auth$LoggedOut
  }
  'auth.resetAuthorizations': {
    params: {
    }
    response: boolean
  }
  'auth.exportAuthorization': {
    params: {
      dc_id: number;
    }
    response: Auth$ExportedAuthorization
  }
  'auth.importAuthorization': {
    params: {
      id: string;
      bytes: Uint8Array;
    }
    response: Auth$Authorization
  }
  'auth.bindTempAuthKey': {
    params: {
      perm_auth_key_id: string;
      nonce: string;
      expires_at: number;
      encrypted_message: Uint8Array;
    }
    response: boolean
  }
  'account.registerDevice': {
    params: {
      flags?: Number;
      no_muted?: boolean;
      token_type: number;
      token: string;
      app_sandbox: boolean;
      secret: Uint8Array;
      other_uids: string[];
    }
    response: boolean
  }
  'account.unregisterDevice': {
    params: {
      token_type: number;
      token: string;
      other_uids: string[];
    }
    response: boolean
  }
  'account.updateNotifySettings': {
    params: {
      peer: InputNotifyPeer;
      settings: InputPeerNotifySettings;
    }
    response: boolean
  }
  'account.getNotifySettings': {
    params: {
      peer: InputNotifyPeer;
    }
    response: PeerNotifySettings
  }
  'account.resetNotifySettings': {
    params: {
    }
    response: boolean
  }
  'account.updateProfile': {
    params: {
      flags?: Number;
      first_name?: string;
      last_name?: string;
      about?: string;
    }
    response: User
  }
  'account.updateStatus': {
    params: {
      offline: boolean;
    }
    response: boolean
  }
  'account.getWallPapers': {
    params: {
      hash: string;
    }
    response: Account$WallPapers
  }
  'account.reportPeer': {
    params: {
      peer: InputPeer;
      reason: ReportReason;
      message: string;
    }
    response: boolean
  }
  'users.getUsers': {
    params: {
      id: InputUser[];
    }
    response: User[]
  }
  'users.getFullUser': {
    params: {
      id: InputUser;
    }
    response: Users$UserFull
  }
  'contacts.getContactIDs': {
    params: {
      hash: string;
    }
    response: Number[]
  }
  'contacts.getStatuses': {
    params: {
    }
    response: ContactStatus[]
  }
  'contacts.getContacts': {
    params: {
      hash: string;
    }
    response: Contacts$Contacts
  }
  'contacts.importContacts': {
    params: {
      contacts: InputContact[];
    }
    response: Contacts$ImportedContacts
  }
  'contacts.deleteContacts': {
    params: {
      id: InputUser[];
    }
    response: Updates
  }
  'contacts.deleteByPhones': {
    params: {
      phones: string[];
    }
    response: boolean
  }
  'contacts.block': {
    params: {
      flags?: Number;
      my_stories_from?: boolean;
      id: InputPeer;
    }
    response: boolean
  }
  'contacts.unblock': {
    params: {
      flags?: Number;
      my_stories_from?: boolean;
      id: InputPeer;
    }
    response: boolean
  }
  'contacts.getBlocked': {
    params: {
      flags?: Number;
      my_stories_from?: boolean;
      offset: number;
      limit: number;
    }
    response: Contacts$Blocked
  }
  'messages.getMessages': {
    params: {
      id: InputMessage[];
    }
    response: Messages$Messages
  }
  'messages.getDialogs': {
    params: {
      flags?: Number;
      exclude_pinned?: boolean;
      folder_id?: number;
      offset_date: number;
      offset_id: number;
      offset_peer: InputPeer;
      limit: number;
      hash: string;
    }
    response: Messages$Dialogs
  }
  'messages.getHistory': {
    params: {
      peer: InputPeer;
      offset_id: number;
      offset_date: number;
      add_offset: number;
      limit: number;
      max_id: number;
      min_id: number;
      hash: string;
    }
    response: Messages$Messages
  }
  'messages.search': {
    params: {
      flags?: Number;
      peer: InputPeer;
      q: string;
      from_id?: InputPeer;
      saved_peer_id?: InputPeer;
      top_msg_id?: number;
      filter: MessagesFilter;
      min_date: number;
      max_date: number;
      offset_id: number;
      add_offset: number;
      limit: number;
      max_id: number;
      min_id: number;
      hash: string;
    }
    response: Messages$Messages
  }
  'messages.readHistory': {
    params: {
      peer: InputPeer;
      max_id: number;
    }
    response: Messages$AffectedMessages
  }
  'messages.deleteHistory': {
    params: {
      flags?: Number;
      just_clear?: boolean;
      revoke?: boolean;
      peer: InputPeer;
      max_id: number;
      min_date?: number;
      max_date?: number;
    }
    response: Messages$AffectedHistory
  }
  'messages.deleteMessages': {
    params: {
      flags?: Number;
      revoke?: boolean;
      id: number[];
    }
    response: Messages$AffectedMessages
  }
  'messages.receivedMessages': {
    params: {
      max_id: number;
    }
    response: ReceivedNotifyMessage[]
  }
  'messages.setTyping': {
    params: {
      flags?: Number;
      peer: InputPeer;
      top_msg_id?: number;
      action: SendMessageAction;
    }
    response: boolean
  }
  'messages.sendMessage': {
    params: {
      flags?: Number;
      no_webpage?: boolean;
      silent?: boolean;
      background?: boolean;
      clear_draft?: boolean;
      noforwards?: boolean;
      update_stickersets_order?: boolean;
      invert_media?: boolean;
      peer: InputPeer;
      reply_to?: InputReplyTo;
      message: string;
      random_id: string;
      reply_markup?: ReplyMarkup;
      entities?: MessageEntity[];
      schedule_date?: number;
      send_as?: InputPeer;
    }
    response: Updates
  }
  'messages.sendMedia': {
    params: {
      flags?: Number;
      silent?: boolean;
      background?: boolean;
      clear_draft?: boolean;
      noforwards?: boolean;
      update_stickersets_order?: boolean;
      invert_media?: boolean;
      peer: InputPeer;
      reply_to?: InputReplyTo;
      media: InputMedia;
      message: string;
      random_id: string;
      reply_markup?: ReplyMarkup;
      entities?: MessageEntity[];
      schedule_date?: number;
      send_as?: InputPeer;
    }
    response: Updates
  }
  'messages.forwardMessages': {
    params: {
      flags?: Number;
      silent?: boolean;
      background?: boolean;
      with_my_score?: boolean;
      drop_author?: boolean;
      drop_media_captions?: boolean;
      noforwards?: boolean;
      from_peer: InputPeer;
      id: number[];
      random_id: string[];
      to_peer: InputPeer;
      top_msg_id?: number;
      schedule_date?: number;
      send_as?: InputPeer;
    }
    response: Updates
  }
  'messages.reportSpam': {
    params: {
      peer: InputPeer;
    }
    response: boolean
  }
  'messages.getPeerSettings': {
    params: {
      peer: InputPeer;
    }
    response: Messages$PeerSettings
  }
  'messages.report': {
    params: {
      peer: InputPeer;
      id: number[];
      reason: ReportReason;
      message: string;
    }
    response: boolean
  }
  'messages.getChats': {
    params: {
      id: string[];
    }
    response: Messages$Chats
  }
  'messages.getFullChat': {
    params: {
      chat_id: string;
    }
    response: Messages$ChatFull
  }
  'messages.editChatTitle': {
    params: {
      chat_id: string;
      title: string;
    }
    response: Updates
  }
  'messages.editChatPhoto': {
    params: {
      chat_id: string;
      photo: InputChatPhoto;
    }
    response: Updates
  }
  'messages.addChatUser': {
    params: {
      chat_id: string;
      user_id: InputUser;
      fwd_limit: number;
    }
    response: Updates
  }
  'messages.deleteChatUser': {
    params: {
      flags?: Number;
      revoke_history?: boolean;
      chat_id: string;
      user_id: InputUser;
    }
    response: Updates
  }
  'messages.createChat': {
    params: {
      flags?: Number;
      users: InputUser[];
      title: string;
      ttl_period?: number;
    }
    response: Updates
  }
  'updates.getState': {
    params: {
    }
    response: Updates$State
  }
  'updates.getDifference': {
    params: {
      flags?: Number;
      pts: number;
      pts_limit?: number;
      pts_total_limit?: number;
      date: number;
      qts: number;
      qts_limit?: number;
    }
    response: Updates$Difference
  }
  'photos.updateProfilePhoto': {
    params: {
      flags?: Number;
      fallback?: boolean;
      bot?: InputUser;
      id: InputPhoto;
    }
    response: Photos$Photo
  }
  'photos.uploadProfilePhoto': {
    params: {
      flags?: Number;
      fallback?: boolean;
      bot?: InputUser;
      file?: InputFile;
      video?: InputFile;
      video_start_ts?: number;
      video_emoji_markup?: VideoSize;
    }
    response: Photos$Photo
  }
  'photos.deletePhotos': {
    params: {
      id: InputPhoto[];
    }
    response: String[]
  }
  'upload.saveFilePart': {
    params: {
      file_id: string;
      file_part: number;
      bytes: Uint8Array;
    }
    response: boolean
  }
  'upload.getFile': {
    params: {
      flags?: Number;
      precise?: boolean;
      cdn_supported?: boolean;
      location: InputFileLocation;
      offset: string;
      limit: number;
    }
    response: Upload$File
  }
  'help.getConfig': {
    params: {
    }
    response: Config
  }
  'help.getNearestDc': {
    params: {
    }
    response: NearestDc
  }
  'help.getAppUpdate': {
    params: {
      source: string;
    }
    response: Help$AppUpdate
  }
  'help.getInviteText': {
    params: {
    }
    response: Help$InviteText
  }
  'photos.getUserPhotos': {
    params: {
      user_id: InputUser;
      offset: number;
      max_id: string;
      limit: number;
    }
    response: Photos$Photos
  }
  'messages.getDhConfig': {
    params: {
      version: number;
      random_length: number;
    }
    response: Messages$DhConfig
  }
  'messages.requestEncryption': {
    params: {
      user_id: InputUser;
      random_id: number;
      g_a: Uint8Array;
    }
    response: EncryptedChat
  }
  'messages.acceptEncryption': {
    params: {
      peer: InputEncryptedChat;
      g_b: Uint8Array;
      key_fingerprint: string;
    }
    response: EncryptedChat
  }
  'messages.discardEncryption': {
    params: {
      flags?: Number;
      delete_history?: boolean;
      chat_id: number;
    }
    response: boolean
  }
  'messages.setEncryptedTyping': {
    params: {
      peer: InputEncryptedChat;
      typing: boolean;
    }
    response: boolean
  }
  'messages.readEncryptedHistory': {
    params: {
      peer: InputEncryptedChat;
      max_date: number;
    }
    response: boolean
  }
  'messages.sendEncrypted': {
    params: {
      flags?: Number;
      silent?: boolean;
      peer: InputEncryptedChat;
      random_id: string;
      data: Uint8Array;
    }
    response: Messages$SentEncryptedMessage
  }
  'messages.sendEncryptedFile': {
    params: {
      flags?: Number;
      silent?: boolean;
      peer: InputEncryptedChat;
      random_id: string;
      data: Uint8Array;
      file: InputEncryptedFile;
    }
    response: Messages$SentEncryptedMessage
  }
  'messages.sendEncryptedService': {
    params: {
      peer: InputEncryptedChat;
      random_id: string;
      data: Uint8Array;
    }
    response: Messages$SentEncryptedMessage
  }
  'messages.receivedQueue': {
    params: {
      max_qts: number;
    }
    response: String[]
  }
  'messages.reportEncryptedSpam': {
    params: {
      peer: InputEncryptedChat;
    }
    response: boolean
  }
  'upload.saveBigFilePart': {
    params: {
      file_id: string;
      file_part: number;
      file_total_parts: number;
      bytes: Uint8Array;
    }
    response: boolean
  }
  'initConnection': {
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
  'help.getSupport': {
    params: {
    }
    response: Help$Support
  }
  'messages.readMessageContents': {
    params: {
      id: number[];
    }
    response: Messages$AffectedMessages
  }
  'account.checkUsername': {
    params: {
      username: string;
    }
    response: boolean
  }
  'account.updateUsername': {
    params: {
      username: string;
    }
    response: User
  }
  'contacts.search': {
    params: {
      q: string;
      limit: number;
    }
    response: Contacts$Found
  }
  'account.getPrivacy': {
    params: {
      key: InputPrivacyKey;
    }
    response: Account$PrivacyRules
  }
  'account.setPrivacy': {
    params: {
      key: InputPrivacyKey;
      rules: InputPrivacyRule[];
    }
    response: Account$PrivacyRules
  }
  'account.deleteAccount': {
    params: {
      flags?: Number;
      reason: string;
      password?: InputCheckPasswordSRP;
    }
    response: boolean
  }
  'account.getAccountTTL': {
    params: {
    }
    response: AccountDaysTTL
  }
  'account.setAccountTTL': {
    params: {
      ttl: AccountDaysTTL;
    }
    response: boolean
  }
  'invokeWithLayer': {
    params: {
      layer: number;
      query: unknown;
    }
    response: unknown
  }
  'contacts.resolveUsername': {
    params: {
      username: string;
    }
    response: Contacts$ResolvedPeer
  }
  'account.sendChangePhoneCode': {
    params: {
      phone_number: string;
      settings: CodeSettings;
    }
    response: Auth$SentCode
  }
  'account.changePhone': {
    params: {
      phone_number: string;
      phone_code_hash: string;
      phone_code: string;
    }
    response: User
  }
  'messages.getStickers': {
    params: {
      emoticon: string;
      hash: string;
    }
    response: Messages$Stickers
  }
  'messages.getAllStickers': {
    params: {
      hash: string;
    }
    response: Messages$AllStickers
  }
  'account.updateDeviceLocked': {
    params: {
      period: number;
    }
    response: boolean
  }
  'auth.importBotAuthorization': {
    params: {
      flags: number;
      api_id: number;
      api_hash: string;
      bot_auth_token: string;
    }
    response: Auth$Authorization
  }
  'messages.getWebPagePreview': {
    params: {
      flags?: Number;
      message: string;
      entities?: MessageEntity[];
    }
    response: MessageMedia
  }
  'account.getAuthorizations': {
    params: {
    }
    response: Account$Authorizations
  }
  'account.resetAuthorization': {
    params: {
      hash: string;
    }
    response: boolean
  }
  'account.getPassword': {
    params: {
    }
    response: Account$Password
  }
  'account.getPasswordSettings': {
    params: {
      password: InputCheckPasswordSRP;
    }
    response: Account$PasswordSettings
  }
  'account.updatePasswordSettings': {
    params: {
      password: InputCheckPasswordSRP;
      new_settings: Account$PasswordInputSettings;
    }
    response: boolean
  }
  'auth.checkPassword': {
    params: {
      password: InputCheckPasswordSRP;
    }
    response: Auth$Authorization
  }
  'auth.requestPasswordRecovery': {
    params: {
    }
    response: Auth$PasswordRecovery
  }
  'auth.recoverPassword': {
    params: {
      flags?: Number;
      code: string;
      new_settings?: Account$PasswordInputSettings;
    }
    response: Auth$Authorization
  }
  'invokeWithoutUpdates': {
    params: {
      query: unknown;
    }
    response: unknown
  }
  'messages.exportChatInvite': {
    params: {
      flags?: Number;
      legacy_revoke_permanent?: boolean;
      request_needed?: boolean;
      peer: InputPeer;
      expire_date?: number;
      usage_limit?: number;
      title?: string;
    }
    response: ExportedChatInvite
  }
  'messages.checkChatInvite': {
    params: {
      hash: string;
    }
    response: ChatInvite
  }
  'messages.importChatInvite': {
    params: {
      hash: string;
    }
    response: Updates
  }
  'messages.getStickerSet': {
    params: {
      stickerset: InputStickerSet;
      hash: number;
    }
    response: Messages$StickerSet
  }
  'messages.installStickerSet': {
    params: {
      stickerset: InputStickerSet;
      archived: boolean;
    }
    response: Messages$StickerSetInstallResult
  }
  'messages.uninstallStickerSet': {
    params: {
      stickerset: InputStickerSet;
    }
    response: boolean
  }
  'messages.startBot': {
    params: {
      bot: InputUser;
      peer: InputPeer;
      random_id: string;
      start_param: string;
    }
    response: Updates
  }
  'messages.getMessagesViews': {
    params: {
      peer: InputPeer;
      id: number[];
      increment: boolean;
    }
    response: Messages$MessageViews
  }
  'channels.readHistory': {
    params: {
      channel: InputChannel;
      max_id: number;
    }
    response: boolean
  }
  'channels.deleteMessages': {
    params: {
      channel: InputChannel;
      id: number[];
    }
    response: Messages$AffectedMessages
  }
  'channels.reportSpam': {
    params: {
      channel: InputChannel;
      participant: InputPeer;
      id: number[];
    }
    response: boolean
  }
  'channels.getMessages': {
    params: {
      channel: InputChannel;
      id: InputMessage[];
    }
    response: Messages$Messages
  }
  'channels.getParticipants': {
    params: {
      channel: InputChannel;
      filter: ChannelParticipantsFilter;
      offset: number;
      limit: number;
      hash: string;
    }
    response: Channels$ChannelParticipants
  }
  'channels.getParticipant': {
    params: {
      channel: InputChannel;
      participant: InputPeer;
    }
    response: Channels$ChannelParticipant
  }
  'channels.getChannels': {
    params: {
      id: InputChannel[];
    }
    response: Messages$Chats
  }
  'channels.getFullChannel': {
    params: {
      channel: InputChannel;
    }
    response: Messages$ChatFull
  }
  'channels.createChannel': {
    params: {
      flags?: Number;
      broadcast?: boolean;
      megagroup?: boolean;
      for_import?: boolean;
      forum?: boolean;
      title: string;
      about: string;
      geo_point?: InputGeoPoint;
      address?: string;
      ttl_period?: number;
    }
    response: Updates
  }
  'channels.editAdmin': {
    params: {
      channel: InputChannel;
      user_id: InputUser;
      admin_rights: ChatAdminRights;
      rank: string;
    }
    response: Updates
  }
  'channels.editTitle': {
    params: {
      channel: InputChannel;
      title: string;
    }
    response: Updates
  }
  'channels.editPhoto': {
    params: {
      channel: InputChannel;
      photo: InputChatPhoto;
    }
    response: Updates
  }
  'channels.checkUsername': {
    params: {
      channel: InputChannel;
      username: string;
    }
    response: boolean
  }
  'channels.updateUsername': {
    params: {
      channel: InputChannel;
      username: string;
    }
    response: boolean
  }
  'channels.joinChannel': {
    params: {
      channel: InputChannel;
    }
    response: Updates
  }
  'channels.leaveChannel': {
    params: {
      channel: InputChannel;
    }
    response: Updates
  }
  'channels.inviteToChannel': {
    params: {
      channel: InputChannel;
      users: InputUser[];
    }
    response: Updates
  }
  'channels.deleteChannel': {
    params: {
      channel: InputChannel;
    }
    response: Updates
  }
  'updates.getChannelDifference': {
    params: {
      flags?: Number;
      force?: boolean;
      channel: InputChannel;
      filter: ChannelMessagesFilter;
      pts: number;
      limit: number;
    }
    response: Updates$ChannelDifference
  }
  'messages.editChatAdmin': {
    params: {
      chat_id: string;
      user_id: InputUser;
      is_admin: boolean;
    }
    response: boolean
  }
  'messages.migrateChat': {
    params: {
      chat_id: string;
    }
    response: Updates
  }
  'messages.searchGlobal': {
    params: {
      flags?: Number;
      broadcasts_only?: boolean;
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
  'messages.reorderStickerSets': {
    params: {
      flags?: Number;
      masks?: boolean;
      emojis?: boolean;
      order: string[];
    }
    response: boolean
  }
  'messages.getDocumentByHash': {
    params: {
      sha256: Uint8Array;
      size: string;
      mime_type: string;
    }
    response: Document
  }
  'messages.getSavedGifs': {
    params: {
      hash: string;
    }
    response: Messages$SavedGifs
  }
  'messages.saveGif': {
    params: {
      id: InputDocument;
      unsave: boolean;
    }
    response: boolean
  }
  'messages.getInlineBotResults': {
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
  'messages.setInlineBotResults': {
    params: {
      flags?: Number;
      gallery?: boolean;
      private?: boolean;
      query_id: string;
      results: InputBotInlineResult[];
      cache_time: number;
      next_offset?: string;
      switch_pm?: InlineBotSwitchPM;
      switch_webview?: InlineBotWebView;
    }
    response: boolean
  }
  'messages.sendInlineBotResult': {
    params: {
      flags?: Number;
      silent?: boolean;
      background?: boolean;
      clear_draft?: boolean;
      hide_via?: boolean;
      peer: InputPeer;
      reply_to?: InputReplyTo;
      random_id: string;
      query_id: string;
      id: string;
      schedule_date?: number;
      send_as?: InputPeer;
    }
    response: Updates
  }
  'channels.exportMessageLink': {
    params: {
      flags?: Number;
      grouped?: boolean;
      thread?: boolean;
      channel: InputChannel;
      id: number;
    }
    response: ExportedMessageLink
  }
  'channels.toggleSignatures': {
    params: {
      channel: InputChannel;
      enabled: boolean;
    }
    response: Updates
  }
  'auth.resendCode': {
    params: {
      phone_number: string;
      phone_code_hash: string;
    }
    response: Auth$SentCode
  }
  'auth.cancelCode': {
    params: {
      phone_number: string;
      phone_code_hash: string;
    }
    response: boolean
  }
  'messages.getMessageEditData': {
    params: {
      peer: InputPeer;
      id: number;
    }
    response: Messages$MessageEditData
  }
  'messages.editMessage': {
    params: {
      flags?: Number;
      no_webpage?: boolean;
      invert_media?: boolean;
      peer: InputPeer;
      id: number;
      message?: string;
      media?: InputMedia;
      reply_markup?: ReplyMarkup;
      entities?: MessageEntity[];
      schedule_date?: number;
    }
    response: Updates
  }
  'messages.editInlineBotMessage': {
    params: {
      flags?: Number;
      no_webpage?: boolean;
      invert_media?: boolean;
      id: InputBotInlineMessageID;
      message?: string;
      media?: InputMedia;
      reply_markup?: ReplyMarkup;
      entities?: MessageEntity[];
    }
    response: boolean
  }
  'messages.getBotCallbackAnswer': {
    params: {
      flags?: Number;
      game?: boolean;
      peer: InputPeer;
      msg_id: number;
      data?: Uint8Array;
      password?: InputCheckPasswordSRP;
    }
    response: Messages$BotCallbackAnswer
  }
  'messages.setBotCallbackAnswer': {
    params: {
      flags?: Number;
      alert?: boolean;
      query_id: string;
      message?: string;
      url?: string;
      cache_time: number;
    }
    response: boolean
  }
  'contacts.getTopPeers': {
    params: {
      flags?: Number;
      correspondents?: boolean;
      bots_pm?: boolean;
      bots_inline?: boolean;
      phone_calls?: boolean;
      forward_users?: boolean;
      forward_chats?: boolean;
      groups?: boolean;
      channels?: boolean;
      offset: number;
      limit: number;
      hash: string;
    }
    response: Contacts$TopPeers
  }
  'contacts.resetTopPeerRating': {
    params: {
      category: TopPeerCategory;
      peer: InputPeer;
    }
    response: boolean
  }
  'messages.getPeerDialogs': {
    params: {
      peers: InputDialogPeer[];
    }
    response: Messages$PeerDialogs
  }
  'messages.saveDraft': {
    params: {
      flags?: Number;
      no_webpage?: boolean;
      invert_media?: boolean;
      reply_to?: InputReplyTo;
      peer: InputPeer;
      message: string;
      entities?: MessageEntity[];
      media?: InputMedia;
    }
    response: boolean
  }
  'messages.getAllDrafts': {
    params: {
    }
    response: Updates
  }
  'messages.getFeaturedStickers': {
    params: {
      hash: string;
    }
    response: Messages$FeaturedStickers
  }
  'messages.readFeaturedStickers': {
    params: {
      id: string[];
    }
    response: boolean
  }
  'messages.getRecentStickers': {
    params: {
      flags?: Number;
      attached?: boolean;
      hash: string;
    }
    response: Messages$RecentStickers
  }
  'messages.saveRecentSticker': {
    params: {
      flags?: Number;
      attached?: boolean;
      id: InputDocument;
      unsave: boolean;
    }
    response: boolean
  }
  'messages.clearRecentStickers': {
    params: {
      flags?: Number;
      attached?: boolean;
    }
    response: boolean
  }
  'messages.getArchivedStickers': {
    params: {
      flags?: Number;
      masks?: boolean;
      emojis?: boolean;
      offset_id: string;
      limit: number;
    }
    response: Messages$ArchivedStickers
  }
  'account.sendConfirmPhoneCode': {
    params: {
      hash: string;
      settings: CodeSettings;
    }
    response: Auth$SentCode
  }
  'account.confirmPhone': {
    params: {
      phone_code_hash: string;
      phone_code: string;
    }
    response: boolean
  }
  'channels.getAdminedPublicChannels': {
    params: {
      flags?: Number;
      by_location?: boolean;
      check_limit?: boolean;
    }
    response: Messages$Chats
  }
  'messages.getMaskStickers': {
    params: {
      hash: string;
    }
    response: Messages$AllStickers
  }
  'messages.getAttachedStickers': {
    params: {
      media: InputStickeredMedia;
    }
    response: StickerSetCovered[]
  }
  'auth.dropTempAuthKeys': {
    params: {
      except_auth_keys: string[];
    }
    response: boolean
  }
  'messages.setGameScore': {
    params: {
      flags?: Number;
      edit_message?: boolean;
      force?: boolean;
      peer: InputPeer;
      id: number;
      user_id: InputUser;
      score: number;
    }
    response: Updates
  }
  'messages.setInlineGameScore': {
    params: {
      flags?: Number;
      edit_message?: boolean;
      force?: boolean;
      id: InputBotInlineMessageID;
      user_id: InputUser;
      score: number;
    }
    response: boolean
  }
  'messages.getGameHighScores': {
    params: {
      peer: InputPeer;
      id: number;
      user_id: InputUser;
    }
    response: Messages$HighScores
  }
  'messages.getInlineGameHighScores': {
    params: {
      id: InputBotInlineMessageID;
      user_id: InputUser;
    }
    response: Messages$HighScores
  }
  'messages.getCommonChats': {
    params: {
      user_id: InputUser;
      max_id: string;
      limit: number;
    }
    response: Messages$Chats
  }
  'help.setBotUpdatesStatus': {
    params: {
      pending_updates_count: number;
      message: string;
    }
    response: boolean
  }
  'messages.getWebPage': {
    params: {
      url: string;
      hash: number;
    }
    response: Messages$WebPage
  }
  'messages.toggleDialogPin': {
    params: {
      flags?: Number;
      pinned?: boolean;
      peer: InputDialogPeer;
    }
    response: boolean
  }
  'messages.reorderPinnedDialogs': {
    params: {
      flags?: Number;
      force?: boolean;
      folder_id: number;
      order: InputDialogPeer[];
    }
    response: boolean
  }
  'messages.getPinnedDialogs': {
    params: {
      folder_id: number;
    }
    response: Messages$PeerDialogs
  }
  'bots.sendCustomRequest': {
    params: {
      custom_method: string;
      params: DataJSON;
    }
    response: DataJSON
  }
  'bots.answerWebhookJSONQuery': {
    params: {
      query_id: string;
      data: DataJSON;
    }
    response: boolean
  }
  'upload.getWebFile': {
    params: {
      location: InputWebFileLocation;
      offset: number;
      limit: number;
    }
    response: Upload$WebFile
  }
  'payments.getPaymentForm': {
    params: {
      flags?: Number;
      invoice: InputInvoice;
      theme_params?: DataJSON;
    }
    response: Payments$PaymentForm
  }
  'payments.getPaymentReceipt': {
    params: {
      peer: InputPeer;
      msg_id: number;
    }
    response: Payments$PaymentReceipt
  }
  'payments.validateRequestedInfo': {
    params: {
      flags?: Number;
      save?: boolean;
      invoice: InputInvoice;
      info: PaymentRequestedInfo;
    }
    response: Payments$ValidatedRequestedInfo
  }
  'payments.sendPaymentForm': {
    params: {
      flags?: Number;
      form_id: string;
      invoice: InputInvoice;
      requested_info_id?: string;
      shipping_option_id?: string;
      credentials: InputPaymentCredentials;
      tip_amount?: string;
    }
    response: Payments$PaymentResult
  }
  'account.getTmpPassword': {
    params: {
      password: InputCheckPasswordSRP;
      period: number;
    }
    response: Account$TmpPassword
  }
  'payments.getSavedInfo': {
    params: {
    }
    response: Payments$SavedInfo
  }
  'payments.clearSavedInfo': {
    params: {
      flags?: Number;
      credentials?: boolean;
      info?: boolean;
    }
    response: boolean
  }
  'messages.setBotShippingResults': {
    params: {
      flags?: Number;
      query_id: string;
      error?: string;
      shipping_options?: ShippingOption[];
    }
    response: boolean
  }
  'messages.setBotPrecheckoutResults': {
    params: {
      flags?: Number;
      success?: boolean;
      query_id: string;
      error?: string;
    }
    response: boolean
  }
  'stickers.createStickerSet': {
    params: {
      flags?: Number;
      masks?: boolean;
      animated?: boolean;
      videos?: boolean;
      emojis?: boolean;
      text_color?: boolean;
      user_id: InputUser;
      title: string;
      short_name: string;
      thumb?: InputDocument;
      stickers: InputStickerSetItem[];
      software?: string;
    }
    response: Messages$StickerSet
  }
  'stickers.removeStickerFromSet': {
    params: {
      sticker: InputDocument;
    }
    response: Messages$StickerSet
  }
  'stickers.changeStickerPosition': {
    params: {
      sticker: InputDocument;
      position: number;
    }
    response: Messages$StickerSet
  }
  'stickers.addStickerToSet': {
    params: {
      stickerset: InputStickerSet;
      sticker: InputStickerSetItem;
    }
    response: Messages$StickerSet
  }
  'messages.uploadMedia': {
    params: {
      peer: InputPeer;
      media: InputMedia;
    }
    response: MessageMedia
  }
  'phone.getCallConfig': {
    params: {
    }
    response: DataJSON
  }
  'phone.requestCall': {
    params: {
      flags?: Number;
      video?: boolean;
      user_id: InputUser;
      random_id: number;
      g_a_hash: Uint8Array;
      protocol: PhoneCallProtocol;
    }
    response: Phone$PhoneCall
  }
  'phone.acceptCall': {
    params: {
      peer: InputPhoneCall;
      g_b: Uint8Array;
      protocol: PhoneCallProtocol;
    }
    response: Phone$PhoneCall
  }
  'phone.confirmCall': {
    params: {
      peer: InputPhoneCall;
      g_a: Uint8Array;
      key_fingerprint: string;
      protocol: PhoneCallProtocol;
    }
    response: Phone$PhoneCall
  }
  'phone.receivedCall': {
    params: {
      peer: InputPhoneCall;
    }
    response: boolean
  }
  'phone.discardCall': {
    params: {
      flags?: Number;
      video?: boolean;
      peer: InputPhoneCall;
      duration: number;
      reason: PhoneCallDiscardReason;
      connection_id: string;
    }
    response: Updates
  }
  'phone.setCallRating': {
    params: {
      flags?: Number;
      user_initiative?: boolean;
      peer: InputPhoneCall;
      rating: number;
      comment: string;
    }
    response: Updates
  }
  'phone.saveCallDebug': {
    params: {
      peer: InputPhoneCall;
      debug: DataJSON;
    }
    response: boolean
  }
  'upload.getCdnFile': {
    params: {
      file_token: Uint8Array;
      offset: string;
      limit: number;
    }
    response: Upload$CdnFile
  }
  'upload.reuploadCdnFile': {
    params: {
      file_token: Uint8Array;
      request_token: Uint8Array;
    }
    response: FileHash[]
  }
  'help.getCdnConfig': {
    params: {
    }
    response: CdnConfig
  }
  'langpack.getLangPack': {
    params: {
      lang_pack: string;
      lang_code: string;
    }
    response: LangPackDifference
  }
  'langpack.getStrings': {
    params: {
      lang_pack: string;
      lang_code: string;
      keys: string[];
    }
    response: LangPackString[]
  }
  'langpack.getDifference': {
    params: {
      lang_pack: string;
      lang_code: string;
      from_version: number;
    }
    response: LangPackDifference
  }
  'langpack.getLanguages': {
    params: {
      lang_pack: string;
    }
    response: LangPackLanguage[]
  }
  'channels.editBanned': {
    params: {
      channel: InputChannel;
      participant: InputPeer;
      banned_rights: ChatBannedRights;
    }
    response: Updates
  }
  'channels.getAdminLog': {
    params: {
      flags?: Number;
      channel: InputChannel;
      q: string;
      events_filter?: ChannelAdminLogEventsFilter;
      admins?: InputUser[];
      max_id: string;
      min_id: string;
      limit: number;
    }
    response: Channels$AdminLogResults
  }
  'upload.getCdnFileHashes': {
    params: {
      file_token: Uint8Array;
      offset: string;
    }
    response: FileHash[]
  }
  'messages.sendScreenshotNotification': {
    params: {
      peer: InputPeer;
      reply_to: InputReplyTo;
      random_id: string;
    }
    response: Updates
  }
  'channels.setStickers': {
    params: {
      channel: InputChannel;
      stickerset: InputStickerSet;
    }
    response: boolean
  }
  'messages.getFavedStickers': {
    params: {
      hash: string;
    }
    response: Messages$FavedStickers
  }
  'messages.faveSticker': {
    params: {
      id: InputDocument;
      unfave: boolean;
    }
    response: boolean
  }
  'channels.readMessageContents': {
    params: {
      channel: InputChannel;
      id: number[];
    }
    response: boolean
  }
  'contacts.resetSaved': {
    params: {
    }
    response: boolean
  }
  'messages.getUnreadMentions': {
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
  'channels.deleteHistory': {
    params: {
      flags?: Number;
      for_everyone?: boolean;
      channel: InputChannel;
      max_id: number;
    }
    response: Updates
  }
  'help.getRecentMeUrls': {
    params: {
      referer: string;
    }
    response: Help$RecentMeUrls
  }
  'channels.togglePreHistoryHidden': {
    params: {
      channel: InputChannel;
      enabled: boolean;
    }
    response: Updates
  }
  'messages.readMentions': {
    params: {
      flags?: Number;
      peer: InputPeer;
      top_msg_id?: number;
    }
    response: Messages$AffectedHistory
  }
  'messages.getRecentLocations': {
    params: {
      peer: InputPeer;
      limit: number;
      hash: string;
    }
    response: Messages$Messages
  }
  'messages.sendMultiMedia': {
    params: {
      flags?: Number;
      silent?: boolean;
      background?: boolean;
      clear_draft?: boolean;
      noforwards?: boolean;
      update_stickersets_order?: boolean;
      invert_media?: boolean;
      peer: InputPeer;
      reply_to?: InputReplyTo;
      multi_media: InputSingleMedia[];
      schedule_date?: number;
      send_as?: InputPeer;
    }
    response: Updates
  }
  'messages.uploadEncryptedFile': {
    params: {
      peer: InputEncryptedChat;
      file: InputEncryptedFile;
    }
    response: EncryptedFile
  }
  'account.getWebAuthorizations': {
    params: {
    }
    response: Account$WebAuthorizations
  }
  'account.resetWebAuthorization': {
    params: {
      hash: string;
    }
    response: boolean
  }
  'account.resetWebAuthorizations': {
    params: {
    }
    response: boolean
  }
  'messages.searchStickerSets': {
    params: {
      flags?: Number;
      exclude_featured?: boolean;
      q: string;
      hash: string;
    }
    response: Messages$FoundStickerSets
  }
  'upload.getFileHashes': {
    params: {
      location: InputFileLocation;
      offset: string;
    }
    response: FileHash[]
  }
  'help.getTermsOfServiceUpdate': {
    params: {
    }
    response: Help$TermsOfServiceUpdate
  }
  'help.acceptTermsOfService': {
    params: {
      id: DataJSON;
    }
    response: boolean
  }
  'account.getAllSecureValues': {
    params: {
    }
    response: SecureValue[]
  }
  'account.getSecureValue': {
    params: {
      types: SecureValueType[];
    }
    response: SecureValue[]
  }
  'account.saveSecureValue': {
    params: {
      value: InputSecureValue;
      secure_secret_id: string;
    }
    response: SecureValue
  }
  'account.deleteSecureValue': {
    params: {
      types: SecureValueType[];
    }
    response: boolean
  }
  'users.setSecureValueErrors': {
    params: {
      id: InputUser;
      errors: SecureValueError[];
    }
    response: boolean
  }
  'account.getAuthorizationForm': {
    params: {
      bot_id: string;
      scope: string;
      public_key: string;
    }
    response: Account$AuthorizationForm
  }
  'account.acceptAuthorization': {
    params: {
      bot_id: string;
      scope: string;
      public_key: string;
      value_hashes: SecureValueHash[];
      credentials: SecureCredentialsEncrypted;
    }
    response: boolean
  }
  'account.sendVerifyPhoneCode': {
    params: {
      phone_number: string;
      settings: CodeSettings;
    }
    response: Auth$SentCode
  }
  'account.verifyPhone': {
    params: {
      phone_number: string;
      phone_code_hash: string;
      phone_code: string;
    }
    response: boolean
  }
  'account.sendVerifyEmailCode': {
    params: {
      purpose: EmailVerifyPurpose;
      email: string;
    }
    response: Account$SentEmailCode
  }
  'account.verifyEmail': {
    params: {
      purpose: EmailVerifyPurpose;
      verification: EmailVerification;
    }
    response: Account$EmailVerified
  }
  'help.getDeepLinkInfo': {
    params: {
      path: string;
    }
    response: Help$DeepLinkInfo
  }
  'contacts.getSaved': {
    params: {
    }
    response: SavedContact[]
  }
  'channels.getLeftChannels': {
    params: {
      offset: number;
    }
    response: Messages$Chats
  }
  'account.initTakeoutSession': {
    params: {
      flags?: Number;
      contacts?: boolean;
      message_users?: boolean;
      message_chats?: boolean;
      message_megagroups?: boolean;
      message_channels?: boolean;
      files?: boolean;
      file_max_size?: string;
    }
    response: Account$Takeout
  }
  'account.finishTakeoutSession': {
    params: {
      flags?: Number;
      success?: boolean;
    }
    response: boolean
  }
  'messages.getSplitRanges': {
    params: {
    }
    response: MessageRange[]
  }
  'invokeWithMessagesRange': {
    params: {
      range: MessageRange;
      query: unknown;
    }
    response: unknown
  }
  'invokeWithTakeout': {
    params: {
      takeout_id: string;
      query: unknown;
    }
    response: unknown
  }
  'messages.markDialogUnread': {
    params: {
      flags?: Number;
      unread?: boolean;
      peer: InputDialogPeer;
    }
    response: boolean
  }
  'messages.getDialogUnreadMarks': {
    params: {
    }
    response: DialogPeer[]
  }
  'contacts.toggleTopPeers': {
    params: {
      enabled: boolean;
    }
    response: boolean
  }
  'messages.clearAllDrafts': {
    params: {
    }
    response: boolean
  }
  'help.getAppConfig': {
    params: {
      hash: number;
    }
    response: Help$AppConfig
  }
  'help.saveAppLog': {
    params: {
      events: InputAppEvent[];
    }
    response: boolean
  }
  'help.getPassportConfig': {
    params: {
      hash: number;
    }
    response: Help$PassportConfig
  }
  'langpack.getLanguage': {
    params: {
      lang_pack: string;
      lang_code: string;
    }
    response: LangPackLanguage
  }
  'messages.updatePinnedMessage': {
    params: {
      flags?: Number;
      silent?: boolean;
      unpin?: boolean;
      pm_oneside?: boolean;
      peer: InputPeer;
      id: number;
    }
    response: Updates
  }
  'account.confirmPasswordEmail': {
    params: {
      code: string;
    }
    response: boolean
  }
  'account.resendPasswordEmail': {
    params: {
    }
    response: boolean
  }
  'account.cancelPasswordEmail': {
    params: {
    }
    response: boolean
  }
  'help.getSupportName': {
    params: {
    }
    response: Help$SupportName
  }
  'help.getUserInfo': {
    params: {
      user_id: InputUser;
    }
    response: Help$UserInfo
  }
  'help.editUserInfo': {
    params: {
      user_id: InputUser;
      message: string;
      entities: MessageEntity[];
    }
    response: Help$UserInfo
  }
  'account.getContactSignUpNotification': {
    params: {
    }
    response: boolean
  }
  'account.setContactSignUpNotification': {
    params: {
      silent: boolean;
    }
    response: boolean
  }
  'account.getNotifyExceptions': {
    params: {
      flags?: Number;
      compare_sound?: boolean;
      compare_stories?: boolean;
      peer?: InputNotifyPeer;
    }
    response: Updates
  }
  'messages.sendVote': {
    params: {
      peer: InputPeer;
      msg_id: number;
      options: Uint8Array[];
    }
    response: Updates
  }
  'messages.getPollResults': {
    params: {
      peer: InputPeer;
      msg_id: number;
    }
    response: Updates
  }
  'messages.getOnlines': {
    params: {
      peer: InputPeer;
    }
    response: ChatOnlines
  }
  'messages.editChatAbout': {
    params: {
      peer: InputPeer;
      about: string;
    }
    response: boolean
  }
  'messages.editChatDefaultBannedRights': {
    params: {
      peer: InputPeer;
      banned_rights: ChatBannedRights;
    }
    response: Updates
  }
  'account.getWallPaper': {
    params: {
      wallpaper: InputWallPaper;
    }
    response: WallPaper
  }
  'account.uploadWallPaper': {
    params: {
      flags?: Number;
      for_chat?: boolean;
      file: InputFile;
      mime_type: string;
      settings: WallPaperSettings;
    }
    response: WallPaper
  }
  'account.saveWallPaper': {
    params: {
      wallpaper: InputWallPaper;
      unsave: boolean;
      settings: WallPaperSettings;
    }
    response: boolean
  }
  'account.installWallPaper': {
    params: {
      wallpaper: InputWallPaper;
      settings: WallPaperSettings;
    }
    response: boolean
  }
  'account.resetWallPapers': {
    params: {
    }
    response: boolean
  }
  'account.getAutoDownloadSettings': {
    params: {
    }
    response: Account$AutoDownloadSettings
  }
  'account.saveAutoDownloadSettings': {
    params: {
      flags?: Number;
      low?: boolean;
      high?: boolean;
      settings: AutoDownloadSettings;
    }
    response: boolean
  }
  'messages.getEmojiKeywords': {
    params: {
      lang_code: string;
    }
    response: EmojiKeywordsDifference
  }
  'messages.getEmojiKeywordsDifference': {
    params: {
      lang_code: string;
      from_version: number;
    }
    response: EmojiKeywordsDifference
  }
  'messages.getEmojiKeywordsLanguages': {
    params: {
      lang_codes: string[];
    }
    response: EmojiLanguage[]
  }
  'messages.getEmojiURL': {
    params: {
      lang_code: string;
    }
    response: EmojiURL
  }
  'folders.editPeerFolders': {
    params: {
      folder_peers: InputFolderPeer[];
    }
    response: Updates
  }
  'messages.getSearchCounters': {
    params: {
      flags?: Number;
      peer: InputPeer;
      saved_peer_id?: InputPeer;
      top_msg_id?: number;
      filters: MessagesFilter[];
    }
    response: Messages$SearchCounter[]
  }
  'channels.getGroupsForDiscussion': {
    params: {
    }
    response: Messages$Chats
  }
  'channels.setDiscussionGroup': {
    params: {
      broadcast: InputChannel;
      group: InputChannel;
    }
    response: boolean
  }
  'messages.requestUrlAuth': {
    params: {
      flags?: Number;
      peer?: InputPeer;
      msg_id?: number;
      button_id?: number;
      url?: string;
    }
    response: UrlAuthResult
  }
  'messages.acceptUrlAuth': {
    params: {
      flags?: Number;
      write_allowed?: boolean;
      peer?: InputPeer;
      msg_id?: number;
      button_id?: number;
      url?: string;
    }
    response: UrlAuthResult
  }
  'messages.hidePeerSettingsBar': {
    params: {
      peer: InputPeer;
    }
    response: boolean
  }
  'contacts.addContact': {
    params: {
      flags?: Number;
      add_phone_privacy_exception?: boolean;
      id: InputUser;
      first_name: string;
      last_name: string;
      phone: string;
    }
    response: Updates
  }
  'contacts.acceptContact': {
    params: {
      id: InputUser;
    }
    response: Updates
  }
  'channels.editCreator': {
    params: {
      channel: InputChannel;
      user_id: InputUser;
      password: InputCheckPasswordSRP;
    }
    response: Updates
  }
  'contacts.getLocated': {
    params: {
      flags?: Number;
      background?: boolean;
      geo_point: InputGeoPoint;
      self_expires?: number;
    }
    response: Updates
  }
  'channels.editLocation': {
    params: {
      channel: InputChannel;
      geo_point: InputGeoPoint;
      address: string;
    }
    response: boolean
  }
  'channels.toggleSlowMode': {
    params: {
      channel: InputChannel;
      seconds: number;
    }
    response: Updates
  }
  'messages.getScheduledHistory': {
    params: {
      peer: InputPeer;
      hash: string;
    }
    response: Messages$Messages
  }
  'messages.getScheduledMessages': {
    params: {
      peer: InputPeer;
      id: number[];
    }
    response: Messages$Messages
  }
  'messages.sendScheduledMessages': {
    params: {
      peer: InputPeer;
      id: number[];
    }
    response: Updates
  }
  'messages.deleteScheduledMessages': {
    params: {
      peer: InputPeer;
      id: number[];
    }
    response: Updates
  }
  'account.uploadTheme': {
    params: {
      flags?: Number;
      file: InputFile;
      thumb?: InputFile;
      file_name: string;
      mime_type: string;
    }
    response: Document
  }
  'account.createTheme': {
    params: {
      flags?: Number;
      slug: string;
      title: string;
      document?: InputDocument;
      settings?: InputThemeSettings[];
    }
    response: Theme
  }
  'account.updateTheme': {
    params: {
      flags?: Number;
      format: string;
      theme: InputTheme;
      slug?: string;
      title?: string;
      document?: InputDocument;
      settings?: InputThemeSettings[];
    }
    response: Theme
  }
  'account.saveTheme': {
    params: {
      theme: InputTheme;
      unsave: boolean;
    }
    response: boolean
  }
  'account.installTheme': {
    params: {
      flags?: Number;
      dark?: boolean;
      theme?: InputTheme;
      format?: string;
      base_theme?: BaseTheme;
    }
    response: boolean
  }
  'account.getTheme': {
    params: {
      format: string;
      theme: InputTheme;
    }
    response: Theme
  }
  'account.getThemes': {
    params: {
      format: string;
      hash: string;
    }
    response: Account$Themes
  }
  'auth.exportLoginToken': {
    params: {
      api_id: number;
      api_hash: string;
      except_ids: string[];
    }
    response: Auth$LoginToken
  }
  'auth.importLoginToken': {
    params: {
      token: Uint8Array;
    }
    response: Auth$LoginToken
  }
  'auth.acceptLoginToken': {
    params: {
      token: Uint8Array;
    }
    response: Authorization
  }
  'account.setContentSettings': {
    params: {
      flags?: Number;
      sensitive_enabled?: boolean;
    }
    response: boolean
  }
  'account.getContentSettings': {
    params: {
    }
    response: Account$ContentSettings
  }
  'channels.getInactiveChannels': {
    params: {
    }
    response: Messages$InactiveChats
  }
  'account.getMultiWallPapers': {
    params: {
      wallpapers: InputWallPaper[];
    }
    response: WallPaper[]
  }
  'messages.getPollVotes': {
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
  'messages.toggleStickerSets': {
    params: {
      flags?: Number;
      uninstall?: boolean;
      archive?: boolean;
      unarchive?: boolean;
      stickersets: InputStickerSet[];
    }
    response: boolean
  }
  'payments.getBankCardData': {
    params: {
      number: string;
    }
    response: Payments$BankCardData
  }
  'messages.getDialogFilters': {
    params: {
    }
    response: DialogFilter[]
  }
  'messages.getSuggestedDialogFilters': {
    params: {
    }
    response: DialogFilterSuggested[]
  }
  'messages.updateDialogFilter': {
    params: {
      flags?: Number;
      id: number;
      filter?: DialogFilter;
    }
    response: boolean
  }
  'messages.updateDialogFiltersOrder': {
    params: {
      order: number[];
    }
    response: boolean
  }
  'stats.getBroadcastStats': {
    params: {
      flags?: Number;
      dark?: boolean;
      channel: InputChannel;
    }
    response: Stats$BroadcastStats
  }
  'stats.loadAsyncGraph': {
    params: {
      flags?: Number;
      token: string;
      x?: string;
    }
    response: StatsGraph
  }
  'stickers.setStickerSetThumb': {
    params: {
      flags?: Number;
      stickerset: InputStickerSet;
      thumb?: InputDocument;
      thumb_document_id?: string;
    }
    response: Messages$StickerSet
  }
  'bots.setBotCommands': {
    params: {
      scope: BotCommandScope;
      lang_code: string;
      commands: BotCommand[];
    }
    response: boolean
  }
  'messages.getOldFeaturedStickers': {
    params: {
      offset: number;
      limit: number;
      hash: string;
    }
    response: Messages$FeaturedStickers
  }
  'help.getPromoData': {
    params: {
    }
    response: Help$PromoData
  }
  'help.hidePromoData': {
    params: {
      peer: InputPeer;
    }
    response: boolean
  }
  'phone.sendSignalingData': {
    params: {
      peer: InputPhoneCall;
      data: Uint8Array;
    }
    response: boolean
  }
  'stats.getMegagroupStats': {
    params: {
      flags?: Number;
      dark?: boolean;
      channel: InputChannel;
    }
    response: Stats$MegagroupStats
  }
  'account.getGlobalPrivacySettings': {
    params: {
    }
    response: GlobalPrivacySettings
  }
  'account.setGlobalPrivacySettings': {
    params: {
      settings: GlobalPrivacySettings;
    }
    response: GlobalPrivacySettings
  }
  'help.dismissSuggestion': {
    params: {
      peer: InputPeer;
      suggestion: string;
    }
    response: boolean
  }
  'help.getCountriesList': {
    params: {
      lang_code: string;
      hash: number;
    }
    response: Help$CountriesList
  }
  'messages.getReplies': {
    params: {
      peer: InputPeer;
      msg_id: number;
      offset_id: number;
      offset_date: number;
      add_offset: number;
      limit: number;
      max_id: number;
      min_id: number;
      hash: string;
    }
    response: Messages$Messages
  }
  'messages.getDiscussionMessage': {
    params: {
      peer: InputPeer;
      msg_id: number;
    }
    response: Messages$DiscussionMessage
  }
  'messages.readDiscussion': {
    params: {
      peer: InputPeer;
      msg_id: number;
      read_max_id: number;
    }
    response: boolean
  }
  'contacts.blockFromReplies': {
    params: {
      flags?: Number;
      delete_message?: boolean;
      delete_history?: boolean;
      report_spam?: boolean;
      msg_id: number;
    }
    response: Updates
  }
  'stats.getMessagePublicForwards': {
    params: {
      channel: InputChannel;
      msg_id: number;
      offset: string;
      limit: number;
    }
    response: Stats$PublicForwards
  }
  'stats.getMessageStats': {
    params: {
      flags?: Number;
      dark?: boolean;
      channel: InputChannel;
      msg_id: number;
    }
    response: Stats$MessageStats
  }
  'messages.unpinAllMessages': {
    params: {
      flags?: Number;
      peer: InputPeer;
      top_msg_id?: number;
    }
    response: Messages$AffectedHistory
  }
  'phone.createGroupCall': {
    params: {
      flags?: Number;
      rtmp_stream?: boolean;
      peer: InputPeer;
      random_id: number;
      title?: string;
      schedule_date?: number;
    }
    response: Updates
  }
  'phone.joinGroupCall': {
    params: {
      flags?: Number;
      muted?: boolean;
      video_stopped?: boolean;
      call: InputGroupCall;
      join_as: InputPeer;
      invite_hash?: string;
      params: DataJSON;
    }
    response: Updates
  }
  'phone.leaveGroupCall': {
    params: {
      call: InputGroupCall;
      source: number;
    }
    response: Updates
  }
  'phone.inviteToGroupCall': {
    params: {
      call: InputGroupCall;
      users: InputUser[];
    }
    response: Updates
  }
  'phone.discardGroupCall': {
    params: {
      call: InputGroupCall;
    }
    response: Updates
  }
  'phone.toggleGroupCallSettings': {
    params: {
      flags?: Number;
      reset_invite_hash?: boolean;
      call: InputGroupCall;
      join_muted?: boolean;
    }
    response: Updates
  }
  'phone.getGroupCall': {
    params: {
      call: InputGroupCall;
      limit: number;
    }
    response: Phone$GroupCall
  }
  'phone.getGroupParticipants': {
    params: {
      call: InputGroupCall;
      ids: InputPeer[];
      sources: number[];
      offset: string;
      limit: number;
    }
    response: Phone$GroupParticipants
  }
  'phone.checkGroupCall': {
    params: {
      call: InputGroupCall;
      sources: number[];
    }
    response: Number[]
  }
  'messages.deleteChat': {
    params: {
      chat_id: string;
    }
    response: boolean
  }
  'messages.deletePhoneCallHistory': {
    params: {
      flags?: Number;
      revoke?: boolean;
    }
    response: Messages$AffectedFoundMessages
  }
  'messages.checkHistoryImport': {
    params: {
      import_head: string;
    }
    response: Messages$HistoryImportParsed
  }
  'messages.initHistoryImport': {
    params: {
      peer: InputPeer;
      file: InputFile;
      media_count: number;
    }
    response: Messages$HistoryImport
  }
  'messages.uploadImportedMedia': {
    params: {
      peer: InputPeer;
      import_id: string;
      file_name: string;
      media: InputMedia;
    }
    response: MessageMedia
  }
  'messages.startHistoryImport': {
    params: {
      peer: InputPeer;
      import_id: string;
    }
    response: boolean
  }
  'messages.getExportedChatInvites': {
    params: {
      flags?: Number;
      revoked?: boolean;
      peer: InputPeer;
      admin_id: InputUser;
      offset_date?: number;
      offset_link?: string;
      limit: number;
    }
    response: Messages$ExportedChatInvites
  }
  'messages.getExportedChatInvite': {
    params: {
      peer: InputPeer;
      link: string;
    }
    response: Messages$ExportedChatInvite
  }
  'messages.editExportedChatInvite': {
    params: {
      flags?: Number;
      revoked?: boolean;
      peer: InputPeer;
      link: string;
      expire_date?: number;
      usage_limit?: number;
      request_needed?: boolean;
      title?: string;
    }
    response: Messages$ExportedChatInvite
  }
  'messages.deleteRevokedExportedChatInvites': {
    params: {
      peer: InputPeer;
      admin_id: InputUser;
    }
    response: boolean
  }
  'messages.deleteExportedChatInvite': {
    params: {
      peer: InputPeer;
      link: string;
    }
    response: boolean
  }
  'messages.getAdminsWithInvites': {
    params: {
      peer: InputPeer;
    }
    response: Messages$ChatAdminsWithInvites
  }
  'messages.getChatInviteImporters': {
    params: {
      flags?: Number;
      requested?: boolean;
      peer: InputPeer;
      link?: string;
      q?: string;
      offset_date: number;
      offset_user: InputUser;
      limit: number;
    }
    response: Messages$ChatInviteImporters
  }
  'messages.setHistoryTTL': {
    params: {
      peer: InputPeer;
      period: number;
    }
    response: Updates
  }
  'account.reportProfilePhoto': {
    params: {
      peer: InputPeer;
      photo_id: InputPhoto;
      reason: ReportReason;
      message: string;
    }
    response: boolean
  }
  'channels.convertToGigagroup': {
    params: {
      channel: InputChannel;
    }
    response: Updates
  }
  'messages.checkHistoryImportPeer': {
    params: {
      peer: InputPeer;
    }
    response: Messages$CheckedHistoryImportPeer
  }
  'phone.toggleGroupCallRecord': {
    params: {
      flags?: Number;
      start?: boolean;
      video?: boolean;
      call: InputGroupCall;
      title?: string;
      video_portrait?: boolean;
    }
    response: Updates
  }
  'phone.editGroupCallParticipant': {
    params: {
      flags?: Number;
      call: InputGroupCall;
      participant: InputPeer;
      muted?: boolean;
      volume?: number;
      raise_hand?: boolean;
      video_stopped?: boolean;
      video_paused?: boolean;
      presentation_paused?: boolean;
    }
    response: Updates
  }
  'phone.editGroupCallTitle': {
    params: {
      call: InputGroupCall;
      title: string;
    }
    response: Updates
  }
  'phone.getGroupCallJoinAs': {
    params: {
      peer: InputPeer;
    }
    response: Phone$JoinAsPeers
  }
  'phone.exportGroupCallInvite': {
    params: {
      flags?: Number;
      can_self_unmute?: boolean;
      call: InputGroupCall;
    }
    response: Phone$ExportedGroupCallInvite
  }
  'phone.toggleGroupCallStartSubscription': {
    params: {
      call: InputGroupCall;
      subscribed: boolean;
    }
    response: Updates
  }
  'phone.startScheduledGroupCall': {
    params: {
      call: InputGroupCall;
    }
    response: Updates
  }
  'phone.saveDefaultGroupCallJoinAs': {
    params: {
      peer: InputPeer;
      join_as: InputPeer;
    }
    response: boolean
  }
  'phone.joinGroupCallPresentation': {
    params: {
      call: InputGroupCall;
      params: DataJSON;
    }
    response: Updates
  }
  'phone.leaveGroupCallPresentation': {
    params: {
      call: InputGroupCall;
    }
    response: Updates
  }
  'stickers.checkShortName': {
    params: {
      short_name: string;
    }
    response: boolean
  }
  'stickers.suggestShortName': {
    params: {
      title: string;
    }
    response: Stickers$SuggestedShortName
  }
  'bots.resetBotCommands': {
    params: {
      scope: BotCommandScope;
      lang_code: string;
    }
    response: boolean
  }
  'bots.getBotCommands': {
    params: {
      scope: BotCommandScope;
      lang_code: string;
    }
    response: BotCommand[]
  }
  'account.resetPassword': {
    params: {
    }
    response: Account$ResetPasswordResult
  }
  'account.declinePasswordReset': {
    params: {
    }
    response: boolean
  }
  'auth.checkRecoveryPassword': {
    params: {
      code: string;
    }
    response: boolean
  }
  'account.getChatThemes': {
    params: {
      hash: string;
    }
    response: Account$Themes
  }
  'messages.setChatTheme': {
    params: {
      peer: InputPeer;
      emoticon: string;
    }
    response: Updates
  }
  'channels.viewSponsoredMessage': {
    params: {
      channel: InputChannel;
      random_id: Uint8Array;
    }
    response: boolean
  }
  'channels.getSponsoredMessages': {
    params: {
      channel: InputChannel;
    }
    response: Messages$SponsoredMessages
  }
  'messages.getMessageReadParticipants': {
    params: {
      peer: InputPeer;
      msg_id: number;
    }
    response: ReadParticipantDate[]
  }
  'messages.getSearchResultsCalendar': {
    params: {
      flags?: Number;
      peer: InputPeer;
      saved_peer_id?: InputPeer;
      filter: MessagesFilter;
      offset_id: number;
      offset_date: number;
    }
    response: Messages$SearchResultsCalendar
  }
  'messages.getSearchResultsPositions': {
    params: {
      flags?: Number;
      peer: InputPeer;
      saved_peer_id?: InputPeer;
      filter: MessagesFilter;
      offset_id: number;
      limit: number;
    }
    response: Messages$SearchResultsPositions
  }
  'messages.hideChatJoinRequest': {
    params: {
      flags?: Number;
      approved?: boolean;
      peer: InputPeer;
      user_id: InputUser;
    }
    response: Updates
  }
  'messages.hideAllChatJoinRequests': {
    params: {
      flags?: Number;
      approved?: boolean;
      peer: InputPeer;
      link?: string;
    }
    response: Updates
  }
  'messages.toggleNoForwards': {
    params: {
      peer: InputPeer;
      enabled: boolean;
    }
    response: Updates
  }
  'messages.saveDefaultSendAs': {
    params: {
      peer: InputPeer;
      send_as: InputPeer;
    }
    response: boolean
  }
  'channels.getSendAs': {
    params: {
      peer: InputPeer;
    }
    response: Channels$SendAsPeers
  }
  'account.setAuthorizationTTL': {
    params: {
      authorization_ttl_days: number;
    }
    response: boolean
  }
  'account.changeAuthorizationSettings': {
    params: {
      flags?: Number;
      confirmed?: boolean;
      hash: string;
      encrypted_requests_disabled?: boolean;
      call_requests_disabled?: boolean;
    }
    response: boolean
  }
  'channels.deleteParticipantHistory': {
    params: {
      channel: InputChannel;
      participant: InputPeer;
    }
    response: Messages$AffectedHistory
  }
  'messages.sendReaction': {
    params: {
      flags?: Number;
      big?: boolean;
      add_to_recent?: boolean;
      peer: InputPeer;
      msg_id: number;
      reaction?: Reaction[];
    }
    response: Updates
  }
  'messages.getMessagesReactions': {
    params: {
      peer: InputPeer;
      id: number[];
    }
    response: Updates
  }
  'messages.getMessageReactionsList': {
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
  'messages.setChatAvailableReactions': {
    params: {
      peer: InputPeer;
      available_reactions: ChatReactions;
    }
    response: Updates
  }
  'messages.getAvailableReactions': {
    params: {
      hash: number;
    }
    response: Messages$AvailableReactions
  }
  'messages.setDefaultReaction': {
    params: {
      reaction: Reaction;
    }
    response: boolean
  }
  'messages.translateText': {
    params: {
      flags?: Number;
      peer?: InputPeer;
      id?: number[];
      text?: TextWithEntities[];
      to_lang: string;
    }
    response: Messages$TranslatedText
  }
  'messages.getUnreadReactions': {
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
  'messages.readReactions': {
    params: {
      flags?: Number;
      peer: InputPeer;
      top_msg_id?: number;
    }
    response: Messages$AffectedHistory
  }
  'contacts.resolvePhone': {
    params: {
      phone: string;
    }
    response: Contacts$ResolvedPeer
  }
  'phone.getGroupCallStreamChannels': {
    params: {
      call: InputGroupCall;
    }
    response: Phone$GroupCallStreamChannels
  }
  'phone.getGroupCallStreamRtmpUrl': {
    params: {
      peer: InputPeer;
      revoke: boolean;
    }
    response: Phone$GroupCallStreamRtmpUrl
  }
  'messages.searchSentMedia': {
    params: {
      q: string;
      filter: MessagesFilter;
      limit: number;
    }
    response: Messages$Messages
  }
  'messages.getAttachMenuBots': {
    params: {
      hash: string;
    }
    response: AttachMenuBots
  }
  'messages.getAttachMenuBot': {
    params: {
      bot: InputUser;
    }
    response: AttachMenuBotsBot
  }
  'messages.toggleBotInAttachMenu': {
    params: {
      flags?: Number;
      write_allowed?: boolean;
      bot: InputUser;
      enabled: boolean;
    }
    response: boolean
  }
  'messages.requestWebView': {
    params: {
      flags?: Number;
      from_bot_menu?: boolean;
      silent?: boolean;
      peer: InputPeer;
      bot: InputUser;
      url?: string;
      start_param?: string;
      theme_params?: DataJSON;
      platform: string;
      reply_to?: InputReplyTo;
      send_as?: InputPeer;
    }
    response: WebViewResult
  }
  'messages.prolongWebView': {
    params: {
      flags?: Number;
      silent?: boolean;
      peer: InputPeer;
      bot: InputUser;
      query_id: string;
      reply_to?: InputReplyTo;
      send_as?: InputPeer;
    }
    response: boolean
  }
  'messages.requestSimpleWebView': {
    params: {
      flags?: Number;
      from_switch_webview?: boolean;
      from_side_menu?: boolean;
      bot: InputUser;
      url?: string;
      start_param?: string;
      theme_params?: DataJSON;
      platform: string;
    }
    response: SimpleWebViewResult
  }
  'messages.sendWebViewResultMessage': {
    params: {
      bot_query_id: string;
      result: InputBotInlineResult;
    }
    response: WebViewMessageSent
  }
  'messages.sendWebViewData': {
    params: {
      bot: InputUser;
      random_id: string;
      button_text: string;
      data: string;
    }
    response: Updates
  }
  'bots.setBotMenuButton': {
    params: {
      user_id: InputUser;
      button: BotMenuButton;
    }
    response: boolean
  }
  'bots.getBotMenuButton': {
    params: {
      user_id: InputUser;
    }
    response: BotMenuButton
  }
  'account.getSavedRingtones': {
    params: {
      hash: string;
    }
    response: Account$SavedRingtones
  }
  'account.saveRingtone': {
    params: {
      id: InputDocument;
      unsave: boolean;
    }
    response: Account$SavedRingtone
  }
  'account.uploadRingtone': {
    params: {
      file: InputFile;
      file_name: string;
      mime_type: string;
    }
    response: Document
  }
  'bots.setBotBroadcastDefaultAdminRights': {
    params: {
      admin_rights: ChatAdminRights;
    }
    response: boolean
  }
  'bots.setBotGroupDefaultAdminRights': {
    params: {
      admin_rights: ChatAdminRights;
    }
    response: boolean
  }
  'phone.saveCallLog': {
    params: {
      peer: InputPhoneCall;
      file: InputFile;
    }
    response: boolean
  }
  'channels.toggleJoinToSend': {
    params: {
      channel: InputChannel;
      enabled: boolean;
    }
    response: Updates
  }
  'channels.toggleJoinRequest': {
    params: {
      channel: InputChannel;
      enabled: boolean;
    }
    response: Updates
  }
  'payments.exportInvoice': {
    params: {
      invoice_media: InputMedia;
    }
    response: Payments$ExportedInvoice
  }
  'messages.transcribeAudio': {
    params: {
      peer: InputPeer;
      msg_id: number;
    }
    response: Messages$TranscribedAudio
  }
  'messages.rateTranscribedAudio': {
    params: {
      peer: InputPeer;
      msg_id: number;
      transcription_id: string;
      good: boolean;
    }
    response: boolean
  }
  'payments.assignAppStoreTransaction': {
    params: {
      receipt: Uint8Array;
      purpose: InputStorePaymentPurpose;
    }
    response: Updates
  }
  'payments.assignPlayMarketTransaction': {
    params: {
      receipt: DataJSON;
      purpose: InputStorePaymentPurpose;
    }
    response: Updates
  }
  'payments.canPurchasePremium': {
    params: {
      purpose: InputStorePaymentPurpose;
    }
    response: boolean
  }
  'help.getPremiumPromo': {
    params: {
    }
    response: Help$PremiumPromo
  }
  'messages.getCustomEmojiDocuments': {
    params: {
      document_id: string[];
    }
    response: Document[]
  }
  'messages.getEmojiStickers': {
    params: {
      hash: string;
    }
    response: Messages$AllStickers
  }
  'messages.getFeaturedEmojiStickers': {
    params: {
      hash: string;
    }
    response: Messages$FeaturedStickers
  }
  'account.updateEmojiStatus': {
    params: {
      emoji_status: EmojiStatus;
    }
    response: boolean
  }
  'account.getDefaultEmojiStatuses': {
    params: {
      hash: string;
    }
    response: Account$EmojiStatuses
  }
  'account.getRecentEmojiStatuses': {
    params: {
      hash: string;
    }
    response: Account$EmojiStatuses
  }
  'account.clearRecentEmojiStatuses': {
    params: {
    }
    response: boolean
  }
  'messages.reportReaction': {
    params: {
      peer: InputPeer;
      id: number;
      reaction_peer: InputPeer;
    }
    response: boolean
  }
  'messages.getTopReactions': {
    params: {
      limit: number;
      hash: string;
    }
    response: Messages$Reactions
  }
  'messages.getRecentReactions': {
    params: {
      limit: number;
      hash: string;
    }
    response: Messages$Reactions
  }
  'messages.clearRecentReactions': {
    params: {
    }
    response: boolean
  }
  'messages.getExtendedMedia': {
    params: {
      peer: InputPeer;
      id: number[];
    }
    response: Updates
  }
  'auth.importWebTokenAuthorization': {
    params: {
      api_id: number;
      api_hash: string;
      web_auth_token: string;
    }
    response: Auth$Authorization
  }
  'account.reorderUsernames': {
    params: {
      order: string[];
    }
    response: boolean
  }
  'account.toggleUsername': {
    params: {
      username: string;
      active: boolean;
    }
    response: boolean
  }
  'channels.reorderUsernames': {
    params: {
      channel: InputChannel;
      order: string[];
    }
    response: boolean
  }
  'channels.toggleUsername': {
    params: {
      channel: InputChannel;
      username: string;
      active: boolean;
    }
    response: boolean
  }
  'channels.deactivateAllUsernames': {
    params: {
      channel: InputChannel;
    }
    response: boolean
  }
  'channels.toggleForum': {
    params: {
      channel: InputChannel;
      enabled: boolean;
    }
    response: Updates
  }
  'channels.createForumTopic': {
    params: {
      flags?: Number;
      channel: InputChannel;
      title: string;
      icon_color?: number;
      icon_emoji_id?: string;
      random_id: string;
      send_as?: InputPeer;
    }
    response: Updates
  }
  'channels.getForumTopics': {
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
  'channels.getForumTopicsByID': {
    params: {
      channel: InputChannel;
      topics: number[];
    }
    response: Messages$ForumTopics
  }
  'channels.editForumTopic': {
    params: {
      flags?: Number;
      channel: InputChannel;
      topic_id: number;
      title?: string;
      icon_emoji_id?: string;
      closed?: boolean;
      hidden?: boolean;
    }
    response: Updates
  }
  'channels.updatePinnedForumTopic': {
    params: {
      channel: InputChannel;
      topic_id: number;
      pinned: boolean;
    }
    response: Updates
  }
  'channels.deleteTopicHistory': {
    params: {
      channel: InputChannel;
      top_msg_id: number;
    }
    response: Messages$AffectedHistory
  }
  'channels.reorderPinnedForumTopics': {
    params: {
      flags?: Number;
      force?: boolean;
      channel: InputChannel;
      order: number[];
    }
    response: Updates
  }
  'channels.toggleAntiSpam': {
    params: {
      channel: InputChannel;
      enabled: boolean;
    }
    response: Updates
  }
  'channels.reportAntiSpamFalsePositive': {
    params: {
      channel: InputChannel;
      msg_id: number;
    }
    response: boolean
  }
  'messages.setDefaultHistoryTTL': {
    params: {
      period: number;
    }
    response: boolean
  }
  'messages.getDefaultHistoryTTL': {
    params: {
    }
    response: DefaultHistoryTTL
  }
  'contacts.exportContactToken': {
    params: {
    }
    response: ExportedContactToken
  }
  'contacts.importContactToken': {
    params: {
      token: string;
    }
    response: User
  }
  'photos.uploadContactProfilePhoto': {
    params: {
      flags?: Number;
      suggest?: boolean;
      save?: boolean;
      user_id: InputUser;
      file?: InputFile;
      video?: InputFile;
      video_start_ts?: number;
      video_emoji_markup?: VideoSize;
    }
    response: Photos$Photo
  }
  'channels.toggleParticipantsHidden': {
    params: {
      channel: InputChannel;
      enabled: boolean;
    }
    response: Updates
  }
  'messages.sendBotRequestedPeer': {
    params: {
      peer: InputPeer;
      msg_id: number;
      button_id: number;
      requested_peers: InputPeer[];
    }
    response: Updates
  }
  'account.getDefaultProfilePhotoEmojis': {
    params: {
      hash: string;
    }
    response: EmojiList
  }
  'account.getDefaultGroupPhotoEmojis': {
    params: {
      hash: string;
    }
    response: EmojiList
  }
  'auth.requestFirebaseSms': {
    params: {
      flags?: Number;
      phone_number: string;
      phone_code_hash: string;
      safety_net_token?: string;
      ios_push_secret?: string;
    }
    response: boolean
  }
  'messages.getEmojiGroups': {
    params: {
      hash: number;
    }
    response: Messages$EmojiGroups
  }
  'messages.getEmojiStatusGroups': {
    params: {
      hash: number;
    }
    response: Messages$EmojiGroups
  }
  'messages.getEmojiProfilePhotoGroups': {
    params: {
      hash: number;
    }
    response: Messages$EmojiGroups
  }
  'messages.searchCustomEmoji': {
    params: {
      emoticon: string;
      hash: string;
    }
    response: EmojiList
  }
  'messages.togglePeerTranslations': {
    params: {
      flags?: Number;
      disabled?: boolean;
      peer: InputPeer;
    }
    response: boolean
  }
  'account.getAutoSaveSettings': {
    params: {
    }
    response: Account$AutoSaveSettings
  }
  'account.saveAutoSaveSettings': {
    params: {
      flags?: Number;
      users?: boolean;
      chats?: boolean;
      broadcasts?: boolean;
      peer?: InputPeer;
      settings: AutoSaveSettings;
    }
    response: boolean
  }
  'account.deleteAutoSaveExceptions': {
    params: {
    }
    response: boolean
  }
  'stickers.changeSticker': {
    params: {
      flags?: Number;
      sticker: InputDocument;
      emoji?: string;
      mask_coords?: MaskCoords;
      keywords?: string;
    }
    response: Messages$StickerSet
  }
  'stickers.renameStickerSet': {
    params: {
      stickerset: InputStickerSet;
      title: string;
    }
    response: Messages$StickerSet
  }
  'stickers.deleteStickerSet': {
    params: {
      stickerset: InputStickerSet;
    }
    response: boolean
  }
  'messages.getBotApp': {
    params: {
      app: InputBotApp;
      hash: string;
    }
    response: Messages$BotApp
  }
  'messages.requestAppWebView': {
    params: {
      flags?: Number;
      write_allowed?: boolean;
      peer: InputPeer;
      app: InputBotApp;
      start_param?: string;
      theme_params?: DataJSON;
      platform: string;
    }
    response: AppWebViewResult
  }
  'bots.setBotInfo': {
    params: {
      flags?: Number;
      bot?: InputUser;
      lang_code: string;
      name?: string;
      about?: string;
      description?: string;
    }
    response: boolean
  }
  'bots.getBotInfo': {
    params: {
      flags?: Number;
      bot?: InputUser;
      lang_code: string;
    }
    response: Bots$BotInfo
  }
  'auth.resetLoginEmail': {
    params: {
      phone_number: string;
      phone_code_hash: string;
    }
    response: Auth$SentCode
  }
  'chatlists.exportChatlistInvite': {
    params: {
      chatlist: InputChatlist;
      title: string;
      peers: InputPeer[];
    }
    response: Chatlists$ExportedChatlistInvite
  }
  'chatlists.deleteExportedInvite': {
    params: {
      chatlist: InputChatlist;
      slug: string;
    }
    response: boolean
  }
  'chatlists.editExportedInvite': {
    params: {
      flags?: Number;
      chatlist: InputChatlist;
      slug: string;
      title?: string;
      peers?: InputPeer[];
    }
    response: ExportedChatlistInvite
  }
  'chatlists.getExportedInvites': {
    params: {
      chatlist: InputChatlist;
    }
    response: Chatlists$ExportedInvites
  }
  'chatlists.checkChatlistInvite': {
    params: {
      slug: string;
    }
    response: Chatlists$ChatlistInvite
  }
  'chatlists.joinChatlistInvite': {
    params: {
      slug: string;
      peers: InputPeer[];
    }
    response: Updates
  }
  'chatlists.getChatlistUpdates': {
    params: {
      chatlist: InputChatlist;
    }
    response: Chatlists$ChatlistUpdates
  }
  'chatlists.joinChatlistUpdates': {
    params: {
      chatlist: InputChatlist;
      peers: InputPeer[];
    }
    response: Updates
  }
  'chatlists.hideChatlistUpdates': {
    params: {
      chatlist: InputChatlist;
    }
    response: boolean
  }
  'chatlists.getLeaveChatlistSuggestions': {
    params: {
      chatlist: InputChatlist;
    }
    response: Peer[]
  }
  'chatlists.leaveChatlist': {
    params: {
      chatlist: InputChatlist;
      peers: InputPeer[];
    }
    response: Updates
  }
  'bots.reorderUsernames': {
    params: {
      bot: InputUser;
      order: string[];
    }
    response: boolean
  }
  'bots.toggleUsername': {
    params: {
      bot: InputUser;
      username: string;
      active: boolean;
    }
    response: boolean
  }
  'messages.setChatWallPaper': {
    params: {
      flags?: Number;
      for_both?: boolean;
      revert?: boolean;
      peer: InputPeer;
      wallpaper?: InputWallPaper;
      settings?: WallPaperSettings;
      id?: number;
    }
    response: Updates
  }
  'account.invalidateSignInCodes': {
    params: {
      codes: string[];
    }
    response: boolean
  }
  'channels.clickSponsoredMessage': {
    params: {
      channel: InputChannel;
      random_id: Uint8Array;
    }
    response: boolean
  }
  'contacts.editCloseFriends': {
    params: {
      id: string[];
    }
    response: boolean
  }
  'stories.canSendStory': {
    params: {
      peer: InputPeer;
    }
    response: boolean
  }
  'stories.sendStory': {
    params: {
      flags?: Number;
      pinned?: boolean;
      noforwards?: boolean;
      fwd_modified?: boolean;
      peer: InputPeer;
      media: InputMedia;
      media_areas?: MediaArea[];
      caption?: string;
      entities?: MessageEntity[];
      privacy_rules: InputPrivacyRule[];
      random_id: string;
      period?: number;
      fwd_from_id?: InputPeer;
      fwd_from_story?: number;
    }
    response: Updates
  }
  'stories.editStory': {
    params: {
      flags?: Number;
      peer: InputPeer;
      id: number;
      media?: InputMedia;
      media_areas?: MediaArea[];
      caption?: string;
      entities?: MessageEntity[];
      privacy_rules?: InputPrivacyRule[];
    }
    response: Updates
  }
  'stories.deleteStories': {
    params: {
      peer: InputPeer;
      id: number[];
    }
    response: Number[]
  }
  'stories.togglePinned': {
    params: {
      peer: InputPeer;
      id: number[];
      pinned: boolean;
    }
    response: Number[]
  }
  'stories.getAllStories': {
    params: {
      flags?: Number;
      next?: boolean;
      hidden?: boolean;
      state?: string;
    }
    response: Stories$AllStories
  }
  'stories.getPinnedStories': {
    params: {
      peer: InputPeer;
      offset_id: number;
      limit: number;
    }
    response: Stories$Stories
  }
  'stories.getStoriesArchive': {
    params: {
      peer: InputPeer;
      offset_id: number;
      limit: number;
    }
    response: Stories$Stories
  }
  'stories.getStoriesByID': {
    params: {
      peer: InputPeer;
      id: number[];
    }
    response: Stories$Stories
  }
  'stories.toggleAllStoriesHidden': {
    params: {
      hidden: boolean;
    }
    response: boolean
  }
  'stories.readStories': {
    params: {
      peer: InputPeer;
      max_id: number;
    }
    response: Number[]
  }
  'stories.incrementStoryViews': {
    params: {
      peer: InputPeer;
      id: number[];
    }
    response: boolean
  }
  'stories.getStoryViewsList': {
    params: {
      flags?: Number;
      just_contacts?: boolean;
      reactions_first?: boolean;
      forwards_first?: boolean;
      peer: InputPeer;
      q?: string;
      id: number;
      offset: string;
      limit: number;
    }
    response: Stories$StoryViewsList
  }
  'stories.getStoriesViews': {
    params: {
      peer: InputPeer;
      id: number[];
    }
    response: Stories$StoryViews
  }
  'stories.exportStoryLink': {
    params: {
      peer: InputPeer;
      id: number;
    }
    response: ExportedStoryLink
  }
  'stories.report': {
    params: {
      peer: InputPeer;
      id: number[];
      reason: ReportReason;
      message: string;
    }
    response: boolean
  }
  'stories.activateStealthMode': {
    params: {
      flags?: Number;
      past?: boolean;
      future?: boolean;
    }
    response: Updates
  }
  'contacts.setBlocked': {
    params: {
      flags?: Number;
      my_stories_from?: boolean;
      id: InputPeer[];
      limit: number;
    }
    response: boolean
  }
  'stories.sendReaction': {
    params: {
      flags?: Number;
      add_to_recent?: boolean;
      peer: InputPeer;
      story_id: number;
      reaction: Reaction;
    }
    response: Updates
  }
  'bots.canSendMessage': {
    params: {
      bot: InputUser;
    }
    response: boolean
  }
  'bots.allowSendMessage': {
    params: {
      bot: InputUser;
    }
    response: Updates
  }
  'bots.invokeWebViewCustomMethod': {
    params: {
      bot: InputUser;
      custom_method: string;
      params: DataJSON;
    }
    response: DataJSON
  }
  'stories.getPeerStories': {
    params: {
      peer: InputPeer;
    }
    response: Stories$PeerStories
  }
  'stories.getAllReadPeerStories': {
    params: {
    }
    response: Updates
  }
  'stories.getPeerMaxIDs': {
    params: {
      id: InputPeer[];
    }
    response: Number[]
  }
  'stories.getChatsToSend': {
    params: {
    }
    response: Messages$Chats
  }
  'stories.togglePeerStoriesHidden': {
    params: {
      peer: InputPeer;
      hidden: boolean;
    }
    response: boolean
  }
  'payments.getPremiumGiftCodeOptions': {
    params: {
      flags?: Number;
      boost_peer?: InputPeer;
    }
    response: PremiumGiftCodeOption[]
  }
  'payments.checkGiftCode': {
    params: {
      slug: string;
    }
    response: Payments$CheckedGiftCode
  }
  'payments.applyGiftCode': {
    params: {
      slug: string;
    }
    response: Updates
  }
  'payments.getGiveawayInfo': {
    params: {
      peer: InputPeer;
      msg_id: number;
    }
    response: Payments$GiveawayInfo
  }
  'payments.launchPrepaidGiveaway': {
    params: {
      peer: InputPeer;
      giveaway_id: string;
      purpose: InputStorePaymentPurpose;
    }
    response: Updates
  }
  'account.updateColor': {
    params: {
      flags?: Number;
      for_profile?: boolean;
      color?: number;
      background_emoji_id?: string;
    }
    response: boolean
  }
  'channels.updateColor': {
    params: {
      flags?: Number;
      for_profile?: boolean;
      channel: InputChannel;
      color?: number;
      background_emoji_id?: string;
    }
    response: Updates
  }
  'account.getDefaultBackgroundEmojis': {
    params: {
      hash: string;
    }
    response: EmojiList
  }
  'premium.getBoostsList': {
    params: {
      flags?: Number;
      gifts?: boolean;
      peer: InputPeer;
      offset: string;
      limit: number;
    }
    response: Premium$BoostsList
  }
  'premium.getMyBoosts': {
    params: {
    }
    response: Premium$MyBoosts
  }
  'premium.applyBoost': {
    params: {
      flags?: Number;
      slots?: number[];
      peer: InputPeer;
    }
    response: Premium$MyBoosts
  }
  'premium.getBoostsStatus': {
    params: {
      peer: InputPeer;
    }
    response: Premium$BoostsStatus
  }
  'premium.getUserBoosts': {
    params: {
      peer: InputPeer;
      user_id: InputUser;
    }
    response: Premium$BoostsList
  }
  'channels.toggleViewForumAsMessages': {
    params: {
      channel: InputChannel;
      enabled: boolean;
    }
    response: Updates
  }
  'messages.searchEmojiStickerSets': {
    params: {
      flags?: Number;
      exclude_featured?: boolean;
      q: string;
      hash: string;
    }
    response: Messages$FoundStickerSets
  }
  'channels.getChannelRecommendations': {
    params: {
      channel: InputChannel;
    }
    response: Messages$Chats
  }
  'stats.getStoryStats': {
    params: {
      flags?: Number;
      dark?: boolean;
      peer: InputPeer;
      id: number;
    }
    response: Stats$StoryStats
  }
  'stats.getStoryPublicForwards': {
    params: {
      peer: InputPeer;
      id: number;
      offset: string;
      limit: number;
    }
    response: Stats$PublicForwards
  }
  'help.getPeerColors': {
    params: {
      hash: number;
    }
    response: Help$PeerColors
  }
  'help.getPeerProfileColors': {
    params: {
      hash: number;
    }
    response: Help$PeerColors
  }
  'stories.getStoryReactionsList': {
    params: {
      flags?: Number;
      forwards_first?: boolean;
      peer: InputPeer;
      id: number;
      reaction?: Reaction;
      offset?: string;
      limit: number;
    }
    response: Stories$StoryReactionsList
  }
  'channels.updateEmojiStatus': {
    params: {
      channel: InputChannel;
      emoji_status: EmojiStatus;
    }
    response: Updates
  }
  'account.getChannelDefaultEmojiStatuses': {
    params: {
      hash: string;
    }
    response: Account$EmojiStatuses
  }
  'account.getChannelRestrictedStatusEmojis': {
    params: {
      hash: string;
    }
    response: EmojiList
  }
  'messages.getSavedDialogs': {
    params: {
      flags?: Number;
      exclude_pinned?: boolean;
      offset_date: number;
      offset_id: number;
      offset_peer: InputPeer;
      limit: number;
      hash: string;
    }
    response: Messages$SavedDialogs
  }
  'messages.getSavedHistory': {
    params: {
      peer: InputPeer;
      offset_id: number;
      offset_date: number;
      add_offset: number;
      limit: number;
      max_id: number;
      min_id: number;
      hash: string;
    }
    response: Messages$Messages
  }
  'messages.deleteSavedHistory': {
    params: {
      flags?: Number;
      peer: InputPeer;
      max_id: number;
      min_date?: number;
      max_date?: number;
    }
    response: Messages$AffectedHistory
  }
  'messages.getPinnedSavedDialogs': {
    params: {
    }
    response: Messages$SavedDialogs
  }
  'messages.toggleSavedDialogPin': {
    params: {
      flags?: Number;
      pinned?: boolean;
      peer: InputDialogPeer;
    }
    response: boolean
  }
  'messages.reorderPinnedSavedDialogs': {
    params: {
      flags?: Number;
      force?: boolean;
      order: InputDialogPeer[];
    }
    response: boolean
  }
}