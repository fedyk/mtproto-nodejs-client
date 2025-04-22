export interface BuilderMap {
  'mt_vector': (this: any, params: any) => void
  'mt_resPQ': (this: any, params: any) => void
  'mt_p_q_inner_data_dc': (this: any, params: any) => void
  'mt_p_q_inner_data_temp_dc': (this: any, params: any) => void
  'mt_server_DH_params_ok': (this: any, params: any) => void
  'mt_server_DH_inner_data': (this: any, params: any) => void
  'mt_client_DH_inner_data': (this: any, params: any) => void
  'mt_dh_gen_ok': (this: any, params: any) => void
  'mt_dh_gen_retry': (this: any, params: any) => void
  'mt_dh_gen_fail': (this: any, params: any) => void
  'mt_bind_auth_key_inner': (this: any, params: any) => void
  'mt_rpc_result': (this: any, params: any) => void
  'mt_rpc_error': (this: any, params: any) => void
  'mt_rpc_answer_unknown': (this: any, params: any) => void
  'mt_rpc_answer_dropped_running': (this: any, params: any) => void
  'mt_rpc_answer_dropped': (this: any, params: any) => void
  'mt_future_salt': (this: any, params: any) => void
  'mt_future_salts': (this: any, params: any) => void
  'mt_pong': (this: any, params: any) => void
  'mt_destroy_session_ok': (this: any, params: any) => void
  'mt_destroy_session_none': (this: any, params: any) => void
  'mt_new_session_created': (this: any, params: any) => void
  'mt_msg_container': (this: any, params: any) => void
  'mt_message': (this: any, params: any) => void
  'mt_msg_copy': (this: any, params: any) => void
  'mt_gzip_packed': (this: any, params: any) => void
  'mt_msgs_ack': (this: any, params: any) => void
  'mt_bad_msg_notification': (this: any, params: any) => void
  'mt_bad_server_salt': (this: any, params: any) => void
  'mt_msg_resend_req': (this: any, params: any) => void
  'mt_msgs_state_req': (this: any, params: any) => void
  'mt_msgs_state_info': (this: any, params: any) => void
  'mt_msgs_all_info': (this: any, params: any) => void
  'mt_msg_detailed_info': (this: any, params: any) => void
  'mt_msg_new_detailed_info': (this: any, params: any) => void
  'mt_destroy_auth_key_ok': (this: any, params: any) => void
  'mt_destroy_auth_key_none': (this: any, params: any) => void
  'mt_destroy_auth_key_fail': (this: any, params: any) => void
  'mt_req_pq_multi': (this: any, params: any) => void
  'mt_req_DH_params': (this: any, params: any) => void
  'mt_set_client_DH_params': (this: any, params: any) => void
  'mt_rpc_drop_answer': (this: any, params: any) => void
  'mt_get_future_salts': (this: any, params: any) => void
  'mt_ping': (this: any, params: any) => void
  'mt_ping_delay_disconnect': (this: any, params: any) => void
  'mt_destroy_session': (this: any, params: any) => void
  'mt_http_wait': (this: any, params: any) => void
  'mt_destroy_auth_key': (this: any, params: any) => void
  'boolFalse': (this: any, params: any) => void
  'boolTrue': (this: any, params: any) => void
  'true': (this: any, params: any) => void
  'vector': (this: any, params: any) => void
  'error': (this: any, params: any) => void
  'null': (this: any, params: any) => void
  'inputPeerEmpty': (this: any, params: any) => void
  'inputPeerSelf': (this: any, params: any) => void
  'inputPeerChat': (this: any, params: any) => void
  'inputUserEmpty': (this: any, params: any) => void
  'inputUserSelf': (this: any, params: any) => void
  'inputPhoneContact': (this: any, params: any) => void
  'inputFile': (this: any, params: any) => void
  'inputMediaEmpty': (this: any, params: any) => void
  'inputMediaUploadedPhoto': (this: any, params: any) => void
  'inputMediaPhoto': (this: any, params: any) => void
  'inputMediaGeoPoint': (this: any, params: any) => void
  'inputMediaContact': (this: any, params: any) => void
  'inputChatPhotoEmpty': (this: any, params: any) => void
  'inputChatUploadedPhoto': (this: any, params: any) => void
  'inputChatPhoto': (this: any, params: any) => void
  'inputGeoPointEmpty': (this: any, params: any) => void
  'inputGeoPoint': (this: any, params: any) => void
  'inputPhotoEmpty': (this: any, params: any) => void
  'inputPhoto': (this: any, params: any) => void
  'inputFileLocation': (this: any, params: any) => void
  'peerUser': (this: any, params: any) => void
  'peerChat': (this: any, params: any) => void
  'storage.fileUnknown': (this: any, params: any) => void
  'storage.filePartial': (this: any, params: any) => void
  'storage.fileJpeg': (this: any, params: any) => void
  'storage.fileGif': (this: any, params: any) => void
  'storage.filePng': (this: any, params: any) => void
  'storage.filePdf': (this: any, params: any) => void
  'storage.fileMp3': (this: any, params: any) => void
  'storage.fileMov': (this: any, params: any) => void
  'storage.fileMp4': (this: any, params: any) => void
  'storage.fileWebp': (this: any, params: any) => void
  'userEmpty': (this: any, params: any) => void
  'userProfilePhotoEmpty': (this: any, params: any) => void
  'userProfilePhoto': (this: any, params: any) => void
  'userStatusEmpty': (this: any, params: any) => void
  'userStatusOnline': (this: any, params: any) => void
  'userStatusOffline': (this: any, params: any) => void
  'chatEmpty': (this: any, params: any) => void
  'chat': (this: any, params: any) => void
  'chatForbidden': (this: any, params: any) => void
  'chatFull': (this: any, params: any) => void
  'chatParticipant': (this: any, params: any) => void
  'chatParticipantsForbidden': (this: any, params: any) => void
  'chatParticipants': (this: any, params: any) => void
  'chatPhotoEmpty': (this: any, params: any) => void
  'chatPhoto': (this: any, params: any) => void
  'messageEmpty': (this: any, params: any) => void
  'message': (this: any, params: any) => void
  'messageService': (this: any, params: any) => void
  'messageMediaEmpty': (this: any, params: any) => void
  'messageMediaPhoto': (this: any, params: any) => void
  'messageMediaGeo': (this: any, params: any) => void
  'messageMediaContact': (this: any, params: any) => void
  'messageMediaUnsupported': (this: any, params: any) => void
  'messageActionEmpty': (this: any, params: any) => void
  'messageActionChatCreate': (this: any, params: any) => void
  'messageActionChatEditTitle': (this: any, params: any) => void
  'messageActionChatEditPhoto': (this: any, params: any) => void
  'messageActionChatDeletePhoto': (this: any, params: any) => void
  'messageActionChatAddUser': (this: any, params: any) => void
  'messageActionChatDeleteUser': (this: any, params: any) => void
  'dialog': (this: any, params: any) => void
  'photoEmpty': (this: any, params: any) => void
  'photo': (this: any, params: any) => void
  'photoSizeEmpty': (this: any, params: any) => void
  'photoSize': (this: any, params: any) => void
  'photoCachedSize': (this: any, params: any) => void
  'geoPointEmpty': (this: any, params: any) => void
  'geoPoint': (this: any, params: any) => void
  'auth.sentCode': (this: any, params: any) => void
  'auth.authorization': (this: any, params: any) => void
  'auth.exportedAuthorization': (this: any, params: any) => void
  'inputNotifyPeer': (this: any, params: any) => void
  'inputNotifyUsers': (this: any, params: any) => void
  'inputNotifyChats': (this: any, params: any) => void
  'inputPeerNotifySettings': (this: any, params: any) => void
  'peerNotifySettings': (this: any, params: any) => void
  'peerSettings': (this: any, params: any) => void
  'wallPaper': (this: any, params: any) => void
  'inputReportReasonSpam': (this: any, params: any) => void
  'inputReportReasonViolence': (this: any, params: any) => void
  'inputReportReasonPornography': (this: any, params: any) => void
  'inputReportReasonChildAbuse': (this: any, params: any) => void
  'inputReportReasonOther': (this: any, params: any) => void
  'userFull': (this: any, params: any) => void
  'contact': (this: any, params: any) => void
  'importedContact': (this: any, params: any) => void
  'contactStatus': (this: any, params: any) => void
  'contacts.contactsNotModified': (this: any, params: any) => void
  'contacts.contacts': (this: any, params: any) => void
  'contacts.importedContacts': (this: any, params: any) => void
  'contacts.blocked': (this: any, params: any) => void
  'contacts.blockedSlice': (this: any, params: any) => void
  'messages.dialogs': (this: any, params: any) => void
  'messages.dialogsSlice': (this: any, params: any) => void
  'messages.messages': (this: any, params: any) => void
  'messages.messagesSlice': (this: any, params: any) => void
  'messages.chats': (this: any, params: any) => void
  'messages.chatFull': (this: any, params: any) => void
  'messages.affectedHistory': (this: any, params: any) => void
  'inputMessagesFilterEmpty': (this: any, params: any) => void
  'inputMessagesFilterPhotos': (this: any, params: any) => void
  'inputMessagesFilterVideo': (this: any, params: any) => void
  'inputMessagesFilterPhotoVideo': (this: any, params: any) => void
  'inputMessagesFilterDocument': (this: any, params: any) => void
  'inputMessagesFilterUrl': (this: any, params: any) => void
  'inputMessagesFilterGif': (this: any, params: any) => void
  'updateNewMessage': (this: any, params: any) => void
  'updateMessageID': (this: any, params: any) => void
  'updateDeleteMessages': (this: any, params: any) => void
  'updateUserTyping': (this: any, params: any) => void
  'updateChatUserTyping': (this: any, params: any) => void
  'updateChatParticipants': (this: any, params: any) => void
  'updateUserStatus': (this: any, params: any) => void
  'updateUserName': (this: any, params: any) => void
  'updateNewAuthorization': (this: any, params: any) => void
  'updates.state': (this: any, params: any) => void
  'updates.differenceEmpty': (this: any, params: any) => void
  'updates.difference': (this: any, params: any) => void
  'updates.differenceSlice': (this: any, params: any) => void
  'updatesTooLong': (this: any, params: any) => void
  'updateShortMessage': (this: any, params: any) => void
  'updateShortChatMessage': (this: any, params: any) => void
  'updateShort': (this: any, params: any) => void
  'updatesCombined': (this: any, params: any) => void
  'updates': (this: any, params: any) => void
  'photos.photos': (this: any, params: any) => void
  'photos.photosSlice': (this: any, params: any) => void
  'photos.photo': (this: any, params: any) => void
  'upload.file': (this: any, params: any) => void
  'dcOption': (this: any, params: any) => void
  'config': (this: any, params: any) => void
  'nearestDc': (this: any, params: any) => void
  'help.appUpdate': (this: any, params: any) => void
  'help.noAppUpdate': (this: any, params: any) => void
  'help.inviteText': (this: any, params: any) => void
  'updateNewEncryptedMessage': (this: any, params: any) => void
  'updateEncryptedChatTyping': (this: any, params: any) => void
  'updateEncryption': (this: any, params: any) => void
  'updateEncryptedMessagesRead': (this: any, params: any) => void
  'encryptedChatEmpty': (this: any, params: any) => void
  'encryptedChatWaiting': (this: any, params: any) => void
  'encryptedChatRequested': (this: any, params: any) => void
  'encryptedChat': (this: any, params: any) => void
  'encryptedChatDiscarded': (this: any, params: any) => void
  'inputEncryptedChat': (this: any, params: any) => void
  'encryptedFileEmpty': (this: any, params: any) => void
  'encryptedFile': (this: any, params: any) => void
  'inputEncryptedFileEmpty': (this: any, params: any) => void
  'inputEncryptedFileUploaded': (this: any, params: any) => void
  'inputEncryptedFile': (this: any, params: any) => void
  'inputEncryptedFileLocation': (this: any, params: any) => void
  'encryptedMessage': (this: any, params: any) => void
  'encryptedMessageService': (this: any, params: any) => void
  'messages.dhConfigNotModified': (this: any, params: any) => void
  'messages.dhConfig': (this: any, params: any) => void
  'messages.sentEncryptedMessage': (this: any, params: any) => void
  'messages.sentEncryptedFile': (this: any, params: any) => void
  'inputFileBig': (this: any, params: any) => void
  'inputEncryptedFileBigUploaded': (this: any, params: any) => void
  'updateChatParticipantAdd': (this: any, params: any) => void
  'updateChatParticipantDelete': (this: any, params: any) => void
  'updateDcOptions': (this: any, params: any) => void
  'inputMediaUploadedDocument': (this: any, params: any) => void
  'inputMediaDocument': (this: any, params: any) => void
  'messageMediaDocument': (this: any, params: any) => void
  'inputDocumentEmpty': (this: any, params: any) => void
  'inputDocument': (this: any, params: any) => void
  'inputDocumentFileLocation': (this: any, params: any) => void
  'documentEmpty': (this: any, params: any) => void
  'document': (this: any, params: any) => void
  'help.support': (this: any, params: any) => void
  'notifyPeer': (this: any, params: any) => void
  'notifyUsers': (this: any, params: any) => void
  'notifyChats': (this: any, params: any) => void
  'updateNotifySettings': (this: any, params: any) => void
  'sendMessageTypingAction': (this: any, params: any) => void
  'sendMessageCancelAction': (this: any, params: any) => void
  'sendMessageRecordVideoAction': (this: any, params: any) => void
  'sendMessageUploadVideoAction': (this: any, params: any) => void
  'sendMessageRecordAudioAction': (this: any, params: any) => void
  'sendMessageUploadAudioAction': (this: any, params: any) => void
  'sendMessageUploadPhotoAction': (this: any, params: any) => void
  'sendMessageUploadDocumentAction': (this: any, params: any) => void
  'sendMessageGeoLocationAction': (this: any, params: any) => void
  'sendMessageChooseContactAction': (this: any, params: any) => void
  'contacts.found': (this: any, params: any) => void
  'updateServiceNotification': (this: any, params: any) => void
  'userStatusRecently': (this: any, params: any) => void
  'userStatusLastWeek': (this: any, params: any) => void
  'userStatusLastMonth': (this: any, params: any) => void
  'updatePrivacy': (this: any, params: any) => void
  'inputPrivacyKeyStatusTimestamp': (this: any, params: any) => void
  'privacyKeyStatusTimestamp': (this: any, params: any) => void
  'inputPrivacyValueAllowContacts': (this: any, params: any) => void
  'inputPrivacyValueAllowAll': (this: any, params: any) => void
  'inputPrivacyValueAllowUsers': (this: any, params: any) => void
  'inputPrivacyValueDisallowContacts': (this: any, params: any) => void
  'inputPrivacyValueDisallowAll': (this: any, params: any) => void
  'inputPrivacyValueDisallowUsers': (this: any, params: any) => void
  'privacyValueAllowContacts': (this: any, params: any) => void
  'privacyValueAllowAll': (this: any, params: any) => void
  'privacyValueAllowUsers': (this: any, params: any) => void
  'privacyValueDisallowContacts': (this: any, params: any) => void
  'privacyValueDisallowAll': (this: any, params: any) => void
  'privacyValueDisallowUsers': (this: any, params: any) => void
  'account.privacyRules': (this: any, params: any) => void
  'accountDaysTTL': (this: any, params: any) => void
  'updateUserPhone': (this: any, params: any) => void
  'documentAttributeImageSize': (this: any, params: any) => void
  'documentAttributeAnimated': (this: any, params: any) => void
  'documentAttributeSticker': (this: any, params: any) => void
  'documentAttributeVideo': (this: any, params: any) => void
  'documentAttributeAudio': (this: any, params: any) => void
  'documentAttributeFilename': (this: any, params: any) => void
  'messages.stickersNotModified': (this: any, params: any) => void
  'messages.stickers': (this: any, params: any) => void
  'stickerPack': (this: any, params: any) => void
  'messages.allStickersNotModified': (this: any, params: any) => void
  'messages.allStickers': (this: any, params: any) => void
  'updateReadHistoryInbox': (this: any, params: any) => void
  'updateReadHistoryOutbox': (this: any, params: any) => void
  'messages.affectedMessages': (this: any, params: any) => void
  'updateWebPage': (this: any, params: any) => void
  'webPageEmpty': (this: any, params: any) => void
  'webPagePending': (this: any, params: any) => void
  'webPage': (this: any, params: any) => void
  'messageMediaWebPage': (this: any, params: any) => void
  'authorization': (this: any, params: any) => void
  'account.authorizations': (this: any, params: any) => void
  'account.password': (this: any, params: any) => void
  'account.passwordSettings': (this: any, params: any) => void
  'account.passwordInputSettings': (this: any, params: any) => void
  'auth.passwordRecovery': (this: any, params: any) => void
  'inputMediaVenue': (this: any, params: any) => void
  'messageMediaVenue': (this: any, params: any) => void
  'receivedNotifyMessage': (this: any, params: any) => void
  'chatInviteExported': (this: any, params: any) => void
  'chatInviteAlready': (this: any, params: any) => void
  'chatInvite': (this: any, params: any) => void
  'messageActionChatJoinedByLink': (this: any, params: any) => void
  'updateReadMessagesContents': (this: any, params: any) => void
  'inputStickerSetEmpty': (this: any, params: any) => void
  'inputStickerSetID': (this: any, params: any) => void
  'inputStickerSetShortName': (this: any, params: any) => void
  'stickerSet': (this: any, params: any) => void
  'messages.stickerSet': (this: any, params: any) => void
  'user': (this: any, params: any) => void
  'botCommand': (this: any, params: any) => void
  'botInfo': (this: any, params: any) => void
  'keyboardButton': (this: any, params: any) => void
  'keyboardButtonRow': (this: any, params: any) => void
  'replyKeyboardHide': (this: any, params: any) => void
  'replyKeyboardForceReply': (this: any, params: any) => void
  'replyKeyboardMarkup': (this: any, params: any) => void
  'inputPeerUser': (this: any, params: any) => void
  'inputUser': (this: any, params: any) => void
  'messageEntityUnknown': (this: any, params: any) => void
  'messageEntityMention': (this: any, params: any) => void
  'messageEntityHashtag': (this: any, params: any) => void
  'messageEntityBotCommand': (this: any, params: any) => void
  'messageEntityUrl': (this: any, params: any) => void
  'messageEntityEmail': (this: any, params: any) => void
  'messageEntityBold': (this: any, params: any) => void
  'messageEntityItalic': (this: any, params: any) => void
  'messageEntityCode': (this: any, params: any) => void
  'messageEntityPre': (this: any, params: any) => void
  'messageEntityTextUrl': (this: any, params: any) => void
  'updateShortSentMessage': (this: any, params: any) => void
  'inputChannelEmpty': (this: any, params: any) => void
  'inputChannel': (this: any, params: any) => void
  'peerChannel': (this: any, params: any) => void
  'inputPeerChannel': (this: any, params: any) => void
  'channel': (this: any, params: any) => void
  'channelForbidden': (this: any, params: any) => void
  'contacts.resolvedPeer': (this: any, params: any) => void
  'channelFull': (this: any, params: any) => void
  'messageRange': (this: any, params: any) => void
  'messages.channelMessages': (this: any, params: any) => void
  'messageActionChannelCreate': (this: any, params: any) => void
  'updateChannelTooLong': (this: any, params: any) => void
  'updateChannel': (this: any, params: any) => void
  'updateNewChannelMessage': (this: any, params: any) => void
  'updateReadChannelInbox': (this: any, params: any) => void
  'updateDeleteChannelMessages': (this: any, params: any) => void
  'updateChannelMessageViews': (this: any, params: any) => void
  'updates.channelDifferenceEmpty': (this: any, params: any) => void
  'updates.channelDifferenceTooLong': (this: any, params: any) => void
  'updates.channelDifference': (this: any, params: any) => void
  'channelMessagesFilterEmpty': (this: any, params: any) => void
  'channelMessagesFilter': (this: any, params: any) => void
  'channelParticipant': (this: any, params: any) => void
  'channelParticipantSelf': (this: any, params: any) => void
  'channelParticipantCreator': (this: any, params: any) => void
  'channelParticipantsRecent': (this: any, params: any) => void
  'channelParticipantsAdmins': (this: any, params: any) => void
  'channelParticipantsKicked': (this: any, params: any) => void
  'channels.channelParticipants': (this: any, params: any) => void
  'channels.channelParticipant': (this: any, params: any) => void
  'chatParticipantCreator': (this: any, params: any) => void
  'chatParticipantAdmin': (this: any, params: any) => void
  'updateChatParticipantAdmin': (this: any, params: any) => void
  'messageActionChatMigrateTo': (this: any, params: any) => void
  'messageActionChannelMigrateFrom': (this: any, params: any) => void
  'channelParticipantsBots': (this: any, params: any) => void
  'help.termsOfService': (this: any, params: any) => void
  'updateNewStickerSet': (this: any, params: any) => void
  'updateStickerSetsOrder': (this: any, params: any) => void
  'updateStickerSets': (this: any, params: any) => void
  'messages.savedGifsNotModified': (this: any, params: any) => void
  'messages.savedGifs': (this: any, params: any) => void
  'updateSavedGifs': (this: any, params: any) => void
  'inputBotInlineMessageMediaAuto': (this: any, params: any) => void
  'inputBotInlineMessageText': (this: any, params: any) => void
  'inputBotInlineResult': (this: any, params: any) => void
  'botInlineMessageMediaAuto': (this: any, params: any) => void
  'botInlineMessageText': (this: any, params: any) => void
  'botInlineResult': (this: any, params: any) => void
  'messages.botResults': (this: any, params: any) => void
  'updateBotInlineQuery': (this: any, params: any) => void
  'updateBotInlineSend': (this: any, params: any) => void
  'inputMessagesFilterVoice': (this: any, params: any) => void
  'inputMessagesFilterMusic': (this: any, params: any) => void
  'inputPrivacyKeyChatInvite': (this: any, params: any) => void
  'privacyKeyChatInvite': (this: any, params: any) => void
  'exportedMessageLink': (this: any, params: any) => void
  'messageFwdHeader': (this: any, params: any) => void
  'updateEditChannelMessage': (this: any, params: any) => void
  'messageActionPinMessage': (this: any, params: any) => void
  'auth.codeTypeSms': (this: any, params: any) => void
  'auth.codeTypeCall': (this: any, params: any) => void
  'auth.codeTypeFlashCall': (this: any, params: any) => void
  'auth.sentCodeTypeApp': (this: any, params: any) => void
  'auth.sentCodeTypeSms': (this: any, params: any) => void
  'auth.sentCodeTypeCall': (this: any, params: any) => void
  'auth.sentCodeTypeFlashCall': (this: any, params: any) => void
  'keyboardButtonUrl': (this: any, params: any) => void
  'keyboardButtonCallback': (this: any, params: any) => void
  'keyboardButtonRequestPhone': (this: any, params: any) => void
  'keyboardButtonRequestGeoLocation': (this: any, params: any) => void
  'keyboardButtonSwitchInline': (this: any, params: any) => void
  'replyInlineMarkup': (this: any, params: any) => void
  'messages.botCallbackAnswer': (this: any, params: any) => void
  'updateBotCallbackQuery': (this: any, params: any) => void
  'messages.messageEditData': (this: any, params: any) => void
  'updateEditMessage': (this: any, params: any) => void
  'inputBotInlineMessageMediaGeo': (this: any, params: any) => void
  'inputBotInlineMessageMediaVenue': (this: any, params: any) => void
  'inputBotInlineMessageMediaContact': (this: any, params: any) => void
  'botInlineMessageMediaGeo': (this: any, params: any) => void
  'botInlineMessageMediaVenue': (this: any, params: any) => void
  'botInlineMessageMediaContact': (this: any, params: any) => void
  'inputBotInlineResultPhoto': (this: any, params: any) => void
  'inputBotInlineResultDocument': (this: any, params: any) => void
  'botInlineMediaResult': (this: any, params: any) => void
  'inputBotInlineMessageID': (this: any, params: any) => void
  'updateInlineBotCallbackQuery': (this: any, params: any) => void
  'inlineBotSwitchPM': (this: any, params: any) => void
  'messages.peerDialogs': (this: any, params: any) => void
  'topPeer': (this: any, params: any) => void
  'topPeerCategoryBotsPM': (this: any, params: any) => void
  'topPeerCategoryBotsInline': (this: any, params: any) => void
  'topPeerCategoryCorrespondents': (this: any, params: any) => void
  'topPeerCategoryGroups': (this: any, params: any) => void
  'topPeerCategoryChannels': (this: any, params: any) => void
  'topPeerCategoryPeers': (this: any, params: any) => void
  'contacts.topPeersNotModified': (this: any, params: any) => void
  'contacts.topPeers': (this: any, params: any) => void
  'messageEntityMentionName': (this: any, params: any) => void
  'inputMessageEntityMentionName': (this: any, params: any) => void
  'inputMessagesFilterChatPhotos': (this: any, params: any) => void
  'updateReadChannelOutbox': (this: any, params: any) => void
  'updateDraftMessage': (this: any, params: any) => void
  'draftMessageEmpty': (this: any, params: any) => void
  'draftMessage': (this: any, params: any) => void
  'messageActionHistoryClear': (this: any, params: any) => void
  'messages.featuredStickersNotModified': (this: any, params: any) => void
  'messages.featuredStickers': (this: any, params: any) => void
  'updateReadFeaturedStickers': (this: any, params: any) => void
  'messages.recentStickersNotModified': (this: any, params: any) => void
  'messages.recentStickers': (this: any, params: any) => void
  'updateRecentStickers': (this: any, params: any) => void
  'messages.archivedStickers': (this: any, params: any) => void
  'messages.stickerSetInstallResultSuccess': (this: any, params: any) => void
  'messages.stickerSetInstallResultArchive': (this: any, params: any) => void
  'stickerSetCovered': (this: any, params: any) => void
  'updateConfig': (this: any, params: any) => void
  'updatePtsChanged': (this: any, params: any) => void
  'inputMediaPhotoExternal': (this: any, params: any) => void
  'inputMediaDocumentExternal': (this: any, params: any) => void
  'stickerSetMultiCovered': (this: any, params: any) => void
  'maskCoords': (this: any, params: any) => void
  'documentAttributeHasStickers': (this: any, params: any) => void
  'inputStickeredMediaPhoto': (this: any, params: any) => void
  'inputStickeredMediaDocument': (this: any, params: any) => void
  'game': (this: any, params: any) => void
  'inputBotInlineResultGame': (this: any, params: any) => void
  'inputBotInlineMessageGame': (this: any, params: any) => void
  'messageMediaGame': (this: any, params: any) => void
  'inputMediaGame': (this: any, params: any) => void
  'inputGameID': (this: any, params: any) => void
  'inputGameShortName': (this: any, params: any) => void
  'keyboardButtonGame': (this: any, params: any) => void
  'messageActionGameScore': (this: any, params: any) => void
  'highScore': (this: any, params: any) => void
  'messages.highScores': (this: any, params: any) => void
  'updates.differenceTooLong': (this: any, params: any) => void
  'updateChannelWebPage': (this: any, params: any) => void
  'messages.chatsSlice': (this: any, params: any) => void
  'textEmpty': (this: any, params: any) => void
  'textPlain': (this: any, params: any) => void
  'textBold': (this: any, params: any) => void
  'textItalic': (this: any, params: any) => void
  'textUnderline': (this: any, params: any) => void
  'textStrike': (this: any, params: any) => void
  'textFixed': (this: any, params: any) => void
  'textUrl': (this: any, params: any) => void
  'textEmail': (this: any, params: any) => void
  'textConcat': (this: any, params: any) => void
  'pageBlockUnsupported': (this: any, params: any) => void
  'pageBlockTitle': (this: any, params: any) => void
  'pageBlockSubtitle': (this: any, params: any) => void
  'pageBlockAuthorDate': (this: any, params: any) => void
  'pageBlockHeader': (this: any, params: any) => void
  'pageBlockSubheader': (this: any, params: any) => void
  'pageBlockParagraph': (this: any, params: any) => void
  'pageBlockPreformatted': (this: any, params: any) => void
  'pageBlockFooter': (this: any, params: any) => void
  'pageBlockDivider': (this: any, params: any) => void
  'pageBlockAnchor': (this: any, params: any) => void
  'pageBlockList': (this: any, params: any) => void
  'pageBlockBlockquote': (this: any, params: any) => void
  'pageBlockPullquote': (this: any, params: any) => void
  'pageBlockPhoto': (this: any, params: any) => void
  'pageBlockVideo': (this: any, params: any) => void
  'pageBlockCover': (this: any, params: any) => void
  'pageBlockEmbed': (this: any, params: any) => void
  'pageBlockEmbedPost': (this: any, params: any) => void
  'pageBlockCollage': (this: any, params: any) => void
  'pageBlockSlideshow': (this: any, params: any) => void
  'webPageNotModified': (this: any, params: any) => void
  'inputPrivacyKeyPhoneCall': (this: any, params: any) => void
  'privacyKeyPhoneCall': (this: any, params: any) => void
  'sendMessageGamePlayAction': (this: any, params: any) => void
  'phoneCallDiscardReasonMissed': (this: any, params: any) => void
  'phoneCallDiscardReasonDisconnect': (this: any, params: any) => void
  'phoneCallDiscardReasonHangup': (this: any, params: any) => void
  'phoneCallDiscardReasonBusy': (this: any, params: any) => void
  'updateDialogPinned': (this: any, params: any) => void
  'updatePinnedDialogs': (this: any, params: any) => void
  'dataJSON': (this: any, params: any) => void
  'updateBotWebhookJSON': (this: any, params: any) => void
  'updateBotWebhookJSONQuery': (this: any, params: any) => void
  'labeledPrice': (this: any, params: any) => void
  'invoice': (this: any, params: any) => void
  'inputMediaInvoice': (this: any, params: any) => void
  'paymentCharge': (this: any, params: any) => void
  'messageActionPaymentSentMe': (this: any, params: any) => void
  'messageMediaInvoice': (this: any, params: any) => void
  'postAddress': (this: any, params: any) => void
  'paymentRequestedInfo': (this: any, params: any) => void
  'keyboardButtonBuy': (this: any, params: any) => void
  'messageActionPaymentSent': (this: any, params: any) => void
  'paymentSavedCredentialsCard': (this: any, params: any) => void
  'webDocument': (this: any, params: any) => void
  'inputWebDocument': (this: any, params: any) => void
  'inputWebFileLocation': (this: any, params: any) => void
  'upload.webFile': (this: any, params: any) => void
  'payments.paymentForm': (this: any, params: any) => void
  'payments.validatedRequestedInfo': (this: any, params: any) => void
  'payments.paymentResult': (this: any, params: any) => void
  'payments.paymentReceipt': (this: any, params: any) => void
  'payments.savedInfo': (this: any, params: any) => void
  'inputPaymentCredentialsSaved': (this: any, params: any) => void
  'inputPaymentCredentials': (this: any, params: any) => void
  'account.tmpPassword': (this: any, params: any) => void
  'shippingOption': (this: any, params: any) => void
  'updateBotShippingQuery': (this: any, params: any) => void
  'updateBotPrecheckoutQuery': (this: any, params: any) => void
  'inputStickerSetItem': (this: any, params: any) => void
  'updatePhoneCall': (this: any, params: any) => void
  'inputPhoneCall': (this: any, params: any) => void
  'phoneCallEmpty': (this: any, params: any) => void
  'phoneCallWaiting': (this: any, params: any) => void
  'phoneCallRequested': (this: any, params: any) => void
  'phoneCallAccepted': (this: any, params: any) => void
  'phoneCall': (this: any, params: any) => void
  'phoneCallDiscarded': (this: any, params: any) => void
  'phoneConnection': (this: any, params: any) => void
  'phoneCallProtocol': (this: any, params: any) => void
  'phone.phoneCall': (this: any, params: any) => void
  'inputMessagesFilterPhoneCalls': (this: any, params: any) => void
  'messageActionPhoneCall': (this: any, params: any) => void
  'inputMessagesFilterRoundVoice': (this: any, params: any) => void
  'inputMessagesFilterRoundVideo': (this: any, params: any) => void
  'sendMessageRecordRoundAction': (this: any, params: any) => void
  'sendMessageUploadRoundAction': (this: any, params: any) => void
  'upload.fileCdnRedirect': (this: any, params: any) => void
  'upload.cdnFileReuploadNeeded': (this: any, params: any) => void
  'upload.cdnFile': (this: any, params: any) => void
  'cdnPublicKey': (this: any, params: any) => void
  'cdnConfig': (this: any, params: any) => void
  'pageBlockChannel': (this: any, params: any) => void
  'langPackString': (this: any, params: any) => void
  'langPackStringPluralized': (this: any, params: any) => void
  'langPackStringDeleted': (this: any, params: any) => void
  'langPackDifference': (this: any, params: any) => void
  'langPackLanguage': (this: any, params: any) => void
  'updateLangPackTooLong': (this: any, params: any) => void
  'updateLangPack': (this: any, params: any) => void
  'channelParticipantAdmin': (this: any, params: any) => void
  'channelParticipantBanned': (this: any, params: any) => void
  'channelParticipantsBanned': (this: any, params: any) => void
  'channelParticipantsSearch': (this: any, params: any) => void
  'channelAdminLogEventActionChangeTitle': (this: any, params: any) => void
  'channelAdminLogEventActionChangeAbout': (this: any, params: any) => void
  'channelAdminLogEventActionChangeUsername': (this: any, params: any) => void
  'channelAdminLogEventActionChangePhoto': (this: any, params: any) => void
  'channelAdminLogEventActionToggleInvites': (this: any, params: any) => void
  'channelAdminLogEventActionToggleSignatures': (this: any, params: any) => void
  'channelAdminLogEventActionUpdatePinned': (this: any, params: any) => void
  'channelAdminLogEventActionEditMessage': (this: any, params: any) => void
  'channelAdminLogEventActionDeleteMessage': (this: any, params: any) => void
  'channelAdminLogEventActionParticipantJoin': (this: any, params: any) => void
  'channelAdminLogEventActionParticipantLeave': (this: any, params: any) => void
  'channelAdminLogEventActionParticipantInvite': (this: any, params: any) => void
  'channelAdminLogEventActionParticipantToggleBan': (this: any, params: any) => void
  'channelAdminLogEventActionParticipantToggleAdmin': (this: any, params: any) => void
  'channelAdminLogEvent': (this: any, params: any) => void
  'channels.adminLogResults': (this: any, params: any) => void
  'channelAdminLogEventsFilter': (this: any, params: any) => void
  'topPeerCategoryPhoneCalls': (this: any, params: any) => void
  'pageBlockAudio': (this: any, params: any) => void
  'popularContact': (this: any, params: any) => void
  'messageActionScreenshotTaken': (this: any, params: any) => void
  'messages.favedStickersNotModified': (this: any, params: any) => void
  'messages.favedStickers': (this: any, params: any) => void
  'updateFavedStickers': (this: any, params: any) => void
  'updateChannelReadMessagesContents': (this: any, params: any) => void
  'inputMessagesFilterMyMentions': (this: any, params: any) => void
  'updateContactsReset': (this: any, params: any) => void
  'channelAdminLogEventActionChangeStickerSet': (this: any, params: any) => void
  'messageActionCustomAction': (this: any, params: any) => void
  'inputPaymentCredentialsApplePay': (this: any, params: any) => void
  'inputMessagesFilterGeo': (this: any, params: any) => void
  'inputMessagesFilterContacts': (this: any, params: any) => void
  'updateChannelAvailableMessages': (this: any, params: any) => void
  'channelAdminLogEventActionTogglePreHistoryHidden': (this: any, params: any) => void
  'inputMediaGeoLive': (this: any, params: any) => void
  'messageMediaGeoLive': (this: any, params: any) => void
  'recentMeUrlUnknown': (this: any, params: any) => void
  'recentMeUrlUser': (this: any, params: any) => void
  'recentMeUrlChat': (this: any, params: any) => void
  'recentMeUrlChatInvite': (this: any, params: any) => void
  'recentMeUrlStickerSet': (this: any, params: any) => void
  'help.recentMeUrls': (this: any, params: any) => void
  'channels.channelParticipantsNotModified': (this: any, params: any) => void
  'messages.messagesNotModified': (this: any, params: any) => void
  'inputSingleMedia': (this: any, params: any) => void
  'webAuthorization': (this: any, params: any) => void
  'account.webAuthorizations': (this: any, params: any) => void
  'inputMessageID': (this: any, params: any) => void
  'inputMessageReplyTo': (this: any, params: any) => void
  'inputMessagePinned': (this: any, params: any) => void
  'messageEntityPhone': (this: any, params: any) => void
  'messageEntityCashtag': (this: any, params: any) => void
  'messageActionBotAllowed': (this: any, params: any) => void
  'inputDialogPeer': (this: any, params: any) => void
  'dialogPeer': (this: any, params: any) => void
  'messages.foundStickerSetsNotModified': (this: any, params: any) => void
  'messages.foundStickerSets': (this: any, params: any) => void
  'fileHash': (this: any, params: any) => void
  'webDocumentNoProxy': (this: any, params: any) => void
  'inputClientProxy': (this: any, params: any) => void
  'help.termsOfServiceUpdateEmpty': (this: any, params: any) => void
  'help.termsOfServiceUpdate': (this: any, params: any) => void
  'inputSecureFileUploaded': (this: any, params: any) => void
  'inputSecureFile': (this: any, params: any) => void
  'inputSecureFileLocation': (this: any, params: any) => void
  'secureFileEmpty': (this: any, params: any) => void
  'secureFile': (this: any, params: any) => void
  'secureData': (this: any, params: any) => void
  'securePlainPhone': (this: any, params: any) => void
  'securePlainEmail': (this: any, params: any) => void
  'secureValueTypePersonalDetails': (this: any, params: any) => void
  'secureValueTypePassport': (this: any, params: any) => void
  'secureValueTypeDriverLicense': (this: any, params: any) => void
  'secureValueTypeIdentityCard': (this: any, params: any) => void
  'secureValueTypeInternalPassport': (this: any, params: any) => void
  'secureValueTypeAddress': (this: any, params: any) => void
  'secureValueTypeUtilityBill': (this: any, params: any) => void
  'secureValueTypeBankStatement': (this: any, params: any) => void
  'secureValueTypeRentalAgreement': (this: any, params: any) => void
  'secureValueTypePassportRegistration': (this: any, params: any) => void
  'secureValueTypeTemporaryRegistration': (this: any, params: any) => void
  'secureValueTypePhone': (this: any, params: any) => void
  'secureValueTypeEmail': (this: any, params: any) => void
  'secureValue': (this: any, params: any) => void
  'inputSecureValue': (this: any, params: any) => void
  'secureValueHash': (this: any, params: any) => void
  'secureValueErrorData': (this: any, params: any) => void
  'secureValueErrorFrontSide': (this: any, params: any) => void
  'secureValueErrorReverseSide': (this: any, params: any) => void
  'secureValueErrorSelfie': (this: any, params: any) => void
  'secureValueErrorFile': (this: any, params: any) => void
  'secureValueErrorFiles': (this: any, params: any) => void
  'secureCredentialsEncrypted': (this: any, params: any) => void
  'account.authorizationForm': (this: any, params: any) => void
  'account.sentEmailCode': (this: any, params: any) => void
  'messageActionSecureValuesSentMe': (this: any, params: any) => void
  'messageActionSecureValuesSent': (this: any, params: any) => void
  'help.deepLinkInfoEmpty': (this: any, params: any) => void
  'help.deepLinkInfo': (this: any, params: any) => void
  'savedPhoneContact': (this: any, params: any) => void
  'account.takeout': (this: any, params: any) => void
  'inputTakeoutFileLocation': (this: any, params: any) => void
  'updateDialogUnreadMark': (this: any, params: any) => void
  'messages.dialogsNotModified': (this: any, params: any) => void
  'inputWebFileGeoPointLocation': (this: any, params: any) => void
  'contacts.topPeersDisabled': (this: any, params: any) => void
  'inputReportReasonCopyright': (this: any, params: any) => void
  'passwordKdfAlgoUnknown': (this: any, params: any) => void
  'securePasswordKdfAlgoUnknown': (this: any, params: any) => void
  'securePasswordKdfAlgoPBKDF2HMACSHA512iter100000': (this: any, params: any) => void
  'securePasswordKdfAlgoSHA512': (this: any, params: any) => void
  'secureSecretSettings': (this: any, params: any) => void
  'passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow': (this: any, params: any) => void
  'inputCheckPasswordEmpty': (this: any, params: any) => void
  'inputCheckPasswordSRP': (this: any, params: any) => void
  'secureValueError': (this: any, params: any) => void
  'secureValueErrorTranslationFile': (this: any, params: any) => void
  'secureValueErrorTranslationFiles': (this: any, params: any) => void
  'secureRequiredType': (this: any, params: any) => void
  'secureRequiredTypeOneOf': (this: any, params: any) => void
  'help.passportConfigNotModified': (this: any, params: any) => void
  'help.passportConfig': (this: any, params: any) => void
  'inputAppEvent': (this: any, params: any) => void
  'jsonObjectValue': (this: any, params: any) => void
  'jsonNull': (this: any, params: any) => void
  'jsonBool': (this: any, params: any) => void
  'jsonNumber': (this: any, params: any) => void
  'jsonString': (this: any, params: any) => void
  'jsonArray': (this: any, params: any) => void
  'jsonObject': (this: any, params: any) => void
  'inputNotifyBroadcasts': (this: any, params: any) => void
  'notifyBroadcasts': (this: any, params: any) => void
  'textSubscript': (this: any, params: any) => void
  'textSuperscript': (this: any, params: any) => void
  'textMarked': (this: any, params: any) => void
  'textPhone': (this: any, params: any) => void
  'textImage': (this: any, params: any) => void
  'pageBlockKicker': (this: any, params: any) => void
  'pageTableCell': (this: any, params: any) => void
  'pageTableRow': (this: any, params: any) => void
  'pageBlockTable': (this: any, params: any) => void
  'pageCaption': (this: any, params: any) => void
  'pageListItemText': (this: any, params: any) => void
  'pageListItemBlocks': (this: any, params: any) => void
  'pageListOrderedItemText': (this: any, params: any) => void
  'pageListOrderedItemBlocks': (this: any, params: any) => void
  'pageBlockOrderedList': (this: any, params: any) => void
  'pageBlockDetails': (this: any, params: any) => void
  'pageRelatedArticle': (this: any, params: any) => void
  'pageBlockRelatedArticles': (this: any, params: any) => void
  'pageBlockMap': (this: any, params: any) => void
  'page': (this: any, params: any) => void
  'inputPrivacyKeyPhoneP2P': (this: any, params: any) => void
  'privacyKeyPhoneP2P': (this: any, params: any) => void
  'textAnchor': (this: any, params: any) => void
  'help.supportName': (this: any, params: any) => void
  'help.userInfoEmpty': (this: any, params: any) => void
  'help.userInfo': (this: any, params: any) => void
  'messageActionContactSignUp': (this: any, params: any) => void
  'updateMessagePoll': (this: any, params: any) => void
  'pollAnswer': (this: any, params: any) => void
  'poll': (this: any, params: any) => void
  'pollAnswerVoters': (this: any, params: any) => void
  'pollResults': (this: any, params: any) => void
  'inputMediaPoll': (this: any, params: any) => void
  'messageMediaPoll': (this: any, params: any) => void
  'chatOnlines': (this: any, params: any) => void
  'statsURL': (this: any, params: any) => void
  'photoStrippedSize': (this: any, params: any) => void
  'chatAdminRights': (this: any, params: any) => void
  'chatBannedRights': (this: any, params: any) => void
  'updateChatDefaultBannedRights': (this: any, params: any) => void
  'inputWallPaper': (this: any, params: any) => void
  'inputWallPaperSlug': (this: any, params: any) => void
  'channelParticipantsContacts': (this: any, params: any) => void
  'channelAdminLogEventActionDefaultBannedRights': (this: any, params: any) => void
  'channelAdminLogEventActionStopPoll': (this: any, params: any) => void
  'account.wallPapersNotModified': (this: any, params: any) => void
  'account.wallPapers': (this: any, params: any) => void
  'codeSettings': (this: any, params: any) => void
  'wallPaperSettings': (this: any, params: any) => void
  'autoDownloadSettings': (this: any, params: any) => void
  'account.autoDownloadSettings': (this: any, params: any) => void
  'emojiKeyword': (this: any, params: any) => void
  'emojiKeywordDeleted': (this: any, params: any) => void
  'emojiKeywordsDifference': (this: any, params: any) => void
  'emojiURL': (this: any, params: any) => void
  'emojiLanguage': (this: any, params: any) => void
  'inputPrivacyKeyForwards': (this: any, params: any) => void
  'privacyKeyForwards': (this: any, params: any) => void
  'inputPrivacyKeyProfilePhoto': (this: any, params: any) => void
  'privacyKeyProfilePhoto': (this: any, params: any) => void
  'inputPhotoFileLocation': (this: any, params: any) => void
  'inputPhotoLegacyFileLocation': (this: any, params: any) => void
  'inputPeerPhotoFileLocation': (this: any, params: any) => void
  'inputStickerSetThumb': (this: any, params: any) => void
  'folder': (this: any, params: any) => void
  'dialogFolder': (this: any, params: any) => void
  'inputDialogPeerFolder': (this: any, params: any) => void
  'dialogPeerFolder': (this: any, params: any) => void
  'inputFolderPeer': (this: any, params: any) => void
  'folderPeer': (this: any, params: any) => void
  'updateFolderPeers': (this: any, params: any) => void
  'inputUserFromMessage': (this: any, params: any) => void
  'inputChannelFromMessage': (this: any, params: any) => void
  'inputPeerUserFromMessage': (this: any, params: any) => void
  'inputPeerChannelFromMessage': (this: any, params: any) => void
  'inputPrivacyKeyPhoneNumber': (this: any, params: any) => void
  'privacyKeyPhoneNumber': (this: any, params: any) => void
  'topPeerCategoryForwardUsers': (this: any, params: any) => void
  'topPeerCategoryForwardChats': (this: any, params: any) => void
  'channelAdminLogEventActionChangeLinkedChat': (this: any, params: any) => void
  'messages.searchCounter': (this: any, params: any) => void
  'keyboardButtonUrlAuth': (this: any, params: any) => void
  'inputKeyboardButtonUrlAuth': (this: any, params: any) => void
  'urlAuthResultRequest': (this: any, params: any) => void
  'urlAuthResultAccepted': (this: any, params: any) => void
  'urlAuthResultDefault': (this: any, params: any) => void
  'inputPrivacyValueAllowChatParticipants': (this: any, params: any) => void
  'inputPrivacyValueDisallowChatParticipants': (this: any, params: any) => void
  'privacyValueAllowChatParticipants': (this: any, params: any) => void
  'privacyValueDisallowChatParticipants': (this: any, params: any) => void
  'messageEntityUnderline': (this: any, params: any) => void
  'messageEntityStrike': (this: any, params: any) => void
  'updatePeerSettings': (this: any, params: any) => void
  'channelLocationEmpty': (this: any, params: any) => void
  'channelLocation': (this: any, params: any) => void
  'peerLocated': (this: any, params: any) => void
  'updatePeerLocated': (this: any, params: any) => void
  'channelAdminLogEventActionChangeLocation': (this: any, params: any) => void
  'inputReportReasonGeoIrrelevant': (this: any, params: any) => void
  'channelAdminLogEventActionToggleSlowMode': (this: any, params: any) => void
  'auth.authorizationSignUpRequired': (this: any, params: any) => void
  'payments.paymentVerificationNeeded': (this: any, params: any) => void
  'inputStickerSetAnimatedEmoji': (this: any, params: any) => void
  'updateNewScheduledMessage': (this: any, params: any) => void
  'updateDeleteScheduledMessages': (this: any, params: any) => void
  'restrictionReason': (this: any, params: any) => void
  'inputTheme': (this: any, params: any) => void
  'inputThemeSlug': (this: any, params: any) => void
  'theme': (this: any, params: any) => void
  'account.themesNotModified': (this: any, params: any) => void
  'account.themes': (this: any, params: any) => void
  'updateTheme': (this: any, params: any) => void
  'inputPrivacyKeyAddedByPhone': (this: any, params: any) => void
  'privacyKeyAddedByPhone': (this: any, params: any) => void
  'updateGeoLiveViewed': (this: any, params: any) => void
  'updateLoginToken': (this: any, params: any) => void
  'auth.loginToken': (this: any, params: any) => void
  'auth.loginTokenMigrateTo': (this: any, params: any) => void
  'auth.loginTokenSuccess': (this: any, params: any) => void
  'account.contentSettings': (this: any, params: any) => void
  'messages.inactiveChats': (this: any, params: any) => void
  'baseThemeClassic': (this: any, params: any) => void
  'baseThemeDay': (this: any, params: any) => void
  'baseThemeNight': (this: any, params: any) => void
  'baseThemeTinted': (this: any, params: any) => void
  'baseThemeArctic': (this: any, params: any) => void
  'inputWallPaperNoFile': (this: any, params: any) => void
  'wallPaperNoFile': (this: any, params: any) => void
  'inputThemeSettings': (this: any, params: any) => void
  'themeSettings': (this: any, params: any) => void
  'webPageAttributeTheme': (this: any, params: any) => void
  'updateMessagePollVote': (this: any, params: any) => void
  'messages.votesList': (this: any, params: any) => void
  'keyboardButtonRequestPoll': (this: any, params: any) => void
  'messageEntityBankCard': (this: any, params: any) => void
  'bankCardOpenUrl': (this: any, params: any) => void
  'payments.bankCardData': (this: any, params: any) => void
  'peerSelfLocated': (this: any, params: any) => void
  'dialogFilter': (this: any, params: any) => void
  'dialogFilterSuggested': (this: any, params: any) => void
  'updateDialogFilter': (this: any, params: any) => void
  'updateDialogFilterOrder': (this: any, params: any) => void
  'updateDialogFilters': (this: any, params: any) => void
  'statsDateRangeDays': (this: any, params: any) => void
  'statsAbsValueAndPrev': (this: any, params: any) => void
  'statsPercentValue': (this: any, params: any) => void
  'statsGraphAsync': (this: any, params: any) => void
  'statsGraphError': (this: any, params: any) => void
  'statsGraph': (this: any, params: any) => void
  'stats.broadcastStats': (this: any, params: any) => void
  'inputMediaDice': (this: any, params: any) => void
  'messageMediaDice': (this: any, params: any) => void
  'inputStickerSetDice': (this: any, params: any) => void
  'help.promoDataEmpty': (this: any, params: any) => void
  'help.promoData': (this: any, params: any) => void
  'videoSize': (this: any, params: any) => void
  'updatePhoneCallSignalingData': (this: any, params: any) => void
  'chatInvitePeek': (this: any, params: any) => void
  'statsGroupTopPoster': (this: any, params: any) => void
  'statsGroupTopAdmin': (this: any, params: any) => void
  'statsGroupTopInviter': (this: any, params: any) => void
  'stats.megagroupStats': (this: any, params: any) => void
  'globalPrivacySettings': (this: any, params: any) => void
  'phoneConnectionWebrtc': (this: any, params: any) => void
  'help.countryCode': (this: any, params: any) => void
  'help.country': (this: any, params: any) => void
  'help.countriesListNotModified': (this: any, params: any) => void
  'help.countriesList': (this: any, params: any) => void
  'messageViews': (this: any, params: any) => void
  'updateChannelMessageForwards': (this: any, params: any) => void
  'photoSizeProgressive': (this: any, params: any) => void
  'messages.messageViews': (this: any, params: any) => void
  'updateReadChannelDiscussionInbox': (this: any, params: any) => void
  'updateReadChannelDiscussionOutbox': (this: any, params: any) => void
  'messages.discussionMessage': (this: any, params: any) => void
  'messageReplyHeader': (this: any, params: any) => void
  'messageReplies': (this: any, params: any) => void
  'updatePeerBlocked': (this: any, params: any) => void
  'peerBlocked': (this: any, params: any) => void
  'updateChannelUserTyping': (this: any, params: any) => void
  'inputMessageCallbackQuery': (this: any, params: any) => void
  'channelParticipantLeft': (this: any, params: any) => void
  'channelParticipantsMentions': (this: any, params: any) => void
  'updatePinnedMessages': (this: any, params: any) => void
  'updatePinnedChannelMessages': (this: any, params: any) => void
  'inputMessagesFilterPinned': (this: any, params: any) => void
  'stats.messageStats': (this: any, params: any) => void
  'messageActionGeoProximityReached': (this: any, params: any) => void
  'photoPathSize': (this: any, params: any) => void
  'speakingInGroupCallAction': (this: any, params: any) => void
  'groupCallDiscarded': (this: any, params: any) => void
  'groupCall': (this: any, params: any) => void
  'inputGroupCall': (this: any, params: any) => void
  'messageActionGroupCall': (this: any, params: any) => void
  'messageActionInviteToGroupCall': (this: any, params: any) => void
  'groupCallParticipant': (this: any, params: any) => void
  'updateChat': (this: any, params: any) => void
  'updateGroupCallParticipants': (this: any, params: any) => void
  'updateGroupCall': (this: any, params: any) => void
  'phone.groupCall': (this: any, params: any) => void
  'phone.groupParticipants': (this: any, params: any) => void
  'inlineQueryPeerTypeSameBotPM': (this: any, params: any) => void
  'inlineQueryPeerTypePM': (this: any, params: any) => void
  'inlineQueryPeerTypeChat': (this: any, params: any) => void
  'inlineQueryPeerTypeMegagroup': (this: any, params: any) => void
  'inlineQueryPeerTypeBroadcast': (this: any, params: any) => void
  'channelAdminLogEventActionStartGroupCall': (this: any, params: any) => void
  'channelAdminLogEventActionDiscardGroupCall': (this: any, params: any) => void
  'channelAdminLogEventActionParticipantMute': (this: any, params: any) => void
  'channelAdminLogEventActionParticipantUnmute': (this: any, params: any) => void
  'channelAdminLogEventActionToggleGroupCallSetting': (this: any, params: any) => void
  'inputPaymentCredentialsGooglePay': (this: any, params: any) => void
  'messages.historyImport': (this: any, params: any) => void
  'sendMessageHistoryImportAction': (this: any, params: any) => void
  'messages.historyImportParsed': (this: any, params: any) => void
  'inputReportReasonFake': (this: any, params: any) => void
  'messages.affectedFoundMessages': (this: any, params: any) => void
  'messageActionSetMessagesTTL': (this: any, params: any) => void
  'updatePeerHistoryTTL': (this: any, params: any) => void
  'updateChatParticipant': (this: any, params: any) => void
  'updateChannelParticipant': (this: any, params: any) => void
  'updateBotStopped': (this: any, params: any) => void
  'chatInviteImporter': (this: any, params: any) => void
  'messages.exportedChatInvites': (this: any, params: any) => void
  'messages.exportedChatInvite': (this: any, params: any) => void
  'messages.exportedChatInviteReplaced': (this: any, params: any) => void
  'messages.chatInviteImporters': (this: any, params: any) => void
  'chatAdminWithInvites': (this: any, params: any) => void
  'messages.chatAdminsWithInvites': (this: any, params: any) => void
  'channelAdminLogEventActionParticipantJoinByInvite': (this: any, params: any) => void
  'channelAdminLogEventActionExportedInviteDelete': (this: any, params: any) => void
  'channelAdminLogEventActionExportedInviteRevoke': (this: any, params: any) => void
  'channelAdminLogEventActionExportedInviteEdit': (this: any, params: any) => void
  'channelAdminLogEventActionParticipantVolume': (this: any, params: any) => void
  'channelAdminLogEventActionChangeHistoryTTL': (this: any, params: any) => void
  'messages.checkedHistoryImportPeer': (this: any, params: any) => void
  'inputGroupCallStream': (this: any, params: any) => void
  'phone.joinAsPeers': (this: any, params: any) => void
  'phone.exportedGroupCallInvite': (this: any, params: any) => void
  'inputBotInlineMessageMediaInvoice': (this: any, params: any) => void
  'botInlineMessageMediaInvoice': (this: any, params: any) => void
  'messageActionGroupCallScheduled': (this: any, params: any) => void
  'groupCallParticipantVideoSourceGroup': (this: any, params: any) => void
  'groupCallParticipantVideo': (this: any, params: any) => void
  'updateGroupCallConnection': (this: any, params: any) => void
  'stickers.suggestedShortName': (this: any, params: any) => void
  'botCommandScopeDefault': (this: any, params: any) => void
  'botCommandScopeUsers': (this: any, params: any) => void
  'botCommandScopeChats': (this: any, params: any) => void
  'botCommandScopeChatAdmins': (this: any, params: any) => void
  'botCommandScopePeer': (this: any, params: any) => void
  'botCommandScopePeerAdmins': (this: any, params: any) => void
  'botCommandScopePeerUser': (this: any, params: any) => void
  'account.resetPasswordFailedWait': (this: any, params: any) => void
  'account.resetPasswordRequestedWait': (this: any, params: any) => void
  'account.resetPasswordOk': (this: any, params: any) => void
  'updateBotCommands': (this: any, params: any) => void
  'messageActionSetChatTheme': (this: any, params: any) => void
  'sendMessageChooseStickerAction': (this: any, params: any) => void
  'sponsoredMessage': (this: any, params: any) => void
  'messages.sponsoredMessages': (this: any, params: any) => void
  'inputStickerSetAnimatedEmojiAnimations': (this: any, params: any) => void
  'sendMessageEmojiInteraction': (this: any, params: any) => void
  'sendMessageEmojiInteractionSeen': (this: any, params: any) => void
  'inputBotInlineMessageID64': (this: any, params: any) => void
  'searchResultsCalendarPeriod': (this: any, params: any) => void
  'messages.searchResultsCalendar': (this: any, params: any) => void
  'searchResultPosition': (this: any, params: any) => void
  'messages.searchResultsPositions': (this: any, params: any) => void
  'messageActionChatJoinedByRequest': (this: any, params: any) => void
  'updatePendingJoinRequests': (this: any, params: any) => void
  'updateBotChatInviteRequester': (this: any, params: any) => void
  'channelAdminLogEventActionParticipantJoinByRequest': (this: any, params: any) => void
  'inputKeyboardButtonUserProfile': (this: any, params: any) => void
  'keyboardButtonUserProfile': (this: any, params: any) => void
  'channels.sendAsPeers': (this: any, params: any) => void
  'channelAdminLogEventActionToggleNoForwards': (this: any, params: any) => void
  'messages.stickerSetNotModified': (this: any, params: any) => void
  'users.userFull': (this: any, params: any) => void
  'messages.peerSettings': (this: any, params: any) => void
  'channelAdminLogEventActionSendMessage': (this: any, params: any) => void
  'auth.codeTypeMissedCall': (this: any, params: any) => void
  'auth.sentCodeTypeMissedCall': (this: any, params: any) => void
  'auth.loggedOut': (this: any, params: any) => void
  'updateMessageReactions': (this: any, params: any) => void
  'reactionCount': (this: any, params: any) => void
  'messageReactions': (this: any, params: any) => void
  'messages.messageReactionsList': (this: any, params: any) => void
  'availableReaction': (this: any, params: any) => void
  'messages.availableReactionsNotModified': (this: any, params: any) => void
  'messages.availableReactions': (this: any, params: any) => void
  'messageEntitySpoiler': (this: any, params: any) => void
  'channelAdminLogEventActionChangeAvailableReactions': (this: any, params: any) => void
  'messagePeerReaction': (this: any, params: any) => void
  'groupCallStreamChannel': (this: any, params: any) => void
  'phone.groupCallStreamChannels': (this: any, params: any) => void
  'inputReportReasonIllegalDrugs': (this: any, params: any) => void
  'inputReportReasonPersonalDetails': (this: any, params: any) => void
  'phone.groupCallStreamRtmpUrl': (this: any, params: any) => void
  'attachMenuBotIconColor': (this: any, params: any) => void
  'attachMenuBotIcon': (this: any, params: any) => void
  'attachMenuBot': (this: any, params: any) => void
  'attachMenuBotsNotModified': (this: any, params: any) => void
  'attachMenuBots': (this: any, params: any) => void
  'attachMenuBotsBot': (this: any, params: any) => void
  'updateAttachMenuBots': (this: any, params: any) => void
  'webViewResultUrl': (this: any, params: any) => void
  'webViewMessageSent': (this: any, params: any) => void
  'updateWebViewResultSent': (this: any, params: any) => void
  'keyboardButtonWebView': (this: any, params: any) => void
  'keyboardButtonSimpleWebView': (this: any, params: any) => void
  'messageActionWebViewDataSentMe': (this: any, params: any) => void
  'messageActionWebViewDataSent': (this: any, params: any) => void
  'updateBotMenuButton': (this: any, params: any) => void
  'botMenuButtonDefault': (this: any, params: any) => void
  'botMenuButtonCommands': (this: any, params: any) => void
  'botMenuButton': (this: any, params: any) => void
  'account.savedRingtonesNotModified': (this: any, params: any) => void
  'account.savedRingtones': (this: any, params: any) => void
  'updateSavedRingtones': (this: any, params: any) => void
  'notificationSoundDefault': (this: any, params: any) => void
  'notificationSoundNone': (this: any, params: any) => void
  'notificationSoundLocal': (this: any, params: any) => void
  'notificationSoundRingtone': (this: any, params: any) => void
  'account.savedRingtone': (this: any, params: any) => void
  'account.savedRingtoneConverted': (this: any, params: any) => void
  'attachMenuPeerTypeSameBotPM': (this: any, params: any) => void
  'attachMenuPeerTypeBotPM': (this: any, params: any) => void
  'attachMenuPeerTypePM': (this: any, params: any) => void
  'attachMenuPeerTypeChat': (this: any, params: any) => void
  'attachMenuPeerTypeBroadcast': (this: any, params: any) => void
  'chatInvitePublicJoinRequests': (this: any, params: any) => void
  'inputInvoiceMessage': (this: any, params: any) => void
  'inputInvoiceSlug': (this: any, params: any) => void
  'payments.exportedInvoice': (this: any, params: any) => void
  'updateTranscribedAudio': (this: any, params: any) => void
  'messages.transcribedAudio': (this: any, params: any) => void
  'dialogFilterDefault': (this: any, params: any) => void
  'help.premiumPromo': (this: any, params: any) => void
  'messageEntityCustomEmoji': (this: any, params: any) => void
  'documentAttributeCustomEmoji': (this: any, params: any) => void
  'stickerSetFullCovered': (this: any, params: any) => void
  'inputStorePaymentPremiumSubscription': (this: any, params: any) => void
  'inputStorePaymentGiftPremium': (this: any, params: any) => void
  'messageActionGiftPremium': (this: any, params: any) => void
  'premiumGiftOption': (this: any, params: any) => void
  'inputStickerSetPremiumGifts': (this: any, params: any) => void
  'updateReadFeaturedEmojiStickers': (this: any, params: any) => void
  'inputPrivacyKeyVoiceMessages': (this: any, params: any) => void
  'privacyKeyVoiceMessages': (this: any, params: any) => void
  'paymentFormMethod': (this: any, params: any) => void
  'inputWebFileAudioAlbumThumbLocation': (this: any, params: any) => void
  'emojiStatusEmpty': (this: any, params: any) => void
  'emojiStatus': (this: any, params: any) => void
  'emojiStatusUntil': (this: any, params: any) => void
  'updateUserEmojiStatus': (this: any, params: any) => void
  'updateRecentEmojiStatuses': (this: any, params: any) => void
  'account.emojiStatusesNotModified': (this: any, params: any) => void
  'account.emojiStatuses': (this: any, params: any) => void
  'reactionEmpty': (this: any, params: any) => void
  'reactionEmoji': (this: any, params: any) => void
  'reactionCustomEmoji': (this: any, params: any) => void
  'chatReactionsNone': (this: any, params: any) => void
  'chatReactionsAll': (this: any, params: any) => void
  'chatReactionsSome': (this: any, params: any) => void
  'messages.reactionsNotModified': (this: any, params: any) => void
  'messages.reactions': (this: any, params: any) => void
  'updateRecentReactions': (this: any, params: any) => void
  'updateMoveStickerSetToTop': (this: any, params: any) => void
  'auth.sentCodeTypeEmailCode': (this: any, params: any) => void
  'auth.sentCodeTypeSetUpEmailRequired': (this: any, params: any) => void
  'emailVerifyPurposeLoginSetup': (this: any, params: any) => void
  'emailVerifyPurposeLoginChange': (this: any, params: any) => void
  'emailVerifyPurposePassport': (this: any, params: any) => void
  'emailVerificationCode': (this: any, params: any) => void
  'emailVerificationGoogle': (this: any, params: any) => void
  'emailVerificationApple': (this: any, params: any) => void
  'account.emailVerified': (this: any, params: any) => void
  'account.emailVerifiedLogin': (this: any, params: any) => void
  'premiumSubscriptionOption': (this: any, params: any) => void
  'inputStickerSetEmojiGenericAnimations': (this: any, params: any) => void
  'inputStickerSetEmojiDefaultStatuses': (this: any, params: any) => void
  'sendAsPeer': (this: any, params: any) => void
  'messageExtendedMediaPreview': (this: any, params: any) => void
  'messageExtendedMedia': (this: any, params: any) => void
  'updateMessageExtendedMedia': (this: any, params: any) => void
  'stickerKeyword': (this: any, params: any) => void
  'username': (this: any, params: any) => void
  'channelAdminLogEventActionChangeUsernames': (this: any, params: any) => void
  'channelAdminLogEventActionToggleForum': (this: any, params: any) => void
  'channelAdminLogEventActionCreateTopic': (this: any, params: any) => void
  'channelAdminLogEventActionEditTopic': (this: any, params: any) => void
  'channelAdminLogEventActionDeleteTopic': (this: any, params: any) => void
  'channelAdminLogEventActionPinTopic': (this: any, params: any) => void
  'forumTopicDeleted': (this: any, params: any) => void
  'forumTopic': (this: any, params: any) => void
  'messages.forumTopics': (this: any, params: any) => void
  'messageActionTopicCreate': (this: any, params: any) => void
  'messageActionTopicEdit': (this: any, params: any) => void
  'updateChannelPinnedTopic': (this: any, params: any) => void
  'inputNotifyForumTopic': (this: any, params: any) => void
  'notifyForumTopic': (this: any, params: any) => void
  'inputStickerSetEmojiDefaultTopicIcons': (this: any, params: any) => void
  'messages.sponsoredMessagesEmpty': (this: any, params: any) => void
  'updateChannelPinnedTopics': (this: any, params: any) => void
  'defaultHistoryTTL': (this: any, params: any) => void
  'auth.codeTypeFragmentSms': (this: any, params: any) => void
  'auth.sentCodeTypeFragmentSms': (this: any, params: any) => void
  'exportedContactToken': (this: any, params: any) => void
  'channelAdminLogEventActionToggleAntiSpam': (this: any, params: any) => void
  'messageActionSuggestProfilePhoto': (this: any, params: any) => void
  'stickerSetNoCovered': (this: any, params: any) => void
  'updateUser': (this: any, params: any) => void
  'auth.sentCodeSuccess': (this: any, params: any) => void
  'messageActionRequestedPeer': (this: any, params: any) => void
  'requestPeerTypeUser': (this: any, params: any) => void
  'requestPeerTypeChat': (this: any, params: any) => void
  'requestPeerTypeBroadcast': (this: any, params: any) => void
  'keyboardButtonRequestPeer': (this: any, params: any) => void
  'emojiListNotModified': (this: any, params: any) => void
  'emojiList': (this: any, params: any) => void
  'auth.sentCodeTypeFirebaseSms': (this: any, params: any) => void
  'emojiGroup': (this: any, params: any) => void
  'messages.emojiGroupsNotModified': (this: any, params: any) => void
  'messages.emojiGroups': (this: any, params: any) => void
  'videoSizeEmojiMarkup': (this: any, params: any) => void
  'videoSizeStickerMarkup': (this: any, params: any) => void
  'textWithEntities': (this: any, params: any) => void
  'messages.translateResult': (this: any, params: any) => void
  'autoSaveSettings': (this: any, params: any) => void
  'autoSaveException': (this: any, params: any) => void
  'account.autoSaveSettings': (this: any, params: any) => void
  'updateAutoSaveSettings': (this: any, params: any) => void
  'help.appConfigNotModified': (this: any, params: any) => void
  'help.appConfig': (this: any, params: any) => void
  'inputBotAppID': (this: any, params: any) => void
  'inputBotAppShortName': (this: any, params: any) => void
  'botAppNotModified': (this: any, params: any) => void
  'botApp': (this: any, params: any) => void
  'messages.botApp': (this: any, params: any) => void
  'inlineBotWebView': (this: any, params: any) => void
  'readParticipantDate': (this: any, params: any) => void
  'dialogFilterChatlist': (this: any, params: any) => void
  'inputChatlistDialogFilter': (this: any, params: any) => void
  'exportedChatlistInvite': (this: any, params: any) => void
  'chatlists.exportedChatlistInvite': (this: any, params: any) => void
  'chatlists.exportedInvites': (this: any, params: any) => void
  'chatlists.chatlistInviteAlready': (this: any, params: any) => void
  'chatlists.chatlistInvite': (this: any, params: any) => void
  'chatlists.chatlistUpdates': (this: any, params: any) => void
  'messageActionSetChatWallPaper': (this: any, params: any) => void
  'bots.botInfo': (this: any, params: any) => void
  'inlineQueryPeerTypeBotPM': (this: any, params: any) => void
  'messagePeerVote': (this: any, params: any) => void
  'messagePeerVoteInputOption': (this: any, params: any) => void
  'messagePeerVoteMultiple': (this: any, params: any) => void
  'inputPrivacyKeyAbout': (this: any, params: any) => void
  'privacyKeyAbout': (this: any, params: any) => void
  'storyViews': (this: any, params: any) => void
  'storyItemDeleted': (this: any, params: any) => void
  'storyItemSkipped': (this: any, params: any) => void
  'storyItem': (this: any, params: any) => void
  'updateStory': (this: any, params: any) => void
  'updateReadStories': (this: any, params: any) => void
  'stories.allStoriesNotModified': (this: any, params: any) => void
  'stories.allStories': (this: any, params: any) => void
  'stories.stories': (this: any, params: any) => void
  'inputPrivacyValueAllowCloseFriends': (this: any, params: any) => void
  'privacyValueAllowCloseFriends': (this: any, params: any) => void
  'storyView': (this: any, params: any) => void
  'stories.storyViewsList': (this: any, params: any) => void
  'stories.storyViews': (this: any, params: any) => void
  'inputReplyToMessage': (this: any, params: any) => void
  'inputReplyToStory': (this: any, params: any) => void
  'messageReplyStoryHeader': (this: any, params: any) => void
  'updateStoryID': (this: any, params: any) => void
  'exportedStoryLink': (this: any, params: any) => void
  'inputMediaStory': (this: any, params: any) => void
  'messageMediaStory': (this: any, params: any) => void
  'webPageAttributeStory': (this: any, params: any) => void
  'storiesStealthMode': (this: any, params: any) => void
  'updateStoriesStealthMode': (this: any, params: any) => void
  'mediaAreaCoordinates': (this: any, params: any) => void
  'mediaAreaVenue': (this: any, params: any) => void
  'inputMediaAreaVenue': (this: any, params: any) => void
  'mediaAreaGeoPoint': (this: any, params: any) => void
  'updateSentStoryReaction': (this: any, params: any) => void
  'mediaAreaSuggestedReaction': (this: any, params: any) => void
  'peerStories': (this: any, params: any) => void
  'stories.peerStories': (this: any, params: any) => void
  'messages.webPage': (this: any, params: any) => void
  'inputStorePaymentPremiumGiftCode': (this: any, params: any) => void
  'inputStorePaymentPremiumGiveaway': (this: any, params: any) => void
  'inputInvoicePremiumGiftCode': (this: any, params: any) => void
  'premiumGiftCodeOption': (this: any, params: any) => void
  'payments.checkedGiftCode': (this: any, params: any) => void
  'messageMediaGiveaway': (this: any, params: any) => void
  'messageActionGiftCode': (this: any, params: any) => void
  'messageActionGiveawayLaunch': (this: any, params: any) => void
  'payments.giveawayInfo': (this: any, params: any) => void
  'payments.giveawayInfoResults': (this: any, params: any) => void
  'messageEntityBlockquote': (this: any, params: any) => void
  'prepaidGiveaway': (this: any, params: any) => void
  'inputMediaWebPage': (this: any, params: any) => void
  'inputBotInlineMessageMediaWebPage': (this: any, params: any) => void
  'botInlineMessageMediaWebPage': (this: any, params: any) => void
  'boost': (this: any, params: any) => void
  'premium.boostsList': (this: any, params: any) => void
  'myBoost': (this: any, params: any) => void
  'premium.myBoosts': (this: any, params: any) => void
  'premium.boostsStatus': (this: any, params: any) => void
  'updateBotChatBoost': (this: any, params: any) => void
  'updateChannelViewForumAsMessages': (this: any, params: any) => void
  'messageActionGiveawayResults': (this: any, params: any) => void
  'updatePeerWallpaper': (this: any, params: any) => void
  'storyFwdHeader': (this: any, params: any) => void
  'postInteractionCountersMessage': (this: any, params: any) => void
  'postInteractionCountersStory': (this: any, params: any) => void
  'stats.storyStats': (this: any, params: any) => void
  'publicForwardMessage': (this: any, params: any) => void
  'publicForwardStory': (this: any, params: any) => void
  'stats.publicForwards': (this: any, params: any) => void
  'peerColor': (this: any, params: any) => void
  'help.peerColorSet': (this: any, params: any) => void
  'help.peerColorProfileSet': (this: any, params: any) => void
  'help.peerColorOption': (this: any, params: any) => void
  'help.peerColorsNotModified': (this: any, params: any) => void
  'help.peerColors': (this: any, params: any) => void
  'messageMediaGiveawayResults': (this: any, params: any) => void
  'storyReaction': (this: any, params: any) => void
  'storyReactionPublicForward': (this: any, params: any) => void
  'storyReactionPublicRepost': (this: any, params: any) => void
  'stories.storyReactionsList': (this: any, params: any) => void
  'storyViewPublicForward': (this: any, params: any) => void
  'storyViewPublicRepost': (this: any, params: any) => void
  'channelAdminLogEventActionChangePeerColor': (this: any, params: any) => void
  'channelAdminLogEventActionChangeProfilePeerColor': (this: any, params: any) => void
  'channelAdminLogEventActionChangeWallpaper': (this: any, params: any) => void
  'channelAdminLogEventActionChangeEmojiStatus': (this: any, params: any) => void
  'inputStickerSetEmojiChannelDefaultStatuses': (this: any, params: any) => void
  'mediaAreaChannelPost': (this: any, params: any) => void
  'inputMediaAreaChannelPost': (this: any, params: any) => void
  'updateBotMessageReaction': (this: any, params: any) => void
  'updateBotMessageReactions': (this: any, params: any) => void
  'savedDialog': (this: any, params: any) => void
  'updateSavedDialogPinned': (this: any, params: any) => void
  'updatePinnedSavedDialogs': (this: any, params: any) => void
  'messages.savedDialogs': (this: any, params: any) => void
  'messages.savedDialogsSlice': (this: any, params: any) => void
  'messages.savedDialogsNotModified': (this: any, params: any) => void
  'savedReactionTag': (this: any, params: any) => void
  'messages.savedReactionTagsNotModified': (this: any, params: any) => void
  'messages.savedReactionTags': (this: any, params: any) => void
  'updateSavedReactionTags': (this: any, params: any) => void
  'outboxReadDate': (this: any, params: any) => void
  'messageActionBoostApply': (this: any, params: any) => void
  'channelAdminLogEventActionChangeEmojiStickerSet': (this: any, params: any) => void
  'smsjobs.eligibleToJoin': (this: any, params: any) => void
  'smsjobs.status': (this: any, params: any) => void
  'updateSmsJob': (this: any, params: any) => void
  'smsJob': (this: any, params: any) => void
  'businessWeeklyOpen': (this: any, params: any) => void
  'businessWorkHours': (this: any, params: any) => void
  'businessLocation': (this: any, params: any) => void
  'inputBusinessRecipients': (this: any, params: any) => void
  'businessRecipients': (this: any, params: any) => void
  'businessAwayMessageScheduleAlways': (this: any, params: any) => void
  'businessAwayMessageScheduleOutsideWorkHours': (this: any, params: any) => void
  'businessAwayMessageScheduleCustom': (this: any, params: any) => void
  'inputBusinessGreetingMessage': (this: any, params: any) => void
  'businessGreetingMessage': (this: any, params: any) => void
  'inputBusinessAwayMessage': (this: any, params: any) => void
  'businessAwayMessage': (this: any, params: any) => void
  'timezone': (this: any, params: any) => void
  'help.timezonesListNotModified': (this: any, params: any) => void
  'help.timezonesList': (this: any, params: any) => void
  'quickReply': (this: any, params: any) => void
  'inputQuickReplyShortcut': (this: any, params: any) => void
  'inputQuickReplyShortcutId': (this: any, params: any) => void
  'messages.quickReplies': (this: any, params: any) => void
  'messages.quickRepliesNotModified': (this: any, params: any) => void
  'updateQuickReplies': (this: any, params: any) => void
  'updateNewQuickReply': (this: any, params: any) => void
  'updateDeleteQuickReply': (this: any, params: any) => void
  'updateQuickReplyMessage': (this: any, params: any) => void
  'updateDeleteQuickReplyMessages': (this: any, params: any) => void
  'connectedBot': (this: any, params: any) => void
  'account.connectedBots': (this: any, params: any) => void
  'messages.dialogFilters': (this: any, params: any) => void
  'birthday': (this: any, params: any) => void
  'updateBotBusinessConnect': (this: any, params: any) => void
  'updateBotNewBusinessMessage': (this: any, params: any) => void
  'updateBotEditBusinessMessage': (this: any, params: any) => void
  'updateBotDeleteBusinessMessage': (this: any, params: any) => void
  'botBusinessConnection': (this: any, params: any) => void
  'inputBusinessIntro': (this: any, params: any) => void
  'businessIntro': (this: any, params: any) => void
  'messages.myStickers': (this: any, params: any) => void
  'inputCollectibleUsername': (this: any, params: any) => void
  'inputCollectiblePhone': (this: any, params: any) => void
  'fragment.collectibleInfo': (this: any, params: any) => void
  'inputBusinessBotRecipients': (this: any, params: any) => void
  'businessBotRecipients': (this: any, params: any) => void
  'contactBirthday': (this: any, params: any) => void
  'contacts.contactBirthdays': (this: any, params: any) => void
  'inputPrivacyKeyBirthday': (this: any, params: any) => void
  'privacyKeyBirthday': (this: any, params: any) => void
  'inputPrivacyValueAllowPremium': (this: any, params: any) => void
  'privacyValueAllowPremium': (this: any, params: any) => void
  'missingInvitee': (this: any, params: any) => void
  'messages.invitedUsers': (this: any, params: any) => void
  'inputBusinessChatLink': (this: any, params: any) => void
  'businessChatLink': (this: any, params: any) => void
  'account.businessChatLinks': (this: any, params: any) => void
  'account.resolvedBusinessChatLinks': (this: any, params: any) => void
  'requestedPeerUser': (this: any, params: any) => void
  'requestedPeerChat': (this: any, params: any) => void
  'requestedPeerChannel': (this: any, params: any) => void
  'messageActionRequestedPeerSentMe': (this: any, params: any) => void
  'inputKeyboardButtonRequestPeer': (this: any, params: any) => void
  'sponsoredMessageReportOption': (this: any, params: any) => void
  'channels.sponsoredMessageReportResultChooseOption': (this: any, params: any) => void
  'channels.sponsoredMessageReportResultAdsHidden': (this: any, params: any) => void
  'channels.sponsoredMessageReportResultReported': (this: any, params: any) => void
  'stats.broadcastRevenueStats': (this: any, params: any) => void
  'stats.broadcastRevenueWithdrawalUrl': (this: any, params: any) => void
  'broadcastRevenueTransactionProceeds': (this: any, params: any) => void
  'broadcastRevenueTransactionWithdrawal': (this: any, params: any) => void
  'broadcastRevenueTransactionRefund': (this: any, params: any) => void
  'stats.broadcastRevenueTransactions': (this: any, params: any) => void
  'webPageAttributeStickerSet': (this: any, params: any) => void
  'reactionNotificationsFromContacts': (this: any, params: any) => void
  'reactionNotificationsFromAll': (this: any, params: any) => void
  'reactionsNotifySettings': (this: any, params: any) => void
  'updateNewStoryReaction': (this: any, params: any) => void
  'auth.sentCodeTypeSmsWord': (this: any, params: any) => void
  'auth.sentCodeTypeSmsPhrase': (this: any, params: any) => void
  'emojiGroupGreeting': (this: any, params: any) => void
  'emojiGroupPremium': (this: any, params: any) => void
  'broadcastRevenueBalances': (this: any, params: any) => void
  'updateBroadcastRevenueTransactions': (this: any, params: any) => void
  'availableEffect': (this: any, params: any) => void
  'messages.availableEffectsNotModified': (this: any, params: any) => void
  'messages.availableEffects': (this: any, params: any) => void
  'factCheck': (this: any, params: any) => void
  'starsTransactionPeerUnsupported': (this: any, params: any) => void
  'starsTransactionPeerAppStore': (this: any, params: any) => void
  'starsTransactionPeerPlayMarket': (this: any, params: any) => void
  'starsTransactionPeerPremiumBot': (this: any, params: any) => void
  'starsTransactionPeerFragment': (this: any, params: any) => void
  'starsTransactionPeer': (this: any, params: any) => void
  'starsTopupOption': (this: any, params: any) => void
  'inputInvoiceStars': (this: any, params: any) => void
  'starsTransaction': (this: any, params: any) => void
  'payments.starsStatus': (this: any, params: any) => void
  'updateStarsBalance': (this: any, params: any) => void
  'payments.paymentFormStars': (this: any, params: any) => void
  'payments.paymentReceiptStars': (this: any, params: any) => void
  'mediaAreaUrl': (this: any, params: any) => void
  'foundStory': (this: any, params: any) => void
  'stories.foundStories': (this: any, params: any) => void
  'geoPointAddress': (this: any, params: any) => void
  'updateBusinessBotCallbackQuery': (this: any, params: any) => void
  'starsRevenueStatus': (this: any, params: any) => void
  'payments.starsRevenueStats': (this: any, params: any) => void
  'payments.starsRevenueWithdrawalUrl': (this: any, params: any) => void
  'updateStarsRevenueStatus': (this: any, params: any) => void
  'inputMediaPaidMedia': (this: any, params: any) => void
  'messageMediaPaidMedia': (this: any, params: any) => void
  'starsTransactionPeerAds': (this: any, params: any) => void
  'payments.starsRevenueAdsAccountUrl': (this: any, params: any) => void
  'inputStarsTransaction': (this: any, params: any) => void
  'messageActionPaymentRefunded': (this: any, params: any) => void
  'inputStorePaymentStarsTopup': (this: any, params: any) => void
  'inputStorePaymentStarsGift': (this: any, params: any) => void
  'starsGiftOption': (this: any, params: any) => void
  'messageActionGiftStars': (this: any, params: any) => void
  'topPeerCategoryBotsApp': (this: any, params: any) => void
  'bots.popularAppBots': (this: any, params: any) => void
  'botPreviewMedia': (this: any, params: any) => void
  'bots.previewInfo': (this: any, params: any) => void
  'mediaAreaWeather': (this: any, params: any) => void
  'inputFileStoryDocument': (this: any, params: any) => void
  'inputInvoiceChatInviteSubscription': (this: any, params: any) => void
  'starsSubscriptionPricing': (this: any, params: any) => void
  'starsSubscription': (this: any, params: any) => void
  'reactionPaid': (this: any, params: any) => void
  'messageReactor': (this: any, params: any) => void
  'channelAdminLogEventActionToggleSignatureProfiles': (this: any, params: any) => void
  'updateBotPurchasedPaidMedia': (this: any, params: any) => void
  'channelAdminLogEventActionParticipantSubExtend': (this: any, params: any) => void
  'inputStorePaymentStarsGiveaway': (this: any, params: any) => void
  'messageActionPrizeStars': (this: any, params: any) => void
  'updatePaidReactionPrivacy': (this: any, params: any) => void
  'starsGiveawayOption': (this: any, params: any) => void
  'starsGiveawayWinnersOption': (this: any, params: any) => void
  'prepaidStarsGiveaway': (this: any, params: any) => void
  'keyboardButtonCopy': (this: any, params: any) => void
  'starGift': (this: any, params: any) => void
  'payments.starGiftsNotModified': (this: any, params: any) => void
  'payments.starGifts': (this: any, params: any) => void
  'inputInvoiceStarGift': (this: any, params: any) => void
  'payments.paymentFormStarGift': (this: any, params: any) => void
  'messageActionStarGift': (this: any, params: any) => void
  'userStarGift': (this: any, params: any) => void
  'payments.userStarGifts': (this: any, params: any) => void
  'messageReportOption': (this: any, params: any) => void
  'reportResultChooseOption': (this: any, params: any) => void
  'reportResultAddComment': (this: any, params: any) => void
  'reportResultReported': (this: any, params: any) => void
  'starsTransactionPeerAPI': (this: any, params: any) => void
  'messages.botPreparedInlineMessage': (this: any, params: any) => void
  'messages.preparedInlineMessage': (this: any, params: any) => void
  'botAppSettings': (this: any, params: any) => void
  'inputPrivacyValueAllowBots': (this: any, params: any) => void
  'inputPrivacyValueDisallowBots': (this: any, params: any) => void
  'privacyValueAllowBots': (this: any, params: any) => void
  'privacyValueDisallowBots': (this: any, params: any) => void
  'inputPrivacyKeyStarGiftsAutoSave': (this: any, params: any) => void
  'privacyKeyStarGiftsAutoSave': (this: any, params: any) => void
  'starRefProgram': (this: any, params: any) => void
  'connectedBotStarRef': (this: any, params: any) => void
  'payments.connectedStarRefBots': (this: any, params: any) => void
  'payments.suggestedStarRefBots': (this: any, params: any) => void
  'starsAmount': (this: any, params: any) => void
  'messages.foundStickersNotModified': (this: any, params: any) => void
  'messages.foundStickers': (this: any, params: any) => void
  'invokeAfterMsg': (this: any, params: any) => void
  'invokeAfterMsgs': (this: any, params: any) => void
  'auth.sendCode': (this: any, params: any) => void
  'auth.signUp': (this: any, params: any) => void
  'auth.signIn': (this: any, params: any) => void
  'auth.logOut': (this: any, params: any) => void
  'auth.resetAuthorizations': (this: any, params: any) => void
  'auth.exportAuthorization': (this: any, params: any) => void
  'auth.importAuthorization': (this: any, params: any) => void
  'auth.bindTempAuthKey': (this: any, params: any) => void
  'account.registerDevice': (this: any, params: any) => void
  'account.unregisterDevice': (this: any, params: any) => void
  'account.updateNotifySettings': (this: any, params: any) => void
  'account.getNotifySettings': (this: any, params: any) => void
  'account.resetNotifySettings': (this: any, params: any) => void
  'account.updateProfile': (this: any, params: any) => void
  'account.updateStatus': (this: any, params: any) => void
  'account.getWallPapers': (this: any, params: any) => void
  'account.reportPeer': (this: any, params: any) => void
  'users.getUsers': (this: any, params: any) => void
  'users.getFullUser': (this: any, params: any) => void
  'contacts.getContactIDs': (this: any, params: any) => void
  'contacts.getStatuses': (this: any, params: any) => void
  'contacts.getContacts': (this: any, params: any) => void
  'contacts.importContacts': (this: any, params: any) => void
  'contacts.deleteContacts': (this: any, params: any) => void
  'contacts.deleteByPhones': (this: any, params: any) => void
  'contacts.block': (this: any, params: any) => void
  'contacts.unblock': (this: any, params: any) => void
  'contacts.getBlocked': (this: any, params: any) => void
  'messages.getMessages': (this: any, params: any) => void
  'messages.getDialogs': (this: any, params: any) => void
  'messages.getHistory': (this: any, params: any) => void
  'messages.search': (this: any, params: any) => void
  'messages.readHistory': (this: any, params: any) => void
  'messages.deleteHistory': (this: any, params: any) => void
  'messages.deleteMessages': (this: any, params: any) => void
  'messages.receivedMessages': (this: any, params: any) => void
  'messages.setTyping': (this: any, params: any) => void
  'messages.sendMessage': (this: any, params: any) => void
  'messages.sendMedia': (this: any, params: any) => void
  'messages.forwardMessages': (this: any, params: any) => void
  'messages.reportSpam': (this: any, params: any) => void
  'messages.getPeerSettings': (this: any, params: any) => void
  'messages.report': (this: any, params: any) => void
  'messages.getChats': (this: any, params: any) => void
  'messages.getFullChat': (this: any, params: any) => void
  'messages.editChatTitle': (this: any, params: any) => void
  'messages.editChatPhoto': (this: any, params: any) => void
  'messages.addChatUser': (this: any, params: any) => void
  'messages.deleteChatUser': (this: any, params: any) => void
  'messages.createChat': (this: any, params: any) => void
  'updates.getState': (this: any, params: any) => void
  'updates.getDifference': (this: any, params: any) => void
  'photos.updateProfilePhoto': (this: any, params: any) => void
  'photos.uploadProfilePhoto': (this: any, params: any) => void
  'photos.deletePhotos': (this: any, params: any) => void
  'upload.saveFilePart': (this: any, params: any) => void
  'upload.getFile': (this: any, params: any) => void
  'help.getConfig': (this: any, params: any) => void
  'help.getNearestDc': (this: any, params: any) => void
  'help.getAppUpdate': (this: any, params: any) => void
  'help.getInviteText': (this: any, params: any) => void
  'photos.getUserPhotos': (this: any, params: any) => void
  'messages.getDhConfig': (this: any, params: any) => void
  'messages.requestEncryption': (this: any, params: any) => void
  'messages.acceptEncryption': (this: any, params: any) => void
  'messages.discardEncryption': (this: any, params: any) => void
  'messages.setEncryptedTyping': (this: any, params: any) => void
  'messages.readEncryptedHistory': (this: any, params: any) => void
  'messages.sendEncrypted': (this: any, params: any) => void
  'messages.sendEncryptedFile': (this: any, params: any) => void
  'messages.sendEncryptedService': (this: any, params: any) => void
  'messages.receivedQueue': (this: any, params: any) => void
  'messages.reportEncryptedSpam': (this: any, params: any) => void
  'upload.saveBigFilePart': (this: any, params: any) => void
  'initConnection': (this: any, params: any) => void
  'help.getSupport': (this: any, params: any) => void
  'messages.readMessageContents': (this: any, params: any) => void
  'account.checkUsername': (this: any, params: any) => void
  'account.updateUsername': (this: any, params: any) => void
  'contacts.search': (this: any, params: any) => void
  'account.getPrivacy': (this: any, params: any) => void
  'account.setPrivacy': (this: any, params: any) => void
  'account.deleteAccount': (this: any, params: any) => void
  'account.getAccountTTL': (this: any, params: any) => void
  'account.setAccountTTL': (this: any, params: any) => void
  'invokeWithLayer': (this: any, params: any) => void
  'contacts.resolveUsername': (this: any, params: any) => void
  'account.sendChangePhoneCode': (this: any, params: any) => void
  'account.changePhone': (this: any, params: any) => void
  'messages.getStickers': (this: any, params: any) => void
  'messages.getAllStickers': (this: any, params: any) => void
  'account.updateDeviceLocked': (this: any, params: any) => void
  'auth.importBotAuthorization': (this: any, params: any) => void
  'messages.getWebPagePreview': (this: any, params: any) => void
  'account.getAuthorizations': (this: any, params: any) => void
  'account.resetAuthorization': (this: any, params: any) => void
  'account.getPassword': (this: any, params: any) => void
  'account.getPasswordSettings': (this: any, params: any) => void
  'account.updatePasswordSettings': (this: any, params: any) => void
  'auth.checkPassword': (this: any, params: any) => void
  'auth.requestPasswordRecovery': (this: any, params: any) => void
  'auth.recoverPassword': (this: any, params: any) => void
  'invokeWithoutUpdates': (this: any, params: any) => void
  'messages.exportChatInvite': (this: any, params: any) => void
  'messages.checkChatInvite': (this: any, params: any) => void
  'messages.importChatInvite': (this: any, params: any) => void
  'messages.getStickerSet': (this: any, params: any) => void
  'messages.installStickerSet': (this: any, params: any) => void
  'messages.uninstallStickerSet': (this: any, params: any) => void
  'messages.startBot': (this: any, params: any) => void
  'messages.getMessagesViews': (this: any, params: any) => void
  'channels.readHistory': (this: any, params: any) => void
  'channels.deleteMessages': (this: any, params: any) => void
  'channels.reportSpam': (this: any, params: any) => void
  'channels.getMessages': (this: any, params: any) => void
  'channels.getParticipants': (this: any, params: any) => void
  'channels.getParticipant': (this: any, params: any) => void
  'channels.getChannels': (this: any, params: any) => void
  'channels.getFullChannel': (this: any, params: any) => void
  'channels.createChannel': (this: any, params: any) => void
  'channels.editAdmin': (this: any, params: any) => void
  'channels.editTitle': (this: any, params: any) => void
  'channels.editPhoto': (this: any, params: any) => void
  'channels.checkUsername': (this: any, params: any) => void
  'channels.updateUsername': (this: any, params: any) => void
  'channels.joinChannel': (this: any, params: any) => void
  'channels.leaveChannel': (this: any, params: any) => void
  'channels.inviteToChannel': (this: any, params: any) => void
  'channels.deleteChannel': (this: any, params: any) => void
  'updates.getChannelDifference': (this: any, params: any) => void
  'messages.editChatAdmin': (this: any, params: any) => void
  'messages.migrateChat': (this: any, params: any) => void
  'messages.searchGlobal': (this: any, params: any) => void
  'messages.reorderStickerSets': (this: any, params: any) => void
  'messages.getDocumentByHash': (this: any, params: any) => void
  'messages.getSavedGifs': (this: any, params: any) => void
  'messages.saveGif': (this: any, params: any) => void
  'messages.getInlineBotResults': (this: any, params: any) => void
  'messages.setInlineBotResults': (this: any, params: any) => void
  'messages.sendInlineBotResult': (this: any, params: any) => void
  'channels.exportMessageLink': (this: any, params: any) => void
  'channels.toggleSignatures': (this: any, params: any) => void
  'auth.resendCode': (this: any, params: any) => void
  'auth.cancelCode': (this: any, params: any) => void
  'messages.getMessageEditData': (this: any, params: any) => void
  'messages.editMessage': (this: any, params: any) => void
  'messages.editInlineBotMessage': (this: any, params: any) => void
  'messages.getBotCallbackAnswer': (this: any, params: any) => void
  'messages.setBotCallbackAnswer': (this: any, params: any) => void
  'contacts.getTopPeers': (this: any, params: any) => void
  'contacts.resetTopPeerRating': (this: any, params: any) => void
  'messages.getPeerDialogs': (this: any, params: any) => void
  'messages.saveDraft': (this: any, params: any) => void
  'messages.getAllDrafts': (this: any, params: any) => void
  'messages.getFeaturedStickers': (this: any, params: any) => void
  'messages.readFeaturedStickers': (this: any, params: any) => void
  'messages.getRecentStickers': (this: any, params: any) => void
  'messages.saveRecentSticker': (this: any, params: any) => void
  'messages.clearRecentStickers': (this: any, params: any) => void
  'messages.getArchivedStickers': (this: any, params: any) => void
  'account.sendConfirmPhoneCode': (this: any, params: any) => void
  'account.confirmPhone': (this: any, params: any) => void
  'channels.getAdminedPublicChannels': (this: any, params: any) => void
  'messages.getMaskStickers': (this: any, params: any) => void
  'messages.getAttachedStickers': (this: any, params: any) => void
  'auth.dropTempAuthKeys': (this: any, params: any) => void
  'messages.setGameScore': (this: any, params: any) => void
  'messages.setInlineGameScore': (this: any, params: any) => void
  'messages.getGameHighScores': (this: any, params: any) => void
  'messages.getInlineGameHighScores': (this: any, params: any) => void
  'messages.getCommonChats': (this: any, params: any) => void
  'help.setBotUpdatesStatus': (this: any, params: any) => void
  'messages.getWebPage': (this: any, params: any) => void
  'messages.toggleDialogPin': (this: any, params: any) => void
  'messages.reorderPinnedDialogs': (this: any, params: any) => void
  'messages.getPinnedDialogs': (this: any, params: any) => void
  'bots.sendCustomRequest': (this: any, params: any) => void
  'bots.answerWebhookJSONQuery': (this: any, params: any) => void
  'upload.getWebFile': (this: any, params: any) => void
  'payments.getPaymentForm': (this: any, params: any) => void
  'payments.getPaymentReceipt': (this: any, params: any) => void
  'payments.validateRequestedInfo': (this: any, params: any) => void
  'payments.sendPaymentForm': (this: any, params: any) => void
  'account.getTmpPassword': (this: any, params: any) => void
  'payments.getSavedInfo': (this: any, params: any) => void
  'payments.clearSavedInfo': (this: any, params: any) => void
  'messages.setBotShippingResults': (this: any, params: any) => void
  'messages.setBotPrecheckoutResults': (this: any, params: any) => void
  'stickers.createStickerSet': (this: any, params: any) => void
  'stickers.removeStickerFromSet': (this: any, params: any) => void
  'stickers.changeStickerPosition': (this: any, params: any) => void
  'stickers.addStickerToSet': (this: any, params: any) => void
  'messages.uploadMedia': (this: any, params: any) => void
  'phone.getCallConfig': (this: any, params: any) => void
  'phone.requestCall': (this: any, params: any) => void
  'phone.acceptCall': (this: any, params: any) => void
  'phone.confirmCall': (this: any, params: any) => void
  'phone.receivedCall': (this: any, params: any) => void
  'phone.discardCall': (this: any, params: any) => void
  'phone.setCallRating': (this: any, params: any) => void
  'phone.saveCallDebug': (this: any, params: any) => void
  'upload.getCdnFile': (this: any, params: any) => void
  'upload.reuploadCdnFile': (this: any, params: any) => void
  'help.getCdnConfig': (this: any, params: any) => void
  'langpack.getLangPack': (this: any, params: any) => void
  'langpack.getStrings': (this: any, params: any) => void
  'langpack.getDifference': (this: any, params: any) => void
  'langpack.getLanguages': (this: any, params: any) => void
  'channels.editBanned': (this: any, params: any) => void
  'channels.getAdminLog': (this: any, params: any) => void
  'upload.getCdnFileHashes': (this: any, params: any) => void
  'messages.sendScreenshotNotification': (this: any, params: any) => void
  'channels.setStickers': (this: any, params: any) => void
  'messages.getFavedStickers': (this: any, params: any) => void
  'messages.faveSticker': (this: any, params: any) => void
  'channels.readMessageContents': (this: any, params: any) => void
  'contacts.resetSaved': (this: any, params: any) => void
  'messages.getUnreadMentions': (this: any, params: any) => void
  'channels.deleteHistory': (this: any, params: any) => void
  'help.getRecentMeUrls': (this: any, params: any) => void
  'channels.togglePreHistoryHidden': (this: any, params: any) => void
  'messages.readMentions': (this: any, params: any) => void
  'messages.getRecentLocations': (this: any, params: any) => void
  'messages.sendMultiMedia': (this: any, params: any) => void
  'messages.uploadEncryptedFile': (this: any, params: any) => void
  'account.getWebAuthorizations': (this: any, params: any) => void
  'account.resetWebAuthorization': (this: any, params: any) => void
  'account.resetWebAuthorizations': (this: any, params: any) => void
  'messages.searchStickerSets': (this: any, params: any) => void
  'upload.getFileHashes': (this: any, params: any) => void
  'help.getTermsOfServiceUpdate': (this: any, params: any) => void
  'help.acceptTermsOfService': (this: any, params: any) => void
  'account.getAllSecureValues': (this: any, params: any) => void
  'account.getSecureValue': (this: any, params: any) => void
  'account.saveSecureValue': (this: any, params: any) => void
  'account.deleteSecureValue': (this: any, params: any) => void
  'users.setSecureValueErrors': (this: any, params: any) => void
  'account.getAuthorizationForm': (this: any, params: any) => void
  'account.acceptAuthorization': (this: any, params: any) => void
  'account.sendVerifyPhoneCode': (this: any, params: any) => void
  'account.verifyPhone': (this: any, params: any) => void
  'account.sendVerifyEmailCode': (this: any, params: any) => void
  'account.verifyEmail': (this: any, params: any) => void
  'help.getDeepLinkInfo': (this: any, params: any) => void
  'contacts.getSaved': (this: any, params: any) => void
  'channels.getLeftChannels': (this: any, params: any) => void
  'account.initTakeoutSession': (this: any, params: any) => void
  'account.finishTakeoutSession': (this: any, params: any) => void
  'messages.getSplitRanges': (this: any, params: any) => void
  'invokeWithMessagesRange': (this: any, params: any) => void
  'invokeWithTakeout': (this: any, params: any) => void
  'messages.markDialogUnread': (this: any, params: any) => void
  'messages.getDialogUnreadMarks': (this: any, params: any) => void
  'contacts.toggleTopPeers': (this: any, params: any) => void
  'messages.clearAllDrafts': (this: any, params: any) => void
  'help.getAppConfig': (this: any, params: any) => void
  'help.saveAppLog': (this: any, params: any) => void
  'help.getPassportConfig': (this: any, params: any) => void
  'langpack.getLanguage': (this: any, params: any) => void
  'messages.updatePinnedMessage': (this: any, params: any) => void
  'account.confirmPasswordEmail': (this: any, params: any) => void
  'account.resendPasswordEmail': (this: any, params: any) => void
  'account.cancelPasswordEmail': (this: any, params: any) => void
  'help.getSupportName': (this: any, params: any) => void
  'help.getUserInfo': (this: any, params: any) => void
  'help.editUserInfo': (this: any, params: any) => void
  'account.getContactSignUpNotification': (this: any, params: any) => void
  'account.setContactSignUpNotification': (this: any, params: any) => void
  'account.getNotifyExceptions': (this: any, params: any) => void
  'messages.sendVote': (this: any, params: any) => void
  'messages.getPollResults': (this: any, params: any) => void
  'messages.getOnlines': (this: any, params: any) => void
  'messages.editChatAbout': (this: any, params: any) => void
  'messages.editChatDefaultBannedRights': (this: any, params: any) => void
  'account.getWallPaper': (this: any, params: any) => void
  'account.uploadWallPaper': (this: any, params: any) => void
  'account.saveWallPaper': (this: any, params: any) => void
  'account.installWallPaper': (this: any, params: any) => void
  'account.resetWallPapers': (this: any, params: any) => void
  'account.getAutoDownloadSettings': (this: any, params: any) => void
  'account.saveAutoDownloadSettings': (this: any, params: any) => void
  'messages.getEmojiKeywords': (this: any, params: any) => void
  'messages.getEmojiKeywordsDifference': (this: any, params: any) => void
  'messages.getEmojiKeywordsLanguages': (this: any, params: any) => void
  'messages.getEmojiURL': (this: any, params: any) => void
  'folders.editPeerFolders': (this: any, params: any) => void
  'messages.getSearchCounters': (this: any, params: any) => void
  'channels.getGroupsForDiscussion': (this: any, params: any) => void
  'channels.setDiscussionGroup': (this: any, params: any) => void
  'messages.requestUrlAuth': (this: any, params: any) => void
  'messages.acceptUrlAuth': (this: any, params: any) => void
  'messages.hidePeerSettingsBar': (this: any, params: any) => void
  'contacts.addContact': (this: any, params: any) => void
  'contacts.acceptContact': (this: any, params: any) => void
  'channels.editCreator': (this: any, params: any) => void
  'contacts.getLocated': (this: any, params: any) => void
  'channels.editLocation': (this: any, params: any) => void
  'channels.toggleSlowMode': (this: any, params: any) => void
  'messages.getScheduledHistory': (this: any, params: any) => void
  'messages.getScheduledMessages': (this: any, params: any) => void
  'messages.sendScheduledMessages': (this: any, params: any) => void
  'messages.deleteScheduledMessages': (this: any, params: any) => void
  'account.uploadTheme': (this: any, params: any) => void
  'account.createTheme': (this: any, params: any) => void
  'account.updateTheme': (this: any, params: any) => void
  'account.saveTheme': (this: any, params: any) => void
  'account.installTheme': (this: any, params: any) => void
  'account.getTheme': (this: any, params: any) => void
  'account.getThemes': (this: any, params: any) => void
  'auth.exportLoginToken': (this: any, params: any) => void
  'auth.importLoginToken': (this: any, params: any) => void
  'auth.acceptLoginToken': (this: any, params: any) => void
  'account.setContentSettings': (this: any, params: any) => void
  'account.getContentSettings': (this: any, params: any) => void
  'channels.getInactiveChannels': (this: any, params: any) => void
  'account.getMultiWallPapers': (this: any, params: any) => void
  'messages.getPollVotes': (this: any, params: any) => void
  'messages.toggleStickerSets': (this: any, params: any) => void
  'payments.getBankCardData': (this: any, params: any) => void
  'messages.getDialogFilters': (this: any, params: any) => void
  'messages.getSuggestedDialogFilters': (this: any, params: any) => void
  'messages.updateDialogFilter': (this: any, params: any) => void
  'messages.updateDialogFiltersOrder': (this: any, params: any) => void
  'stats.getBroadcastStats': (this: any, params: any) => void
  'stats.loadAsyncGraph': (this: any, params: any) => void
  'stickers.setStickerSetThumb': (this: any, params: any) => void
  'bots.setBotCommands': (this: any, params: any) => void
  'messages.getOldFeaturedStickers': (this: any, params: any) => void
  'help.getPromoData': (this: any, params: any) => void
  'help.hidePromoData': (this: any, params: any) => void
  'phone.sendSignalingData': (this: any, params: any) => void
  'stats.getMegagroupStats': (this: any, params: any) => void
  'account.getGlobalPrivacySettings': (this: any, params: any) => void
  'account.setGlobalPrivacySettings': (this: any, params: any) => void
  'help.dismissSuggestion': (this: any, params: any) => void
  'help.getCountriesList': (this: any, params: any) => void
  'messages.getReplies': (this: any, params: any) => void
  'messages.getDiscussionMessage': (this: any, params: any) => void
  'messages.readDiscussion': (this: any, params: any) => void
  'contacts.blockFromReplies': (this: any, params: any) => void
  'stats.getMessagePublicForwards': (this: any, params: any) => void
  'stats.getMessageStats': (this: any, params: any) => void
  'messages.unpinAllMessages': (this: any, params: any) => void
  'phone.createGroupCall': (this: any, params: any) => void
  'phone.joinGroupCall': (this: any, params: any) => void
  'phone.leaveGroupCall': (this: any, params: any) => void
  'phone.inviteToGroupCall': (this: any, params: any) => void
  'phone.discardGroupCall': (this: any, params: any) => void
  'phone.toggleGroupCallSettings': (this: any, params: any) => void
  'phone.getGroupCall': (this: any, params: any) => void
  'phone.getGroupParticipants': (this: any, params: any) => void
  'phone.checkGroupCall': (this: any, params: any) => void
  'messages.deleteChat': (this: any, params: any) => void
  'messages.deletePhoneCallHistory': (this: any, params: any) => void
  'messages.checkHistoryImport': (this: any, params: any) => void
  'messages.initHistoryImport': (this: any, params: any) => void
  'messages.uploadImportedMedia': (this: any, params: any) => void
  'messages.startHistoryImport': (this: any, params: any) => void
  'messages.getExportedChatInvites': (this: any, params: any) => void
  'messages.getExportedChatInvite': (this: any, params: any) => void
  'messages.editExportedChatInvite': (this: any, params: any) => void
  'messages.deleteRevokedExportedChatInvites': (this: any, params: any) => void
  'messages.deleteExportedChatInvite': (this: any, params: any) => void
  'messages.getAdminsWithInvites': (this: any, params: any) => void
  'messages.getChatInviteImporters': (this: any, params: any) => void
  'messages.setHistoryTTL': (this: any, params: any) => void
  'account.reportProfilePhoto': (this: any, params: any) => void
  'channels.convertToGigagroup': (this: any, params: any) => void
  'messages.checkHistoryImportPeer': (this: any, params: any) => void
  'phone.toggleGroupCallRecord': (this: any, params: any) => void
  'phone.editGroupCallParticipant': (this: any, params: any) => void
  'phone.editGroupCallTitle': (this: any, params: any) => void
  'phone.getGroupCallJoinAs': (this: any, params: any) => void
  'phone.exportGroupCallInvite': (this: any, params: any) => void
  'phone.toggleGroupCallStartSubscription': (this: any, params: any) => void
  'phone.startScheduledGroupCall': (this: any, params: any) => void
  'phone.saveDefaultGroupCallJoinAs': (this: any, params: any) => void
  'phone.joinGroupCallPresentation': (this: any, params: any) => void
  'phone.leaveGroupCallPresentation': (this: any, params: any) => void
  'stickers.checkShortName': (this: any, params: any) => void
  'stickers.suggestShortName': (this: any, params: any) => void
  'bots.resetBotCommands': (this: any, params: any) => void
  'bots.getBotCommands': (this: any, params: any) => void
  'account.resetPassword': (this: any, params: any) => void
  'account.declinePasswordReset': (this: any, params: any) => void
  'auth.checkRecoveryPassword': (this: any, params: any) => void
  'account.getChatThemes': (this: any, params: any) => void
  'messages.setChatTheme': (this: any, params: any) => void
  'messages.getMessageReadParticipants': (this: any, params: any) => void
  'messages.getSearchResultsCalendar': (this: any, params: any) => void
  'messages.getSearchResultsPositions': (this: any, params: any) => void
  'messages.hideChatJoinRequest': (this: any, params: any) => void
  'messages.hideAllChatJoinRequests': (this: any, params: any) => void
  'messages.toggleNoForwards': (this: any, params: any) => void
  'messages.saveDefaultSendAs': (this: any, params: any) => void
  'channels.getSendAs': (this: any, params: any) => void
  'account.setAuthorizationTTL': (this: any, params: any) => void
  'account.changeAuthorizationSettings': (this: any, params: any) => void
  'channels.deleteParticipantHistory': (this: any, params: any) => void
  'messages.sendReaction': (this: any, params: any) => void
  'messages.getMessagesReactions': (this: any, params: any) => void
  'messages.getMessageReactionsList': (this: any, params: any) => void
  'messages.setChatAvailableReactions': (this: any, params: any) => void
  'messages.getAvailableReactions': (this: any, params: any) => void
  'messages.setDefaultReaction': (this: any, params: any) => void
  'messages.translateText': (this: any, params: any) => void
  'messages.getUnreadReactions': (this: any, params: any) => void
  'messages.readReactions': (this: any, params: any) => void
  'contacts.resolvePhone': (this: any, params: any) => void
  'phone.getGroupCallStreamChannels': (this: any, params: any) => void
  'phone.getGroupCallStreamRtmpUrl': (this: any, params: any) => void
  'messages.searchSentMedia': (this: any, params: any) => void
  'messages.getAttachMenuBots': (this: any, params: any) => void
  'messages.getAttachMenuBot': (this: any, params: any) => void
  'messages.toggleBotInAttachMenu': (this: any, params: any) => void
  'messages.requestWebView': (this: any, params: any) => void
  'messages.prolongWebView': (this: any, params: any) => void
  'messages.requestSimpleWebView': (this: any, params: any) => void
  'messages.sendWebViewResultMessage': (this: any, params: any) => void
  'messages.sendWebViewData': (this: any, params: any) => void
  'bots.setBotMenuButton': (this: any, params: any) => void
  'bots.getBotMenuButton': (this: any, params: any) => void
  'account.getSavedRingtones': (this: any, params: any) => void
  'account.saveRingtone': (this: any, params: any) => void
  'account.uploadRingtone': (this: any, params: any) => void
  'bots.setBotBroadcastDefaultAdminRights': (this: any, params: any) => void
  'bots.setBotGroupDefaultAdminRights': (this: any, params: any) => void
  'phone.saveCallLog': (this: any, params: any) => void
  'channels.toggleJoinToSend': (this: any, params: any) => void
  'channels.toggleJoinRequest': (this: any, params: any) => void
  'payments.exportInvoice': (this: any, params: any) => void
  'messages.transcribeAudio': (this: any, params: any) => void
  'messages.rateTranscribedAudio': (this: any, params: any) => void
  'payments.assignAppStoreTransaction': (this: any, params: any) => void
  'payments.assignPlayMarketTransaction': (this: any, params: any) => void
  'payments.canPurchasePremium': (this: any, params: any) => void
  'help.getPremiumPromo': (this: any, params: any) => void
  'messages.getCustomEmojiDocuments': (this: any, params: any) => void
  'messages.getEmojiStickers': (this: any, params: any) => void
  'messages.getFeaturedEmojiStickers': (this: any, params: any) => void
  'account.updateEmojiStatus': (this: any, params: any) => void
  'account.getDefaultEmojiStatuses': (this: any, params: any) => void
  'account.getRecentEmojiStatuses': (this: any, params: any) => void
  'account.clearRecentEmojiStatuses': (this: any, params: any) => void
  'messages.reportReaction': (this: any, params: any) => void
  'messages.getTopReactions': (this: any, params: any) => void
  'messages.getRecentReactions': (this: any, params: any) => void
  'messages.clearRecentReactions': (this: any, params: any) => void
  'messages.getExtendedMedia': (this: any, params: any) => void
  'auth.importWebTokenAuthorization': (this: any, params: any) => void
  'account.reorderUsernames': (this: any, params: any) => void
  'account.toggleUsername': (this: any, params: any) => void
  'channels.reorderUsernames': (this: any, params: any) => void
  'channels.toggleUsername': (this: any, params: any) => void
  'channels.deactivateAllUsernames': (this: any, params: any) => void
  'channels.toggleForum': (this: any, params: any) => void
  'channels.createForumTopic': (this: any, params: any) => void
  'channels.getForumTopics': (this: any, params: any) => void
  'channels.getForumTopicsByID': (this: any, params: any) => void
  'channels.editForumTopic': (this: any, params: any) => void
  'channels.updatePinnedForumTopic': (this: any, params: any) => void
  'channels.deleteTopicHistory': (this: any, params: any) => void
  'channels.reorderPinnedForumTopics': (this: any, params: any) => void
  'channels.toggleAntiSpam': (this: any, params: any) => void
  'channels.reportAntiSpamFalsePositive': (this: any, params: any) => void
  'messages.setDefaultHistoryTTL': (this: any, params: any) => void
  'messages.getDefaultHistoryTTL': (this: any, params: any) => void
  'contacts.exportContactToken': (this: any, params: any) => void
  'contacts.importContactToken': (this: any, params: any) => void
  'photos.uploadContactProfilePhoto': (this: any, params: any) => void
  'channels.toggleParticipantsHidden': (this: any, params: any) => void
  'messages.sendBotRequestedPeer': (this: any, params: any) => void
  'account.getDefaultProfilePhotoEmojis': (this: any, params: any) => void
  'account.getDefaultGroupPhotoEmojis': (this: any, params: any) => void
  'auth.requestFirebaseSms': (this: any, params: any) => void
  'messages.getEmojiGroups': (this: any, params: any) => void
  'messages.getEmojiStatusGroups': (this: any, params: any) => void
  'messages.getEmojiProfilePhotoGroups': (this: any, params: any) => void
  'messages.searchCustomEmoji': (this: any, params: any) => void
  'messages.togglePeerTranslations': (this: any, params: any) => void
  'account.getAutoSaveSettings': (this: any, params: any) => void
  'account.saveAutoSaveSettings': (this: any, params: any) => void
  'account.deleteAutoSaveExceptions': (this: any, params: any) => void
  'stickers.changeSticker': (this: any, params: any) => void
  'stickers.renameStickerSet': (this: any, params: any) => void
  'stickers.deleteStickerSet': (this: any, params: any) => void
  'messages.getBotApp': (this: any, params: any) => void
  'messages.requestAppWebView': (this: any, params: any) => void
  'bots.setBotInfo': (this: any, params: any) => void
  'bots.getBotInfo': (this: any, params: any) => void
  'auth.resetLoginEmail': (this: any, params: any) => void
  'chatlists.exportChatlistInvite': (this: any, params: any) => void
  'chatlists.deleteExportedInvite': (this: any, params: any) => void
  'chatlists.editExportedInvite': (this: any, params: any) => void
  'chatlists.getExportedInvites': (this: any, params: any) => void
  'chatlists.checkChatlistInvite': (this: any, params: any) => void
  'chatlists.joinChatlistInvite': (this: any, params: any) => void
  'chatlists.getChatlistUpdates': (this: any, params: any) => void
  'chatlists.joinChatlistUpdates': (this: any, params: any) => void
  'chatlists.hideChatlistUpdates': (this: any, params: any) => void
  'chatlists.getLeaveChatlistSuggestions': (this: any, params: any) => void
  'chatlists.leaveChatlist': (this: any, params: any) => void
  'bots.reorderUsernames': (this: any, params: any) => void
  'bots.toggleUsername': (this: any, params: any) => void
  'messages.setChatWallPaper': (this: any, params: any) => void
  'account.invalidateSignInCodes': (this: any, params: any) => void
  'contacts.editCloseFriends': (this: any, params: any) => void
  'stories.canSendStory': (this: any, params: any) => void
  'stories.sendStory': (this: any, params: any) => void
  'stories.editStory': (this: any, params: any) => void
  'stories.deleteStories': (this: any, params: any) => void
  'stories.togglePinned': (this: any, params: any) => void
  'stories.getAllStories': (this: any, params: any) => void
  'stories.getPinnedStories': (this: any, params: any) => void
  'stories.getStoriesArchive': (this: any, params: any) => void
  'stories.getStoriesByID': (this: any, params: any) => void
  'stories.toggleAllStoriesHidden': (this: any, params: any) => void
  'stories.readStories': (this: any, params: any) => void
  'stories.incrementStoryViews': (this: any, params: any) => void
  'stories.getStoryViewsList': (this: any, params: any) => void
  'stories.getStoriesViews': (this: any, params: any) => void
  'stories.exportStoryLink': (this: any, params: any) => void
  'stories.report': (this: any, params: any) => void
  'stories.activateStealthMode': (this: any, params: any) => void
  'contacts.setBlocked': (this: any, params: any) => void
  'stories.sendReaction': (this: any, params: any) => void
  'bots.canSendMessage': (this: any, params: any) => void
  'bots.allowSendMessage': (this: any, params: any) => void
  'bots.invokeWebViewCustomMethod': (this: any, params: any) => void
  'stories.getPeerStories': (this: any, params: any) => void
  'stories.getAllReadPeerStories': (this: any, params: any) => void
  'stories.getPeerMaxIDs': (this: any, params: any) => void
  'stories.getChatsToSend': (this: any, params: any) => void
  'stories.togglePeerStoriesHidden': (this: any, params: any) => void
  'payments.getPremiumGiftCodeOptions': (this: any, params: any) => void
  'payments.checkGiftCode': (this: any, params: any) => void
  'payments.applyGiftCode': (this: any, params: any) => void
  'payments.getGiveawayInfo': (this: any, params: any) => void
  'payments.launchPrepaidGiveaway': (this: any, params: any) => void
  'account.updateColor': (this: any, params: any) => void
  'channels.updateColor': (this: any, params: any) => void
  'account.getDefaultBackgroundEmojis': (this: any, params: any) => void
  'premium.getBoostsList': (this: any, params: any) => void
  'premium.getMyBoosts': (this: any, params: any) => void
  'premium.applyBoost': (this: any, params: any) => void
  'premium.getBoostsStatus': (this: any, params: any) => void
  'premium.getUserBoosts': (this: any, params: any) => void
  'channels.toggleViewForumAsMessages': (this: any, params: any) => void
  'messages.searchEmojiStickerSets': (this: any, params: any) => void
  'channels.getChannelRecommendations': (this: any, params: any) => void
  'stats.getStoryStats': (this: any, params: any) => void
  'stats.getStoryPublicForwards': (this: any, params: any) => void
  'help.getPeerColors': (this: any, params: any) => void
  'help.getPeerProfileColors': (this: any, params: any) => void
  'stories.getStoryReactionsList': (this: any, params: any) => void
  'channels.updateEmojiStatus': (this: any, params: any) => void
  'account.getChannelDefaultEmojiStatuses': (this: any, params: any) => void
  'account.getChannelRestrictedStatusEmojis': (this: any, params: any) => void
  'messages.getSavedDialogs': (this: any, params: any) => void
  'messages.getSavedHistory': (this: any, params: any) => void
  'messages.deleteSavedHistory': (this: any, params: any) => void
  'messages.getPinnedSavedDialogs': (this: any, params: any) => void
  'messages.toggleSavedDialogPin': (this: any, params: any) => void
  'messages.reorderPinnedSavedDialogs': (this: any, params: any) => void
  'messages.getSavedReactionTags': (this: any, params: any) => void
  'messages.updateSavedReactionTag': (this: any, params: any) => void
  'messages.getDefaultTagReactions': (this: any, params: any) => void
  'messages.getOutboxReadDate': (this: any, params: any) => void
  'users.getIsPremiumRequiredToContact': (this: any, params: any) => void
  'channels.setBoostsToUnblockRestrictions': (this: any, params: any) => void
  'channels.setEmojiStickers': (this: any, params: any) => void
  'smsjobs.isEligibleToJoin': (this: any, params: any) => void
  'smsjobs.join': (this: any, params: any) => void
  'smsjobs.leave': (this: any, params: any) => void
  'smsjobs.updateSettings': (this: any, params: any) => void
  'smsjobs.getStatus': (this: any, params: any) => void
  'smsjobs.getSmsJob': (this: any, params: any) => void
  'smsjobs.finishJob': (this: any, params: any) => void
  'help.getTimezonesList': (this: any, params: any) => void
  'account.updateBusinessWorkHours': (this: any, params: any) => void
  'account.updateBusinessLocation': (this: any, params: any) => void
  'account.updateBusinessGreetingMessage': (this: any, params: any) => void
  'account.updateBusinessAwayMessage': (this: any, params: any) => void
  'messages.getQuickReplies': (this: any, params: any) => void
  'messages.reorderQuickReplies': (this: any, params: any) => void
  'messages.checkQuickReplyShortcut': (this: any, params: any) => void
  'messages.editQuickReplyShortcut': (this: any, params: any) => void
  'messages.deleteQuickReplyShortcut': (this: any, params: any) => void
  'messages.getQuickReplyMessages': (this: any, params: any) => void
  'messages.sendQuickReplyMessages': (this: any, params: any) => void
  'messages.deleteQuickReplyMessages': (this: any, params: any) => void
  'account.updateConnectedBot': (this: any, params: any) => void
  'account.getConnectedBots': (this: any, params: any) => void
  'messages.toggleDialogFilterTags': (this: any, params: any) => void
  'invokeWithBusinessConnection': (this: any, params: any) => void
  'account.getBotBusinessConnection': (this: any, params: any) => void
  'account.updateBusinessIntro': (this: any, params: any) => void
  'stickers.replaceSticker': (this: any, params: any) => void
  'messages.getMyStickers': (this: any, params: any) => void
  'fragment.getCollectibleInfo': (this: any, params: any) => void
  'account.toggleConnectedBotPaused': (this: any, params: any) => void
  'account.disablePeerConnectedBot': (this: any, params: any) => void
  'account.updateBirthday': (this: any, params: any) => void
  'contacts.getBirthdays': (this: any, params: any) => void
  'account.createBusinessChatLink': (this: any, params: any) => void
  'account.editBusinessChatLink': (this: any, params: any) => void
  'account.deleteBusinessChatLink': (this: any, params: any) => void
  'account.getBusinessChatLinks': (this: any, params: any) => void
  'account.resolveBusinessChatLink': (this: any, params: any) => void
  'account.updatePersonalChannel': (this: any, params: any) => void
  'stats.getBroadcastRevenueStats': (this: any, params: any) => void
  'stats.getBroadcastRevenueWithdrawalUrl': (this: any, params: any) => void
  'stats.getBroadcastRevenueTransactions': (this: any, params: any) => void
  'channels.restrictSponsoredMessages': (this: any, params: any) => void
  'account.toggleSponsoredMessages': (this: any, params: any) => void
  'stories.togglePinnedToTop': (this: any, params: any) => void
  'account.getReactionsNotifySettings': (this: any, params: any) => void
  'account.setReactionsNotifySettings': (this: any, params: any) => void
  'auth.reportMissingCode': (this: any, params: any) => void
  'messages.getEmojiStickerGroups': (this: any, params: any) => void
  'invokeWithGooglePlayIntegrity': (this: any, params: any) => void
  'invokeWithApnsSecret': (this: any, params: any) => void
  'messages.getAvailableEffects': (this: any, params: any) => void
  'channels.searchPosts': (this: any, params: any) => void
  'messages.editFactCheck': (this: any, params: any) => void
  'messages.deleteFactCheck': (this: any, params: any) => void
  'messages.getFactCheck': (this: any, params: any) => void
  'payments.getStarsTopupOptions': (this: any, params: any) => void
  'payments.getStarsStatus': (this: any, params: any) => void
  'payments.getStarsTransactions': (this: any, params: any) => void
  'payments.sendStarsForm': (this: any, params: any) => void
  'payments.refundStarsCharge': (this: any, params: any) => void
  'stories.searchPosts': (this: any, params: any) => void
  'payments.getStarsRevenueStats': (this: any, params: any) => void
  'payments.getStarsRevenueWithdrawalUrl': (this: any, params: any) => void
  'payments.getStarsRevenueAdsAccountUrl': (this: any, params: any) => void
  'payments.getStarsTransactionsByID': (this: any, params: any) => void
  'payments.getStarsGiftOptions': (this: any, params: any) => void
  'bots.getPopularAppBots': (this: any, params: any) => void
  'bots.addPreviewMedia': (this: any, params: any) => void
  'bots.editPreviewMedia': (this: any, params: any) => void
  'bots.deletePreviewMedia': (this: any, params: any) => void
  'bots.reorderPreviewMedias': (this: any, params: any) => void
  'bots.getPreviewInfo': (this: any, params: any) => void
  'bots.getPreviewMedias': (this: any, params: any) => void
  'messages.requestMainWebView': (this: any, params: any) => void
  'payments.getStarsSubscriptions': (this: any, params: any) => void
  'payments.changeStarsSubscription': (this: any, params: any) => void
  'payments.fulfillStarsSubscription': (this: any, params: any) => void
  'messages.sendPaidReaction': (this: any, params: any) => void
  'messages.togglePaidReactionPrivacy': (this: any, params: any) => void
  'payments.getStarsGiveawayOptions': (this: any, params: any) => void
  'messages.getPaidReactionPrivacy': (this: any, params: any) => void
  'payments.getStarGifts': (this: any, params: any) => void
  'payments.getUserStarGifts': (this: any, params: any) => void
  'payments.saveStarGift': (this: any, params: any) => void
  'payments.convertStarGift': (this: any, params: any) => void
  'messages.viewSponsoredMessage': (this: any, params: any) => void
  'messages.clickSponsoredMessage': (this: any, params: any) => void
  'messages.reportSponsoredMessage': (this: any, params: any) => void
  'messages.getSponsoredMessages': (this: any, params: any) => void
  'messages.savePreparedInlineMessage': (this: any, params: any) => void
  'messages.getPreparedInlineMessage': (this: any, params: any) => void
  'bots.updateUserEmojiStatus': (this: any, params: any) => void
  'bots.toggleUserEmojiStatusPermission': (this: any, params: any) => void
  'bots.checkDownloadFileParams': (this: any, params: any) => void
  'payments.botCancelStarsSubscription': (this: any, params: any) => void
  'bots.getAdminedBots': (this: any, params: any) => void
  'bots.updateStarRefProgram': (this: any, params: any) => void
  'payments.getConnectedStarRefBots': (this: any, params: any) => void
  'payments.getConnectedStarRefBot': (this: any, params: any) => void
  'payments.getSuggestedStarRefBots': (this: any, params: any) => void
  'payments.connectStarRefBot': (this: any, params: any) => void
  'payments.editConnectedStarRefBot': (this: any, params: any) => void
  'messages.searchStickers': (this: any, params: any) => void
}
export const builderMap: BuilderMap = {
  'mt_vector': function(params) {
    this.int32(481674261);
  },
  'mt_resPQ': function(params) {
    this.int32(85337187);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.bytes(params.pq);
    this.vector(this.long, params.server_public_key_fingerprints);
  },
  'mt_p_q_inner_data_dc': function(params) {
    this.int32(-1443537003);
    this.bytes(params.pq);
    this.bytes(params.p);
    this.bytes(params.q);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.int256(params.new_nonce);
    this.int(params.dc);
  },
  'mt_p_q_inner_data_temp_dc': function(params) {
    this.int32(1459478408);
    this.bytes(params.pq);
    this.bytes(params.p);
    this.bytes(params.q);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.int256(params.new_nonce);
    this.int(params.dc);
    this.int(params.expires_in);
  },
  'mt_server_DH_params_ok': function(params) {
    this.int32(-790100132);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.bytes(params.encrypted_answer);
  },
  'mt_server_DH_inner_data': function(params) {
    this.int32(-1249309254);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.int(params.g);
    this.bytes(params.dh_prime);
    this.bytes(params.g_a);
    this.int(params.server_time);
  },
  'mt_client_DH_inner_data': function(params) {
    this.int32(1715713620);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.long(params.retry_id);
    this.bytes(params.g_b);
  },
  'mt_dh_gen_ok': function(params) {
    this.int32(1003222836);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.int128(params.new_nonce_hash1);
  },
  'mt_dh_gen_retry': function(params) {
    this.int32(1188831161);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.int128(params.new_nonce_hash2);
  },
  'mt_dh_gen_fail': function(params) {
    this.int32(-1499615742);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.int128(params.new_nonce_hash3);
  },
  'mt_bind_auth_key_inner': function(params) {
    this.int32(1973679973);
    this.long(params.nonce);
    this.long(params.temp_auth_key_id);
    this.long(params.perm_auth_key_id);
    this.long(params.temp_session_id);
    this.int(params.expires_at);
  },
  'mt_rpc_result': function(params) {
    this.int32(-212046591);
    this.long(params.req_msg_id);
    this.predicate(params.result);
  },
  'mt_rpc_error': function(params) {
    this.int32(558156313);
    this.int(params.error_code);
    this.string(params.error_message);
  },
  'mt_rpc_answer_unknown': function(params) {
    this.int32(1579864942);
  },
  'mt_rpc_answer_dropped_running': function(params) {
    this.int32(-847714938);
  },
  'mt_rpc_answer_dropped': function(params) {
    this.int32(-1539647305);
    this.long(params.msg_id);
    this.int(params.seq_no);
    this.int(params.bytes);
  },
  'mt_future_salt': function(params) {
    this.int32(155834844);
    this.int(params.valid_since);
    this.int(params.valid_until);
    this.long(params.salt);
  },
  'mt_future_salts': function(params) {
    this.int32(-1370486635);
    this.long(params.req_msg_id);
    this.int(params.now);
    this.vector(this.predicate, params.salts);
  },
  'mt_pong': function(params) {
    this.int32(880243653);
    this.long(params.msg_id);
    this.long(params.ping_id);
  },
  'mt_destroy_session_ok': function(params) {
    this.int32(-501201412);
    this.long(params.session_id);
  },
  'mt_destroy_session_none': function(params) {
    this.int32(1658015945);
    this.long(params.session_id);
  },
  'mt_new_session_created': function(params) {
    this.int32(-1631450872);
    this.long(params.first_msg_id);
    this.long(params.unique_id);
    this.long(params.server_salt);
  },
  'mt_msg_container': function(params) {
    this.int32(1945237724);
    this.vector(this.predicate, params.messages);
  },
  'mt_message': function(params) {
    this.int32(1538843921);
    this.long(params.msg_id);
    this.int(params.seqno);
    this.int(params.bytes);
    this.predicate(params.body);
  },
  'mt_msg_copy': function(params) {
    this.int32(-530561358);
    this.predicate(params.orig_message);
  },
  'mt_gzip_packed': function(params) {
    this.int32(812830625);
    this.bytes(params.packed_data);
  },
  'mt_msgs_ack': function(params) {
    this.int32(1658238041);
    this.vector(this.long, params.msg_ids);
  },
  'mt_bad_msg_notification': function(params) {
    this.int32(-1477445615);
    this.long(params.bad_msg_id);
    this.int(params.bad_msg_seqno);
    this.int(params.error_code);
  },
  'mt_bad_server_salt': function(params) {
    this.int32(-307542917);
    this.long(params.bad_msg_id);
    this.int(params.bad_msg_seqno);
    this.int(params.error_code);
    this.long(params.new_server_salt);
  },
  'mt_msg_resend_req': function(params) {
    this.int32(2105940488);
    this.vector(this.long, params.msg_ids);
  },
  'mt_msgs_state_req': function(params) {
    this.int32(-630588590);
    this.vector(this.long, params.msg_ids);
  },
  'mt_msgs_state_info': function(params) {
    this.int32(81704317);
    this.long(params.req_msg_id);
    this.bytes(params.info);
  },
  'mt_msgs_all_info': function(params) {
    this.int32(-1933520591);
    this.vector(this.long, params.msg_ids);
    this.bytes(params.info);
  },
  'mt_msg_detailed_info': function(params) {
    this.int32(661470918);
    this.long(params.msg_id);
    this.long(params.answer_msg_id);
    this.int(params.bytes);
    this.int(params.status);
  },
  'mt_msg_new_detailed_info': function(params) {
    this.int32(-2137147681);
    this.long(params.answer_msg_id);
    this.int(params.bytes);
    this.int(params.status);
  },
  'mt_destroy_auth_key_ok': function(params) {
    this.int32(-161422892);
  },
  'mt_destroy_auth_key_none': function(params) {
    this.int32(178201177);
  },
  'mt_destroy_auth_key_fail': function(params) {
    this.int32(-368010477);
  },
  'mt_req_pq_multi': function(params) {
    this.int32(-1099002127);
    this.int128(params.nonce);
  },
  'mt_req_DH_params': function(params) {
    this.int32(-686627650);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.bytes(params.p);
    this.bytes(params.q);
    this.long(params.public_key_fingerprint);
    this.bytes(params.encrypted_data);
  },
  'mt_set_client_DH_params': function(params) {
    this.int32(-184262881);
    this.int128(params.nonce);
    this.int128(params.server_nonce);
    this.bytes(params.encrypted_data);
  },
  'mt_rpc_drop_answer': function(params) {
    this.int32(1491380032);
    this.long(params.req_msg_id);
  },
  'mt_get_future_salts': function(params) {
    this.int32(-1188971260);
    this.int(params.num);
  },
  'mt_ping': function(params) {
    this.int32(2059302892);
    this.long(params.ping_id);
  },
  'mt_ping_delay_disconnect': function(params) {
    this.int32(-213746804);
    this.long(params.ping_id);
    this.int(params.disconnect_delay);
  },
  'mt_destroy_session': function(params) {
    this.int32(-414113498);
    this.long(params.session_id);
  },
  'mt_http_wait': function(params) {
    this.int32(-1835453025);
    this.int(params.max_delay);
    this.int(params.wait_after);
    this.int(params.max_wait);
  },
  'mt_destroy_auth_key': function(params) {
    this.int32(-784117408);
  },
  'boolFalse': function(params) {
    this.int32(-1132882121);
  },
  'boolTrue': function(params) {
    this.int32(-1720552011);
  },
  'true': function(params) {
    this.int32(1072550713);
  },
  'vector': function(params) {
    this.int32(481674261);
  },
  'error': function(params) {
    this.int32(-994444869);
    this.int(params.code);
    this.string(params.text);
  },
  'null': function(params) {
    this.int32(1450380236);
  },
  'inputPeerEmpty': function(params) {
    this.int32(2134579434);
  },
  'inputPeerSelf': function(params) {
    this.int32(2107670217);
  },
  'inputPeerChat': function(params) {
    this.int32(900291769);
    this.long(params.chat_id);
  },
  'inputUserEmpty': function(params) {
    this.int32(-1182234929);
  },
  'inputUserSelf': function(params) {
    this.int32(-138301121);
  },
  'inputPhoneContact': function(params) {
    this.int32(-208488460);
    this.long(params.client_id);
    this.string(params.phone);
    this.string(params.first_name);
    this.string(params.last_name);
  },
  'inputFile': function(params) {
    this.int32(-181407105);
    this.long(params.id);
    this.int(params.parts);
    this.string(params.name);
    this.string(params.md5_checksum);
  },
  'inputMediaEmpty': function(params) {
    this.int32(-1771768449);
  },
  'inputMediaUploadedPhoto': function(params) {
    this.int32(505969924);
    const flags = (this.has(params.spoiler) << 2) | (this.has(params.stickers) << 0) | (this.has(params.ttl_seconds) << 1);
    this.int32(flags);
    this.predicate(params.file);
    this.flagVector(this.predicate, params.stickers);
    this.flag(this.int, params.ttl_seconds);
  },
  'inputMediaPhoto': function(params) {
    this.int32(-1279654347);
    const flags = (this.has(params.spoiler) << 1) | (this.has(params.ttl_seconds) << 0);
    this.int32(flags);
    this.predicate(params.id);
    this.flag(this.int, params.ttl_seconds);
  },
  'inputMediaGeoPoint': function(params) {
    this.int32(-104578748);
    this.predicate(params.geo_point);
  },
  'inputMediaContact': function(params) {
    this.int32(-122978821);
    this.string(params.phone_number);
    this.string(params.first_name);
    this.string(params.last_name);
    this.string(params.vcard);
  },
  'inputChatPhotoEmpty': function(params) {
    this.int32(480546647);
  },
  'inputChatUploadedPhoto': function(params) {
    this.int32(-1110593856);
    const flags = (this.has(params.file) << 0) | (this.has(params.video) << 1) | (this.has(params.video_start_ts) << 2) | (this.has(params.video_emoji_markup) << 3);
    this.int32(flags);
    this.flag(this.predicate, params.file);
    this.flag(this.predicate, params.video);
    this.flag(this.double, params.video_start_ts);
    this.flag(this.predicate, params.video_emoji_markup);
  },
  'inputChatPhoto': function(params) {
    this.int32(-1991004873);
    this.predicate(params.id);
  },
  'inputGeoPointEmpty': function(params) {
    this.int32(-457104426);
  },
  'inputGeoPoint': function(params) {
    this.int32(1210199983);
    const flags = (this.has(params.accuracy_radius) << 0);
    this.int32(flags);
    this.double(params.lat);
    this.double(params.long);
    this.flag(this.int, params.accuracy_radius);
  },
  'inputPhotoEmpty': function(params) {
    this.int32(483901197);
  },
  'inputPhoto': function(params) {
    this.int32(1001634122);
    this.long(params.id);
    this.long(params.access_hash);
    this.bytes(params.file_reference);
  },
  'inputFileLocation': function(params) {
    this.int32(-539317279);
    this.long(params.volume_id);
    this.int(params.local_id);
    this.long(params.secret);
    this.bytes(params.file_reference);
  },
  'peerUser': function(params) {
    this.int32(1498486562);
    this.long(params.user_id);
  },
  'peerChat': function(params) {
    this.int32(918946202);
    this.long(params.chat_id);
  },
  'storage.fileUnknown': function(params) {
    this.int32(-1432995067);
  },
  'storage.filePartial': function(params) {
    this.int32(1086091090);
  },
  'storage.fileJpeg': function(params) {
    this.int32(8322574);
  },
  'storage.fileGif': function(params) {
    this.int32(-891180321);
  },
  'storage.filePng': function(params) {
    this.int32(172975040);
  },
  'storage.filePdf': function(params) {
    this.int32(-1373745011);
  },
  'storage.fileMp3': function(params) {
    this.int32(1384777335);
  },
  'storage.fileMov': function(params) {
    this.int32(1258941372);
  },
  'storage.fileMp4': function(params) {
    this.int32(-1278304028);
  },
  'storage.fileWebp': function(params) {
    this.int32(276907596);
  },
  'userEmpty': function(params) {
    this.int32(-742634630);
    this.long(params.id);
  },
  'userProfilePhotoEmpty': function(params) {
    this.int32(1326562017);
  },
  'userProfilePhoto': function(params) {
    this.int32(-2100168954);
    const flags = (this.has(params.has_video) << 0) | (this.has(params.personal) << 2) | (this.has(params.stripped_thumb) << 1);
    this.int32(flags);
    this.long(params.photo_id);
    this.flag(this.bytes, params.stripped_thumb);
    this.int(params.dc_id);
  },
  'userStatusEmpty': function(params) {
    this.int32(164646985);
  },
  'userStatusOnline': function(params) {
    this.int32(-306628279);
    this.int(params.expires);
  },
  'userStatusOffline': function(params) {
    this.int32(9203775);
    this.int(params.was_online);
  },
  'chatEmpty': function(params) {
    this.int32(693512293);
    this.long(params.id);
  },
  'chat': function(params) {
    this.int32(1103884886);
    const flags = (this.has(params.creator) << 0) | (this.has(params.left) << 2) | (this.has(params.deactivated) << 5) | (this.has(params.call_active) << 23) | (this.has(params.call_not_empty) << 24) | (this.has(params.noforwards) << 25) | (this.has(params.migrated_to) << 6) | (this.has(params.admin_rights) << 14) | (this.has(params.default_banned_rights) << 18);
    this.int32(flags);
    this.long(params.id);
    this.string(params.title);
    this.predicate(params.photo);
    this.int(params.participants_count);
    this.int(params.date);
    this.int(params.version);
    this.flag(this.predicate, params.migrated_to);
    this.flag(this.predicate, params.admin_rights);
    this.flag(this.predicate, params.default_banned_rights);
  },
  'chatForbidden': function(params) {
    this.int32(1704108455);
    this.long(params.id);
    this.string(params.title);
  },
  'chatFull': function(params) {
    this.int32(640893467);
    const flags = (this.has(params.can_set_username) << 7) | (this.has(params.has_scheduled) << 8) | (this.has(params.translations_disabled) << 19) | (this.has(params.chat_photo) << 2) | (this.has(params.exported_invite) << 13) | (this.has(params.bot_info) << 3) | (this.has(params.pinned_msg_id) << 6) | (this.has(params.folder_id) << 11) | (this.has(params.call) << 12) | (this.has(params.ttl_period) << 14) | (this.has(params.groupcall_default_join_as) << 15) | (this.has(params.theme_emoticon) << 16) | (this.has(params.requests_pending) << 17) | (this.has(params.recent_requesters) << 17) | (this.has(params.available_reactions) << 18) | (this.has(params.reactions_limit) << 20);
    this.int32(flags);
    this.long(params.id);
    this.string(params.about);
    this.predicate(params.participants);
    this.flag(this.predicate, params.chat_photo);
    this.predicate(params.notify_settings);
    this.flag(this.predicate, params.exported_invite);
    this.flagVector(this.predicate, params.bot_info);
    this.flag(this.int, params.pinned_msg_id);
    this.flag(this.int, params.folder_id);
    this.flag(this.predicate, params.call);
    this.flag(this.int, params.ttl_period);
    this.flag(this.predicate, params.groupcall_default_join_as);
    this.flag(this.string, params.theme_emoticon);
    this.flag(this.int, params.requests_pending);
    this.flagVector(this.long, params.recent_requesters);
    this.flag(this.predicate, params.available_reactions);
    this.flag(this.int, params.reactions_limit);
  },
  'chatParticipant': function(params) {
    this.int32(-1070776313);
    this.long(params.user_id);
    this.long(params.inviter_id);
    this.int(params.date);
  },
  'chatParticipantsForbidden': function(params) {
    this.int32(-2023500831);
    const flags = (this.has(params.self_participant) << 0);
    this.int32(flags);
    this.long(params.chat_id);
    this.flag(this.predicate, params.self_participant);
  },
  'chatParticipants': function(params) {
    this.int32(1018991608);
    this.long(params.chat_id);
    this.vector(this.predicate, params.participants);
    this.int(params.version);
  },
  'chatPhotoEmpty': function(params) {
    this.int32(935395612);
  },
  'chatPhoto': function(params) {
    this.int32(476978193);
    const flags = (this.has(params.has_video) << 0) | (this.has(params.stripped_thumb) << 1);
    this.int32(flags);
    this.long(params.photo_id);
    this.flag(this.bytes, params.stripped_thumb);
    this.int(params.dc_id);
  },
  'messageEmpty': function(params) {
    this.int32(-1868117372);
    const flags = (this.has(params.peer_id) << 0);
    this.int32(flags);
    this.int(params.id);
    this.flag(this.predicate, params.peer_id);
  },
  'message': function(params) {
    this.int32(-1808510398);
    const flags = (this.has(params.out) << 1) | (this.has(params.mentioned) << 4) | (this.has(params.media_unread) << 5) | (this.has(params.silent) << 13) | (this.has(params.post) << 14) | (this.has(params.from_scheduled) << 18) | (this.has(params.legacy) << 19) | (this.has(params.edit_hide) << 21) | (this.has(params.pinned) << 24) | (this.has(params.noforwards) << 26) | (this.has(params.invert_media) << 27) | (this.has(params.from_id) << 8) | (this.has(params.from_boosts_applied) << 29) | (this.has(params.saved_peer_id) << 28) | (this.has(params.fwd_from) << 2) | (this.has(params.via_bot_id) << 11) | (this.has(params.reply_to) << 3) | (this.has(params.media) << 9) | (this.has(params.reply_markup) << 6) | (this.has(params.entities) << 7) | (this.has(params.views) << 10) | (this.has(params.forwards) << 10) | (this.has(params.replies) << 23) | (this.has(params.edit_date) << 15) | (this.has(params.post_author) << 16) | (this.has(params.grouped_id) << 17) | (this.has(params.reactions) << 20) | (this.has(params.restriction_reason) << 22) | (this.has(params.ttl_period) << 25) | (this.has(params.quick_reply_shortcut_id) << 30);
    this.int32(flags);
    const flags2 = (this.has(params.offline) << 1) | (this.has(params.video_processing_pending) << 4) | (this.has(params.via_business_bot_id) << 0) | (this.has(params.effect) << 2) | (this.has(params.factcheck) << 3);
    this.int32(flags2);
    this.int(params.id);
    this.flag(this.predicate, params.from_id);
    this.flag(this.int, params.from_boosts_applied);
    this.predicate(params.peer_id);
    this.flag(this.predicate, params.saved_peer_id);
    this.flag(this.predicate, params.fwd_from);
    this.flag(this.long, params.via_bot_id);
    this.flag(this.long, params.via_business_bot_id);
    this.flag(this.predicate, params.reply_to);
    this.int(params.date);
    this.string(params.message);
    this.flag(this.predicate, params.media);
    this.flag(this.predicate, params.reply_markup);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.int, params.views);
    this.flag(this.int, params.forwards);
    this.flag(this.predicate, params.replies);
    this.flag(this.int, params.edit_date);
    this.flag(this.string, params.post_author);
    this.flag(this.long, params.grouped_id);
    this.flag(this.predicate, params.reactions);
    this.flagVector(this.predicate, params.restriction_reason);
    this.flag(this.int, params.ttl_period);
    this.flag(this.int, params.quick_reply_shortcut_id);
    this.flag(this.long, params.effect);
    this.flag(this.predicate, params.factcheck);
  },
  'messageService': function(params) {
    this.int32(721967202);
    const flags = (this.has(params.out) << 1) | (this.has(params.mentioned) << 4) | (this.has(params.media_unread) << 5) | (this.has(params.silent) << 13) | (this.has(params.post) << 14) | (this.has(params.legacy) << 19) | (this.has(params.from_id) << 8) | (this.has(params.reply_to) << 3) | (this.has(params.ttl_period) << 25);
    this.int32(flags);
    this.int(params.id);
    this.flag(this.predicate, params.from_id);
    this.predicate(params.peer_id);
    this.flag(this.predicate, params.reply_to);
    this.int(params.date);
    this.predicate(params.action);
    this.flag(this.int, params.ttl_period);
  },
  'messageMediaEmpty': function(params) {
    this.int32(1038967584);
  },
  'messageMediaPhoto': function(params) {
    this.int32(1766936791);
    const flags = (this.has(params.spoiler) << 3) | (this.has(params.photo) << 0) | (this.has(params.ttl_seconds) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.photo);
    this.flag(this.int, params.ttl_seconds);
  },
  'messageMediaGeo': function(params) {
    this.int32(1457575028);
    this.predicate(params.geo);
  },
  'messageMediaContact': function(params) {
    this.int32(1882335561);
    this.string(params.phone_number);
    this.string(params.first_name);
    this.string(params.last_name);
    this.string(params.vcard);
    this.long(params.user_id);
  },
  'messageMediaUnsupported': function(params) {
    this.int32(-1618676578);
  },
  'messageActionEmpty': function(params) {
    this.int32(-1230047312);
  },
  'messageActionChatCreate': function(params) {
    this.int32(-1119368275);
    this.string(params.title);
    this.vector(this.long, params.users);
  },
  'messageActionChatEditTitle': function(params) {
    this.int32(-1247687078);
    this.string(params.title);
  },
  'messageActionChatEditPhoto': function(params) {
    this.int32(2144015272);
    this.predicate(params.photo);
  },
  'messageActionChatDeletePhoto': function(params) {
    this.int32(-1780220945);
  },
  'messageActionChatAddUser': function(params) {
    this.int32(365886720);
    this.vector(this.long, params.users);
  },
  'messageActionChatDeleteUser': function(params) {
    this.int32(-1539362612);
    this.long(params.user_id);
  },
  'dialog': function(params) {
    this.int32(-712374074);
    const flags = (this.has(params.pinned) << 2) | (this.has(params.unread_mark) << 3) | (this.has(params.view_forum_as_messages) << 6) | (this.has(params.pts) << 0) | (this.has(params.draft) << 1) | (this.has(params.folder_id) << 4) | (this.has(params.ttl_period) << 5);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.top_message);
    this.int(params.read_inbox_max_id);
    this.int(params.read_outbox_max_id);
    this.int(params.unread_count);
    this.int(params.unread_mentions_count);
    this.int(params.unread_reactions_count);
    this.predicate(params.notify_settings);
    this.flag(this.int, params.pts);
    this.flag(this.predicate, params.draft);
    this.flag(this.int, params.folder_id);
    this.flag(this.int, params.ttl_period);
  },
  'photoEmpty': function(params) {
    this.int32(590459437);
    this.long(params.id);
  },
  'photo': function(params) {
    this.int32(-82216347);
    const flags = (this.has(params.has_stickers) << 0) | (this.has(params.video_sizes) << 1);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.bytes(params.file_reference);
    this.int(params.date);
    this.vector(this.predicate, params.sizes);
    this.flagVector(this.predicate, params.video_sizes);
    this.int(params.dc_id);
  },
  'photoSizeEmpty': function(params) {
    this.int32(236446268);
    this.string(params.type);
  },
  'photoSize': function(params) {
    this.int32(1976012384);
    this.string(params.type);
    this.int(params.w);
    this.int(params.h);
    this.int(params.size);
  },
  'photoCachedSize': function(params) {
    this.int32(35527382);
    this.string(params.type);
    this.int(params.w);
    this.int(params.h);
    this.bytes(params.bytes);
  },
  'geoPointEmpty': function(params) {
    this.int32(286776671);
  },
  'geoPoint': function(params) {
    this.int32(-1297942941);
    const flags = (this.has(params.accuracy_radius) << 0);
    this.int32(flags);
    this.double(params.long);
    this.double(params.lat);
    this.long(params.access_hash);
    this.flag(this.int, params.accuracy_radius);
  },
  'auth.sentCode': function(params) {
    this.int32(1577067778);
    const flags = (this.has(params.next_type) << 1) | (this.has(params.timeout) << 2);
    this.int32(flags);
    this.predicate(params.type);
    this.string(params.phone_code_hash);
    this.flag(this.predicate, params.next_type);
    this.flag(this.int, params.timeout);
  },
  'auth.authorization': function(params) {
    this.int32(782418132);
    const flags = (this.has(params.setup_password_required) << 1) | (this.has(params.otherwise_relogin_days) << 1) | (this.has(params.tmp_sessions) << 0) | (this.has(params.future_auth_token) << 2);
    this.int32(flags);
    this.flag(this.int, params.otherwise_relogin_days);
    this.flag(this.int, params.tmp_sessions);
    this.flag(this.bytes, params.future_auth_token);
    this.predicate(params.user);
  },
  'auth.exportedAuthorization': function(params) {
    this.int32(-1271602504);
    this.long(params.id);
    this.bytes(params.bytes);
  },
  'inputNotifyPeer': function(params) {
    this.int32(-1195615476);
    this.predicate(params.peer);
  },
  'inputNotifyUsers': function(params) {
    this.int32(423314455);
  },
  'inputNotifyChats': function(params) {
    this.int32(1251338318);
  },
  'inputPeerNotifySettings': function(params) {
    this.int32(-892638494);
    const flags = (this.has(params.show_previews) << 0) | (this.has(params.silent) << 1) | (this.has(params.mute_until) << 2) | (this.has(params.sound) << 3) | (this.has(params.stories_muted) << 6) | (this.has(params.stories_hide_sender) << 7) | (this.has(params.stories_sound) << 8);
    this.int32(flags);
    this.flag(this.Bool, params.show_previews);
    this.flag(this.Bool, params.silent);
    this.flag(this.int, params.mute_until);
    this.flag(this.predicate, params.sound);
    this.flag(this.Bool, params.stories_muted);
    this.flag(this.Bool, params.stories_hide_sender);
    this.flag(this.predicate, params.stories_sound);
  },
  'peerNotifySettings': function(params) {
    this.int32(-1721619444);
    const flags = (this.has(params.show_previews) << 0) | (this.has(params.silent) << 1) | (this.has(params.mute_until) << 2) | (this.has(params.ios_sound) << 3) | (this.has(params.android_sound) << 4) | (this.has(params.other_sound) << 5) | (this.has(params.stories_muted) << 6) | (this.has(params.stories_hide_sender) << 7) | (this.has(params.stories_ios_sound) << 8) | (this.has(params.stories_android_sound) << 9) | (this.has(params.stories_other_sound) << 10);
    this.int32(flags);
    this.flag(this.Bool, params.show_previews);
    this.flag(this.Bool, params.silent);
    this.flag(this.int, params.mute_until);
    this.flag(this.predicate, params.ios_sound);
    this.flag(this.predicate, params.android_sound);
    this.flag(this.predicate, params.other_sound);
    this.flag(this.Bool, params.stories_muted);
    this.flag(this.Bool, params.stories_hide_sender);
    this.flag(this.predicate, params.stories_ios_sound);
    this.flag(this.predicate, params.stories_android_sound);
    this.flag(this.predicate, params.stories_other_sound);
  },
  'peerSettings': function(params) {
    this.int32(-1395233698);
    const flags = (this.has(params.report_spam) << 0) | (this.has(params.add_contact) << 1) | (this.has(params.block_contact) << 2) | (this.has(params.share_contact) << 3) | (this.has(params.need_contacts_exception) << 4) | (this.has(params.report_geo) << 5) | (this.has(params.autoarchived) << 7) | (this.has(params.invite_members) << 8) | (this.has(params.request_chat_broadcast) << 10) | (this.has(params.business_bot_paused) << 11) | (this.has(params.business_bot_can_reply) << 12) | (this.has(params.geo_distance) << 6) | (this.has(params.request_chat_title) << 9) | (this.has(params.request_chat_date) << 9) | (this.has(params.business_bot_id) << 13) | (this.has(params.business_bot_manage_url) << 13);
    this.int32(flags);
    this.flag(this.int, params.geo_distance);
    this.flag(this.string, params.request_chat_title);
    this.flag(this.int, params.request_chat_date);
    this.flag(this.long, params.business_bot_id);
    this.flag(this.string, params.business_bot_manage_url);
  },
  'wallPaper': function(params) {
    this.int32(-1539849235);
    this.long(params.id);
    const flags = (this.has(params.creator) << 0) | (this.has(params.default) << 1) | (this.has(params.pattern) << 3) | (this.has(params.dark) << 4) | (this.has(params.settings) << 2);
    this.int32(flags);
    this.long(params.access_hash);
    this.string(params.slug);
    this.predicate(params.document);
    this.flag(this.predicate, params.settings);
  },
  'inputReportReasonSpam': function(params) {
    this.int32(1490799288);
  },
  'inputReportReasonViolence': function(params) {
    this.int32(505595789);
  },
  'inputReportReasonPornography': function(params) {
    this.int32(777640226);
  },
  'inputReportReasonChildAbuse': function(params) {
    this.int32(-1376497949);
  },
  'inputReportReasonOther': function(params) {
    this.int32(-1041980751);
  },
  'userFull': function(params) {
    this.int32(-1751309450);
    const flags = (this.has(params.blocked) << 0) | (this.has(params.phone_calls_available) << 4) | (this.has(params.phone_calls_private) << 5) | (this.has(params.can_pin_message) << 7) | (this.has(params.has_scheduled) << 12) | (this.has(params.video_calls_available) << 13) | (this.has(params.voice_messages_forbidden) << 20) | (this.has(params.translations_disabled) << 23) | (this.has(params.stories_pinned_available) << 26) | (this.has(params.blocked_my_stories_from) << 27) | (this.has(params.wallpaper_overridden) << 28) | (this.has(params.contact_require_premium) << 29) | (this.has(params.read_dates_private) << 30) | (this.has(params.about) << 1) | (this.has(params.personal_photo) << 21) | (this.has(params.profile_photo) << 2) | (this.has(params.fallback_photo) << 22) | (this.has(params.bot_info) << 3) | (this.has(params.pinned_msg_id) << 6) | (this.has(params.folder_id) << 11) | (this.has(params.ttl_period) << 14) | (this.has(params.theme_emoticon) << 15) | (this.has(params.private_forward_name) << 16) | (this.has(params.bot_group_admin_rights) << 17) | (this.has(params.bot_broadcast_admin_rights) << 18) | (this.has(params.premium_gifts) << 19) | (this.has(params.wallpaper) << 24) | (this.has(params.stories) << 25);
    this.int32(flags);
    const flags2 = (this.has(params.sponsored_enabled) << 7) | (this.has(params.can_view_revenue) << 9) | (this.has(params.bot_can_manage_emoji_status) << 10) | (this.has(params.business_work_hours) << 0) | (this.has(params.business_location) << 1) | (this.has(params.business_greeting_message) << 2) | (this.has(params.business_away_message) << 3) | (this.has(params.business_intro) << 4) | (this.has(params.birthday) << 5) | (this.has(params.personal_channel_id) << 6) | (this.has(params.personal_channel_message) << 6) | (this.has(params.stargifts_count) << 8) | (this.has(params.starref_program) << 11);
    this.int32(flags2);
    this.long(params.id);
    this.flag(this.string, params.about);
    this.predicate(params.settings);
    this.flag(this.predicate, params.personal_photo);
    this.flag(this.predicate, params.profile_photo);
    this.flag(this.predicate, params.fallback_photo);
    this.predicate(params.notify_settings);
    this.flag(this.predicate, params.bot_info);
    this.flag(this.int, params.pinned_msg_id);
    this.int(params.common_chats_count);
    this.flag(this.int, params.folder_id);
    this.flag(this.int, params.ttl_period);
    this.flag(this.string, params.theme_emoticon);
    this.flag(this.string, params.private_forward_name);
    this.flag(this.predicate, params.bot_group_admin_rights);
    this.flag(this.predicate, params.bot_broadcast_admin_rights);
    this.flagVector(this.predicate, params.premium_gifts);
    this.flag(this.predicate, params.wallpaper);
    this.flag(this.predicate, params.stories);
    this.flag(this.predicate, params.business_work_hours);
    this.flag(this.predicate, params.business_location);
    this.flag(this.predicate, params.business_greeting_message);
    this.flag(this.predicate, params.business_away_message);
    this.flag(this.predicate, params.business_intro);
    this.flag(this.predicate, params.birthday);
    this.flag(this.long, params.personal_channel_id);
    this.flag(this.int, params.personal_channel_message);
    this.flag(this.int, params.stargifts_count);
    this.flag(this.predicate, params.starref_program);
  },
  'contact': function(params) {
    this.int32(341499403);
    this.long(params.user_id);
    this.Bool(params.mutual);
  },
  'importedContact': function(params) {
    this.int32(-1052885936);
    this.long(params.user_id);
    this.long(params.client_id);
  },
  'contactStatus': function(params) {
    this.int32(383348795);
    this.long(params.user_id);
    this.predicate(params.status);
  },
  'contacts.contactsNotModified': function(params) {
    this.int32(-1219778094);
  },
  'contacts.contacts': function(params) {
    this.int32(-353862078);
    this.vector(this.predicate, params.contacts);
    this.int(params.saved_count);
    this.vector(this.predicate, params.users);
  },
  'contacts.importedContacts': function(params) {
    this.int32(2010127419);
    this.vector(this.predicate, params.imported);
    this.vector(this.predicate, params.popular_invites);
    this.vector(this.long, params.retry_contacts);
    this.vector(this.predicate, params.users);
  },
  'contacts.blocked': function(params) {
    this.int32(182326673);
    this.vector(this.predicate, params.blocked);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'contacts.blockedSlice': function(params) {
    this.int32(-513392236);
    this.int(params.count);
    this.vector(this.predicate, params.blocked);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.dialogs': function(params) {
    this.int32(364538944);
    this.vector(this.predicate, params.dialogs);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.dialogsSlice': function(params) {
    this.int32(1910543603);
    this.int(params.count);
    this.vector(this.predicate, params.dialogs);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.messages': function(params) {
    this.int32(-1938715001);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.messagesSlice': function(params) {
    this.int32(978610270);
    const flags = (this.has(params.inexact) << 1) | (this.has(params.next_rate) << 0) | (this.has(params.offset_id_offset) << 2);
    this.int32(flags);
    this.int(params.count);
    this.flag(this.int, params.next_rate);
    this.flag(this.int, params.offset_id_offset);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.chats': function(params) {
    this.int32(1694474197);
    this.vector(this.predicate, params.chats);
  },
  'messages.chatFull': function(params) {
    this.int32(-438840932);
    this.predicate(params.full_chat);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.affectedHistory': function(params) {
    this.int32(-1269012015);
    this.int(params.pts);
    this.int(params.pts_count);
    this.int(params.offset);
  },
  'inputMessagesFilterEmpty': function(params) {
    this.int32(1474492012);
  },
  'inputMessagesFilterPhotos': function(params) {
    this.int32(-1777752804);
  },
  'inputMessagesFilterVideo': function(params) {
    this.int32(-1614803355);
  },
  'inputMessagesFilterPhotoVideo': function(params) {
    this.int32(1458172132);
  },
  'inputMessagesFilterDocument': function(params) {
    this.int32(-1629621880);
  },
  'inputMessagesFilterUrl': function(params) {
    this.int32(2129714567);
  },
  'inputMessagesFilterGif': function(params) {
    this.int32(-3644025);
  },
  'updateNewMessage': function(params) {
    this.int32(522914557);
    this.predicate(params.message);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateMessageID': function(params) {
    this.int32(1318109142);
    this.int(params.id);
    this.long(params.random_id);
  },
  'updateDeleteMessages': function(params) {
    this.int32(-1576161051);
    this.vector(this.int, params.messages);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateUserTyping': function(params) {
    this.int32(-1071741569);
    this.long(params.user_id);
    this.predicate(params.action);
  },
  'updateChatUserTyping': function(params) {
    this.int32(-2092401936);
    this.long(params.chat_id);
    this.predicate(params.from_id);
    this.predicate(params.action);
  },
  'updateChatParticipants': function(params) {
    this.int32(125178264);
    this.predicate(params.participants);
  },
  'updateUserStatus': function(params) {
    this.int32(-440534818);
    this.long(params.user_id);
    this.predicate(params.status);
  },
  'updateUserName': function(params) {
    this.int32(-1484486364);
    this.long(params.user_id);
    this.string(params.first_name);
    this.string(params.last_name);
    this.vector(this.predicate, params.usernames);
  },
  'updateNewAuthorization': function(params) {
    this.int32(-1991136273);
    const flags = (this.has(params.unconfirmed) << 0) | (this.has(params.date) << 0) | (this.has(params.device) << 0) | (this.has(params.location) << 0);
    this.int32(flags);
    this.long(params.hash);
    this.flag(this.int, params.date);
    this.flag(this.string, params.device);
    this.flag(this.string, params.location);
  },
  'updates.state': function(params) {
    this.int32(-1519637954);
    this.int(params.pts);
    this.int(params.qts);
    this.int(params.date);
    this.int(params.seq);
    this.int(params.unread_count);
  },
  'updates.differenceEmpty': function(params) {
    this.int32(1567990072);
    this.int(params.date);
    this.int(params.seq);
  },
  'updates.difference': function(params) {
    this.int32(16030880);
    this.vector(this.predicate, params.new_messages);
    this.vector(this.predicate, params.new_encrypted_messages);
    this.vector(this.predicate, params.other_updates);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.predicate(params.state);
  },
  'updates.differenceSlice': function(params) {
    this.int32(-1459938943);
    this.vector(this.predicate, params.new_messages);
    this.vector(this.predicate, params.new_encrypted_messages);
    this.vector(this.predicate, params.other_updates);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.predicate(params.intermediate_state);
  },
  'updatesTooLong': function(params) {
    this.int32(-484987010);
  },
  'updateShortMessage': function(params) {
    this.int32(826001400);
    const flags = (this.has(params.out) << 1) | (this.has(params.mentioned) << 4) | (this.has(params.media_unread) << 5) | (this.has(params.silent) << 13) | (this.has(params.fwd_from) << 2) | (this.has(params.via_bot_id) << 11) | (this.has(params.reply_to) << 3) | (this.has(params.entities) << 7) | (this.has(params.ttl_period) << 25);
    this.int32(flags);
    this.int(params.id);
    this.long(params.user_id);
    this.string(params.message);
    this.int(params.pts);
    this.int(params.pts_count);
    this.int(params.date);
    this.flag(this.predicate, params.fwd_from);
    this.flag(this.long, params.via_bot_id);
    this.flag(this.predicate, params.reply_to);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.int, params.ttl_period);
  },
  'updateShortChatMessage': function(params) {
    this.int32(1299050149);
    const flags = (this.has(params.out) << 1) | (this.has(params.mentioned) << 4) | (this.has(params.media_unread) << 5) | (this.has(params.silent) << 13) | (this.has(params.fwd_from) << 2) | (this.has(params.via_bot_id) << 11) | (this.has(params.reply_to) << 3) | (this.has(params.entities) << 7) | (this.has(params.ttl_period) << 25);
    this.int32(flags);
    this.int(params.id);
    this.long(params.from_id);
    this.long(params.chat_id);
    this.string(params.message);
    this.int(params.pts);
    this.int(params.pts_count);
    this.int(params.date);
    this.flag(this.predicate, params.fwd_from);
    this.flag(this.long, params.via_bot_id);
    this.flag(this.predicate, params.reply_to);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.int, params.ttl_period);
  },
  'updateShort': function(params) {
    this.int32(2027216577);
    this.predicate(params.update);
    this.int(params.date);
  },
  'updatesCombined': function(params) {
    this.int32(1918567619);
    this.vector(this.predicate, params.updates);
    this.vector(this.predicate, params.users);
    this.vector(this.predicate, params.chats);
    this.int(params.date);
    this.int(params.seq_start);
    this.int(params.seq);
  },
  'updates': function(params) {
    this.int32(1957577280);
    this.vector(this.predicate, params.updates);
    this.vector(this.predicate, params.users);
    this.vector(this.predicate, params.chats);
    this.int(params.date);
    this.int(params.seq);
  },
  'photos.photos': function(params) {
    this.int32(-1916114267);
    this.vector(this.predicate, params.photos);
    this.vector(this.predicate, params.users);
  },
  'photos.photosSlice': function(params) {
    this.int32(352657236);
    this.int(params.count);
    this.vector(this.predicate, params.photos);
    this.vector(this.predicate, params.users);
  },
  'photos.photo': function(params) {
    this.int32(539045032);
    this.predicate(params.photo);
    this.vector(this.predicate, params.users);
  },
  'upload.file': function(params) {
    this.int32(157948117);
    this.predicate(params.type);
    this.int(params.mtime);
    this.bytes(params.bytes);
  },
  'dcOption': function(params) {
    this.int32(414687501);
    const flags = (this.has(params.ipv6) << 0) | (this.has(params.media_only) << 1) | (this.has(params.tcpo_only) << 2) | (this.has(params.cdn) << 3) | (this.has(params.static) << 4) | (this.has(params.this_port_only) << 5) | (this.has(params.secret) << 10);
    this.int32(flags);
    this.int(params.id);
    this.string(params.ip_address);
    this.int(params.port);
    this.flag(this.bytes, params.secret);
  },
  'config': function(params) {
    this.int32(-870702050);
    const flags = (this.has(params.default_p2p_contacts) << 3) | (this.has(params.preload_featured_stickers) << 4) | (this.has(params.revoke_pm_inbox) << 6) | (this.has(params.blocked_mode) << 8) | (this.has(params.force_try_ipv6) << 14) | (this.has(params.tmp_sessions) << 0) | (this.has(params.autoupdate_url_prefix) << 7) | (this.has(params.gif_search_username) << 9) | (this.has(params.venue_search_username) << 10) | (this.has(params.img_search_username) << 11) | (this.has(params.static_maps_provider) << 12) | (this.has(params.suggested_lang_code) << 2) | (this.has(params.lang_pack_version) << 2) | (this.has(params.base_lang_pack_version) << 2) | (this.has(params.reactions_default) << 15) | (this.has(params.autologin_token) << 16);
    this.int32(flags);
    this.int(params.date);
    this.int(params.expires);
    this.Bool(params.test_mode);
    this.int(params.this_dc);
    this.vector(this.predicate, params.dc_options);
    this.string(params.dc_txt_domain_name);
    this.int(params.chat_size_max);
    this.int(params.megagroup_size_max);
    this.int(params.forwarded_count_max);
    this.int(params.online_update_period_ms);
    this.int(params.offline_blur_timeout_ms);
    this.int(params.offline_idle_timeout_ms);
    this.int(params.online_cloud_timeout_ms);
    this.int(params.notify_cloud_delay_ms);
    this.int(params.notify_default_delay_ms);
    this.int(params.push_chat_period_ms);
    this.int(params.push_chat_limit);
    this.int(params.edit_time_limit);
    this.int(params.revoke_time_limit);
    this.int(params.revoke_pm_time_limit);
    this.int(params.rating_e_decay);
    this.int(params.stickers_recent_limit);
    this.int(params.channels_read_media_period);
    this.flag(this.int, params.tmp_sessions);
    this.int(params.call_receive_timeout_ms);
    this.int(params.call_ring_timeout_ms);
    this.int(params.call_connect_timeout_ms);
    this.int(params.call_packet_timeout_ms);
    this.string(params.me_url_prefix);
    this.flag(this.string, params.autoupdate_url_prefix);
    this.flag(this.string, params.gif_search_username);
    this.flag(this.string, params.venue_search_username);
    this.flag(this.string, params.img_search_username);
    this.flag(this.string, params.static_maps_provider);
    this.int(params.caption_length_max);
    this.int(params.message_length_max);
    this.int(params.webfile_dc_id);
    this.flag(this.string, params.suggested_lang_code);
    this.flag(this.int, params.lang_pack_version);
    this.flag(this.int, params.base_lang_pack_version);
    this.flag(this.predicate, params.reactions_default);
    this.flag(this.string, params.autologin_token);
  },
  'nearestDc': function(params) {
    this.int32(-1910892683);
    this.string(params.country);
    this.int(params.this_dc);
    this.int(params.nearest_dc);
  },
  'help.appUpdate': function(params) {
    this.int32(-860107216);
    const flags = (this.has(params.can_not_skip) << 0) | (this.has(params.document) << 1) | (this.has(params.url) << 2) | (this.has(params.sticker) << 3);
    this.int32(flags);
    this.int(params.id);
    this.string(params.version);
    this.string(params.text);
    this.vector(this.predicate, params.entities);
    this.flag(this.predicate, params.document);
    this.flag(this.string, params.url);
    this.flag(this.predicate, params.sticker);
  },
  'help.noAppUpdate': function(params) {
    this.int32(-1000708810);
  },
  'help.inviteText': function(params) {
    this.int32(415997816);
    this.string(params.message);
  },
  'updateNewEncryptedMessage': function(params) {
    this.int32(314359194);
    this.predicate(params.message);
    this.int(params.qts);
  },
  'updateEncryptedChatTyping': function(params) {
    this.int32(386986326);
    this.int(params.chat_id);
  },
  'updateEncryption': function(params) {
    this.int32(-1264392051);
    this.predicate(params.chat);
    this.int(params.date);
  },
  'updateEncryptedMessagesRead': function(params) {
    this.int32(956179895);
    this.int(params.chat_id);
    this.int(params.max_date);
    this.int(params.date);
  },
  'encryptedChatEmpty': function(params) {
    this.int32(-1417756512);
    this.int(params.id);
  },
  'encryptedChatWaiting': function(params) {
    this.int32(1722964307);
    this.int(params.id);
    this.long(params.access_hash);
    this.int(params.date);
    this.long(params.admin_id);
    this.long(params.participant_id);
  },
  'encryptedChatRequested': function(params) {
    this.int32(1223809356);
    const flags = (this.has(params.folder_id) << 0);
    this.int32(flags);
    this.flag(this.int, params.folder_id);
    this.int(params.id);
    this.long(params.access_hash);
    this.int(params.date);
    this.long(params.admin_id);
    this.long(params.participant_id);
    this.bytes(params.g_a);
  },
  'encryptedChat': function(params) {
    this.int32(1643173063);
    this.int(params.id);
    this.long(params.access_hash);
    this.int(params.date);
    this.long(params.admin_id);
    this.long(params.participant_id);
    this.bytes(params.g_a_or_b);
    this.long(params.key_fingerprint);
  },
  'encryptedChatDiscarded': function(params) {
    this.int32(505183301);
    const flags = (this.has(params.history_deleted) << 0);
    this.int32(flags);
    this.int(params.id);
  },
  'inputEncryptedChat': function(params) {
    this.int32(-247351839);
    this.int(params.chat_id);
    this.long(params.access_hash);
  },
  'encryptedFileEmpty': function(params) {
    this.int32(-1038136962);
  },
  'encryptedFile': function(params) {
    this.int32(-1476358952);
    this.long(params.id);
    this.long(params.access_hash);
    this.long(params.size);
    this.int(params.dc_id);
    this.int(params.key_fingerprint);
  },
  'inputEncryptedFileEmpty': function(params) {
    this.int32(406307684);
  },
  'inputEncryptedFileUploaded': function(params) {
    this.int32(1690108678);
    this.long(params.id);
    this.int(params.parts);
    this.string(params.md5_checksum);
    this.int(params.key_fingerprint);
  },
  'inputEncryptedFile': function(params) {
    this.int32(1511503333);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputEncryptedFileLocation': function(params) {
    this.int32(-182231723);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'encryptedMessage': function(params) {
    this.int32(-317144808);
    this.long(params.random_id);
    this.int(params.chat_id);
    this.int(params.date);
    this.bytes(params.bytes);
    this.predicate(params.file);
  },
  'encryptedMessageService': function(params) {
    this.int32(594758406);
    this.long(params.random_id);
    this.int(params.chat_id);
    this.int(params.date);
    this.bytes(params.bytes);
  },
  'messages.dhConfigNotModified': function(params) {
    this.int32(-1058912715);
    this.bytes(params.random);
  },
  'messages.dhConfig': function(params) {
    this.int32(740433629);
    this.int(params.g);
    this.bytes(params.p);
    this.int(params.version);
    this.bytes(params.random);
  },
  'messages.sentEncryptedMessage': function(params) {
    this.int32(1443858741);
    this.int(params.date);
  },
  'messages.sentEncryptedFile': function(params) {
    this.int32(-1802240206);
    this.int(params.date);
    this.predicate(params.file);
  },
  'inputFileBig': function(params) {
    this.int32(-95482955);
    this.long(params.id);
    this.int(params.parts);
    this.string(params.name);
  },
  'inputEncryptedFileBigUploaded': function(params) {
    this.int32(767652808);
    this.long(params.id);
    this.int(params.parts);
    this.int(params.key_fingerprint);
  },
  'updateChatParticipantAdd': function(params) {
    this.int32(1037718609);
    this.long(params.chat_id);
    this.long(params.user_id);
    this.long(params.inviter_id);
    this.int(params.date);
    this.int(params.version);
  },
  'updateChatParticipantDelete': function(params) {
    this.int32(-483443337);
    this.long(params.chat_id);
    this.long(params.user_id);
    this.int(params.version);
  },
  'updateDcOptions': function(params) {
    this.int32(-1906403213);
    this.vector(this.predicate, params.dc_options);
  },
  'inputMediaUploadedDocument': function(params) {
    this.int32(1530447553);
    const flags = (this.has(params.nosound_video) << 3) | (this.has(params.force_file) << 4) | (this.has(params.spoiler) << 5) | (this.has(params.thumb) << 2) | (this.has(params.stickers) << 0) | (this.has(params.ttl_seconds) << 1);
    this.int32(flags);
    this.predicate(params.file);
    this.flag(this.predicate, params.thumb);
    this.string(params.mime_type);
    this.vector(this.predicate, params.attributes);
    this.flagVector(this.predicate, params.stickers);
    this.flag(this.int, params.ttl_seconds);
  },
  'inputMediaDocument': function(params) {
    this.int32(860303448);
    const flags = (this.has(params.spoiler) << 2) | (this.has(params.ttl_seconds) << 0) | (this.has(params.query) << 1);
    this.int32(flags);
    this.predicate(params.id);
    this.flag(this.int, params.ttl_seconds);
    this.flag(this.string, params.query);
  },
  'messageMediaDocument': function(params) {
    this.int32(-581497899);
    const flags = (this.has(params.nopremium) << 3) | (this.has(params.spoiler) << 4) | (this.has(params.video) << 6) | (this.has(params.round) << 7) | (this.has(params.voice) << 8) | (this.has(params.document) << 0) | (this.has(params.alt_documents) << 5) | (this.has(params.ttl_seconds) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.document);
    this.flagVector(this.predicate, params.alt_documents);
    this.flag(this.int, params.ttl_seconds);
  },
  'inputDocumentEmpty': function(params) {
    this.int32(1928391342);
  },
  'inputDocument': function(params) {
    this.int32(448771445);
    this.long(params.id);
    this.long(params.access_hash);
    this.bytes(params.file_reference);
  },
  'inputDocumentFileLocation': function(params) {
    this.int32(-1160743548);
    this.long(params.id);
    this.long(params.access_hash);
    this.bytes(params.file_reference);
    this.string(params.thumb_size);
  },
  'documentEmpty': function(params) {
    this.int32(922273905);
    this.long(params.id);
  },
  'document': function(params) {
    this.int32(-1881881384);
    const flags = (this.has(params.thumbs) << 0) | (this.has(params.video_thumbs) << 1);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.bytes(params.file_reference);
    this.int(params.date);
    this.string(params.mime_type);
    this.long(params.size);
    this.flagVector(this.predicate, params.thumbs);
    this.flagVector(this.predicate, params.video_thumbs);
    this.int(params.dc_id);
    this.vector(this.predicate, params.attributes);
  },
  'help.support': function(params) {
    this.int32(398898678);
    this.string(params.phone_number);
    this.predicate(params.user);
  },
  'notifyPeer': function(params) {
    this.int32(-1613493288);
    this.predicate(params.peer);
  },
  'notifyUsers': function(params) {
    this.int32(-1261946036);
  },
  'notifyChats': function(params) {
    this.int32(-1073230141);
  },
  'updateNotifySettings': function(params) {
    this.int32(-1094555409);
    this.predicate(params.peer);
    this.predicate(params.notify_settings);
  },
  'sendMessageTypingAction': function(params) {
    this.int32(381645902);
  },
  'sendMessageCancelAction': function(params) {
    this.int32(-44119819);
  },
  'sendMessageRecordVideoAction': function(params) {
    this.int32(-1584933265);
  },
  'sendMessageUploadVideoAction': function(params) {
    this.int32(-378127636);
    this.int(params.progress);
  },
  'sendMessageRecordAudioAction': function(params) {
    this.int32(-718310409);
  },
  'sendMessageUploadAudioAction': function(params) {
    this.int32(-212740181);
    this.int(params.progress);
  },
  'sendMessageUploadPhotoAction': function(params) {
    this.int32(-774682074);
    this.int(params.progress);
  },
  'sendMessageUploadDocumentAction': function(params) {
    this.int32(-1441998364);
    this.int(params.progress);
  },
  'sendMessageGeoLocationAction': function(params) {
    this.int32(393186209);
  },
  'sendMessageChooseContactAction': function(params) {
    this.int32(1653390447);
  },
  'contacts.found': function(params) {
    this.int32(-1290580579);
    this.vector(this.predicate, params.my_results);
    this.vector(this.predicate, params.results);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'updateServiceNotification': function(params) {
    this.int32(-337352679);
    const flags = (this.has(params.popup) << 0) | (this.has(params.invert_media) << 2) | (this.has(params.inbox_date) << 1);
    this.int32(flags);
    this.flag(this.int, params.inbox_date);
    this.string(params.type);
    this.string(params.message);
    this.predicate(params.media);
    this.vector(this.predicate, params.entities);
  },
  'userStatusRecently': function(params) {
    this.int32(2065268168);
    const flags = (this.has(params.by_me) << 0);
    this.int32(flags);
  },
  'userStatusLastWeek': function(params) {
    this.int32(1410997530);
    const flags = (this.has(params.by_me) << 0);
    this.int32(flags);
  },
  'userStatusLastMonth': function(params) {
    this.int32(1703516023);
    const flags = (this.has(params.by_me) << 0);
    this.int32(flags);
  },
  'updatePrivacy': function(params) {
    this.int32(-298113238);
    this.predicate(params.key);
    this.vector(this.predicate, params.rules);
  },
  'inputPrivacyKeyStatusTimestamp': function(params) {
    this.int32(1335282456);
  },
  'privacyKeyStatusTimestamp': function(params) {
    this.int32(-1137792208);
  },
  'inputPrivacyValueAllowContacts': function(params) {
    this.int32(218751099);
  },
  'inputPrivacyValueAllowAll': function(params) {
    this.int32(407582158);
  },
  'inputPrivacyValueAllowUsers': function(params) {
    this.int32(320652927);
    this.vector(this.predicate, params.users);
  },
  'inputPrivacyValueDisallowContacts': function(params) {
    this.int32(195371015);
  },
  'inputPrivacyValueDisallowAll': function(params) {
    this.int32(-697604407);
  },
  'inputPrivacyValueDisallowUsers': function(params) {
    this.int32(-1877932953);
    this.vector(this.predicate, params.users);
  },
  'privacyValueAllowContacts': function(params) {
    this.int32(-123988);
  },
  'privacyValueAllowAll': function(params) {
    this.int32(1698855810);
  },
  'privacyValueAllowUsers': function(params) {
    this.int32(-1198497870);
    this.vector(this.long, params.users);
  },
  'privacyValueDisallowContacts': function(params) {
    this.int32(-125240806);
  },
  'privacyValueDisallowAll': function(params) {
    this.int32(-1955338397);
  },
  'privacyValueDisallowUsers': function(params) {
    this.int32(-463335103);
    this.vector(this.long, params.users);
  },
  'account.privacyRules': function(params) {
    this.int32(1352683077);
    this.vector(this.predicate, params.rules);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'accountDaysTTL': function(params) {
    this.int32(-1194283041);
    this.int(params.days);
  },
  'updateUserPhone': function(params) {
    this.int32(88680979);
    this.long(params.user_id);
    this.string(params.phone);
  },
  'documentAttributeImageSize': function(params) {
    this.int32(1815593308);
    this.int(params.w);
    this.int(params.h);
  },
  'documentAttributeAnimated': function(params) {
    this.int32(297109817);
  },
  'documentAttributeSticker': function(params) {
    this.int32(1662637586);
    const flags = (this.has(params.mask) << 1) | (this.has(params.mask_coords) << 0);
    this.int32(flags);
    this.string(params.alt);
    this.predicate(params.stickerset);
    this.flag(this.predicate, params.mask_coords);
  },
  'documentAttributeVideo': function(params) {
    this.int32(1137015880);
    const flags = (this.has(params.round_message) << 0) | (this.has(params.supports_streaming) << 1) | (this.has(params.nosound) << 3) | (this.has(params.preload_prefix_size) << 2) | (this.has(params.video_start_ts) << 4) | (this.has(params.video_codec) << 5);
    this.int32(flags);
    this.double(params.duration);
    this.int(params.w);
    this.int(params.h);
    this.flag(this.int, params.preload_prefix_size);
    this.flag(this.double, params.video_start_ts);
    this.flag(this.string, params.video_codec);
  },
  'documentAttributeAudio': function(params) {
    this.int32(-1739392570);
    const flags = (this.has(params.voice) << 10) | (this.has(params.title) << 0) | (this.has(params.performer) << 1) | (this.has(params.waveform) << 2);
    this.int32(flags);
    this.int(params.duration);
    this.flag(this.string, params.title);
    this.flag(this.string, params.performer);
    this.flag(this.bytes, params.waveform);
  },
  'documentAttributeFilename': function(params) {
    this.int32(358154344);
    this.string(params.file_name);
  },
  'messages.stickersNotModified': function(params) {
    this.int32(-244016606);
  },
  'messages.stickers': function(params) {
    this.int32(816245886);
    this.long(params.hash);
    this.vector(this.predicate, params.stickers);
  },
  'stickerPack': function(params) {
    this.int32(313694676);
    this.string(params.emoticon);
    this.vector(this.long, params.documents);
  },
  'messages.allStickersNotModified': function(params) {
    this.int32(-395967805);
  },
  'messages.allStickers': function(params) {
    this.int32(-843329861);
    this.long(params.hash);
    this.vector(this.predicate, params.sets);
  },
  'updateReadHistoryInbox': function(params) {
    this.int32(-1667805217);
    const flags = (this.has(params.folder_id) << 0);
    this.int32(flags);
    this.flag(this.int, params.folder_id);
    this.predicate(params.peer);
    this.int(params.max_id);
    this.int(params.still_unread_count);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateReadHistoryOutbox': function(params) {
    this.int32(791617983);
    this.predicate(params.peer);
    this.int(params.max_id);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'messages.affectedMessages': function(params) {
    this.int32(-2066640507);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateWebPage': function(params) {
    this.int32(2139689491);
    this.predicate(params.webpage);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'webPageEmpty': function(params) {
    this.int32(555358088);
    const flags = (this.has(params.url) << 0);
    this.int32(flags);
    this.long(params.id);
    this.flag(this.string, params.url);
  },
  'webPagePending': function(params) {
    this.int32(-1328464313);
    const flags = (this.has(params.url) << 0);
    this.int32(flags);
    this.long(params.id);
    this.flag(this.string, params.url);
    this.int(params.date);
  },
  'webPage': function(params) {
    this.int32(-392411726);
    const flags = (this.has(params.has_large_media) << 13) | (this.has(params.video_cover_photo) << 14) | (this.has(params.type) << 0) | (this.has(params.site_name) << 1) | (this.has(params.title) << 2) | (this.has(params.description) << 3) | (this.has(params.photo) << 4) | (this.has(params.embed_url) << 5) | (this.has(params.embed_type) << 5) | (this.has(params.embed_width) << 6) | (this.has(params.embed_height) << 6) | (this.has(params.duration) << 7) | (this.has(params.author) << 8) | (this.has(params.document) << 9) | (this.has(params.cached_page) << 10) | (this.has(params.attributes) << 12);
    this.int32(flags);
    this.long(params.id);
    this.string(params.url);
    this.string(params.display_url);
    this.int(params.hash);
    this.flag(this.string, params.type);
    this.flag(this.string, params.site_name);
    this.flag(this.string, params.title);
    this.flag(this.string, params.description);
    this.flag(this.predicate, params.photo);
    this.flag(this.string, params.embed_url);
    this.flag(this.string, params.embed_type);
    this.flag(this.int, params.embed_width);
    this.flag(this.int, params.embed_height);
    this.flag(this.int, params.duration);
    this.flag(this.string, params.author);
    this.flag(this.predicate, params.document);
    this.flag(this.predicate, params.cached_page);
    this.flagVector(this.predicate, params.attributes);
  },
  'messageMediaWebPage': function(params) {
    this.int32(-571405253);
    const flags = (this.has(params.force_large_media) << 0) | (this.has(params.force_small_media) << 1) | (this.has(params.manual) << 3) | (this.has(params.safe) << 4);
    this.int32(flags);
    this.predicate(params.webpage);
  },
  'authorization': function(params) {
    this.int32(-1392388579);
    const flags = (this.has(params.current) << 0) | (this.has(params.official_app) << 1) | (this.has(params.password_pending) << 2) | (this.has(params.encrypted_requests_disabled) << 3) | (this.has(params.call_requests_disabled) << 4) | (this.has(params.unconfirmed) << 5);
    this.int32(flags);
    this.long(params.hash);
    this.string(params.device_model);
    this.string(params.platform);
    this.string(params.system_version);
    this.int(params.api_id);
    this.string(params.app_name);
    this.string(params.app_version);
    this.int(params.date_created);
    this.int(params.date_active);
    this.string(params.ip);
    this.string(params.country);
    this.string(params.region);
  },
  'account.authorizations': function(params) {
    this.int32(1275039392);
    this.int(params.authorization_ttl_days);
    this.vector(this.predicate, params.authorizations);
  },
  'account.password': function(params) {
    this.int32(-1787080453);
    const flags = (this.has(params.has_recovery) << 0) | (this.has(params.has_secure_values) << 1) | (this.has(params.has_password) << 2) | (this.has(params.current_algo) << 2) | (this.has(params.srp_B) << 2) | (this.has(params.srp_id) << 2) | (this.has(params.hint) << 3) | (this.has(params.email_unconfirmed_pattern) << 4) | (this.has(params.pending_reset_date) << 5) | (this.has(params.login_email_pattern) << 6);
    this.int32(flags);
    this.flag(this.predicate, params.current_algo);
    this.flag(this.bytes, params.srp_B);
    this.flag(this.long, params.srp_id);
    this.flag(this.string, params.hint);
    this.flag(this.string, params.email_unconfirmed_pattern);
    this.predicate(params.new_algo);
    this.predicate(params.new_secure_algo);
    this.bytes(params.secure_random);
    this.flag(this.int, params.pending_reset_date);
    this.flag(this.string, params.login_email_pattern);
  },
  'account.passwordSettings': function(params) {
    this.int32(-1705233435);
    const flags = (this.has(params.email) << 0) | (this.has(params.secure_settings) << 1);
    this.int32(flags);
    this.flag(this.string, params.email);
    this.flag(this.predicate, params.secure_settings);
  },
  'account.passwordInputSettings': function(params) {
    this.int32(-1036572727);
    const flags = (this.has(params.new_algo) << 0) | (this.has(params.new_password_hash) << 0) | (this.has(params.hint) << 0) | (this.has(params.email) << 1) | (this.has(params.new_secure_settings) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.new_algo);
    this.flag(this.bytes, params.new_password_hash);
    this.flag(this.string, params.hint);
    this.flag(this.string, params.email);
    this.flag(this.predicate, params.new_secure_settings);
  },
  'auth.passwordRecovery': function(params) {
    this.int32(326715557);
    this.string(params.email_pattern);
  },
  'inputMediaVenue': function(params) {
    this.int32(-1052959727);
    this.predicate(params.geo_point);
    this.string(params.title);
    this.string(params.address);
    this.string(params.provider);
    this.string(params.venue_id);
    this.string(params.venue_type);
  },
  'messageMediaVenue': function(params) {
    this.int32(784356159);
    this.predicate(params.geo);
    this.string(params.title);
    this.string(params.address);
    this.string(params.provider);
    this.string(params.venue_id);
    this.string(params.venue_type);
  },
  'receivedNotifyMessage': function(params) {
    this.int32(-1551583367);
    this.int(params.id);
    this.int(params.flags);
  },
  'chatInviteExported': function(params) {
    this.int32(-1574126186);
    const flags = (this.has(params.revoked) << 0) | (this.has(params.permanent) << 5) | (this.has(params.request_needed) << 6) | (this.has(params.start_date) << 4) | (this.has(params.expire_date) << 1) | (this.has(params.usage_limit) << 2) | (this.has(params.usage) << 3) | (this.has(params.requested) << 7) | (this.has(params.subscription_expired) << 10) | (this.has(params.title) << 8) | (this.has(params.subscription_pricing) << 9);
    this.int32(flags);
    this.string(params.link);
    this.long(params.admin_id);
    this.int(params.date);
    this.flag(this.int, params.start_date);
    this.flag(this.int, params.expire_date);
    this.flag(this.int, params.usage_limit);
    this.flag(this.int, params.usage);
    this.flag(this.int, params.requested);
    this.flag(this.int, params.subscription_expired);
    this.flag(this.string, params.title);
    this.flag(this.predicate, params.subscription_pricing);
  },
  'chatInviteAlready': function(params) {
    this.int32(1516793212);
    this.predicate(params.chat);
  },
  'chatInvite': function(params) {
    this.int32(-26920803);
    const flags = (this.has(params.channel) << 0) | (this.has(params.broadcast) << 1) | (this.has(params.public) << 2) | (this.has(params.megagroup) << 3) | (this.has(params.request_needed) << 6) | (this.has(params.verified) << 7) | (this.has(params.scam) << 8) | (this.has(params.fake) << 9) | (this.has(params.can_refulfill_subscription) << 11) | (this.has(params.about) << 5) | (this.has(params.participants) << 4) | (this.has(params.subscription_pricing) << 10) | (this.has(params.subscription_form_id) << 12);
    this.int32(flags);
    this.string(params.title);
    this.flag(this.string, params.about);
    this.predicate(params.photo);
    this.int(params.participants_count);
    this.flagVector(this.predicate, params.participants);
    this.int(params.color);
    this.flag(this.predicate, params.subscription_pricing);
    this.flag(this.long, params.subscription_form_id);
  },
  'messageActionChatJoinedByLink': function(params) {
    this.int32(51520707);
    this.long(params.inviter_id);
  },
  'updateReadMessagesContents': function(params) {
    this.int32(-131960447);
    const flags = (this.has(params.date) << 0);
    this.int32(flags);
    this.vector(this.int, params.messages);
    this.int(params.pts);
    this.int(params.pts_count);
    this.flag(this.int, params.date);
  },
  'inputStickerSetEmpty': function(params) {
    this.int32(-4838507);
  },
  'inputStickerSetID': function(params) {
    this.int32(-1645763991);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputStickerSetShortName': function(params) {
    this.int32(-2044933984);
    this.string(params.short_name);
  },
  'stickerSet': function(params) {
    this.int32(768691932);
    const flags = (this.has(params.archived) << 1) | (this.has(params.official) << 2) | (this.has(params.masks) << 3) | (this.has(params.emojis) << 7) | (this.has(params.text_color) << 9) | (this.has(params.channel_emoji_status) << 10) | (this.has(params.creator) << 11) | (this.has(params.installed_date) << 0) | (this.has(params.thumbs) << 4) | (this.has(params.thumb_dc_id) << 4) | (this.has(params.thumb_version) << 4) | (this.has(params.thumb_document_id) << 8);
    this.int32(flags);
    this.flag(this.int, params.installed_date);
    this.long(params.id);
    this.long(params.access_hash);
    this.string(params.title);
    this.string(params.short_name);
    this.flagVector(this.predicate, params.thumbs);
    this.flag(this.int, params.thumb_dc_id);
    this.flag(this.int, params.thumb_version);
    this.flag(this.long, params.thumb_document_id);
    this.int(params.count);
    this.int(params.hash);
  },
  'messages.stickerSet': function(params) {
    this.int32(1846886166);
    this.predicate(params.set);
    this.vector(this.predicate, params.packs);
    this.vector(this.predicate, params.keywords);
    this.vector(this.predicate, params.documents);
  },
  'user': function(params) {
    this.int32(-2093920310);
    const flags = (this.has(params.self) << 10) | (this.has(params.contact) << 11) | (this.has(params.mutual_contact) << 12) | (this.has(params.deleted) << 13) | (this.has(params.bot) << 14) | (this.has(params.bot_chat_history) << 15) | (this.has(params.bot_nochats) << 16) | (this.has(params.verified) << 17) | (this.has(params.restricted) << 18) | (this.has(params.min) << 20) | (this.has(params.bot_inline_geo) << 21) | (this.has(params.support) << 23) | (this.has(params.scam) << 24) | (this.has(params.apply_min_photo) << 25) | (this.has(params.fake) << 26) | (this.has(params.bot_attach_menu) << 27) | (this.has(params.premium) << 28) | (this.has(params.attach_menu_enabled) << 29) | (this.has(params.access_hash) << 0) | (this.has(params.first_name) << 1) | (this.has(params.last_name) << 2) | (this.has(params.username) << 3) | (this.has(params.phone) << 4) | (this.has(params.photo) << 5) | (this.has(params.status) << 6) | (this.has(params.bot_info_version) << 14) | (this.has(params.restriction_reason) << 18) | (this.has(params.bot_inline_placeholder) << 19) | (this.has(params.lang_code) << 22) | (this.has(params.emoji_status) << 30);
    this.int32(flags);
    const flags2 = (this.has(params.bot_can_edit) << 1) | (this.has(params.close_friend) << 2) | (this.has(params.stories_hidden) << 3) | (this.has(params.stories_unavailable) << 4) | (this.has(params.contact_require_premium) << 10) | (this.has(params.bot_business) << 11) | (this.has(params.bot_has_main_app) << 13) | (this.has(params.usernames) << 0) | (this.has(params.stories_max_id) << 5) | (this.has(params.color) << 8) | (this.has(params.profile_color) << 9) | (this.has(params.bot_active_users) << 12);
    this.int32(flags2);
    this.long(params.id);
    this.flag(this.long, params.access_hash);
    this.flag(this.string, params.first_name);
    this.flag(this.string, params.last_name);
    this.flag(this.string, params.username);
    this.flag(this.string, params.phone);
    this.flag(this.predicate, params.photo);
    this.flag(this.predicate, params.status);
    this.flag(this.int, params.bot_info_version);
    this.flagVector(this.predicate, params.restriction_reason);
    this.flag(this.string, params.bot_inline_placeholder);
    this.flag(this.string, params.lang_code);
    this.flag(this.predicate, params.emoji_status);
    this.flagVector(this.predicate, params.usernames);
    this.flag(this.int, params.stories_max_id);
    this.flag(this.predicate, params.color);
    this.flag(this.predicate, params.profile_color);
    this.flag(this.int, params.bot_active_users);
  },
  'botCommand': function(params) {
    this.int32(-1032140601);
    this.string(params.command);
    this.string(params.description);
  },
  'botInfo': function(params) {
    this.int32(912290611);
    const flags = (this.has(params.has_preview_medias) << 6) | (this.has(params.user_id) << 0) | (this.has(params.description) << 1) | (this.has(params.description_photo) << 4) | (this.has(params.description_document) << 5) | (this.has(params.commands) << 2) | (this.has(params.menu_button) << 3) | (this.has(params.privacy_policy_url) << 7) | (this.has(params.app_settings) << 8);
    this.int32(flags);
    this.flag(this.long, params.user_id);
    this.flag(this.string, params.description);
    this.flag(this.predicate, params.description_photo);
    this.flag(this.predicate, params.description_document);
    this.flagVector(this.predicate, params.commands);
    this.flag(this.predicate, params.menu_button);
    this.flag(this.string, params.privacy_policy_url);
    this.flag(this.predicate, params.app_settings);
  },
  'keyboardButton': function(params) {
    this.int32(-1560655744);
    this.string(params.text);
  },
  'keyboardButtonRow': function(params) {
    this.int32(2002815875);
    this.vector(this.predicate, params.buttons);
  },
  'replyKeyboardHide': function(params) {
    this.int32(-1606526075);
    const flags = (this.has(params.selective) << 2);
    this.int32(flags);
  },
  'replyKeyboardForceReply': function(params) {
    this.int32(-2035021048);
    const flags = (this.has(params.single_use) << 1) | (this.has(params.selective) << 2) | (this.has(params.placeholder) << 3);
    this.int32(flags);
    this.flag(this.string, params.placeholder);
  },
  'replyKeyboardMarkup': function(params) {
    this.int32(-2049074735);
    const flags = (this.has(params.resize) << 0) | (this.has(params.single_use) << 1) | (this.has(params.selective) << 2) | (this.has(params.persistent) << 4) | (this.has(params.placeholder) << 3);
    this.int32(flags);
    this.vector(this.predicate, params.rows);
    this.flag(this.string, params.placeholder);
  },
  'inputPeerUser': function(params) {
    this.int32(-571955892);
    this.long(params.user_id);
    this.long(params.access_hash);
  },
  'inputUser': function(params) {
    this.int32(-233744186);
    this.long(params.user_id);
    this.long(params.access_hash);
  },
  'messageEntityUnknown': function(params) {
    this.int32(-1148011883);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityMention': function(params) {
    this.int32(-100378723);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityHashtag': function(params) {
    this.int32(1868782349);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityBotCommand': function(params) {
    this.int32(1827637959);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityUrl': function(params) {
    this.int32(1859134776);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityEmail': function(params) {
    this.int32(1692693954);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityBold': function(params) {
    this.int32(-1117713463);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityItalic': function(params) {
    this.int32(-2106619040);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityCode': function(params) {
    this.int32(681706865);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityPre': function(params) {
    this.int32(1938967520);
    this.int(params.offset);
    this.int(params.length);
    this.string(params.language);
  },
  'messageEntityTextUrl': function(params) {
    this.int32(1990644519);
    this.int(params.offset);
    this.int(params.length);
    this.string(params.url);
  },
  'updateShortSentMessage': function(params) {
    this.int32(-1877614335);
    const flags = (this.has(params.out) << 1) | (this.has(params.media) << 9) | (this.has(params.entities) << 7) | (this.has(params.ttl_period) << 25);
    this.int32(flags);
    this.int(params.id);
    this.int(params.pts);
    this.int(params.pts_count);
    this.int(params.date);
    this.flag(this.predicate, params.media);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.int, params.ttl_period);
  },
  'inputChannelEmpty': function(params) {
    this.int32(-292807034);
  },
  'inputChannel': function(params) {
    this.int32(-212145112);
    this.long(params.channel_id);
    this.long(params.access_hash);
  },
  'peerChannel': function(params) {
    this.int32(-1566230754);
    this.long(params.channel_id);
  },
  'inputPeerChannel': function(params) {
    this.int32(666680316);
    this.long(params.channel_id);
    this.long(params.access_hash);
  },
  'channel': function(params) {
    this.int32(-29067075);
    const flags = (this.has(params.creator) << 0) | (this.has(params.left) << 2) | (this.has(params.broadcast) << 5) | (this.has(params.verified) << 7) | (this.has(params.megagroup) << 8) | (this.has(params.restricted) << 9) | (this.has(params.signatures) << 11) | (this.has(params.min) << 12) | (this.has(params.scam) << 19) | (this.has(params.has_link) << 20) | (this.has(params.has_geo) << 21) | (this.has(params.slowmode_enabled) << 22) | (this.has(params.call_active) << 23) | (this.has(params.call_not_empty) << 24) | (this.has(params.fake) << 25) | (this.has(params.gigagroup) << 26) | (this.has(params.noforwards) << 27) | (this.has(params.join_to_send) << 28) | (this.has(params.join_request) << 29) | (this.has(params.forum) << 30) | (this.has(params.access_hash) << 13) | (this.has(params.username) << 6) | (this.has(params.restriction_reason) << 9) | (this.has(params.admin_rights) << 14) | (this.has(params.banned_rights) << 15) | (this.has(params.default_banned_rights) << 18) | (this.has(params.participants_count) << 17);
    this.int32(flags);
    const flags2 = (this.has(params.stories_hidden) << 1) | (this.has(params.stories_hidden_min) << 2) | (this.has(params.stories_unavailable) << 3) | (this.has(params.signature_profiles) << 12) | (this.has(params.usernames) << 0) | (this.has(params.stories_max_id) << 4) | (this.has(params.color) << 7) | (this.has(params.profile_color) << 8) | (this.has(params.emoji_status) << 9) | (this.has(params.level) << 10) | (this.has(params.subscription_until_date) << 11);
    this.int32(flags2);
    this.long(params.id);
    this.flag(this.long, params.access_hash);
    this.string(params.title);
    this.flag(this.string, params.username);
    this.predicate(params.photo);
    this.int(params.date);
    this.flagVector(this.predicate, params.restriction_reason);
    this.flag(this.predicate, params.admin_rights);
    this.flag(this.predicate, params.banned_rights);
    this.flag(this.predicate, params.default_banned_rights);
    this.flag(this.int, params.participants_count);
    this.flagVector(this.predicate, params.usernames);
    this.flag(this.int, params.stories_max_id);
    this.flag(this.predicate, params.color);
    this.flag(this.predicate, params.profile_color);
    this.flag(this.predicate, params.emoji_status);
    this.flag(this.int, params.level);
    this.flag(this.int, params.subscription_until_date);
  },
  'channelForbidden': function(params) {
    this.int32(399807445);
    const flags = (this.has(params.broadcast) << 5) | (this.has(params.megagroup) << 8) | (this.has(params.until_date) << 16);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.string(params.title);
    this.flag(this.int, params.until_date);
  },
  'contacts.resolvedPeer': function(params) {
    this.int32(2131196633);
    this.predicate(params.peer);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'channelFull': function(params) {
    this.int32(-1146407795);
    const flags = (this.has(params.can_view_participants) << 3) | (this.has(params.can_set_username) << 6) | (this.has(params.can_set_stickers) << 7) | (this.has(params.hidden_prehistory) << 10) | (this.has(params.can_set_location) << 16) | (this.has(params.has_scheduled) << 19) | (this.has(params.can_view_stats) << 20) | (this.has(params.blocked) << 22) | (this.has(params.participants_count) << 0) | (this.has(params.admins_count) << 1) | (this.has(params.kicked_count) << 2) | (this.has(params.banned_count) << 2) | (this.has(params.online_count) << 13) | (this.has(params.exported_invite) << 23) | (this.has(params.migrated_from_chat_id) << 4) | (this.has(params.migrated_from_max_id) << 4) | (this.has(params.pinned_msg_id) << 5) | (this.has(params.stickerset) << 8) | (this.has(params.available_min_id) << 9) | (this.has(params.folder_id) << 11) | (this.has(params.linked_chat_id) << 14) | (this.has(params.location) << 15) | (this.has(params.slowmode_seconds) << 17) | (this.has(params.slowmode_next_send_date) << 18) | (this.has(params.stats_dc) << 12) | (this.has(params.call) << 21) | (this.has(params.ttl_period) << 24) | (this.has(params.pending_suggestions) << 25) | (this.has(params.groupcall_default_join_as) << 26) | (this.has(params.theme_emoticon) << 27) | (this.has(params.requests_pending) << 28) | (this.has(params.recent_requesters) << 28) | (this.has(params.default_send_as) << 29) | (this.has(params.available_reactions) << 30);
    this.int32(flags);
    const flags2 = (this.has(params.can_delete_channel) << 0) | (this.has(params.antispam) << 1) | (this.has(params.participants_hidden) << 2) | (this.has(params.translations_disabled) << 3) | (this.has(params.stories_pinned_available) << 5) | (this.has(params.view_forum_as_messages) << 6) | (this.has(params.restricted_sponsored) << 11) | (this.has(params.can_view_revenue) << 12) | (this.has(params.paid_media_allowed) << 14) | (this.has(params.can_view_stars_revenue) << 15) | (this.has(params.paid_reactions_available) << 16) | (this.has(params.reactions_limit) << 13) | (this.has(params.stories) << 4) | (this.has(params.wallpaper) << 7) | (this.has(params.boosts_applied) << 8) | (this.has(params.boosts_unrestrict) << 9) | (this.has(params.emojiset) << 10);
    this.int32(flags2);
    this.long(params.id);
    this.string(params.about);
    this.flag(this.int, params.participants_count);
    this.flag(this.int, params.admins_count);
    this.flag(this.int, params.kicked_count);
    this.flag(this.int, params.banned_count);
    this.flag(this.int, params.online_count);
    this.int(params.read_inbox_max_id);
    this.int(params.read_outbox_max_id);
    this.int(params.unread_count);
    this.predicate(params.chat_photo);
    this.predicate(params.notify_settings);
    this.flag(this.predicate, params.exported_invite);
    this.vector(this.predicate, params.bot_info);
    this.flag(this.long, params.migrated_from_chat_id);
    this.flag(this.int, params.migrated_from_max_id);
    this.flag(this.int, params.pinned_msg_id);
    this.flag(this.predicate, params.stickerset);
    this.flag(this.int, params.available_min_id);
    this.flag(this.int, params.folder_id);
    this.flag(this.long, params.linked_chat_id);
    this.flag(this.predicate, params.location);
    this.flag(this.int, params.slowmode_seconds);
    this.flag(this.int, params.slowmode_next_send_date);
    this.flag(this.int, params.stats_dc);
    this.int(params.pts);
    this.flag(this.predicate, params.call);
    this.flag(this.int, params.ttl_period);
    this.flagVector(this.string, params.pending_suggestions);
    this.flag(this.predicate, params.groupcall_default_join_as);
    this.flag(this.string, params.theme_emoticon);
    this.flag(this.int, params.requests_pending);
    this.flagVector(this.long, params.recent_requesters);
    this.flag(this.predicate, params.default_send_as);
    this.flag(this.predicate, params.available_reactions);
    this.flag(this.int, params.reactions_limit);
    this.flag(this.predicate, params.stories);
    this.flag(this.predicate, params.wallpaper);
    this.flag(this.int, params.boosts_applied);
    this.flag(this.int, params.boosts_unrestrict);
    this.flag(this.predicate, params.emojiset);
  },
  'messageRange': function(params) {
    this.int32(182649427);
    this.int(params.min_id);
    this.int(params.max_id);
  },
  'messages.channelMessages': function(params) {
    this.int32(-948520370);
    const flags = (this.has(params.inexact) << 1) | (this.has(params.offset_id_offset) << 2);
    this.int32(flags);
    this.int(params.pts);
    this.int(params.count);
    this.flag(this.int, params.offset_id_offset);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.topics);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messageActionChannelCreate': function(params) {
    this.int32(-1781355374);
    this.string(params.title);
  },
  'updateChannelTooLong': function(params) {
    this.int32(277713951);
    const flags = (this.has(params.pts) << 0);
    this.int32(flags);
    this.long(params.channel_id);
    this.flag(this.int, params.pts);
  },
  'updateChannel': function(params) {
    this.int32(1666927625);
    this.long(params.channel_id);
  },
  'updateNewChannelMessage': function(params) {
    this.int32(1656358105);
    this.predicate(params.message);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateReadChannelInbox': function(params) {
    this.int32(-1842450928);
    const flags = (this.has(params.folder_id) << 0);
    this.int32(flags);
    this.flag(this.int, params.folder_id);
    this.long(params.channel_id);
    this.int(params.max_id);
    this.int(params.still_unread_count);
    this.int(params.pts);
  },
  'updateDeleteChannelMessages': function(params) {
    this.int32(-1020437742);
    this.long(params.channel_id);
    this.vector(this.int, params.messages);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updateChannelMessageViews': function(params) {
    this.int32(-232346616);
    this.long(params.channel_id);
    this.int(params.id);
    this.int(params.views);
  },
  'updates.channelDifferenceEmpty': function(params) {
    this.int32(1041346555);
    const flags = (this.has(params.final) << 0) | (this.has(params.timeout) << 1);
    this.int32(flags);
    this.int(params.pts);
    this.flag(this.int, params.timeout);
  },
  'updates.channelDifferenceTooLong': function(params) {
    this.int32(-1531132162);
    const flags = (this.has(params.final) << 0) | (this.has(params.timeout) << 1);
    this.int32(flags);
    this.flag(this.int, params.timeout);
    this.predicate(params.dialog);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'updates.channelDifference': function(params) {
    this.int32(543450958);
    const flags = (this.has(params.final) << 0) | (this.has(params.timeout) << 1);
    this.int32(flags);
    this.int(params.pts);
    this.flag(this.int, params.timeout);
    this.vector(this.predicate, params.new_messages);
    this.vector(this.predicate, params.other_updates);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'channelMessagesFilterEmpty': function(params) {
    this.int32(-1798033689);
  },
  'channelMessagesFilter': function(params) {
    this.int32(-847783593);
    const flags = (this.has(params.exclude_new_messages) << 1);
    this.int32(flags);
    this.vector(this.predicate, params.ranges);
  },
  'channelParticipant': function(params) {
    this.int32(-885426663);
    const flags = (this.has(params.subscription_until_date) << 0);
    this.int32(flags);
    this.long(params.user_id);
    this.int(params.date);
    this.flag(this.int, params.subscription_until_date);
  },
  'channelParticipantSelf': function(params) {
    this.int32(1331723247);
    const flags = (this.has(params.via_request) << 0) | (this.has(params.subscription_until_date) << 1);
    this.int32(flags);
    this.long(params.user_id);
    this.long(params.inviter_id);
    this.int(params.date);
    this.flag(this.int, params.subscription_until_date);
  },
  'channelParticipantCreator': function(params) {
    this.int32(803602899);
    const flags = (this.has(params.rank) << 0);
    this.int32(flags);
    this.long(params.user_id);
    this.predicate(params.admin_rights);
    this.flag(this.string, params.rank);
  },
  'channelParticipantsRecent': function(params) {
    this.int32(-566281095);
  },
  'channelParticipantsAdmins': function(params) {
    this.int32(-1268741783);
  },
  'channelParticipantsKicked': function(params) {
    this.int32(-1548400251);
    this.string(params.q);
  },
  'channels.channelParticipants': function(params) {
    this.int32(-1699676497);
    this.int(params.count);
    this.vector(this.predicate, params.participants);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'channels.channelParticipant': function(params) {
    this.int32(-541588713);
    this.predicate(params.participant);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'chatParticipantCreator': function(params) {
    this.int32(-462696732);
    this.long(params.user_id);
  },
  'chatParticipantAdmin': function(params) {
    this.int32(-1600962725);
    this.long(params.user_id);
    this.long(params.inviter_id);
    this.int(params.date);
  },
  'updateChatParticipantAdmin': function(params) {
    this.int32(-674602590);
    this.long(params.chat_id);
    this.long(params.user_id);
    this.Bool(params.is_admin);
    this.int(params.version);
  },
  'messageActionChatMigrateTo': function(params) {
    this.int32(-519864430);
    this.long(params.channel_id);
  },
  'messageActionChannelMigrateFrom': function(params) {
    this.int32(-365344535);
    this.string(params.title);
    this.long(params.chat_id);
  },
  'channelParticipantsBots': function(params) {
    this.int32(-1328445861);
  },
  'help.termsOfService': function(params) {
    this.int32(2013922064);
    const flags = (this.has(params.popup) << 0) | (this.has(params.min_age_confirm) << 1);
    this.int32(flags);
    this.predicate(params.id);
    this.string(params.text);
    this.vector(this.predicate, params.entities);
    this.flag(this.int, params.min_age_confirm);
  },
  'updateNewStickerSet': function(params) {
    this.int32(1753886890);
    this.predicate(params.stickerset);
  },
  'updateStickerSetsOrder': function(params) {
    this.int32(196268545);
    const flags = (this.has(params.masks) << 0) | (this.has(params.emojis) << 1);
    this.int32(flags);
    this.vector(this.long, params.order);
  },
  'updateStickerSets': function(params) {
    this.int32(834816008);
    const flags = (this.has(params.masks) << 0) | (this.has(params.emojis) << 1);
    this.int32(flags);
  },
  'messages.savedGifsNotModified': function(params) {
    this.int32(-402498398);
  },
  'messages.savedGifs': function(params) {
    this.int32(-2069878259);
    this.long(params.hash);
    this.vector(this.predicate, params.gifs);
  },
  'updateSavedGifs': function(params) {
    this.int32(-1821035490);
  },
  'inputBotInlineMessageMediaAuto': function(params) {
    this.int32(864077702);
    const flags = (this.has(params.invert_media) << 3) | (this.has(params.entities) << 1) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.predicate, params.reply_markup);
  },
  'inputBotInlineMessageText': function(params) {
    this.int32(1036876423);
    const flags = (this.has(params.no_webpage) << 0) | (this.has(params.invert_media) << 3) | (this.has(params.entities) << 1) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.predicate, params.reply_markup);
  },
  'inputBotInlineResult': function(params) {
    this.int32(-2000710887);
    const flags = (this.has(params.title) << 1) | (this.has(params.description) << 2) | (this.has(params.url) << 3) | (this.has(params.thumb) << 4) | (this.has(params.content) << 5);
    this.int32(flags);
    this.string(params.id);
    this.string(params.type);
    this.flag(this.string, params.title);
    this.flag(this.string, params.description);
    this.flag(this.string, params.url);
    this.flag(this.predicate, params.thumb);
    this.flag(this.predicate, params.content);
    this.predicate(params.send_message);
  },
  'botInlineMessageMediaAuto': function(params) {
    this.int32(1984755728);
    const flags = (this.has(params.invert_media) << 3) | (this.has(params.entities) << 1) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.predicate, params.reply_markup);
  },
  'botInlineMessageText': function(params) {
    this.int32(-1937807902);
    const flags = (this.has(params.no_webpage) << 0) | (this.has(params.invert_media) << 3) | (this.has(params.entities) << 1) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.predicate, params.reply_markup);
  },
  'botInlineResult': function(params) {
    this.int32(295067450);
    const flags = (this.has(params.title) << 1) | (this.has(params.description) << 2) | (this.has(params.url) << 3) | (this.has(params.thumb) << 4) | (this.has(params.content) << 5);
    this.int32(flags);
    this.string(params.id);
    this.string(params.type);
    this.flag(this.string, params.title);
    this.flag(this.string, params.description);
    this.flag(this.string, params.url);
    this.flag(this.predicate, params.thumb);
    this.flag(this.predicate, params.content);
    this.predicate(params.send_message);
  },
  'messages.botResults': function(params) {
    this.int32(-534646026);
    const flags = (this.has(params.gallery) << 0) | (this.has(params.next_offset) << 1) | (this.has(params.switch_pm) << 2) | (this.has(params.switch_webview) << 3);
    this.int32(flags);
    this.long(params.query_id);
    this.flag(this.string, params.next_offset);
    this.flag(this.predicate, params.switch_pm);
    this.flag(this.predicate, params.switch_webview);
    this.vector(this.predicate, params.results);
    this.int(params.cache_time);
    this.vector(this.predicate, params.users);
  },
  'updateBotInlineQuery': function(params) {
    this.int32(1232025500);
    const flags = (this.has(params.geo) << 0) | (this.has(params.peer_type) << 1);
    this.int32(flags);
    this.long(params.query_id);
    this.long(params.user_id);
    this.string(params.query);
    this.flag(this.predicate, params.geo);
    this.flag(this.predicate, params.peer_type);
    this.string(params.offset);
  },
  'updateBotInlineSend': function(params) {
    this.int32(317794823);
    const flags = (this.has(params.geo) << 0) | (this.has(params.msg_id) << 1);
    this.int32(flags);
    this.long(params.user_id);
    this.string(params.query);
    this.flag(this.predicate, params.geo);
    this.string(params.id);
    this.flag(this.predicate, params.msg_id);
  },
  'inputMessagesFilterVoice': function(params) {
    this.int32(1358283666);
  },
  'inputMessagesFilterMusic': function(params) {
    this.int32(928101534);
  },
  'inputPrivacyKeyChatInvite': function(params) {
    this.int32(-1107622874);
  },
  'privacyKeyChatInvite': function(params) {
    this.int32(1343122938);
  },
  'exportedMessageLink': function(params) {
    this.int32(1571494644);
    this.string(params.link);
    this.string(params.html);
  },
  'messageFwdHeader': function(params) {
    this.int32(1313731771);
    const flags = (this.has(params.imported) << 7) | (this.has(params.saved_out) << 11) | (this.has(params.from_id) << 0) | (this.has(params.from_name) << 5) | (this.has(params.channel_post) << 2) | (this.has(params.post_author) << 3) | (this.has(params.saved_from_peer) << 4) | (this.has(params.saved_from_msg_id) << 4) | (this.has(params.saved_from_id) << 8) | (this.has(params.saved_from_name) << 9) | (this.has(params.saved_date) << 10) | (this.has(params.psa_type) << 6);
    this.int32(flags);
    this.flag(this.predicate, params.from_id);
    this.flag(this.string, params.from_name);
    this.int(params.date);
    this.flag(this.int, params.channel_post);
    this.flag(this.string, params.post_author);
    this.flag(this.predicate, params.saved_from_peer);
    this.flag(this.int, params.saved_from_msg_id);
    this.flag(this.predicate, params.saved_from_id);
    this.flag(this.string, params.saved_from_name);
    this.flag(this.int, params.saved_date);
    this.flag(this.string, params.psa_type);
  },
  'updateEditChannelMessage': function(params) {
    this.int32(457133559);
    this.predicate(params.message);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'messageActionPinMessage': function(params) {
    this.int32(-1799538451);
  },
  'auth.codeTypeSms': function(params) {
    this.int32(1923290508);
  },
  'auth.codeTypeCall': function(params) {
    this.int32(1948046307);
  },
  'auth.codeTypeFlashCall': function(params) {
    this.int32(577556219);
  },
  'auth.sentCodeTypeApp': function(params) {
    this.int32(1035688326);
    this.int(params.length);
  },
  'auth.sentCodeTypeSms': function(params) {
    this.int32(-1073693790);
    this.int(params.length);
  },
  'auth.sentCodeTypeCall': function(params) {
    this.int32(1398007207);
    this.int(params.length);
  },
  'auth.sentCodeTypeFlashCall': function(params) {
    this.int32(-1425815847);
    this.string(params.pattern);
  },
  'keyboardButtonUrl': function(params) {
    this.int32(629866245);
    this.string(params.text);
    this.string(params.url);
  },
  'keyboardButtonCallback': function(params) {
    this.int32(901503851);
    const flags = (this.has(params.requires_password) << 0);
    this.int32(flags);
    this.string(params.text);
    this.bytes(params.data);
  },
  'keyboardButtonRequestPhone': function(params) {
    this.int32(-1318425559);
    this.string(params.text);
  },
  'keyboardButtonRequestGeoLocation': function(params) {
    this.int32(-59151553);
    this.string(params.text);
  },
  'keyboardButtonSwitchInline': function(params) {
    this.int32(-1816527947);
    const flags = (this.has(params.same_peer) << 0) | (this.has(params.peer_types) << 1);
    this.int32(flags);
    this.string(params.text);
    this.string(params.query);
    this.flagVector(this.predicate, params.peer_types);
  },
  'replyInlineMarkup': function(params) {
    this.int32(1218642516);
    this.vector(this.predicate, params.rows);
  },
  'messages.botCallbackAnswer': function(params) {
    this.int32(911761060);
    const flags = (this.has(params.alert) << 1) | (this.has(params.has_url) << 3) | (this.has(params.native_ui) << 4) | (this.has(params.message) << 0) | (this.has(params.url) << 2);
    this.int32(flags);
    this.flag(this.string, params.message);
    this.flag(this.string, params.url);
    this.int(params.cache_time);
  },
  'updateBotCallbackQuery': function(params) {
    this.int32(-1177566067);
    const flags = (this.has(params.data) << 0) | (this.has(params.game_short_name) << 1);
    this.int32(flags);
    this.long(params.query_id);
    this.long(params.user_id);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.long(params.chat_instance);
    this.flag(this.bytes, params.data);
    this.flag(this.string, params.game_short_name);
  },
  'messages.messageEditData': function(params) {
    this.int32(649453030);
    const flags = (this.has(params.caption) << 0);
    this.int32(flags);
  },
  'updateEditMessage': function(params) {
    this.int32(-469536605);
    this.predicate(params.message);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'inputBotInlineMessageMediaGeo': function(params) {
    this.int32(-1768777083);
    const flags = (this.has(params.heading) << 0) | (this.has(params.period) << 1) | (this.has(params.proximity_notification_radius) << 3) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.predicate(params.geo_point);
    this.flag(this.int, params.heading);
    this.flag(this.int, params.period);
    this.flag(this.int, params.proximity_notification_radius);
    this.flag(this.predicate, params.reply_markup);
  },
  'inputBotInlineMessageMediaVenue': function(params) {
    this.int32(1098628881);
    const flags = (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.predicate(params.geo_point);
    this.string(params.title);
    this.string(params.address);
    this.string(params.provider);
    this.string(params.venue_id);
    this.string(params.venue_type);
    this.flag(this.predicate, params.reply_markup);
  },
  'inputBotInlineMessageMediaContact': function(params) {
    this.int32(-1494368259);
    const flags = (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.phone_number);
    this.string(params.first_name);
    this.string(params.last_name);
    this.string(params.vcard);
    this.flag(this.predicate, params.reply_markup);
  },
  'botInlineMessageMediaGeo': function(params) {
    this.int32(85477117);
    const flags = (this.has(params.heading) << 0) | (this.has(params.period) << 1) | (this.has(params.proximity_notification_radius) << 3) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.predicate(params.geo);
    this.flag(this.int, params.heading);
    this.flag(this.int, params.period);
    this.flag(this.int, params.proximity_notification_radius);
    this.flag(this.predicate, params.reply_markup);
  },
  'botInlineMessageMediaVenue': function(params) {
    this.int32(-1970903652);
    const flags = (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.predicate(params.geo);
    this.string(params.title);
    this.string(params.address);
    this.string(params.provider);
    this.string(params.venue_id);
    this.string(params.venue_type);
    this.flag(this.predicate, params.reply_markup);
  },
  'botInlineMessageMediaContact': function(params) {
    this.int32(416402882);
    const flags = (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.phone_number);
    this.string(params.first_name);
    this.string(params.last_name);
    this.string(params.vcard);
    this.flag(this.predicate, params.reply_markup);
  },
  'inputBotInlineResultPhoto': function(params) {
    this.int32(-1462213465);
    this.string(params.id);
    this.string(params.type);
    this.predicate(params.photo);
    this.predicate(params.send_message);
  },
  'inputBotInlineResultDocument': function(params) {
    this.int32(-459324);
    const flags = (this.has(params.title) << 1) | (this.has(params.description) << 2);
    this.int32(flags);
    this.string(params.id);
    this.string(params.type);
    this.flag(this.string, params.title);
    this.flag(this.string, params.description);
    this.predicate(params.document);
    this.predicate(params.send_message);
  },
  'botInlineMediaResult': function(params) {
    this.int32(400266251);
    const flags = (this.has(params.photo) << 0) | (this.has(params.document) << 1) | (this.has(params.title) << 2) | (this.has(params.description) << 3);
    this.int32(flags);
    this.string(params.id);
    this.string(params.type);
    this.flag(this.predicate, params.photo);
    this.flag(this.predicate, params.document);
    this.flag(this.string, params.title);
    this.flag(this.string, params.description);
    this.predicate(params.send_message);
  },
  'inputBotInlineMessageID': function(params) {
    this.int32(-1995686519);
    this.int(params.dc_id);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'updateInlineBotCallbackQuery': function(params) {
    this.int32(1763610706);
    const flags = (this.has(params.data) << 0) | (this.has(params.game_short_name) << 1);
    this.int32(flags);
    this.long(params.query_id);
    this.long(params.user_id);
    this.predicate(params.msg_id);
    this.long(params.chat_instance);
    this.flag(this.bytes, params.data);
    this.flag(this.string, params.game_short_name);
  },
  'inlineBotSwitchPM': function(params) {
    this.int32(1008755359);
    this.string(params.text);
    this.string(params.start_param);
  },
  'messages.peerDialogs': function(params) {
    this.int32(863093588);
    this.vector(this.predicate, params.dialogs);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.predicate(params.state);
  },
  'topPeer': function(params) {
    this.int32(-305282981);
    this.predicate(params.peer);
    this.double(params.rating);
  },
  'topPeerCategoryBotsPM': function(params) {
    this.int32(-1419371685);
  },
  'topPeerCategoryBotsInline': function(params) {
    this.int32(344356834);
  },
  'topPeerCategoryCorrespondents': function(params) {
    this.int32(104314861);
  },
  'topPeerCategoryGroups': function(params) {
    this.int32(-1122524854);
  },
  'topPeerCategoryChannels': function(params) {
    this.int32(371037736);
  },
  'topPeerCategoryPeers': function(params) {
    this.int32(-75283823);
    this.predicate(params.category);
    this.int(params.count);
    this.vector(this.predicate, params.peers);
  },
  'contacts.topPeersNotModified': function(params) {
    this.int32(-567906571);
  },
  'contacts.topPeers': function(params) {
    this.int32(1891070632);
    this.vector(this.predicate, params.categories);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messageEntityMentionName': function(params) {
    this.int32(-595914432);
    this.int(params.offset);
    this.int(params.length);
    this.long(params.user_id);
  },
  'inputMessageEntityMentionName': function(params) {
    this.int32(546203849);
    this.int(params.offset);
    this.int(params.length);
    this.predicate(params.user_id);
  },
  'inputMessagesFilterChatPhotos': function(params) {
    this.int32(975236280);
  },
  'updateReadChannelOutbox': function(params) {
    this.int32(-1218471511);
    this.long(params.channel_id);
    this.int(params.max_id);
  },
  'updateDraftMessage': function(params) {
    this.int32(457829485);
    const flags = (this.has(params.top_msg_id) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.top_msg_id);
    this.predicate(params.draft);
  },
  'draftMessageEmpty': function(params) {
    this.int32(453805082);
    const flags = (this.has(params.date) << 0);
    this.int32(flags);
    this.flag(this.int, params.date);
  },
  'draftMessage': function(params) {
    this.int32(761606687);
    const flags = (this.has(params.no_webpage) << 1) | (this.has(params.invert_media) << 6) | (this.has(params.reply_to) << 4) | (this.has(params.entities) << 3) | (this.has(params.media) << 5) | (this.has(params.effect) << 7);
    this.int32(flags);
    this.flag(this.predicate, params.reply_to);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.predicate, params.media);
    this.int(params.date);
    this.flag(this.long, params.effect);
  },
  'messageActionHistoryClear': function(params) {
    this.int32(-1615153660);
  },
  'messages.featuredStickersNotModified': function(params) {
    this.int32(-958657434);
    this.int(params.count);
  },
  'messages.featuredStickers': function(params) {
    this.int32(-1103615738);
    const flags = (this.has(params.premium) << 0);
    this.int32(flags);
    this.long(params.hash);
    this.int(params.count);
    this.vector(this.predicate, params.sets);
    this.vector(this.long, params.unread);
  },
  'updateReadFeaturedStickers': function(params) {
    this.int32(1461528386);
  },
  'messages.recentStickersNotModified': function(params) {
    this.int32(186120336);
  },
  'messages.recentStickers': function(params) {
    this.int32(-1999405994);
    this.long(params.hash);
    this.vector(this.predicate, params.packs);
    this.vector(this.predicate, params.stickers);
    this.vector(this.int, params.dates);
  },
  'updateRecentStickers': function(params) {
    this.int32(-1706939360);
  },
  'messages.archivedStickers': function(params) {
    this.int32(1338747336);
    this.int(params.count);
    this.vector(this.predicate, params.sets);
  },
  'messages.stickerSetInstallResultSuccess': function(params) {
    this.int32(946083368);
  },
  'messages.stickerSetInstallResultArchive': function(params) {
    this.int32(904138920);
    this.vector(this.predicate, params.sets);
  },
  'stickerSetCovered': function(params) {
    this.int32(1678812626);
    this.predicate(params.set);
    this.predicate(params.cover);
  },
  'updateConfig': function(params) {
    this.int32(-1574314746);
  },
  'updatePtsChanged': function(params) {
    this.int32(861169551);
  },
  'inputMediaPhotoExternal': function(params) {
    this.int32(-440664550);
    const flags = (this.has(params.spoiler) << 1) | (this.has(params.ttl_seconds) << 0);
    this.int32(flags);
    this.string(params.url);
    this.flag(this.int, params.ttl_seconds);
  },
  'inputMediaDocumentExternal': function(params) {
    this.int32(-78455655);
    const flags = (this.has(params.spoiler) << 1) | (this.has(params.ttl_seconds) << 0);
    this.int32(flags);
    this.string(params.url);
    this.flag(this.int, params.ttl_seconds);
  },
  'stickerSetMultiCovered': function(params) {
    this.int32(872932635);
    this.predicate(params.set);
    this.vector(this.predicate, params.covers);
  },
  'maskCoords': function(params) {
    this.int32(-1361650766);
    this.int(params.n);
    this.double(params.x);
    this.double(params.y);
    this.double(params.zoom);
  },
  'documentAttributeHasStickers': function(params) {
    this.int32(-1744710921);
  },
  'inputStickeredMediaPhoto': function(params) {
    this.int32(1251549527);
    this.predicate(params.id);
  },
  'inputStickeredMediaDocument': function(params) {
    this.int32(70813275);
    this.predicate(params.id);
  },
  'game': function(params) {
    this.int32(-1107729093);
    const flags = (this.has(params.document) << 0);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.string(params.short_name);
    this.string(params.title);
    this.string(params.description);
    this.predicate(params.photo);
    this.flag(this.predicate, params.document);
  },
  'inputBotInlineResultGame': function(params) {
    this.int32(1336154098);
    this.string(params.id);
    this.string(params.short_name);
    this.predicate(params.send_message);
  },
  'inputBotInlineMessageGame': function(params) {
    this.int32(1262639204);
    const flags = (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.reply_markup);
  },
  'messageMediaGame': function(params) {
    this.int32(-38694904);
    this.predicate(params.game);
  },
  'inputMediaGame': function(params) {
    this.int32(-750828557);
    this.predicate(params.id);
  },
  'inputGameID': function(params) {
    this.int32(53231223);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputGameShortName': function(params) {
    this.int32(-1020139510);
    this.predicate(params.bot_id);
    this.string(params.short_name);
  },
  'keyboardButtonGame': function(params) {
    this.int32(1358175439);
    this.string(params.text);
  },
  'messageActionGameScore': function(params) {
    this.int32(-1834538890);
    this.long(params.game_id);
    this.int(params.score);
  },
  'highScore': function(params) {
    this.int32(1940093419);
    this.int(params.pos);
    this.long(params.user_id);
    this.int(params.score);
  },
  'messages.highScores': function(params) {
    this.int32(-1707344487);
    this.vector(this.predicate, params.scores);
    this.vector(this.predicate, params.users);
  },
  'updates.differenceTooLong': function(params) {
    this.int32(1258196845);
    this.int(params.pts);
  },
  'updateChannelWebPage': function(params) {
    this.int32(791390623);
    this.long(params.channel_id);
    this.predicate(params.webpage);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'messages.chatsSlice': function(params) {
    this.int32(-1663561404);
    this.int(params.count);
    this.vector(this.predicate, params.chats);
  },
  'textEmpty': function(params) {
    this.int32(-599948721);
  },
  'textPlain': function(params) {
    this.int32(1950782688);
    this.string(params.text);
  },
  'textBold': function(params) {
    this.int32(1730456516);
    this.predicate(params.text);
  },
  'textItalic': function(params) {
    this.int32(-653089380);
    this.predicate(params.text);
  },
  'textUnderline': function(params) {
    this.int32(-1054465340);
    this.predicate(params.text);
  },
  'textStrike': function(params) {
    this.int32(-1678197867);
    this.predicate(params.text);
  },
  'textFixed': function(params) {
    this.int32(1816074681);
    this.predicate(params.text);
  },
  'textUrl': function(params) {
    this.int32(1009288385);
    this.predicate(params.text);
    this.string(params.url);
    this.long(params.webpage_id);
  },
  'textEmail': function(params) {
    this.int32(-564523562);
    this.predicate(params.text);
    this.string(params.email);
  },
  'textConcat': function(params) {
    this.int32(2120376535);
    this.vector(this.predicate, params.texts);
  },
  'pageBlockUnsupported': function(params) {
    this.int32(324435594);
  },
  'pageBlockTitle': function(params) {
    this.int32(1890305021);
    this.predicate(params.text);
  },
  'pageBlockSubtitle': function(params) {
    this.int32(-1879401953);
    this.predicate(params.text);
  },
  'pageBlockAuthorDate': function(params) {
    this.int32(-1162877472);
    this.predicate(params.author);
    this.int(params.published_date);
  },
  'pageBlockHeader': function(params) {
    this.int32(-1076861716);
    this.predicate(params.text);
  },
  'pageBlockSubheader': function(params) {
    this.int32(-248793375);
    this.predicate(params.text);
  },
  'pageBlockParagraph': function(params) {
    this.int32(1182402406);
    this.predicate(params.text);
  },
  'pageBlockPreformatted': function(params) {
    this.int32(-1066346178);
    this.predicate(params.text);
    this.string(params.language);
  },
  'pageBlockFooter': function(params) {
    this.int32(1216809369);
    this.predicate(params.text);
  },
  'pageBlockDivider': function(params) {
    this.int32(-618614392);
  },
  'pageBlockAnchor': function(params) {
    this.int32(-837994576);
    this.string(params.name);
  },
  'pageBlockList': function(params) {
    this.int32(-454524911);
    this.vector(this.predicate, params.items);
  },
  'pageBlockBlockquote': function(params) {
    this.int32(641563686);
    this.predicate(params.text);
    this.predicate(params.caption);
  },
  'pageBlockPullquote': function(params) {
    this.int32(1329878739);
    this.predicate(params.text);
    this.predicate(params.caption);
  },
  'pageBlockPhoto': function(params) {
    this.int32(391759200);
    const flags = (this.has(params.url) << 0) | (this.has(params.webpage_id) << 0);
    this.int32(flags);
    this.long(params.photo_id);
    this.predicate(params.caption);
    this.flag(this.string, params.url);
    this.flag(this.long, params.webpage_id);
  },
  'pageBlockVideo': function(params) {
    this.int32(2089805750);
    const flags = (this.has(params.autoplay) << 0) | (this.has(params.loop) << 1);
    this.int32(flags);
    this.long(params.video_id);
    this.predicate(params.caption);
  },
  'pageBlockCover': function(params) {
    this.int32(972174080);
    this.predicate(params.cover);
  },
  'pageBlockEmbed': function(params) {
    this.int32(-1468953147);
    const flags = (this.has(params.full_width) << 0) | (this.has(params.allow_scrolling) << 3) | (this.has(params.url) << 1) | (this.has(params.html) << 2) | (this.has(params.poster_photo_id) << 4) | (this.has(params.w) << 5) | (this.has(params.h) << 5);
    this.int32(flags);
    this.flag(this.string, params.url);
    this.flag(this.string, params.html);
    this.flag(this.long, params.poster_photo_id);
    this.flag(this.int, params.w);
    this.flag(this.int, params.h);
    this.predicate(params.caption);
  },
  'pageBlockEmbedPost': function(params) {
    this.int32(-229005301);
    this.string(params.url);
    this.long(params.webpage_id);
    this.long(params.author_photo_id);
    this.string(params.author);
    this.int(params.date);
    this.vector(this.predicate, params.blocks);
    this.predicate(params.caption);
  },
  'pageBlockCollage': function(params) {
    this.int32(1705048653);
    this.vector(this.predicate, params.items);
    this.predicate(params.caption);
  },
  'pageBlockSlideshow': function(params) {
    this.int32(52401552);
    this.vector(this.predicate, params.items);
    this.predicate(params.caption);
  },
  'webPageNotModified': function(params) {
    this.int32(1930545681);
    const flags = (this.has(params.cached_page_views) << 0);
    this.int32(flags);
    this.flag(this.int, params.cached_page_views);
  },
  'inputPrivacyKeyPhoneCall': function(params) {
    this.int32(-88417185);
  },
  'privacyKeyPhoneCall': function(params) {
    this.int32(1030105979);
  },
  'sendMessageGamePlayAction': function(params) {
    this.int32(-580219064);
  },
  'phoneCallDiscardReasonMissed': function(params) {
    this.int32(-2048646399);
  },
  'phoneCallDiscardReasonDisconnect': function(params) {
    this.int32(-527056480);
  },
  'phoneCallDiscardReasonHangup': function(params) {
    this.int32(1471006352);
  },
  'phoneCallDiscardReasonBusy': function(params) {
    this.int32(-84416311);
  },
  'updateDialogPinned': function(params) {
    this.int32(1852826908);
    const flags = (this.has(params.pinned) << 0) | (this.has(params.folder_id) << 1);
    this.int32(flags);
    this.flag(this.int, params.folder_id);
    this.predicate(params.peer);
  },
  'updatePinnedDialogs': function(params) {
    this.int32(-99664734);
    const flags = (this.has(params.folder_id) << 1) | (this.has(params.order) << 0);
    this.int32(flags);
    this.flag(this.int, params.folder_id);
    this.flagVector(this.predicate, params.order);
  },
  'dataJSON': function(params) {
    this.int32(2104790276);
    this.string(params.data);
  },
  'updateBotWebhookJSON': function(params) {
    this.int32(-2095595325);
    this.predicate(params.data);
  },
  'updateBotWebhookJSONQuery': function(params) {
    this.int32(-1684914010);
    this.long(params.query_id);
    this.predicate(params.data);
    this.int(params.timeout);
  },
  'labeledPrice': function(params) {
    this.int32(-886477832);
    this.string(params.label);
    this.long(params.amount);
  },
  'invoice': function(params) {
    this.int32(77522308);
    const flags = (this.has(params.test) << 0) | (this.has(params.name_requested) << 1) | (this.has(params.phone_requested) << 2) | (this.has(params.email_requested) << 3) | (this.has(params.shipping_address_requested) << 4) | (this.has(params.flexible) << 5) | (this.has(params.phone_to_provider) << 6) | (this.has(params.email_to_provider) << 7) | (this.has(params.recurring) << 9) | (this.has(params.max_tip_amount) << 8) | (this.has(params.suggested_tip_amounts) << 8) | (this.has(params.terms_url) << 10) | (this.has(params.subscription_period) << 11);
    this.int32(flags);
    this.string(params.currency);
    this.vector(this.predicate, params.prices);
    this.flag(this.long, params.max_tip_amount);
    this.flagVector(this.long, params.suggested_tip_amounts);
    this.flag(this.string, params.terms_url);
    this.flag(this.int, params.subscription_period);
  },
  'inputMediaInvoice': function(params) {
    this.int32(1080028941);
    const flags = (this.has(params.photo) << 0) | (this.has(params.provider) << 3) | (this.has(params.start_param) << 1) | (this.has(params.extended_media) << 2);
    this.int32(flags);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.photo);
    this.predicate(params.invoice);
    this.bytes(params.payload);
    this.flag(this.string, params.provider);
    this.predicate(params.provider_data);
    this.flag(this.string, params.start_param);
    this.flag(this.predicate, params.extended_media);
  },
  'paymentCharge': function(params) {
    this.int32(-368917890);
    this.string(params.id);
    this.string(params.provider_charge_id);
  },
  'messageActionPaymentSentMe': function(params) {
    this.int32(-6288180);
    const flags = (this.has(params.recurring_init) << 2) | (this.has(params.recurring_used) << 3) | (this.has(params.info) << 0) | (this.has(params.shipping_option_id) << 1) | (this.has(params.subscription_until_date) << 4);
    this.int32(flags);
    this.string(params.currency);
    this.long(params.total_amount);
    this.bytes(params.payload);
    this.flag(this.predicate, params.info);
    this.flag(this.string, params.shipping_option_id);
    this.predicate(params.charge);
    this.flag(this.int, params.subscription_until_date);
  },
  'messageMediaInvoice': function(params) {
    this.int32(-156940077);
    const flags = (this.has(params.shipping_address_requested) << 1) | (this.has(params.test) << 3) | (this.has(params.photo) << 0) | (this.has(params.receipt_msg_id) << 2) | (this.has(params.extended_media) << 4);
    this.int32(flags);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.photo);
    this.flag(this.int, params.receipt_msg_id);
    this.string(params.currency);
    this.long(params.total_amount);
    this.string(params.start_param);
    this.flag(this.predicate, params.extended_media);
  },
  'postAddress': function(params) {
    this.int32(512535275);
    this.string(params.street_line1);
    this.string(params.street_line2);
    this.string(params.city);
    this.string(params.state);
    this.string(params.country_iso2);
    this.string(params.post_code);
  },
  'paymentRequestedInfo': function(params) {
    this.int32(-1868808300);
    const flags = (this.has(params.name) << 0) | (this.has(params.phone) << 1) | (this.has(params.email) << 2) | (this.has(params.shipping_address) << 3);
    this.int32(flags);
    this.flag(this.string, params.name);
    this.flag(this.string, params.phone);
    this.flag(this.string, params.email);
    this.flag(this.predicate, params.shipping_address);
  },
  'keyboardButtonBuy': function(params) {
    this.int32(-1344716869);
    this.string(params.text);
  },
  'messageActionPaymentSent': function(params) {
    this.int32(-970673810);
    const flags = (this.has(params.recurring_init) << 2) | (this.has(params.recurring_used) << 3) | (this.has(params.invoice_slug) << 0) | (this.has(params.subscription_until_date) << 4);
    this.int32(flags);
    this.string(params.currency);
    this.long(params.total_amount);
    this.flag(this.string, params.invoice_slug);
    this.flag(this.int, params.subscription_until_date);
  },
  'paymentSavedCredentialsCard': function(params) {
    this.int32(-842892769);
    this.string(params.id);
    this.string(params.title);
  },
  'webDocument': function(params) {
    this.int32(475467473);
    this.string(params.url);
    this.long(params.access_hash);
    this.int(params.size);
    this.string(params.mime_type);
    this.vector(this.predicate, params.attributes);
  },
  'inputWebDocument': function(params) {
    this.int32(-1678949555);
    this.string(params.url);
    this.int(params.size);
    this.string(params.mime_type);
    this.vector(this.predicate, params.attributes);
  },
  'inputWebFileLocation': function(params) {
    this.int32(-1036396922);
    this.string(params.url);
    this.long(params.access_hash);
  },
  'upload.webFile': function(params) {
    this.int32(568808380);
    this.int(params.size);
    this.string(params.mime_type);
    this.predicate(params.file_type);
    this.int(params.mtime);
    this.bytes(params.bytes);
  },
  'payments.paymentForm': function(params) {
    this.int32(-1610250415);
    const flags = (this.has(params.can_save_credentials) << 2) | (this.has(params.password_missing) << 3) | (this.has(params.photo) << 5) | (this.has(params.native_provider) << 4) | (this.has(params.native_params) << 4) | (this.has(params.additional_methods) << 6) | (this.has(params.saved_info) << 0) | (this.has(params.saved_credentials) << 1);
    this.int32(flags);
    this.long(params.form_id);
    this.long(params.bot_id);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.photo);
    this.predicate(params.invoice);
    this.long(params.provider_id);
    this.string(params.url);
    this.flag(this.string, params.native_provider);
    this.flag(this.predicate, params.native_params);
    this.flagVector(this.predicate, params.additional_methods);
    this.flag(this.predicate, params.saved_info);
    this.flagVector(this.predicate, params.saved_credentials);
    this.vector(this.predicate, params.users);
  },
  'payments.validatedRequestedInfo': function(params) {
    this.int32(-784000893);
    const flags = (this.has(params.id) << 0) | (this.has(params.shipping_options) << 1);
    this.int32(flags);
    this.flag(this.string, params.id);
    this.flagVector(this.predicate, params.shipping_options);
  },
  'payments.paymentResult': function(params) {
    this.int32(1314881805);
    this.predicate(params.updates);
  },
  'payments.paymentReceipt': function(params) {
    this.int32(1891958275);
    const flags = (this.has(params.photo) << 2) | (this.has(params.info) << 0) | (this.has(params.shipping) << 1) | (this.has(params.tip_amount) << 3);
    this.int32(flags);
    this.int(params.date);
    this.long(params.bot_id);
    this.long(params.provider_id);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.photo);
    this.predicate(params.invoice);
    this.flag(this.predicate, params.info);
    this.flag(this.predicate, params.shipping);
    this.flag(this.long, params.tip_amount);
    this.string(params.currency);
    this.long(params.total_amount);
    this.string(params.credentials_title);
    this.vector(this.predicate, params.users);
  },
  'payments.savedInfo': function(params) {
    this.int32(-74456004);
    const flags = (this.has(params.has_saved_credentials) << 1) | (this.has(params.saved_info) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.saved_info);
  },
  'inputPaymentCredentialsSaved': function(params) {
    this.int32(-1056001329);
    this.string(params.id);
    this.bytes(params.tmp_password);
  },
  'inputPaymentCredentials': function(params) {
    this.int32(873977640);
    const flags = (this.has(params.save) << 0);
    this.int32(flags);
    this.predicate(params.data);
  },
  'account.tmpPassword': function(params) {
    this.int32(-614138572);
    this.bytes(params.tmp_password);
    this.int(params.valid_until);
  },
  'shippingOption': function(params) {
    this.int32(-1239335713);
    this.string(params.id);
    this.string(params.title);
    this.vector(this.predicate, params.prices);
  },
  'updateBotShippingQuery': function(params) {
    this.int32(-1246823043);
    this.long(params.query_id);
    this.long(params.user_id);
    this.bytes(params.payload);
    this.predicate(params.shipping_address);
  },
  'updateBotPrecheckoutQuery': function(params) {
    this.int32(-1934976362);
    const flags = (this.has(params.info) << 0) | (this.has(params.shipping_option_id) << 1);
    this.int32(flags);
    this.long(params.query_id);
    this.long(params.user_id);
    this.bytes(params.payload);
    this.flag(this.predicate, params.info);
    this.flag(this.string, params.shipping_option_id);
    this.string(params.currency);
    this.long(params.total_amount);
  },
  'inputStickerSetItem': function(params) {
    this.int32(853188252);
    const flags = (this.has(params.mask_coords) << 0) | (this.has(params.keywords) << 1);
    this.int32(flags);
    this.predicate(params.document);
    this.string(params.emoji);
    this.flag(this.predicate, params.mask_coords);
    this.flag(this.string, params.keywords);
  },
  'updatePhoneCall': function(params) {
    this.int32(-1425052898);
    this.predicate(params.phone_call);
  },
  'inputPhoneCall': function(params) {
    this.int32(506920429);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'phoneCallEmpty': function(params) {
    this.int32(1399245077);
    this.long(params.id);
  },
  'phoneCallWaiting': function(params) {
    this.int32(-987599081);
    const flags = (this.has(params.video) << 6) | (this.has(params.receive_date) << 0);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.int(params.date);
    this.long(params.admin_id);
    this.long(params.participant_id);
    this.predicate(params.protocol);
    this.flag(this.int, params.receive_date);
  },
  'phoneCallRequested': function(params) {
    this.int32(347139340);
    const flags = (this.has(params.video) << 6);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.int(params.date);
    this.long(params.admin_id);
    this.long(params.participant_id);
    this.bytes(params.g_a_hash);
    this.predicate(params.protocol);
  },
  'phoneCallAccepted': function(params) {
    this.int32(912311057);
    const flags = (this.has(params.video) << 6);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.int(params.date);
    this.long(params.admin_id);
    this.long(params.participant_id);
    this.bytes(params.g_b);
    this.predicate(params.protocol);
  },
  'phoneCall': function(params) {
    this.int32(810769141);
    const flags = (this.has(params.p2p_allowed) << 5) | (this.has(params.video) << 6) | (this.has(params.custom_parameters) << 7);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.int(params.date);
    this.long(params.admin_id);
    this.long(params.participant_id);
    this.bytes(params.g_a_or_b);
    this.long(params.key_fingerprint);
    this.predicate(params.protocol);
    this.vector(this.predicate, params.connections);
    this.int(params.start_date);
    this.flag(this.predicate, params.custom_parameters);
  },
  'phoneCallDiscarded': function(params) {
    this.int32(1355435489);
    const flags = (this.has(params.need_rating) << 2) | (this.has(params.need_debug) << 3) | (this.has(params.video) << 6) | (this.has(params.reason) << 0) | (this.has(params.duration) << 1);
    this.int32(flags);
    this.long(params.id);
    this.flag(this.predicate, params.reason);
    this.flag(this.int, params.duration);
  },
  'phoneConnection': function(params) {
    this.int32(-1665063993);
    const flags = (this.has(params.tcp) << 0);
    this.int32(flags);
    this.long(params.id);
    this.string(params.ip);
    this.string(params.ipv6);
    this.int(params.port);
    this.bytes(params.peer_tag);
  },
  'phoneCallProtocol': function(params) {
    this.int32(-58224696);
    const flags = (this.has(params.udp_p2p) << 0) | (this.has(params.udp_reflector) << 1);
    this.int32(flags);
    this.int(params.min_layer);
    this.int(params.max_layer);
    this.vector(this.string, params.library_versions);
  },
  'phone.phoneCall': function(params) {
    this.int32(-326966976);
    this.predicate(params.phone_call);
    this.vector(this.predicate, params.users);
  },
  'inputMessagesFilterPhoneCalls': function(params) {
    this.int32(-2134272152);
    const flags = (this.has(params.missed) << 0);
    this.int32(flags);
  },
  'messageActionPhoneCall': function(params) {
    this.int32(-2132731265);
    const flags = (this.has(params.video) << 2) | (this.has(params.reason) << 0) | (this.has(params.duration) << 1);
    this.int32(flags);
    this.long(params.call_id);
    this.flag(this.predicate, params.reason);
    this.flag(this.int, params.duration);
  },
  'inputMessagesFilterRoundVoice': function(params) {
    this.int32(2054952868);
  },
  'inputMessagesFilterRoundVideo': function(params) {
    this.int32(-1253451181);
  },
  'sendMessageRecordRoundAction': function(params) {
    this.int32(-1997373508);
  },
  'sendMessageUploadRoundAction': function(params) {
    this.int32(608050278);
    this.int(params.progress);
  },
  'upload.fileCdnRedirect': function(params) {
    this.int32(-242427324);
    this.int(params.dc_id);
    this.bytes(params.file_token);
    this.bytes(params.encryption_key);
    this.bytes(params.encryption_iv);
    this.vector(this.predicate, params.file_hashes);
  },
  'upload.cdnFileReuploadNeeded': function(params) {
    this.int32(-290921362);
    this.bytes(params.request_token);
  },
  'upload.cdnFile': function(params) {
    this.int32(-1449145777);
    this.bytes(params.bytes);
  },
  'cdnPublicKey': function(params) {
    this.int32(-914167110);
    this.int(params.dc_id);
    this.string(params.public_key);
  },
  'cdnConfig': function(params) {
    this.int32(1462101002);
    this.vector(this.predicate, params.public_keys);
  },
  'pageBlockChannel': function(params) {
    this.int32(-283684427);
    this.predicate(params.channel);
  },
  'langPackString': function(params) {
    this.int32(-892239370);
    this.string(params.key);
    this.string(params.value);
  },
  'langPackStringPluralized': function(params) {
    this.int32(1816636575);
    const flags = (this.has(params.zero_value) << 0) | (this.has(params.one_value) << 1) | (this.has(params.two_value) << 2) | (this.has(params.few_value) << 3) | (this.has(params.many_value) << 4);
    this.int32(flags);
    this.string(params.key);
    this.flag(this.string, params.zero_value);
    this.flag(this.string, params.one_value);
    this.flag(this.string, params.two_value);
    this.flag(this.string, params.few_value);
    this.flag(this.string, params.many_value);
    this.string(params.other_value);
  },
  'langPackStringDeleted': function(params) {
    this.int32(695856818);
    this.string(params.key);
  },
  'langPackDifference': function(params) {
    this.int32(-209337866);
    this.string(params.lang_code);
    this.int(params.from_version);
    this.int(params.version);
    this.vector(this.predicate, params.strings);
  },
  'langPackLanguage': function(params) {
    this.int32(-288727837);
    const flags = (this.has(params.official) << 0) | (this.has(params.rtl) << 2) | (this.has(params.beta) << 3) | (this.has(params.base_lang_code) << 1);
    this.int32(flags);
    this.string(params.name);
    this.string(params.native_name);
    this.string(params.lang_code);
    this.flag(this.string, params.base_lang_code);
    this.string(params.plural_code);
    this.int(params.strings_count);
    this.int(params.translated_count);
    this.string(params.translations_url);
  },
  'updateLangPackTooLong': function(params) {
    this.int32(1180041828);
    this.string(params.lang_code);
  },
  'updateLangPack': function(params) {
    this.int32(1442983757);
    this.predicate(params.difference);
  },
  'channelParticipantAdmin': function(params) {
    this.int32(885242707);
    const flags = (this.has(params.can_edit) << 0) | (this.has(params.self) << 1) | (this.has(params.inviter_id) << 1) | (this.has(params.rank) << 2);
    this.int32(flags);
    this.long(params.user_id);
    this.flag(this.long, params.inviter_id);
    this.long(params.promoted_by);
    this.int(params.date);
    this.predicate(params.admin_rights);
    this.flag(this.string, params.rank);
  },
  'channelParticipantBanned': function(params) {
    this.int32(1844969806);
    const flags = (this.has(params.left) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.long(params.kicked_by);
    this.int(params.date);
    this.predicate(params.banned_rights);
  },
  'channelParticipantsBanned': function(params) {
    this.int32(338142689);
    this.string(params.q);
  },
  'channelParticipantsSearch': function(params) {
    this.int32(106343499);
    this.string(params.q);
  },
  'channelAdminLogEventActionChangeTitle': function(params) {
    this.int32(-421545947);
    this.string(params.prev_value);
    this.string(params.new_value);
  },
  'channelAdminLogEventActionChangeAbout': function(params) {
    this.int32(1427671598);
    this.string(params.prev_value);
    this.string(params.new_value);
  },
  'channelAdminLogEventActionChangeUsername': function(params) {
    this.int32(1783299128);
    this.string(params.prev_value);
    this.string(params.new_value);
  },
  'channelAdminLogEventActionChangePhoto': function(params) {
    this.int32(1129042607);
    this.predicate(params.prev_photo);
    this.predicate(params.new_photo);
  },
  'channelAdminLogEventActionToggleInvites': function(params) {
    this.int32(460916654);
    this.Bool(params.new_value);
  },
  'channelAdminLogEventActionToggleSignatures': function(params) {
    this.int32(648939889);
    this.Bool(params.new_value);
  },
  'channelAdminLogEventActionUpdatePinned': function(params) {
    this.int32(-370660328);
    this.predicate(params.message);
  },
  'channelAdminLogEventActionEditMessage': function(params) {
    this.int32(1889215493);
    this.predicate(params.prev_message);
    this.predicate(params.new_message);
  },
  'channelAdminLogEventActionDeleteMessage': function(params) {
    this.int32(1121994683);
    this.predicate(params.message);
  },
  'channelAdminLogEventActionParticipantJoin': function(params) {
    this.int32(405815507);
  },
  'channelAdminLogEventActionParticipantLeave': function(params) {
    this.int32(-124291086);
  },
  'channelAdminLogEventActionParticipantInvite': function(params) {
    this.int32(-484690728);
    this.predicate(params.participant);
  },
  'channelAdminLogEventActionParticipantToggleBan': function(params) {
    this.int32(-422036098);
    this.predicate(params.prev_participant);
    this.predicate(params.new_participant);
  },
  'channelAdminLogEventActionParticipantToggleAdmin': function(params) {
    this.int32(-714643696);
    this.predicate(params.prev_participant);
    this.predicate(params.new_participant);
  },
  'channelAdminLogEvent': function(params) {
    this.int32(531458253);
    this.long(params.id);
    this.int(params.date);
    this.long(params.user_id);
    this.predicate(params.action);
  },
  'channels.adminLogResults': function(params) {
    this.int32(-309659827);
    this.vector(this.predicate, params.events);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'channelAdminLogEventsFilter': function(params) {
    this.int32(-368018716);
    const flags = (this.has(params.join) << 0) | (this.has(params.leave) << 1) | (this.has(params.invite) << 2) | (this.has(params.ban) << 3) | (this.has(params.unban) << 4) | (this.has(params.kick) << 5) | (this.has(params.unkick) << 6) | (this.has(params.promote) << 7) | (this.has(params.demote) << 8) | (this.has(params.info) << 9) | (this.has(params.settings) << 10) | (this.has(params.pinned) << 11) | (this.has(params.edit) << 12) | (this.has(params.delete) << 13) | (this.has(params.group_call) << 14) | (this.has(params.invites) << 15) | (this.has(params.send) << 16) | (this.has(params.forums) << 17) | (this.has(params.sub_extend) << 18);
    this.int32(flags);
  },
  'topPeerCategoryPhoneCalls': function(params) {
    this.int32(511092620);
  },
  'pageBlockAudio': function(params) {
    this.int32(-2143067670);
    this.long(params.audio_id);
    this.predicate(params.caption);
  },
  'popularContact': function(params) {
    this.int32(1558266229);
    this.long(params.client_id);
    this.int(params.importers);
  },
  'messageActionScreenshotTaken': function(params) {
    this.int32(1200788123);
  },
  'messages.favedStickersNotModified': function(params) {
    this.int32(-1634752813);
  },
  'messages.favedStickers': function(params) {
    this.int32(750063767);
    this.long(params.hash);
    this.vector(this.predicate, params.packs);
    this.vector(this.predicate, params.stickers);
  },
  'updateFavedStickers': function(params) {
    this.int32(-451831443);
  },
  'updateChannelReadMessagesContents': function(params) {
    this.int32(-366410403);
    const flags = (this.has(params.top_msg_id) << 0);
    this.int32(flags);
    this.long(params.channel_id);
    this.flag(this.int, params.top_msg_id);
    this.vector(this.int, params.messages);
  },
  'inputMessagesFilterMyMentions': function(params) {
    this.int32(-1040652646);
  },
  'updateContactsReset': function(params) {
    this.int32(1887741886);
  },
  'channelAdminLogEventActionChangeStickerSet': function(params) {
    this.int32(-1312568665);
    this.predicate(params.prev_stickerset);
    this.predicate(params.new_stickerset);
  },
  'messageActionCustomAction': function(params) {
    this.int32(-85549226);
    this.string(params.message);
  },
  'inputPaymentCredentialsApplePay': function(params) {
    this.int32(178373535);
    this.predicate(params.payment_data);
  },
  'inputMessagesFilterGeo': function(params) {
    this.int32(-419271411);
  },
  'inputMessagesFilterContacts': function(params) {
    this.int32(-530392189);
  },
  'updateChannelAvailableMessages': function(params) {
    this.int32(-1304443240);
    this.long(params.channel_id);
    this.int(params.available_min_id);
  },
  'channelAdminLogEventActionTogglePreHistoryHidden': function(params) {
    this.int32(1599903217);
    this.Bool(params.new_value);
  },
  'inputMediaGeoLive': function(params) {
    this.int32(-1759532989);
    const flags = (this.has(params.stopped) << 0) | (this.has(params.heading) << 2) | (this.has(params.period) << 1) | (this.has(params.proximity_notification_radius) << 3);
    this.int32(flags);
    this.predicate(params.geo_point);
    this.flag(this.int, params.heading);
    this.flag(this.int, params.period);
    this.flag(this.int, params.proximity_notification_radius);
  },
  'messageMediaGeoLive': function(params) {
    this.int32(-1186937242);
    const flags = (this.has(params.heading) << 0) | (this.has(params.proximity_notification_radius) << 1);
    this.int32(flags);
    this.predicate(params.geo);
    this.flag(this.int, params.heading);
    this.int(params.period);
    this.flag(this.int, params.proximity_notification_radius);
  },
  'recentMeUrlUnknown': function(params) {
    this.int32(1189204285);
    this.string(params.url);
  },
  'recentMeUrlUser': function(params) {
    this.int32(-1188296222);
    this.string(params.url);
    this.long(params.user_id);
  },
  'recentMeUrlChat': function(params) {
    this.int32(-1294306862);
    this.string(params.url);
    this.long(params.chat_id);
  },
  'recentMeUrlChatInvite': function(params) {
    this.int32(-347535331);
    this.string(params.url);
    this.predicate(params.chat_invite);
  },
  'recentMeUrlStickerSet': function(params) {
    this.int32(-1140172836);
    this.string(params.url);
    this.predicate(params.set);
  },
  'help.recentMeUrls': function(params) {
    this.int32(235081943);
    this.vector(this.predicate, params.urls);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'channels.channelParticipantsNotModified': function(params) {
    this.int32(-266911767);
  },
  'messages.messagesNotModified': function(params) {
    this.int32(1951620897);
    this.int(params.count);
  },
  'inputSingleMedia': function(params) {
    this.int32(482797855);
    const flags = (this.has(params.entities) << 0);
    this.int32(flags);
    this.predicate(params.media);
    this.long(params.random_id);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
  },
  'webAuthorization': function(params) {
    this.int32(-1493633966);
    this.long(params.hash);
    this.long(params.bot_id);
    this.string(params.domain);
    this.string(params.browser);
    this.string(params.platform);
    this.int(params.date_created);
    this.int(params.date_active);
    this.string(params.ip);
    this.string(params.region);
  },
  'account.webAuthorizations': function(params) {
    this.int32(-313079300);
    this.vector(this.predicate, params.authorizations);
    this.vector(this.predicate, params.users);
  },
  'inputMessageID': function(params) {
    this.int32(-1502174430);
    this.int(params.id);
  },
  'inputMessageReplyTo': function(params) {
    this.int32(-1160215659);
    this.int(params.id);
  },
  'inputMessagePinned': function(params) {
    this.int32(-2037963464);
  },
  'messageEntityPhone': function(params) {
    this.int32(-1687559349);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityCashtag': function(params) {
    this.int32(1280209983);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageActionBotAllowed': function(params) {
    this.int32(-988359047);
    const flags = (this.has(params.attach_menu) << 1) | (this.has(params.from_request) << 3) | (this.has(params.domain) << 0) | (this.has(params.app) << 2);
    this.int32(flags);
    this.flag(this.string, params.domain);
    this.flag(this.predicate, params.app);
  },
  'inputDialogPeer': function(params) {
    this.int32(-55902537);
    this.predicate(params.peer);
  },
  'dialogPeer': function(params) {
    this.int32(-445792507);
    this.predicate(params.peer);
  },
  'messages.foundStickerSetsNotModified': function(params) {
    this.int32(223655517);
  },
  'messages.foundStickerSets': function(params) {
    this.int32(-1963942446);
    this.long(params.hash);
    this.vector(this.predicate, params.sets);
  },
  'fileHash': function(params) {
    this.int32(-207944868);
    this.long(params.offset);
    this.int(params.limit);
    this.bytes(params.hash);
  },
  'webDocumentNoProxy': function(params) {
    this.int32(-104284986);
    this.string(params.url);
    this.int(params.size);
    this.string(params.mime_type);
    this.vector(this.predicate, params.attributes);
  },
  'inputClientProxy': function(params) {
    this.int32(1968737087);
    this.string(params.address);
    this.int(params.port);
  },
  'help.termsOfServiceUpdateEmpty': function(params) {
    this.int32(-483352705);
    this.int(params.expires);
  },
  'help.termsOfServiceUpdate': function(params) {
    this.int32(686618977);
    this.int(params.expires);
    this.predicate(params.terms_of_service);
  },
  'inputSecureFileUploaded': function(params) {
    this.int32(859091184);
    this.long(params.id);
    this.int(params.parts);
    this.string(params.md5_checksum);
    this.bytes(params.file_hash);
    this.bytes(params.secret);
  },
  'inputSecureFile': function(params) {
    this.int32(1399317950);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputSecureFileLocation': function(params) {
    this.int32(-876089816);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'secureFileEmpty': function(params) {
    this.int32(1679398724);
  },
  'secureFile': function(params) {
    this.int32(2097791614);
    this.long(params.id);
    this.long(params.access_hash);
    this.long(params.size);
    this.int(params.dc_id);
    this.int(params.date);
    this.bytes(params.file_hash);
    this.bytes(params.secret);
  },
  'secureData': function(params) {
    this.int32(-1964327229);
    this.bytes(params.data);
    this.bytes(params.data_hash);
    this.bytes(params.secret);
  },
  'securePlainPhone': function(params) {
    this.int32(2103482845);
    this.string(params.phone);
  },
  'securePlainEmail': function(params) {
    this.int32(569137759);
    this.string(params.email);
  },
  'secureValueTypePersonalDetails': function(params) {
    this.int32(-1658158621);
  },
  'secureValueTypePassport': function(params) {
    this.int32(1034709504);
  },
  'secureValueTypeDriverLicense': function(params) {
    this.int32(115615172);
  },
  'secureValueTypeIdentityCard': function(params) {
    this.int32(-1596951477);
  },
  'secureValueTypeInternalPassport': function(params) {
    this.int32(-1717268701);
  },
  'secureValueTypeAddress': function(params) {
    this.int32(-874308058);
  },
  'secureValueTypeUtilityBill': function(params) {
    this.int32(-63531698);
  },
  'secureValueTypeBankStatement': function(params) {
    this.int32(-1995211763);
  },
  'secureValueTypeRentalAgreement': function(params) {
    this.int32(-1954007928);
  },
  'secureValueTypePassportRegistration': function(params) {
    this.int32(-1713143702);
  },
  'secureValueTypeTemporaryRegistration': function(params) {
    this.int32(-368907213);
  },
  'secureValueTypePhone': function(params) {
    this.int32(-1289704741);
  },
  'secureValueTypeEmail': function(params) {
    this.int32(-1908627474);
  },
  'secureValue': function(params) {
    this.int32(411017418);
    const flags = (this.has(params.data) << 0) | (this.has(params.front_side) << 1) | (this.has(params.reverse_side) << 2) | (this.has(params.selfie) << 3) | (this.has(params.translation) << 6) | (this.has(params.files) << 4) | (this.has(params.plain_data) << 5);
    this.int32(flags);
    this.predicate(params.type);
    this.flag(this.predicate, params.data);
    this.flag(this.predicate, params.front_side);
    this.flag(this.predicate, params.reverse_side);
    this.flag(this.predicate, params.selfie);
    this.flagVector(this.predicate, params.translation);
    this.flagVector(this.predicate, params.files);
    this.flag(this.predicate, params.plain_data);
    this.bytes(params.hash);
  },
  'inputSecureValue': function(params) {
    this.int32(-618540889);
    const flags = (this.has(params.data) << 0) | (this.has(params.front_side) << 1) | (this.has(params.reverse_side) << 2) | (this.has(params.selfie) << 3) | (this.has(params.translation) << 6) | (this.has(params.files) << 4) | (this.has(params.plain_data) << 5);
    this.int32(flags);
    this.predicate(params.type);
    this.flag(this.predicate, params.data);
    this.flag(this.predicate, params.front_side);
    this.flag(this.predicate, params.reverse_side);
    this.flag(this.predicate, params.selfie);
    this.flagVector(this.predicate, params.translation);
    this.flagVector(this.predicate, params.files);
    this.flag(this.predicate, params.plain_data);
  },
  'secureValueHash': function(params) {
    this.int32(-316748368);
    this.predicate(params.type);
    this.bytes(params.hash);
  },
  'secureValueErrorData': function(params) {
    this.int32(-391902247);
    this.predicate(params.type);
    this.bytes(params.data_hash);
    this.string(params.field);
    this.string(params.text);
  },
  'secureValueErrorFrontSide': function(params) {
    this.int32(12467706);
    this.predicate(params.type);
    this.bytes(params.file_hash);
    this.string(params.text);
  },
  'secureValueErrorReverseSide': function(params) {
    this.int32(-2037765467);
    this.predicate(params.type);
    this.bytes(params.file_hash);
    this.string(params.text);
  },
  'secureValueErrorSelfie': function(params) {
    this.int32(-449327402);
    this.predicate(params.type);
    this.bytes(params.file_hash);
    this.string(params.text);
  },
  'secureValueErrorFile': function(params) {
    this.int32(2054162547);
    this.predicate(params.type);
    this.bytes(params.file_hash);
    this.string(params.text);
  },
  'secureValueErrorFiles': function(params) {
    this.int32(1717706985);
    this.predicate(params.type);
    this.vector(this.bytes, params.file_hash);
    this.string(params.text);
  },
  'secureCredentialsEncrypted': function(params) {
    this.int32(871426631);
    this.bytes(params.data);
    this.bytes(params.hash);
    this.bytes(params.secret);
  },
  'account.authorizationForm': function(params) {
    this.int32(-1389486888);
    const flags = (this.has(params.privacy_policy_url) << 0);
    this.int32(flags);
    this.vector(this.predicate, params.required_types);
    this.vector(this.predicate, params.values);
    this.vector(this.predicate, params.errors);
    this.vector(this.predicate, params.users);
    this.flag(this.string, params.privacy_policy_url);
  },
  'account.sentEmailCode': function(params) {
    this.int32(-2128640689);
    this.string(params.email_pattern);
    this.int(params.length);
  },
  'messageActionSecureValuesSentMe': function(params) {
    this.int32(455635795);
    this.vector(this.predicate, params.values);
    this.predicate(params.credentials);
  },
  'messageActionSecureValuesSent': function(params) {
    this.int32(-648257196);
    this.vector(this.predicate, params.types);
  },
  'help.deepLinkInfoEmpty': function(params) {
    this.int32(1722786150);
  },
  'help.deepLinkInfo': function(params) {
    this.int32(1783556146);
    const flags = (this.has(params.update_app) << 0) | (this.has(params.entities) << 1);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
  },
  'savedPhoneContact': function(params) {
    this.int32(289586518);
    this.string(params.phone);
    this.string(params.first_name);
    this.string(params.last_name);
    this.int(params.date);
  },
  'account.takeout': function(params) {
    this.int32(1304052993);
    this.long(params.id);
  },
  'inputTakeoutFileLocation': function(params) {
    this.int32(700340377);
  },
  'updateDialogUnreadMark': function(params) {
    this.int32(-513517117);
    const flags = (this.has(params.unread) << 0);
    this.int32(flags);
    this.predicate(params.peer);
  },
  'messages.dialogsNotModified': function(params) {
    this.int32(-253500010);
    this.int(params.count);
  },
  'inputWebFileGeoPointLocation': function(params) {
    this.int32(-1625153079);
    this.predicate(params.geo_point);
    this.long(params.access_hash);
    this.int(params.w);
    this.int(params.h);
    this.int(params.zoom);
    this.int(params.scale);
  },
  'contacts.topPeersDisabled': function(params) {
    this.int32(-1255369827);
  },
  'inputReportReasonCopyright': function(params) {
    this.int32(-1685456582);
  },
  'passwordKdfAlgoUnknown': function(params) {
    this.int32(-732254058);
  },
  'securePasswordKdfAlgoUnknown': function(params) {
    this.int32(4883767);
  },
  'securePasswordKdfAlgoPBKDF2HMACSHA512iter100000': function(params) {
    this.int32(-1141711456);
    this.bytes(params.salt);
  },
  'securePasswordKdfAlgoSHA512': function(params) {
    this.int32(-2042159726);
    this.bytes(params.salt);
  },
  'secureSecretSettings': function(params) {
    this.int32(354925740);
    this.predicate(params.secure_algo);
    this.bytes(params.secure_secret);
    this.long(params.secure_secret_id);
  },
  'passwordKdfAlgoSHA256SHA256PBKDF2HMACSHA512iter100000SHA256ModPow': function(params) {
    this.int32(982592842);
    this.bytes(params.salt1);
    this.bytes(params.salt2);
    this.int(params.g);
    this.bytes(params.p);
  },
  'inputCheckPasswordEmpty': function(params) {
    this.int32(-1736378792);
  },
  'inputCheckPasswordSRP': function(params) {
    this.int32(-763367294);
    this.long(params.srp_id);
    this.bytes(params.A);
    this.bytes(params.M1);
  },
  'secureValueError': function(params) {
    this.int32(-2036501105);
    this.predicate(params.type);
    this.bytes(params.hash);
    this.string(params.text);
  },
  'secureValueErrorTranslationFile': function(params) {
    this.int32(-1592506512);
    this.predicate(params.type);
    this.bytes(params.file_hash);
    this.string(params.text);
  },
  'secureValueErrorTranslationFiles': function(params) {
    this.int32(878931416);
    this.predicate(params.type);
    this.vector(this.bytes, params.file_hash);
    this.string(params.text);
  },
  'secureRequiredType': function(params) {
    this.int32(-2103600678);
    const flags = (this.has(params.native_names) << 0) | (this.has(params.selfie_required) << 1) | (this.has(params.translation_required) << 2);
    this.int32(flags);
    this.predicate(params.type);
  },
  'secureRequiredTypeOneOf': function(params) {
    this.int32(41187252);
    this.vector(this.predicate, params.types);
  },
  'help.passportConfigNotModified': function(params) {
    this.int32(-1078332329);
  },
  'help.passportConfig': function(params) {
    this.int32(-1600596305);
    this.int(params.hash);
    this.predicate(params.countries_langs);
  },
  'inputAppEvent': function(params) {
    this.int32(488313413);
    this.double(params.time);
    this.string(params.type);
    this.long(params.peer);
    this.predicate(params.data);
  },
  'jsonObjectValue': function(params) {
    this.int32(-1059185703);
    this.string(params.key);
    this.predicate(params.value);
  },
  'jsonNull': function(params) {
    this.int32(1064139624);
  },
  'jsonBool': function(params) {
    this.int32(-952869270);
    this.Bool(params.value);
  },
  'jsonNumber': function(params) {
    this.int32(736157604);
    this.double(params.value);
  },
  'jsonString': function(params) {
    this.int32(-1222740358);
    this.string(params.value);
  },
  'jsonArray': function(params) {
    this.int32(-146520221);
    this.vector(this.predicate, params.value);
  },
  'jsonObject': function(params) {
    this.int32(-1715350371);
    this.vector(this.predicate, params.value);
  },
  'inputNotifyBroadcasts': function(params) {
    this.int32(-1311015810);
  },
  'notifyBroadcasts': function(params) {
    this.int32(-703403793);
  },
  'textSubscript': function(params) {
    this.int32(-311786236);
    this.predicate(params.text);
  },
  'textSuperscript': function(params) {
    this.int32(-939827711);
    this.predicate(params.text);
  },
  'textMarked': function(params) {
    this.int32(55281185);
    this.predicate(params.text);
  },
  'textPhone': function(params) {
    this.int32(483104362);
    this.predicate(params.text);
    this.string(params.phone);
  },
  'textImage': function(params) {
    this.int32(136105807);
    this.long(params.document_id);
    this.int(params.w);
    this.int(params.h);
  },
  'pageBlockKicker': function(params) {
    this.int32(504660880);
    this.predicate(params.text);
  },
  'pageTableCell': function(params) {
    this.int32(878078826);
    const flags = (this.has(params.header) << 0) | (this.has(params.align_center) << 3) | (this.has(params.align_right) << 4) | (this.has(params.valign_middle) << 5) | (this.has(params.valign_bottom) << 6) | (this.has(params.text) << 7) | (this.has(params.colspan) << 1) | (this.has(params.rowspan) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.text);
    this.flag(this.int, params.colspan);
    this.flag(this.int, params.rowspan);
  },
  'pageTableRow': function(params) {
    this.int32(-524237339);
    this.vector(this.predicate, params.cells);
  },
  'pageBlockTable': function(params) {
    this.int32(-1085412734);
    const flags = (this.has(params.bordered) << 0) | (this.has(params.striped) << 1);
    this.int32(flags);
    this.predicate(params.title);
    this.vector(this.predicate, params.rows);
  },
  'pageCaption': function(params) {
    this.int32(1869903447);
    this.predicate(params.text);
    this.predicate(params.credit);
  },
  'pageListItemText': function(params) {
    this.int32(-1188055347);
    this.predicate(params.text);
  },
  'pageListItemBlocks': function(params) {
    this.int32(635466748);
    this.vector(this.predicate, params.blocks);
  },
  'pageListOrderedItemText': function(params) {
    this.int32(1577484359);
    this.string(params.num);
    this.predicate(params.text);
  },
  'pageListOrderedItemBlocks': function(params) {
    this.int32(-1730311882);
    this.string(params.num);
    this.vector(this.predicate, params.blocks);
  },
  'pageBlockOrderedList': function(params) {
    this.int32(-1702174239);
    this.vector(this.predicate, params.items);
  },
  'pageBlockDetails': function(params) {
    this.int32(1987480557);
    const flags = (this.has(params.open) << 0);
    this.int32(flags);
    this.vector(this.predicate, params.blocks);
    this.predicate(params.title);
  },
  'pageRelatedArticle': function(params) {
    this.int32(-1282352120);
    const flags = (this.has(params.title) << 0) | (this.has(params.description) << 1) | (this.has(params.photo_id) << 2) | (this.has(params.author) << 3) | (this.has(params.published_date) << 4);
    this.int32(flags);
    this.string(params.url);
    this.long(params.webpage_id);
    this.flag(this.string, params.title);
    this.flag(this.string, params.description);
    this.flag(this.long, params.photo_id);
    this.flag(this.string, params.author);
    this.flag(this.int, params.published_date);
  },
  'pageBlockRelatedArticles': function(params) {
    this.int32(370236054);
    this.predicate(params.title);
    this.vector(this.predicate, params.articles);
  },
  'pageBlockMap': function(params) {
    this.int32(-1538310410);
    this.predicate(params.geo);
    this.int(params.zoom);
    this.int(params.w);
    this.int(params.h);
    this.predicate(params.caption);
  },
  'page': function(params) {
    this.int32(-1738178803);
    const flags = (this.has(params.part) << 0) | (this.has(params.rtl) << 1) | (this.has(params.v2) << 2) | (this.has(params.views) << 3);
    this.int32(flags);
    this.string(params.url);
    this.vector(this.predicate, params.blocks);
    this.vector(this.predicate, params.photos);
    this.vector(this.predicate, params.documents);
    this.flag(this.int, params.views);
  },
  'inputPrivacyKeyPhoneP2P': function(params) {
    this.int32(-610373422);
  },
  'privacyKeyPhoneP2P': function(params) {
    this.int32(961092808);
  },
  'textAnchor': function(params) {
    this.int32(894777186);
    this.predicate(params.text);
    this.string(params.name);
  },
  'help.supportName': function(params) {
    this.int32(-1945767479);
    this.string(params.name);
  },
  'help.userInfoEmpty': function(params) {
    this.int32(-206688531);
  },
  'help.userInfo': function(params) {
    this.int32(32192344);
    this.string(params.message);
    this.vector(this.predicate, params.entities);
    this.string(params.author);
    this.int(params.date);
  },
  'messageActionContactSignUp': function(params) {
    this.int32(-202219658);
  },
  'updateMessagePoll': function(params) {
    this.int32(-1398708869);
    const flags = (this.has(params.poll) << 0);
    this.int32(flags);
    this.long(params.poll_id);
    this.flag(this.predicate, params.poll);
    this.predicate(params.results);
  },
  'pollAnswer': function(params) {
    this.int32(-15277366);
    this.predicate(params.text);
    this.bytes(params.option);
  },
  'poll': function(params) {
    this.int32(1484026161);
    this.long(params.id);
    const flags = (this.has(params.closed) << 0) | (this.has(params.public_voters) << 1) | (this.has(params.multiple_choice) << 2) | (this.has(params.quiz) << 3) | (this.has(params.close_period) << 4) | (this.has(params.close_date) << 5);
    this.int32(flags);
    this.predicate(params.question);
    this.vector(this.predicate, params.answers);
    this.flag(this.int, params.close_period);
    this.flag(this.int, params.close_date);
  },
  'pollAnswerVoters': function(params) {
    this.int32(997055186);
    const flags = (this.has(params.chosen) << 0) | (this.has(params.correct) << 1);
    this.int32(flags);
    this.bytes(params.option);
    this.int(params.voters);
  },
  'pollResults': function(params) {
    this.int32(2061444128);
    const flags = (this.has(params.min) << 0) | (this.has(params.results) << 1) | (this.has(params.total_voters) << 2) | (this.has(params.recent_voters) << 3) | (this.has(params.solution) << 4) | (this.has(params.solution_entities) << 4);
    this.int32(flags);
    this.flagVector(this.predicate, params.results);
    this.flag(this.int, params.total_voters);
    this.flagVector(this.predicate, params.recent_voters);
    this.flag(this.string, params.solution);
    this.flagVector(this.predicate, params.solution_entities);
  },
  'inputMediaPoll': function(params) {
    this.int32(261416433);
    const flags = (this.has(params.correct_answers) << 0) | (this.has(params.solution) << 1) | (this.has(params.solution_entities) << 1);
    this.int32(flags);
    this.predicate(params.poll);
    this.flagVector(this.bytes, params.correct_answers);
    this.flag(this.string, params.solution);
    this.flagVector(this.predicate, params.solution_entities);
  },
  'messageMediaPoll': function(params) {
    this.int32(1272375192);
    this.predicate(params.poll);
    this.predicate(params.results);
  },
  'chatOnlines': function(params) {
    this.int32(-264117680);
    this.int(params.onlines);
  },
  'statsURL': function(params) {
    this.int32(1202287072);
    this.string(params.url);
  },
  'photoStrippedSize': function(params) {
    this.int32(-525288402);
    this.string(params.type);
    this.bytes(params.bytes);
  },
  'chatAdminRights': function(params) {
    this.int32(1605510357);
    const flags = (this.has(params.change_info) << 0) | (this.has(params.post_messages) << 1) | (this.has(params.edit_messages) << 2) | (this.has(params.delete_messages) << 3) | (this.has(params.ban_users) << 4) | (this.has(params.invite_users) << 5) | (this.has(params.pin_messages) << 7) | (this.has(params.add_admins) << 9) | (this.has(params.anonymous) << 10) | (this.has(params.manage_call) << 11) | (this.has(params.other) << 12) | (this.has(params.manage_topics) << 13) | (this.has(params.post_stories) << 14) | (this.has(params.edit_stories) << 15) | (this.has(params.delete_stories) << 16);
    this.int32(flags);
  },
  'chatBannedRights': function(params) {
    this.int32(-1626209256);
    const flags = (this.has(params.view_messages) << 0) | (this.has(params.send_messages) << 1) | (this.has(params.send_media) << 2) | (this.has(params.send_stickers) << 3) | (this.has(params.send_gifs) << 4) | (this.has(params.send_games) << 5) | (this.has(params.send_inline) << 6) | (this.has(params.embed_links) << 7) | (this.has(params.send_polls) << 8) | (this.has(params.change_info) << 10) | (this.has(params.invite_users) << 15) | (this.has(params.pin_messages) << 17) | (this.has(params.manage_topics) << 18) | (this.has(params.send_photos) << 19) | (this.has(params.send_videos) << 20) | (this.has(params.send_roundvideos) << 21) | (this.has(params.send_audios) << 22) | (this.has(params.send_voices) << 23) | (this.has(params.send_docs) << 24) | (this.has(params.send_plain) << 25);
    this.int32(flags);
    this.int(params.until_date);
  },
  'updateChatDefaultBannedRights': function(params) {
    this.int32(1421875280);
    this.predicate(params.peer);
    this.predicate(params.default_banned_rights);
    this.int(params.version);
  },
  'inputWallPaper': function(params) {
    this.int32(-433014407);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputWallPaperSlug': function(params) {
    this.int32(1913199744);
    this.string(params.slug);
  },
  'channelParticipantsContacts': function(params) {
    this.int32(-1150621555);
    this.string(params.q);
  },
  'channelAdminLogEventActionDefaultBannedRights': function(params) {
    this.int32(771095562);
    this.predicate(params.prev_banned_rights);
    this.predicate(params.new_banned_rights);
  },
  'channelAdminLogEventActionStopPoll': function(params) {
    this.int32(-1895328189);
    this.predicate(params.message);
  },
  'account.wallPapersNotModified': function(params) {
    this.int32(471437699);
  },
  'account.wallPapers': function(params) {
    this.int32(-842824308);
    this.long(params.hash);
    this.vector(this.predicate, params.wallpapers);
  },
  'codeSettings': function(params) {
    this.int32(-1390068360);
    const flags = (this.has(params.allow_flashcall) << 0) | (this.has(params.current_number) << 1) | (this.has(params.allow_app_hash) << 4) | (this.has(params.allow_missed_call) << 5) | (this.has(params.allow_firebase) << 7) | (this.has(params.unknown_number) << 9) | (this.has(params.logout_tokens) << 6) | (this.has(params.token) << 8) | (this.has(params.app_sandbox) << 8);
    this.int32(flags);
    this.flagVector(this.bytes, params.logout_tokens);
    this.flag(this.string, params.token);
    this.flag(this.Bool, params.app_sandbox);
  },
  'wallPaperSettings': function(params) {
    this.int32(925826256);
    const flags = (this.has(params.blur) << 1) | (this.has(params.motion) << 2) | (this.has(params.background_color) << 0) | (this.has(params.second_background_color) << 4) | (this.has(params.third_background_color) << 5) | (this.has(params.fourth_background_color) << 6) | (this.has(params.intensity) << 3) | (this.has(params.rotation) << 4) | (this.has(params.emoticon) << 7);
    this.int32(flags);
    this.flag(this.int, params.background_color);
    this.flag(this.int, params.second_background_color);
    this.flag(this.int, params.third_background_color);
    this.flag(this.int, params.fourth_background_color);
    this.flag(this.int, params.intensity);
    this.flag(this.int, params.rotation);
    this.flag(this.string, params.emoticon);
  },
  'autoDownloadSettings': function(params) {
    this.int32(-1163561432);
    const flags = (this.has(params.disabled) << 0) | (this.has(params.video_preload_large) << 1) | (this.has(params.audio_preload_next) << 2) | (this.has(params.phonecalls_less_data) << 3) | (this.has(params.stories_preload) << 4);
    this.int32(flags);
    this.int(params.photo_size_max);
    this.long(params.video_size_max);
    this.long(params.file_size_max);
    this.int(params.video_upload_maxbitrate);
    this.int(params.small_queue_active_operations_max);
    this.int(params.large_queue_active_operations_max);
  },
  'account.autoDownloadSettings': function(params) {
    this.int32(1674235686);
    this.predicate(params.low);
    this.predicate(params.medium);
    this.predicate(params.high);
  },
  'emojiKeyword': function(params) {
    this.int32(-709641735);
    this.string(params.keyword);
    this.vector(this.string, params.emoticons);
  },
  'emojiKeywordDeleted': function(params) {
    this.int32(594408994);
    this.string(params.keyword);
    this.vector(this.string, params.emoticons);
  },
  'emojiKeywordsDifference': function(params) {
    this.int32(1556570557);
    this.string(params.lang_code);
    this.int(params.from_version);
    this.int(params.version);
    this.vector(this.predicate, params.keywords);
  },
  'emojiURL': function(params) {
    this.int32(-1519029347);
    this.string(params.url);
  },
  'emojiLanguage': function(params) {
    this.int32(-1275374751);
    this.string(params.lang_code);
  },
  'inputPrivacyKeyForwards': function(params) {
    this.int32(-1529000952);
  },
  'privacyKeyForwards': function(params) {
    this.int32(1777096355);
  },
  'inputPrivacyKeyProfilePhoto': function(params) {
    this.int32(1461304012);
  },
  'privacyKeyProfilePhoto': function(params) {
    this.int32(-1777000467);
  },
  'inputPhotoFileLocation': function(params) {
    this.int32(1075322878);
    this.long(params.id);
    this.long(params.access_hash);
    this.bytes(params.file_reference);
    this.string(params.thumb_size);
  },
  'inputPhotoLegacyFileLocation': function(params) {
    this.int32(-667654413);
    this.long(params.id);
    this.long(params.access_hash);
    this.bytes(params.file_reference);
    this.long(params.volume_id);
    this.int(params.local_id);
    this.long(params.secret);
  },
  'inputPeerPhotoFileLocation': function(params) {
    this.int32(925204121);
    const flags = (this.has(params.big) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.long(params.photo_id);
  },
  'inputStickerSetThumb': function(params) {
    this.int32(-1652231205);
    this.predicate(params.stickerset);
    this.int(params.thumb_version);
  },
  'folder': function(params) {
    this.int32(-11252123);
    const flags = (this.has(params.autofill_new_broadcasts) << 0) | (this.has(params.autofill_public_groups) << 1) | (this.has(params.autofill_new_correspondents) << 2) | (this.has(params.photo) << 3);
    this.int32(flags);
    this.int(params.id);
    this.string(params.title);
    this.flag(this.predicate, params.photo);
  },
  'dialogFolder': function(params) {
    this.int32(1908216652);
    const flags = (this.has(params.pinned) << 2);
    this.int32(flags);
    this.predicate(params.folder);
    this.predicate(params.peer);
    this.int(params.top_message);
    this.int(params.unread_muted_peers_count);
    this.int(params.unread_unmuted_peers_count);
    this.int(params.unread_muted_messages_count);
    this.int(params.unread_unmuted_messages_count);
  },
  'inputDialogPeerFolder': function(params) {
    this.int32(1684014375);
    this.int(params.folder_id);
  },
  'dialogPeerFolder': function(params) {
    this.int32(1363483106);
    this.int(params.folder_id);
  },
  'inputFolderPeer': function(params) {
    this.int32(-70073706);
    this.predicate(params.peer);
    this.int(params.folder_id);
  },
  'folderPeer': function(params) {
    this.int32(-373643672);
    this.predicate(params.peer);
    this.int(params.folder_id);
  },
  'updateFolderPeers': function(params) {
    this.int32(422972864);
    this.vector(this.predicate, params.folder_peers);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'inputUserFromMessage': function(params) {
    this.int32(497305826);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.long(params.user_id);
  },
  'inputChannelFromMessage': function(params) {
    this.int32(1536380829);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.long(params.channel_id);
  },
  'inputPeerUserFromMessage': function(params) {
    this.int32(-1468331492);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.long(params.user_id);
  },
  'inputPeerChannelFromMessage': function(params) {
    this.int32(-1121318848);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.long(params.channel_id);
  },
  'inputPrivacyKeyPhoneNumber': function(params) {
    this.int32(55761658);
  },
  'privacyKeyPhoneNumber': function(params) {
    this.int32(-778378131);
  },
  'topPeerCategoryForwardUsers': function(params) {
    this.int32(-1472172887);
  },
  'topPeerCategoryForwardChats': function(params) {
    this.int32(-68239120);
  },
  'channelAdminLogEventActionChangeLinkedChat': function(params) {
    this.int32(84703944);
    this.long(params.prev_value);
    this.long(params.new_value);
  },
  'messages.searchCounter': function(params) {
    this.int32(-398136321);
    const flags = (this.has(params.inexact) << 1);
    this.int32(flags);
    this.predicate(params.filter);
    this.int(params.count);
  },
  'keyboardButtonUrlAuth': function(params) {
    this.int32(280464681);
    const flags = (this.has(params.fwd_text) << 0);
    this.int32(flags);
    this.string(params.text);
    this.flag(this.string, params.fwd_text);
    this.string(params.url);
    this.int(params.button_id);
  },
  'inputKeyboardButtonUrlAuth': function(params) {
    this.int32(-802258988);
    const flags = (this.has(params.request_write_access) << 0) | (this.has(params.fwd_text) << 1);
    this.int32(flags);
    this.string(params.text);
    this.flag(this.string, params.fwd_text);
    this.string(params.url);
    this.predicate(params.bot);
  },
  'urlAuthResultRequest': function(params) {
    this.int32(-1831650802);
    const flags = (this.has(params.request_write_access) << 0);
    this.int32(flags);
    this.predicate(params.bot);
    this.string(params.domain);
  },
  'urlAuthResultAccepted': function(params) {
    this.int32(-1886646706);
    this.string(params.url);
  },
  'urlAuthResultDefault': function(params) {
    this.int32(-1445536993);
  },
  'inputPrivacyValueAllowChatParticipants': function(params) {
    this.int32(-2079962673);
    this.vector(this.long, params.chats);
  },
  'inputPrivacyValueDisallowChatParticipants': function(params) {
    this.int32(-380694650);
    this.vector(this.long, params.chats);
  },
  'privacyValueAllowChatParticipants': function(params) {
    this.int32(1796427406);
    this.vector(this.long, params.chats);
  },
  'privacyValueDisallowChatParticipants': function(params) {
    this.int32(1103656293);
    this.vector(this.long, params.chats);
  },
  'messageEntityUnderline': function(params) {
    this.int32(-1672577397);
    this.int(params.offset);
    this.int(params.length);
  },
  'messageEntityStrike': function(params) {
    this.int32(-1090087980);
    this.int(params.offset);
    this.int(params.length);
  },
  'updatePeerSettings': function(params) {
    this.int32(1786671974);
    this.predicate(params.peer);
    this.predicate(params.settings);
  },
  'channelLocationEmpty': function(params) {
    this.int32(-1078612597);
  },
  'channelLocation': function(params) {
    this.int32(547062491);
    this.predicate(params.geo_point);
    this.string(params.address);
  },
  'peerLocated': function(params) {
    this.int32(-901375139);
    this.predicate(params.peer);
    this.int(params.expires);
    this.int(params.distance);
  },
  'updatePeerLocated': function(params) {
    this.int32(-1263546448);
    this.vector(this.predicate, params.peers);
  },
  'channelAdminLogEventActionChangeLocation': function(params) {
    this.int32(241923758);
    this.predicate(params.prev_value);
    this.predicate(params.new_value);
  },
  'inputReportReasonGeoIrrelevant': function(params) {
    this.int32(-606798099);
  },
  'channelAdminLogEventActionToggleSlowMode': function(params) {
    this.int32(1401984889);
    this.int(params.prev_value);
    this.int(params.new_value);
  },
  'auth.authorizationSignUpRequired': function(params) {
    this.int32(1148485274);
    const flags = (this.has(params.terms_of_service) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.terms_of_service);
  },
  'payments.paymentVerificationNeeded': function(params) {
    this.int32(-666824391);
    this.string(params.url);
  },
  'inputStickerSetAnimatedEmoji': function(params) {
    this.int32(42402760);
  },
  'updateNewScheduledMessage': function(params) {
    this.int32(967122427);
    this.predicate(params.message);
  },
  'updateDeleteScheduledMessages': function(params) {
    this.int32(-223929981);
    const flags = (this.has(params.sent_messages) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.vector(this.int, params.messages);
    this.flagVector(this.int, params.sent_messages);
  },
  'restrictionReason': function(params) {
    this.int32(-797791052);
    this.string(params.platform);
    this.string(params.reason);
    this.string(params.text);
  },
  'inputTheme': function(params) {
    this.int32(1012306921);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputThemeSlug': function(params) {
    this.int32(-175567375);
    this.string(params.slug);
  },
  'theme': function(params) {
    this.int32(-1609668650);
    const flags = (this.has(params.creator) << 0) | (this.has(params.default) << 1) | (this.has(params.for_chat) << 5) | (this.has(params.document) << 2) | (this.has(params.settings) << 3) | (this.has(params.emoticon) << 6) | (this.has(params.installs_count) << 4);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.string(params.slug);
    this.string(params.title);
    this.flag(this.predicate, params.document);
    this.flagVector(this.predicate, params.settings);
    this.flag(this.string, params.emoticon);
    this.flag(this.int, params.installs_count);
  },
  'account.themesNotModified': function(params) {
    this.int32(-199313886);
  },
  'account.themes': function(params) {
    this.int32(-1707242387);
    this.long(params.hash);
    this.vector(this.predicate, params.themes);
  },
  'updateTheme': function(params) {
    this.int32(-2112423005);
    this.predicate(params.theme);
  },
  'inputPrivacyKeyAddedByPhone': function(params) {
    this.int32(-786326563);
  },
  'privacyKeyAddedByPhone': function(params) {
    this.int32(1124062251);
  },
  'updateGeoLiveViewed': function(params) {
    this.int32(-2027964103);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'updateLoginToken': function(params) {
    this.int32(1448076945);
  },
  'auth.loginToken': function(params) {
    this.int32(1654593920);
    this.int(params.expires);
    this.bytes(params.token);
  },
  'auth.loginTokenMigrateTo': function(params) {
    this.int32(110008598);
    this.int(params.dc_id);
    this.bytes(params.token);
  },
  'auth.loginTokenSuccess': function(params) {
    this.int32(957176926);
    this.predicate(params.authorization);
  },
  'account.contentSettings': function(params) {
    this.int32(1474462241);
    const flags = (this.has(params.sensitive_enabled) << 0) | (this.has(params.sensitive_can_change) << 1);
    this.int32(flags);
  },
  'messages.inactiveChats': function(params) {
    this.int32(-1456996667);
    this.vector(this.int, params.dates);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'baseThemeClassic': function(params) {
    this.int32(-1012849566);
  },
  'baseThemeDay': function(params) {
    this.int32(-69724536);
  },
  'baseThemeNight': function(params) {
    this.int32(-1212997976);
  },
  'baseThemeTinted': function(params) {
    this.int32(1834973166);
  },
  'baseThemeArctic': function(params) {
    this.int32(1527845466);
  },
  'inputWallPaperNoFile': function(params) {
    this.int32(-1770371538);
    this.long(params.id);
  },
  'wallPaperNoFile': function(params) {
    this.int32(-528465642);
    this.long(params.id);
    const flags = (this.has(params.default) << 1) | (this.has(params.dark) << 4) | (this.has(params.settings) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.settings);
  },
  'inputThemeSettings': function(params) {
    this.int32(-1881255857);
    const flags = (this.has(params.message_colors_animated) << 2) | (this.has(params.outbox_accent_color) << 3) | (this.has(params.message_colors) << 0) | (this.has(params.wallpaper) << 1) | (this.has(params.wallpaper_settings) << 1);
    this.int32(flags);
    this.predicate(params.base_theme);
    this.int(params.accent_color);
    this.flag(this.int, params.outbox_accent_color);
    this.flagVector(this.int, params.message_colors);
    this.flag(this.predicate, params.wallpaper);
    this.flag(this.predicate, params.wallpaper_settings);
  },
  'themeSettings': function(params) {
    this.int32(-94849324);
    const flags = (this.has(params.message_colors_animated) << 2) | (this.has(params.outbox_accent_color) << 3) | (this.has(params.message_colors) << 0) | (this.has(params.wallpaper) << 1);
    this.int32(flags);
    this.predicate(params.base_theme);
    this.int(params.accent_color);
    this.flag(this.int, params.outbox_accent_color);
    this.flagVector(this.int, params.message_colors);
    this.flag(this.predicate, params.wallpaper);
  },
  'webPageAttributeTheme': function(params) {
    this.int32(1421174295);
    const flags = (this.has(params.documents) << 0) | (this.has(params.settings) << 1);
    this.int32(flags);
    this.flagVector(this.predicate, params.documents);
    this.flag(this.predicate, params.settings);
  },
  'updateMessagePollVote': function(params) {
    this.int32(619974263);
    this.long(params.poll_id);
    this.predicate(params.peer);
    this.vector(this.bytes, params.options);
    this.int(params.qts);
  },
  'messages.votesList': function(params) {
    this.int32(1218005070);
    const flags = (this.has(params.next_offset) << 0);
    this.int32(flags);
    this.int(params.count);
    this.vector(this.predicate, params.votes);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.flag(this.string, params.next_offset);
  },
  'keyboardButtonRequestPoll': function(params) {
    this.int32(-1144565411);
    const flags = (this.has(params.quiz) << 0);
    this.int32(flags);
    this.flag(this.Bool, params.quiz);
    this.string(params.text);
  },
  'messageEntityBankCard': function(params) {
    this.int32(1981704948);
    this.int(params.offset);
    this.int(params.length);
  },
  'bankCardOpenUrl': function(params) {
    this.int32(-177732982);
    this.string(params.url);
    this.string(params.name);
  },
  'payments.bankCardData': function(params) {
    this.int32(1042605427);
    this.string(params.title);
    this.vector(this.predicate, params.open_urls);
  },
  'peerSelfLocated': function(params) {
    this.int32(-118740917);
    this.int(params.expires);
  },
  'dialogFilter': function(params) {
    this.int32(1605718587);
    const flags = (this.has(params.contacts) << 0) | (this.has(params.non_contacts) << 1) | (this.has(params.groups) << 2) | (this.has(params.broadcasts) << 3) | (this.has(params.bots) << 4) | (this.has(params.exclude_muted) << 11) | (this.has(params.exclude_read) << 12) | (this.has(params.exclude_archived) << 13) | (this.has(params.emoticon) << 25) | (this.has(params.color) << 27);
    this.int32(flags);
    this.int(params.id);
    this.string(params.title);
    this.flag(this.string, params.emoticon);
    this.flag(this.int, params.color);
    this.vector(this.predicate, params.pinned_peers);
    this.vector(this.predicate, params.include_peers);
    this.vector(this.predicate, params.exclude_peers);
  },
  'dialogFilterSuggested': function(params) {
    this.int32(2004110666);
    this.predicate(params.filter);
    this.string(params.description);
  },
  'updateDialogFilter': function(params) {
    this.int32(654302845);
    const flags = (this.has(params.filter) << 0);
    this.int32(flags);
    this.int(params.id);
    this.flag(this.predicate, params.filter);
  },
  'updateDialogFilterOrder': function(params) {
    this.int32(-1512627963);
    this.vector(this.int, params.order);
  },
  'updateDialogFilters': function(params) {
    this.int32(889491791);
  },
  'statsDateRangeDays': function(params) {
    this.int32(-1237848657);
    this.int(params.min_date);
    this.int(params.max_date);
  },
  'statsAbsValueAndPrev': function(params) {
    this.int32(-884757282);
    this.double(params.current);
    this.double(params.previous);
  },
  'statsPercentValue': function(params) {
    this.int32(-875679776);
    this.double(params.part);
    this.double(params.total);
  },
  'statsGraphAsync': function(params) {
    this.int32(1244130093);
    this.string(params.token);
  },
  'statsGraphError': function(params) {
    this.int32(-1092839390);
    this.string(params.error);
  },
  'statsGraph': function(params) {
    this.int32(-1901828938);
    const flags = (this.has(params.zoom_token) << 0);
    this.int32(flags);
    this.predicate(params.json);
    this.flag(this.string, params.zoom_token);
  },
  'stats.broadcastStats': function(params) {
    this.int32(963421692);
    this.predicate(params.period);
    this.predicate(params.followers);
    this.predicate(params.views_per_post);
    this.predicate(params.shares_per_post);
    this.predicate(params.reactions_per_post);
    this.predicate(params.views_per_story);
    this.predicate(params.shares_per_story);
    this.predicate(params.reactions_per_story);
    this.predicate(params.enabled_notifications);
    this.predicate(params.growth_graph);
    this.predicate(params.followers_graph);
    this.predicate(params.mute_graph);
    this.predicate(params.top_hours_graph);
    this.predicate(params.interactions_graph);
    this.predicate(params.iv_interactions_graph);
    this.predicate(params.views_by_source_graph);
    this.predicate(params.new_followers_by_source_graph);
    this.predicate(params.languages_graph);
    this.predicate(params.reactions_by_emotion_graph);
    this.predicate(params.story_interactions_graph);
    this.predicate(params.story_reactions_by_emotion_graph);
    this.vector(this.predicate, params.recent_posts_interactions);
  },
  'inputMediaDice': function(params) {
    this.int32(-428884101);
    this.string(params.emoticon);
  },
  'messageMediaDice': function(params) {
    this.int32(1065280907);
    this.int(params.value);
    this.string(params.emoticon);
  },
  'inputStickerSetDice': function(params) {
    this.int32(-427863538);
    this.string(params.emoticon);
  },
  'help.promoDataEmpty': function(params) {
    this.int32(-1728664459);
    this.int(params.expires);
  },
  'help.promoData': function(params) {
    this.int32(-1942390465);
    const flags = (this.has(params.proxy) << 0) | (this.has(params.psa_type) << 1) | (this.has(params.psa_message) << 2);
    this.int32(flags);
    this.int(params.expires);
    this.predicate(params.peer);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.flag(this.string, params.psa_type);
    this.flag(this.string, params.psa_message);
  },
  'videoSize': function(params) {
    this.int32(-567037804);
    const flags = (this.has(params.video_start_ts) << 0);
    this.int32(flags);
    this.string(params.type);
    this.int(params.w);
    this.int(params.h);
    this.int(params.size);
    this.flag(this.double, params.video_start_ts);
  },
  'updatePhoneCallSignalingData': function(params) {
    this.int32(643940105);
    this.long(params.phone_call_id);
    this.bytes(params.data);
  },
  'chatInvitePeek': function(params) {
    this.int32(1634294960);
    this.predicate(params.chat);
    this.int(params.expires);
  },
  'statsGroupTopPoster': function(params) {
    this.int32(-1660637285);
    this.long(params.user_id);
    this.int(params.messages);
    this.int(params.avg_chars);
  },
  'statsGroupTopAdmin': function(params) {
    this.int32(-682079097);
    this.long(params.user_id);
    this.int(params.deleted);
    this.int(params.kicked);
    this.int(params.banned);
  },
  'statsGroupTopInviter': function(params) {
    this.int32(1398765469);
    this.long(params.user_id);
    this.int(params.invitations);
  },
  'stats.megagroupStats': function(params) {
    this.int32(-276825834);
    this.predicate(params.period);
    this.predicate(params.members);
    this.predicate(params.messages);
    this.predicate(params.viewers);
    this.predicate(params.posters);
    this.predicate(params.growth_graph);
    this.predicate(params.members_graph);
    this.predicate(params.new_members_by_source_graph);
    this.predicate(params.languages_graph);
    this.predicate(params.messages_graph);
    this.predicate(params.actions_graph);
    this.predicate(params.top_hours_graph);
    this.predicate(params.weekdays_graph);
    this.vector(this.predicate, params.top_posters);
    this.vector(this.predicate, params.top_admins);
    this.vector(this.predicate, params.top_inviters);
    this.vector(this.predicate, params.users);
  },
  'globalPrivacySettings': function(params) {
    this.int32(1934380235);
    const flags = (this.has(params.archive_and_mute_new_noncontact_peers) << 0) | (this.has(params.keep_archived_unmuted) << 1) | (this.has(params.keep_archived_folders) << 2) | (this.has(params.hide_read_marks) << 3) | (this.has(params.new_noncontact_peers_require_premium) << 4);
    this.int32(flags);
  },
  'phoneConnectionWebrtc': function(params) {
    this.int32(1667228533);
    const flags = (this.has(params.turn) << 0) | (this.has(params.stun) << 1);
    this.int32(flags);
    this.long(params.id);
    this.string(params.ip);
    this.string(params.ipv6);
    this.int(params.port);
    this.string(params.username);
    this.string(params.password);
  },
  'help.countryCode': function(params) {
    this.int32(1107543535);
    const flags = (this.has(params.prefixes) << 0) | (this.has(params.patterns) << 1);
    this.int32(flags);
    this.string(params.country_code);
    this.flagVector(this.string, params.prefixes);
    this.flagVector(this.string, params.patterns);
  },
  'help.country': function(params) {
    this.int32(-1014526429);
    const flags = (this.has(params.hidden) << 0) | (this.has(params.name) << 1);
    this.int32(flags);
    this.string(params.iso2);
    this.string(params.default_name);
    this.flag(this.string, params.name);
    this.vector(this.predicate, params.country_codes);
  },
  'help.countriesListNotModified': function(params) {
    this.int32(-1815339214);
  },
  'help.countriesList': function(params) {
    this.int32(-2016381538);
    this.vector(this.predicate, params.countries);
    this.int(params.hash);
  },
  'messageViews': function(params) {
    this.int32(1163625789);
    const flags = (this.has(params.views) << 0) | (this.has(params.forwards) << 1) | (this.has(params.replies) << 2);
    this.int32(flags);
    this.flag(this.int, params.views);
    this.flag(this.int, params.forwards);
    this.flag(this.predicate, params.replies);
  },
  'updateChannelMessageForwards': function(params) {
    this.int32(-761649164);
    this.long(params.channel_id);
    this.int(params.id);
    this.int(params.forwards);
  },
  'photoSizeProgressive': function(params) {
    this.int32(-96535659);
    this.string(params.type);
    this.int(params.w);
    this.int(params.h);
    this.vector(this.int, params.sizes);
  },
  'messages.messageViews': function(params) {
    this.int32(-1228606141);
    this.vector(this.predicate, params.views);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'updateReadChannelDiscussionInbox': function(params) {
    this.int32(-693004986);
    const flags = (this.has(params.broadcast_id) << 0) | (this.has(params.broadcast_post) << 0);
    this.int32(flags);
    this.long(params.channel_id);
    this.int(params.top_msg_id);
    this.int(params.read_max_id);
    this.flag(this.long, params.broadcast_id);
    this.flag(this.int, params.broadcast_post);
  },
  'updateReadChannelDiscussionOutbox': function(params) {
    this.int32(1767677564);
    this.long(params.channel_id);
    this.int(params.top_msg_id);
    this.int(params.read_max_id);
  },
  'messages.discussionMessage': function(params) {
    this.int32(-1506535550);
    const flags = (this.has(params.max_id) << 0) | (this.has(params.read_inbox_max_id) << 1) | (this.has(params.read_outbox_max_id) << 2);
    this.int32(flags);
    this.vector(this.predicate, params.messages);
    this.flag(this.int, params.max_id);
    this.flag(this.int, params.read_inbox_max_id);
    this.flag(this.int, params.read_outbox_max_id);
    this.int(params.unread_count);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messageReplyHeader': function(params) {
    this.int32(-1346631205);
    const flags = (this.has(params.reply_to_scheduled) << 2) | (this.has(params.forum_topic) << 3) | (this.has(params.quote) << 9) | (this.has(params.reply_to_msg_id) << 4) | (this.has(params.reply_to_peer_id) << 0) | (this.has(params.reply_from) << 5) | (this.has(params.reply_media) << 8) | (this.has(params.reply_to_top_id) << 1) | (this.has(params.quote_text) << 6) | (this.has(params.quote_entities) << 7) | (this.has(params.quote_offset) << 10);
    this.int32(flags);
    this.flag(this.int, params.reply_to_msg_id);
    this.flag(this.predicate, params.reply_to_peer_id);
    this.flag(this.predicate, params.reply_from);
    this.flag(this.predicate, params.reply_media);
    this.flag(this.int, params.reply_to_top_id);
    this.flag(this.string, params.quote_text);
    this.flagVector(this.predicate, params.quote_entities);
    this.flag(this.int, params.quote_offset);
  },
  'messageReplies': function(params) {
    this.int32(-2083123262);
    const flags = (this.has(params.comments) << 0) | (this.has(params.recent_repliers) << 1) | (this.has(params.channel_id) << 0) | (this.has(params.max_id) << 2) | (this.has(params.read_max_id) << 3);
    this.int32(flags);
    this.int(params.replies);
    this.int(params.replies_pts);
    this.flagVector(this.predicate, params.recent_repliers);
    this.flag(this.long, params.channel_id);
    this.flag(this.int, params.max_id);
    this.flag(this.int, params.read_max_id);
  },
  'updatePeerBlocked': function(params) {
    this.int32(-337610926);
    const flags = (this.has(params.blocked) << 0) | (this.has(params.blocked_my_stories_from) << 1);
    this.int32(flags);
    this.predicate(params.peer_id);
  },
  'peerBlocked': function(params) {
    this.int32(-386039788);
    this.predicate(params.peer_id);
    this.int(params.date);
  },
  'updateChannelUserTyping': function(params) {
    this.int32(-1937192669);
    const flags = (this.has(params.top_msg_id) << 0);
    this.int32(flags);
    this.long(params.channel_id);
    this.flag(this.int, params.top_msg_id);
    this.predicate(params.from_id);
    this.predicate(params.action);
  },
  'inputMessageCallbackQuery': function(params) {
    this.int32(-1392895362);
    this.int(params.id);
    this.long(params.query_id);
  },
  'channelParticipantLeft': function(params) {
    this.int32(453242886);
    this.predicate(params.peer);
  },
  'channelParticipantsMentions': function(params) {
    this.int32(-531931925);
    const flags = (this.has(params.q) << 0) | (this.has(params.top_msg_id) << 1);
    this.int32(flags);
    this.flag(this.string, params.q);
    this.flag(this.int, params.top_msg_id);
  },
  'updatePinnedMessages': function(params) {
    this.int32(-309990731);
    const flags = (this.has(params.pinned) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.vector(this.int, params.messages);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'updatePinnedChannelMessages': function(params) {
    this.int32(1538885128);
    const flags = (this.has(params.pinned) << 0);
    this.int32(flags);
    this.long(params.channel_id);
    this.vector(this.int, params.messages);
    this.int(params.pts);
    this.int(params.pts_count);
  },
  'inputMessagesFilterPinned': function(params) {
    this.int32(464520273);
  },
  'stats.messageStats': function(params) {
    this.int32(2145983508);
    this.predicate(params.views_graph);
    this.predicate(params.reactions_by_emotion_graph);
  },
  'messageActionGeoProximityReached': function(params) {
    this.int32(-1730095465);
    this.predicate(params.from_id);
    this.predicate(params.to_id);
    this.int(params.distance);
  },
  'photoPathSize': function(params) {
    this.int32(-668906175);
    this.string(params.type);
    this.bytes(params.bytes);
  },
  'speakingInGroupCallAction': function(params) {
    this.int32(-651419003);
  },
  'groupCallDiscarded': function(params) {
    this.int32(2004925620);
    this.long(params.id);
    this.long(params.access_hash);
    this.int(params.duration);
  },
  'groupCall': function(params) {
    this.int32(-711498484);
    const flags = (this.has(params.join_muted) << 1) | (this.has(params.can_change_join_muted) << 2) | (this.has(params.join_date_asc) << 6) | (this.has(params.schedule_start_subscribed) << 8) | (this.has(params.can_start_video) << 9) | (this.has(params.record_video_active) << 11) | (this.has(params.rtmp_stream) << 12) | (this.has(params.listeners_hidden) << 13) | (this.has(params.title) << 3) | (this.has(params.stream_dc_id) << 4) | (this.has(params.record_start_date) << 5) | (this.has(params.schedule_date) << 7) | (this.has(params.unmuted_video_count) << 10);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.int(params.participants_count);
    this.flag(this.string, params.title);
    this.flag(this.int, params.stream_dc_id);
    this.flag(this.int, params.record_start_date);
    this.flag(this.int, params.schedule_date);
    this.flag(this.int, params.unmuted_video_count);
    this.int(params.unmuted_video_limit);
    this.int(params.version);
  },
  'inputGroupCall': function(params) {
    this.int32(-659913713);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'messageActionGroupCall': function(params) {
    this.int32(2047704898);
    const flags = (this.has(params.duration) << 0);
    this.int32(flags);
    this.predicate(params.call);
    this.flag(this.int, params.duration);
  },
  'messageActionInviteToGroupCall': function(params) {
    this.int32(1345295095);
    this.predicate(params.call);
    this.vector(this.long, params.users);
  },
  'groupCallParticipant': function(params) {
    this.int32(-341428482);
    const flags = (this.has(params.muted) << 0) | (this.has(params.left) << 1) | (this.has(params.can_self_unmute) << 2) | (this.has(params.just_joined) << 4) | (this.has(params.versioned) << 5) | (this.has(params.min) << 8) | (this.has(params.muted_by_you) << 9) | (this.has(params.volume_by_admin) << 10) | (this.has(params.self) << 12) | (this.has(params.video_joined) << 15) | (this.has(params.active_date) << 3) | (this.has(params.volume) << 7) | (this.has(params.about) << 11) | (this.has(params.raise_hand_rating) << 13) | (this.has(params.video) << 6) | (this.has(params.presentation) << 14);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.date);
    this.flag(this.int, params.active_date);
    this.int(params.source);
    this.flag(this.int, params.volume);
    this.flag(this.string, params.about);
    this.flag(this.long, params.raise_hand_rating);
    this.flag(this.predicate, params.video);
    this.flag(this.predicate, params.presentation);
  },
  'updateChat': function(params) {
    this.int32(-124097970);
    this.long(params.chat_id);
  },
  'updateGroupCallParticipants': function(params) {
    this.int32(-219423922);
    this.predicate(params.call);
    this.vector(this.predicate, params.participants);
    this.int(params.version);
  },
  'updateGroupCall': function(params) {
    this.int32(347227392);
    this.long(params.chat_id);
    this.predicate(params.call);
  },
  'phone.groupCall': function(params) {
    this.int32(-1636664659);
    this.predicate(params.call);
    this.vector(this.predicate, params.participants);
    this.string(params.participants_next_offset);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'phone.groupParticipants': function(params) {
    this.int32(-193506890);
    this.int(params.count);
    this.vector(this.predicate, params.participants);
    this.string(params.next_offset);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.int(params.version);
  },
  'inlineQueryPeerTypeSameBotPM': function(params) {
    this.int32(813821341);
  },
  'inlineQueryPeerTypePM': function(params) {
    this.int32(-2093215828);
  },
  'inlineQueryPeerTypeChat': function(params) {
    this.int32(-681130742);
  },
  'inlineQueryPeerTypeMegagroup': function(params) {
    this.int32(1589952067);
  },
  'inlineQueryPeerTypeBroadcast': function(params) {
    this.int32(1664413338);
  },
  'channelAdminLogEventActionStartGroupCall': function(params) {
    this.int32(589338437);
    this.predicate(params.call);
  },
  'channelAdminLogEventActionDiscardGroupCall': function(params) {
    this.int32(-610299584);
    this.predicate(params.call);
  },
  'channelAdminLogEventActionParticipantMute': function(params) {
    this.int32(-115071790);
    this.predicate(params.participant);
  },
  'channelAdminLogEventActionParticipantUnmute': function(params) {
    this.int32(-431740480);
    this.predicate(params.participant);
  },
  'channelAdminLogEventActionToggleGroupCallSetting': function(params) {
    this.int32(1456906823);
    this.Bool(params.join_muted);
  },
  'inputPaymentCredentialsGooglePay': function(params) {
    this.int32(-1966921727);
    this.predicate(params.payment_token);
  },
  'messages.historyImport': function(params) {
    this.int32(375566091);
    this.long(params.id);
  },
  'sendMessageHistoryImportAction': function(params) {
    this.int32(-606432698);
    this.int(params.progress);
  },
  'messages.historyImportParsed': function(params) {
    this.int32(1578088377);
    const flags = (this.has(params.pm) << 0) | (this.has(params.group) << 1) | (this.has(params.title) << 2);
    this.int32(flags);
    this.flag(this.string, params.title);
  },
  'inputReportReasonFake': function(params) {
    this.int32(-170010905);
  },
  'messages.affectedFoundMessages': function(params) {
    this.int32(-275956116);
    this.int(params.pts);
    this.int(params.pts_count);
    this.int(params.offset);
    this.vector(this.int, params.messages);
  },
  'messageActionSetMessagesTTL': function(params) {
    this.int32(1007897979);
    const flags = (this.has(params.auto_setting_from) << 0);
    this.int32(flags);
    this.int(params.period);
    this.flag(this.long, params.auto_setting_from);
  },
  'updatePeerHistoryTTL': function(params) {
    this.int32(-1147422299);
    const flags = (this.has(params.ttl_period) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.ttl_period);
  },
  'updateChatParticipant': function(params) {
    this.int32(-796432838);
    const flags = (this.has(params.prev_participant) << 0) | (this.has(params.new_participant) << 1) | (this.has(params.invite) << 2);
    this.int32(flags);
    this.long(params.chat_id);
    this.int(params.date);
    this.long(params.actor_id);
    this.long(params.user_id);
    this.flag(this.predicate, params.prev_participant);
    this.flag(this.predicate, params.new_participant);
    this.flag(this.predicate, params.invite);
    this.int(params.qts);
  },
  'updateChannelParticipant': function(params) {
    this.int32(-1738720581);
    const flags = (this.has(params.via_chatlist) << 3) | (this.has(params.prev_participant) << 0) | (this.has(params.new_participant) << 1) | (this.has(params.invite) << 2);
    this.int32(flags);
    this.long(params.channel_id);
    this.int(params.date);
    this.long(params.actor_id);
    this.long(params.user_id);
    this.flag(this.predicate, params.prev_participant);
    this.flag(this.predicate, params.new_participant);
    this.flag(this.predicate, params.invite);
    this.int(params.qts);
  },
  'updateBotStopped': function(params) {
    this.int32(-997782967);
    this.long(params.user_id);
    this.int(params.date);
    this.Bool(params.stopped);
    this.int(params.qts);
  },
  'chatInviteImporter': function(params) {
    this.int32(-1940201511);
    const flags = (this.has(params.requested) << 0) | (this.has(params.via_chatlist) << 3) | (this.has(params.about) << 2) | (this.has(params.approved_by) << 1);
    this.int32(flags);
    this.long(params.user_id);
    this.int(params.date);
    this.flag(this.string, params.about);
    this.flag(this.long, params.approved_by);
  },
  'messages.exportedChatInvites': function(params) {
    this.int32(-1111085620);
    this.int(params.count);
    this.vector(this.predicate, params.invites);
    this.vector(this.predicate, params.users);
  },
  'messages.exportedChatInvite': function(params) {
    this.int32(410107472);
    this.predicate(params.invite);
    this.vector(this.predicate, params.users);
  },
  'messages.exportedChatInviteReplaced': function(params) {
    this.int32(572915951);
    this.predicate(params.invite);
    this.predicate(params.new_invite);
    this.vector(this.predicate, params.users);
  },
  'messages.chatInviteImporters': function(params) {
    this.int32(-2118733814);
    this.int(params.count);
    this.vector(this.predicate, params.importers);
    this.vector(this.predicate, params.users);
  },
  'chatAdminWithInvites': function(params) {
    this.int32(-219353309);
    this.long(params.admin_id);
    this.int(params.invites_count);
    this.int(params.revoked_invites_count);
  },
  'messages.chatAdminsWithInvites': function(params) {
    this.int32(-1231326505);
    this.vector(this.predicate, params.admins);
    this.vector(this.predicate, params.users);
  },
  'channelAdminLogEventActionParticipantJoinByInvite': function(params) {
    this.int32(-23084712);
    const flags = (this.has(params.via_chatlist) << 0);
    this.int32(flags);
    this.predicate(params.invite);
  },
  'channelAdminLogEventActionExportedInviteDelete': function(params) {
    this.int32(1515256996);
    this.predicate(params.invite);
  },
  'channelAdminLogEventActionExportedInviteRevoke': function(params) {
    this.int32(1091179342);
    this.predicate(params.invite);
  },
  'channelAdminLogEventActionExportedInviteEdit': function(params) {
    this.int32(-384910503);
    this.predicate(params.prev_invite);
    this.predicate(params.new_invite);
  },
  'channelAdminLogEventActionParticipantVolume': function(params) {
    this.int32(1048537159);
    this.predicate(params.participant);
  },
  'channelAdminLogEventActionChangeHistoryTTL': function(params) {
    this.int32(1855199800);
    this.int(params.prev_value);
    this.int(params.new_value);
  },
  'messages.checkedHistoryImportPeer': function(params) {
    this.int32(-1571952873);
    this.string(params.confirm_text);
  },
  'inputGroupCallStream': function(params) {
    this.int32(93890858);
    const flags = (this.has(params.video_channel) << 0) | (this.has(params.video_quality) << 0);
    this.int32(flags);
    this.predicate(params.call);
    this.long(params.time_ms);
    this.int(params.scale);
    this.flag(this.int, params.video_channel);
    this.flag(this.int, params.video_quality);
  },
  'phone.joinAsPeers': function(params) {
    this.int32(-1343921601);
    this.vector(this.predicate, params.peers);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'phone.exportedGroupCallInvite': function(params) {
    this.int32(541839704);
    this.string(params.link);
  },
  'inputBotInlineMessageMediaInvoice': function(params) {
    this.int32(-672693723);
    const flags = (this.has(params.photo) << 0) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.photo);
    this.predicate(params.invoice);
    this.bytes(params.payload);
    this.string(params.provider);
    this.predicate(params.provider_data);
    this.flag(this.predicate, params.reply_markup);
  },
  'botInlineMessageMediaInvoice': function(params) {
    this.int32(894081801);
    const flags = (this.has(params.shipping_address_requested) << 1) | (this.has(params.test) << 3) | (this.has(params.photo) << 0) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.photo);
    this.string(params.currency);
    this.long(params.total_amount);
    this.flag(this.predicate, params.reply_markup);
  },
  'messageActionGroupCallScheduled': function(params) {
    this.int32(-1281329567);
    this.predicate(params.call);
    this.int(params.schedule_date);
  },
  'groupCallParticipantVideoSourceGroup': function(params) {
    this.int32(-592373577);
    this.string(params.semantics);
    this.vector(this.int, params.sources);
  },
  'groupCallParticipantVideo': function(params) {
    this.int32(1735736008);
    const flags = (this.has(params.paused) << 0) | (this.has(params.audio_source) << 1);
    this.int32(flags);
    this.string(params.endpoint);
    this.vector(this.predicate, params.source_groups);
    this.flag(this.int, params.audio_source);
  },
  'updateGroupCallConnection': function(params) {
    this.int32(192428418);
    const flags = (this.has(params.presentation) << 0);
    this.int32(flags);
    this.predicate(params.params);
  },
  'stickers.suggestedShortName': function(params) {
    this.int32(-2046910401);
    this.string(params.short_name);
  },
  'botCommandScopeDefault': function(params) {
    this.int32(795652779);
  },
  'botCommandScopeUsers': function(params) {
    this.int32(1011811544);
  },
  'botCommandScopeChats': function(params) {
    this.int32(1877059713);
  },
  'botCommandScopeChatAdmins': function(params) {
    this.int32(-1180016534);
  },
  'botCommandScopePeer': function(params) {
    this.int32(-610432643);
    this.predicate(params.peer);
  },
  'botCommandScopePeerAdmins': function(params) {
    this.int32(1071145937);
    this.predicate(params.peer);
  },
  'botCommandScopePeerUser': function(params) {
    this.int32(169026035);
    this.predicate(params.peer);
    this.predicate(params.user_id);
  },
  'account.resetPasswordFailedWait': function(params) {
    this.int32(-478701471);
    this.int(params.retry_date);
  },
  'account.resetPasswordRequestedWait': function(params) {
    this.int32(-370148227);
    this.int(params.until_date);
  },
  'account.resetPasswordOk': function(params) {
    this.int32(-383330754);
  },
  'updateBotCommands': function(params) {
    this.int32(1299263278);
    this.predicate(params.peer);
    this.long(params.bot_id);
    this.vector(this.predicate, params.commands);
  },
  'messageActionSetChatTheme': function(params) {
    this.int32(-1434950843);
    this.string(params.emoticon);
  },
  'sendMessageChooseStickerAction': function(params) {
    this.int32(-1336228175);
  },
  'sponsoredMessage': function(params) {
    this.int32(1301522832);
    const flags = (this.has(params.recommended) << 5) | (this.has(params.can_report) << 12) | (this.has(params.entities) << 1) | (this.has(params.photo) << 6) | (this.has(params.media) << 14) | (this.has(params.color) << 13) | (this.has(params.sponsor_info) << 7) | (this.has(params.additional_info) << 8);
    this.int32(flags);
    this.bytes(params.random_id);
    this.string(params.url);
    this.string(params.title);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.predicate, params.photo);
    this.flag(this.predicate, params.media);
    this.flag(this.predicate, params.color);
    this.string(params.button_text);
    this.flag(this.string, params.sponsor_info);
    this.flag(this.string, params.additional_info);
  },
  'messages.sponsoredMessages': function(params) {
    this.int32(-907141753);
    const flags = (this.has(params.posts_between) << 0);
    this.int32(flags);
    this.flag(this.int, params.posts_between);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'inputStickerSetAnimatedEmojiAnimations': function(params) {
    this.int32(215889721);
  },
  'sendMessageEmojiInteraction': function(params) {
    this.int32(630664139);
    this.string(params.emoticon);
    this.int(params.msg_id);
    this.predicate(params.interaction);
  },
  'sendMessageEmojiInteractionSeen': function(params) {
    this.int32(-1234857938);
    this.string(params.emoticon);
  },
  'inputBotInlineMessageID64': function(params) {
    this.int32(-1227287081);
    this.int(params.dc_id);
    this.long(params.owner_id);
    this.int(params.id);
    this.long(params.access_hash);
  },
  'searchResultsCalendarPeriod': function(params) {
    this.int32(-911191137);
    this.int(params.date);
    this.int(params.min_msg_id);
    this.int(params.max_msg_id);
    this.int(params.count);
  },
  'messages.searchResultsCalendar': function(params) {
    this.int32(343859772);
    const flags = (this.has(params.inexact) << 0) | (this.has(params.offset_id_offset) << 1);
    this.int32(flags);
    this.int(params.count);
    this.int(params.min_date);
    this.int(params.min_msg_id);
    this.flag(this.int, params.offset_id_offset);
    this.vector(this.predicate, params.periods);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'searchResultPosition': function(params) {
    this.int32(2137295719);
    this.int(params.msg_id);
    this.int(params.date);
    this.int(params.offset);
  },
  'messages.searchResultsPositions': function(params) {
    this.int32(1404185519);
    this.int(params.count);
    this.vector(this.predicate, params.positions);
  },
  'messageActionChatJoinedByRequest': function(params) {
    this.int32(-339958837);
  },
  'updatePendingJoinRequests': function(params) {
    this.int32(1885586395);
    this.predicate(params.peer);
    this.int(params.requests_pending);
    this.vector(this.long, params.recent_requesters);
  },
  'updateBotChatInviteRequester': function(params) {
    this.int32(299870598);
    this.predicate(params.peer);
    this.int(params.date);
    this.long(params.user_id);
    this.string(params.about);
    this.predicate(params.invite);
    this.int(params.qts);
  },
  'channelAdminLogEventActionParticipantJoinByRequest': function(params) {
    this.int32(-1347021750);
    this.predicate(params.invite);
    this.long(params.approved_by);
  },
  'inputKeyboardButtonUserProfile': function(params) {
    this.int32(-376962181);
    this.string(params.text);
    this.predicate(params.user_id);
  },
  'keyboardButtonUserProfile': function(params) {
    this.int32(814112961);
    this.string(params.text);
    this.long(params.user_id);
  },
  'channels.sendAsPeers': function(params) {
    this.int32(-191450938);
    this.vector(this.predicate, params.peers);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'channelAdminLogEventActionToggleNoForwards': function(params) {
    this.int32(-886388890);
    this.Bool(params.new_value);
  },
  'messages.stickerSetNotModified': function(params) {
    this.int32(-738646805);
  },
  'users.userFull': function(params) {
    this.int32(997004590);
    this.predicate(params.full_user);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.peerSettings': function(params) {
    this.int32(1753266509);
    this.predicate(params.settings);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'channelAdminLogEventActionSendMessage': function(params) {
    this.int32(663693416);
    this.predicate(params.message);
  },
  'auth.codeTypeMissedCall': function(params) {
    this.int32(-702884114);
  },
  'auth.sentCodeTypeMissedCall': function(params) {
    this.int32(-2113903484);
    this.string(params.prefix);
    this.int(params.length);
  },
  'auth.loggedOut': function(params) {
    this.int32(-1012759713);
    const flags = (this.has(params.future_auth_token) << 0);
    this.int32(flags);
    this.flag(this.bytes, params.future_auth_token);
  },
  'updateMessageReactions': function(params) {
    this.int32(1578843320);
    const flags = (this.has(params.top_msg_id) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.flag(this.int, params.top_msg_id);
    this.predicate(params.reactions);
  },
  'reactionCount': function(params) {
    this.int32(-1546531968);
    const flags = (this.has(params.chosen_order) << 0);
    this.int32(flags);
    this.flag(this.int, params.chosen_order);
    this.predicate(params.reaction);
    this.int(params.count);
  },
  'messageReactions': function(params) {
    this.int32(171155211);
    const flags = (this.has(params.min) << 0) | (this.has(params.can_see_list) << 2) | (this.has(params.reactions_as_tags) << 3) | (this.has(params.recent_reactions) << 1) | (this.has(params.top_reactors) << 4);
    this.int32(flags);
    this.vector(this.predicate, params.results);
    this.flagVector(this.predicate, params.recent_reactions);
    this.flagVector(this.predicate, params.top_reactors);
  },
  'messages.messageReactionsList': function(params) {
    this.int32(834488621);
    const flags = (this.has(params.next_offset) << 0);
    this.int32(flags);
    this.int(params.count);
    this.vector(this.predicate, params.reactions);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.flag(this.string, params.next_offset);
  },
  'availableReaction': function(params) {
    this.int32(-1065882623);
    const flags = (this.has(params.inactive) << 0) | (this.has(params.premium) << 2) | (this.has(params.around_animation) << 1) | (this.has(params.center_icon) << 1);
    this.int32(flags);
    this.string(params.reaction);
    this.string(params.title);
    this.predicate(params.static_icon);
    this.predicate(params.appear_animation);
    this.predicate(params.select_animation);
    this.predicate(params.activate_animation);
    this.predicate(params.effect_animation);
    this.flag(this.predicate, params.around_animation);
    this.flag(this.predicate, params.center_icon);
  },
  'messages.availableReactionsNotModified': function(params) {
    this.int32(-1626924713);
  },
  'messages.availableReactions': function(params) {
    this.int32(1989032621);
    this.int(params.hash);
    this.vector(this.predicate, params.reactions);
  },
  'messageEntitySpoiler': function(params) {
    this.int32(852137487);
    this.int(params.offset);
    this.int(params.length);
  },
  'channelAdminLogEventActionChangeAvailableReactions': function(params) {
    this.int32(-1102180616);
    this.predicate(params.prev_value);
    this.predicate(params.new_value);
  },
  'messagePeerReaction': function(params) {
    this.int32(-1938180548);
    const flags = (this.has(params.big) << 0) | (this.has(params.unread) << 1) | (this.has(params.my) << 2);
    this.int32(flags);
    this.predicate(params.peer_id);
    this.int(params.date);
    this.predicate(params.reaction);
  },
  'groupCallStreamChannel': function(params) {
    this.int32(-2132064081);
    this.int(params.channel);
    this.int(params.scale);
    this.long(params.last_timestamp_ms);
  },
  'phone.groupCallStreamChannels': function(params) {
    this.int32(-790330702);
    this.vector(this.predicate, params.channels);
  },
  'inputReportReasonIllegalDrugs': function(params) {
    this.int32(177124030);
  },
  'inputReportReasonPersonalDetails': function(params) {
    this.int32(-1631091139);
  },
  'phone.groupCallStreamRtmpUrl': function(params) {
    this.int32(767505458);
    this.string(params.url);
    this.string(params.key);
  },
  'attachMenuBotIconColor': function(params) {
    this.int32(1165423600);
    this.string(params.name);
    this.int(params.color);
  },
  'attachMenuBotIcon': function(params) {
    this.int32(-1297663893);
    const flags = (this.has(params.colors) << 0);
    this.int32(flags);
    this.string(params.name);
    this.predicate(params.icon);
    this.flagVector(this.predicate, params.colors);
  },
  'attachMenuBot': function(params) {
    this.int32(-653423106);
    const flags = (this.has(params.inactive) << 0) | (this.has(params.has_settings) << 1) | (this.has(params.request_write_access) << 2) | (this.has(params.show_in_attach_menu) << 3) | (this.has(params.show_in_side_menu) << 4) | (this.has(params.side_menu_disclaimer_needed) << 5) | (this.has(params.peer_types) << 3);
    this.int32(flags);
    this.long(params.bot_id);
    this.string(params.short_name);
    this.flagVector(this.predicate, params.peer_types);
    this.vector(this.predicate, params.icons);
  },
  'attachMenuBotsNotModified': function(params) {
    this.int32(-237467044);
  },
  'attachMenuBots': function(params) {
    this.int32(1011024320);
    this.long(params.hash);
    this.vector(this.predicate, params.bots);
    this.vector(this.predicate, params.users);
  },
  'attachMenuBotsBot': function(params) {
    this.int32(-1816172929);
    this.predicate(params.bot);
    this.vector(this.predicate, params.users);
  },
  'updateAttachMenuBots': function(params) {
    this.int32(397910539);
  },
  'webViewResultUrl': function(params) {
    this.int32(1294139288);
    const flags = (this.has(params.fullsize) << 1) | (this.has(params.fullscreen) << 2) | (this.has(params.query_id) << 0);
    this.int32(flags);
    this.flag(this.long, params.query_id);
    this.string(params.url);
  },
  'webViewMessageSent': function(params) {
    this.int32(211046684);
    const flags = (this.has(params.msg_id) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.msg_id);
  },
  'updateWebViewResultSent': function(params) {
    this.int32(361936797);
    this.long(params.query_id);
  },
  'keyboardButtonWebView': function(params) {
    this.int32(326529584);
    this.string(params.text);
    this.string(params.url);
  },
  'keyboardButtonSimpleWebView': function(params) {
    this.int32(-1598009252);
    this.string(params.text);
    this.string(params.url);
  },
  'messageActionWebViewDataSentMe': function(params) {
    this.int32(1205698681);
    this.string(params.text);
    this.string(params.data);
  },
  'messageActionWebViewDataSent': function(params) {
    this.int32(-1262252875);
    this.string(params.text);
  },
  'updateBotMenuButton': function(params) {
    this.int32(347625491);
    this.long(params.bot_id);
    this.predicate(params.button);
  },
  'botMenuButtonDefault': function(params) {
    this.int32(1966318984);
  },
  'botMenuButtonCommands': function(params) {
    this.int32(1113113093);
  },
  'botMenuButton': function(params) {
    this.int32(-944407322);
    this.string(params.text);
    this.string(params.url);
  },
  'account.savedRingtonesNotModified': function(params) {
    this.int32(-67704655);
  },
  'account.savedRingtones': function(params) {
    this.int32(-1041683259);
    this.long(params.hash);
    this.vector(this.predicate, params.ringtones);
  },
  'updateSavedRingtones': function(params) {
    this.int32(1960361625);
  },
  'notificationSoundDefault': function(params) {
    this.int32(-1746354498);
  },
  'notificationSoundNone': function(params) {
    this.int32(1863070943);
  },
  'notificationSoundLocal': function(params) {
    this.int32(-2096391452);
    this.string(params.title);
    this.string(params.data);
  },
  'notificationSoundRingtone': function(params) {
    this.int32(-9666487);
    this.long(params.id);
  },
  'account.savedRingtone': function(params) {
    this.int32(-1222230163);
  },
  'account.savedRingtoneConverted': function(params) {
    this.int32(523271863);
    this.predicate(params.document);
  },
  'attachMenuPeerTypeSameBotPM': function(params) {
    this.int32(2104224014);
  },
  'attachMenuPeerTypeBotPM': function(params) {
    this.int32(-1020528102);
  },
  'attachMenuPeerTypePM': function(params) {
    this.int32(-247016673);
  },
  'attachMenuPeerTypeChat': function(params) {
    this.int32(84480319);
  },
  'attachMenuPeerTypeBroadcast': function(params) {
    this.int32(2080104188);
  },
  'chatInvitePublicJoinRequests': function(params) {
    this.int32(-317687113);
  },
  'inputInvoiceMessage': function(params) {
    this.int32(-977967015);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'inputInvoiceSlug': function(params) {
    this.int32(-1020867857);
    this.string(params.slug);
  },
  'payments.exportedInvoice': function(params) {
    this.int32(-1362048039);
    this.string(params.url);
  },
  'updateTranscribedAudio': function(params) {
    this.int32(8703322);
    const flags = (this.has(params.pending) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.long(params.transcription_id);
    this.string(params.text);
  },
  'messages.transcribedAudio': function(params) {
    this.int32(-809903785);
    const flags = (this.has(params.pending) << 0) | (this.has(params.trial_remains_num) << 1) | (this.has(params.trial_remains_until_date) << 1);
    this.int32(flags);
    this.long(params.transcription_id);
    this.string(params.text);
    this.flag(this.int, params.trial_remains_num);
    this.flag(this.int, params.trial_remains_until_date);
  },
  'dialogFilterDefault': function(params) {
    this.int32(909284270);
  },
  'help.premiumPromo': function(params) {
    this.int32(1395946908);
    this.string(params.status_text);
    this.vector(this.predicate, params.status_entities);
    this.vector(this.string, params.video_sections);
    this.vector(this.predicate, params.videos);
    this.vector(this.predicate, params.period_options);
    this.vector(this.predicate, params.users);
  },
  'messageEntityCustomEmoji': function(params) {
    this.int32(-925956616);
    this.int(params.offset);
    this.int(params.length);
    this.long(params.document_id);
  },
  'documentAttributeCustomEmoji': function(params) {
    this.int32(-48981863);
    const flags = (this.has(params.free) << 0) | (this.has(params.text_color) << 1);
    this.int32(flags);
    this.string(params.alt);
    this.predicate(params.stickerset);
  },
  'stickerSetFullCovered': function(params) {
    this.int32(1087454222);
    this.predicate(params.set);
    this.vector(this.predicate, params.packs);
    this.vector(this.predicate, params.keywords);
    this.vector(this.predicate, params.documents);
  },
  'inputStorePaymentPremiumSubscription': function(params) {
    this.int32(-1502273946);
    const flags = (this.has(params.restore) << 0) | (this.has(params.upgrade) << 1);
    this.int32(flags);
  },
  'inputStorePaymentGiftPremium': function(params) {
    this.int32(1634697192);
    this.predicate(params.user_id);
    this.string(params.currency);
    this.long(params.amount);
  },
  'messageActionGiftPremium': function(params) {
    this.int32(1818391802);
    const flags = (this.has(params.crypto_currency) << 0) | (this.has(params.crypto_amount) << 0) | (this.has(params.message) << 1);
    this.int32(flags);
    this.string(params.currency);
    this.long(params.amount);
    this.int(params.months);
    this.flag(this.string, params.crypto_currency);
    this.flag(this.long, params.crypto_amount);
    this.flag(this.predicate, params.message);
  },
  'premiumGiftOption': function(params) {
    this.int32(1958953753);
    const flags = (this.has(params.store_product) << 0);
    this.int32(flags);
    this.int(params.months);
    this.string(params.currency);
    this.long(params.amount);
    this.string(params.bot_url);
    this.flag(this.string, params.store_product);
  },
  'inputStickerSetPremiumGifts': function(params) {
    this.int32(-930399486);
  },
  'updateReadFeaturedEmojiStickers': function(params) {
    this.int32(-78886548);
  },
  'inputPrivacyKeyVoiceMessages': function(params) {
    this.int32(-1360618136);
  },
  'privacyKeyVoiceMessages': function(params) {
    this.int32(110621716);
  },
  'paymentFormMethod': function(params) {
    this.int32(-1996951013);
    this.string(params.url);
    this.string(params.title);
  },
  'inputWebFileAudioAlbumThumbLocation': function(params) {
    this.int32(-193992412);
    const flags = (this.has(params.small) << 2) | (this.has(params.document) << 0) | (this.has(params.title) << 1) | (this.has(params.performer) << 1);
    this.int32(flags);
    this.flag(this.predicate, params.document);
    this.flag(this.string, params.title);
    this.flag(this.string, params.performer);
  },
  'emojiStatusEmpty': function(params) {
    this.int32(769727150);
  },
  'emojiStatus': function(params) {
    this.int32(-1835310691);
    this.long(params.document_id);
  },
  'emojiStatusUntil': function(params) {
    this.int32(-97474361);
    this.long(params.document_id);
    this.int(params.until);
  },
  'updateUserEmojiStatus': function(params) {
    this.int32(674706841);
    this.long(params.user_id);
    this.predicate(params.emoji_status);
  },
  'updateRecentEmojiStatuses': function(params) {
    this.int32(821314523);
  },
  'account.emojiStatusesNotModified': function(params) {
    this.int32(-796072379);
  },
  'account.emojiStatuses': function(params) {
    this.int32(-1866176559);
    this.long(params.hash);
    this.vector(this.predicate, params.statuses);
  },
  'reactionEmpty': function(params) {
    this.int32(2046153753);
  },
  'reactionEmoji': function(params) {
    this.int32(455247544);
    this.string(params.emoticon);
  },
  'reactionCustomEmoji': function(params) {
    this.int32(-1992950669);
    this.long(params.document_id);
  },
  'chatReactionsNone': function(params) {
    this.int32(-352570692);
  },
  'chatReactionsAll': function(params) {
    this.int32(1385335754);
    const flags = (this.has(params.allow_custom) << 0);
    this.int32(flags);
  },
  'chatReactionsSome': function(params) {
    this.int32(1713193015);
    this.vector(this.predicate, params.reactions);
  },
  'messages.reactionsNotModified': function(params) {
    this.int32(-1334846497);
  },
  'messages.reactions': function(params) {
    this.int32(-352454890);
    this.long(params.hash);
    this.vector(this.predicate, params.reactions);
  },
  'updateRecentReactions': function(params) {
    this.int32(1870160884);
  },
  'updateMoveStickerSetToTop': function(params) {
    this.int32(-2030252155);
    const flags = (this.has(params.masks) << 0) | (this.has(params.emojis) << 1);
    this.int32(flags);
    this.long(params.stickerset);
  },
  'auth.sentCodeTypeEmailCode': function(params) {
    this.int32(-196020837);
    const flags = (this.has(params.apple_signin_allowed) << 0) | (this.has(params.google_signin_allowed) << 1) | (this.has(params.reset_available_period) << 3) | (this.has(params.reset_pending_date) << 4);
    this.int32(flags);
    this.string(params.email_pattern);
    this.int(params.length);
    this.flag(this.int, params.reset_available_period);
    this.flag(this.int, params.reset_pending_date);
  },
  'auth.sentCodeTypeSetUpEmailRequired': function(params) {
    this.int32(-1521934870);
    const flags = (this.has(params.apple_signin_allowed) << 0) | (this.has(params.google_signin_allowed) << 1);
    this.int32(flags);
  },
  'emailVerifyPurposeLoginSetup': function(params) {
    this.int32(1128644211);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
  },
  'emailVerifyPurposeLoginChange': function(params) {
    this.int32(1383932651);
  },
  'emailVerifyPurposePassport': function(params) {
    this.int32(-1141565819);
  },
  'emailVerificationCode': function(params) {
    this.int32(-1842457175);
    this.string(params.code);
  },
  'emailVerificationGoogle': function(params) {
    this.int32(-611279166);
    this.string(params.token);
  },
  'emailVerificationApple': function(params) {
    this.int32(-1764723459);
    this.string(params.token);
  },
  'account.emailVerified': function(params) {
    this.int32(731303195);
    this.string(params.email);
  },
  'account.emailVerifiedLogin': function(params) {
    this.int32(-507835039);
    this.string(params.email);
    this.predicate(params.sent_code);
  },
  'premiumSubscriptionOption': function(params) {
    this.int32(1596792306);
    const flags = (this.has(params.current) << 1) | (this.has(params.can_purchase_upgrade) << 2) | (this.has(params.transaction) << 3) | (this.has(params.store_product) << 0);
    this.int32(flags);
    this.flag(this.string, params.transaction);
    this.int(params.months);
    this.string(params.currency);
    this.long(params.amount);
    this.string(params.bot_url);
    this.flag(this.string, params.store_product);
  },
  'inputStickerSetEmojiGenericAnimations': function(params) {
    this.int32(80008398);
  },
  'inputStickerSetEmojiDefaultStatuses': function(params) {
    this.int32(701560302);
  },
  'sendAsPeer': function(params) {
    this.int32(-1206095820);
    const flags = (this.has(params.premium_required) << 0);
    this.int32(flags);
    this.predicate(params.peer);
  },
  'messageExtendedMediaPreview': function(params) {
    this.int32(-1386050360);
    const flags = (this.has(params.w) << 0) | (this.has(params.h) << 0) | (this.has(params.thumb) << 1) | (this.has(params.video_duration) << 2);
    this.int32(flags);
    this.flag(this.int, params.w);
    this.flag(this.int, params.h);
    this.flag(this.predicate, params.thumb);
    this.flag(this.int, params.video_duration);
  },
  'messageExtendedMedia': function(params) {
    this.int32(-297296796);
    this.predicate(params.media);
  },
  'updateMessageExtendedMedia': function(params) {
    this.int32(-710666460);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.vector(this.predicate, params.extended_media);
  },
  'stickerKeyword': function(params) {
    this.int32(-50416996);
    this.long(params.document_id);
    this.vector(this.string, params.keyword);
  },
  'username': function(params) {
    this.int32(-1274595769);
    const flags = (this.has(params.editable) << 0) | (this.has(params.active) << 1);
    this.int32(flags);
    this.string(params.username);
  },
  'channelAdminLogEventActionChangeUsernames': function(params) {
    this.int32(-263212119);
    this.vector(this.string, params.prev_value);
    this.vector(this.string, params.new_value);
  },
  'channelAdminLogEventActionToggleForum': function(params) {
    this.int32(46949251);
    this.Bool(params.new_value);
  },
  'channelAdminLogEventActionCreateTopic': function(params) {
    this.int32(1483767080);
    this.predicate(params.topic);
  },
  'channelAdminLogEventActionEditTopic': function(params) {
    this.int32(-261103096);
    this.predicate(params.prev_topic);
    this.predicate(params.new_topic);
  },
  'channelAdminLogEventActionDeleteTopic': function(params) {
    this.int32(-1374254839);
    this.predicate(params.topic);
  },
  'channelAdminLogEventActionPinTopic': function(params) {
    this.int32(1569535291);
    const flags = (this.has(params.prev_topic) << 0) | (this.has(params.new_topic) << 1);
    this.int32(flags);
    this.flag(this.predicate, params.prev_topic);
    this.flag(this.predicate, params.new_topic);
  },
  'forumTopicDeleted': function(params) {
    this.int32(37687451);
    this.int(params.id);
  },
  'forumTopic': function(params) {
    this.int32(1903173033);
    const flags = (this.has(params.my) << 1) | (this.has(params.closed) << 2) | (this.has(params.pinned) << 3) | (this.has(params.short) << 5) | (this.has(params.hidden) << 6) | (this.has(params.icon_emoji_id) << 0) | (this.has(params.draft) << 4);
    this.int32(flags);
    this.int(params.id);
    this.int(params.date);
    this.string(params.title);
    this.int(params.icon_color);
    this.flag(this.long, params.icon_emoji_id);
    this.int(params.top_message);
    this.int(params.read_inbox_max_id);
    this.int(params.read_outbox_max_id);
    this.int(params.unread_count);
    this.int(params.unread_mentions_count);
    this.int(params.unread_reactions_count);
    this.predicate(params.from_id);
    this.predicate(params.notify_settings);
    this.flag(this.predicate, params.draft);
  },
  'messages.forumTopics': function(params) {
    this.int32(913709011);
    const flags = (this.has(params.order_by_create_date) << 0);
    this.int32(flags);
    this.int(params.count);
    this.vector(this.predicate, params.topics);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.int(params.pts);
  },
  'messageActionTopicCreate': function(params) {
    this.int32(228168278);
    const flags = (this.has(params.icon_emoji_id) << 0);
    this.int32(flags);
    this.string(params.title);
    this.int(params.icon_color);
    this.flag(this.long, params.icon_emoji_id);
  },
  'messageActionTopicEdit': function(params) {
    this.int32(-1064024032);
    const flags = (this.has(params.title) << 0) | (this.has(params.icon_emoji_id) << 1) | (this.has(params.closed) << 2) | (this.has(params.hidden) << 3);
    this.int32(flags);
    this.flag(this.string, params.title);
    this.flag(this.long, params.icon_emoji_id);
    this.flag(this.Bool, params.closed);
    this.flag(this.Bool, params.hidden);
  },
  'updateChannelPinnedTopic': function(params) {
    this.int32(422509539);
    const flags = (this.has(params.pinned) << 0);
    this.int32(flags);
    this.long(params.channel_id);
    this.int(params.topic_id);
  },
  'inputNotifyForumTopic': function(params) {
    this.int32(1548122514);
    this.predicate(params.peer);
    this.int(params.top_msg_id);
  },
  'notifyForumTopic': function(params) {
    this.int32(577659656);
    this.predicate(params.peer);
    this.int(params.top_msg_id);
  },
  'inputStickerSetEmojiDefaultTopicIcons': function(params) {
    this.int32(1153562857);
  },
  'messages.sponsoredMessagesEmpty': function(params) {
    this.int32(406407439);
  },
  'updateChannelPinnedTopics': function(params) {
    this.int32(-31881726);
    const flags = (this.has(params.order) << 0);
    this.int32(flags);
    this.long(params.channel_id);
    this.flagVector(this.int, params.order);
  },
  'defaultHistoryTTL': function(params) {
    this.int32(1135897376);
    this.int(params.period);
  },
  'auth.codeTypeFragmentSms': function(params) {
    this.int32(116234636);
  },
  'auth.sentCodeTypeFragmentSms': function(params) {
    this.int32(-648651719);
    this.string(params.url);
    this.int(params.length);
  },
  'exportedContactToken': function(params) {
    this.int32(1103040667);
    this.string(params.url);
    this.int(params.expires);
  },
  'channelAdminLogEventActionToggleAntiSpam': function(params) {
    this.int32(1693675004);
    this.Bool(params.new_value);
  },
  'messageActionSuggestProfilePhoto': function(params) {
    this.int32(1474192222);
    this.predicate(params.photo);
  },
  'stickerSetNoCovered': function(params) {
    this.int32(2008112412);
    this.predicate(params.set);
  },
  'updateUser': function(params) {
    this.int32(542282808);
    this.long(params.user_id);
  },
  'auth.sentCodeSuccess': function(params) {
    this.int32(596704836);
    this.predicate(params.authorization);
  },
  'messageActionRequestedPeer': function(params) {
    this.int32(827428507);
    this.int(params.button_id);
    this.vector(this.predicate, params.peers);
  },
  'requestPeerTypeUser': function(params) {
    this.int32(1597737472);
    const flags = (this.has(params.bot) << 0) | (this.has(params.premium) << 1);
    this.int32(flags);
    this.flag(this.Bool, params.bot);
    this.flag(this.Bool, params.premium);
  },
  'requestPeerTypeChat': function(params) {
    this.int32(-906990053);
    const flags = (this.has(params.creator) << 0) | (this.has(params.bot_participant) << 5) | (this.has(params.has_username) << 3) | (this.has(params.forum) << 4) | (this.has(params.user_admin_rights) << 1) | (this.has(params.bot_admin_rights) << 2);
    this.int32(flags);
    this.flag(this.Bool, params.has_username);
    this.flag(this.Bool, params.forum);
    this.flag(this.predicate, params.user_admin_rights);
    this.flag(this.predicate, params.bot_admin_rights);
  },
  'requestPeerTypeBroadcast': function(params) {
    this.int32(865857388);
    const flags = (this.has(params.creator) << 0) | (this.has(params.has_username) << 3) | (this.has(params.user_admin_rights) << 1) | (this.has(params.bot_admin_rights) << 2);
    this.int32(flags);
    this.flag(this.Bool, params.has_username);
    this.flag(this.predicate, params.user_admin_rights);
    this.flag(this.predicate, params.bot_admin_rights);
  },
  'keyboardButtonRequestPeer': function(params) {
    this.int32(1406648280);
    this.string(params.text);
    this.int(params.button_id);
    this.predicate(params.peer_type);
    this.int(params.max_quantity);
  },
  'emojiListNotModified': function(params) {
    this.int32(1209970170);
  },
  'emojiList': function(params) {
    this.int32(2048790993);
    this.long(params.hash);
    this.vector(this.long, params.document_id);
  },
  'auth.sentCodeTypeFirebaseSms': function(params) {
    this.int32(10475318);
    const flags = (this.has(params.nonce) << 0) | (this.has(params.play_integrity_project_id) << 2) | (this.has(params.play_integrity_nonce) << 2) | (this.has(params.receipt) << 1) | (this.has(params.push_timeout) << 1);
    this.int32(flags);
    this.flag(this.bytes, params.nonce);
    this.flag(this.long, params.play_integrity_project_id);
    this.flag(this.bytes, params.play_integrity_nonce);
    this.flag(this.string, params.receipt);
    this.flag(this.int, params.push_timeout);
    this.int(params.length);
  },
  'emojiGroup': function(params) {
    this.int32(2056961449);
    this.string(params.title);
    this.long(params.icon_emoji_id);
    this.vector(this.string, params.emoticons);
  },
  'messages.emojiGroupsNotModified': function(params) {
    this.int32(1874111879);
  },
  'messages.emojiGroups': function(params) {
    this.int32(-2011186869);
    this.int(params.hash);
    this.vector(this.predicate, params.groups);
  },
  'videoSizeEmojiMarkup': function(params) {
    this.int32(-128171716);
    this.long(params.emoji_id);
    this.vector(this.int, params.background_colors);
  },
  'videoSizeStickerMarkup': function(params) {
    this.int32(228623102);
    this.predicate(params.stickerset);
    this.long(params.sticker_id);
    this.vector(this.int, params.background_colors);
  },
  'textWithEntities': function(params) {
    this.int32(1964978502);
    this.string(params.text);
    this.vector(this.predicate, params.entities);
  },
  'messages.translateResult': function(params) {
    this.int32(870003448);
    this.vector(this.predicate, params.result);
  },
  'autoSaveSettings': function(params) {
    this.int32(-934791986);
    const flags = (this.has(params.photos) << 0) | (this.has(params.videos) << 1) | (this.has(params.video_max_size) << 2);
    this.int32(flags);
    this.flag(this.long, params.video_max_size);
  },
  'autoSaveException': function(params) {
    this.int32(-2124403385);
    this.predicate(params.peer);
    this.predicate(params.settings);
  },
  'account.autoSaveSettings': function(params) {
    this.int32(1279133341);
    this.predicate(params.users_settings);
    this.predicate(params.chats_settings);
    this.predicate(params.broadcasts_settings);
    this.vector(this.predicate, params.exceptions);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'updateAutoSaveSettings': function(params) {
    this.int32(-335171433);
  },
  'help.appConfigNotModified': function(params) {
    this.int32(2094949405);
  },
  'help.appConfig': function(params) {
    this.int32(-585598930);
    this.int(params.hash);
    this.predicate(params.config);
  },
  'inputBotAppID': function(params) {
    this.int32(-1457472134);
    this.long(params.id);
    this.long(params.access_hash);
  },
  'inputBotAppShortName': function(params) {
    this.int32(-1869872121);
    this.predicate(params.bot_id);
    this.string(params.short_name);
  },
  'botAppNotModified': function(params) {
    this.int32(1571189943);
  },
  'botApp': function(params) {
    this.int32(-1778593322);
    const flags = (this.has(params.document) << 0);
    this.int32(flags);
    this.long(params.id);
    this.long(params.access_hash);
    this.string(params.short_name);
    this.string(params.title);
    this.string(params.description);
    this.predicate(params.photo);
    this.flag(this.predicate, params.document);
    this.long(params.hash);
  },
  'messages.botApp': function(params) {
    this.int32(-347034123);
    const flags = (this.has(params.inactive) << 0) | (this.has(params.request_write_access) << 1) | (this.has(params.has_settings) << 2);
    this.int32(flags);
    this.predicate(params.app);
  },
  'inlineBotWebView': function(params) {
    this.int32(-1250781739);
    this.string(params.text);
    this.string(params.url);
  },
  'readParticipantDate': function(params) {
    this.int32(1246753138);
    this.long(params.user_id);
    this.int(params.date);
  },
  'dialogFilterChatlist': function(params) {
    this.int32(-1612542300);
    const flags = (this.has(params.has_my_invites) << 26) | (this.has(params.emoticon) << 25) | (this.has(params.color) << 27);
    this.int32(flags);
    this.int(params.id);
    this.string(params.title);
    this.flag(this.string, params.emoticon);
    this.flag(this.int, params.color);
    this.vector(this.predicate, params.pinned_peers);
    this.vector(this.predicate, params.include_peers);
  },
  'inputChatlistDialogFilter': function(params) {
    this.int32(-203367885);
    this.int(params.filter_id);
  },
  'exportedChatlistInvite': function(params) {
    this.int32(206668204);
    const flags = 0;
    this.int32(flags);
    this.string(params.title);
    this.string(params.url);
    this.vector(this.predicate, params.peers);
  },
  'chatlists.exportedChatlistInvite': function(params) {
    this.int32(283567014);
    this.predicate(params.filter);
    this.predicate(params.invite);
  },
  'chatlists.exportedInvites': function(params) {
    this.int32(279670215);
    this.vector(this.predicate, params.invites);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'chatlists.chatlistInviteAlready': function(params) {
    this.int32(-91752871);
    this.int(params.filter_id);
    this.vector(this.predicate, params.missing_peers);
    this.vector(this.predicate, params.already_peers);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'chatlists.chatlistInvite': function(params) {
    this.int32(500007837);
    const flags = (this.has(params.emoticon) << 0);
    this.int32(flags);
    this.string(params.title);
    this.flag(this.string, params.emoticon);
    this.vector(this.predicate, params.peers);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'chatlists.chatlistUpdates': function(params) {
    this.int32(-1816295539);
    this.vector(this.predicate, params.missing_peers);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messageActionSetChatWallPaper': function(params) {
    this.int32(1348510708);
    const flags = (this.has(params.same) << 0) | (this.has(params.for_both) << 1);
    this.int32(flags);
    this.predicate(params.wallpaper);
  },
  'bots.botInfo': function(params) {
    this.int32(-391678544);
    this.string(params.name);
    this.string(params.about);
    this.string(params.description);
  },
  'inlineQueryPeerTypeBotPM': function(params) {
    this.int32(238759180);
  },
  'messagePeerVote': function(params) {
    this.int32(-1228133028);
    this.predicate(params.peer);
    this.bytes(params.option);
    this.int(params.date);
  },
  'messagePeerVoteInputOption': function(params) {
    this.int32(1959634180);
    this.predicate(params.peer);
    this.int(params.date);
  },
  'messagePeerVoteMultiple': function(params) {
    this.int32(1177089766);
    this.predicate(params.peer);
    this.vector(this.bytes, params.options);
    this.int(params.date);
  },
  'inputPrivacyKeyAbout': function(params) {
    this.int32(941870144);
  },
  'privacyKeyAbout': function(params) {
    this.int32(-1534675103);
  },
  'storyViews': function(params) {
    this.int32(-1923523370);
    const flags = (this.has(params.has_viewers) << 1) | (this.has(params.forwards_count) << 2) | (this.has(params.reactions) << 3) | (this.has(params.reactions_count) << 4) | (this.has(params.recent_viewers) << 0);
    this.int32(flags);
    this.int(params.views_count);
    this.flag(this.int, params.forwards_count);
    this.flagVector(this.predicate, params.reactions);
    this.flag(this.int, params.reactions_count);
    this.flagVector(this.long, params.recent_viewers);
  },
  'storyItemDeleted': function(params) {
    this.int32(1374088783);
    this.int(params.id);
  },
  'storyItemSkipped': function(params) {
    this.int32(-5388013);
    const flags = (this.has(params.close_friends) << 8);
    this.int32(flags);
    this.int(params.id);
    this.int(params.date);
    this.int(params.expire_date);
  },
  'storyItem': function(params) {
    this.int32(2041735716);
    const flags = (this.has(params.pinned) << 5) | (this.has(params.public) << 7) | (this.has(params.close_friends) << 8) | (this.has(params.min) << 9) | (this.has(params.noforwards) << 10) | (this.has(params.edited) << 11) | (this.has(params.contacts) << 12) | (this.has(params.selected_contacts) << 13) | (this.has(params.out) << 16) | (this.has(params.from_id) << 18) | (this.has(params.fwd_from) << 17) | (this.has(params.caption) << 0) | (this.has(params.entities) << 1) | (this.has(params.media_areas) << 14) | (this.has(params.privacy) << 2) | (this.has(params.views) << 3) | (this.has(params.sent_reaction) << 15);
    this.int32(flags);
    this.int(params.id);
    this.int(params.date);
    this.flag(this.predicate, params.from_id);
    this.flag(this.predicate, params.fwd_from);
    this.int(params.expire_date);
    this.flag(this.string, params.caption);
    this.flagVector(this.predicate, params.entities);
    this.predicate(params.media);
    this.flagVector(this.predicate, params.media_areas);
    this.flagVector(this.predicate, params.privacy);
    this.flag(this.predicate, params.views);
    this.flag(this.predicate, params.sent_reaction);
  },
  'updateStory': function(params) {
    this.int32(1974712216);
    this.predicate(params.peer);
    this.predicate(params.story);
  },
  'updateReadStories': function(params) {
    this.int32(-145845461);
    this.predicate(params.peer);
    this.int(params.max_id);
  },
  'stories.allStoriesNotModified': function(params) {
    this.int32(291044926);
    const flags = 0;
    this.int32(flags);
    this.string(params.state);
    this.predicate(params.stealth_mode);
  },
  'stories.allStories': function(params) {
    this.int32(1862033025);
    const flags = (this.has(params.has_more) << 0);
    this.int32(flags);
    this.int(params.count);
    this.string(params.state);
    this.vector(this.predicate, params.peer_stories);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.predicate(params.stealth_mode);
  },
  'stories.stories': function(params) {
    this.int32(1673780490);
    const flags = (this.has(params.pinned_to_top) << 0);
    this.int32(flags);
    this.int(params.count);
    this.vector(this.predicate, params.stories);
    this.flagVector(this.int, params.pinned_to_top);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'inputPrivacyValueAllowCloseFriends': function(params) {
    this.int32(793067081);
  },
  'privacyValueAllowCloseFriends': function(params) {
    this.int32(-135735141);
  },
  'storyView': function(params) {
    this.int32(-1329730875);
    const flags = (this.has(params.blocked) << 0) | (this.has(params.blocked_my_stories_from) << 1) | (this.has(params.reaction) << 2);
    this.int32(flags);
    this.long(params.user_id);
    this.int(params.date);
    this.flag(this.predicate, params.reaction);
  },
  'stories.storyViewsList': function(params) {
    this.int32(1507299269);
    const flags = (this.has(params.next_offset) << 0);
    this.int32(flags);
    this.int(params.count);
    this.int(params.views_count);
    this.int(params.forwards_count);
    this.int(params.reactions_count);
    this.vector(this.predicate, params.views);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.flag(this.string, params.next_offset);
  },
  'stories.storyViews': function(params) {
    this.int32(-560009955);
    this.vector(this.predicate, params.views);
    this.vector(this.predicate, params.users);
  },
  'inputReplyToMessage': function(params) {
    this.int32(583071445);
    const flags = (this.has(params.top_msg_id) << 0) | (this.has(params.reply_to_peer_id) << 1) | (this.has(params.quote_text) << 2) | (this.has(params.quote_entities) << 3) | (this.has(params.quote_offset) << 4);
    this.int32(flags);
    this.int(params.reply_to_msg_id);
    this.flag(this.int, params.top_msg_id);
    this.flag(this.predicate, params.reply_to_peer_id);
    this.flag(this.string, params.quote_text);
    this.flagVector(this.predicate, params.quote_entities);
    this.flag(this.int, params.quote_offset);
  },
  'inputReplyToStory': function(params) {
    this.int32(1484862010);
    this.predicate(params.peer);
    this.int(params.story_id);
  },
  'messageReplyStoryHeader': function(params) {
    this.int32(240843065);
    this.predicate(params.peer);
    this.int(params.story_id);
  },
  'updateStoryID': function(params) {
    this.int32(468923833);
    this.int(params.id);
    this.long(params.random_id);
  },
  'exportedStoryLink': function(params) {
    this.int32(1070138683);
    this.string(params.link);
  },
  'inputMediaStory': function(params) {
    this.int32(-1979852936);
    this.predicate(params.peer);
    this.int(params.id);
  },
  'messageMediaStory': function(params) {
    this.int32(1758159491);
    const flags = (this.has(params.via_mention) << 1) | (this.has(params.story) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.id);
    this.flag(this.predicate, params.story);
  },
  'webPageAttributeStory': function(params) {
    this.int32(781501415);
    const flags = (this.has(params.story) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.id);
    this.flag(this.predicate, params.story);
  },
  'storiesStealthMode': function(params) {
    this.int32(1898850301);
    const flags = (this.has(params.active_until_date) << 0) | (this.has(params.cooldown_until_date) << 1);
    this.int32(flags);
    this.flag(this.int, params.active_until_date);
    this.flag(this.int, params.cooldown_until_date);
  },
  'updateStoriesStealthMode': function(params) {
    this.int32(738741697);
    this.predicate(params.stealth_mode);
  },
  'mediaAreaCoordinates': function(params) {
    this.int32(-808853502);
    const flags = (this.has(params.radius) << 0);
    this.int32(flags);
    this.double(params.x);
    this.double(params.y);
    this.double(params.w);
    this.double(params.h);
    this.double(params.rotation);
    this.flag(this.double, params.radius);
  },
  'mediaAreaVenue': function(params) {
    this.int32(-1098720356);
    this.predicate(params.coordinates);
    this.predicate(params.geo);
    this.string(params.title);
    this.string(params.address);
    this.string(params.provider);
    this.string(params.venue_id);
    this.string(params.venue_type);
  },
  'inputMediaAreaVenue': function(params) {
    this.int32(-1300094593);
    this.predicate(params.coordinates);
    this.long(params.query_id);
    this.string(params.result_id);
  },
  'mediaAreaGeoPoint': function(params) {
    this.int32(-891992787);
    const flags = (this.has(params.address) << 0);
    this.int32(flags);
    this.predicate(params.coordinates);
    this.predicate(params.geo);
    this.flag(this.predicate, params.address);
  },
  'updateSentStoryReaction': function(params) {
    this.int32(2103604867);
    this.predicate(params.peer);
    this.int(params.story_id);
    this.predicate(params.reaction);
  },
  'mediaAreaSuggestedReaction': function(params) {
    this.int32(340088945);
    const flags = (this.has(params.dark) << 0) | (this.has(params.flipped) << 1);
    this.int32(flags);
    this.predicate(params.coordinates);
    this.predicate(params.reaction);
  },
  'peerStories': function(params) {
    this.int32(-1707742823);
    const flags = (this.has(params.max_read_id) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.max_read_id);
    this.vector(this.predicate, params.stories);
  },
  'stories.peerStories': function(params) {
    this.int32(-890861720);
    this.predicate(params.stories);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.webPage': function(params) {
    this.int32(-44166467);
    this.predicate(params.webpage);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'inputStorePaymentPremiumGiftCode': function(params) {
    this.int32(-75955309);
    const flags = (this.has(params.boost_peer) << 0) | (this.has(params.message) << 1);
    this.int32(flags);
    this.vector(this.predicate, params.users);
    this.flag(this.predicate, params.boost_peer);
    this.string(params.currency);
    this.long(params.amount);
    this.flag(this.predicate, params.message);
  },
  'inputStorePaymentPremiumGiveaway': function(params) {
    this.int32(369444042);
    const flags = (this.has(params.only_new_subscribers) << 0) | (this.has(params.winners_are_visible) << 3) | (this.has(params.additional_peers) << 1) | (this.has(params.countries_iso2) << 2) | (this.has(params.prize_description) << 4);
    this.int32(flags);
    this.predicate(params.boost_peer);
    this.flagVector(this.predicate, params.additional_peers);
    this.flagVector(this.string, params.countries_iso2);
    this.flag(this.string, params.prize_description);
    this.long(params.random_id);
    this.int(params.until_date);
    this.string(params.currency);
    this.long(params.amount);
  },
  'inputInvoicePremiumGiftCode': function(params) {
    this.int32(-1734841331);
    this.predicate(params.purpose);
    this.predicate(params.option);
  },
  'premiumGiftCodeOption': function(params) {
    this.int32(629052971);
    const flags = (this.has(params.store_product) << 0) | (this.has(params.store_quantity) << 1);
    this.int32(flags);
    this.int(params.users);
    this.int(params.months);
    this.flag(this.string, params.store_product);
    this.flag(this.int, params.store_quantity);
    this.string(params.currency);
    this.long(params.amount);
  },
  'payments.checkedGiftCode': function(params) {
    this.int32(675942550);
    const flags = (this.has(params.via_giveaway) << 2) | (this.has(params.from_id) << 4) | (this.has(params.giveaway_msg_id) << 3) | (this.has(params.to_id) << 0) | (this.has(params.used_date) << 1);
    this.int32(flags);
    this.flag(this.predicate, params.from_id);
    this.flag(this.int, params.giveaway_msg_id);
    this.flag(this.long, params.to_id);
    this.int(params.date);
    this.int(params.months);
    this.flag(this.int, params.used_date);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messageMediaGiveaway': function(params) {
    this.int32(-1442366485);
    const flags = (this.has(params.only_new_subscribers) << 0) | (this.has(params.winners_are_visible) << 2) | (this.has(params.countries_iso2) << 1) | (this.has(params.prize_description) << 3) | (this.has(params.months) << 4) | (this.has(params.stars) << 5);
    this.int32(flags);
    this.vector(this.long, params.channels);
    this.flagVector(this.string, params.countries_iso2);
    this.flag(this.string, params.prize_description);
    this.int(params.quantity);
    this.flag(this.int, params.months);
    this.flag(this.long, params.stars);
    this.int(params.until_date);
  },
  'messageActionGiftCode': function(params) {
    this.int32(1456486804);
    const flags = (this.has(params.via_giveaway) << 0) | (this.has(params.unclaimed) << 5) | (this.has(params.boost_peer) << 1) | (this.has(params.currency) << 2) | (this.has(params.amount) << 2) | (this.has(params.crypto_currency) << 3) | (this.has(params.crypto_amount) << 3) | (this.has(params.message) << 4);
    this.int32(flags);
    this.flag(this.predicate, params.boost_peer);
    this.int(params.months);
    this.string(params.slug);
    this.flag(this.string, params.currency);
    this.flag(this.long, params.amount);
    this.flag(this.string, params.crypto_currency);
    this.flag(this.long, params.crypto_amount);
    this.flag(this.predicate, params.message);
  },
  'messageActionGiveawayLaunch': function(params) {
    this.int32(-1475391004);
    const flags = (this.has(params.stars) << 0);
    this.int32(flags);
    this.flag(this.long, params.stars);
  },
  'payments.giveawayInfo': function(params) {
    this.int32(1130879648);
    const flags = (this.has(params.participating) << 0) | (this.has(params.preparing_results) << 3) | (this.has(params.joined_too_early_date) << 1) | (this.has(params.admin_disallowed_chat_id) << 2) | (this.has(params.disallowed_country) << 4);
    this.int32(flags);
    this.int(params.start_date);
    this.flag(this.int, params.joined_too_early_date);
    this.flag(this.long, params.admin_disallowed_chat_id);
    this.flag(this.string, params.disallowed_country);
  },
  'payments.giveawayInfoResults': function(params) {
    this.int32(-512366993);
    const flags = (this.has(params.winner) << 0) | (this.has(params.refunded) << 1) | (this.has(params.gift_code_slug) << 3) | (this.has(params.stars_prize) << 4) | (this.has(params.activated_count) << 2);
    this.int32(flags);
    this.int(params.start_date);
    this.flag(this.string, params.gift_code_slug);
    this.flag(this.long, params.stars_prize);
    this.int(params.finish_date);
    this.int(params.winners_count);
    this.flag(this.int, params.activated_count);
  },
  'messageEntityBlockquote': function(params) {
    this.int32(-238245204);
    const flags = (this.has(params.collapsed) << 0);
    this.int32(flags);
    this.int(params.offset);
    this.int(params.length);
  },
  'prepaidGiveaway': function(params) {
    this.int32(-1303143084);
    this.long(params.id);
    this.int(params.months);
    this.int(params.quantity);
    this.int(params.date);
  },
  'inputMediaWebPage': function(params) {
    this.int32(-1038383031);
    const flags = (this.has(params.force_large_media) << 0) | (this.has(params.force_small_media) << 1) | (this.has(params.optional) << 2);
    this.int32(flags);
    this.string(params.url);
  },
  'inputBotInlineMessageMediaWebPage': function(params) {
    this.int32(-1109605104);
    const flags = (this.has(params.invert_media) << 3) | (this.has(params.force_large_media) << 4) | (this.has(params.force_small_media) << 5) | (this.has(params.optional) << 6) | (this.has(params.entities) << 1) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.string(params.url);
    this.flag(this.predicate, params.reply_markup);
  },
  'botInlineMessageMediaWebPage': function(params) {
    this.int32(-2137335386);
    const flags = (this.has(params.invert_media) << 3) | (this.has(params.force_large_media) << 4) | (this.has(params.force_small_media) << 5) | (this.has(params.manual) << 7) | (this.has(params.safe) << 8) | (this.has(params.entities) << 1) | (this.has(params.reply_markup) << 2);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.string(params.url);
    this.flag(this.predicate, params.reply_markup);
  },
  'boost': function(params) {
    this.int32(1262359766);
    const flags = (this.has(params.gift) << 1) | (this.has(params.giveaway) << 2) | (this.has(params.unclaimed) << 3) | (this.has(params.user_id) << 0) | (this.has(params.giveaway_msg_id) << 2) | (this.has(params.used_gift_slug) << 4) | (this.has(params.multiplier) << 5) | (this.has(params.stars) << 6);
    this.int32(flags);
    this.string(params.id);
    this.flag(this.long, params.user_id);
    this.flag(this.int, params.giveaway_msg_id);
    this.int(params.date);
    this.int(params.expires);
    this.flag(this.string, params.used_gift_slug);
    this.flag(this.int, params.multiplier);
    this.flag(this.long, params.stars);
  },
  'premium.boostsList': function(params) {
    this.int32(-2030542532);
    const flags = (this.has(params.next_offset) << 0);
    this.int32(flags);
    this.int(params.count);
    this.vector(this.predicate, params.boosts);
    this.flag(this.string, params.next_offset);
    this.vector(this.predicate, params.users);
  },
  'myBoost': function(params) {
    this.int32(-1001897636);
    const flags = (this.has(params.peer) << 0) | (this.has(params.cooldown_until_date) << 1);
    this.int32(flags);
    this.int(params.slot);
    this.flag(this.predicate, params.peer);
    this.int(params.date);
    this.int(params.expires);
    this.flag(this.int, params.cooldown_until_date);
  },
  'premium.myBoosts': function(params) {
    this.int32(-1696454430);
    this.vector(this.predicate, params.my_boosts);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'premium.boostsStatus': function(params) {
    this.int32(1230586490);
    const flags = (this.has(params.my_boost) << 2) | (this.has(params.gift_boosts) << 4) | (this.has(params.next_level_boosts) << 0) | (this.has(params.premium_audience) << 1) | (this.has(params.prepaid_giveaways) << 3) | (this.has(params.my_boost_slots) << 2);
    this.int32(flags);
    this.int(params.level);
    this.int(params.current_level_boosts);
    this.int(params.boosts);
    this.flag(this.int, params.gift_boosts);
    this.flag(this.int, params.next_level_boosts);
    this.flag(this.predicate, params.premium_audience);
    this.string(params.boost_url);
    this.flagVector(this.predicate, params.prepaid_giveaways);
    this.flagVector(this.int, params.my_boost_slots);
  },
  'updateBotChatBoost': function(params) {
    this.int32(-1873947492);
    this.predicate(params.peer);
    this.predicate(params.boost);
    this.int(params.qts);
  },
  'updateChannelViewForumAsMessages': function(params) {
    this.int32(129403168);
    this.long(params.channel_id);
    this.Bool(params.enabled);
  },
  'messageActionGiveawayResults': function(params) {
    this.int32(-2015170219);
    const flags = (this.has(params.stars) << 0);
    this.int32(flags);
    this.int(params.winners_count);
    this.int(params.unclaimed_count);
  },
  'updatePeerWallpaper': function(params) {
    this.int32(-1371598819);
    const flags = (this.has(params.wallpaper_overridden) << 1) | (this.has(params.wallpaper) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.predicate, params.wallpaper);
  },
  'storyFwdHeader': function(params) {
    this.int32(-1205411504);
    const flags = (this.has(params.modified) << 3) | (this.has(params.from) << 0) | (this.has(params.from_name) << 1) | (this.has(params.story_id) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.from);
    this.flag(this.string, params.from_name);
    this.flag(this.int, params.story_id);
  },
  'postInteractionCountersMessage': function(params) {
    this.int32(-419066241);
    this.int(params.msg_id);
    this.int(params.views);
    this.int(params.forwards);
    this.int(params.reactions);
  },
  'postInteractionCountersStory': function(params) {
    this.int32(-1974989273);
    this.int(params.story_id);
    this.int(params.views);
    this.int(params.forwards);
    this.int(params.reactions);
  },
  'stats.storyStats': function(params) {
    this.int32(1355613820);
    this.predicate(params.views_graph);
    this.predicate(params.reactions_by_emotion_graph);
  },
  'publicForwardMessage': function(params) {
    this.int32(32685898);
    this.predicate(params.message);
  },
  'publicForwardStory': function(params) {
    this.int32(-302797360);
    this.predicate(params.peer);
    this.predicate(params.story);
  },
  'stats.publicForwards': function(params) {
    this.int32(-1828487648);
    const flags = (this.has(params.next_offset) << 0);
    this.int32(flags);
    this.int(params.count);
    this.vector(this.predicate, params.forwards);
    this.flag(this.string, params.next_offset);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'peerColor': function(params) {
    this.int32(-1253352753);
    const flags = (this.has(params.color) << 0) | (this.has(params.background_emoji_id) << 1);
    this.int32(flags);
    this.flag(this.int, params.color);
    this.flag(this.long, params.background_emoji_id);
  },
  'help.peerColorSet': function(params) {
    this.int32(639736408);
    this.vector(this.int, params.colors);
  },
  'help.peerColorProfileSet': function(params) {
    this.int32(1987928555);
    this.vector(this.int, params.palette_colors);
    this.vector(this.int, params.bg_colors);
    this.vector(this.int, params.story_colors);
  },
  'help.peerColorOption': function(params) {
    this.int32(-1377014082);
    const flags = (this.has(params.hidden) << 0) | (this.has(params.colors) << 1) | (this.has(params.dark_colors) << 2) | (this.has(params.channel_min_level) << 3) | (this.has(params.group_min_level) << 4);
    this.int32(flags);
    this.int(params.color_id);
    this.flag(this.predicate, params.colors);
    this.flag(this.predicate, params.dark_colors);
    this.flag(this.int, params.channel_min_level);
    this.flag(this.int, params.group_min_level);
  },
  'help.peerColorsNotModified': function(params) {
    this.int32(732034510);
  },
  'help.peerColors': function(params) {
    this.int32(16313608);
    this.int(params.hash);
    this.vector(this.predicate, params.colors);
  },
  'messageMediaGiveawayResults': function(params) {
    this.int32(-827703647);
    const flags = (this.has(params.only_new_subscribers) << 0) | (this.has(params.refunded) << 2) | (this.has(params.additional_peers_count) << 3) | (this.has(params.months) << 4) | (this.has(params.stars) << 5) | (this.has(params.prize_description) << 1);
    this.int32(flags);
    this.long(params.channel_id);
    this.flag(this.int, params.additional_peers_count);
    this.int(params.launch_msg_id);
    this.int(params.winners_count);
    this.int(params.unclaimed_count);
    this.vector(this.long, params.winners);
    this.flag(this.int, params.months);
    this.flag(this.long, params.stars);
    this.flag(this.string, params.prize_description);
    this.int(params.until_date);
  },
  'storyReaction': function(params) {
    this.int32(1620104917);
    this.predicate(params.peer_id);
    this.int(params.date);
    this.predicate(params.reaction);
  },
  'storyReactionPublicForward': function(params) {
    this.int32(-1146411453);
    this.predicate(params.message);
  },
  'storyReactionPublicRepost': function(params) {
    this.int32(-808644845);
    this.predicate(params.peer_id);
    this.predicate(params.story);
  },
  'stories.storyReactionsList': function(params) {
    this.int32(-1436583780);
    const flags = (this.has(params.next_offset) << 0);
    this.int32(flags);
    this.int(params.count);
    this.vector(this.predicate, params.reactions);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
    this.flag(this.string, params.next_offset);
  },
  'storyViewPublicForward': function(params) {
    this.int32(-1870436597);
    const flags = (this.has(params.blocked) << 0) | (this.has(params.blocked_my_stories_from) << 1);
    this.int32(flags);
    this.predicate(params.message);
  },
  'storyViewPublicRepost': function(params) {
    this.int32(-1116418231);
    const flags = (this.has(params.blocked) << 0) | (this.has(params.blocked_my_stories_from) << 1);
    this.int32(flags);
    this.predicate(params.peer_id);
    this.predicate(params.story);
  },
  'channelAdminLogEventActionChangePeerColor': function(params) {
    this.int32(1469507456);
    this.predicate(params.prev_value);
    this.predicate(params.new_value);
  },
  'channelAdminLogEventActionChangeProfilePeerColor': function(params) {
    this.int32(1581742885);
    this.predicate(params.prev_value);
    this.predicate(params.new_value);
  },
  'channelAdminLogEventActionChangeWallpaper': function(params) {
    this.int32(834362706);
    this.predicate(params.prev_value);
    this.predicate(params.new_value);
  },
  'channelAdminLogEventActionChangeEmojiStatus': function(params) {
    this.int32(1051328177);
    this.predicate(params.prev_value);
    this.predicate(params.new_value);
  },
  'inputStickerSetEmojiChannelDefaultStatuses': function(params) {
    this.int32(1232373075);
  },
  'mediaAreaChannelPost': function(params) {
    this.int32(1996756655);
    this.predicate(params.coordinates);
    this.long(params.channel_id);
    this.int(params.msg_id);
  },
  'inputMediaAreaChannelPost': function(params) {
    this.int32(577893055);
    this.predicate(params.coordinates);
    this.predicate(params.channel);
    this.int(params.msg_id);
  },
  'updateBotMessageReaction': function(params) {
    this.int32(-1407069234);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.int(params.date);
    this.predicate(params.actor);
    this.vector(this.predicate, params.old_reactions);
    this.vector(this.predicate, params.new_reactions);
    this.int(params.qts);
  },
  'updateBotMessageReactions': function(params) {
    this.int32(164329305);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.int(params.date);
    this.vector(this.predicate, params.reactions);
    this.int(params.qts);
  },
  'savedDialog': function(params) {
    this.int32(-1115174036);
    const flags = (this.has(params.pinned) << 2);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.top_message);
  },
  'updateSavedDialogPinned': function(params) {
    this.int32(-1364222348);
    const flags = (this.has(params.pinned) << 0);
    this.int32(flags);
    this.predicate(params.peer);
  },
  'updatePinnedSavedDialogs': function(params) {
    this.int32(1751942566);
    const flags = (this.has(params.order) << 0);
    this.int32(flags);
    this.flagVector(this.predicate, params.order);
  },
  'messages.savedDialogs': function(params) {
    this.int32(-130358751);
    this.vector(this.predicate, params.dialogs);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.savedDialogsSlice': function(params) {
    this.int32(1153080793);
    this.int(params.count);
    this.vector(this.predicate, params.dialogs);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.savedDialogsNotModified': function(params) {
    this.int32(-1071681560);
    this.int(params.count);
  },
  'savedReactionTag': function(params) {
    this.int32(-881854424);
    const flags = (this.has(params.title) << 0);
    this.int32(flags);
    this.predicate(params.reaction);
    this.flag(this.string, params.title);
    this.int(params.count);
  },
  'messages.savedReactionTagsNotModified': function(params) {
    this.int32(-2003084817);
  },
  'messages.savedReactionTags': function(params) {
    this.int32(844731658);
    this.vector(this.predicate, params.tags);
    this.long(params.hash);
  },
  'updateSavedReactionTags': function(params) {
    this.int32(969307186);
  },
  'outboxReadDate': function(params) {
    this.int32(1001931436);
    this.int(params.date);
  },
  'messageActionBoostApply': function(params) {
    this.int32(-872240531);
    this.int(params.boosts);
  },
  'channelAdminLogEventActionChangeEmojiStickerSet': function(params) {
    this.int32(1188577451);
    this.predicate(params.prev_stickerset);
    this.predicate(params.new_stickerset);
  },
  'smsjobs.eligibleToJoin': function(params) {
    this.int32(-594852657);
    this.string(params.terms_url);
    this.int(params.monthly_sent_sms);
  },
  'smsjobs.status': function(params) {
    this.int32(720277905);
    const flags = (this.has(params.allow_international) << 0) | (this.has(params.last_gift_slug) << 1);
    this.int32(flags);
    this.int(params.recent_sent);
    this.int(params.recent_since);
    this.int(params.recent_remains);
    this.int(params.total_sent);
    this.int(params.total_since);
    this.flag(this.string, params.last_gift_slug);
    this.string(params.terms_url);
  },
  'updateSmsJob': function(params) {
    this.int32(-245208620);
    this.string(params.job_id);
  },
  'smsJob': function(params) {
    this.int32(-425595208);
    this.string(params.job_id);
    this.string(params.phone_number);
    this.string(params.text);
  },
  'businessWeeklyOpen': function(params) {
    this.int32(302717625);
    this.int(params.start_minute);
    this.int(params.end_minute);
  },
  'businessWorkHours': function(params) {
    this.int32(-1936543592);
    const flags = (this.has(params.open_now) << 0);
    this.int32(flags);
    this.string(params.timezone_id);
    this.vector(this.predicate, params.weekly_open);
  },
  'businessLocation': function(params) {
    this.int32(-1403249929);
    const flags = (this.has(params.geo_point) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.geo_point);
    this.string(params.address);
  },
  'inputBusinessRecipients': function(params) {
    this.int32(1871393450);
    const flags = (this.has(params.existing_chats) << 0) | (this.has(params.new_chats) << 1) | (this.has(params.contacts) << 2) | (this.has(params.non_contacts) << 3) | (this.has(params.exclude_selected) << 5) | (this.has(params.users) << 4);
    this.int32(flags);
    this.flagVector(this.predicate, params.users);
  },
  'businessRecipients': function(params) {
    this.int32(554733559);
    const flags = (this.has(params.existing_chats) << 0) | (this.has(params.new_chats) << 1) | (this.has(params.contacts) << 2) | (this.has(params.non_contacts) << 3) | (this.has(params.exclude_selected) << 5) | (this.has(params.users) << 4);
    this.int32(flags);
    this.flagVector(this.long, params.users);
  },
  'businessAwayMessageScheduleAlways': function(params) {
    this.int32(-910564679);
  },
  'businessAwayMessageScheduleOutsideWorkHours': function(params) {
    this.int32(-1007487743);
  },
  'businessAwayMessageScheduleCustom': function(params) {
    this.int32(-867328308);
    this.int(params.start_date);
    this.int(params.end_date);
  },
  'inputBusinessGreetingMessage': function(params) {
    this.int32(26528571);
    this.int(params.shortcut_id);
    this.predicate(params.recipients);
    this.int(params.no_activity_days);
  },
  'businessGreetingMessage': function(params) {
    this.int32(-451302485);
    this.int(params.shortcut_id);
    this.predicate(params.recipients);
    this.int(params.no_activity_days);
  },
  'inputBusinessAwayMessage': function(params) {
    this.int32(-2094959136);
    const flags = (this.has(params.offline_only) << 0);
    this.int32(flags);
    this.int(params.shortcut_id);
    this.predicate(params.schedule);
    this.predicate(params.recipients);
  },
  'businessAwayMessage': function(params) {
    this.int32(-283809188);
    const flags = (this.has(params.offline_only) << 0);
    this.int32(flags);
    this.int(params.shortcut_id);
    this.predicate(params.schedule);
    this.predicate(params.recipients);
  },
  'timezone': function(params) {
    this.int32(-7173643);
    this.string(params.id);
    this.string(params.name);
    this.int(params.utc_offset);
  },
  'help.timezonesListNotModified': function(params) {
    this.int32(-1761146676);
  },
  'help.timezonesList': function(params) {
    this.int32(2071260529);
    this.vector(this.predicate, params.timezones);
    this.int(params.hash);
  },
  'quickReply': function(params) {
    this.int32(110563371);
    this.int(params.shortcut_id);
    this.string(params.shortcut);
    this.int(params.top_message);
    this.int(params.count);
  },
  'inputQuickReplyShortcut': function(params) {
    this.int32(609840449);
    this.string(params.shortcut);
  },
  'inputQuickReplyShortcutId': function(params) {
    this.int32(18418929);
    this.int(params.shortcut_id);
  },
  'messages.quickReplies': function(params) {
    this.int32(-963811691);
    this.vector(this.predicate, params.quick_replies);
    this.vector(this.predicate, params.messages);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'messages.quickRepliesNotModified': function(params) {
    this.int32(1603398491);
  },
  'updateQuickReplies': function(params) {
    this.int32(-112784718);
    this.vector(this.predicate, params.quick_replies);
  },
  'updateNewQuickReply': function(params) {
    this.int32(-180508905);
    this.predicate(params.quick_reply);
  },
  'updateDeleteQuickReply': function(params) {
    this.int32(1407644140);
    this.int(params.shortcut_id);
  },
  'updateQuickReplyMessage': function(params) {
    this.int32(1040518415);
    this.predicate(params.message);
  },
  'updateDeleteQuickReplyMessages': function(params) {
    this.int32(1450174413);
    this.int(params.shortcut_id);
    this.vector(this.int, params.messages);
  },
  'connectedBot': function(params) {
    this.int32(-1123645951);
    const flags = (this.has(params.can_reply) << 0);
    this.int32(flags);
    this.long(params.bot_id);
    this.predicate(params.recipients);
  },
  'account.connectedBots': function(params) {
    this.int32(400029819);
    this.vector(this.predicate, params.connected_bots);
    this.vector(this.predicate, params.users);
  },
  'messages.dialogFilters': function(params) {
    this.int32(718878489);
    const flags = (this.has(params.tags_enabled) << 0);
    this.int32(flags);
    this.vector(this.predicate, params.filters);
  },
  'birthday': function(params) {
    this.int32(1821253126);
    const flags = (this.has(params.year) << 0);
    this.int32(flags);
    this.int(params.day);
    this.int(params.month);
    this.flag(this.int, params.year);
  },
  'updateBotBusinessConnect': function(params) {
    this.int32(-1964652166);
    this.predicate(params.connection);
    this.int(params.qts);
  },
  'updateBotNewBusinessMessage': function(params) {
    this.int32(-1646578564);
    const flags = (this.has(params.reply_to_message) << 0);
    this.int32(flags);
    this.string(params.connection_id);
    this.predicate(params.message);
    this.flag(this.predicate, params.reply_to_message);
    this.int(params.qts);
  },
  'updateBotEditBusinessMessage': function(params) {
    this.int32(132077692);
    const flags = (this.has(params.reply_to_message) << 0);
    this.int32(flags);
    this.string(params.connection_id);
    this.predicate(params.message);
    this.flag(this.predicate, params.reply_to_message);
    this.int(params.qts);
  },
  'updateBotDeleteBusinessMessage': function(params) {
    this.int32(-1607821266);
    this.string(params.connection_id);
    this.predicate(params.peer);
    this.vector(this.int, params.messages);
    this.int(params.qts);
  },
  'botBusinessConnection': function(params) {
    this.int32(-1989921868);
    const flags = (this.has(params.can_reply) << 0) | (this.has(params.disabled) << 1);
    this.int32(flags);
    this.string(params.connection_id);
    this.long(params.user_id);
    this.int(params.dc_id);
    this.int(params.date);
  },
  'inputBusinessIntro': function(params) {
    this.int32(163867085);
    const flags = (this.has(params.sticker) << 0);
    this.int32(flags);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.sticker);
  },
  'businessIntro': function(params) {
    this.int32(1510606445);
    const flags = (this.has(params.sticker) << 0);
    this.int32(flags);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.sticker);
  },
  'messages.myStickers': function(params) {
    this.int32(-83926371);
    this.int(params.count);
    this.vector(this.predicate, params.sets);
  },
  'inputCollectibleUsername': function(params) {
    this.int32(-476815191);
    this.string(params.username);
  },
  'inputCollectiblePhone': function(params) {
    this.int32(-1562241884);
    this.string(params.phone);
  },
  'fragment.collectibleInfo': function(params) {
    this.int32(1857945489);
    this.int(params.purchase_date);
    this.string(params.currency);
    this.long(params.amount);
    this.string(params.crypto_currency);
    this.long(params.crypto_amount);
    this.string(params.url);
  },
  'inputBusinessBotRecipients': function(params) {
    this.int32(-991587810);
    const flags = (this.has(params.existing_chats) << 0) | (this.has(params.new_chats) << 1) | (this.has(params.contacts) << 2) | (this.has(params.non_contacts) << 3) | (this.has(params.exclude_selected) << 5) | (this.has(params.users) << 4) | (this.has(params.exclude_users) << 6);
    this.int32(flags);
    this.flagVector(this.predicate, params.users);
    this.flagVector(this.predicate, params.exclude_users);
  },
  'businessBotRecipients': function(params) {
    this.int32(-1198722189);
    const flags = (this.has(params.existing_chats) << 0) | (this.has(params.new_chats) << 1) | (this.has(params.contacts) << 2) | (this.has(params.non_contacts) << 3) | (this.has(params.exclude_selected) << 5) | (this.has(params.users) << 4) | (this.has(params.exclude_users) << 6);
    this.int32(flags);
    this.flagVector(this.long, params.users);
    this.flagVector(this.long, params.exclude_users);
  },
  'contactBirthday': function(params) {
    this.int32(496600883);
    this.long(params.contact_id);
    this.predicate(params.birthday);
  },
  'contacts.contactBirthdays': function(params) {
    this.int32(290452237);
    this.vector(this.predicate, params.contacts);
    this.vector(this.predicate, params.users);
  },
  'inputPrivacyKeyBirthday': function(params) {
    this.int32(-698740276);
  },
  'privacyKeyBirthday': function(params) {
    this.int32(536913176);
  },
  'inputPrivacyValueAllowPremium': function(params) {
    this.int32(2009975281);
  },
  'privacyValueAllowPremium': function(params) {
    this.int32(-320241333);
  },
  'missingInvitee': function(params) {
    this.int32(1653379620);
    const flags = (this.has(params.premium_would_allow_invite) << 0) | (this.has(params.premium_required_for_pm) << 1);
    this.int32(flags);
    this.long(params.user_id);
  },
  'messages.invitedUsers': function(params) {
    this.int32(2136862630);
    this.predicate(params.updates);
    this.vector(this.predicate, params.missing_invitees);
  },
  'inputBusinessChatLink': function(params) {
    this.int32(292003751);
    const flags = (this.has(params.entities) << 0) | (this.has(params.title) << 1);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.string, params.title);
  },
  'businessChatLink': function(params) {
    this.int32(-1263638929);
    const flags = (this.has(params.entities) << 0) | (this.has(params.title) << 1);
    this.int32(flags);
    this.string(params.link);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.string, params.title);
    this.int(params.views);
  },
  'account.businessChatLinks': function(params) {
    this.int32(-331111727);
    this.vector(this.predicate, params.links);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'account.resolvedBusinessChatLinks': function(params) {
    this.int32(-1708937439);
    const flags = (this.has(params.entities) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'requestedPeerUser': function(params) {
    this.int32(-701500310);
    const flags = (this.has(params.first_name) << 0) | (this.has(params.last_name) << 0) | (this.has(params.username) << 1) | (this.has(params.photo) << 2);
    this.int32(flags);
    this.long(params.user_id);
    this.flag(this.string, params.first_name);
    this.flag(this.string, params.last_name);
    this.flag(this.string, params.username);
    this.flag(this.predicate, params.photo);
  },
  'requestedPeerChat': function(params) {
    this.int32(1929860175);
    const flags = (this.has(params.title) << 0) | (this.has(params.photo) << 2);
    this.int32(flags);
    this.long(params.chat_id);
    this.flag(this.string, params.title);
    this.flag(this.predicate, params.photo);
  },
  'requestedPeerChannel': function(params) {
    this.int32(-1952185372);
    const flags = (this.has(params.title) << 0) | (this.has(params.username) << 1) | (this.has(params.photo) << 2);
    this.int32(flags);
    this.long(params.channel_id);
    this.flag(this.string, params.title);
    this.flag(this.string, params.username);
    this.flag(this.predicate, params.photo);
  },
  'messageActionRequestedPeerSentMe': function(params) {
    this.int32(-1816979384);
    this.int(params.button_id);
    this.vector(this.predicate, params.peers);
  },
  'inputKeyboardButtonRequestPeer': function(params) {
    this.int32(-916050683);
    const flags = (this.has(params.name_requested) << 0) | (this.has(params.username_requested) << 1) | (this.has(params.photo_requested) << 2);
    this.int32(flags);
    this.string(params.text);
    this.int(params.button_id);
    this.predicate(params.peer_type);
    this.int(params.max_quantity);
  },
  'sponsoredMessageReportOption': function(params) {
    this.int32(1124938064);
    this.string(params.text);
    this.bytes(params.option);
  },
  'channels.sponsoredMessageReportResultChooseOption': function(params) {
    this.int32(-2073059774);
    this.string(params.title);
    this.vector(this.predicate, params.options);
  },
  'channels.sponsoredMessageReportResultAdsHidden': function(params) {
    this.int32(1044107055);
  },
  'channels.sponsoredMessageReportResultReported': function(params) {
    this.int32(-1384544183);
  },
  'stats.broadcastRevenueStats': function(params) {
    this.int32(1409802903);
    this.predicate(params.top_hours_graph);
    this.predicate(params.revenue_graph);
    this.predicate(params.balances);
    this.double(params.usd_rate);
  },
  'stats.broadcastRevenueWithdrawalUrl': function(params) {
    this.int32(-328886473);
    this.string(params.url);
  },
  'broadcastRevenueTransactionProceeds': function(params) {
    this.int32(1434332356);
    this.long(params.amount);
    this.int(params.from_date);
    this.int(params.to_date);
  },
  'broadcastRevenueTransactionWithdrawal': function(params) {
    this.int32(1515784568);
    const flags = (this.has(params.pending) << 0) | (this.has(params.failed) << 2) | (this.has(params.transaction_date) << 1) | (this.has(params.transaction_url) << 1);
    this.int32(flags);
    this.long(params.amount);
    this.int(params.date);
    this.string(params.provider);
    this.flag(this.int, params.transaction_date);
    this.flag(this.string, params.transaction_url);
  },
  'broadcastRevenueTransactionRefund': function(params) {
    this.int32(1121127726);
    this.long(params.amount);
    this.int(params.date);
    this.string(params.provider);
  },
  'stats.broadcastRevenueTransactions': function(params) {
    this.int32(-2028632986);
    this.int(params.count);
    this.vector(this.predicate, params.transactions);
  },
  'webPageAttributeStickerSet': function(params) {
    this.int32(1355547603);
    const flags = (this.has(params.emojis) << 0) | (this.has(params.text_color) << 1);
    this.int32(flags);
    this.vector(this.predicate, params.stickers);
  },
  'reactionNotificationsFromContacts': function(params) {
    this.int32(-1161583078);
  },
  'reactionNotificationsFromAll': function(params) {
    this.int32(1268654752);
  },
  'reactionsNotifySettings': function(params) {
    this.int32(1457736048);
    const flags = (this.has(params.messages_notify_from) << 0) | (this.has(params.stories_notify_from) << 1);
    this.int32(flags);
    this.flag(this.predicate, params.messages_notify_from);
    this.flag(this.predicate, params.stories_notify_from);
    this.predicate(params.sound);
    this.Bool(params.show_previews);
  },
  'updateNewStoryReaction': function(params) {
    this.int32(405070859);
    this.int(params.story_id);
    this.predicate(params.peer);
    this.predicate(params.reaction);
  },
  'auth.sentCodeTypeSmsWord': function(params) {
    this.int32(-1542017919);
    const flags = (this.has(params.beginning) << 0);
    this.int32(flags);
    this.flag(this.string, params.beginning);
  },
  'auth.sentCodeTypeSmsPhrase': function(params) {
    this.int32(-1284008785);
    const flags = (this.has(params.beginning) << 0);
    this.int32(flags);
    this.flag(this.string, params.beginning);
  },
  'emojiGroupGreeting': function(params) {
    this.int32(-2133693241);
    this.string(params.title);
    this.long(params.icon_emoji_id);
    this.vector(this.string, params.emoticons);
  },
  'emojiGroupPremium': function(params) {
    this.int32(154914612);
    this.string(params.title);
    this.long(params.icon_emoji_id);
  },
  'broadcastRevenueBalances': function(params) {
    this.int32(-1006669337);
    const flags = (this.has(params.withdrawal_enabled) << 0);
    this.int32(flags);
    this.long(params.current_balance);
    this.long(params.available_balance);
    this.long(params.overall_revenue);
  },
  'updateBroadcastRevenueTransactions': function(params) {
    this.int32(-539401739);
    this.predicate(params.peer);
    this.predicate(params.balances);
  },
  'availableEffect': function(params) {
    this.int32(-1815879042);
    const flags = (this.has(params.premium_required) << 2) | (this.has(params.static_icon_id) << 0) | (this.has(params.effect_animation_id) << 1);
    this.int32(flags);
    this.long(params.id);
    this.string(params.emoticon);
    this.flag(this.long, params.static_icon_id);
    this.long(params.effect_sticker_id);
    this.flag(this.long, params.effect_animation_id);
  },
  'messages.availableEffectsNotModified': function(params) {
    this.int32(-772957605);
  },
  'messages.availableEffects': function(params) {
    this.int32(-1109696146);
    this.int(params.hash);
    this.vector(this.predicate, params.effects);
    this.vector(this.predicate, params.documents);
  },
  'factCheck': function(params) {
    this.int32(-1197736753);
    const flags = (this.has(params.need_check) << 0) | (this.has(params.country) << 1) | (this.has(params.text) << 1);
    this.int32(flags);
    this.flag(this.string, params.country);
    this.flag(this.predicate, params.text);
    this.long(params.hash);
  },
  'starsTransactionPeerUnsupported': function(params) {
    this.int32(-1779253276);
  },
  'starsTransactionPeerAppStore': function(params) {
    this.int32(-1269320843);
  },
  'starsTransactionPeerPlayMarket': function(params) {
    this.int32(2069236235);
  },
  'starsTransactionPeerPremiumBot': function(params) {
    this.int32(621656824);
  },
  'starsTransactionPeerFragment': function(params) {
    this.int32(-382740222);
  },
  'starsTransactionPeer': function(params) {
    this.int32(-670195363);
    this.predicate(params.peer);
  },
  'starsTopupOption': function(params) {
    this.int32(198776256);
    const flags = (this.has(params.extended) << 1) | (this.has(params.store_product) << 0);
    this.int32(flags);
    this.long(params.stars);
    this.flag(this.string, params.store_product);
    this.string(params.currency);
    this.long(params.amount);
  },
  'inputInvoiceStars': function(params) {
    this.int32(1710230755);
    this.predicate(params.purpose);
  },
  'starsTransaction': function(params) {
    this.int32(1692387622);
    const flags = (this.has(params.refund) << 3) | (this.has(params.pending) << 4) | (this.has(params.failed) << 6) | (this.has(params.gift) << 10) | (this.has(params.reaction) << 11) | (this.has(params.title) << 0) | (this.has(params.description) << 1) | (this.has(params.photo) << 2) | (this.has(params.transaction_date) << 5) | (this.has(params.transaction_url) << 5) | (this.has(params.bot_payload) << 7) | (this.has(params.msg_id) << 8) | (this.has(params.extended_media) << 9) | (this.has(params.subscription_period) << 12) | (this.has(params.giveaway_post_id) << 13) | (this.has(params.stargift) << 14) | (this.has(params.floodskip_number) << 15) | (this.has(params.starref_commission_permille) << 16) | (this.has(params.starref_peer) << 17) | (this.has(params.starref_amount) << 17);
    this.int32(flags);
    this.string(params.id);
    this.predicate(params.stars);
    this.int(params.date);
    this.predicate(params.peer);
    this.flag(this.string, params.title);
    this.flag(this.string, params.description);
    this.flag(this.predicate, params.photo);
    this.flag(this.int, params.transaction_date);
    this.flag(this.string, params.transaction_url);
    this.flag(this.bytes, params.bot_payload);
    this.flag(this.int, params.msg_id);
    this.flagVector(this.predicate, params.extended_media);
    this.flag(this.int, params.subscription_period);
    this.flag(this.int, params.giveaway_post_id);
    this.flag(this.predicate, params.stargift);
    this.flag(this.int, params.floodskip_number);
    this.flag(this.int, params.starref_commission_permille);
    this.flag(this.predicate, params.starref_peer);
    this.flag(this.predicate, params.starref_amount);
  },
  'payments.starsStatus': function(params) {
    this.int32(1822222573);
    const flags = (this.has(params.subscriptions) << 1) | (this.has(params.subscriptions_next_offset) << 2) | (this.has(params.subscriptions_missing_balance) << 4) | (this.has(params.history) << 3) | (this.has(params.next_offset) << 0);
    this.int32(flags);
    this.predicate(params.balance);
    this.flagVector(this.predicate, params.subscriptions);
    this.flag(this.string, params.subscriptions_next_offset);
    this.flag(this.long, params.subscriptions_missing_balance);
    this.flagVector(this.predicate, params.history);
    this.flag(this.string, params.next_offset);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'updateStarsBalance': function(params) {
    this.int32(1317053305);
    this.predicate(params.balance);
  },
  'payments.paymentFormStars': function(params) {
    this.int32(2079764828);
    const flags = (this.has(params.photo) << 5);
    this.int32(flags);
    this.long(params.form_id);
    this.long(params.bot_id);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.photo);
    this.predicate(params.invoice);
    this.vector(this.predicate, params.users);
  },
  'payments.paymentReceiptStars': function(params) {
    this.int32(-625215430);
    const flags = (this.has(params.photo) << 2);
    this.int32(flags);
    this.int(params.date);
    this.long(params.bot_id);
    this.string(params.title);
    this.string(params.description);
    this.flag(this.predicate, params.photo);
    this.predicate(params.invoice);
    this.string(params.currency);
    this.long(params.total_amount);
    this.string(params.transaction_id);
    this.vector(this.predicate, params.users);
  },
  'mediaAreaUrl': function(params) {
    this.int32(926421125);
    this.predicate(params.coordinates);
    this.string(params.url);
  },
  'foundStory': function(params) {
    this.int32(-394605632);
    this.predicate(params.peer);
    this.predicate(params.story);
  },
  'stories.foundStories': function(params) {
    this.int32(-488736969);
    const flags = (this.has(params.next_offset) << 0);
    this.int32(flags);
    this.int(params.count);
    this.vector(this.predicate, params.stories);
    this.flag(this.string, params.next_offset);
    this.vector(this.predicate, params.chats);
    this.vector(this.predicate, params.users);
  },
  'geoPointAddress': function(params) {
    this.int32(-565420653);
    const flags = (this.has(params.state) << 0) | (this.has(params.city) << 1) | (this.has(params.street) << 2);
    this.int32(flags);
    this.string(params.country_iso2);
    this.flag(this.string, params.state);
    this.flag(this.string, params.city);
    this.flag(this.string, params.street);
  },
  'updateBusinessBotCallbackQuery': function(params) {
    this.int32(513998247);
    const flags = (this.has(params.reply_to_message) << 2) | (this.has(params.data) << 0);
    this.int32(flags);
    this.long(params.query_id);
    this.long(params.user_id);
    this.string(params.connection_id);
    this.predicate(params.message);
    this.flag(this.predicate, params.reply_to_message);
    this.long(params.chat_instance);
    this.flag(this.bytes, params.data);
  },
  'starsRevenueStatus': function(params) {
    this.int32(-21080943);
    const flags = (this.has(params.withdrawal_enabled) << 0) | (this.has(params.next_withdrawal_at) << 1);
    this.int32(flags);
    this.predicate(params.current_balance);
    this.predicate(params.available_balance);
    this.predicate(params.overall_revenue);
    this.flag(this.int, params.next_withdrawal_at);
  },
  'payments.starsRevenueStats': function(params) {
    this.int32(-919881925);
    this.predicate(params.revenue_graph);
    this.predicate(params.status);
    this.double(params.usd_rate);
  },
  'payments.starsRevenueWithdrawalUrl': function(params) {
    this.int32(497778871);
    this.string(params.url);
  },
  'updateStarsRevenueStatus': function(params) {
    this.int32(-1518030823);
    this.predicate(params.peer);
    this.predicate(params.status);
  },
  'inputMediaPaidMedia': function(params) {
    this.int32(-1005571194);
    const flags = (this.has(params.payload) << 0);
    this.int32(flags);
    this.long(params.stars_amount);
    this.vector(this.predicate, params.extended_media);
    this.flag(this.string, params.payload);
  },
  'messageMediaPaidMedia': function(params) {
    this.int32(-1467669359);
    this.long(params.stars_amount);
    this.vector(this.predicate, params.extended_media);
  },
  'starsTransactionPeerAds': function(params) {
    this.int32(1617438738);
  },
  'payments.starsRevenueAdsAccountUrl': function(params) {
    this.int32(961445665);
    this.string(params.url);
  },
  'inputStarsTransaction': function(params) {
    this.int32(543876817);
    const flags = (this.has(params.refund) << 0);
    this.int32(flags);
    this.string(params.id);
  },
  'messageActionPaymentRefunded': function(params) {
    this.int32(1102307842);
    const flags = (this.has(params.payload) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.string(params.currency);
    this.long(params.total_amount);
    this.flag(this.bytes, params.payload);
    this.predicate(params.charge);
  },
  'inputStorePaymentStarsTopup': function(params) {
    this.int32(-572715178);
    this.long(params.stars);
    this.string(params.currency);
    this.long(params.amount);
  },
  'inputStorePaymentStarsGift': function(params) {
    this.int32(494149367);
    this.predicate(params.user_id);
    this.long(params.stars);
    this.string(params.currency);
    this.long(params.amount);
  },
  'starsGiftOption': function(params) {
    this.int32(1577421297);
    const flags = (this.has(params.extended) << 1) | (this.has(params.store_product) << 0);
    this.int32(flags);
    this.long(params.stars);
    this.flag(this.string, params.store_product);
    this.string(params.currency);
    this.long(params.amount);
  },
  'messageActionGiftStars': function(params) {
    this.int32(1171632161);
    const flags = (this.has(params.crypto_currency) << 0) | (this.has(params.crypto_amount) << 0) | (this.has(params.transaction_id) << 1);
    this.int32(flags);
    this.string(params.currency);
    this.long(params.amount);
    this.long(params.stars);
    this.flag(this.string, params.crypto_currency);
    this.flag(this.long, params.crypto_amount);
    this.flag(this.string, params.transaction_id);
  },
  'topPeerCategoryBotsApp': function(params) {
    this.int32(-39945236);
  },
  'bots.popularAppBots': function(params) {
    this.int32(428978491);
    const flags = (this.has(params.next_offset) << 0);
    this.int32(flags);
    this.flag(this.string, params.next_offset);
    this.vector(this.predicate, params.users);
  },
  'botPreviewMedia': function(params) {
    this.int32(602479523);
    this.int(params.date);
    this.predicate(params.media);
  },
  'bots.previewInfo': function(params) {
    this.int32(212278628);
    this.vector(this.predicate, params.media);
    this.vector(this.string, params.lang_codes);
  },
  'mediaAreaWeather': function(params) {
    this.int32(1235637404);
    this.predicate(params.coordinates);
    this.string(params.emoji);
    this.double(params.temperature_c);
    this.int(params.color);
  },
  'inputFileStoryDocument': function(params) {
    this.int32(1658620744);
    this.predicate(params.id);
  },
  'inputInvoiceChatInviteSubscription': function(params) {
    this.int32(887591921);
    this.string(params.hash);
  },
  'starsSubscriptionPricing': function(params) {
    this.int32(88173912);
    this.int(params.period);
    this.long(params.amount);
  },
  'starsSubscription': function(params) {
    this.int32(779004698);
    const flags = (this.has(params.canceled) << 0) | (this.has(params.can_refulfill) << 1) | (this.has(params.missing_balance) << 2) | (this.has(params.bot_canceled) << 7) | (this.has(params.chat_invite_hash) << 3) | (this.has(params.title) << 4) | (this.has(params.photo) << 5) | (this.has(params.invoice_slug) << 6);
    this.int32(flags);
    this.string(params.id);
    this.predicate(params.peer);
    this.int(params.until_date);
    this.predicate(params.pricing);
    this.flag(this.string, params.chat_invite_hash);
    this.flag(this.string, params.title);
    this.flag(this.predicate, params.photo);
    this.flag(this.string, params.invoice_slug);
  },
  'reactionPaid': function(params) {
    this.int32(1379771627);
  },
  'messageReactor': function(params) {
    this.int32(1269016922);
    const flags = (this.has(params.top) << 0) | (this.has(params.my) << 1) | (this.has(params.anonymous) << 2) | (this.has(params.peer_id) << 3);
    this.int32(flags);
    this.flag(this.predicate, params.peer_id);
    this.int(params.count);
  },
  'channelAdminLogEventActionToggleSignatureProfiles': function(params) {
    this.int32(1621597305);
    this.Bool(params.new_value);
  },
  'updateBotPurchasedPaidMedia': function(params) {
    this.int32(675009298);
    this.long(params.user_id);
    this.string(params.payload);
    this.int(params.qts);
  },
  'channelAdminLogEventActionParticipantSubExtend': function(params) {
    this.int32(1684286899);
    this.predicate(params.prev_participant);
    this.predicate(params.new_participant);
  },
  'inputStorePaymentStarsGiveaway': function(params) {
    this.int32(1964968186);
    const flags = (this.has(params.only_new_subscribers) << 0) | (this.has(params.winners_are_visible) << 3) | (this.has(params.additional_peers) << 1) | (this.has(params.countries_iso2) << 2) | (this.has(params.prize_description) << 4);
    this.int32(flags);
    this.long(params.stars);
    this.predicate(params.boost_peer);
    this.flagVector(this.predicate, params.additional_peers);
    this.flagVector(this.string, params.countries_iso2);
    this.flag(this.string, params.prize_description);
    this.long(params.random_id);
    this.int(params.until_date);
    this.string(params.currency);
    this.long(params.amount);
    this.int(params.users);
  },
  'messageActionPrizeStars': function(params) {
    this.int32(-1341372510);
    const flags = (this.has(params.unclaimed) << 0);
    this.int32(flags);
    this.long(params.stars);
    this.string(params.transaction_id);
    this.predicate(params.boost_peer);
    this.int(params.giveaway_msg_id);
  },
  'updatePaidReactionPrivacy': function(params) {
    this.int32(1372224236);
    this.Bool(params.private);
  },
  'starsGiveawayOption': function(params) {
    this.int32(-1798404822);
    const flags = (this.has(params.extended) << 0) | (this.has(params.default) << 1) | (this.has(params.store_product) << 2);
    this.int32(flags);
    this.long(params.stars);
    this.int(params.yearly_boosts);
    this.flag(this.string, params.store_product);
    this.string(params.currency);
    this.long(params.amount);
    this.vector(this.predicate, params.winners);
  },
  'starsGiveawayWinnersOption': function(params) {
    this.int32(1411605001);
    const flags = (this.has(params.default) << 0);
    this.int32(flags);
    this.int(params.users);
    this.long(params.per_user_stars);
  },
  'prepaidStarsGiveaway': function(params) {
    this.int32(-1700956192);
    this.long(params.id);
    this.long(params.stars);
    this.int(params.quantity);
    this.int(params.boosts);
    this.int(params.date);
  },
  'keyboardButtonCopy': function(params) {
    this.int32(1976723854);
    this.string(params.text);
    this.string(params.copy_text);
  },
  'starGift': function(params) {
    this.int32(1237678029);
    const flags = (this.has(params.limited) << 0) | (this.has(params.sold_out) << 1) | (this.has(params.birthday) << 2) | (this.has(params.availability_remains) << 0) | (this.has(params.availability_total) << 0) | (this.has(params.first_sale_date) << 1) | (this.has(params.last_sale_date) << 1);
    this.int32(flags);
    this.long(params.id);
    this.predicate(params.sticker);
    this.long(params.stars);
    this.flag(this.int, params.availability_remains);
    this.flag(this.int, params.availability_total);
    this.long(params.convert_stars);
    this.flag(this.int, params.first_sale_date);
    this.flag(this.int, params.last_sale_date);
  },
  'payments.starGiftsNotModified': function(params) {
    this.int32(-1551326360);
  },
  'payments.starGifts': function(params) {
    this.int32(-1877571094);
    this.int(params.hash);
    this.vector(this.predicate, params.gifts);
  },
  'inputInvoiceStarGift': function(params) {
    this.int32(634962392);
    const flags = (this.has(params.hide_name) << 0) | (this.has(params.message) << 1);
    this.int32(flags);
    this.predicate(params.user_id);
    this.long(params.gift_id);
    this.flag(this.predicate, params.message);
  },
  'payments.paymentFormStarGift': function(params) {
    this.int32(-1272590367);
    this.long(params.form_id);
    this.predicate(params.invoice);
  },
  'messageActionStarGift': function(params) {
    this.int32(139818551);
    const flags = (this.has(params.name_hidden) << 0) | (this.has(params.saved) << 2) | (this.has(params.converted) << 3) | (this.has(params.message) << 1) | (this.has(params.convert_stars) << 4);
    this.int32(flags);
    this.predicate(params.gift);
    this.flag(this.predicate, params.message);
    this.flag(this.long, params.convert_stars);
  },
  'userStarGift': function(params) {
    this.int32(-291202450);
    const flags = (this.has(params.name_hidden) << 0) | (this.has(params.unsaved) << 5) | (this.has(params.from_id) << 1) | (this.has(params.message) << 2) | (this.has(params.msg_id) << 3) | (this.has(params.convert_stars) << 4);
    this.int32(flags);
    this.flag(this.long, params.from_id);
    this.int(params.date);
    this.predicate(params.gift);
    this.flag(this.predicate, params.message);
    this.flag(this.int, params.msg_id);
    this.flag(this.long, params.convert_stars);
  },
  'payments.userStarGifts': function(params) {
    this.int32(1801827607);
    const flags = (this.has(params.next_offset) << 0);
    this.int32(flags);
    this.int(params.count);
    this.vector(this.predicate, params.gifts);
    this.flag(this.string, params.next_offset);
    this.vector(this.predicate, params.users);
  },
  'messageReportOption': function(params) {
    this.int32(2030298073);
    this.string(params.text);
    this.bytes(params.option);
  },
  'reportResultChooseOption': function(params) {
    this.int32(-253435722);
    this.string(params.title);
    this.vector(this.predicate, params.options);
  },
  'reportResultAddComment': function(params) {
    this.int32(1862904881);
    const flags = (this.has(params.optional) << 0);
    this.int32(flags);
    this.bytes(params.option);
  },
  'reportResultReported': function(params) {
    this.int32(-1917633461);
  },
  'starsTransactionPeerAPI': function(params) {
    this.int32(-110658899);
  },
  'messages.botPreparedInlineMessage': function(params) {
    this.int32(-1899035375);
    this.string(params.id);
    this.int(params.expire_date);
  },
  'messages.preparedInlineMessage': function(params) {
    this.int32(-11046771);
    this.long(params.query_id);
    this.predicate(params.result);
    this.vector(this.predicate, params.peer_types);
    this.int(params.cache_time);
    this.vector(this.predicate, params.users);
  },
  'botAppSettings': function(params) {
    this.int32(-912582320);
    const flags = (this.has(params.placeholder_path) << 0) | (this.has(params.background_color) << 1) | (this.has(params.background_dark_color) << 2) | (this.has(params.header_color) << 3) | (this.has(params.header_dark_color) << 4);
    this.int32(flags);
    this.flag(this.bytes, params.placeholder_path);
    this.flag(this.int, params.background_color);
    this.flag(this.int, params.background_dark_color);
    this.flag(this.int, params.header_color);
    this.flag(this.int, params.header_dark_color);
  },
  'inputPrivacyValueAllowBots': function(params) {
    this.int32(1515179237);
  },
  'inputPrivacyValueDisallowBots': function(params) {
    this.int32(-991594219);
  },
  'privacyValueAllowBots': function(params) {
    this.int32(558242653);
  },
  'privacyValueDisallowBots': function(params) {
    this.int32(-156895185);
  },
  'inputPrivacyKeyStarGiftsAutoSave': function(params) {
    this.int32(-512548031);
  },
  'privacyKeyStarGiftsAutoSave': function(params) {
    this.int32(749010424);
  },
  'starRefProgram': function(params) {
    this.int32(-586389774);
    const flags = (this.has(params.duration_months) << 0) | (this.has(params.end_date) << 1) | (this.has(params.daily_revenue_per_user) << 2);
    this.int32(flags);
    this.long(params.bot_id);
    this.int(params.commission_permille);
    this.flag(this.int, params.duration_months);
    this.flag(this.int, params.end_date);
    this.flag(this.predicate, params.daily_revenue_per_user);
  },
  'connectedBotStarRef': function(params) {
    this.int32(429997937);
    const flags = (this.has(params.revoked) << 1) | (this.has(params.duration_months) << 0);
    this.int32(flags);
    this.string(params.url);
    this.int(params.date);
    this.long(params.bot_id);
    this.int(params.commission_permille);
    this.flag(this.int, params.duration_months);
    this.long(params.participants);
    this.long(params.revenue);
  },
  'payments.connectedStarRefBots': function(params) {
    this.int32(-1730811363);
    this.int(params.count);
    this.vector(this.predicate, params.connected_bots);
    this.vector(this.predicate, params.users);
  },
  'payments.suggestedStarRefBots': function(params) {
    this.int32(-1261053863);
    const flags = (this.has(params.next_offset) << 0);
    this.int32(flags);
    this.int(params.count);
    this.vector(this.predicate, params.suggested_bots);
    this.vector(this.predicate, params.users);
    this.flag(this.string, params.next_offset);
  },
  'starsAmount': function(params) {
    this.int32(-1145654109);
    this.long(params.amount);
    this.int(params.nanos);
  },
  'messages.foundStickersNotModified': function(params) {
    this.int32(1611711796);
    const flags = (this.has(params.next_offset) << 0);
    this.int32(flags);
    this.flag(this.int, params.next_offset);
  },
  'messages.foundStickers': function(params) {
    this.int32(-2100698480);
    const flags = (this.has(params.next_offset) << 0);
    this.int32(flags);
    this.flag(this.int, params.next_offset);
    this.long(params.hash);
    this.vector(this.predicate, params.stickers);
  },
  'invokeAfterMsg': function(params) {
    this.int32(-878758099);
    this.long(params.msg_id);
    this.predicate(params.query);
  },
  'invokeAfterMsgs': function(params) {
    this.int32(1036301552);
    this.vector(this.long, params.msg_ids);
    this.predicate(params.query);
  },
  'auth.sendCode': function(params) {
    this.int32(-1502141361);
    this.string(params.phone_number);
    this.int(params.api_id);
    this.string(params.api_hash);
    this.predicate(params.settings);
  },
  'auth.signUp': function(params) {
    this.int32(-1429752041);
    const flags = (this.has(params.no_joined_notifications) << 0);
    this.int32(flags);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
    this.string(params.first_name);
    this.string(params.last_name);
  },
  'auth.signIn': function(params) {
    this.int32(-1923962543);
    const flags = (this.has(params.phone_code) << 0) | (this.has(params.email_verification) << 1);
    this.int32(flags);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
    this.flag(this.string, params.phone_code);
    this.flag(this.predicate, params.email_verification);
  },
  'auth.logOut': function(params) {
    this.int32(1047706137);
  },
  'auth.resetAuthorizations': function(params) {
    this.int32(-1616179942);
  },
  'auth.exportAuthorization': function(params) {
    this.int32(-440401971);
    this.int(params.dc_id);
  },
  'auth.importAuthorization': function(params) {
    this.int32(-1518699091);
    this.long(params.id);
    this.bytes(params.bytes);
  },
  'auth.bindTempAuthKey': function(params) {
    this.int32(-841733627);
    this.long(params.perm_auth_key_id);
    this.long(params.nonce);
    this.int(params.expires_at);
    this.bytes(params.encrypted_message);
  },
  'account.registerDevice': function(params) {
    this.int32(-326762118);
    const flags = (this.has(params.no_muted) << 0);
    this.int32(flags);
    this.int(params.token_type);
    this.string(params.token);
    this.Bool(params.app_sandbox);
    this.bytes(params.secret);
    this.vector(this.long, params.other_uids);
  },
  'account.unregisterDevice': function(params) {
    this.int32(1779249670);
    this.int(params.token_type);
    this.string(params.token);
    this.vector(this.long, params.other_uids);
  },
  'account.updateNotifySettings': function(params) {
    this.int32(-2067899501);
    this.predicate(params.peer);
    this.predicate(params.settings);
  },
  'account.getNotifySettings': function(params) {
    this.int32(313765169);
    this.predicate(params.peer);
  },
  'account.resetNotifySettings': function(params) {
    this.int32(-612493497);
  },
  'account.updateProfile': function(params) {
    this.int32(2018596725);
    const flags = (this.has(params.first_name) << 0) | (this.has(params.last_name) << 1) | (this.has(params.about) << 2);
    this.int32(flags);
    this.flag(this.string, params.first_name);
    this.flag(this.string, params.last_name);
    this.flag(this.string, params.about);
  },
  'account.updateStatus': function(params) {
    this.int32(1713919532);
    this.Bool(params.offline);
  },
  'account.getWallPapers': function(params) {
    this.int32(127302966);
    this.long(params.hash);
  },
  'account.reportPeer': function(params) {
    this.int32(-977650298);
    this.predicate(params.peer);
    this.predicate(params.reason);
    this.string(params.message);
  },
  'users.getUsers': function(params) {
    this.int32(227648840);
    this.vector(this.predicate, params.id);
  },
  'users.getFullUser': function(params) {
    this.int32(-1240508136);
    this.predicate(params.id);
  },
  'contacts.getContactIDs': function(params) {
    this.int32(2061264541);
    this.long(params.hash);
  },
  'contacts.getStatuses': function(params) {
    this.int32(-995929106);
  },
  'contacts.getContacts': function(params) {
    this.int32(1574346258);
    this.long(params.hash);
  },
  'contacts.importContacts': function(params) {
    this.int32(746589157);
    this.vector(this.predicate, params.contacts);
  },
  'contacts.deleteContacts': function(params) {
    this.int32(157945344);
    this.vector(this.predicate, params.id);
  },
  'contacts.deleteByPhones': function(params) {
    this.int32(269745566);
    this.vector(this.string, params.phones);
  },
  'contacts.block': function(params) {
    this.int32(774801204);
    const flags = (this.has(params.my_stories_from) << 0);
    this.int32(flags);
    this.predicate(params.id);
  },
  'contacts.unblock': function(params) {
    this.int32(-1252994264);
    const flags = (this.has(params.my_stories_from) << 0);
    this.int32(flags);
    this.predicate(params.id);
  },
  'contacts.getBlocked': function(params) {
    this.int32(-1702457472);
    const flags = (this.has(params.my_stories_from) << 0);
    this.int32(flags);
    this.int(params.offset);
    this.int(params.limit);
  },
  'messages.getMessages': function(params) {
    this.int32(1673946374);
    this.vector(this.predicate, params.id);
  },
  'messages.getDialogs': function(params) {
    this.int32(-1594569905);
    const flags = (this.has(params.exclude_pinned) << 0) | (this.has(params.folder_id) << 1);
    this.int32(flags);
    this.flag(this.int, params.folder_id);
    this.int(params.offset_date);
    this.int(params.offset_id);
    this.predicate(params.offset_peer);
    this.int(params.limit);
    this.long(params.hash);
  },
  'messages.getHistory': function(params) {
    this.int32(1143203525);
    this.predicate(params.peer);
    this.int(params.offset_id);
    this.int(params.offset_date);
    this.int(params.add_offset);
    this.int(params.limit);
    this.int(params.max_id);
    this.int(params.min_id);
    this.long(params.hash);
  },
  'messages.search': function(params) {
    this.int32(703497338);
    const flags = (this.has(params.from_id) << 0) | (this.has(params.saved_peer_id) << 2) | (this.has(params.saved_reaction) << 3) | (this.has(params.top_msg_id) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.string(params.q);
    this.flag(this.predicate, params.from_id);
    this.flag(this.predicate, params.saved_peer_id);
    this.flagVector(this.predicate, params.saved_reaction);
    this.flag(this.int, params.top_msg_id);
    this.predicate(params.filter);
    this.int(params.min_date);
    this.int(params.max_date);
    this.int(params.offset_id);
    this.int(params.add_offset);
    this.int(params.limit);
    this.int(params.max_id);
    this.int(params.min_id);
    this.long(params.hash);
  },
  'messages.readHistory': function(params) {
    this.int32(238054714);
    this.predicate(params.peer);
    this.int(params.max_id);
  },
  'messages.deleteHistory': function(params) {
    this.int32(-1332768214);
    const flags = (this.has(params.just_clear) << 0) | (this.has(params.revoke) << 1) | (this.has(params.min_date) << 2) | (this.has(params.max_date) << 3);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.max_id);
    this.flag(this.int, params.min_date);
    this.flag(this.int, params.max_date);
  },
  'messages.deleteMessages': function(params) {
    this.int32(-443640366);
    const flags = (this.has(params.revoke) << 0);
    this.int32(flags);
    this.vector(this.int, params.id);
  },
  'messages.receivedMessages': function(params) {
    this.int32(94983360);
    this.int(params.max_id);
  },
  'messages.setTyping': function(params) {
    this.int32(1486110434);
    const flags = (this.has(params.top_msg_id) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.top_msg_id);
    this.predicate(params.action);
  },
  'messages.sendMessage': function(params) {
    this.int32(-1740662971);
    const flags = (this.has(params.no_webpage) << 1) | (this.has(params.silent) << 5) | (this.has(params.background) << 6) | (this.has(params.clear_draft) << 7) | (this.has(params.noforwards) << 14) | (this.has(params.update_stickersets_order) << 15) | (this.has(params.invert_media) << 16) | (this.has(params.allow_paid_floodskip) << 19) | (this.has(params.reply_to) << 0) | (this.has(params.reply_markup) << 2) | (this.has(params.entities) << 3) | (this.has(params.schedule_date) << 10) | (this.has(params.send_as) << 13) | (this.has(params.quick_reply_shortcut) << 17) | (this.has(params.effect) << 18);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.predicate, params.reply_to);
    this.string(params.message);
    this.long(params.random_id);
    this.flag(this.predicate, params.reply_markup);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.int, params.schedule_date);
    this.flag(this.predicate, params.send_as);
    this.flag(this.predicate, params.quick_reply_shortcut);
    this.flag(this.long, params.effect);
  },
  'messages.sendMedia': function(params) {
    this.int32(2018673486);
    const flags = (this.has(params.silent) << 5) | (this.has(params.background) << 6) | (this.has(params.clear_draft) << 7) | (this.has(params.noforwards) << 14) | (this.has(params.update_stickersets_order) << 15) | (this.has(params.invert_media) << 16) | (this.has(params.allow_paid_floodskip) << 19) | (this.has(params.reply_to) << 0) | (this.has(params.reply_markup) << 2) | (this.has(params.entities) << 3) | (this.has(params.schedule_date) << 10) | (this.has(params.send_as) << 13) | (this.has(params.quick_reply_shortcut) << 17) | (this.has(params.effect) << 18);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.predicate, params.reply_to);
    this.predicate(params.media);
    this.string(params.message);
    this.long(params.random_id);
    this.flag(this.predicate, params.reply_markup);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.int, params.schedule_date);
    this.flag(this.predicate, params.send_as);
    this.flag(this.predicate, params.quick_reply_shortcut);
    this.flag(this.long, params.effect);
  },
  'messages.forwardMessages': function(params) {
    this.int32(-721186296);
    const flags = (this.has(params.silent) << 5) | (this.has(params.background) << 6) | (this.has(params.with_my_score) << 8) | (this.has(params.drop_author) << 11) | (this.has(params.drop_media_captions) << 12) | (this.has(params.noforwards) << 14) | (this.has(params.allow_paid_floodskip) << 19) | (this.has(params.top_msg_id) << 9) | (this.has(params.schedule_date) << 10) | (this.has(params.send_as) << 13) | (this.has(params.quick_reply_shortcut) << 17);
    this.int32(flags);
    this.predicate(params.from_peer);
    this.vector(this.int, params.id);
    this.vector(this.long, params.random_id);
    this.predicate(params.to_peer);
    this.flag(this.int, params.top_msg_id);
    this.flag(this.int, params.schedule_date);
    this.flag(this.predicate, params.send_as);
    this.flag(this.predicate, params.quick_reply_shortcut);
  },
  'messages.reportSpam': function(params) {
    this.int32(-820669733);
    this.predicate(params.peer);
  },
  'messages.getPeerSettings': function(params) {
    this.int32(-270948702);
    this.predicate(params.peer);
  },
  'messages.report': function(params) {
    this.int32(-59199589);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
    this.bytes(params.option);
    this.string(params.message);
  },
  'messages.getChats': function(params) {
    this.int32(1240027791);
    this.vector(this.long, params.id);
  },
  'messages.getFullChat': function(params) {
    this.int32(-1364194508);
    this.long(params.chat_id);
  },
  'messages.editChatTitle': function(params) {
    this.int32(1937260541);
    this.long(params.chat_id);
    this.string(params.title);
  },
  'messages.editChatPhoto': function(params) {
    this.int32(903730804);
    this.long(params.chat_id);
    this.predicate(params.photo);
  },
  'messages.addChatUser': function(params) {
    this.int32(-876162809);
    this.long(params.chat_id);
    this.predicate(params.user_id);
    this.int(params.fwd_limit);
  },
  'messages.deleteChatUser': function(params) {
    this.int32(-1575461717);
    const flags = (this.has(params.revoke_history) << 0);
    this.int32(flags);
    this.long(params.chat_id);
    this.predicate(params.user_id);
  },
  'messages.createChat': function(params) {
    this.int32(-1831936556);
    const flags = (this.has(params.ttl_period) << 0);
    this.int32(flags);
    this.vector(this.predicate, params.users);
    this.string(params.title);
    this.flag(this.int, params.ttl_period);
  },
  'updates.getState': function(params) {
    this.int32(-304838614);
  },
  'updates.getDifference': function(params) {
    this.int32(432207715);
    const flags = (this.has(params.pts_limit) << 1) | (this.has(params.pts_total_limit) << 0) | (this.has(params.qts_limit) << 2);
    this.int32(flags);
    this.int(params.pts);
    this.flag(this.int, params.pts_limit);
    this.flag(this.int, params.pts_total_limit);
    this.int(params.date);
    this.int(params.qts);
    this.flag(this.int, params.qts_limit);
  },
  'photos.updateProfilePhoto': function(params) {
    this.int32(166207545);
    const flags = (this.has(params.fallback) << 0) | (this.has(params.bot) << 1);
    this.int32(flags);
    this.flag(this.predicate, params.bot);
    this.predicate(params.id);
  },
  'photos.uploadProfilePhoto': function(params) {
    this.int32(59286453);
    const flags = (this.has(params.fallback) << 3) | (this.has(params.bot) << 5) | (this.has(params.file) << 0) | (this.has(params.video) << 1) | (this.has(params.video_start_ts) << 2) | (this.has(params.video_emoji_markup) << 4);
    this.int32(flags);
    this.flag(this.predicate, params.bot);
    this.flag(this.predicate, params.file);
    this.flag(this.predicate, params.video);
    this.flag(this.double, params.video_start_ts);
    this.flag(this.predicate, params.video_emoji_markup);
  },
  'photos.deletePhotos': function(params) {
    this.int32(-2016444625);
    this.vector(this.predicate, params.id);
  },
  'upload.saveFilePart': function(params) {
    this.int32(-1291540959);
    this.long(params.file_id);
    this.int(params.file_part);
    this.bytes(params.bytes);
  },
  'upload.getFile': function(params) {
    this.int32(-1101843010);
    const flags = (this.has(params.precise) << 0) | (this.has(params.cdn_supported) << 1);
    this.int32(flags);
    this.predicate(params.location);
    this.long(params.offset);
    this.int(params.limit);
  },
  'help.getConfig': function(params) {
    this.int32(-990308245);
  },
  'help.getNearestDc': function(params) {
    this.int32(531836966);
  },
  'help.getAppUpdate': function(params) {
    this.int32(1378703997);
    this.string(params.source);
  },
  'help.getInviteText': function(params) {
    this.int32(1295590211);
  },
  'photos.getUserPhotos': function(params) {
    this.int32(-1848823128);
    this.predicate(params.user_id);
    this.int(params.offset);
    this.long(params.max_id);
    this.int(params.limit);
  },
  'messages.getDhConfig': function(params) {
    this.int32(651135312);
    this.int(params.version);
    this.int(params.random_length);
  },
  'messages.requestEncryption': function(params) {
    this.int32(-162681021);
    this.predicate(params.user_id);
    this.int(params.random_id);
    this.bytes(params.g_a);
  },
  'messages.acceptEncryption': function(params) {
    this.int32(1035731989);
    this.predicate(params.peer);
    this.bytes(params.g_b);
    this.long(params.key_fingerprint);
  },
  'messages.discardEncryption': function(params) {
    this.int32(-208425312);
    const flags = (this.has(params.delete_history) << 0);
    this.int32(flags);
    this.int(params.chat_id);
  },
  'messages.setEncryptedTyping': function(params) {
    this.int32(2031374829);
    this.predicate(params.peer);
    this.Bool(params.typing);
  },
  'messages.readEncryptedHistory': function(params) {
    this.int32(2135648522);
    this.predicate(params.peer);
    this.int(params.max_date);
  },
  'messages.sendEncrypted': function(params) {
    this.int32(1157265941);
    const flags = (this.has(params.silent) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.long(params.random_id);
    this.bytes(params.data);
  },
  'messages.sendEncryptedFile': function(params) {
    this.int32(1431914525);
    const flags = (this.has(params.silent) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.long(params.random_id);
    this.bytes(params.data);
    this.predicate(params.file);
  },
  'messages.sendEncryptedService': function(params) {
    this.int32(852769188);
    this.predicate(params.peer);
    this.long(params.random_id);
    this.bytes(params.data);
  },
  'messages.receivedQueue': function(params) {
    this.int32(1436924774);
    this.int(params.max_qts);
  },
  'messages.reportEncryptedSpam': function(params) {
    this.int32(1259113487);
    this.predicate(params.peer);
  },
  'upload.saveBigFilePart': function(params) {
    this.int32(-562337987);
    this.long(params.file_id);
    this.int(params.file_part);
    this.int(params.file_total_parts);
    this.bytes(params.bytes);
  },
  'initConnection': function(params) {
    this.int32(-1043505495);
    const flags = (this.has(params.proxy) << 0) | (this.has(params.params) << 1);
    this.int32(flags);
    this.int(params.api_id);
    this.string(params.device_model);
    this.string(params.system_version);
    this.string(params.app_version);
    this.string(params.system_lang_code);
    this.string(params.lang_pack);
    this.string(params.lang_code);
    this.flag(this.predicate, params.proxy);
    this.flag(this.predicate, params.params);
    this.predicate(params.query);
  },
  'help.getSupport': function(params) {
    this.int32(-1663104819);
  },
  'messages.readMessageContents': function(params) {
    this.int32(916930423);
    this.vector(this.int, params.id);
  },
  'account.checkUsername': function(params) {
    this.int32(655677548);
    this.string(params.username);
  },
  'account.updateUsername': function(params) {
    this.int32(1040964988);
    this.string(params.username);
  },
  'contacts.search': function(params) {
    this.int32(301470424);
    this.string(params.q);
    this.int(params.limit);
  },
  'account.getPrivacy': function(params) {
    this.int32(-623130288);
    this.predicate(params.key);
  },
  'account.setPrivacy': function(params) {
    this.int32(-906486552);
    this.predicate(params.key);
    this.vector(this.predicate, params.rules);
  },
  'account.deleteAccount': function(params) {
    this.int32(-1564422284);
    const flags = (this.has(params.password) << 0);
    this.int32(flags);
    this.string(params.reason);
    this.flag(this.predicate, params.password);
  },
  'account.getAccountTTL': function(params) {
    this.int32(150761757);
  },
  'account.setAccountTTL': function(params) {
    this.int32(608323678);
    this.predicate(params.ttl);
  },
  'invokeWithLayer': function(params) {
    this.int32(-627372787);
    this.int(params.layer);
    this.predicate(params.query);
  },
  'contacts.resolveUsername': function(params) {
    this.int32(1918565308);
    const flags = (this.has(params.referer) << 0);
    this.int32(flags);
    this.string(params.username);
    this.flag(this.string, params.referer);
  },
  'account.sendChangePhoneCode': function(params) {
    this.int32(-2108208411);
    this.string(params.phone_number);
    this.predicate(params.settings);
  },
  'account.changePhone': function(params) {
    this.int32(1891839707);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
    this.string(params.phone_code);
  },
  'messages.getStickers': function(params) {
    this.int32(-710552671);
    this.string(params.emoticon);
    this.long(params.hash);
  },
  'messages.getAllStickers': function(params) {
    this.int32(-1197432408);
    this.long(params.hash);
  },
  'account.updateDeviceLocked': function(params) {
    this.int32(954152242);
    this.int(params.period);
  },
  'auth.importBotAuthorization': function(params) {
    this.int32(1738800940);
    this.int(params.flags);
    this.int(params.api_id);
    this.string(params.api_hash);
    this.string(params.bot_auth_token);
  },
  'messages.getWebPagePreview': function(params) {
    this.int32(-1956073268);
    const flags = (this.has(params.entities) << 3);
    this.int32(flags);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
  },
  'account.getAuthorizations': function(params) {
    this.int32(-484392616);
  },
  'account.resetAuthorization': function(params) {
    this.int32(-545786948);
    this.long(params.hash);
  },
  'account.getPassword': function(params) {
    this.int32(1418342645);
  },
  'account.getPasswordSettings': function(params) {
    this.int32(-1663767815);
    this.predicate(params.password);
  },
  'account.updatePasswordSettings': function(params) {
    this.int32(-1516564433);
    this.predicate(params.password);
    this.predicate(params.new_settings);
  },
  'auth.checkPassword': function(params) {
    this.int32(-779399914);
    this.predicate(params.password);
  },
  'auth.requestPasswordRecovery': function(params) {
    this.int32(-661144474);
  },
  'auth.recoverPassword': function(params) {
    this.int32(923364464);
    const flags = (this.has(params.new_settings) << 0);
    this.int32(flags);
    this.string(params.code);
    this.flag(this.predicate, params.new_settings);
  },
  'invokeWithoutUpdates': function(params) {
    this.int32(-1080796745);
    this.predicate(params.query);
  },
  'messages.exportChatInvite': function(params) {
    this.int32(-1537876336);
    const flags = (this.has(params.legacy_revoke_permanent) << 2) | (this.has(params.request_needed) << 3) | (this.has(params.expire_date) << 0) | (this.has(params.usage_limit) << 1) | (this.has(params.title) << 4) | (this.has(params.subscription_pricing) << 5);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.expire_date);
    this.flag(this.int, params.usage_limit);
    this.flag(this.string, params.title);
    this.flag(this.predicate, params.subscription_pricing);
  },
  'messages.checkChatInvite': function(params) {
    this.int32(1051570619);
    this.string(params.hash);
  },
  'messages.importChatInvite': function(params) {
    this.int32(1817183516);
    this.string(params.hash);
  },
  'messages.getStickerSet': function(params) {
    this.int32(-928977804);
    this.predicate(params.stickerset);
    this.int(params.hash);
  },
  'messages.installStickerSet': function(params) {
    this.int32(-946871200);
    this.predicate(params.stickerset);
    this.Bool(params.archived);
  },
  'messages.uninstallStickerSet': function(params) {
    this.int32(-110209570);
    this.predicate(params.stickerset);
  },
  'messages.startBot': function(params) {
    this.int32(-421563528);
    this.predicate(params.bot);
    this.predicate(params.peer);
    this.long(params.random_id);
    this.string(params.start_param);
  },
  'messages.getMessagesViews': function(params) {
    this.int32(1468322785);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
    this.Bool(params.increment);
  },
  'channels.readHistory': function(params) {
    this.int32(-871347913);
    this.predicate(params.channel);
    this.int(params.max_id);
  },
  'channels.deleteMessages': function(params) {
    this.int32(-2067661490);
    this.predicate(params.channel);
    this.vector(this.int, params.id);
  },
  'channels.reportSpam': function(params) {
    this.int32(-196443371);
    this.predicate(params.channel);
    this.predicate(params.participant);
    this.vector(this.int, params.id);
  },
  'channels.getMessages': function(params) {
    this.int32(-1383294429);
    this.predicate(params.channel);
    this.vector(this.predicate, params.id);
  },
  'channels.getParticipants': function(params) {
    this.int32(2010044880);
    this.predicate(params.channel);
    this.predicate(params.filter);
    this.int(params.offset);
    this.int(params.limit);
    this.long(params.hash);
  },
  'channels.getParticipant': function(params) {
    this.int32(-1599378234);
    this.predicate(params.channel);
    this.predicate(params.participant);
  },
  'channels.getChannels': function(params) {
    this.int32(176122811);
    this.vector(this.predicate, params.id);
  },
  'channels.getFullChannel': function(params) {
    this.int32(141781513);
    this.predicate(params.channel);
  },
  'channels.createChannel': function(params) {
    this.int32(-1862244601);
    const flags = (this.has(params.broadcast) << 0) | (this.has(params.megagroup) << 1) | (this.has(params.for_import) << 3) | (this.has(params.forum) << 5) | (this.has(params.geo_point) << 2) | (this.has(params.address) << 2) | (this.has(params.ttl_period) << 4);
    this.int32(flags);
    this.string(params.title);
    this.string(params.about);
    this.flag(this.predicate, params.geo_point);
    this.flag(this.string, params.address);
    this.flag(this.int, params.ttl_period);
  },
  'channels.editAdmin': function(params) {
    this.int32(-751007486);
    this.predicate(params.channel);
    this.predicate(params.user_id);
    this.predicate(params.admin_rights);
    this.string(params.rank);
  },
  'channels.editTitle': function(params) {
    this.int32(1450044624);
    this.predicate(params.channel);
    this.string(params.title);
  },
  'channels.editPhoto': function(params) {
    this.int32(-248621111);
    this.predicate(params.channel);
    this.predicate(params.photo);
  },
  'channels.checkUsername': function(params) {
    this.int32(283557164);
    this.predicate(params.channel);
    this.string(params.username);
  },
  'channels.updateUsername': function(params) {
    this.int32(890549214);
    this.predicate(params.channel);
    this.string(params.username);
  },
  'channels.joinChannel': function(params) {
    this.int32(615851205);
    this.predicate(params.channel);
  },
  'channels.leaveChannel': function(params) {
    this.int32(-130635115);
    this.predicate(params.channel);
  },
  'channels.inviteToChannel': function(params) {
    this.int32(-907854508);
    this.predicate(params.channel);
    this.vector(this.predicate, params.users);
  },
  'channels.deleteChannel': function(params) {
    this.int32(-1072619549);
    this.predicate(params.channel);
  },
  'updates.getChannelDifference': function(params) {
    this.int32(51854712);
    const flags = (this.has(params.force) << 0);
    this.int32(flags);
    this.predicate(params.channel);
    this.predicate(params.filter);
    this.int(params.pts);
    this.int(params.limit);
  },
  'messages.editChatAdmin': function(params) {
    this.int32(-1470377534);
    this.long(params.chat_id);
    this.predicate(params.user_id);
    this.Bool(params.is_admin);
  },
  'messages.migrateChat': function(params) {
    this.int32(-1568189671);
    this.long(params.chat_id);
  },
  'messages.searchGlobal': function(params) {
    this.int32(1271290010);
    const flags = (this.has(params.broadcasts_only) << 1) | (this.has(params.groups_only) << 2) | (this.has(params.users_only) << 3) | (this.has(params.folder_id) << 0);
    this.int32(flags);
    this.flag(this.int, params.folder_id);
    this.string(params.q);
    this.predicate(params.filter);
    this.int(params.min_date);
    this.int(params.max_date);
    this.int(params.offset_rate);
    this.predicate(params.offset_peer);
    this.int(params.offset_id);
    this.int(params.limit);
  },
  'messages.reorderStickerSets': function(params) {
    this.int32(2016638777);
    const flags = (this.has(params.masks) << 0) | (this.has(params.emojis) << 1);
    this.int32(flags);
    this.vector(this.long, params.order);
  },
  'messages.getDocumentByHash': function(params) {
    this.int32(-1309538785);
    this.bytes(params.sha256);
    this.long(params.size);
    this.string(params.mime_type);
  },
  'messages.getSavedGifs': function(params) {
    this.int32(1559270965);
    this.long(params.hash);
  },
  'messages.saveGif': function(params) {
    this.int32(846868683);
    this.predicate(params.id);
    this.Bool(params.unsave);
  },
  'messages.getInlineBotResults': function(params) {
    this.int32(1364105629);
    const flags = (this.has(params.geo_point) << 0);
    this.int32(flags);
    this.predicate(params.bot);
    this.predicate(params.peer);
    this.flag(this.predicate, params.geo_point);
    this.string(params.query);
    this.string(params.offset);
  },
  'messages.setInlineBotResults': function(params) {
    this.int32(-1156406247);
    const flags = (this.has(params.gallery) << 0) | (this.has(params.private) << 1) | (this.has(params.next_offset) << 2) | (this.has(params.switch_pm) << 3) | (this.has(params.switch_webview) << 4);
    this.int32(flags);
    this.long(params.query_id);
    this.vector(this.predicate, params.results);
    this.int(params.cache_time);
    this.flag(this.string, params.next_offset);
    this.flag(this.predicate, params.switch_pm);
    this.flag(this.predicate, params.switch_webview);
  },
  'messages.sendInlineBotResult': function(params) {
    this.int32(1052698730);
    const flags = (this.has(params.silent) << 5) | (this.has(params.background) << 6) | (this.has(params.clear_draft) << 7) | (this.has(params.hide_via) << 11) | (this.has(params.reply_to) << 0) | (this.has(params.schedule_date) << 10) | (this.has(params.send_as) << 13) | (this.has(params.quick_reply_shortcut) << 17);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.predicate, params.reply_to);
    this.long(params.random_id);
    this.long(params.query_id);
    this.string(params.id);
    this.flag(this.int, params.schedule_date);
    this.flag(this.predicate, params.send_as);
    this.flag(this.predicate, params.quick_reply_shortcut);
  },
  'channels.exportMessageLink': function(params) {
    this.int32(-432034325);
    const flags = (this.has(params.grouped) << 0) | (this.has(params.thread) << 1);
    this.int32(flags);
    this.predicate(params.channel);
    this.int(params.id);
  },
  'channels.toggleSignatures': function(params) {
    this.int32(1099781276);
    const flags = (this.has(params.signatures_enabled) << 0) | (this.has(params.profiles_enabled) << 1);
    this.int32(flags);
    this.predicate(params.channel);
  },
  'auth.resendCode': function(params) {
    this.int32(-890997469);
    const flags = (this.has(params.reason) << 0);
    this.int32(flags);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
    this.flag(this.string, params.reason);
  },
  'auth.cancelCode': function(params) {
    this.int32(520357240);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
  },
  'messages.getMessageEditData': function(params) {
    this.int32(-39416522);
    this.predicate(params.peer);
    this.int(params.id);
  },
  'messages.editMessage': function(params) {
    this.int32(-539934715);
    const flags = (this.has(params.no_webpage) << 1) | (this.has(params.invert_media) << 16) | (this.has(params.message) << 11) | (this.has(params.media) << 14) | (this.has(params.reply_markup) << 2) | (this.has(params.entities) << 3) | (this.has(params.schedule_date) << 15) | (this.has(params.quick_reply_shortcut_id) << 17);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.id);
    this.flag(this.string, params.message);
    this.flag(this.predicate, params.media);
    this.flag(this.predicate, params.reply_markup);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.int, params.schedule_date);
    this.flag(this.int, params.quick_reply_shortcut_id);
  },
  'messages.editInlineBotMessage': function(params) {
    this.int32(-2091549254);
    const flags = (this.has(params.no_webpage) << 1) | (this.has(params.invert_media) << 16) | (this.has(params.message) << 11) | (this.has(params.media) << 14) | (this.has(params.reply_markup) << 2) | (this.has(params.entities) << 3);
    this.int32(flags);
    this.predicate(params.id);
    this.flag(this.string, params.message);
    this.flag(this.predicate, params.media);
    this.flag(this.predicate, params.reply_markup);
    this.flagVector(this.predicate, params.entities);
  },
  'messages.getBotCallbackAnswer': function(params) {
    this.int32(-1824339449);
    const flags = (this.has(params.game) << 1) | (this.has(params.data) << 0) | (this.has(params.password) << 2);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.flag(this.bytes, params.data);
    this.flag(this.predicate, params.password);
  },
  'messages.setBotCallbackAnswer': function(params) {
    this.int32(-712043766);
    const flags = (this.has(params.alert) << 1) | (this.has(params.message) << 0) | (this.has(params.url) << 2);
    this.int32(flags);
    this.long(params.query_id);
    this.flag(this.string, params.message);
    this.flag(this.string, params.url);
    this.int(params.cache_time);
  },
  'contacts.getTopPeers': function(params) {
    this.int32(-1758168906);
    const flags = (this.has(params.correspondents) << 0) | (this.has(params.bots_pm) << 1) | (this.has(params.bots_inline) << 2) | (this.has(params.phone_calls) << 3) | (this.has(params.forward_users) << 4) | (this.has(params.forward_chats) << 5) | (this.has(params.groups) << 10) | (this.has(params.channels) << 15) | (this.has(params.bots_app) << 16);
    this.int32(flags);
    this.int(params.offset);
    this.int(params.limit);
    this.long(params.hash);
  },
  'contacts.resetTopPeerRating': function(params) {
    this.int32(451113900);
    this.predicate(params.category);
    this.predicate(params.peer);
  },
  'messages.getPeerDialogs': function(params) {
    this.int32(-462373635);
    this.vector(this.predicate, params.peers);
  },
  'messages.saveDraft': function(params) {
    this.int32(-747452978);
    const flags = (this.has(params.no_webpage) << 1) | (this.has(params.invert_media) << 6) | (this.has(params.reply_to) << 4) | (this.has(params.entities) << 3) | (this.has(params.media) << 5) | (this.has(params.effect) << 7);
    this.int32(flags);
    this.flag(this.predicate, params.reply_to);
    this.predicate(params.peer);
    this.string(params.message);
    this.flagVector(this.predicate, params.entities);
    this.flag(this.predicate, params.media);
    this.flag(this.long, params.effect);
  },
  'messages.getAllDrafts': function(params) {
    this.int32(1782549861);
  },
  'messages.getFeaturedStickers': function(params) {
    this.int32(1685588756);
    this.long(params.hash);
  },
  'messages.readFeaturedStickers': function(params) {
    this.int32(1527873830);
    this.vector(this.long, params.id);
  },
  'messages.getRecentStickers': function(params) {
    this.int32(-1649852357);
    const flags = (this.has(params.attached) << 0);
    this.int32(flags);
    this.long(params.hash);
  },
  'messages.saveRecentSticker': function(params) {
    this.int32(958863608);
    const flags = (this.has(params.attached) << 0);
    this.int32(flags);
    this.predicate(params.id);
    this.Bool(params.unsave);
  },
  'messages.clearRecentStickers': function(params) {
    this.int32(-1986437075);
    const flags = (this.has(params.attached) << 0);
    this.int32(flags);
  },
  'messages.getArchivedStickers': function(params) {
    this.int32(1475442322);
    const flags = (this.has(params.masks) << 0) | (this.has(params.emojis) << 1);
    this.int32(flags);
    this.long(params.offset_id);
    this.int(params.limit);
  },
  'account.sendConfirmPhoneCode': function(params) {
    this.int32(457157256);
    this.string(params.hash);
    this.predicate(params.settings);
  },
  'account.confirmPhone': function(params) {
    this.int32(1596029123);
    this.string(params.phone_code_hash);
    this.string(params.phone_code);
  },
  'channels.getAdminedPublicChannels': function(params) {
    this.int32(-122669393);
    const flags = (this.has(params.by_location) << 0) | (this.has(params.check_limit) << 1) | (this.has(params.for_personal) << 2);
    this.int32(flags);
  },
  'messages.getMaskStickers': function(params) {
    this.int32(1678738104);
    this.long(params.hash);
  },
  'messages.getAttachedStickers': function(params) {
    this.int32(-866424884);
    this.predicate(params.media);
  },
  'auth.dropTempAuthKeys': function(params) {
    this.int32(-1907842680);
    this.vector(this.long, params.except_auth_keys);
  },
  'messages.setGameScore': function(params) {
    this.int32(-1896289088);
    const flags = (this.has(params.edit_message) << 0) | (this.has(params.force) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.id);
    this.predicate(params.user_id);
    this.int(params.score);
  },
  'messages.setInlineGameScore': function(params) {
    this.int32(363700068);
    const flags = (this.has(params.edit_message) << 0) | (this.has(params.force) << 1);
    this.int32(flags);
    this.predicate(params.id);
    this.predicate(params.user_id);
    this.int(params.score);
  },
  'messages.getGameHighScores': function(params) {
    this.int32(-400399203);
    this.predicate(params.peer);
    this.int(params.id);
    this.predicate(params.user_id);
  },
  'messages.getInlineGameHighScores': function(params) {
    this.int32(258170395);
    this.predicate(params.id);
    this.predicate(params.user_id);
  },
  'messages.getCommonChats': function(params) {
    this.int32(-468934396);
    this.predicate(params.user_id);
    this.long(params.max_id);
    this.int(params.limit);
  },
  'help.setBotUpdatesStatus': function(params) {
    this.int32(-333262899);
    this.int(params.pending_updates_count);
    this.string(params.message);
  },
  'messages.getWebPage': function(params) {
    this.int32(-1919511901);
    this.string(params.url);
    this.int(params.hash);
  },
  'messages.toggleDialogPin': function(params) {
    this.int32(-1489903017);
    const flags = (this.has(params.pinned) << 0);
    this.int32(flags);
    this.predicate(params.peer);
  },
  'messages.reorderPinnedDialogs': function(params) {
    this.int32(991616823);
    const flags = (this.has(params.force) << 0);
    this.int32(flags);
    this.int(params.folder_id);
    this.vector(this.predicate, params.order);
  },
  'messages.getPinnedDialogs': function(params) {
    this.int32(-692498958);
    this.int(params.folder_id);
  },
  'bots.sendCustomRequest': function(params) {
    this.int32(-1440257555);
    this.string(params.custom_method);
    this.predicate(params.params);
  },
  'bots.answerWebhookJSONQuery': function(params) {
    this.int32(-434028723);
    this.long(params.query_id);
    this.predicate(params.data);
  },
  'upload.getWebFile': function(params) {
    this.int32(619086221);
    this.predicate(params.location);
    this.int(params.offset);
    this.int(params.limit);
  },
  'payments.getPaymentForm': function(params) {
    this.int32(924093883);
    const flags = (this.has(params.theme_params) << 0);
    this.int32(flags);
    this.predicate(params.invoice);
    this.flag(this.predicate, params.theme_params);
  },
  'payments.getPaymentReceipt': function(params) {
    this.int32(611897804);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'payments.validateRequestedInfo': function(params) {
    this.int32(-1228345045);
    const flags = (this.has(params.save) << 0);
    this.int32(flags);
    this.predicate(params.invoice);
    this.predicate(params.info);
  },
  'payments.sendPaymentForm': function(params) {
    this.int32(755192367);
    const flags = (this.has(params.requested_info_id) << 0) | (this.has(params.shipping_option_id) << 1) | (this.has(params.tip_amount) << 2);
    this.int32(flags);
    this.long(params.form_id);
    this.predicate(params.invoice);
    this.flag(this.string, params.requested_info_id);
    this.flag(this.string, params.shipping_option_id);
    this.predicate(params.credentials);
    this.flag(this.long, params.tip_amount);
  },
  'account.getTmpPassword': function(params) {
    this.int32(1151208273);
    this.predicate(params.password);
    this.int(params.period);
  },
  'payments.getSavedInfo': function(params) {
    this.int32(578650699);
  },
  'payments.clearSavedInfo': function(params) {
    this.int32(-667062079);
    const flags = (this.has(params.credentials) << 0) | (this.has(params.info) << 1);
    this.int32(flags);
  },
  'messages.setBotShippingResults': function(params) {
    this.int32(-436833542);
    const flags = (this.has(params.error) << 0) | (this.has(params.shipping_options) << 1);
    this.int32(flags);
    this.long(params.query_id);
    this.flag(this.string, params.error);
    this.flagVector(this.predicate, params.shipping_options);
  },
  'messages.setBotPrecheckoutResults': function(params) {
    this.int32(163765653);
    const flags = (this.has(params.success) << 1) | (this.has(params.error) << 0);
    this.int32(flags);
    this.long(params.query_id);
    this.flag(this.string, params.error);
  },
  'stickers.createStickerSet': function(params) {
    this.int32(-1876841625);
    const flags = (this.has(params.masks) << 0) | (this.has(params.emojis) << 5) | (this.has(params.text_color) << 6) | (this.has(params.thumb) << 2) | (this.has(params.software) << 3);
    this.int32(flags);
    this.predicate(params.user_id);
    this.string(params.title);
    this.string(params.short_name);
    this.flag(this.predicate, params.thumb);
    this.vector(this.predicate, params.stickers);
    this.flag(this.string, params.software);
  },
  'stickers.removeStickerFromSet': function(params) {
    this.int32(-143257775);
    this.predicate(params.sticker);
  },
  'stickers.changeStickerPosition': function(params) {
    this.int32(-4795190);
    this.predicate(params.sticker);
    this.int(params.position);
  },
  'stickers.addStickerToSet': function(params) {
    this.int32(-2041315650);
    this.predicate(params.stickerset);
    this.predicate(params.sticker);
  },
  'messages.uploadMedia': function(params) {
    this.int32(345405816);
    const flags = (this.has(params.business_connection_id) << 0);
    this.int32(flags);
    this.flag(this.string, params.business_connection_id);
    this.predicate(params.peer);
    this.predicate(params.media);
  },
  'phone.getCallConfig': function(params) {
    this.int32(1430593449);
  },
  'phone.requestCall': function(params) {
    this.int32(1124046573);
    const flags = (this.has(params.video) << 0);
    this.int32(flags);
    this.predicate(params.user_id);
    this.int(params.random_id);
    this.bytes(params.g_a_hash);
    this.predicate(params.protocol);
  },
  'phone.acceptCall': function(params) {
    this.int32(1003664544);
    this.predicate(params.peer);
    this.bytes(params.g_b);
    this.predicate(params.protocol);
  },
  'phone.confirmCall': function(params) {
    this.int32(788404002);
    this.predicate(params.peer);
    this.bytes(params.g_a);
    this.long(params.key_fingerprint);
    this.predicate(params.protocol);
  },
  'phone.receivedCall': function(params) {
    this.int32(399855457);
    this.predicate(params.peer);
  },
  'phone.discardCall': function(params) {
    this.int32(-1295269440);
    const flags = (this.has(params.video) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.duration);
    this.predicate(params.reason);
    this.long(params.connection_id);
  },
  'phone.setCallRating': function(params) {
    this.int32(1508562471);
    const flags = (this.has(params.user_initiative) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.rating);
    this.string(params.comment);
  },
  'phone.saveCallDebug': function(params) {
    this.int32(662363518);
    this.predicate(params.peer);
    this.predicate(params.debug);
  },
  'upload.getCdnFile': function(params) {
    this.int32(962554330);
    this.bytes(params.file_token);
    this.long(params.offset);
    this.int(params.limit);
  },
  'upload.reuploadCdnFile': function(params) {
    this.int32(-1691921240);
    this.bytes(params.file_token);
    this.bytes(params.request_token);
  },
  'help.getCdnConfig': function(params) {
    this.int32(1375900482);
  },
  'langpack.getLangPack': function(params) {
    this.int32(-219008246);
    this.string(params.lang_pack);
    this.string(params.lang_code);
  },
  'langpack.getStrings': function(params) {
    this.int32(-269862909);
    this.string(params.lang_pack);
    this.string(params.lang_code);
    this.vector(this.string, params.keys);
  },
  'langpack.getDifference': function(params) {
    this.int32(-845657435);
    this.string(params.lang_pack);
    this.string(params.lang_code);
    this.int(params.from_version);
  },
  'langpack.getLanguages': function(params) {
    this.int32(1120311183);
    this.string(params.lang_pack);
  },
  'channels.editBanned': function(params) {
    this.int32(-1763259007);
    this.predicate(params.channel);
    this.predicate(params.participant);
    this.predicate(params.banned_rights);
  },
  'channels.getAdminLog': function(params) {
    this.int32(870184064);
    const flags = (this.has(params.events_filter) << 0) | (this.has(params.admins) << 1);
    this.int32(flags);
    this.predicate(params.channel);
    this.string(params.q);
    this.flag(this.predicate, params.events_filter);
    this.flagVector(this.predicate, params.admins);
    this.long(params.max_id);
    this.long(params.min_id);
    this.int(params.limit);
  },
  'upload.getCdnFileHashes': function(params) {
    this.int32(-1847836879);
    this.bytes(params.file_token);
    this.long(params.offset);
  },
  'messages.sendScreenshotNotification': function(params) {
    this.int32(-1589618665);
    this.predicate(params.peer);
    this.predicate(params.reply_to);
    this.long(params.random_id);
  },
  'channels.setStickers': function(params) {
    this.int32(-359881479);
    this.predicate(params.channel);
    this.predicate(params.stickerset);
  },
  'messages.getFavedStickers': function(params) {
    this.int32(82946729);
    this.long(params.hash);
  },
  'messages.faveSticker': function(params) {
    this.int32(-1174420133);
    this.predicate(params.id);
    this.Bool(params.unfave);
  },
  'channels.readMessageContents': function(params) {
    this.int32(-357180360);
    this.predicate(params.channel);
    this.vector(this.int, params.id);
  },
  'contacts.resetSaved': function(params) {
    this.int32(-2020263951);
  },
  'messages.getUnreadMentions': function(params) {
    this.int32(-251140208);
    const flags = (this.has(params.top_msg_id) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.top_msg_id);
    this.int(params.offset_id);
    this.int(params.add_offset);
    this.int(params.limit);
    this.int(params.max_id);
    this.int(params.min_id);
  },
  'channels.deleteHistory': function(params) {
    this.int32(-1683319225);
    const flags = (this.has(params.for_everyone) << 0);
    this.int32(flags);
    this.predicate(params.channel);
    this.int(params.max_id);
  },
  'help.getRecentMeUrls': function(params) {
    this.int32(1036054804);
    this.string(params.referer);
  },
  'channels.togglePreHistoryHidden': function(params) {
    this.int32(-356796084);
    this.predicate(params.channel);
    this.Bool(params.enabled);
  },
  'messages.readMentions': function(params) {
    this.int32(921026381);
    const flags = (this.has(params.top_msg_id) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.top_msg_id);
  },
  'messages.getRecentLocations': function(params) {
    this.int32(1881817312);
    this.predicate(params.peer);
    this.int(params.limit);
    this.long(params.hash);
  },
  'messages.sendMultiMedia': function(params) {
    this.int32(934757205);
    const flags = (this.has(params.silent) << 5) | (this.has(params.background) << 6) | (this.has(params.clear_draft) << 7) | (this.has(params.noforwards) << 14) | (this.has(params.update_stickersets_order) << 15) | (this.has(params.invert_media) << 16) | (this.has(params.allow_paid_floodskip) << 19) | (this.has(params.reply_to) << 0) | (this.has(params.schedule_date) << 10) | (this.has(params.send_as) << 13) | (this.has(params.quick_reply_shortcut) << 17) | (this.has(params.effect) << 18);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.predicate, params.reply_to);
    this.vector(this.predicate, params.multi_media);
    this.flag(this.int, params.schedule_date);
    this.flag(this.predicate, params.send_as);
    this.flag(this.predicate, params.quick_reply_shortcut);
    this.flag(this.long, params.effect);
  },
  'messages.uploadEncryptedFile': function(params) {
    this.int32(1347929239);
    this.predicate(params.peer);
    this.predicate(params.file);
  },
  'account.getWebAuthorizations': function(params) {
    this.int32(405695855);
  },
  'account.resetWebAuthorization': function(params) {
    this.int32(755087855);
    this.long(params.hash);
  },
  'account.resetWebAuthorizations': function(params) {
    this.int32(1747789204);
  },
  'messages.searchStickerSets': function(params) {
    this.int32(896555914);
    const flags = (this.has(params.exclude_featured) << 0);
    this.int32(flags);
    this.string(params.q);
    this.long(params.hash);
  },
  'upload.getFileHashes': function(params) {
    this.int32(-1856595926);
    this.predicate(params.location);
    this.long(params.offset);
  },
  'help.getTermsOfServiceUpdate': function(params) {
    this.int32(749019089);
  },
  'help.acceptTermsOfService': function(params) {
    this.int32(-294455398);
    this.predicate(params.id);
  },
  'account.getAllSecureValues': function(params) {
    this.int32(-1299661699);
  },
  'account.getSecureValue': function(params) {
    this.int32(1936088002);
    this.vector(this.predicate, params.types);
  },
  'account.saveSecureValue': function(params) {
    this.int32(-1986010339);
    this.predicate(params.value);
    this.long(params.secure_secret_id);
  },
  'account.deleteSecureValue': function(params) {
    this.int32(-1199522741);
    this.vector(this.predicate, params.types);
  },
  'users.setSecureValueErrors': function(params) {
    this.int32(-1865902923);
    this.predicate(params.id);
    this.vector(this.predicate, params.errors);
  },
  'account.getAuthorizationForm': function(params) {
    this.int32(-1456907910);
    this.long(params.bot_id);
    this.string(params.scope);
    this.string(params.public_key);
  },
  'account.acceptAuthorization': function(params) {
    this.int32(-202552205);
    this.long(params.bot_id);
    this.string(params.scope);
    this.string(params.public_key);
    this.vector(this.predicate, params.value_hashes);
    this.predicate(params.credentials);
  },
  'account.sendVerifyPhoneCode': function(params) {
    this.int32(-1516022023);
    this.string(params.phone_number);
    this.predicate(params.settings);
  },
  'account.verifyPhone': function(params) {
    this.int32(1305716726);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
    this.string(params.phone_code);
  },
  'account.sendVerifyEmailCode': function(params) {
    this.int32(-1730136133);
    this.predicate(params.purpose);
    this.string(params.email);
  },
  'account.verifyEmail': function(params) {
    this.int32(53322959);
    this.predicate(params.purpose);
    this.predicate(params.verification);
  },
  'help.getDeepLinkInfo': function(params) {
    this.int32(1072547679);
    this.string(params.path);
  },
  'contacts.getSaved': function(params) {
    this.int32(-2098076769);
  },
  'channels.getLeftChannels': function(params) {
    this.int32(-2092831552);
    this.int(params.offset);
  },
  'account.initTakeoutSession': function(params) {
    this.int32(-1896617296);
    const flags = (this.has(params.contacts) << 0) | (this.has(params.message_users) << 1) | (this.has(params.message_chats) << 2) | (this.has(params.message_megagroups) << 3) | (this.has(params.message_channels) << 4) | (this.has(params.files) << 5) | (this.has(params.file_max_size) << 5);
    this.int32(flags);
    this.flag(this.long, params.file_max_size);
  },
  'account.finishTakeoutSession': function(params) {
    this.int32(489050862);
    const flags = (this.has(params.success) << 0);
    this.int32(flags);
  },
  'messages.getSplitRanges': function(params) {
    this.int32(486505992);
  },
  'invokeWithMessagesRange': function(params) {
    this.int32(911373810);
    this.predicate(params.range);
    this.predicate(params.query);
  },
  'invokeWithTakeout': function(params) {
    this.int32(-1398145746);
    this.long(params.takeout_id);
    this.predicate(params.query);
  },
  'messages.markDialogUnread': function(params) {
    this.int32(-1031349873);
    const flags = (this.has(params.unread) << 0);
    this.int32(flags);
    this.predicate(params.peer);
  },
  'messages.getDialogUnreadMarks': function(params) {
    this.int32(585256482);
  },
  'contacts.toggleTopPeers': function(params) {
    this.int32(-2062238246);
    this.Bool(params.enabled);
  },
  'messages.clearAllDrafts': function(params) {
    this.int32(2119757468);
  },
  'help.getAppConfig': function(params) {
    this.int32(1642330196);
    this.int(params.hash);
  },
  'help.saveAppLog': function(params) {
    this.int32(1862465352);
    this.vector(this.predicate, params.events);
  },
  'help.getPassportConfig': function(params) {
    this.int32(-966677240);
    this.int(params.hash);
  },
  'langpack.getLanguage': function(params) {
    this.int32(1784243458);
    this.string(params.lang_pack);
    this.string(params.lang_code);
  },
  'messages.updatePinnedMessage': function(params) {
    this.int32(-760547348);
    const flags = (this.has(params.silent) << 0) | (this.has(params.unpin) << 1) | (this.has(params.pm_oneside) << 2);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.id);
  },
  'account.confirmPasswordEmail': function(params) {
    this.int32(-1881204448);
    this.string(params.code);
  },
  'account.resendPasswordEmail': function(params) {
    this.int32(2055154197);
  },
  'account.cancelPasswordEmail': function(params) {
    this.int32(-1043606090);
  },
  'help.getSupportName': function(params) {
    this.int32(-748624084);
  },
  'help.getUserInfo': function(params) {
    this.int32(59377875);
    this.predicate(params.user_id);
  },
  'help.editUserInfo': function(params) {
    this.int32(1723407216);
    this.predicate(params.user_id);
    this.string(params.message);
    this.vector(this.predicate, params.entities);
  },
  'account.getContactSignUpNotification': function(params) {
    this.int32(-1626880216);
  },
  'account.setContactSignUpNotification': function(params) {
    this.int32(-806076575);
    this.Bool(params.silent);
  },
  'account.getNotifyExceptions': function(params) {
    this.int32(1398240377);
    const flags = (this.has(params.compare_sound) << 1) | (this.has(params.compare_stories) << 2) | (this.has(params.peer) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.peer);
  },
  'messages.sendVote': function(params) {
    this.int32(283795844);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.vector(this.bytes, params.options);
  },
  'messages.getPollResults': function(params) {
    this.int32(1941660731);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'messages.getOnlines': function(params) {
    this.int32(1848369232);
    this.predicate(params.peer);
  },
  'messages.editChatAbout': function(params) {
    this.int32(-554301545);
    this.predicate(params.peer);
    this.string(params.about);
  },
  'messages.editChatDefaultBannedRights': function(params) {
    this.int32(-1517917375);
    this.predicate(params.peer);
    this.predicate(params.banned_rights);
  },
  'account.getWallPaper': function(params) {
    this.int32(-57811990);
    this.predicate(params.wallpaper);
  },
  'account.uploadWallPaper': function(params) {
    this.int32(-476410109);
    const flags = (this.has(params.for_chat) << 0);
    this.int32(flags);
    this.predicate(params.file);
    this.string(params.mime_type);
    this.predicate(params.settings);
  },
  'account.saveWallPaper': function(params) {
    this.int32(1817860919);
    this.predicate(params.wallpaper);
    this.Bool(params.unsave);
    this.predicate(params.settings);
  },
  'account.installWallPaper': function(params) {
    this.int32(-18000023);
    this.predicate(params.wallpaper);
    this.predicate(params.settings);
  },
  'account.resetWallPapers': function(params) {
    this.int32(-1153722364);
  },
  'account.getAutoDownloadSettings': function(params) {
    this.int32(1457130303);
  },
  'account.saveAutoDownloadSettings': function(params) {
    this.int32(1995661875);
    const flags = (this.has(params.low) << 0) | (this.has(params.high) << 1);
    this.int32(flags);
    this.predicate(params.settings);
  },
  'messages.getEmojiKeywords': function(params) {
    this.int32(899735650);
    this.string(params.lang_code);
  },
  'messages.getEmojiKeywordsDifference': function(params) {
    this.int32(352892591);
    this.string(params.lang_code);
    this.int(params.from_version);
  },
  'messages.getEmojiKeywordsLanguages': function(params) {
    this.int32(1318675378);
    this.vector(this.string, params.lang_codes);
  },
  'messages.getEmojiURL': function(params) {
    this.int32(-709817306);
    this.string(params.lang_code);
  },
  'folders.editPeerFolders': function(params) {
    this.int32(1749536939);
    this.vector(this.predicate, params.folder_peers);
  },
  'messages.getSearchCounters': function(params) {
    this.int32(465367808);
    const flags = (this.has(params.saved_peer_id) << 2) | (this.has(params.top_msg_id) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.predicate, params.saved_peer_id);
    this.flag(this.int, params.top_msg_id);
    this.vector(this.predicate, params.filters);
  },
  'channels.getGroupsForDiscussion': function(params) {
    this.int32(-170208392);
  },
  'channels.setDiscussionGroup': function(params) {
    this.int32(1079520178);
    this.predicate(params.broadcast);
    this.predicate(params.group);
  },
  'messages.requestUrlAuth': function(params) {
    this.int32(428848198);
    const flags = (this.has(params.peer) << 1) | (this.has(params.msg_id) << 1) | (this.has(params.button_id) << 1) | (this.has(params.url) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.peer);
    this.flag(this.int, params.msg_id);
    this.flag(this.int, params.button_id);
    this.flag(this.string, params.url);
  },
  'messages.acceptUrlAuth': function(params) {
    this.int32(-1322487515);
    const flags = (this.has(params.write_allowed) << 0) | (this.has(params.peer) << 1) | (this.has(params.msg_id) << 1) | (this.has(params.button_id) << 1) | (this.has(params.url) << 2);
    this.int32(flags);
    this.flag(this.predicate, params.peer);
    this.flag(this.int, params.msg_id);
    this.flag(this.int, params.button_id);
    this.flag(this.string, params.url);
  },
  'messages.hidePeerSettingsBar': function(params) {
    this.int32(1336717624);
    this.predicate(params.peer);
  },
  'contacts.addContact': function(params) {
    this.int32(-386636848);
    const flags = (this.has(params.add_phone_privacy_exception) << 0);
    this.int32(flags);
    this.predicate(params.id);
    this.string(params.first_name);
    this.string(params.last_name);
    this.string(params.phone);
  },
  'contacts.acceptContact': function(params) {
    this.int32(-130964977);
    this.predicate(params.id);
  },
  'channels.editCreator': function(params) {
    this.int32(-1892102881);
    this.predicate(params.channel);
    this.predicate(params.user_id);
    this.predicate(params.password);
  },
  'contacts.getLocated': function(params) {
    this.int32(-750207932);
    const flags = (this.has(params.background) << 1) | (this.has(params.self_expires) << 0);
    this.int32(flags);
    this.predicate(params.geo_point);
    this.flag(this.int, params.self_expires);
  },
  'channels.editLocation': function(params) {
    this.int32(1491484525);
    this.predicate(params.channel);
    this.predicate(params.geo_point);
    this.string(params.address);
  },
  'channels.toggleSlowMode': function(params) {
    this.int32(-304832784);
    this.predicate(params.channel);
    this.int(params.seconds);
  },
  'messages.getScheduledHistory': function(params) {
    this.int32(-183077365);
    this.predicate(params.peer);
    this.long(params.hash);
  },
  'messages.getScheduledMessages': function(params) {
    this.int32(-1111817116);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
  },
  'messages.sendScheduledMessages': function(params) {
    this.int32(-1120369398);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
  },
  'messages.deleteScheduledMessages': function(params) {
    this.int32(1504586518);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
  },
  'account.uploadTheme': function(params) {
    this.int32(473805619);
    const flags = (this.has(params.thumb) << 0);
    this.int32(flags);
    this.predicate(params.file);
    this.flag(this.predicate, params.thumb);
    this.string(params.file_name);
    this.string(params.mime_type);
  },
  'account.createTheme': function(params) {
    this.int32(1697530880);
    const flags = (this.has(params.document) << 2) | (this.has(params.settings) << 3);
    this.int32(flags);
    this.string(params.slug);
    this.string(params.title);
    this.flag(this.predicate, params.document);
    this.flagVector(this.predicate, params.settings);
  },
  'account.updateTheme': function(params) {
    this.int32(737414348);
    const flags = (this.has(params.slug) << 0) | (this.has(params.title) << 1) | (this.has(params.document) << 2) | (this.has(params.settings) << 3);
    this.int32(flags);
    this.string(params.format);
    this.predicate(params.theme);
    this.flag(this.string, params.slug);
    this.flag(this.string, params.title);
    this.flag(this.predicate, params.document);
    this.flagVector(this.predicate, params.settings);
  },
  'account.saveTheme': function(params) {
    this.int32(-229175188);
    this.predicate(params.theme);
    this.Bool(params.unsave);
  },
  'account.installTheme': function(params) {
    this.int32(-953697477);
    const flags = (this.has(params.dark) << 0) | (this.has(params.theme) << 1) | (this.has(params.format) << 2) | (this.has(params.base_theme) << 3);
    this.int32(flags);
    this.flag(this.predicate, params.theme);
    this.flag(this.string, params.format);
    this.flag(this.predicate, params.base_theme);
  },
  'account.getTheme': function(params) {
    this.int32(978872812);
    this.string(params.format);
    this.predicate(params.theme);
  },
  'account.getThemes': function(params) {
    this.int32(1913054296);
    this.string(params.format);
    this.long(params.hash);
  },
  'auth.exportLoginToken': function(params) {
    this.int32(-1210022402);
    this.int(params.api_id);
    this.string(params.api_hash);
    this.vector(this.long, params.except_ids);
  },
  'auth.importLoginToken': function(params) {
    this.int32(-1783866140);
    this.bytes(params.token);
  },
  'auth.acceptLoginToken': function(params) {
    this.int32(-392909491);
    this.bytes(params.token);
  },
  'account.setContentSettings': function(params) {
    this.int32(-1250643605);
    const flags = (this.has(params.sensitive_enabled) << 0);
    this.int32(flags);
  },
  'account.getContentSettings': function(params) {
    this.int32(-1952756306);
  },
  'channels.getInactiveChannels': function(params) {
    this.int32(300429806);
  },
  'account.getMultiWallPapers': function(params) {
    this.int32(1705865692);
    this.vector(this.predicate, params.wallpapers);
  },
  'messages.getPollVotes': function(params) {
    this.int32(-1200736242);
    const flags = (this.has(params.option) << 0) | (this.has(params.offset) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.id);
    this.flag(this.bytes, params.option);
    this.flag(this.string, params.offset);
    this.int(params.limit);
  },
  'messages.toggleStickerSets': function(params) {
    this.int32(-1257951254);
    const flags = (this.has(params.uninstall) << 0) | (this.has(params.archive) << 1) | (this.has(params.unarchive) << 2);
    this.int32(flags);
    this.vector(this.predicate, params.stickersets);
  },
  'payments.getBankCardData': function(params) {
    this.int32(779736953);
    this.string(params.number);
  },
  'messages.getDialogFilters': function(params) {
    this.int32(-271283063);
  },
  'messages.getSuggestedDialogFilters': function(params) {
    this.int32(-1566780372);
  },
  'messages.updateDialogFilter': function(params) {
    this.int32(450142282);
    const flags = (this.has(params.filter) << 0);
    this.int32(flags);
    this.int(params.id);
    this.flag(this.predicate, params.filter);
  },
  'messages.updateDialogFiltersOrder': function(params) {
    this.int32(-983318044);
    this.vector(this.int, params.order);
  },
  'stats.getBroadcastStats': function(params) {
    this.int32(-1421720550);
    const flags = (this.has(params.dark) << 0);
    this.int32(flags);
    this.predicate(params.channel);
  },
  'stats.loadAsyncGraph': function(params) {
    this.int32(1646092192);
    const flags = (this.has(params.x) << 0);
    this.int32(flags);
    this.string(params.token);
    this.flag(this.long, params.x);
  },
  'stickers.setStickerSetThumb': function(params) {
    this.int32(-1486204014);
    const flags = (this.has(params.thumb) << 0) | (this.has(params.thumb_document_id) << 1);
    this.int32(flags);
    this.predicate(params.stickerset);
    this.flag(this.predicate, params.thumb);
    this.flag(this.long, params.thumb_document_id);
  },
  'bots.setBotCommands': function(params) {
    this.int32(85399130);
    this.predicate(params.scope);
    this.string(params.lang_code);
    this.vector(this.predicate, params.commands);
  },
  'messages.getOldFeaturedStickers': function(params) {
    this.int32(2127598753);
    this.int(params.offset);
    this.int(params.limit);
    this.long(params.hash);
  },
  'help.getPromoData': function(params) {
    this.int32(-1063816159);
  },
  'help.hidePromoData': function(params) {
    this.int32(505748629);
    this.predicate(params.peer);
  },
  'phone.sendSignalingData': function(params) {
    this.int32(-8744061);
    this.predicate(params.peer);
    this.bytes(params.data);
  },
  'stats.getMegagroupStats': function(params) {
    this.int32(-589330937);
    const flags = (this.has(params.dark) << 0);
    this.int32(flags);
    this.predicate(params.channel);
  },
  'account.getGlobalPrivacySettings': function(params) {
    this.int32(-349483786);
  },
  'account.setGlobalPrivacySettings': function(params) {
    this.int32(517647042);
    this.predicate(params.settings);
  },
  'help.dismissSuggestion': function(params) {
    this.int32(-183649631);
    this.predicate(params.peer);
    this.string(params.suggestion);
  },
  'help.getCountriesList': function(params) {
    this.int32(1935116200);
    this.string(params.lang_code);
    this.int(params.hash);
  },
  'messages.getReplies': function(params) {
    this.int32(584962828);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.int(params.offset_id);
    this.int(params.offset_date);
    this.int(params.add_offset);
    this.int(params.limit);
    this.int(params.max_id);
    this.int(params.min_id);
    this.long(params.hash);
  },
  'messages.getDiscussionMessage': function(params) {
    this.int32(1147761405);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'messages.readDiscussion': function(params) {
    this.int32(-147740172);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.int(params.read_max_id);
  },
  'contacts.blockFromReplies': function(params) {
    this.int32(698914348);
    const flags = (this.has(params.delete_message) << 0) | (this.has(params.delete_history) << 1) | (this.has(params.report_spam) << 2);
    this.int32(flags);
    this.int(params.msg_id);
  },
  'stats.getMessagePublicForwards': function(params) {
    this.int32(1595212100);
    this.predicate(params.channel);
    this.int(params.msg_id);
    this.string(params.offset);
    this.int(params.limit);
  },
  'stats.getMessageStats': function(params) {
    this.int32(-1226791947);
    const flags = (this.has(params.dark) << 0);
    this.int32(flags);
    this.predicate(params.channel);
    this.int(params.msg_id);
  },
  'messages.unpinAllMessages': function(params) {
    this.int32(-299714136);
    const flags = (this.has(params.top_msg_id) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.top_msg_id);
  },
  'phone.createGroupCall': function(params) {
    this.int32(1221445336);
    const flags = (this.has(params.rtmp_stream) << 2) | (this.has(params.title) << 0) | (this.has(params.schedule_date) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.random_id);
    this.flag(this.string, params.title);
    this.flag(this.int, params.schedule_date);
  },
  'phone.joinGroupCall': function(params) {
    this.int32(-1322057861);
    const flags = (this.has(params.muted) << 0) | (this.has(params.video_stopped) << 2) | (this.has(params.invite_hash) << 1);
    this.int32(flags);
    this.predicate(params.call);
    this.predicate(params.join_as);
    this.flag(this.string, params.invite_hash);
    this.predicate(params.params);
  },
  'phone.leaveGroupCall': function(params) {
    this.int32(1342404601);
    this.predicate(params.call);
    this.int(params.source);
  },
  'phone.inviteToGroupCall': function(params) {
    this.int32(2067345760);
    this.predicate(params.call);
    this.vector(this.predicate, params.users);
  },
  'phone.discardGroupCall': function(params) {
    this.int32(2054648117);
    this.predicate(params.call);
  },
  'phone.toggleGroupCallSettings': function(params) {
    this.int32(1958458429);
    const flags = (this.has(params.reset_invite_hash) << 1) | (this.has(params.join_muted) << 0);
    this.int32(flags);
    this.predicate(params.call);
    this.flag(this.Bool, params.join_muted);
  },
  'phone.getGroupCall': function(params) {
    this.int32(68699611);
    this.predicate(params.call);
    this.int(params.limit);
  },
  'phone.getGroupParticipants': function(params) {
    this.int32(-984033109);
    this.predicate(params.call);
    this.vector(this.predicate, params.ids);
    this.vector(this.int, params.sources);
    this.string(params.offset);
    this.int(params.limit);
  },
  'phone.checkGroupCall': function(params) {
    this.int32(-1248003721);
    this.predicate(params.call);
    this.vector(this.int, params.sources);
  },
  'messages.deleteChat': function(params) {
    this.int32(1540419152);
    this.long(params.chat_id);
  },
  'messages.deletePhoneCallHistory': function(params) {
    this.int32(-104078327);
    const flags = (this.has(params.revoke) << 0);
    this.int32(flags);
  },
  'messages.checkHistoryImport': function(params) {
    this.int32(1140726259);
    this.string(params.import_head);
  },
  'messages.initHistoryImport': function(params) {
    this.int32(873008187);
    this.predicate(params.peer);
    this.predicate(params.file);
    this.int(params.media_count);
  },
  'messages.uploadImportedMedia': function(params) {
    this.int32(713433234);
    this.predicate(params.peer);
    this.long(params.import_id);
    this.string(params.file_name);
    this.predicate(params.media);
  },
  'messages.startHistoryImport': function(params) {
    this.int32(-1271008444);
    this.predicate(params.peer);
    this.long(params.import_id);
  },
  'messages.getExportedChatInvites': function(params) {
    this.int32(-1565154314);
    const flags = (this.has(params.revoked) << 3) | (this.has(params.offset_date) << 2) | (this.has(params.offset_link) << 2);
    this.int32(flags);
    this.predicate(params.peer);
    this.predicate(params.admin_id);
    this.flag(this.int, params.offset_date);
    this.flag(this.string, params.offset_link);
    this.int(params.limit);
  },
  'messages.getExportedChatInvite': function(params) {
    this.int32(1937010524);
    this.predicate(params.peer);
    this.string(params.link);
  },
  'messages.editExportedChatInvite': function(params) {
    this.int32(-1110823051);
    const flags = (this.has(params.revoked) << 2) | (this.has(params.expire_date) << 0) | (this.has(params.usage_limit) << 1) | (this.has(params.request_needed) << 3) | (this.has(params.title) << 4);
    this.int32(flags);
    this.predicate(params.peer);
    this.string(params.link);
    this.flag(this.int, params.expire_date);
    this.flag(this.int, params.usage_limit);
    this.flag(this.Bool, params.request_needed);
    this.flag(this.string, params.title);
  },
  'messages.deleteRevokedExportedChatInvites': function(params) {
    this.int32(1452833749);
    this.predicate(params.peer);
    this.predicate(params.admin_id);
  },
  'messages.deleteExportedChatInvite': function(params) {
    this.int32(-731601877);
    this.predicate(params.peer);
    this.string(params.link);
  },
  'messages.getAdminsWithInvites': function(params) {
    this.int32(958457583);
    this.predicate(params.peer);
  },
  'messages.getChatInviteImporters': function(params) {
    this.int32(-553329330);
    const flags = (this.has(params.requested) << 0) | (this.has(params.subscription_expired) << 3) | (this.has(params.link) << 1) | (this.has(params.q) << 2);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.string, params.link);
    this.flag(this.string, params.q);
    this.int(params.offset_date);
    this.predicate(params.offset_user);
    this.int(params.limit);
  },
  'messages.setHistoryTTL': function(params) {
    this.int32(-1207017500);
    this.predicate(params.peer);
    this.int(params.period);
  },
  'account.reportProfilePhoto': function(params) {
    this.int32(-91437323);
    this.predicate(params.peer);
    this.predicate(params.photo_id);
    this.predicate(params.reason);
    this.string(params.message);
  },
  'channels.convertToGigagroup': function(params) {
    this.int32(187239529);
    this.predicate(params.channel);
  },
  'messages.checkHistoryImportPeer': function(params) {
    this.int32(1573261059);
    this.predicate(params.peer);
  },
  'phone.toggleGroupCallRecord': function(params) {
    this.int32(-248985848);
    const flags = (this.has(params.start) << 0) | (this.has(params.video) << 2) | (this.has(params.title) << 1) | (this.has(params.video_portrait) << 2);
    this.int32(flags);
    this.predicate(params.call);
    this.flag(this.string, params.title);
    this.flag(this.Bool, params.video_portrait);
  },
  'phone.editGroupCallParticipant': function(params) {
    this.int32(-1524155713);
    const flags = (this.has(params.muted) << 0) | (this.has(params.volume) << 1) | (this.has(params.raise_hand) << 2) | (this.has(params.video_stopped) << 3) | (this.has(params.video_paused) << 4) | (this.has(params.presentation_paused) << 5);
    this.int32(flags);
    this.predicate(params.call);
    this.predicate(params.participant);
    this.flag(this.Bool, params.muted);
    this.flag(this.int, params.volume);
    this.flag(this.Bool, params.raise_hand);
    this.flag(this.Bool, params.video_stopped);
    this.flag(this.Bool, params.video_paused);
    this.flag(this.Bool, params.presentation_paused);
  },
  'phone.editGroupCallTitle': function(params) {
    this.int32(480685066);
    this.predicate(params.call);
    this.string(params.title);
  },
  'phone.getGroupCallJoinAs': function(params) {
    this.int32(-277077702);
    this.predicate(params.peer);
  },
  'phone.exportGroupCallInvite': function(params) {
    this.int32(-425040769);
    const flags = (this.has(params.can_self_unmute) << 0);
    this.int32(flags);
    this.predicate(params.call);
  },
  'phone.toggleGroupCallStartSubscription': function(params) {
    this.int32(563885286);
    this.predicate(params.call);
    this.Bool(params.subscribed);
  },
  'phone.startScheduledGroupCall': function(params) {
    this.int32(1451287362);
    this.predicate(params.call);
  },
  'phone.saveDefaultGroupCallJoinAs': function(params) {
    this.int32(1465786252);
    this.predicate(params.peer);
    this.predicate(params.join_as);
  },
  'phone.joinGroupCallPresentation': function(params) {
    this.int32(-873829436);
    this.predicate(params.call);
    this.predicate(params.params);
  },
  'phone.leaveGroupCallPresentation': function(params) {
    this.int32(475058500);
    this.predicate(params.call);
  },
  'stickers.checkShortName': function(params) {
    this.int32(676017721);
    this.string(params.short_name);
  },
  'stickers.suggestShortName': function(params) {
    this.int32(1303364867);
    this.string(params.title);
  },
  'bots.resetBotCommands': function(params) {
    this.int32(1032708345);
    this.predicate(params.scope);
    this.string(params.lang_code);
  },
  'bots.getBotCommands': function(params) {
    this.int32(-481554986);
    this.predicate(params.scope);
    this.string(params.lang_code);
  },
  'account.resetPassword': function(params) {
    this.int32(-1828139493);
  },
  'account.declinePasswordReset': function(params) {
    this.int32(1284770294);
  },
  'auth.checkRecoveryPassword': function(params) {
    this.int32(221691769);
    this.string(params.code);
  },
  'account.getChatThemes': function(params) {
    this.int32(-700916087);
    this.long(params.hash);
  },
  'messages.setChatTheme': function(params) {
    this.int32(-432283329);
    this.predicate(params.peer);
    this.string(params.emoticon);
  },
  'messages.getMessageReadParticipants': function(params) {
    this.int32(834782287);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'messages.getSearchResultsCalendar': function(params) {
    this.int32(1789130429);
    const flags = (this.has(params.saved_peer_id) << 2);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.predicate, params.saved_peer_id);
    this.predicate(params.filter);
    this.int(params.offset_id);
    this.int(params.offset_date);
  },
  'messages.getSearchResultsPositions': function(params) {
    this.int32(-1669386480);
    const flags = (this.has(params.saved_peer_id) << 2);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.predicate, params.saved_peer_id);
    this.predicate(params.filter);
    this.int(params.offset_id);
    this.int(params.limit);
  },
  'messages.hideChatJoinRequest': function(params) {
    this.int32(2145904661);
    const flags = (this.has(params.approved) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.predicate(params.user_id);
  },
  'messages.hideAllChatJoinRequests': function(params) {
    this.int32(-528091926);
    const flags = (this.has(params.approved) << 0) | (this.has(params.link) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.string, params.link);
  },
  'messages.toggleNoForwards': function(params) {
    this.int32(-1323389022);
    this.predicate(params.peer);
    this.Bool(params.enabled);
  },
  'messages.saveDefaultSendAs': function(params) {
    this.int32(-855777386);
    this.predicate(params.peer);
    this.predicate(params.send_as);
  },
  'channels.getSendAs': function(params) {
    this.int32(231174382);
    this.predicate(params.peer);
  },
  'account.setAuthorizationTTL': function(params) {
    this.int32(-1081501024);
    this.int(params.authorization_ttl_days);
  },
  'account.changeAuthorizationSettings': function(params) {
    this.int32(1089766498);
    const flags = (this.has(params.confirmed) << 3) | (this.has(params.encrypted_requests_disabled) << 0) | (this.has(params.call_requests_disabled) << 1);
    this.int32(flags);
    this.long(params.hash);
    this.flag(this.Bool, params.encrypted_requests_disabled);
    this.flag(this.Bool, params.call_requests_disabled);
  },
  'channels.deleteParticipantHistory': function(params) {
    this.int32(913655003);
    this.predicate(params.channel);
    this.predicate(params.participant);
  },
  'messages.sendReaction': function(params) {
    this.int32(-754091820);
    const flags = (this.has(params.big) << 1) | (this.has(params.add_to_recent) << 2) | (this.has(params.reaction) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.flagVector(this.predicate, params.reaction);
  },
  'messages.getMessagesReactions': function(params) {
    this.int32(-1950707482);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
  },
  'messages.getMessageReactionsList': function(params) {
    this.int32(1176190792);
    const flags = (this.has(params.reaction) << 0) | (this.has(params.offset) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.id);
    this.flag(this.predicate, params.reaction);
    this.flag(this.string, params.offset);
    this.int(params.limit);
  },
  'messages.setChatAvailableReactions': function(params) {
    this.int32(-2041895551);
    const flags = (this.has(params.reactions_limit) << 0) | (this.has(params.paid_enabled) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.predicate(params.available_reactions);
    this.flag(this.int, params.reactions_limit);
    this.flag(this.Bool, params.paid_enabled);
  },
  'messages.getAvailableReactions': function(params) {
    this.int32(417243308);
    this.int(params.hash);
  },
  'messages.setDefaultReaction': function(params) {
    this.int32(1330094102);
    this.predicate(params.reaction);
  },
  'messages.translateText': function(params) {
    this.int32(1662529584);
    const flags = (this.has(params.peer) << 0) | (this.has(params.id) << 0) | (this.has(params.text) << 1);
    this.int32(flags);
    this.flag(this.predicate, params.peer);
    this.flagVector(this.int, params.id);
    this.flagVector(this.predicate, params.text);
    this.string(params.to_lang);
  },
  'messages.getUnreadReactions': function(params) {
    this.int32(841173339);
    const flags = (this.has(params.top_msg_id) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.top_msg_id);
    this.int(params.offset_id);
    this.int(params.add_offset);
    this.int(params.limit);
    this.int(params.max_id);
    this.int(params.min_id);
  },
  'messages.readReactions': function(params) {
    this.int32(1420459918);
    const flags = (this.has(params.top_msg_id) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.top_msg_id);
  },
  'contacts.resolvePhone': function(params) {
    this.int32(-1963375804);
    this.string(params.phone);
  },
  'phone.getGroupCallStreamChannels': function(params) {
    this.int32(447879488);
    this.predicate(params.call);
  },
  'phone.getGroupCallStreamRtmpUrl': function(params) {
    this.int32(-558650433);
    this.predicate(params.peer);
    this.Bool(params.revoke);
  },
  'messages.searchSentMedia': function(params) {
    this.int32(276705696);
    this.string(params.q);
    this.predicate(params.filter);
    this.int(params.limit);
  },
  'messages.getAttachMenuBots': function(params) {
    this.int32(385663691);
    this.long(params.hash);
  },
  'messages.getAttachMenuBot': function(params) {
    this.int32(1998676370);
    this.predicate(params.bot);
  },
  'messages.toggleBotInAttachMenu': function(params) {
    this.int32(1777704297);
    const flags = (this.has(params.write_allowed) << 0);
    this.int32(flags);
    this.predicate(params.bot);
    this.Bool(params.enabled);
  },
  'messages.requestWebView': function(params) {
    this.int32(647873217);
    const flags = (this.has(params.from_bot_menu) << 4) | (this.has(params.silent) << 5) | (this.has(params.compact) << 7) | (this.has(params.fullscreen) << 8) | (this.has(params.url) << 1) | (this.has(params.start_param) << 3) | (this.has(params.theme_params) << 2) | (this.has(params.reply_to) << 0) | (this.has(params.send_as) << 13);
    this.int32(flags);
    this.predicate(params.peer);
    this.predicate(params.bot);
    this.flag(this.string, params.url);
    this.flag(this.string, params.start_param);
    this.flag(this.predicate, params.theme_params);
    this.string(params.platform);
    this.flag(this.predicate, params.reply_to);
    this.flag(this.predicate, params.send_as);
  },
  'messages.prolongWebView': function(params) {
    this.int32(-1328014717);
    const flags = (this.has(params.silent) << 5) | (this.has(params.reply_to) << 0) | (this.has(params.send_as) << 13);
    this.int32(flags);
    this.predicate(params.peer);
    this.predicate(params.bot);
    this.long(params.query_id);
    this.flag(this.predicate, params.reply_to);
    this.flag(this.predicate, params.send_as);
  },
  'messages.requestSimpleWebView': function(params) {
    this.int32(1094336115);
    const flags = (this.has(params.from_switch_webview) << 1) | (this.has(params.from_side_menu) << 2) | (this.has(params.compact) << 7) | (this.has(params.fullscreen) << 8) | (this.has(params.url) << 3) | (this.has(params.start_param) << 4) | (this.has(params.theme_params) << 0);
    this.int32(flags);
    this.predicate(params.bot);
    this.flag(this.string, params.url);
    this.flag(this.string, params.start_param);
    this.flag(this.predicate, params.theme_params);
    this.string(params.platform);
  },
  'messages.sendWebViewResultMessage': function(params) {
    this.int32(172168437);
    this.string(params.bot_query_id);
    this.predicate(params.result);
  },
  'messages.sendWebViewData': function(params) {
    this.int32(-603831608);
    this.predicate(params.bot);
    this.long(params.random_id);
    this.string(params.button_text);
    this.string(params.data);
  },
  'bots.setBotMenuButton': function(params) {
    this.int32(1157944655);
    this.predicate(params.user_id);
    this.predicate(params.button);
  },
  'bots.getBotMenuButton': function(params) {
    this.int32(-1671369944);
    this.predicate(params.user_id);
  },
  'account.getSavedRingtones': function(params) {
    this.int32(-510647672);
    this.long(params.hash);
  },
  'account.saveRingtone': function(params) {
    this.int32(1038768899);
    this.predicate(params.id);
    this.Bool(params.unsave);
  },
  'account.uploadRingtone': function(params) {
    this.int32(-2095414366);
    this.predicate(params.file);
    this.string(params.file_name);
    this.string(params.mime_type);
  },
  'bots.setBotBroadcastDefaultAdminRights': function(params) {
    this.int32(2021942497);
    this.predicate(params.admin_rights);
  },
  'bots.setBotGroupDefaultAdminRights': function(params) {
    this.int32(-1839281686);
    this.predicate(params.admin_rights);
  },
  'phone.saveCallLog': function(params) {
    this.int32(1092913030);
    this.predicate(params.peer);
    this.predicate(params.file);
  },
  'channels.toggleJoinToSend': function(params) {
    this.int32(-456419968);
    this.predicate(params.channel);
    this.Bool(params.enabled);
  },
  'channels.toggleJoinRequest': function(params) {
    this.int32(1277789622);
    this.predicate(params.channel);
    this.Bool(params.enabled);
  },
  'payments.exportInvoice': function(params) {
    this.int32(261206117);
    this.predicate(params.invoice_media);
  },
  'messages.transcribeAudio': function(params) {
    this.int32(647928393);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'messages.rateTranscribedAudio': function(params) {
    this.int32(2132608815);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.long(params.transcription_id);
    this.Bool(params.good);
  },
  'payments.assignAppStoreTransaction': function(params) {
    this.int32(-2131921795);
    this.bytes(params.receipt);
    this.predicate(params.purpose);
  },
  'payments.assignPlayMarketTransaction': function(params) {
    this.int32(-537046829);
    this.predicate(params.receipt);
    this.predicate(params.purpose);
  },
  'payments.canPurchasePremium': function(params) {
    this.int32(-1614700874);
    this.predicate(params.purpose);
  },
  'help.getPremiumPromo': function(params) {
    this.int32(-1206152236);
  },
  'messages.getCustomEmojiDocuments': function(params) {
    this.int32(-643100844);
    this.vector(this.long, params.document_id);
  },
  'messages.getEmojiStickers': function(params) {
    this.int32(-67329649);
    this.long(params.hash);
  },
  'messages.getFeaturedEmojiStickers': function(params) {
    this.int32(248473398);
    this.long(params.hash);
  },
  'account.updateEmojiStatus': function(params) {
    this.int32(-70001045);
    this.predicate(params.emoji_status);
  },
  'account.getDefaultEmojiStatuses': function(params) {
    this.int32(-696962170);
    this.long(params.hash);
  },
  'account.getRecentEmojiStatuses': function(params) {
    this.int32(257392901);
    this.long(params.hash);
  },
  'account.clearRecentEmojiStatuses': function(params) {
    this.int32(404757166);
  },
  'messages.reportReaction': function(params) {
    this.int32(1063567478);
    this.predicate(params.peer);
    this.int(params.id);
    this.predicate(params.reaction_peer);
  },
  'messages.getTopReactions': function(params) {
    this.int32(-1149164102);
    this.int(params.limit);
    this.long(params.hash);
  },
  'messages.getRecentReactions': function(params) {
    this.int32(960896434);
    this.int(params.limit);
    this.long(params.hash);
  },
  'messages.clearRecentReactions': function(params) {
    this.int32(-1644236876);
  },
  'messages.getExtendedMedia': function(params) {
    this.int32(-2064119788);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
  },
  'auth.importWebTokenAuthorization': function(params) {
    this.int32(767062953);
    this.int(params.api_id);
    this.string(params.api_hash);
    this.string(params.web_auth_token);
  },
  'account.reorderUsernames': function(params) {
    this.int32(-279966037);
    this.vector(this.string, params.order);
  },
  'account.toggleUsername': function(params) {
    this.int32(1490465654);
    this.string(params.username);
    this.Bool(params.active);
  },
  'channels.reorderUsernames': function(params) {
    this.int32(-1268978403);
    this.predicate(params.channel);
    this.vector(this.string, params.order);
  },
  'channels.toggleUsername': function(params) {
    this.int32(1358053637);
    this.predicate(params.channel);
    this.string(params.username);
    this.Bool(params.active);
  },
  'channels.deactivateAllUsernames': function(params) {
    this.int32(170155475);
    this.predicate(params.channel);
  },
  'channels.toggleForum': function(params) {
    this.int32(-1540781271);
    this.predicate(params.channel);
    this.Bool(params.enabled);
  },
  'channels.createForumTopic': function(params) {
    this.int32(-200539612);
    const flags = (this.has(params.icon_color) << 0) | (this.has(params.icon_emoji_id) << 3) | (this.has(params.send_as) << 2);
    this.int32(flags);
    this.predicate(params.channel);
    this.string(params.title);
    this.flag(this.int, params.icon_color);
    this.flag(this.long, params.icon_emoji_id);
    this.long(params.random_id);
    this.flag(this.predicate, params.send_as);
  },
  'channels.getForumTopics': function(params) {
    this.int32(233136337);
    const flags = (this.has(params.q) << 0);
    this.int32(flags);
    this.predicate(params.channel);
    this.flag(this.string, params.q);
    this.int(params.offset_date);
    this.int(params.offset_id);
    this.int(params.offset_topic);
    this.int(params.limit);
  },
  'channels.getForumTopicsByID': function(params) {
    this.int32(-1333584199);
    this.predicate(params.channel);
    this.vector(this.int, params.topics);
  },
  'channels.editForumTopic': function(params) {
    this.int32(-186670715);
    const flags = (this.has(params.title) << 0) | (this.has(params.icon_emoji_id) << 1) | (this.has(params.closed) << 2) | (this.has(params.hidden) << 3);
    this.int32(flags);
    this.predicate(params.channel);
    this.int(params.topic_id);
    this.flag(this.string, params.title);
    this.flag(this.long, params.icon_emoji_id);
    this.flag(this.Bool, params.closed);
    this.flag(this.Bool, params.hidden);
  },
  'channels.updatePinnedForumTopic': function(params) {
    this.int32(1814925350);
    this.predicate(params.channel);
    this.int(params.topic_id);
    this.Bool(params.pinned);
  },
  'channels.deleteTopicHistory': function(params) {
    this.int32(876830509);
    this.predicate(params.channel);
    this.int(params.top_msg_id);
  },
  'channels.reorderPinnedForumTopics': function(params) {
    this.int32(693150095);
    const flags = (this.has(params.force) << 0);
    this.int32(flags);
    this.predicate(params.channel);
    this.vector(this.int, params.order);
  },
  'channels.toggleAntiSpam': function(params) {
    this.int32(1760814315);
    this.predicate(params.channel);
    this.Bool(params.enabled);
  },
  'channels.reportAntiSpamFalsePositive': function(params) {
    this.int32(-1471109485);
    this.predicate(params.channel);
    this.int(params.msg_id);
  },
  'messages.setDefaultHistoryTTL': function(params) {
    this.int32(-1632299963);
    this.int(params.period);
  },
  'messages.getDefaultHistoryTTL': function(params) {
    this.int32(1703637384);
  },
  'contacts.exportContactToken': function(params) {
    this.int32(-127582169);
  },
  'contacts.importContactToken': function(params) {
    this.int32(318789512);
    this.string(params.token);
  },
  'photos.uploadContactProfilePhoto': function(params) {
    this.int32(-515093903);
    const flags = (this.has(params.suggest) << 3) | (this.has(params.save) << 4) | (this.has(params.file) << 0) | (this.has(params.video) << 1) | (this.has(params.video_start_ts) << 2) | (this.has(params.video_emoji_markup) << 5);
    this.int32(flags);
    this.predicate(params.user_id);
    this.flag(this.predicate, params.file);
    this.flag(this.predicate, params.video);
    this.flag(this.double, params.video_start_ts);
    this.flag(this.predicate, params.video_emoji_markup);
  },
  'channels.toggleParticipantsHidden': function(params) {
    this.int32(1785624660);
    this.predicate(params.channel);
    this.Bool(params.enabled);
  },
  'messages.sendBotRequestedPeer': function(params) {
    this.int32(-1850552224);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.int(params.button_id);
    this.vector(this.predicate, params.requested_peers);
  },
  'account.getDefaultProfilePhotoEmojis': function(params) {
    this.int32(-495647960);
    this.long(params.hash);
  },
  'account.getDefaultGroupPhotoEmojis': function(params) {
    this.int32(-1856479058);
    this.long(params.hash);
  },
  'auth.requestFirebaseSms': function(params) {
    this.int32(-1908857314);
    const flags = (this.has(params.safety_net_token) << 0) | (this.has(params.play_integrity_token) << 2) | (this.has(params.ios_push_secret) << 1);
    this.int32(flags);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
    this.flag(this.string, params.safety_net_token);
    this.flag(this.string, params.play_integrity_token);
    this.flag(this.string, params.ios_push_secret);
  },
  'messages.getEmojiGroups': function(params) {
    this.int32(1955122779);
    this.int(params.hash);
  },
  'messages.getEmojiStatusGroups': function(params) {
    this.int32(785209037);
    this.int(params.hash);
  },
  'messages.getEmojiProfilePhotoGroups': function(params) {
    this.int32(564480243);
    this.int(params.hash);
  },
  'messages.searchCustomEmoji': function(params) {
    this.int32(739360983);
    this.string(params.emoticon);
    this.long(params.hash);
  },
  'messages.togglePeerTranslations': function(params) {
    this.int32(-461589127);
    const flags = (this.has(params.disabled) << 0);
    this.int32(flags);
    this.predicate(params.peer);
  },
  'account.getAutoSaveSettings': function(params) {
    this.int32(-1379156774);
  },
  'account.saveAutoSaveSettings': function(params) {
    this.int32(-694451359);
    const flags = (this.has(params.users) << 0) | (this.has(params.chats) << 1) | (this.has(params.broadcasts) << 2) | (this.has(params.peer) << 3);
    this.int32(flags);
    this.flag(this.predicate, params.peer);
    this.predicate(params.settings);
  },
  'account.deleteAutoSaveExceptions': function(params) {
    this.int32(1404829728);
  },
  'stickers.changeSticker': function(params) {
    this.int32(-179077444);
    const flags = (this.has(params.emoji) << 0) | (this.has(params.mask_coords) << 1) | (this.has(params.keywords) << 2);
    this.int32(flags);
    this.predicate(params.sticker);
    this.flag(this.string, params.emoji);
    this.flag(this.predicate, params.mask_coords);
    this.flag(this.string, params.keywords);
  },
  'stickers.renameStickerSet': function(params) {
    this.int32(306912256);
    this.predicate(params.stickerset);
    this.string(params.title);
  },
  'stickers.deleteStickerSet': function(params) {
    this.int32(-2022685804);
    this.predicate(params.stickerset);
  },
  'messages.getBotApp': function(params) {
    this.int32(889046467);
    this.predicate(params.app);
    this.long(params.hash);
  },
  'messages.requestAppWebView': function(params) {
    this.int32(1398901710);
    const flags = (this.has(params.write_allowed) << 0) | (this.has(params.compact) << 7) | (this.has(params.fullscreen) << 8) | (this.has(params.start_param) << 1) | (this.has(params.theme_params) << 2);
    this.int32(flags);
    this.predicate(params.peer);
    this.predicate(params.app);
    this.flag(this.string, params.start_param);
    this.flag(this.predicate, params.theme_params);
    this.string(params.platform);
  },
  'bots.setBotInfo': function(params) {
    this.int32(282013987);
    const flags = (this.has(params.bot) << 2) | (this.has(params.name) << 3) | (this.has(params.about) << 0) | (this.has(params.description) << 1);
    this.int32(flags);
    this.flag(this.predicate, params.bot);
    this.string(params.lang_code);
    this.flag(this.string, params.name);
    this.flag(this.string, params.about);
    this.flag(this.string, params.description);
  },
  'bots.getBotInfo': function(params) {
    this.int32(-589753091);
    const flags = (this.has(params.bot) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.bot);
    this.string(params.lang_code);
  },
  'auth.resetLoginEmail': function(params) {
    this.int32(2123760019);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
  },
  'chatlists.exportChatlistInvite': function(params) {
    this.int32(-2072885362);
    this.predicate(params.chatlist);
    this.string(params.title);
    this.vector(this.predicate, params.peers);
  },
  'chatlists.deleteExportedInvite': function(params) {
    this.int32(1906072670);
    this.predicate(params.chatlist);
    this.string(params.slug);
  },
  'chatlists.editExportedInvite': function(params) {
    this.int32(1698543165);
    const flags = (this.has(params.title) << 1) | (this.has(params.peers) << 2);
    this.int32(flags);
    this.predicate(params.chatlist);
    this.string(params.slug);
    this.flag(this.string, params.title);
    this.flagVector(this.predicate, params.peers);
  },
  'chatlists.getExportedInvites': function(params) {
    this.int32(-838608253);
    this.predicate(params.chatlist);
  },
  'chatlists.checkChatlistInvite': function(params) {
    this.int32(1103171583);
    this.string(params.slug);
  },
  'chatlists.joinChatlistInvite': function(params) {
    this.int32(-1498291302);
    this.string(params.slug);
    this.vector(this.predicate, params.peers);
  },
  'chatlists.getChatlistUpdates': function(params) {
    this.int32(-1992190687);
    this.predicate(params.chatlist);
  },
  'chatlists.joinChatlistUpdates': function(params) {
    this.int32(-527828747);
    this.predicate(params.chatlist);
    this.vector(this.predicate, params.peers);
  },
  'chatlists.hideChatlistUpdates': function(params) {
    this.int32(1726252795);
    this.predicate(params.chatlist);
  },
  'chatlists.getLeaveChatlistSuggestions': function(params) {
    this.int32(-37955820);
    this.predicate(params.chatlist);
  },
  'chatlists.leaveChatlist': function(params) {
    this.int32(1962598714);
    this.predicate(params.chatlist);
    this.vector(this.predicate, params.peers);
  },
  'bots.reorderUsernames': function(params) {
    this.int32(-1760972350);
    this.predicate(params.bot);
    this.vector(this.string, params.order);
  },
  'bots.toggleUsername': function(params) {
    this.int32(87861619);
    this.predicate(params.bot);
    this.string(params.username);
    this.Bool(params.active);
  },
  'messages.setChatWallPaper': function(params) {
    this.int32(-1879389471);
    const flags = (this.has(params.for_both) << 3) | (this.has(params.revert) << 4) | (this.has(params.wallpaper) << 0) | (this.has(params.settings) << 2) | (this.has(params.id) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.predicate, params.wallpaper);
    this.flag(this.predicate, params.settings);
    this.flag(this.int, params.id);
  },
  'account.invalidateSignInCodes': function(params) {
    this.int32(-896866118);
    this.vector(this.string, params.codes);
  },
  'contacts.editCloseFriends': function(params) {
    this.int32(-1167653392);
    this.vector(this.long, params.id);
  },
  'stories.canSendStory': function(params) {
    this.int32(-941629475);
    this.predicate(params.peer);
  },
  'stories.sendStory': function(params) {
    this.int32(-454661813);
    const flags = (this.has(params.pinned) << 2) | (this.has(params.noforwards) << 4) | (this.has(params.fwd_modified) << 7) | (this.has(params.media_areas) << 5) | (this.has(params.caption) << 0) | (this.has(params.entities) << 1) | (this.has(params.period) << 3) | (this.has(params.fwd_from_id) << 6) | (this.has(params.fwd_from_story) << 6);
    this.int32(flags);
    this.predicate(params.peer);
    this.predicate(params.media);
    this.flagVector(this.predicate, params.media_areas);
    this.flag(this.string, params.caption);
    this.flagVector(this.predicate, params.entities);
    this.vector(this.predicate, params.privacy_rules);
    this.long(params.random_id);
    this.flag(this.int, params.period);
    this.flag(this.predicate, params.fwd_from_id);
    this.flag(this.int, params.fwd_from_story);
  },
  'stories.editStory': function(params) {
    this.int32(-1249658298);
    const flags = (this.has(params.media) << 0) | (this.has(params.media_areas) << 3) | (this.has(params.caption) << 1) | (this.has(params.entities) << 1) | (this.has(params.privacy_rules) << 2);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.id);
    this.flag(this.predicate, params.media);
    this.flagVector(this.predicate, params.media_areas);
    this.flag(this.string, params.caption);
    this.flagVector(this.predicate, params.entities);
    this.flagVector(this.predicate, params.privacy_rules);
  },
  'stories.deleteStories': function(params) {
    this.int32(-1369842849);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
  },
  'stories.togglePinned': function(params) {
    this.int32(-1703566865);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
    this.Bool(params.pinned);
  },
  'stories.getAllStories': function(params) {
    this.int32(-290400731);
    const flags = (this.has(params.next) << 1) | (this.has(params.hidden) << 2) | (this.has(params.state) << 0);
    this.int32(flags);
    this.flag(this.string, params.state);
  },
  'stories.getPinnedStories': function(params) {
    this.int32(1478600156);
    this.predicate(params.peer);
    this.int(params.offset_id);
    this.int(params.limit);
  },
  'stories.getStoriesArchive': function(params) {
    this.int32(-1271586794);
    this.predicate(params.peer);
    this.int(params.offset_id);
    this.int(params.limit);
  },
  'stories.getStoriesByID': function(params) {
    this.int32(1467271796);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
  },
  'stories.toggleAllStoriesHidden': function(params) {
    this.int32(2082822084);
    this.Bool(params.hidden);
  },
  'stories.readStories': function(params) {
    this.int32(-1521034552);
    this.predicate(params.peer);
    this.int(params.max_id);
  },
  'stories.incrementStoryViews': function(params) {
    this.int32(-1308456197);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
  },
  'stories.getStoryViewsList': function(params) {
    this.int32(2127707223);
    const flags = (this.has(params.just_contacts) << 0) | (this.has(params.reactions_first) << 2) | (this.has(params.forwards_first) << 3) | (this.has(params.q) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.string, params.q);
    this.int(params.id);
    this.string(params.offset);
    this.int(params.limit);
  },
  'stories.getStoriesViews': function(params) {
    this.int32(685862088);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
  },
  'stories.exportStoryLink': function(params) {
    this.int32(2072899360);
    this.predicate(params.peer);
    this.int(params.id);
  },
  'stories.report': function(params) {
    this.int32(433646405);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
    this.bytes(params.option);
    this.string(params.message);
  },
  'stories.activateStealthMode': function(params) {
    this.int32(1471926630);
    const flags = (this.has(params.past) << 0) | (this.has(params.future) << 1);
    this.int32(flags);
  },
  'contacts.setBlocked': function(params) {
    this.int32(-1798939530);
    const flags = (this.has(params.my_stories_from) << 0);
    this.int32(flags);
    this.vector(this.predicate, params.id);
    this.int(params.limit);
  },
  'stories.sendReaction': function(params) {
    this.int32(2144810674);
    const flags = (this.has(params.add_to_recent) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.story_id);
    this.predicate(params.reaction);
  },
  'bots.canSendMessage': function(params) {
    this.int32(324662502);
    this.predicate(params.bot);
  },
  'bots.allowSendMessage': function(params) {
    this.int32(-248323089);
    this.predicate(params.bot);
  },
  'bots.invokeWebViewCustomMethod': function(params) {
    this.int32(142591463);
    this.predicate(params.bot);
    this.string(params.custom_method);
    this.predicate(params.params);
  },
  'stories.getPeerStories': function(params) {
    this.int32(743103056);
    this.predicate(params.peer);
  },
  'stories.getAllReadPeerStories': function(params) {
    this.int32(-1688541191);
  },
  'stories.getPeerMaxIDs': function(params) {
    this.int32(1398375363);
    this.vector(this.predicate, params.id);
  },
  'stories.getChatsToSend': function(params) {
    this.int32(-1519744160);
  },
  'stories.togglePeerStoriesHidden': function(params) {
    this.int32(-1123805756);
    this.predicate(params.peer);
    this.Bool(params.hidden);
  },
  'payments.getPremiumGiftCodeOptions': function(params) {
    this.int32(660060756);
    const flags = (this.has(params.boost_peer) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.boost_peer);
  },
  'payments.checkGiftCode': function(params) {
    this.int32(-1907247935);
    this.string(params.slug);
  },
  'payments.applyGiftCode': function(params) {
    this.int32(-152934316);
    this.string(params.slug);
  },
  'payments.getGiveawayInfo': function(params) {
    this.int32(-198994907);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'payments.launchPrepaidGiveaway': function(params) {
    this.int32(1609928480);
    this.predicate(params.peer);
    this.long(params.giveaway_id);
    this.predicate(params.purpose);
  },
  'account.updateColor': function(params) {
    this.int32(2096079197);
    const flags = (this.has(params.for_profile) << 1) | (this.has(params.color) << 2) | (this.has(params.background_emoji_id) << 0);
    this.int32(flags);
    this.flag(this.int, params.color);
    this.flag(this.long, params.background_emoji_id);
  },
  'channels.updateColor': function(params) {
    this.int32(-659933583);
    const flags = (this.has(params.for_profile) << 1) | (this.has(params.color) << 2) | (this.has(params.background_emoji_id) << 0);
    this.int32(flags);
    this.predicate(params.channel);
    this.flag(this.int, params.color);
    this.flag(this.long, params.background_emoji_id);
  },
  'account.getDefaultBackgroundEmojis': function(params) {
    this.int32(-1509246514);
    this.long(params.hash);
  },
  'premium.getBoostsList': function(params) {
    this.int32(1626764896);
    const flags = (this.has(params.gifts) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.string(params.offset);
    this.int(params.limit);
  },
  'premium.getMyBoosts': function(params) {
    this.int32(199719754);
  },
  'premium.applyBoost': function(params) {
    this.int32(1803396934);
    const flags = (this.has(params.slots) << 0);
    this.int32(flags);
    this.flagVector(this.int, params.slots);
    this.predicate(params.peer);
  },
  'premium.getBoostsStatus': function(params) {
    this.int32(70197089);
    this.predicate(params.peer);
  },
  'premium.getUserBoosts': function(params) {
    this.int32(965037343);
    this.predicate(params.peer);
    this.predicate(params.user_id);
  },
  'channels.toggleViewForumAsMessages': function(params) {
    this.int32(-1757889771);
    this.predicate(params.channel);
    this.Bool(params.enabled);
  },
  'messages.searchEmojiStickerSets': function(params) {
    this.int32(-1833678516);
    const flags = (this.has(params.exclude_featured) << 0);
    this.int32(flags);
    this.string(params.q);
    this.long(params.hash);
  },
  'channels.getChannelRecommendations': function(params) {
    this.int32(631707458);
    const flags = (this.has(params.channel) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.channel);
  },
  'stats.getStoryStats': function(params) {
    this.int32(927985472);
    const flags = (this.has(params.dark) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.id);
  },
  'stats.getStoryPublicForwards': function(params) {
    this.int32(-1505526026);
    this.predicate(params.peer);
    this.int(params.id);
    this.string(params.offset);
    this.int(params.limit);
  },
  'help.getPeerColors': function(params) {
    this.int32(-629083089);
    this.int(params.hash);
  },
  'help.getPeerProfileColors': function(params) {
    this.int32(-1412453891);
    this.int(params.hash);
  },
  'stories.getStoryReactionsList': function(params) {
    this.int32(-1179482081);
    const flags = (this.has(params.forwards_first) << 2) | (this.has(params.reaction) << 0) | (this.has(params.offset) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.id);
    this.flag(this.predicate, params.reaction);
    this.flag(this.string, params.offset);
    this.int(params.limit);
  },
  'channels.updateEmojiStatus': function(params) {
    this.int32(-254548312);
    this.predicate(params.channel);
    this.predicate(params.emoji_status);
  },
  'account.getChannelDefaultEmojiStatuses': function(params) {
    this.int32(1999087573);
    this.long(params.hash);
  },
  'account.getChannelRestrictedStatusEmojis': function(params) {
    this.int32(900325589);
    this.long(params.hash);
  },
  'messages.getSavedDialogs': function(params) {
    this.int32(1401016858);
    const flags = (this.has(params.exclude_pinned) << 0);
    this.int32(flags);
    this.int(params.offset_date);
    this.int(params.offset_id);
    this.predicate(params.offset_peer);
    this.int(params.limit);
    this.long(params.hash);
  },
  'messages.getSavedHistory': function(params) {
    this.int32(1033519437);
    this.predicate(params.peer);
    this.int(params.offset_id);
    this.int(params.offset_date);
    this.int(params.add_offset);
    this.int(params.limit);
    this.int(params.max_id);
    this.int(params.min_id);
    this.long(params.hash);
  },
  'messages.deleteSavedHistory': function(params) {
    this.int32(1855459371);
    const flags = (this.has(params.min_date) << 2) | (this.has(params.max_date) << 3);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.max_id);
    this.flag(this.int, params.min_date);
    this.flag(this.int, params.max_date);
  },
  'messages.getPinnedSavedDialogs': function(params) {
    this.int32(-700607264);
  },
  'messages.toggleSavedDialogPin': function(params) {
    this.int32(-1400783906);
    const flags = (this.has(params.pinned) << 0);
    this.int32(flags);
    this.predicate(params.peer);
  },
  'messages.reorderPinnedSavedDialogs': function(params) {
    this.int32(-1955502713);
    const flags = (this.has(params.force) << 0);
    this.int32(flags);
    this.vector(this.predicate, params.order);
  },
  'messages.getSavedReactionTags': function(params) {
    this.int32(909631579);
    const flags = (this.has(params.peer) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.peer);
    this.long(params.hash);
  },
  'messages.updateSavedReactionTag': function(params) {
    this.int32(1613331948);
    const flags = (this.has(params.title) << 0);
    this.int32(flags);
    this.predicate(params.reaction);
    this.flag(this.string, params.title);
  },
  'messages.getDefaultTagReactions': function(params) {
    this.int32(-1107741656);
    this.long(params.hash);
  },
  'messages.getOutboxReadDate': function(params) {
    this.int32(-1941176739);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'users.getIsPremiumRequiredToContact': function(params) {
    this.int32(-1507677680);
    this.vector(this.predicate, params.id);
  },
  'channels.setBoostsToUnblockRestrictions': function(params) {
    this.int32(-1388733202);
    this.predicate(params.channel);
    this.int(params.boosts);
  },
  'channels.setEmojiStickers': function(params) {
    this.int32(1020866743);
    this.predicate(params.channel);
    this.predicate(params.stickerset);
  },
  'smsjobs.isEligibleToJoin': function(params) {
    this.int32(249313744);
  },
  'smsjobs.join': function(params) {
    this.int32(-1488007635);
  },
  'smsjobs.leave': function(params) {
    this.int32(-1734824589);
  },
  'smsjobs.updateSettings': function(params) {
    this.int32(155164863);
    const flags = (this.has(params.allow_international) << 0);
    this.int32(flags);
  },
  'smsjobs.getStatus': function(params) {
    this.int32(279353576);
  },
  'smsjobs.getSmsJob': function(params) {
    this.int32(2005766191);
    this.string(params.job_id);
  },
  'smsjobs.finishJob': function(params) {
    this.int32(1327415076);
    const flags = (this.has(params.error) << 0);
    this.int32(flags);
    this.string(params.job_id);
    this.flag(this.string, params.error);
  },
  'help.getTimezonesList': function(params) {
    this.int32(1236468288);
    this.int(params.hash);
  },
  'account.updateBusinessWorkHours': function(params) {
    this.int32(1258348646);
    const flags = (this.has(params.business_work_hours) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.business_work_hours);
  },
  'account.updateBusinessLocation': function(params) {
    this.int32(-1637149926);
    const flags = (this.has(params.geo_point) << 1) | (this.has(params.address) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.geo_point);
    this.flag(this.string, params.address);
  },
  'account.updateBusinessGreetingMessage': function(params) {
    this.int32(1724755908);
    const flags = (this.has(params.message) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.message);
  },
  'account.updateBusinessAwayMessage': function(params) {
    this.int32(-1570078811);
    const flags = (this.has(params.message) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.message);
  },
  'messages.getQuickReplies': function(params) {
    this.int32(-729550168);
    this.long(params.hash);
  },
  'messages.reorderQuickReplies': function(params) {
    this.int32(1613961479);
    this.vector(this.int, params.order);
  },
  'messages.checkQuickReplyShortcut': function(params) {
    this.int32(-237962285);
    this.string(params.shortcut);
  },
  'messages.editQuickReplyShortcut': function(params) {
    this.int32(1543519471);
    this.int(params.shortcut_id);
    this.string(params.shortcut);
  },
  'messages.deleteQuickReplyShortcut': function(params) {
    this.int32(1019234112);
    this.int(params.shortcut_id);
  },
  'messages.getQuickReplyMessages': function(params) {
    this.int32(-1801153085);
    const flags = (this.has(params.id) << 0);
    this.int32(flags);
    this.int(params.shortcut_id);
    this.flagVector(this.int, params.id);
    this.long(params.hash);
  },
  'messages.sendQuickReplyMessages': function(params) {
    this.int32(1819610593);
    this.predicate(params.peer);
    this.int(params.shortcut_id);
    this.vector(this.int, params.id);
    this.vector(this.long, params.random_id);
  },
  'messages.deleteQuickReplyMessages': function(params) {
    this.int32(-519706352);
    this.int(params.shortcut_id);
    this.vector(this.int, params.id);
  },
  'account.updateConnectedBot': function(params) {
    this.int32(1138250269);
    const flags = (this.has(params.can_reply) << 0) | (this.has(params.deleted) << 1);
    this.int32(flags);
    this.predicate(params.bot);
    this.predicate(params.recipients);
  },
  'account.getConnectedBots': function(params) {
    this.int32(1319421967);
  },
  'messages.toggleDialogFilterTags': function(params) {
    this.int32(-47326647);
    this.Bool(params.enabled);
  },
  'invokeWithBusinessConnection': function(params) {
    this.int32(-584540274);
    this.string(params.connection_id);
    this.predicate(params.query);
  },
  'account.getBotBusinessConnection': function(params) {
    this.int32(1990746736);
    this.string(params.connection_id);
  },
  'account.updateBusinessIntro': function(params) {
    this.int32(-1508585420);
    const flags = (this.has(params.intro) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.intro);
  },
  'stickers.replaceSticker': function(params) {
    this.int32(1184253338);
    this.predicate(params.sticker);
    this.predicate(params.new_sticker);
  },
  'messages.getMyStickers': function(params) {
    this.int32(-793386500);
    this.long(params.offset_id);
    this.int(params.limit);
  },
  'fragment.getCollectibleInfo': function(params) {
    this.int32(-1105295942);
    this.predicate(params.collectible);
  },
  'account.toggleConnectedBotPaused': function(params) {
    this.int32(1684934807);
    this.predicate(params.peer);
    this.Bool(params.paused);
  },
  'account.disablePeerConnectedBot': function(params) {
    this.int32(1581481689);
    this.predicate(params.peer);
  },
  'account.updateBirthday': function(params) {
    this.int32(-865203183);
    const flags = (this.has(params.birthday) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.birthday);
  },
  'contacts.getBirthdays': function(params) {
    this.int32(-621959068);
  },
  'account.createBusinessChatLink': function(params) {
    this.int32(-2007898482);
    this.predicate(params.link);
  },
  'account.editBusinessChatLink': function(params) {
    this.int32(-1942744913);
    this.string(params.slug);
    this.predicate(params.link);
  },
  'account.deleteBusinessChatLink': function(params) {
    this.int32(1611085428);
    this.string(params.slug);
  },
  'account.getBusinessChatLinks': function(params) {
    this.int32(1869667809);
  },
  'account.resolveBusinessChatLink': function(params) {
    this.int32(1418913262);
    this.string(params.slug);
  },
  'account.updatePersonalChannel': function(params) {
    this.int32(-649919008);
    this.predicate(params.channel);
  },
  'stats.getBroadcastRevenueStats': function(params) {
    this.int32(-142021095);
    const flags = (this.has(params.dark) << 0);
    this.int32(flags);
    this.predicate(params.peer);
  },
  'stats.getBroadcastRevenueWithdrawalUrl': function(params) {
    this.int32(-1644889427);
    this.predicate(params.peer);
    this.predicate(params.password);
  },
  'stats.getBroadcastRevenueTransactions': function(params) {
    this.int32(1889078125);
    this.predicate(params.peer);
    this.int(params.offset);
    this.int(params.limit);
  },
  'channels.restrictSponsoredMessages': function(params) {
    this.int32(-1696000743);
    this.predicate(params.channel);
    this.Bool(params.restricted);
  },
  'account.toggleSponsoredMessages': function(params) {
    this.int32(-1176919155);
    this.Bool(params.enabled);
  },
  'stories.togglePinnedToTop': function(params) {
    this.int32(187268763);
    this.predicate(params.peer);
    this.vector(this.int, params.id);
  },
  'account.getReactionsNotifySettings': function(params) {
    this.int32(115172684);
  },
  'account.setReactionsNotifySettings': function(params) {
    this.int32(829220168);
    this.predicate(params.settings);
  },
  'auth.reportMissingCode': function(params) {
    this.int32(-878841866);
    this.string(params.phone_number);
    this.string(params.phone_code_hash);
    this.string(params.mnc);
  },
  'messages.getEmojiStickerGroups': function(params) {
    this.int32(500711669);
    this.int(params.hash);
  },
  'invokeWithGooglePlayIntegrity': function(params) {
    this.int32(502868356);
    this.string(params.nonce);
    this.string(params.token);
    this.predicate(params.query);
  },
  'invokeWithApnsSecret': function(params) {
    this.int32(229528824);
    this.string(params.nonce);
    this.string(params.secret);
    this.predicate(params.query);
  },
  'messages.getAvailableEffects': function(params) {
    this.int32(-559805895);
    this.int(params.hash);
  },
  'channels.searchPosts': function(params) {
    this.int32(-778069893);
    this.string(params.hashtag);
    this.int(params.offset_rate);
    this.predicate(params.offset_peer);
    this.int(params.offset_id);
    this.int(params.limit);
  },
  'messages.editFactCheck': function(params) {
    this.int32(92925557);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.predicate(params.text);
  },
  'messages.deleteFactCheck': function(params) {
    this.int32(-774204404);
    this.predicate(params.peer);
    this.int(params.msg_id);
  },
  'messages.getFactCheck': function(params) {
    this.int32(-1177696786);
    this.predicate(params.peer);
    this.vector(this.int, params.msg_id);
  },
  'payments.getStarsTopupOptions': function(params) {
    this.int32(-1072773165);
  },
  'payments.getStarsStatus': function(params) {
    this.int32(273665959);
    this.predicate(params.peer);
  },
  'payments.getStarsTransactions': function(params) {
    this.int32(1775912279);
    const flags = (this.has(params.inbound) << 0) | (this.has(params.outbound) << 1) | (this.has(params.ascending) << 2) | (this.has(params.subscription_id) << 3);
    this.int32(flags);
    this.flag(this.string, params.subscription_id);
    this.predicate(params.peer);
    this.string(params.offset);
    this.int(params.limit);
  },
  'payments.sendStarsForm': function(params) {
    this.int32(2040056084);
    this.long(params.form_id);
    this.predicate(params.invoice);
  },
  'payments.refundStarsCharge': function(params) {
    this.int32(632196938);
    this.predicate(params.user_id);
    this.string(params.charge_id);
  },
  'stories.searchPosts': function(params) {
    this.int32(-780072697);
    const flags = (this.has(params.hashtag) << 0) | (this.has(params.area) << 1) | (this.has(params.peer) << 2);
    this.int32(flags);
    this.flag(this.string, params.hashtag);
    this.flag(this.predicate, params.area);
    this.flag(this.predicate, params.peer);
    this.string(params.offset);
    this.int(params.limit);
  },
  'payments.getStarsRevenueStats': function(params) {
    this.int32(-652215594);
    const flags = (this.has(params.dark) << 0);
    this.int32(flags);
    this.predicate(params.peer);
  },
  'payments.getStarsRevenueWithdrawalUrl': function(params) {
    this.int32(331081907);
    this.predicate(params.peer);
    this.long(params.stars);
    this.predicate(params.password);
  },
  'payments.getStarsRevenueAdsAccountUrl': function(params) {
    this.int32(-774377531);
    this.predicate(params.peer);
  },
  'payments.getStarsTransactionsByID': function(params) {
    this.int32(662973742);
    this.predicate(params.peer);
    this.vector(this.predicate, params.id);
  },
  'payments.getStarsGiftOptions': function(params) {
    this.int32(-741774392);
    const flags = (this.has(params.user_id) << 0);
    this.int32(flags);
    this.flag(this.predicate, params.user_id);
  },
  'bots.getPopularAppBots': function(params) {
    this.int32(-1034878574);
    this.string(params.offset);
    this.int(params.limit);
  },
  'bots.addPreviewMedia': function(params) {
    this.int32(397326170);
    this.predicate(params.bot);
    this.string(params.lang_code);
    this.predicate(params.media);
  },
  'bots.editPreviewMedia': function(params) {
    this.int32(-2061148049);
    this.predicate(params.bot);
    this.string(params.lang_code);
    this.predicate(params.media);
    this.predicate(params.new_media);
  },
  'bots.deletePreviewMedia': function(params) {
    this.int32(755054003);
    this.predicate(params.bot);
    this.string(params.lang_code);
    this.vector(this.predicate, params.media);
  },
  'bots.reorderPreviewMedias': function(params) {
    this.int32(-1238895702);
    this.predicate(params.bot);
    this.string(params.lang_code);
    this.vector(this.predicate, params.order);
  },
  'bots.getPreviewInfo': function(params) {
    this.int32(1111143341);
    this.predicate(params.bot);
    this.string(params.lang_code);
  },
  'bots.getPreviewMedias': function(params) {
    this.int32(-1566222003);
    this.predicate(params.bot);
  },
  'messages.requestMainWebView': function(params) {
    this.int32(-908059013);
    const flags = (this.has(params.compact) << 7) | (this.has(params.fullscreen) << 8) | (this.has(params.start_param) << 1) | (this.has(params.theme_params) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.predicate(params.bot);
    this.flag(this.string, params.start_param);
    this.flag(this.predicate, params.theme_params);
    this.string(params.platform);
  },
  'payments.getStarsSubscriptions': function(params) {
    this.int32(52761285);
    const flags = (this.has(params.missing_balance) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.string(params.offset);
  },
  'payments.changeStarsSubscription': function(params) {
    this.int32(-948500360);
    const flags = (this.has(params.canceled) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.string(params.subscription_id);
    this.flag(this.Bool, params.canceled);
  },
  'payments.fulfillStarsSubscription': function(params) {
    this.int32(-866391117);
    this.predicate(params.peer);
    this.string(params.subscription_id);
  },
  'messages.sendPaidReaction': function(params) {
    this.int32(-1646877061);
    const flags = (this.has(params.private) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.int(params.count);
    this.long(params.random_id);
    this.flag(this.Bool, params.private);
  },
  'messages.togglePaidReactionPrivacy': function(params) {
    this.int32(-2070228073);
    this.predicate(params.peer);
    this.int(params.msg_id);
    this.Bool(params.private);
  },
  'payments.getStarsGiveawayOptions': function(params) {
    this.int32(-1122042562);
  },
  'messages.getPaidReactionPrivacy': function(params) {
    this.int32(1193563562);
  },
  'payments.getStarGifts': function(params) {
    this.int32(-1000983152);
    this.int(params.hash);
  },
  'payments.getUserStarGifts': function(params) {
    this.int32(1584580577);
    this.predicate(params.user_id);
    this.string(params.offset);
    this.int(params.limit);
  },
  'payments.saveStarGift': function(params) {
    this.int32(-2018709362);
    const flags = (this.has(params.unsave) << 0);
    this.int32(flags);
    this.predicate(params.user_id);
    this.int(params.msg_id);
  },
  'payments.convertStarGift': function(params) {
    this.int32(69328935);
    this.predicate(params.user_id);
    this.int(params.msg_id);
  },
  'messages.viewSponsoredMessage': function(params) {
    this.int32(1731909873);
    this.predicate(params.peer);
    this.bytes(params.random_id);
  },
  'messages.clickSponsoredMessage': function(params) {
    this.int32(252261477);
    const flags = (this.has(params.media) << 0) | (this.has(params.fullscreen) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.bytes(params.random_id);
  },
  'messages.reportSponsoredMessage': function(params) {
    this.int32(452189112);
    this.predicate(params.peer);
    this.bytes(params.random_id);
    this.bytes(params.option);
  },
  'messages.getSponsoredMessages': function(params) {
    this.int32(-1680673735);
    this.predicate(params.peer);
  },
  'messages.savePreparedInlineMessage': function(params) {
    this.int32(-232816849);
    const flags = (this.has(params.peer_types) << 0);
    this.int32(flags);
    this.predicate(params.result);
    this.predicate(params.user_id);
    this.flagVector(this.predicate, params.peer_types);
  },
  'messages.getPreparedInlineMessage': function(params) {
    this.int32(-2055291464);
    this.predicate(params.bot);
    this.string(params.id);
  },
  'bots.updateUserEmojiStatus': function(params) {
    this.int32(-308334395);
    this.predicate(params.user_id);
    this.predicate(params.emoji_status);
  },
  'bots.toggleUserEmojiStatusPermission': function(params) {
    this.int32(115237778);
    this.predicate(params.bot);
    this.Bool(params.enabled);
  },
  'bots.checkDownloadFileParams': function(params) {
    this.int32(1342666121);
    this.predicate(params.bot);
    this.string(params.file_name);
    this.string(params.url);
  },
  'payments.botCancelStarsSubscription': function(params) {
    this.int32(1845102114);
    const flags = (this.has(params.restore) << 0);
    this.int32(flags);
    this.predicate(params.user_id);
    this.string(params.charge_id);
  },
  'bots.getAdminedBots': function(params) {
    this.int32(-1334764157);
  },
  'bots.updateStarRefProgram': function(params) {
    this.int32(2005621427);
    const flags = (this.has(params.duration_months) << 0);
    this.int32(flags);
    this.predicate(params.bot);
    this.int(params.commission_permille);
    this.flag(this.int, params.duration_months);
  },
  'payments.getConnectedStarRefBots': function(params) {
    this.int32(1483318611);
    const flags = (this.has(params.offset_date) << 2) | (this.has(params.offset_link) << 2);
    this.int32(flags);
    this.predicate(params.peer);
    this.flag(this.int, params.offset_date);
    this.flag(this.string, params.offset_link);
    this.int(params.limit);
  },
  'payments.getConnectedStarRefBot': function(params) {
    this.int32(-1210476304);
    this.predicate(params.peer);
    this.predicate(params.bot);
  },
  'payments.getSuggestedStarRefBots': function(params) {
    this.int32(225134839);
    const flags = (this.has(params.order_by_revenue) << 0) | (this.has(params.order_by_date) << 1);
    this.int32(flags);
    this.predicate(params.peer);
    this.string(params.offset);
    this.int(params.limit);
  },
  'payments.connectStarRefBot': function(params) {
    this.int32(2127901834);
    this.predicate(params.peer);
    this.predicate(params.bot);
  },
  'payments.editConnectedStarRefBot': function(params) {
    this.int32(-453204829);
    const flags = (this.has(params.revoked) << 0);
    this.int32(flags);
    this.predicate(params.peer);
    this.string(params.link);
  },
  'messages.searchStickers': function(params) {
    this.int32(699516522);
    const flags = (this.has(params.emojis) << 0);
    this.int32(flags);
    this.string(params.q);
    this.string(params.emoticon);
    this.vector(this.string, params.lang_code);
    this.int(params.offset);
    this.int(params.limit);
    this.long(params.hash);
  },
};