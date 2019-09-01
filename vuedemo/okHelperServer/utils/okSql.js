
// okcoin sql 集合
module.exports = {

    addAccount: "INSERT INTO `okcoin_user_center`.`btc_user_uniform`(`email`, `phone`, `real_name`, `nick_name`, `id_number`, `passport_num`, `passport_name`, `login_pwd`, `login_pwd_encrypt`, `trade_pwd`, `trade_pwd_encrypt`, `totp_encrypt`, `pwd_flag`, `version`, `delete_flag`, `master_account_id`, `user_type`, `user_from`, `from`, `channel_id`, `area_code`, `created_date`, `wallet_user_id`, `com_user_id`, `conflict_flag`, `auth_login`, `auth_trade`, `email_validate_flag`, `trade_pwd_flag`, `email_verify`, `update_time`, `remark`, `first_from`, `deleted`, `broker_id`) VALUES ('radomEamilReplace', NULL, '', 'test', NULL, NULL, NULL, '89D187899698C1A3493412AFC4409B01', 'E10ADC3949BA59ABBE56E057F20F883E', '', '', '', 1, 0, 0, 0, 0, 0, 2, 0, '0', '2018-12-18 12:03:00', -1, NULL, 0, 0, 0, 1, 0, NULL, '2018-12-18 12:03:00', NULL, 0, 0, 0)",

    addKyc1:'INSERT INTO `okcoin_user_local`.`user_kyc_info`(`user_id`, `template_id`, `country_id`, `id_card`, `kyc_info`, `level`, `status`, `fail_reason`, `remark`, `create_time`, `update_time`, `exp_date`, `type`) VALUES (userIdReplace, 12, \'CN\', \'passportReplace\', \'{\\"passportNo\\":\\"passportReplace\\",\\"firstName\\":\\"xx\\",\\"lastName\\":\\"xx\\",\\"certificateType\\":0}\', 1, 2, \'\', \'\', \'2018-12-19 12:29:05\', \'2018-12-19 12:29:05\', NULL, 0)',

    addKyc2: 'INSERT INTO `okcoin_user_local`.`user_kyc_info`(`user_id`, `template_id`, `country_id`, `id_card`, `kyc_info`, `level`, `status`, `fail_reason`, `remark`, `create_time`, `update_time`, `exp_date`, `type`) VALUES (userIdReplace, 13, \'CN\', NULL, \'{\\"passportNo\\":\\"passportReplace\\",\\"lastName\\":\\"xx\\",\\"birthDay\\":\\"2018-11-28\\",\\"images\\":[{\\"idcardIssue\\":\\"\\",\\"imageId\\":411108,\\"imagePath\\":\\"http://ok-private-hk-test.oss-cn-hongkong.aliyuncs.com/users/kyc/image/20181219/3918a87c9f3347a9acd3e6bc426a2581?Expires=1545213538&amp;OSSAccessKeyId=LTAI7B2gBMRKMCdE&amp;Signature=EQeCxAU5O%2BfaFP8uOAn4Bh2H2Cg%3D\\",\\"idcardExpireDate\\":\\"\\",\\"name\\":\\"invitation.png\\",\\"idcardName\\":\\"\\",\\"imageType\\":1,\\"idcardNumber\\":\\"\\"},{\\"idcardIssue\\":\\"\\",\\"imageId\\":411109,\\"imagePath\\":\\"http://ok-private-hk-test.oss-cn-hongkong.aliyuncs.com/users/kyc/image/20181219/abbc59a1af5746d18b0baea512e3d968?Expires=1545213541&amp;OSSAccessKeyId=LTAI7B2gBMRKMCdE&amp;Signature=GpBbRzFKcvG3OmAOBizuM4yZKlk%3D\\",\\"idcardExpireDate\\":\\"\\",\\"name\\":\\"invitation.png\\",\\"idcardName\\":\\"\\",\\"imageType\\":5,\\"idcardNumber\\":\\"\\"}],\\"city\\":\\"x\\",\\"fullName\\":\\"xxx\\",\\"socialNumber\\":\\"\\",\\"passName\\":\\"1212\\",\\"currentCountry\\":\\"DZ\\",\\"firstName\\":\\"xx\\",\\"roadAddress\\":\\"xx\\",\\"provice\\":\\"xx\\",\\"postCode\\":\\"4654564\\",\\"certificateType\\":0,\\"fromFlag\\":0}\', 2, 1, \'\', \'\', \'2018-12-19 12:29:05\', \'2018-12-19 12:29:05\', NULL, 0)',

    passKyc2: 'UPDATE user_kyc_info SET `status` = 2 WHERE user_id = \'userIdReplace\' AND `level` = 2',

    rejectKyc2: 'UPDATE user_kyc_info SET `status` = 3 WHERE user_id = \'userIdReplace\' AND `level` = 2',

    delKyc1: 'DELETE FROM user_kyc_info WHERE user_id = \'userIdReplace\' AND `level` = 1',

    delKyc2: 'DELETE FROM user_kyc_info WHERE user_id = \'userIdReplace\' AND `level` = 2',

    delAllKyc: 'DELETE FROM user_kyc_info WHERE user_id = \'userIdReplace\'',






    // okex 相关sql
    addOkexAccount: "INSERT INTO `okcoin_user_center`.`btc_user_uniform`(`email`, `phone`, `real_name`, `nick_name`, `id_number`, `passport_num`, `passport_name`, `login_pwd`, `login_pwd_encrypt`, `trade_pwd`, `trade_pwd_encrypt`, `totp_encrypt`, `pwd_flag`, `version`, `delete_flag`, `master_account_id`, `user_from`, `from`, `channel_id`, `area_code`, `created_date`, `wallet_user_id`, `com_user_id`, `conflict_flag`, `auth_login`, `auth_trade`, `email_validate_flag`, `trade_pwd_flag`, `email_verify`, `update_time`, `remark`, `first_from`, `deleted`, `broker_id`) VALUES ('radomEamilReplace', NULL, '', 'test', NULL, NULL, NULL, '89D187899698C1A3493412AFC4409B01', 'E10ADC3949BA59ABBE56E057F20F883E', '', '', '', 1, 0, 0, 0, 0, 3, 0, '0', '2018-12-25 17:06:29', -1, 36203688, 0, 0, 0, 1, 0, NULL, '2018-12-25 17:06:29', NULL, 0, 0, 0);",
}


