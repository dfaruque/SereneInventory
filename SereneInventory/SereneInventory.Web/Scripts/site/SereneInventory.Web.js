var _Ext;
(function (_Ext) {
    var AuditActionType;
    (function (AuditActionType) {
        AuditActionType[AuditActionType["Insert"] = 1] = "Insert";
        AuditActionType[AuditActionType["Update"] = 2] = "Update";
        AuditActionType[AuditActionType["Delete"] = 3] = "Delete";
    })(AuditActionType = _Ext.AuditActionType || (_Ext.AuditActionType = {}));
    Serenity.Decorators.registerEnumType(AuditActionType, '_Ext.AuditActionType', 'Enum.Audit.AuditActionType');
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var AuditLogForm = (function (_super) {
        __extends(AuditLogForm, _super);
        function AuditLogForm(prefix) {
            var _this = _super.call(this, prefix) || this;
            if (!AuditLogForm.init) {
                AuditLogForm.init = true;
                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.EnumEditor;
                var w4 = s.DateTimeEditor;
                var w5 = _Ext.StaticTextBlock;
                Q.initFormType(AuditLogForm, [
                    'EntityTableName', w0,
                    'VersionNo', w1,
                    'UserId', w2,
                    'ActionType', w3,
                    'ActionDate', w4,
                    'EntityId', w1,
                    'OldEntity', w0,
                    'NewEntity', w0,
                    'Differences', w5,
                    'IpAddress', w0,
                    'SessionId', w0
                ]);
            }
            return _this;
        }
        return AuditLogForm;
    }(Serenity.PrefixedContext));
    AuditLogForm.formKey = '_Ext.AuditLog';
    _Ext.AuditLogForm = AuditLogForm;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var AuditLogRow;
    (function (AuditLogRow) {
        AuditLogRow.idProperty = 'Id';
        AuditLogRow.nameProperty = 'EntityTableName';
        AuditLogRow.localTextPrefix = '_Ext.AuditLog';
    })(AuditLogRow = _Ext.AuditLogRow || (_Ext.AuditLogRow = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var AuditLogService;
    (function (AuditLogService) {
        AuditLogService.baseUrl = '_Ext/AuditLog';
        [
            'Create',
            'Update',
            'Delete',
            'Retrieve',
            'List'
        ].forEach(function (x) {
            AuditLogService[x] = function (r, s, o) {
                return Q.serviceRequest(AuditLogService.baseUrl + '/' + x, r, s, o);
            };
        });
    })(AuditLogService = _Ext.AuditLogService || (_Ext.AuditLogService = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var AuditLogViewerService;
    (function (AuditLogViewerService) {
        AuditLogViewerService.baseUrl = 'AuditLogViewer';
        [
            'List'
        ].forEach(function (x) {
            AuditLogViewerService[x] = function (r, s, o) {
                return Q.serviceRequest(AuditLogViewerService.baseUrl + '/' + x, r, s, o);
            };
        });
    })(AuditLogViewerService = _Ext.AuditLogViewerService || (_Ext.AuditLogViewerService = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var Months;
    (function (Months) {
        Months[Months["January"] = 0] = "January";
        Months[Months["February"] = 1] = "February";
        Months[Months["March"] = 2] = "March";
        Months[Months["April"] = 3] = "April";
        Months[Months["May"] = 4] = "May";
        Months[Months["June"] = 5] = "June";
        Months[Months["July"] = 6] = "July";
        Months[Months["August"] = 7] = "August";
        Months[Months["September"] = 8] = "September";
        Months[Months["October"] = 9] = "October";
        Months[Months["November"] = 10] = "November";
        Months[Months["December"] = 11] = "December";
    })(Months = _Ext.Months || (_Ext.Months = {}));
    Serenity.Decorators.registerEnumType(Months, '_Ext.Months', 'Months');
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ReplaceRowForm = (function (_super) {
        __extends(ReplaceRowForm, _super);
        function ReplaceRowForm(prefix) {
            var _this = _super.call(this, prefix) || this;
            if (!ReplaceRowForm.init) {
                ReplaceRowForm.init = true;
                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = _Ext.EmptyLookupEditor;
                Q.initFormType(ReplaceRowForm, [
                    'DeletedEntityName', w0,
                    'ReplaceWithEntityId', w1
                ]);
            }
            return _this;
        }
        return ReplaceRowForm;
    }(Serenity.PrefixedContext));
    ReplaceRowForm.formKey = '_Ext.ReplaceRow';
    _Ext.ReplaceRowForm = ReplaceRowForm;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ReplaceRowService;
    (function (ReplaceRowService) {
        ReplaceRowService.baseUrl = 'ReplaceRow';
        [
            'Replace'
        ].forEach(function (x) {
            ReplaceRowService[x] = function (r, s, o) {
                return Q.serviceRequest(ReplaceRowService.baseUrl + '/' + x, r, s, o);
            };
        });
    })(ReplaceRowService = _Ext.ReplaceRowService || (_Ext.ReplaceRowService = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var TimeUoM;
    (function (TimeUoM) {
        TimeUoM[TimeUoM["Hour"] = 1] = "Hour";
        TimeUoM[TimeUoM["Day"] = 2] = "Day";
        TimeUoM[TimeUoM["Week"] = 3] = "Week";
        TimeUoM[TimeUoM["Month"] = 4] = "Month";
        TimeUoM[TimeUoM["CalenderMonth"] = 5] = "CalenderMonth";
        TimeUoM[TimeUoM["Year"] = 6] = "Year";
    })(TimeUoM = _Ext.TimeUoM || (_Ext.TimeUoM = {}));
    Serenity.Decorators.registerEnumType(TimeUoM, '_Ext.TimeUoM', 'TimeUoM');
})(_Ext || (_Ext = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            return LanguageForm;
        }(Serenity.PrefixedContext));
        LanguageForm.formKey = 'Administration.Language';
        Administration.LanguageForm = LanguageForm;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            return RoleForm;
        }(Serenity.PrefixedContext));
        RoleForm.formKey = 'Administration.Role';
        Administration.RoleForm = RoleForm;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var TenantForm = (function (_super) {
            __extends(TenantForm, _super);
            function TenantForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TenantForm.init) {
                    TenantForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TenantForm, [
                        'Name', w0,
                        'Description', w0,
                        'TenantId', w0
                    ]);
                }
                return _this;
            }
            return TenantForm;
        }(Serenity.PrefixedContext));
        TenantForm.formKey = 'Administration.Tenant';
        Administration.TenantForm = TenantForm;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var TenantRow;
        (function (TenantRow) {
            TenantRow.idProperty = 'Id';
            TenantRow.nameProperty = 'Name';
            TenantRow.localTextPrefix = 'Administration.Tenant';
        })(TenantRow = Administration.TenantRow || (Administration.TenantRow = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var TenantService;
        (function (TenantService) {
            TenantService.baseUrl = 'Administration/Tenant';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TenantService[x] = function (r, s, o) {
                    return Q.serviceRequest(TenantService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TenantService = Administration.TenantService || (Administration.TenantService = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
            }
            return UserForm;
        }(Serenity.PrefixedContext));
        UserForm.formKey = 'Administration.User';
        Administration.UserForm = UserForm;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Inventory;
    (function (Inventory) {
        var TransactionDetailForm = (function (_super) {
            __extends(TransactionDetailForm, _super);
            function TransactionDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TransactionDetailForm.init) {
                    TransactionDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.DecimalEditor;
                    Q.initFormType(TransactionDetailForm, [
                        'TransactionId', w0,
                        'ProductId', w0,
                        'Quantity', w1,
                        'UnitPrice', w2,
                        'Amount', w2,
                        'TenantId', w0
                    ]);
                }
                return _this;
            }
            return TransactionDetailForm;
        }(Serenity.PrefixedContext));
        TransactionDetailForm.formKey = 'Inventory.TransactionDetail';
        Inventory.TransactionDetailForm = TransactionDetailForm;
    })(Inventory = SereneInventory.Inventory || (SereneInventory.Inventory = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Inventory;
    (function (Inventory) {
        var TransactionDetailRow;
        (function (TransactionDetailRow) {
            TransactionDetailRow.idProperty = 'Id';
            TransactionDetailRow.localTextPrefix = 'Inventory.TransactionDetail';
        })(TransactionDetailRow = Inventory.TransactionDetailRow || (Inventory.TransactionDetailRow = {}));
    })(Inventory = SereneInventory.Inventory || (SereneInventory.Inventory = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Inventory;
    (function (Inventory) {
        var TransactionDetailService;
        (function (TransactionDetailService) {
            TransactionDetailService.baseUrl = 'Inventory/TransactionDetail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TransactionDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(TransactionDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TransactionDetailService = Inventory.TransactionDetailService || (Inventory.TransactionDetailService = {}));
    })(Inventory = SereneInventory.Inventory || (SereneInventory.Inventory = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Inventory;
    (function (Inventory) {
        var TransactionForm = (function (_super) {
            __extends(TransactionForm, _super);
            function TransactionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TransactionForm.init) {
                    TransactionForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(TransactionForm, [
                        'TransactionType', w0,
                        'RefTransactionId', w1,
                        'TransactionNumber', w1,
                        'TransactionDate', w2,
                        'PartyId', w1,
                        'TenantId', w1
                    ]);
                }
                return _this;
            }
            return TransactionForm;
        }(Serenity.PrefixedContext));
        TransactionForm.formKey = 'Inventory.Transaction';
        Inventory.TransactionForm = TransactionForm;
    })(Inventory = SereneInventory.Inventory || (SereneInventory.Inventory = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Inventory;
    (function (Inventory) {
        var TransactionRow;
        (function (TransactionRow) {
            TransactionRow.idProperty = 'Id';
            TransactionRow.nameProperty = 'TransactionNumber';
            TransactionRow.localTextPrefix = 'Inventory.Transaction';
        })(TransactionRow = Inventory.TransactionRow || (Inventory.TransactionRow = {}));
    })(Inventory = SereneInventory.Inventory || (SereneInventory.Inventory = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Inventory;
    (function (Inventory) {
        var TransactionService;
        (function (TransactionService) {
            TransactionService.baseUrl = 'Inventory/Transaction';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TransactionService[x] = function (r, s, o) {
                    return Q.serviceRequest(TransactionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TransactionService = Inventory.TransactionService || (Inventory.TransactionService = {}));
    })(Inventory = SereneInventory.Inventory || (SereneInventory.Inventory = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        ChangePasswordForm.formKey = 'Membership.ChangePassword';
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = SereneInventory.Membership || (SereneInventory.Membership = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = SereneInventory.Membership || (SereneInventory.Membership = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            return LoginForm;
        }(Serenity.PrefixedContext));
        LoginForm.formKey = 'Membership.Login';
        Membership.LoginForm = LoginForm;
    })(Membership = SereneInventory.Membership || (SereneInventory.Membership = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        ResetPasswordForm.formKey = 'Membership.ResetPassword';
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = SereneInventory.Membership || (SereneInventory.Membership = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            return SignUpForm;
        }(Serenity.PrefixedContext));
        SignUpForm.formKey = 'Membership.SignUp';
        Membership.SignUpForm = SignUpForm;
    })(Membership = SereneInventory.Membership || (SereneInventory.Membership = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var PartyForm = (function (_super) {
            __extends(PartyForm, _super);
            function PartyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!PartyForm.init) {
                    PartyForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(PartyForm, [
                        'PartyType', w0,
                        'Name', w1,
                        'Address', w1,
                        'Contact', w1,
                        'TenantId', w1
                    ]);
                }
                return _this;
            }
            return PartyForm;
        }(Serenity.PrefixedContext));
        PartyForm.formKey = 'Setup.Party';
        Setup.PartyForm = PartyForm;
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var PartyRow;
        (function (PartyRow) {
            PartyRow.idProperty = 'Id';
            PartyRow.nameProperty = 'Name';
            PartyRow.localTextPrefix = 'Setup.Party';
        })(PartyRow = Setup.PartyRow || (Setup.PartyRow = {}));
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var PartyService;
        (function (PartyService) {
            PartyService.baseUrl = 'Setup/Party';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                PartyService[x] = function (r, s, o) {
                    return Q.serviceRequest(PartyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(PartyService = Setup.PartyService || (Setup.PartyService = {}));
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var ProductCategoryForm = (function (_super) {
            __extends(ProductCategoryForm, _super);
            function ProductCategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductCategoryForm.init) {
                    ProductCategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(ProductCategoryForm, [
                        'Name', w0,
                        'Description', w0,
                        'TenantId', w0
                    ]);
                }
                return _this;
            }
            return ProductCategoryForm;
        }(Serenity.PrefixedContext));
        ProductCategoryForm.formKey = 'Setup.ProductCategory';
        Setup.ProductCategoryForm = ProductCategoryForm;
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var ProductCategoryRow;
        (function (ProductCategoryRow) {
            ProductCategoryRow.idProperty = 'Id';
            ProductCategoryRow.nameProperty = 'Name';
            ProductCategoryRow.localTextPrefix = 'Setup.ProductCategory';
        })(ProductCategoryRow = Setup.ProductCategoryRow || (Setup.ProductCategoryRow = {}));
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var ProductCategoryService;
        (function (ProductCategoryService) {
            ProductCategoryService.baseUrl = 'Setup/ProductCategory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductCategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductCategoryService = Setup.ProductCategoryService || (Setup.ProductCategoryService = {}));
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var ProductForm = (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductForm.init) {
                    ProductForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.IntegerEditor;
                    Q.initFormType(ProductForm, [
                        'Name', w0,
                        'ProductType', w1,
                        'ProductCategoryId', w0,
                        'Description', w0,
                        'Images', w0,
                        'TenantId', w0
                    ]);
                }
                return _this;
            }
            return ProductForm;
        }(Serenity.PrefixedContext));
        ProductForm.formKey = 'Setup.Product';
        Setup.ProductForm = ProductForm;
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'Id';
            ProductRow.nameProperty = 'Name';
            ProductRow.localTextPrefix = 'Setup.Product';
        })(ProductRow = Setup.ProductRow || (Setup.ProductRow = {}));
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Setup/Product';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductService = Setup.ProductService || (Setup.ProductService = {}));
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
var q;
(function (q) {
    function groupBy(xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }
    q.groupBy = groupBy;
    function sortBy(xs, key) {
        return xs.sort(function (a, b) {
            if (a[key] < b[key]) {
                return -1;
            }
            if (a[key] > b[key]) {
                return 1;
            }
            return 0;
        });
    }
    q.sortBy = sortBy;
    function sortByDesc(xs, key) {
        return xs.sort(function (a, b) {
            if (a[key] > b[key]) {
                return -1;
            }
            if (a[key] < b[key]) {
                return 1;
            }
            return 0;
        });
    }
    q.sortByDesc = sortByDesc;
})(q || (q = {}));
var q;
(function (q) {
    function nextTick(date) {
        return new Date(date.getTime() + 1);
    }
    q.nextTick = nextTick;
    function addMinutes(date, minutes) {
        return new Date(date.getTime() + minutes * 60000);
    }
    q.addMinutes = addMinutes;
    function addHours(date, hours) {
        return new Date(date.getTime() + hours * 3600000);
    }
    q.addHours = addHours;
    function getHours(fromDate, toDate) {
        var hours = 0;
        if (fromDate && toDate) {
            var totalMiliSeconds = toDate.valueOf() - fromDate.valueOf();
            hours = totalMiliSeconds / (1000 * 60 * 60);
        }
        return hours;
    }
    q.getHours = getHours;
    function getDays24HourPulse(fromDate, toDate) {
        var days = q.getHours(fromDate, toDate) / 24;
        return Math.ceil(days);
    }
    q.getDays24HourPulse = getDays24HourPulse;
    function getDays(pFromDate, pToDate) {
        var fromDate = new Date(pFromDate.getFullYear(), pFromDate.getMonth(), pFromDate.getDate());
        var toDate = new Date(pToDate.getFullYear(), pToDate.getMonth(), pToDate.getDate(), 23, 59, 59);
        var days = q.getHours(fromDate, toDate) / 24;
        //days = days <= 0 ? 1 : days;
        return Math.ceil(days);
    }
    q.getDays = getDays;
    function getMonths(fromDate, toDate) {
        var months = q.getDays24HourPulse(fromDate, toDate) / 30;
        return Math.ceil(months);
    }
    q.getMonths = getMonths;
    function getCalenderMonths(fromDate, toDate) {
        var months;
        months = (toDate.getFullYear() - fromDate.getFullYear()) * 12;
        months -= fromDate.getMonth();
        months += toDate.getMonth();
        return months <= 0 ? 0 : months;
    }
    q.getCalenderMonths = getCalenderMonths;
    function getCalenderMonthsCeil(fromDate, toDate) {
        var months = q.getCalenderMonths(fromDate, toDate);
        return months == 0 ? 1 : months;
    }
    q.getCalenderMonthsCeil = getCalenderMonthsCeil;
    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }
    q.addDays = addDays;
    function addMonths(date, months) {
        var result = new Date(date);
        result.setMonth(result.getMonth() + months);
        return result;
    }
    q.addMonths = addMonths;
    function addYear(date, years) {
        var result = new Date(date);
        result.setFullYear(result.getFullYear() + years);
        return result;
    }
    q.addYear = addYear;
    function getPeriods(fromDate, toDate, periodUnit) {
        if (periodUnit == _Ext.TimeUoM.Day) {
            var days = q.getDays(fromDate, toDate);
            return days;
        }
        else if (periodUnit == _Ext.TimeUoM.Month) {
            var months = q.getMonths(fromDate, toDate);
            return months == 0 ? 1 : months;
        }
        else if (periodUnit == _Ext.TimeUoM.CalenderMonth) {
            var calenderMonths = q.getCalenderMonths(fromDate, toDate);
            return calenderMonths + 1;
        }
    }
    q.getPeriods = getPeriods;
    function addPeriod(date, period, periodUnit) {
        var result = new Date(date);
        if (periodUnit == _Ext.TimeUoM.Day)
            result.setDate(result.getDate() + period);
        else if (periodUnit == _Ext.TimeUoM.Month)
            result.setMonth(result.getMonth() + period);
        else if (periodUnit == _Ext.TimeUoM.CalenderMonth) {
            result.setDate(1);
            result.setMonth(result.getMonth() + period);
        }
        return result;
    }
    q.addPeriod = addPeriod;
    function formatISODate(date) {
        if (date) {
            var offset = date.getTimezoneOffset();
            var result = new Date(date.getTime() - offset * 60 * 1000);
            return result.toISOString();
        }
        else
            return null;
    }
    q.formatISODate = formatISODate;
    //editor utils
    function bindDateTimeEditorChange(editor, handler) {
        editor.change(handler);
        editor.element.closest('.field').find('.time').change(handler);
        editor.element.closest('.field').find('.inplace-now').click(handler);
    }
    q.bindDateTimeEditorChange = bindDateTimeEditorChange;
    function initDateRangeEditor(fromDateEditor, toDateEditor, onChangeHandler) {
        var startDateTextBox = fromDateEditor.element;
        var endDateTextBox = toDateEditor.element;
        startDateTextBox.datepicker('option', 'onClose', function (dateText, inst) {
            if (endDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datepicker('getDate');
                var testEndDate = endDateTextBox.datepicker('getDate');
                if (testStartDate > testEndDate)
                    endDateTextBox.datepicker('setDate', testStartDate);
            }
            else {
                endDateTextBox.val(dateText);
            }
        });
        endDateTextBox.datepicker('option', 'minDate', startDateTextBox.datepicker('getDate'));
        startDateTextBox.datepicker('option', 'onSelect', function (selectedDateTime) {
            endDateTextBox.datepicker('option', 'minDate', startDateTextBox.datepicker('getDate'));
        });
        endDateTextBox.datepicker('option', 'onClose', function (dateText, inst) {
            if (startDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datepicker('getDate');
                var testEndDate = endDateTextBox.datepicker('getDate');
                if (testStartDate > testEndDate)
                    startDateTextBox.datepicker('setDate', testEndDate);
            }
            else {
                startDateTextBox.val(dateText);
            }
        });
        startDateTextBox.datepicker('option', 'maxDate', endDateTextBox.datepicker('getDate'));
        endDateTextBox.datepicker('option', 'onSelect', function (selectedDateTime) {
            startDateTextBox.datepicker('option', 'maxDate', endDateTextBox.datepicker('getDate'));
        });
        setTimeout(function () {
            fromDateEditor.change(onChangeHandler);
            toDateEditor.change(onChangeHandler);
        }, 500);
    }
    q.initDateRangeEditor = initDateRangeEditor;
    function initDateTimeRangeEditor(fromDateTimeEditor, toDateTimeEditor, onChangeHandler) {
        //fromDateTimeEditor.destroy();
        //toDateTimeEditor.destroy();
        var startDateTextBox = fromDateTimeEditor.element;
        var endDateTextBox = toDateTimeEditor.element;
        //startDateTextBox.datetimepicker('option', 'timeFormat', 'HH:mm z')
        startDateTextBox.datetimepicker('option', 'onClose', function (dateText, inst) {
            if (endDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datetimepicker('getDate');
                var testEndDate = endDateTextBox.datetimepicker('getDate');
                if (testStartDate > testEndDate)
                    endDateTextBox.datetimepicker('setDate', testStartDate);
            }
            else {
                endDateTextBox.val(dateText);
            }
        });
        endDateTextBox.datetimepicker('option', 'minDate', startDateTextBox.datetimepicker('getDate'));
        startDateTextBox.datetimepicker('option', 'onSelect', function (selectedDateTime) {
            endDateTextBox.datetimepicker('option', 'minDate', startDateTextBox.datetimepicker('getDate'));
        });
        //endDateTextBox.datetimepicker('option', 'timeFormat', 'HH:mm z')
        endDateTextBox.datetimepicker('option', 'onClose', function (dateText, inst) {
            if (startDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datetimepicker('getDate');
                var testEndDate = endDateTextBox.datetimepicker('getDate');
                if (testStartDate > testEndDate)
                    startDateTextBox.datetimepicker('setDate', testEndDate);
            }
            else {
                startDateTextBox.val(dateText);
            }
        });
        startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate'));
        endDateTextBox.datetimepicker('option', 'onSelect', function (selectedDateTime) {
            startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate'));
        });
        setTimeout(function () {
            fromDateTimeEditor.change(onChangeHandler);
            toDateTimeEditor.change(onChangeHandler);
        }, 500);
    }
    q.initDateTimeRangeEditor = initDateTimeRangeEditor;
    function formatDate(d, format) {
        if (!d) {
            return '';
        }
        var date;
        if (typeof d == "string") {
            var res = Q.parseDate(d);
            if (!res)
                return d;
            date = res;
        }
        else
            date = d;
        if (format == null || format == "d") {
            format = Q.Culture.dateFormat;
        }
        else {
            switch (format) {
                case "g":
                    format = Q.Culture.dateTimeFormat.replace(":ss", "");
                    break;
                case "G":
                    format = Q.Culture.dateTimeFormat;
                    break;
                case "s":
                    format = "yyyy-MM-ddTHH:mm:ss";
                    break;
                case "u": return Q.formatISODateTimeUTC(date);
            }
        }
        var pad = function (i) {
            return Q.zeroPad(i, 2);
        };
        return format.replace(new RegExp('dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|fff|zz?z?|\\/', 'g'), function (fmt) {
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            switch (fmt) {
                case '/': return Q.Culture.dateSeparator;
                case 'hh': return pad(((date.getHours() < 13) ? date.getHours() : (date.getHours() - 12)));
                case 'h': return ((date.getHours() < 13) ? date.getHours() : (date.getHours() - 12));
                case 'HH': return pad(date.getHours());
                case 'H': return date.getHours();
                case 'mm': return pad(date.getMinutes());
                case 'm': return date.getMinutes();
                case 'ss': return pad(date.getSeconds());
                case 's': return date.getSeconds();
                case 'yyyy': return date.getFullYear();
                case 'yy': return date.getFullYear().toString().substr(2, 4);
                case 'dddd': return days[date.getDay()];
                case 'ddd': return days[date.getDay()].substr(0, 3);
                case 'dd': return pad(date.getDate());
                case 'd': return date.getDate().toString();
                case 'MMMM': return months[date.getMonth()];
                case 'MMM': return months[date.getMonth()].substr(0, 3);
                case 'MM': return pad(date.getMonth() + 1);
                case 'M': return date.getMonth() + 1;
                case 't': return ((date.getHours() < 12) ? 'A' : 'P');
                case 'tt': return ((date.getHours() < 12) ? 'AM' : 'PM');
                case 'fff': return Q.zeroPad(date.getMilliseconds(), 3);
                case 'zzz':
                case 'zz':
                case 'z': return '';
                default: return fmt;
            }
        });
    }
    q.formatDate = formatDate;
})(q || (q = {}));
var q;
(function (q) {
    function initDetailEditor(dialog, editor, options) {
        if (options === void 0) { options = {}; }
        if (options.showCaption != true) {
            editor.element.siblings('.caption').hide();
        }
        if (options.hideToolbar == true) {
            editor.element.find('.grid-toolbar').hide();
        }
        if (options.isReadOnly == true) {
            editor.set_readOnly(options.isReadOnly);
        }
        editor.parentDialog = dialog;
        dialog.afterSetDialogSize = function () {
            if (options.height) {
                editor.slickGrid.setOptions({ autoHeight: false });
                editor.element.find('.grid-container').height(options.height);
                editor.slickGrid.resizeCanvas();
            }
            if (options.width) {
                editor.element.find('.grid-container').width(options.width);
                editor.slickGrid.resizeCanvas();
            }
            //else {
            //    editor.element.find('.grid-container').width('100%');
            //}
        };
    }
    q.initDetailEditor = initDetailEditor;
    function setGridEditorHeight(editor, heightInPx) {
        editor.css('height', heightInPx + 'px');
        editor.find('.grid-container')
            .css('height', (heightInPx - 25) + 'px')
            .height(heightInPx);
    }
    q.setGridEditorHeight = setGridEditorHeight;
    function addNotificationIcon(editor, isSuccess) {
        var isAddOnInitialized = editor.element.data('isAddOnInitialized');
        if (isAddOnInitialized != true) {
            editor.element.after('<span class="text text-danger" style="padding:3px"><i class="fa fa-times"></i></span>');
            editor.element.data('isAddOnInitialized', true);
        }
        if (isSuccess == true) {
            editor.element.switchClass('bg-danger', 'bg-success')
                .siblings('.text').switchClass('text-danger', 'text-success')
                .children().switchClass('fa-times', 'fa-check');
        }
        else {
            editor.element.switchClass('bg-success', 'bg-danger')
                .siblings('.text').switchClass('text-success', 'text-danger')
                .children().switchClass('fa-check', 'fa-times');
        }
    }
    q.addNotificationIcon = addNotificationIcon;
    function setEditorLabel(editor, value) {
        editor.element.siblings('label').text(value);
    }
    q.setEditorLabel = setEditorLabel;
    function hideEditorLabel(editor) {
        editor.element.siblings('label').hide();
    }
    q.hideEditorLabel = hideEditorLabel;
    function setEditorCategoryLabel(editor, value) {
        var categoryAnchor = editor.element.closest('.category').find('.category-anchor');
        categoryAnchor.text(value);
        var categoryAnchorName = categoryAnchor.attr('name');
        categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").text(value);
    }
    q.setEditorCategoryLabel = setEditorCategoryLabel;
    function hideEditorCategory(editor, value) {
        if (value === void 0) { value = true; }
        if (value == true)
            editor.element.closest('.category').hide();
        else
            editor.element.closest('.category').show();
        var categoryAnchor = editor.element.closest('.category').find('.category-anchor');
        var categoryAnchorName = categoryAnchor.attr('name');
        if (value == true)
            categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").hide();
        else
            categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").show();
    }
    q.hideEditorCategory = hideEditorCategory;
    function hideField(editor, value) {
        if (value === void 0) { value = true; }
        if (value == true)
            editor.element.closest('.field').hide();
        else
            editor.element.closest('.field').show();
    }
    q.hideField = hideField;
    function showField(editor, value) {
        if (value === void 0) { value = true; }
        if (value == true)
            editor.element.closest('.field').show();
        else
            editor.element.closest('.field').hide();
    }
    q.showField = showField;
    function hideEditorTab(editor, value) {
        if (value === void 0) { value = true; }
        var tabId = editor.element.closest('.tab-pane').hide().attr('id');
        var tabAnchor = editor.element.closest('.s-PropertyGrid').find("a[href='#" + tabId + "']");
        tabAnchor.closest('li').hide();
    }
    q.hideEditorTab = hideEditorTab;
    function readOnlyEditorTab(editor, value) {
        if (value === void 0) { value = true; }
        var $editors = editor.element.closest('.tab-pane').find('.editor');
        Serenity.EditorUtils.setReadonly($editors, value);
    }
    q.readOnlyEditorTab = readOnlyEditorTab;
    function readOnlyEditorCategory(editor, value) {
        if (value === void 0) { value = true; }
        var $editors = editor.element.closest('.category').find('.editor');
        Serenity.EditorUtils.setReadonly($editors, value);
    }
    q.readOnlyEditorCategory = readOnlyEditorCategory;
    function readonlyEditorCategory($editor, value) {
        if (value === void 0) { value = true; }
        var $editors = $editor.closest('.category').find('.editor');
        Serenity.EditorUtils.setReadonly($editors, value);
    }
    q.readonlyEditorCategory = readonlyEditorCategory;
    function readOnlyEditor(editor, value) {
        if (value === void 0) { value = true; }
        Serenity.EditorUtils.setReadOnly(editor, value);
    }
    q.readOnlyEditor = readOnlyEditor;
    function readonlyEditor($editor, value) {
        if (value === void 0) { value = true; }
        Serenity.EditorUtils.setReadonly($editor, value);
    }
    q.readonlyEditor = readonlyEditor;
    function moveEditorFromTab(editor, toElement, isPrepend) {
        if (isPrepend === void 0) { isPrepend = false; }
        var fieldDiv = editor.element.closest('.field');
        if (isPrepend == true)
            fieldDiv.prependTo(toElement);
        else
            fieldDiv.appendTo(toElement);
    }
    q.moveEditorFromTab = moveEditorFromTab;
    function moveEditorCategoryFromTab(editor, toElement, isPrepend) {
        if (isPrepend === void 0) { isPrepend = false; }
        var fieldDiv = editor.element.closest('.field');
        var categoryDiv = editor.element.closest('.category');
        if (isPrepend == true)
            categoryDiv.prependTo(toElement);
        else
            categoryDiv.appendTo(toElement);
        //hide category navigation link
        var categoryAnchor = categoryDiv.find('.category-anchor');
        var categoryAnchorName = categoryAnchor.attr('name');
        categoryAnchor.closest('.s-PropertyGrid').find("a[href='#" + categoryAnchorName + "']").hide();
    }
    q.moveEditorCategoryFromTab = moveEditorCategoryFromTab;
    function selectEditorTab(editor) {
        var tabId = editor.element.closest('.tab-pane').attr('id');
        var tabAnchor = editor.element.closest('.s-PropertyGrid').find("a[href='#" + tabId + "']");
        tabAnchor.tab('show');
    }
    q.selectEditorTab = selectEditorTab;
    // for select2 lookup editor
    function getSelectedRow(e) {
        var selectedItem = e.added;
        var selectedRow = selectedItem.source;
        return selectedRow;
    }
    q.getSelectedRow = getSelectedRow;
})(q || (q = {}));
var q;
(function (q) {
    function getEnumText(enumKey, value) {
        var title = Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get(enumKey), value);
        return title;
    }
    q.getEnumText = getEnumText;
})(q || (q = {}));
var _Ext;
(function (_Ext) {
    var GridBase = (function (_super) {
        __extends(GridBase, _super);
        function GridBase(container, options) {
            var _this = _super.call(this, container, options) || this;
            _this.isAutosized = false;
            _this.isChildGrid = false;
            _this.slickContainer.fadeTo(0, 0);
            return _this;
        }
        GridBase.prototype.markupReady = function () {
            var _this = this;
            _super.prototype.markupReady.call(this);
            setTimeout(function () {
                if (_this.isAutosized == false) {
                    _this.resizeAllCulumn();
                    _this.slickContainer.fadeTo(100, 1);
                }
            }, 100);
        };
        GridBase.prototype.getButtons = function () {
            var _this = this;
            var buttons = _super.prototype.getButtons.call(this);
            var reportRequest = this.getReportRequest();
            if (reportRequest.ListExcelServiceMethodName) {
                buttons.push(_Ext.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: this.getService() + '/' + reportRequest.ListExcelServiceMethodName,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
            }
            if (reportRequest.ReportKey) {
                buttons.push({
                    title: 'Export to PDF',
                    icon: 'fa fa-file-pdf-o',
                    onClick: function () {
                        _Ext.ReportHelper.execute({ reportKey: reportRequest.ReportKey, params: { request: _this.getReportRequest() } });
                    }
                });
                buttons.push({
                    title: 'View as Report',
                    icon: 'fa fa-html5',
                    onClick: function () {
                        _Ext.ReportHelper.execute({ reportKey: reportRequest.ReportKey, params: { request: _this.getReportRequest() }, extension: 'html' });
                    }
                });
            }
            else if (reportRequest.ReportServiceMethodName) {
                buttons.push({
                    title: 'View as Report',
                    icon: 'fa fa-eye',
                    onClick: function () {
                        Q.postToService({ service: Q.resolveUrl(_this.getService() + '/' + reportRequest.ReportServiceMethodName), request: _this.getReportRequest(), target: '_blank' });
                    }
                });
            }
            else {
                buttons.push(_Ext.PdfExportHelper.createToolButton({
                    grid: this,
                    tableOptions: { theme: 'grid' },
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
            }
            return buttons;
        };
        GridBase.prototype.getReportRequest = function () {
            var view = this.getView();
            var request = Q.deepClone(view ? view.params : {}); //as _Ext.ReportRequest;
            request.ReportServiceMethodName = null; // if some value found in this property than "view as report" button will appear
            request.ReportKey = null; // if some value found in this property than "export to pdf" button will appear
            request.ListExcelServiceMethodName = null; // if some value found in this property than "export to xls" button will appear
            request.EqualityFilterWithTextValue = {};
            if (view) {
                var quickFilters = this.getQuickFilters();
                for (var _i = 0, quickFilters_1 = quickFilters; _i < quickFilters_1.length; _i++) {
                    var quickFilter = quickFilters_1[_i];
                    var filterValue = request.EqualityFilter[quickFilter.field];
                    if (filterValue) {
                        if (quickFilter.options.lookupKey) {
                            var lookup = Q.getLookup(quickFilter.options.lookupKey);
                            request.EqualityFilterWithTextValue[quickFilter.title] = lookup.itemById[filterValue][lookup.textField];
                        }
                        else if (quickFilter.options.enumKey) {
                            var enumKey = quickFilter.options.enumKey;
                            var enumValue = Q.toId(filterValue);
                            request.EqualityFilterWithTextValue[quickFilter.title] = Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get(enumKey), enumValue);
                        }
                        else {
                            request.EqualityFilterWithTextValue[quickFilter.title] = filterValue;
                        }
                    }
                    else if (quickFilter.type == Serenity.DateEditor) {
                        var qf = this.findQuickFilter(Serenity.DateEditor, quickFilter.field);
                        var dateFrom = qf.element.val();
                        var dateTo = qf.element.siblings('input').val();
                        var filterText = '';
                        if (!Q.isEmptyOrNull(dateFrom))
                            filterText = 'From ' + dateFrom;
                        if (!Q.isEmptyOrNull(dateTo))
                            filterText = filterText + ' To ' + dateTo;
                        if (!Q.isEmptyOrNull(filterText)) {
                            request.EqualityFilterWithTextValue[quickFilter.title] = filterText;
                        }
                        else if (q.DefaultMainGridOptions.ShowAnyInEqualityFilterWithTextValue == true) {
                            request.EqualityFilterWithTextValue[quickFilter.title] = 'all';
                        }
                    }
                    else if (q.DefaultMainGridOptions.ShowAnyInEqualityFilterWithTextValue == true) {
                        request.EqualityFilterWithTextValue[quickFilter.title] = 'all';
                    }
                }
            }
            return request;
        };
        GridBase.prototype.getColumns = function () {
            var cols = _super.prototype.getColumns.call(this);
            var isEditable = this.getSlickOptions().editable;
            cols.forEach(function (c) {
                c.width = c.minWidth || c.width || 50;
                c.cssClass = c.cssClass || '';
                if (c.sourceItem) {
                    if (c.sourceItem.filteringType == String("Lookup")) {
                        c.cssClass += ' align-left';
                        if (c.sourceItem.editorType == "Lookup") {
                            c.lookup = Q.getLookup(c.sourceItem.editorParams.lookupKey);
                            c.formatter = function (row, cell, value, columnDef, dataContext) {
                                var item = columnDef.lookup.itemById[value];
                                if (item)
                                    return item[columnDef.lookup.textField];
                                else
                                    return '-';
                            };
                        }
                    }
                    else if (c.sourceItem.formatterType == String("Enum")) {
                        //c.cssClass += ' align-center';
                        c.formatter = function (row, cell, value, columnDef, dataContext) {
                            var enumKey = columnDef.sourceItem.editorParams.enumKey;
                            var text = Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get(enumKey), Q.toId(value));
                            if (text)
                                return text;
                            else
                                return '-';
                        };
                    }
                    else if (c.sourceItem.formatterType == String("Date")) {
                        c.cssClass += ' align-center';
                        c.width = c.minWidth > 99 ? c.minWidth : 99;
                    }
                    else if (c.sourceItem.formatterType == String("DateTime")) {
                        c.cssClass += ' align-center';
                        c.width = c.minWidth > 140 ? c.minWidth : 140;
                    }
                    else if (c.sourceItem.formatterType == String("Number")) {
                        c.cssClass += ' align-right';
                        if (c.sourceItem.editorType == String("Decimal")) {
                            var formatSrt_1 = '#,##0.00';
                            if (c.sourceItem.editorParams) {
                                var decimals = c.sourceItem.editorParams['decimals'];
                                if (decimals) {
                                    formatSrt_1 = '#,##0.';
                                    for (var i = 0; i < decimals; i++) {
                                        formatSrt_1 += '0';
                                    }
                                }
                                else if (c.sourceItem.editorParams['minValue']) {
                                    var splitedMinValue = c.sourceItem.editorParams['minValue'].split('.');
                                    if (splitedMinValue.length > 1) {
                                        formatSrt_1 = '#,##0.' + splitedMinValue[1];
                                    }
                                    else {
                                        formatSrt_1 = '#,##0';
                                    }
                                }
                            }
                            c.format = function (ctx) { return Serenity.NumberFormatter.format(ctx.value, formatSrt_1); };
                        }
                    }
                    else if (c.sourceItem.formatterType == String("Checkbox")) {
                        c.cssClass += ' align-center';
                    }
                    else {
                        c.cssClass += ' align-left';
                        c.width = c.minWidth > 99 ? c.minWidth : 99;
                    }
                    //editor
                    if (isEditable == true && c.sourceItem.readOnly != true) {
                        if (q.useSerenityInlineEditors) {
                            c.editor = SerenityInlineEditor;
                        }
                        else {
                            if (c.sourceItem.editorType == "Lookup" || c.sourceItem.editorType == "Enum") {
                                c.editor = Slick['Editors']['Select2'];
                                c.width = c.minWidth > 160 ? c.minWidth : 160;
                            }
                            else if (c.sourceItem.editorType == "Date") {
                                c.editor = Slick['Editors']['Date'];
                            }
                            else if (c.sourceItem.editorType == "Boolean") {
                                c.editor = Slick['Editors']['Checkbox'];
                            }
                            else if (c.sourceItem.editorType == "Integer") {
                                c.editor = Slick['Editors']['Integer'];
                            }
                            else if (c.sourceItem.editorType == "Decimal") {
                                c.editor = Slick['Editors']['Float'];
                            }
                            else if (c.sourceItem.editorType == "YesNoSelect") {
                                c.editor = Slick['Editors']['YesNoSelect'];
                            }
                            else if (c.sourceItem.editorType == "PercentComplete") {
                                c.editor = Slick['Editors']['PercentComplete'];
                            }
                            else if (c.sourceItem.editorType == "LongText") {
                                c.editor = Slick['Editors']['LongText'];
                            }
                            else {
                                c.editor = Slick['Editors']['Text'];
                            }
                        }
                    }
                }
                else {
                    c.cssClass += ' align-left';
                    c.width = c.minWidth > 99 ? c.minWidth : 99;
                }
            });
            cols.unshift({
                field: 'inline-actions',
                name: '',
                width: 25,
                minWidth: 25,
                maxWidth: 25,
                format: function (ctx) { return '<a class="inline-action view-details" title="view details"><i class="view-details fa fa-pencil-square-o"></i></a>'; }
            }, {
                field: 'RowNum',
                name: '#',
                cssClass: 'align-center',
                headerCssClass: 'align-center',
                width: 40,
                minWidth: 40,
                maxWidth: 40,
            });
            return cols;
        };
        GridBase.prototype.createSlickGrid = function () {
            var grid = _super.prototype.createSlickGrid.call(this);
            this.autoColumnSizePlugin = new Slick.AutoColumnSize();
            grid.registerPlugin(this.autoColumnSizePlugin);
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
            return grid;
        };
        GridBase.prototype.resetColumns = function (columns) {
            var _this = this;
            this.slickContainer.fadeTo(0, 0);
            this.slickGrid.setColumns(columns);
            setTimeout(function () {
                _this.resizeAllCulumn();
                _this.slickContainer.fadeTo(100, 1);
            }, 100);
        };
        GridBase.prototype.resizeAllCulumn = function () {
            this.isAutosized = true;
            var gridContainerWidth = this.slickContainer.width();
            if (gridContainerWidth == 0) {
                gridContainerWidth = this.element.closest('.s-Dialog').width() - 55;
            }
            this.slickGrid.setOptions({ forceFitColumns: false });
            var allVisibleColumns = this.autoColumnSizePlugin.resizeAllColumns().filter(function (f) { return f.visible != false; }); // this.allColumns;
            var allVisibleColumnWidth = 0;
            allVisibleColumns.map(function (m) { return m.width; }).forEach(function (e) { return allVisibleColumnWidth += e; });
            if (allVisibleColumnWidth > gridContainerWidth) {
                this.autoColumnSizePlugin.resizeAllColumns();
            }
            else if (allVisibleColumnWidth < gridContainerWidth) {
                this.autoColumnSizePlugin.resizeAllColumns();
                var fixedSizeColumns_1 = [];
                var resizableColumns_1 = [];
                allVisibleColumns.forEach(function (c) {
                    if (c.minWidth == c.maxWidth) {
                        fixedSizeColumns_1.push(c);
                        c.width = c.maxWidth;
                    }
                    else if (c.sourceItem) {
                        if (c.sourceItem.formatterType == String("Number")) {
                            fixedSizeColumns_1.push(c);
                        }
                        else if (c.sourceItem.filteringType == String("Enum")) {
                            fixedSizeColumns_1.push(c);
                            if (c.width < 80)
                                c.width = 80;
                        }
                        else if (c.sourceItem.formatterType == String("Date")) {
                            fixedSizeColumns_1.push(c);
                            if (c.width < 80)
                                c.width = 80;
                        }
                        else if (c.sourceItem.formatterType == String("DateTime")) {
                            fixedSizeColumns_1.push(c);
                            if (c.width < 140)
                                c.width = 140;
                        }
                        else if (c.sourceItem.formatterType == String("Checkbox")) {
                            fixedSizeColumns_1.push(c);
                        }
                        else {
                            resizableColumns_1.push(c);
                        }
                    }
                    else {
                        resizableColumns_1.push(c);
                    }
                });
                if (resizableColumns_1.length == 0) {
                    fixedSizeColumns_1 = [];
                    resizableColumns_1 = [];
                    allVisibleColumns.forEach(function (c) {
                        if (c.minWidth == c.maxWidth) {
                            fixedSizeColumns_1.push(c);
                            c.width = c.maxWidth;
                        }
                        else {
                            resizableColumns_1.push(c);
                        }
                    });
                }
                var fixedSizeColumnsWidth_1 = 0;
                fixedSizeColumns_1.map(function (m) { return m.width; }).forEach(function (e) { return fixedSizeColumnsWidth_1 += e; });
                var stretchableGridAreaWidth_1 = gridContainerWidth - fixedSizeColumnsWidth_1 - 18;
                var resizableColumnsWidth_1 = 0;
                resizableColumns_1
                    .map(function (m) { return m.width; })
                    .forEach(function (e) { return resizableColumnsWidth_1 += e; });
                resizableColumns_1.forEach(function (c) {
                    c.width = c.width * (stretchableGridAreaWidth_1 / resizableColumnsWidth_1);
                });
                this.slickGrid.setColumns(allVisibleColumns);
                this.slickGrid.onColumnsResized.notify();
            }
            this.setItems(this.getItems());
        };
        GridBase.prototype.getSlickOptions = function () {
            var opt = _super.prototype.getSlickOptions.call(this);
            opt.forceFitColumns = true;
            opt.enableTextSelectionOnCells = true;
            opt.enableCellNavigation = true;
            opt.asyncEditorLoading = false;
            opt.autoEdit = true;
            return opt;
        };
        GridBase.prototype.onClick = function (e, row, cell) {
            _super.prototype.onClick.call(this, e, row, cell);
            if (e.isDefaultPrevented())
                return;
            var item = this.itemAt(row);
            var recordId = item[this.getIdProperty()];
            var target = $(e.target);
            // if user clicks "i" element, e.g. icon
            if (target.parent().hasClass('inline-action') || target.parent().hasClass('inline-btn'))
                target = target.parent();
            if (target.hasClass('inline-action') || target.hasClass('inline-btn')) {
                //e.preventDefault();
                this.onInlineActionClick(target, recordId, item);
            }
        };
        GridBase.prototype.onInlineActionClick = function (target, recordId, item) {
            var _this = this;
            if (target.hasClass('delete-row')) {
                Q.confirm('Delete record?', function () {
                    var o = _this;
                    if (o.deleteEntity) {
                        o.deleteEntity(recordId);
                    }
                    else {
                        Q.serviceRequest(_this.getService() + '/Delete', { EntityId: recordId }, function (response) {
                            _this.refresh();
                        });
                    }
                });
            }
            else if (target.hasClass('view-details')) {
                this.editItem(recordId);
            }
        };
        GridBase.prototype.onViewProcessData = function (response) {
            var _this = this;
            var r = _super.prototype.onViewProcessData.call(this, response);
            var items = r.Entities;
            var grouping_levels = this.view.getGrouping();
            if (grouping_levels.length == 0) {
                for (var i = 0; i < items.length; i++) {
                    items[i].RowNum = response.Skip + i + 1;
                }
            }
            else if (grouping_levels.length = 1) {
                var groups_1 = this.view.getGroups();
                var generateRowNumber = function () {
                    groups_1 = _this.view.getGroups();
                    var _loop_1 = function (gi) {
                        var rows = groups_1[gi].rows;
                        var _loop_2 = function (i) {
                            var item = items.filter(function (f) { return f.Id == rows[i].Id; })[0];
                            if (item)
                                item.RowNum = i + 1;
                        };
                        for (var i = 0; i < rows.length; i++) {
                            _loop_2(i);
                        }
                    };
                    for (var gi = 0; gi < groups_1.length; gi++) {
                        _loop_1(gi);
                    }
                };
                if (groups_1.length == 0) {
                    setTimeout(generateRowNumber);
                }
                else {
                    generateRowNumber();
                }
            }
            return r;
        };
        return GridBase;
    }(Serenity.EntityGrid));
    GridBase = __decorate([
        Serenity.Decorators.filterable()
    ], GridBase);
    _Ext.GridBase = GridBase;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ReportGridBase = (function (_super) {
        __extends(ReportGridBase, _super);
        function ReportGridBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ReportGridBase.prototype.getButtons = function () {
            var buttons = _super.prototype.getButtons.call(this);
            buttons.splice(0, 1);
            return buttons;
        };
        ReportGridBase.prototype.getColumns = function () {
            var columns = _super.prototype.getColumns.call(this);
            columns.splice(0, 1);
            return columns;
        };
        return ReportGridBase;
    }(_Ext.GridBase));
    ReportGridBase = __decorate([
        Serenity.Decorators.filterable()
    ], ReportGridBase);
    _Ext.ReportGridBase = ReportGridBase;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var DialogBase = (function (_super) {
        __extends(DialogBase, _super);
        function DialogBase(opt) {
            var _this = _super.call(this, opt) || this;
            _this.isReadOnly = false;
            _this.element.fadeTo(0, 0);
            _Ext.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
            return _this;
        }
        DialogBase.prototype.updateInterface = function () {
            _super.prototype.updateInterface.call(this);
            this.setReadOnly(this.isReadOnly);
            if (q.hideCategoyLinksBarInPropertyDialog == true) {
                this.element.find('.category-links').hide();
            }
        };
        DialogBase.prototype.onDialogOpen = function () {
            _super.prototype.onDialogOpen.call(this);
            this.fullContentArea();
            this.element.fadeTo(100, 1);
        };
        DialogBase.prototype.setReadOnly = function (value) {
            this.isReadOnly = value;
            if (this.isReadOnly == true) {
                this.saveAndCloseButton.toggleClass('disabled', this.isReadOnly);
                this.applyChangesButton.toggleClass('disabled', this.isReadOnly);
                this.deleteButton.toggleClass('disabled', this.isReadOnly);
                this.cloneButton.toggleClass('disabled', this.isReadOnly);
                this.undeleteButton.toggleClass('disabled', this.isReadOnly);
                this.toolbar.findButton('btn-replace-row').addClass('disabled');
                // remove required asterisk (*)
                this.element.find('sup').toggle(this.isReadOnly);
                for (var editor in this.form) {
                    if (this.form[editor].widgetName) {
                        Serenity.EditorUtils.setReadOnly(this.form[editor], this.isReadOnly);
                    }
                }
            }
        };
        DialogBase.prototype.getToolbarButtons = function () {
            var buttons = _super.prototype.getToolbarButtons.call(this);
            //buttons.push({
            //    title: 'Refresh',
            //    icon: 'fa fa-refresh',
            //    onClick: () => {
            //        this.onRefreshClick();
            //    }
            //})
            //try {
            //    if (Q.Authorization.username.indexOf('admin') >= 0) {
            //        if (Q.isEmptyOrNull(this.getService()) == false) {
            //            buttons.push({
            //                title: 'Replace',
            //                icon: 'fa fa-trash-o',
            //                cssClass:'btn-replace-row',
            //                onClick: () => {
            //                    let idProperty = this['getIdProperty']();
            //                    let nameProperty = this['getNameProperty']();
            //                    let entityId = this.entity[idProperty];
            //                    let entityName = this.entity[nameProperty];
            //                    if (entityId) {
            //                        Q.serviceRequest(this.getService() + '/List', {}, (response: Serenity.ListResponse<any>) => {
            //                            let entityList = response.Entities;
            //                            let dlg = new ReplaceRowDialog({
            //                                FormKey: this.getFormKey(),
            //                                IdProperty: idProperty,
            //                                NameProperty: nameProperty,
            //                                EntityTypeTitle: this.getEntitySingular(),
            //                                DeletedEntityName: entityName,
            //                                DeletedEntityId: entityId,
            //                            },
            //                                entityList);
            //                            dlg.dialogOpen();
            //                            this.dialogClose();
            //                        });
            //                    }
            //                }
            //            })
            //        }
            //        buttons.push({
            //            title: 'Change Log',
            //            icon: 'fa fa-history',
            //            onClick: () => {
            //                let entityId = this.entity[this.getIdProperty()];
            //                if (entityId) {
            //                    let dlg = new AuditLogViewerDialog({ FormKey: this.getFormKey(), EntityId: entityId });
            //                    dlg.dialogOpen();
            //                } else {
            //                    Q.alert('No change log found for this entity.')
            //                }
            //            }
            //        })
            //    }
            //} catch (e) { }
            return buttons;
        };
        DialogBase.prototype.onRefreshClick = function () {
        };
        DialogBase.prototype.getSaveState = function () {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        };
        DialogBase.prototype.onSaveSuccess = function (response) {
            _super.prototype.onSaveSuccess.call(this, response);
            isPageRefreshRequired = true;
            //Q.reloadLookup(this.getLookupKey());
        };
        DialogBase.prototype.loadResponse = function (data) {
            _super.prototype.loadResponse.call(this, data);
            this.loadedState = this.getSaveState();
        };
        DialogBase.prototype.maximize = function () {
            this.element.closest(".ui-dialog").find(".ui-icon-maximize-window").click();
        };
        DialogBase.prototype.fullContentArea = function () {
            this.setDialogSize();
        };
        // set the dialog size relative to content area (to shrink use negative value)
        DialogBase.prototype.setDialogSize = function (width, height, top, left) {
            var _this = this;
            var $content = $('section.content');
            var dialogElement = this.element ? this.element.closest(".ui-dialog") : $(".ui-dialog");
            if ($content.length > 0) {
                try {
                    var dwidth = $content.width() + 30 + (width || 0);
                    var dheight = $content.height() + (height || 30);
                    this.element.dialog("option", "width", dwidth);
                    this.element.dialog("option", "height", dheight);
                    //Serenity.DialogExtensions.dialogResizable(this.element, dwidth, dheight);
                    this.element.find('.categories').height(dheight - 110); //.flexHeightOnly(1);
                }
                catch (e) {
                }
                dialogElement.css({
                    left: $content.position().left + (left || 0),
                    top: (top || 50),
                });
            }
            setTimeout(function () {
                _this.afterSetDialogSize();
            }, 200);
        };
        DialogBase.prototype.afterSetDialogSize = function () {
        };
        return DialogBase;
    }(Serenity.EntityDialog));
    DialogBase = __decorate([
        Serenity.Decorators.responsive(),
        Serenity.Decorators.maximizable()
    ], DialogBase);
    _Ext.DialogBase = DialogBase;
})(_Ext || (_Ext = {}));
/// <reference path="../Bases/DialogBase.ts" />
var _Ext;
(function (_Ext) {
    var EditorDialogBase = (function (_super) {
        __extends(EditorDialogBase, _super);
        function EditorDialogBase() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        EditorDialogBase.prototype.getIdProperty = function () { return "__id"; };
        EditorDialogBase.prototype.destroy = function () {
            this.onSave = null;
            this.onDelete = null;
            _super.prototype.destroy.call(this);
        };
        EditorDialogBase.prototype.updateInterface = function () {
            _super.prototype.updateInterface.call(this);
            this.saveAndCloseButton.find('.button-inner').text(this.isNew() ? 'Add' : 'Apply');
            // apply changes button doesn't work properly with in-memory grids yet
            if (this.applyChangesButton) {
                this.applyChangesButton.hide();
            }
            if (this.parentEditor.isReadOnly == true) {
                this.saveAndCloseButton.addClass('disabled');
                this.deleteButton.addClass('disabled');
                Serenity.EditorUtils.setReadonly(this.element.find('.editor'), true);
                // remove required asterisk (*)
                this.element.find('sup').hide();
            }
        };
        EditorDialogBase.prototype.saveHandler = function (options, callback) {
            this.onSave && this.onSave(options, callback);
        };
        EditorDialogBase.prototype.deleteHandler = function (options, callback) {
            this.onDelete && this.onDelete(options, callback);
        };
        return EditorDialogBase;
    }(_Ext.DialogBase));
    EditorDialogBase = __decorate([
        Serenity.Decorators.registerClass()
    ], EditorDialogBase);
    _Ext.EditorDialogBase = EditorDialogBase;
})(_Ext || (_Ext = {}));
/// <reference path="../Bases/GridBase.ts" />
var _Ext;
(function (_Ext) {
    var GridEditorBase = (function (_super) {
        __extends(GridEditorBase, _super);
        function GridEditorBase(container) {
            var _this = _super.call(this, container) || this;
            _this.nextId = 1;
            return _this;
            //this.autoColumnSizePlugin.resizeAllColumns();
        }
        GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
        GridEditorBase.prototype.getQuickFilters = function () {
            return [];
        };
        GridEditorBase.prototype.id = function (entity) {
            return entity[this.getIdProperty()];
        };
        GridEditorBase.prototype.save = function (opt, callback) {
            var _this = this;
            var request = opt.request;
            var row = Q.deepClone(request.Entity);
            var id = this.id(row);
            if (id == null) {
                row[this.getIdProperty()] = "`" + this.nextId++;
            }
            if (!this.validateEntity(row, id)) {
                return;
            }
            var items = this.view.getItems().slice();
            if (id == null) {
                items.push(row);
            }
            else {
                var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                items[index] = Q.deepClone({}, items[index], row);
            }
            this.setEntities(items);
            callback({});
        };
        GridEditorBase.prototype.deleteEntity = function (id) {
            this.view.deleteItem(id);
            setTimeout(this.onItemsChanged);
            return true;
        };
        GridEditorBase.prototype.validateEntity = function (row, id) {
            return true;
        };
        GridEditorBase.prototype.setEntities = function (items) {
            var i = 1;
            items.forEach(function (row) {
                row['RowNum'] = i++;
            });
            this.view.setItems(items, true);
            setTimeout(this.onItemsChanged);
            this.refresh();
        };
        GridEditorBase.prototype.getNewEntity = function () {
            return {};
        };
        GridEditorBase.prototype.getButtons = function () {
            var _this = this;
            return [{
                    title: 'Add ' + this.getItemName(),
                    cssClass: 'add-button',
                    onClick: function () { _this.addButtonClick(); }
                }];
        };
        GridEditorBase.prototype.addButtonClick = function () {
            var _this = this;
            this.createEntityDialog(this.getItemType(), function (dlg) {
                var dialog = dlg;
                dialog.parentEditor = _this;
                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
            });
        };
        GridEditorBase.prototype.editItem = function (entityOrId) {
            var _this = this;
            var id = entityOrId;
            var item = this.view.getItemById(id);
            this.createEntityDialog(this.getItemType(), function (dlg) {
                var dialog = dlg;
                dialog.onDelete = function (opt, callback) {
                    if (!_this.deleteEntity(id)) {
                        return;
                    }
                    callback({});
                };
                dialog.parentEditor = _this;
                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                dialog.loadEntityAndOpenDialog(item);
            });
            ;
        };
        GridEditorBase.prototype.getEditValue = function (property, target) {
            target[property.name] = this.value;
        };
        GridEditorBase.prototype.setEditValue = function (source, property) {
            this.value = source[property.name];
        };
        Object.defineProperty(GridEditorBase.prototype, "value", {
            get: function () {
                var p = this.getIdProperty();
                this.slickGrid.getEditController().commitCurrentEdit();
                return this.view.getItems().map(function (x) {
                    var y = Q.deepClone(x);
                    var id = y[p];
                    if (id && id.toString().charAt(0) == '`')
                        delete y[p];
                    if (y['RowNum'])
                        delete y['RowNum'];
                    return y;
                });
            },
            set: function (value) {
                var _this = this;
                var p = this.getIdProperty();
                var val = value || []; //this.onViewProcessData({ Entities: value || [], Skip: 0 }).Entities; // to generate serial no.
                this.setEntities(val.map(function (x) {
                    var y = Q.deepClone(x);
                    if (y[p] == null) {
                        y[p] = "`" + _this.nextId++;
                    }
                    return y;
                }));
            },
            enumerable: true,
            configurable: true
        });
        GridEditorBase.prototype.getGridCanLoad = function () {
            return false;
        };
        GridEditorBase.prototype.usePager = function () {
            return false;
        };
        GridEditorBase.prototype.getInitialTitle = function () {
            return null;
        };
        GridEditorBase.prototype.createToolbarExtensions = function () {
            var _this = this;
            //super.createToolbarExtensions();
            Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                _this.view.setItems(_this.view.getItems(), true);
            });
        };
        GridEditorBase.prototype.onViewFilter = function (row) {
            if (!_super.prototype.onViewFilter.call(this, row)) {
                return false;
            }
            if (this.searchText) {
                return this.matchContains(row);
            }
            return true;
        };
        GridEditorBase.prototype.matchContains = function (item) {
            var result = false;
            for (var prop in item) {
                result = Select2.util.stripDiacritics(String(item[prop] || '')).toLowerCase().indexOf(this.searchText) >= 0;
                if (result == true) {
                    return result;
                }
            }
            return result;
        };
        GridEditorBase.prototype.enableFiltering = function () { return false; };
        GridEditorBase.prototype.onViewSubmit = function () { return false; };
        GridEditorBase.prototype.get_readOnly = function () {
            return this.isReadOnly;
        };
        GridEditorBase.prototype.set_readOnly = function (value) {
            this.isReadOnly = value;
            if (value == true) {
                this.element.find('.add-button').addClass('disabled');
            }
            else {
                this.element.find('.add-button').removeClass('disabled');
            }
        };
        GridEditorBase.prototype.getSlickOptions = function () {
            var opt = _super.prototype.getSlickOptions.call(this);
            opt.forceFitColumns = false;
            opt.autoHeight = true; // If you need to show footer, you have to do opt.autoHeight = false
            return opt;
        };
        //custom events
        GridEditorBase.prototype.onItemsChanged = function () {
        };
        return GridEditorBase;
    }(_Ext.GridBase));
    GridEditorBase = __decorate([
        Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly]),
        Serenity.Decorators.editor(),
        Serenity.Decorators.element("<div/>")
    ], GridEditorBase);
    _Ext.GridEditorBase = GridEditorBase;
})(_Ext || (_Ext = {}));
/// <reference path="../Bases/GridBase.ts" />
/// <reference path="../Bases/ReportGridBase.ts" />
/// <reference path="../Bases/DialogBase.ts" />
/// <reference path="../Editors/EditorDialogBase.ts" />
/// <reference path="../Editors/GridEditorBase.ts" />
var isPageRefreshRequired;
//const nameof = <T>(name: keyof T) => name;
var nameofFactory = function () { return function (name) { return name; }; };
//usage const nameof = nameofFactory<Edoc.RevenueReportModel>();
var q;
(function (q) {
    function isCosmicThemeApplied() {
        return document.body.className.indexOf('cosmic') >= 0;
    }
    q.isCosmicThemeApplied = isCosmicThemeApplied;
    function formatDecimal(value) {
        var title = Serenity.NumberFormatter.format(value, '#,##0.00');
        return title;
    }
    q.formatDecimal = formatDecimal;
    function formatInt(value) {
        var title = Serenity.NumberFormatter.format(value, '#,##0');
        return title;
    }
    q.formatInt = formatInt;
    // Check numeric or not then return value, if NAN then return zero(0)
    function ToNumber(value) {
        return isNaN(value) ? 0 : value;
    }
    q.ToNumber = ToNumber;
    function ToBool(value) {
        return value == 'true' ? true : false;
    }
    q.ToBool = ToBool;
    //colorDepth should be within '0123456789ABCDEF'
    function getRandomColor(hexLetters) {
        var letters = hexLetters; // '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            var letterIndex = Math.floor((Math.random()) * letters.length);
            if (letterIndex > 15)
                letterIndex = 15;
            if (letterIndex < 0)
                letterIndex = 0;
            color += letters[letterIndex];
        }
        return color;
    }
    q.getRandomColor = getRandomColor;
})(q || (q = {}));
var q;
(function (q) {
    q.queryString = {};
    q.jsPDFHeaderImageData = null;
    q.jsPDFHeaderTitle = 'Report Title';
    q.useSerenityInlineEditors = true;
    q.hideCategoyLinksBarInPropertyDialog = false;
    q.DefaultMainGridOptions = {
        AutoColumnSize: true,
        FadeInEffectWhenInit: true,
        ShowAnyInEqualityFilterWithTextValue: true,
    };
    q.DefaultEditorGridOptions = {
        AutoColumnSize: true,
        FadeInEffectWhenInit: true,
        ShowAnyInEqualityFilterWithTextValue: true,
    };
    q.DefaultEntityDialogOptions = {
        AutoFitContentArea: true,
    };
    q.DefaultEditorDialogOptions = {
        AutoFitContentArea: false,
    };
    //date time
    q.fiscalYearMonths = [6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5];
})(q || (q = {}));
var _Ext;
(function (_Ext) {
    var AuditLogActionTypeFormatter = AuditLogActionTypeFormatter_1 = (function () {
        function AuditLogActionTypeFormatter() {
        }
        AuditLogActionTypeFormatter.format = function (ctx) {
            var item = ctx.item;
            var klass = '';
            if (item.ActionType == _Ext.AuditActionType.Update) {
                klass = 'warning';
            }
            else if (item.ActionType == _Ext.AuditActionType.Delete) {
                klass = 'danger';
            }
            else {
                klass = 'default';
            }
            return "<span class=\"label label-" + klass + "\">" + _Ext.AuditActionType[item.ActionType] + "</span>";
        };
        AuditLogActionTypeFormatter.prototype.format = function (ctx) {
            return AuditLogActionTypeFormatter_1.format(ctx);
        };
        return AuditLogActionTypeFormatter;
    }());
    AuditLogActionTypeFormatter = AuditLogActionTypeFormatter_1 = __decorate([
        Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter])
    ], AuditLogActionTypeFormatter);
    _Ext.AuditLogActionTypeFormatter = AuditLogActionTypeFormatter;
    var AuditLogActionTypeFormatter_1;
})(_Ext || (_Ext = {}));
/// <reference path="../Bases/DialogBase.ts" />
var _Ext;
(function (_Ext) {
    var AuditLogDialog = (function (_super) {
        __extends(AuditLogDialog, _super);
        function AuditLogDialog() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.form = new _Ext.AuditLogForm(_this.idPrefix);
            return _this;
        }
        AuditLogDialog.prototype.getFormKey = function () { return _Ext.AuditLogForm.formKey; };
        AuditLogDialog.prototype.getIdProperty = function () { return _Ext.AuditLogRow.idProperty; };
        AuditLogDialog.prototype.getLocalTextPrefix = function () { return _Ext.AuditLogRow.localTextPrefix; };
        AuditLogDialog.prototype.getNameProperty = function () { return _Ext.AuditLogRow.nameProperty; };
        AuditLogDialog.prototype.getService = function () { return _Ext.AuditLogService.baseUrl; };
        AuditLogDialog.prototype.afterLoadEntity = function () {
            _super.prototype.afterLoadEntity.call(this);
            usingJsonDiffPatch();
            //showing diff visually
            var left = JSON.parse(this.entity.OldEntity);
            if (left) {
                if (left.PlantJson) {
                    left.PlantInfo = JSON.parse(left.PlantJson);
                    delete (left.PlantJson);
                }
                delete (left.Id);
                delete (left.IDate);
                delete (left.IUser);
                delete (left.EDate);
                delete (left.EUser);
            }
            var right = JSON.parse(this.entity.NewEntity);
            if (right) {
                if (right.PlantJson) {
                    right.PlantInfo = JSON.parse(right.PlantJson);
                    delete (right.PlantJson);
                }
            }
            var delta = jsondiffpatch.diff(left, right);
            // beautiful html diff
            this.form.Differences.value = jsondiffpatch.formatters.html.format(delta);
        };
        return AuditLogDialog;
    }(_Ext.DialogBase));
    AuditLogDialog = __decorate([
        Serenity.Decorators.registerClass(),
        Serenity.Decorators.responsive()
    ], AuditLogDialog);
    _Ext.AuditLogDialog = AuditLogDialog;
})(_Ext || (_Ext = {}));
/// <reference path="../Bases/GridBase.ts" />
var _Ext;
(function (_Ext) {
    var AuditLogGrid = (function (_super) {
        __extends(AuditLogGrid, _super);
        function AuditLogGrid(container) {
            return _super.call(this, container) || this;
        }
        AuditLogGrid.prototype.getColumnsKey = function () { return '_Ext.AuditLog'; };
        AuditLogGrid.prototype.getDialogType = function () { return _Ext.AuditLogDialog; };
        AuditLogGrid.prototype.getIdProperty = function () { return _Ext.AuditLogRow.idProperty; };
        AuditLogGrid.prototype.getLocalTextPrefix = function () { return _Ext.AuditLogRow.localTextPrefix; };
        AuditLogGrid.prototype.getService = function () { return _Ext.AuditLogService.baseUrl; };
        return AuditLogGrid;
    }(_Ext.GridBase));
    AuditLogGrid = __decorate([
        Serenity.Decorators.registerClass()
    ], AuditLogGrid);
    _Ext.AuditLogGrid = AuditLogGrid;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var AuditLogViewer = (function () {
        function AuditLogViewer(el, entityVersions) {
            this.el = '.content-wrapper';
            this.data = {
                entityVersions: []
            };
            this.mounted = function () {
            };
            this.computed = {
                test: function () {
                    return 'test computed';
                }
            };
            this.filters = {
                filterByYardId: function () {
                    return [];
                }
            };
            this.methods = {
                showDiff: function (versionInfo) {
                    //showing diff visually
                    var left = versionInfo.OldEntity;
                    var right = versionInfo.NewEntity;
                    var delta = jsondiffpatch.diff(left, right);
                    // beautiful html diff
                    document.getElementById('visualizeDiff').innerHTML = jsondiffpatch.formatters.html.format(delta, left);
                },
                getDiff: function (versionInfo) {
                    //showing diff visually
                    var left = versionInfo.OldEntity;
                    var right = versionInfo.NewEntity;
                    var delta = jsondiffpatch.diff(left, right);
                    // beautiful html diff
                    return jsondiffpatch.formatters.html.format(delta);
                    //var delta = jsondiffpatch.diff(left, right);
                    //// left is optional, if specified unchanged values will be visible too
                    //document.getElementBy('the-diff').innerHTML = jsondiffpatch.formatters.html.format(delta, left);
                    //// Also you can dinamically show/hide unchanged values
                    //jsondiffpatch.formatters.html.showUnchanged();
                    //jsondiffpatch.formatters.html.hideUnchanged();
                    //// these will also adjust array move arrows (SVG), which is useful if something alters the html layout
                }
            };
            this.el = el || this.el;
            this.data.entityVersions = entityVersions;
        }
        AuditLogViewer.prototype.destroyed = function () {
        };
        return AuditLogViewer;
    }());
    _Ext.AuditLogViewer = AuditLogViewer;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var AuditLogViewerDialog = (function (_super) {
        __extends(AuditLogViewerDialog, _super);
        function AuditLogViewerDialog(request) {
            var _this = _super.call(this) || this;
            _this.request = request;
            _this.dialogTitle = 'Audit Log Viewer';
            _this.onDialogOpen = function () {
                _Ext.AuditLogViewerService.List(_this.request, function (response) {
                    response.EntityVersions.forEach(function (e) {
                        delete (e.Id);
                        e.OldEntity = JSON.parse(e.OldEntity);
                        e.NewEntity = JSON.parse(e.NewEntity);
                        delete (e.OldEntity.Id);
                        delete (e.OldEntity.IDate);
                        delete (e.OldEntity.IUser);
                        delete (e.OldEntity.EDate);
                        delete (e.OldEntity.EUser);
                        e.ActionType = _Ext.AuditActionType[e.ActionType];
                        e.isShowed = false;
                    });
                    new Vue(new _Ext.AuditLogViewer('#' + _this.idPrefix + 'dialogContent', response.EntityVersions));
                });
            };
            return _this;
        }
        AuditLogViewerDialog.prototype.getTemplateName = function () {
            usingVuejs();
            usingJsonDiffPatch();
            return '_Ext.AuditLogViewer';
        };
        return AuditLogViewerDialog;
    }(Serenity.TemplatedDialog));
    AuditLogViewerDialog = __decorate([
        Serenity.Decorators.registerClass(),
        Serenity.Decorators.maximizable()
    ], AuditLogViewerDialog);
    _Ext.AuditLogViewerDialog = AuditLogViewerDialog;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var AutoCompleteEditor = (function (_super) {
        __extends(AutoCompleteEditor, _super);
        function AutoCompleteEditor(input, options) {
            var _this = _super.call(this, input) || this;
            _this.options = options;
            input.bind('change', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e)) {
                    return;
                }
            });
            setTimeout(function () {
                _this.bindAutoComplete(input);
            }, 1000);
            return _this;
        }
        AutoCompleteEditor.prototype.bindAutoComplete = function (input) {
            var opt = this.options;
            var source = opt.sourceArray;
            if (opt.sourceCSV) {
                source = opt.sourceCSV.split(',');
            }
            else if (this.options.lookupKey) {
                var lookup_1 = Q.getLookup(opt.lookupKey);
                source = lookup_1.items.map(function (m) { return m[lookup_1.textField]; });
            }
            input.autocomplete({
                minLength: opt.minSearchLength || 1,
                autoFocus: true,
                source: source,
                focus: function (event, ui) {
                    $(".ui-helper-hidden-accessible").hide(); //fix issue with the selected data showing up on webpage
                    event.preventDefault();
                    return false;
                },
            });
            input.data("ui-autocomplete")._renderItem = function (ul, item) {
                return $("<li>")
                    .append("<a>" + item.label + "</a>")
                    .appendTo(ul);
            };
        };
        return AutoCompleteEditor;
    }(Serenity.StringEditor));
    AutoCompleteEditor = __decorate([
        Serenity.Decorators.registerEditor()
    ], AutoCompleteEditor);
    _Ext.AutoCompleteEditor = AutoCompleteEditor;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ColorEditor = (function (_super) {
        __extends(ColorEditor, _super);
        function ColorEditor(container) {
            var _this = _super.call(this, container) || this;
            try {
                _this.element.colorpicker({ format: "hex" });
            }
            catch (e) { }
            return _this;
        }
        ColorEditor.prototype.getTemplate = function () {
            usingBootstrapColorPicker();
            return "<div class=\"input-group colorpicker-component\">\n                        <input type=\"text\" value=\"#00AABB\" class=\"form-control\" />\n                        <span class=\"input-group-addon\"><i></i></span>\n                    </div>";
        };
        ;
        ColorEditor.prototype.getEditValue = function (property, target) {
            try {
                var editVal = this.element.colorpicker().data().color;
                target[property.name] = editVal;
            }
            catch (e) { }
        };
        ColorEditor.prototype.setEditValue = function (source, property) {
            var val = source[property.name];
            //this.element.children('input').val(val);
            try {
                this.element.data('colorpicker').setValue(val);
            }
            catch (e) { }
        };
        return ColorEditor;
    }(Serenity.TemplatedWidget));
    ColorEditor = __decorate([
        Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
        Serenity.Decorators.editor(),
        Serenity.Decorators.element("<div/>")
    ], ColorEditor);
    _Ext.ColorEditor = ColorEditor;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var DateTimePickerEditor = (function (_super) {
        __extends(DateTimePickerEditor, _super);
        function DateTimePickerEditor(container) {
            var _this = _super.call(this, container) || this;
            usingJqueryUITimepickerAddon();
            _this.element.datetimepicker({
                timeInput: true,
                controlType: 'select',
                oneLine: true,
                timeFormat: "HH:mm",
                showOn: "button"
            });
            return _this;
        }
        DateTimePickerEditor.prototype.getEditValue = function (property, target) { target[property.name] = this.value; };
        DateTimePickerEditor.prototype.setEditValue = function (source, property) { this.value = source[property.name]; };
        Object.defineProperty(DateTimePickerEditor.prototype, "value", {
            //http://trentrichardson.com/examples/timepicker
            get: function () {
                return Q.formatDate(this.valueAsDate, 'yyyy-MM-ddTHH:mm');
            },
            set: function (val) {
                this.valueAsDate = Q.parseISODateTime(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTimePickerEditor.prototype, "valueAsDate", {
            get: function () {
                var val = this.element.datetimepicker('getDate');
                return val;
            },
            set: function (val) {
                this.element.datetimepicker('setDate', val);
            },
            enumerable: true,
            configurable: true
        });
        DateTimePickerEditor.prototype.get_readOnly = function () {
            return this.element.hasClass('readonly');
        };
        DateTimePickerEditor.prototype.set_readOnly = function (value) {
            if (value == true) {
                this.element.datetimepicker("option", "disabled", true);
                this.element.addClass('readonly');
                this.element.attr("disabled");
            }
            else {
                this.element.datetimepicker("option", "disabled", false);
                this.element.removeClass('readonly');
                this.element.removeAttr("disabled");
            }
        };
        DateTimePickerEditor.prototype.set_minDate = function (date) {
            this.element.datetimepicker('option', 'minDate', date);
        };
        DateTimePickerEditor.prototype.set_maxDate = function (date) {
            this.element.datetimepicker('option', 'maxDate', date);
        };
        DateTimePickerEditor.prototype.set_minDateTime = function (date) {
            this.element.datetimepicker('option', 'minDateTime', date);
        };
        DateTimePickerEditor.prototype.set_maxDateTime = function (date) {
            this.element.datetimepicker('option', 'maxDateTime', date);
        };
        return DateTimePickerEditor;
    }(Serenity.Widget));
    DateTimePickerEditor = __decorate([
        Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly]),
        Serenity.Decorators.editor(),
        Serenity.Decorators.element("<input/>")
    ], DateTimePickerEditor);
    _Ext.DateTimePickerEditor = DateTimePickerEditor;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var EmptyLookupEditor = (function (_super) {
        __extends(EmptyLookupEditor, _super);
        function EmptyLookupEditor(container) {
            return _super.call(this, container, null) || this;
        }
        return EmptyLookupEditor;
    }(Serenity.Select2Editor));
    EmptyLookupEditor = __decorate([
        Serenity.Decorators.registerEditor()
    ], EmptyLookupEditor);
    _Ext.EmptyLookupEditor = EmptyLookupEditor;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var StaticTextBlock = (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            // remove required asterisk (*)
            _this.element.closest('.field').find('sup').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this._value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this._value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        Object.defineProperty(StaticTextBlock.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
                this.updateElementContent();
            },
            enumerable: true,
            configurable: true
        });
        return StaticTextBlock;
    }(Serenity.Widget));
    StaticTextBlock = __decorate([
        Serenity.Decorators.element("<div/>"),
        Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    ], StaticTextBlock);
    _Ext.StaticTextBlock = StaticTextBlock;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var TemplatedLookupEditor = (function (_super) {
        __extends(TemplatedLookupEditor, _super);
        function TemplatedLookupEditor(container) {
            return _super.call(this, container, null) || this;
        }
        TemplatedLookupEditor.prototype.getSelect2Options = function () {
            var opt = _super.prototype.getSelect2Options.call(this);
            opt.escapeMarkup = function (m) {
                return m;
            };
            opt.data = [{
                    id: 0,
                    text: 'enhancement',
                    html: '<div style="color:green">enhancement</div>'
                }, {
                    id: 1,
                    text: 'bug',
                    html: '<div style="color:red">bug</div><div><small>This is some small text on a new line</small></div>'
                }];
            opt.templateResult = function (data) {
                return data.html;
            };
            return opt;
        };
        return TemplatedLookupEditor;
    }(Serenity.Select2Editor));
    TemplatedLookupEditor = __decorate([
        Serenity.Decorators.registerEditor()
    ], TemplatedLookupEditor);
    _Ext.TemplatedLookupEditor = TemplatedLookupEditor;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var CardViewMixin = (function () {
        function CardViewMixin(options) {
            var _this = this;
            this.options = options;
            var u, f;
            var dg = this.dataGrid = options.grid;
            var idProperty = dg.getIdProperty();
            var getId = this.getId = function (item) { return item[idProperty]; };
            options.defaultViewType = options.defaultViewType || 'list';
            this.viewType = options.defaultViewType;
            var divViewSwitch = $('\n<div class="btn-group view-switch" data-toggle="buttons" style="float: right">\n    <label class="btn btn-default active" title="List View">\n        <i class="fa fa-th-list text-purple"><\/i>\n        <input type="radio" name="' + dg.element.attr("id") + '_ViewType" value="list" checked />\n    <\/label>\n    <label class="btn btn-default" title="Card View">\n        <i class="fa fa-th-large text-purple"><\/i>\n        <input type="radio" name="' + dg.element.attr("id") + '_ViewType" value="card" />    \n    <\/label>\n<\/div>')
                .prependTo(dg.element.find(".grid-title"));
            this.cardContainer = $('<div class="card-container" style="display: none;"><div class="card-items"><\/div><\/div>').insertAfter(dg.element.children(".grid-container"));
            divViewSwitch.find("input").change(function (e) {
                return _this.switchView($(e.target).val());
            });
            this.resizeCardView();
            dg.element.bind("layout", function () {
                return _this.resizeCardView();
            });
            dg.view.onDataChanged.subscribe(function () {
                _this.vm && _this.updateCardItems();
            });
            u = dg.getCurrentSettings;
            dg.getCurrentSettings = function (n) {
                var i = u.apply(dg, [n]);
                return i.viewType = divViewSwitch.find("input:checked").val(), i;
            };
            f = dg.restoreSettings;
            dg.restoreSettings = function (n, i) {
                var u, e, o, s;
                if (f.apply(dg, [n, i]),
                    n == null) {
                    if (u = this.getPersistanceStorage(),
                        u == null)
                        return;
                    if (e = Q.trimToNull(u.getItem(this.getPersistanceKey())),
                        !e)
                        return;
                    n = JSON.parse(e);
                }
                o = n.viewType || options.defaultViewType;
                s = divViewSwitch.find("input:checked").val() || options.defaultViewType;
                o != s && divViewSwitch.find("input").eq(o == "card" ? 1 : 0).click();
            };
        }
        CardViewMixin.prototype.switchView = function (viewType) {
            this.resizeCardView();
            var isCardView = viewType == "card";
            this.dataGrid.element.children(".card-container").toggle(isCardView);
            this.dataGrid.element.children(".grid-container").toggle(!isCardView);
            isCardView && this.updateCardItems();
            this.dataGrid.persistSettings();
        };
        CardViewMixin.prototype.updateCardItems = function () {
            if (this.vm)
                this.vm.items = this.dataGrid.getItems();
            else {
                usingVuejs();
                this.vm = new Vue({
                    el: this.cardContainer.children()[0],
                    template: this.options.containerTemplate ? "<div> " + this.options.containerTemplate + " </div>"
                        : "<div class=\"card-items\">\n    <div v-for=\"(item, index) in items\" class=\"" + (this.options.itemCssClass || 'col-sm-12 col-md-6 col-lg-4') + "\">\n        <div class=\"card-item\" style=\"" + this.options.itemCssStyle + "\">\n        " + this.options.itemTemplate + "\n        </div>\n    </div>\n</div>",
                    data: {
                        items: this.dataGrid.getItems()
                    },
                    methods: this.options.methods
                });
            }
        };
        CardViewMixin.prototype.resizeCardView = function () {
            var gridContainer = this.dataGrid.element.children(".grid-container"), width = this.dataGrid.element.width(), height = gridContainer.height();
            this.dataGrid.element.children(".card-container").css({
                width: width + "px",
                height: height + "px"
            });
        };
        return CardViewMixin;
    }());
    _Ext.CardViewMixin = CardViewMixin;
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ExcelExportHelper;
    (function (ExcelExportHelper) {
        function createToolButton(options) {
            return {
                hint: Q.coalesce(options.title, 'Excel'),
                title: Q.coalesce(options.hint, ''),
                cssClass: 'export-xlsx-button',
                onClick: function () {
                    if (!options.onViewSubmit()) {
                        return;
                    }
                    var grid = options.grid;
                    var request = Q.deepClone(grid.getView().params);
                    request.Take = 0;
                    request.Skip = 0;
                    var sortBy = grid.getView().sortBy;
                    if (sortBy) {
                        request.Sort = sortBy;
                    }
                    request.IncludeColumns = [];
                    var columns = grid.getGrid().getColumns();
                    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                        var column = columns_1[_i];
                        request.IncludeColumns.push(column.id || column.field);
                    }
                    Q.postToService({ service: options.service, request: request, target: '_blank' });
                },
                separator: options.separator
            };
        }
        ExcelExportHelper.createToolButton = createToolButton;
    })(ExcelExportHelper = _Ext.ExcelExportHelper || (_Ext.ExcelExportHelper = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var PdfExportHelper;
    (function (PdfExportHelper) {
        function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
            return srcColumns.map(function (src) {
                var col = {
                    dataKey: src.id || src.field,
                    title: src.name || ''
                };
                if (columnTitles && columnTitles[col.dataKey] != null)
                    col.title = columnTitles[col.dataKey];
                var style = {};
                if ((src.cssClass || '').indexOf("align-right") >= 0)
                    style.halign = 'right';
                else if ((src.cssClass || '').indexOf("align-center") >= 0)
                    style.halign = 'center';
                columnStyles[col.dataKey] = style;
                return col;
            });
        }
        function toAutoTableData(entities, keys, srcColumns) {
            var el = document.createElement('span');
            var row = 0;
            return entities.map(function (item) {
                var dst = {};
                for (var cell = 0; cell < srcColumns.length; cell++) {
                    var src = srcColumns[cell];
                    var fld = src.field || '';
                    var key = keys[cell];
                    var txt = void 0;
                    var html = void 0;
                    if (src.formatter) {
                        html = src.formatter(row, cell, item[fld], src, item);
                    }
                    else if (src.format) {
                        html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                    }
                    else {
                        dst[key] = item[fld];
                        continue;
                    }
                    if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                        dst[key] = html;
                    else {
                        el.innerHTML = html;
                        if (el.children.length == 1 &&
                            $(el.children[0]).is(":input")) {
                            dst[key] = $(el.children[0]).val();
                        }
                        else if (el.children.length == 1 &&
                            $(el.children).is('.check-box')) {
                            dst[key] = $(el.children).hasClass("checked") ? "Yes" : "No";
                        }
                        else
                            dst[key] = el.textContent || '';
                    }
                }
                row++;
                return dst;
            });
        }
        function exportToPdf(options) {
            var g = options.grid;
            if (!options.onViewSubmit())
                return;
            includeAutoTable();
            var request = Q.deepClone(g.view.params);
            request.Take = 0;
            request.Skip = 0;
            var sortBy = g.view.sortBy;
            if (sortBy != null)
                request.Sort = sortBy;
            var gridColumns = g.slickGrid.getColumns();
            gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__" && x.name.length > 0; });
            request.IncludeColumns = [];
            for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                var column = gridColumns_1[_i];
                request.IncludeColumns.push(column.id || column.field);
            }
            Q.serviceCall({
                url: g.view.url,
                request: request,
                onSuccess: function (response) {
                    var doc = new jsPDF('l', 'pt');
                    var groupings = g.view.getGrouping(); //group fields
                    var groupingColumns = gridColumns.filter(function (f) { return groupings.some(function (s) { return s.getter == f.field; }) == true; });
                    var srcColumns = gridColumns.filter(function (f) { return groupings.some(function (s) { return s.getter == f.field; }) == false; });
                    var columnStyles = {};
                    var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                    var keys = columns.filter(function (f) { return groupings.some(function (s) { return s.getter == f; }) == false; }).map(function (x) { return x.dataKey; });
                    var totalPagesExp = "{{T}}";
                    var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                    var autoOptions = $.extend({
                        margin: { top: 40, left: 40, right: 40, bottom: pageNumbers ? 110 : 100 },
                        startY: 90,
                        styles: {
                            fontSize: 8,
                            overflow: 'linebreak',
                            cellPadding: 5,
                            valign: 'middle',
                            lineColor: 0
                        },
                        headerStyles: { fillColor: 255, textColor: 0, lineWidth: 1, fillStyle: 'S', halign: 'center', valign: 'middle' },
                        columnStyles: columnStyles
                    }, options.tableOptions);
                    ///region Title
                    {
                        if (q.jsPDFHeaderImageData) {
                            doc.addImage(q.jsPDFHeaderImageData, 'PNG', 40, 40, 60, 60);
                        }
                        doc.autoTable([q.jsPDFHeaderTitle], [], {
                            margin: { bottom: 10, left: 110 },
                            startY: options.titleTop || 45,
                            headerStyles: { fillColor: 255, textColor: 0 },
                            styles: { halign: 'left', fontSize: 18 }
                        });
                        var reportTitle = '';
                        if (groupingColumns[0])
                            reportTitle = groupingColumns.map(function (m) { return m.name; }).join(', ') + ' wise ';
                        reportTitle += options.reportTitle || g.getTitle();
                        reportTitle += " Report";
                        doc.autoTable([reportTitle], [], {
                            margin: { top: 10, bottom: 10, left: 110 },
                            startY: doc.autoTableEndPosY(),
                            headerStyles: { fillColor: 255, textColor: 0 },
                            styles: { halign: 'left', fontSize: 14 }
                        });
                    }
                    ///region Header
                    {
                        var header = function (data) {
                        };
                        autoOptions.beforePageContent = header;
                    }
                    ///region Footer
                    {
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                    }
                    ///region Content
                    {
                        //extra space after title
                        doc.autoTable([''], [], {
                            startY: doc.autoTableEndPosY() + 20,
                            headerStyles: { fillColor: 255, textColor: 0 }
                        });
                        var headerHeight = 125;
                        var headerFontSizeBase = 11;
                        var entities = response.Entities || [];
                        g.setItems(entities);
                        var groups = g.view.getGroups(); //grouped data
                        if (groups.length > 0) {
                            var ggg = function (grps, parentGroupIndex) {
                                var endPosY = doc.autoTableEndPosY();
                                for (var i = 0; i < grps.length; i++) {
                                    var group = grps[i];
                                    var level = group.level + 1;
                                    doc.autoTable([group.title], [], {
                                        margin: { left: 30 + level * 10, top: 2 },
                                        startY: doc.autoTableEndPosY(),
                                        headerStyles: { fillColor: 255, textColor: 0, fontSize: 10 - group.level, cellPadding: 0 }
                                    });
                                    if (group.groups) {
                                        ggg(group.groups, i);
                                    }
                                    else {
                                        var data = toAutoTableData(group.rows, keys, srcColumns);
                                        autoOptions.startY = doc.autoTableEndPosY();
                                        autoOptions.margin.left = 30 + level * 10;
                                        autoOptions.margin.bottom = 10;
                                        doc.autoTable(columns, data, autoOptions);
                                        //for extra space
                                        doc.autoTable([''], [], {
                                            margin: { left: 30 + level * 10, top: 2 },
                                            startY: doc.autoTableEndPosY() + 10,
                                            headerStyles: { fillColor: 255, textColor: 0 }
                                        });
                                    }
                                }
                            };
                            ggg(groups, -1);
                        }
                        else {
                            var data = toAutoTableData(g.getItems(), keys, srcColumns);
                            autoOptions.startY = headerHeight;
                            doc.autoTable(columns, data, autoOptions);
                        }
                    }
                    if (typeof doc.putTotalPages === 'function') {
                        doc.putTotalPages(totalPagesExp);
                    }
                    if (!options.output || options.output == "file") {
                        var fileName = options.reportTitle || "{0}_{1}.pdf";
                        fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                        doc.save(fileName);
                        return;
                    }
                    if (options.autoPrint)
                        doc.autoPrint();
                    var output = options.output;
                    if (output == 'newwindow' || '_blank')
                        output = 'dataurlnewwindow';
                    else if (output == 'window')
                        output = 'datauri';
                    doc.output(output);
                }
            });
        }
        PdfExportHelper.exportToPdf = exportToPdf;
        function createToolButton(options) {
            return {
                title: options.title || '',
                hint: options.hint || 'PDF',
                cssClass: 'export-pdf-button',
                onClick: function () { return exportToPdf(options); },
                separator: options.separator
            };
        }
        PdfExportHelper.createToolButton = createToolButton;
        function includeJsPDF() {
            if (typeof jsPDF !== "undefined")
                return;
            var script = $("jsPDFScript");
            if (script.length > 0)
                return;
            $("<script/>")
                .attr("type", "text/javascript")
                .attr("id", "jsPDFScript")
                .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                .appendTo(document.head);
        }
        function includeAutoTable() {
            includeJsPDF();
            if (typeof jsPDF === "undefined" ||
                typeof jsPDF.API == "undefined" ||
                typeof jsPDF.API.autoTable !== "undefined")
                return;
            var script = $("jsPDFAutoTableScript");
            if (script.length > 0)
                return;
            $("<script/>")
                .attr("type", "text/javascript")
                .attr("id", "jsPDFAutoTableScript")
                .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                .appendTo(document.head);
        }
    })(PdfExportHelper = _Ext.PdfExportHelper || (_Ext.PdfExportHelper = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ReportHelper;
    (function (ReportHelper) {
        function createToolButton(options) {
            return {
                title: Q.coalesce(options.title, 'Report'),
                cssClass: Q.coalesce(options.cssClass, 'print-button'),
                icon: options.icon,
                onClick: function () {
                    ReportHelper.execute(options);
                }
            };
        }
        ReportHelper.createToolButton = createToolButton;
        function execute(options) {
            var opt = options.getParams ? options.getParams() : options.params;
            Q.postToUrl({
                url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                params: {
                    key: options.reportKey,
                    ext: Q.coalesce(options.extension, 'pdf'),
                    opt: opt ? $.toJSON(opt) : ''
                },
                target: Q.coalesce(options.target, '_blank')
            });
        }
        ReportHelper.execute = execute;
    })(ReportHelper = _Ext.ReportHelper || (_Ext.ReportHelper = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = _Ext.DialogUtils || (_Ext.DialogUtils = {}));
})(_Ext || (_Ext = {}));
var _Ext;
(function (_Ext) {
    var ReplaceRowDialog = (function (_super) {
        __extends(ReplaceRowDialog, _super);
        function ReplaceRowDialog(request, entityList) {
            var _this = _super.call(this) || this;
            _this.request = request;
            _this.entityList = entityList;
            _this.form = new _Ext.ReplaceRowForm(_this.idPrefix);
            _this.dialogTitle = 'Replace Row';
            _this.form.DeletedEntityName.value = request.DeletedEntityName;
            _this.form.ReplaceWithEntityId.items = entityList.map(function (m) { return { id: String(m[request.IdProperty]), text: m[request.NameProperty], source: m }; });
            return _this;
        }
        ReplaceRowDialog.prototype.getFormKey = function () { return _Ext.ReplaceRowForm.formKey; };
        ReplaceRowDialog.prototype.getToolbarButtons = function () {
            var _this = this;
            var buttons = [];
            _super.prototype.getToolbarButtons.call(this);
            buttons.push({
                title: 'Replace',
                icon: 'fa fa fa-trash-o',
                onClick: function () {
                    if (_this.validateForm() == false)
                        return;
                    Q.confirm("Are you sure? \n\n" + _this.request.EntityTypeTitle + ": \"" + _this.request.DeletedEntityName + "\" will be deleted \nand all references will be replaced with \"" + _this.form.ReplaceWithEntityId.text + "\". \n\nThis action cannot be undone!\n\n", function () {
                        _this.request.ReplaceWithEntityId = Q.toId(_this.form.ReplaceWithEntityId.value);
                        Q.serviceRequest(Q.resolveUrl('~/Services/ReplaceRow/Replace'), _this.request, function (response) {
                            _this.dialogClose();
                            if (window['lastGrid'])
                                window['lastGrid'].refresh();
                        });
                    });
                }
            });
            return buttons;
        };
        return ReplaceRowDialog;
    }(_Ext.DialogBase));
    ReplaceRowDialog = __decorate([
        Serenity.Decorators.registerClass(),
        Serenity.Decorators.maximizable()
    ], ReplaceRowDialog);
    _Ext.ReplaceRowDialog = ReplaceRowDialog;
})(_Ext || (_Ext = {}));
function loadScriptAsync(url, callback) {
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onload = callback;
    // Fire the loading
    head.appendChild(script);
}
function loadScript(url) {
    $.ajax({
        url: url,
        dataType: "script",
        async: false,
        cache: true,
        success: function () {
            // all good...
        },
        error: function () {
            throw new Error("Could not load script " + url);
        }
    });
}
function usingVuejs() {
    if (window['Vue']) {
        return;
    }
    else {
        loadScript(Q.resolveUrl("~/Scripts/vue.js"));
        //filters
        window['Vue'].filter('formatDate', function (value, format) {
            if (value) {
                return Q.formatDate(value, format);
            }
        });
        window['Vue'].filter('formatDateReadable', function (value) {
            if (value) {
                var date = Q.parseISODateTime(value);
                return date.getDate() + ' ' + _Ext.Months[date.getMonth()].substr(0, 3) + ' ' + date.getFullYear();
            }
        });
        window['Vue'].filter('dayOnly', function (value) {
            if (value) {
                return Q.formatDate(value, 'dd');
            }
        });
        window['Vue'].filter('monthOnly', function (value) {
            if (value) {
                var date = Q.parseISODateTime(value);
                return _Ext.Months[date.getMonth()];
            }
        });
        window['Vue'].filter('monthOnly3', function (value) {
            if (value) {
                var date = Q.parseISODateTime(value);
                return _Ext.Months[date.getMonth()].substr(0, 3);
            }
        });
        window['Vue'].filter('yearOnly', function (value) {
            if (value) {
                var date = Q.parseISODateTime(value);
                return date.getFullYear();
            }
        });
        window['Vue'].filter('timeOnlyHHmm', function (value) {
            if (value) {
                return Q.formatDate(value, 'HH:mm');
            }
        });
        window['Vue'].filter('formatDateTimeReadable', function (value) {
            if (value) {
                var date = Q.parseISODateTime(value);
                return date.getDate() + ' ' + _Ext.Months[date.getMonth()] + ' ' + date.getFullYear()
                    + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
            }
        });
        window['Vue'].filter('enumText', function (value, enumKey) {
            if (value) {
                return Serenity.EnumFormatter.format(Serenity.EnumTypeRegistry.get(enumKey), value);
            }
        });
        window['Vue'].filter('truncate', function (text, length, clamp) {
            clamp = clamp || '...';
            length = length || 30;
            if (text.length <= length)
                return text;
            var tcText = text.slice(0, length - clamp.length);
            var last = tcText.length - 1;
            while (last > 0 && tcText[last] !== ' ' && tcText[last] !== clamp[0])
                last -= 1;
            // Fix for case when text dont have any `space`
            last = last || length - clamp.length;
            tcText = tcText.slice(0, last);
            return tcText + clamp;
        });
        window['Vue'].filter('capitalize', function (value) {
            if (!value)
                return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
        });
    }
}
function includeBootstrapColorPickerCss() {
    var style = $("#colorpicker");
    if (style.length > 0) {
        return;
    }
    $("<link/>")
        .attr("type", "text/css")
        .attr("id", "colorpicker")
        .attr("rel", "stylesheet")
        .attr("href", Q.resolveUrl("~/Scripts/colorpicker/bootstrap-colorpicker.min.css"))
        .appendTo(document.head);
}
function usingBootstrapColorPicker() {
    if (window['colorpicker']) {
        return;
    }
    else {
        includeBootstrapColorPickerCss();
        loadScript(Q.resolveUrl("~/Scripts/colorpicker/bootstrap-colorpicker.min.js"));
    }
}
function includeJqueryUITimepickerAddonCss() {
    var style = $("#datetimepicker");
    if (style.length > 0) {
        return;
    }
    $("<link/>")
        .attr("type", "text/css")
        .attr("id", "datetimepicker")
        .attr("rel", "stylesheet")
        .attr("href", Q.resolveUrl("~/Content/jquery-ui-timepicker-addon.css"))
        .appendTo(document.head);
}
function usingJqueryUITimepickerAddon() {
    if (window['datetimepicker']) {
        return;
    }
    else {
        includeJqueryUITimepickerAddonCss();
        loadScript(Q.resolveUrl("~/Scripts/jquery-ui-timepicker-addon.js"));
    }
}
function usingBabylonjs() {
    if (window['BABYLON'] && window['BABYLON']['Engine']) {
        return;
    }
    else {
        loadScript(Q.resolveUrl("~/Scripts/babylonjs/babylon.js"));
    }
}
function usingChartjs() {
    if (window['Chart']) {
        return;
    }
    else {
        loadScript(Q.resolveUrl('~/Scripts/chartjs/Chart.js'));
    }
}
function includeCustomMarkerCss() {
    var style = $("#customMarker");
    if (style.length > 0) {
        return;
    }
    $("<link/>")
        .attr("type", "text/css")
        .attr("id", "customMarker")
        .attr("rel", "stylesheet")
        .attr("href", Q.resolveUrl("~/Scripts/googlemap/CustomMarker.css"))
        .appendTo(document.head);
}
function usingCustomMarker() {
    if (window['CustomMarker']) {
        return;
    }
    else {
        includeCustomMarkerCss();
        loadScript(Q.resolveUrl("~/Scripts/googlemap/CustomMarker.js"));
    }
}
function includeGoogleMap(callback, callbackFullName) {
    if (window['google']) {
        if (callback)
            callback();
        return;
    }
    var script = $("#googleScript");
    if (script.length > 0) {
        if (callback)
            callback();
        return;
    }
    $("<script/>")
        .attr("type", "text/javascript")
        .attr("id", "googleScript")
        .attr("src", 'http://maps.google.com/maps/api/js?v=3.31&key=AIzaSyCRiY7aFA2cI6STbl3YQ3r6m1IpUFmBM98&callback=' + callbackFullName || 'includeGoogleMap')
        .appendTo(document.head);
}
function includeMarkerWithLabel() {
    if (window['MarkerWithLabel']) {
        return;
    }
    var script = $("#MarkerWithLabelScript");
    if (script.length > 0) {
        return;
    }
    $("<script/>")
        .attr("type", "text/javascript")
        .attr("id", "MarkerWithLabelScript")
        .attr("src", Q.resolveUrl("~/Scripts/googlemap/markerwithlabel.js"))
        .appendTo(document.head);
}
function includeVisCss() {
    var style = $("#Vis");
    if (style.length > 0) {
        return;
    }
    $("<link/>")
        .attr("type", "text/css")
        .attr("id", "Vis")
        .attr("rel", "stylesheet")
        .attr("href", Q.resolveUrl("~/Scripts/visjs/vis.min.css"))
        .appendTo(document.head);
}
function usingVisjs() {
    if (window['vis']) {
        return;
    }
    else {
        includeVisCss();
        loadScript(Q.resolveUrl("~/Scripts/visjs/vis.min.js"));
    }
}
function usingJsonDiffPatch() {
    if (window['jsondiffpatch']) {
        return;
    }
    else {
        $("<link/>").attr("type", "text/css").attr("id", "JsonDiffPatch").attr("rel", "stylesheet")
            .attr("href", Q.resolveUrl("~/Modules/_Ext/AuditLogViewer/jsondiffpatch/formatters-styles/html.css"))
            .appendTo(document.head);
        loadScript(Q.resolveUrl("~/Modules/_Ext/AuditLogViewer/jsondiffpatch/jsondiffpatch.min.js"));
        loadScript(Q.resolveUrl("~/Modules/_Ext/AuditLogViewer/jsondiffpatch/jsondiffpatch-formatters.min.js"));
    }
}
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            return LanguageDialog;
        }(Serenity.EntityDialog));
        LanguageDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageDialog);
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            return LanguageGrid;
        }(Serenity.EntityGrid));
        LanguageGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], LanguageGrid);
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            return RoleDialog;
        }(Serenity.EntityDialog));
        RoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleDialog);
        Administration.RoleDialog = RoleDialog;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            return RoleGrid;
        }(Serenity.EntityGrid));
        RoleGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], RoleGrid);
        Administration.RoleGrid = RoleGrid;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        RolePermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], RolePermissionDialog);
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var TenantDialog = (function (_super) {
            __extends(TenantDialog, _super);
            function TenantDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.TenantForm(_this.idPrefix);
                return _this;
            }
            TenantDialog.prototype.getFormKey = function () { return Administration.TenantForm.formKey; };
            TenantDialog.prototype.getIdProperty = function () { return Administration.TenantRow.idProperty; };
            TenantDialog.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
            TenantDialog.prototype.getNameProperty = function () { return Administration.TenantRow.nameProperty; };
            TenantDialog.prototype.getService = function () { return Administration.TenantService.baseUrl; };
            return TenantDialog;
        }(_Ext.DialogBase));
        TenantDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], TenantDialog);
        Administration.TenantDialog = TenantDialog;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var TenantGrid = (function (_super) {
            __extends(TenantGrid, _super);
            function TenantGrid(container) {
                return _super.call(this, container) || this;
            }
            TenantGrid.prototype.getColumnsKey = function () { return 'Administration.Tenant'; };
            TenantGrid.prototype.getDialogType = function () { return Administration.TenantDialog; };
            TenantGrid.prototype.getIdProperty = function () { return Administration.TenantRow.idProperty; };
            TenantGrid.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
            TenantGrid.prototype.getService = function () { return Administration.TenantService.baseUrl; };
            return TenantGrid;
        }(_Ext.GridBase));
        TenantGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TenantGrid);
        Administration.TenantGrid = TenantGrid;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            return TranslationGrid;
        }(Serenity.EntityGrid));
        TranslationGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TranslationGrid);
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = SereneInventory.Authorization || (SereneInventory.Authorization = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            return UserDialog;
        }(Serenity.EntityDialog));
        UserDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserDialog);
        Administration.UserDialog = UserDialog;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            return UserGrid;
        }(Serenity.EntityGrid));
        UserGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], UserGrid);
        Administration.UserGrid = UserGrid;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        PermissionCheckEditor = __decorate([
            Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
        ], PermissionCheckEditor);
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        UserPermissionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserPermissionDialog);
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        RoleCheckEditor = __decorate([
            Serenity.Decorators.registerEditor()
        ], RoleCheckEditor);
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        UserRoleDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], UserRoleDialog);
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = SereneInventory.Administration || (SereneInventory.Administration = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    SereneInventory.BasicProgressDialog = BasicProgressDialog;
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new SereneInventory.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = SereneInventory.DialogUtils || (SereneInventory.DialogUtils = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            return EnumSelectFormatter;
        }());
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "enumKey", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "allowClear", void 0);
        __decorate([
            Serenity.Decorators.option()
        ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
        EnumSelectFormatter = __decorate([
            Serenity.Decorators.registerFormatter()
        ], EnumSelectFormatter);
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_2 = columns; _i < columns_2.length; _i++) {
                            var column = columns_2[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            return GridEditorBase;
        }(Serenity.EntityGrid));
        GridEditorBase = __decorate([
            Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
            Serenity.Decorators.editor(),
            Serenity.Decorators.element("<div/>")
        ], GridEditorBase);
        Common.GridEditorBase = GridEditorBase;
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        GridEditorDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], GridEditorDialog);
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = SereneInventory.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = SereneInventory.LanguageList || (SereneInventory.LanguageList = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        return StaticTextBlock;
    }(Serenity.Widget));
    StaticTextBlock = __decorate([
        Serenity.Decorators.element("<div/>"),
        Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
    ], StaticTextBlock);
    SereneInventory.StaticTextBlock = StaticTextBlock;
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_2 = gridColumns; _i < gridColumns_2.length; _i++) {
                    var column = gridColumns_2[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var ReportDialog = (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var ReportPage = (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var SereneInventory;
(function (SereneInventory) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('SereneInventory');
        Serenity.EntityDialog.defaultLanguageList = SereneInventory.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = SereneInventory.ScriptInitialization || (SereneInventory.ScriptInitialization = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = SereneInventory.Common || (SereneInventory.Common = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Inventory;
    (function (Inventory) {
        var TransactionDialog = (function (_super) {
            __extends(TransactionDialog, _super);
            function TransactionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inventory.TransactionForm(_this.idPrefix);
                return _this;
            }
            TransactionDialog.prototype.getFormKey = function () { return Inventory.TransactionForm.formKey; };
            TransactionDialog.prototype.getIdProperty = function () { return Inventory.TransactionRow.idProperty; };
            TransactionDialog.prototype.getLocalTextPrefix = function () { return Inventory.TransactionRow.localTextPrefix; };
            TransactionDialog.prototype.getNameProperty = function () { return Inventory.TransactionRow.nameProperty; };
            TransactionDialog.prototype.getService = function () { return Inventory.TransactionService.baseUrl; };
            return TransactionDialog;
        }(_Ext.DialogBase));
        TransactionDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], TransactionDialog);
        Inventory.TransactionDialog = TransactionDialog;
    })(Inventory = SereneInventory.Inventory || (SereneInventory.Inventory = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Inventory;
    (function (Inventory) {
        var TransactionGrid = (function (_super) {
            __extends(TransactionGrid, _super);
            function TransactionGrid(container) {
                return _super.call(this, container) || this;
            }
            TransactionGrid.prototype.getColumnsKey = function () { return 'Inventory.Transaction'; };
            TransactionGrid.prototype.getDialogType = function () { return Inventory.TransactionDialog; };
            TransactionGrid.prototype.getIdProperty = function () { return Inventory.TransactionRow.idProperty; };
            TransactionGrid.prototype.getLocalTextPrefix = function () { return Inventory.TransactionRow.localTextPrefix; };
            TransactionGrid.prototype.getService = function () { return Inventory.TransactionService.baseUrl; };
            return TransactionGrid;
        }(_Ext.GridBase));
        TransactionGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TransactionGrid);
        Inventory.TransactionGrid = TransactionGrid;
    })(Inventory = SereneInventory.Inventory || (SereneInventory.Inventory = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Inventory;
    (function (Inventory) {
        var TransactionDetailDialog = (function (_super) {
            __extends(TransactionDetailDialog, _super);
            function TransactionDetailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Inventory.TransactionDetailForm(_this.idPrefix);
                return _this;
            }
            TransactionDetailDialog.prototype.getFormKey = function () { return Inventory.TransactionDetailForm.formKey; };
            TransactionDetailDialog.prototype.getIdProperty = function () { return Inventory.TransactionDetailRow.idProperty; };
            TransactionDetailDialog.prototype.getLocalTextPrefix = function () { return Inventory.TransactionDetailRow.localTextPrefix; };
            TransactionDetailDialog.prototype.getService = function () { return Inventory.TransactionDetailService.baseUrl; };
            return TransactionDetailDialog;
        }(_Ext.DialogBase));
        TransactionDetailDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], TransactionDetailDialog);
        Inventory.TransactionDetailDialog = TransactionDetailDialog;
    })(Inventory = SereneInventory.Inventory || (SereneInventory.Inventory = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Inventory;
    (function (Inventory) {
        var TransactionDetailGrid = (function (_super) {
            __extends(TransactionDetailGrid, _super);
            function TransactionDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            TransactionDetailGrid.prototype.getColumnsKey = function () { return 'Inventory.TransactionDetail'; };
            TransactionDetailGrid.prototype.getDialogType = function () { return Inventory.TransactionDetailDialog; };
            TransactionDetailGrid.prototype.getIdProperty = function () { return Inventory.TransactionDetailRow.idProperty; };
            TransactionDetailGrid.prototype.getLocalTextPrefix = function () { return Inventory.TransactionDetailRow.localTextPrefix; };
            TransactionDetailGrid.prototype.getService = function () { return Inventory.TransactionDetailService.baseUrl; };
            return TransactionDetailGrid;
        }(_Ext.GridBase));
        TransactionDetailGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], TransactionDetailGrid);
        Inventory.TransactionDetailGrid = TransactionDetailGrid;
    })(Inventory = SereneInventory.Inventory || (SereneInventory.Inventory = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        ChangePasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ChangePasswordPanel);
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = SereneInventory.Membership || (SereneInventory.Membership = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        ForgotPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ForgotPasswordPanel);
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = SereneInventory.Membership || (SereneInventory.Membership = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        ResetPasswordPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], ResetPasswordPanel);
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = SereneInventory.Membership || (SereneInventory.Membership = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        SignUpPanel = __decorate([
            Serenity.Decorators.registerClass()
        ], SignUpPanel);
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = SereneInventory.Membership || (SereneInventory.Membership = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var PartyDialog = (function (_super) {
            __extends(PartyDialog, _super);
            function PartyDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Setup.PartyForm(_this.idPrefix);
                return _this;
            }
            PartyDialog.prototype.getFormKey = function () { return Setup.PartyForm.formKey; };
            PartyDialog.prototype.getIdProperty = function () { return Setup.PartyRow.idProperty; };
            PartyDialog.prototype.getLocalTextPrefix = function () { return Setup.PartyRow.localTextPrefix; };
            PartyDialog.prototype.getNameProperty = function () { return Setup.PartyRow.nameProperty; };
            PartyDialog.prototype.getService = function () { return Setup.PartyService.baseUrl; };
            return PartyDialog;
        }(_Ext.DialogBase));
        PartyDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], PartyDialog);
        Setup.PartyDialog = PartyDialog;
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var PartyGrid = (function (_super) {
            __extends(PartyGrid, _super);
            function PartyGrid(container) {
                return _super.call(this, container) || this;
            }
            PartyGrid.prototype.getColumnsKey = function () { return 'Setup.Party'; };
            PartyGrid.prototype.getDialogType = function () { return Setup.PartyDialog; };
            PartyGrid.prototype.getIdProperty = function () { return Setup.PartyRow.idProperty; };
            PartyGrid.prototype.getLocalTextPrefix = function () { return Setup.PartyRow.localTextPrefix; };
            PartyGrid.prototype.getService = function () { return Setup.PartyService.baseUrl; };
            return PartyGrid;
        }(_Ext.GridBase));
        PartyGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], PartyGrid);
        Setup.PartyGrid = PartyGrid;
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var ProductDialog = (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Setup.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Setup.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Setup.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Setup.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Setup.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Setup.ProductService.baseUrl; };
            return ProductDialog;
        }(_Ext.DialogBase));
        ProductDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ProductDialog);
        Setup.ProductDialog = ProductDialog;
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var ProductGrid = (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return 'Setup.Product'; };
            ProductGrid.prototype.getDialogType = function () { return Setup.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Setup.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Setup.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Setup.ProductService.baseUrl; };
            return ProductGrid;
        }(_Ext.GridBase));
        ProductGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ProductGrid);
        Setup.ProductGrid = ProductGrid;
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var ProductCategoryDialog = (function (_super) {
            __extends(ProductCategoryDialog, _super);
            function ProductCategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Setup.ProductCategoryForm(_this.idPrefix);
                return _this;
            }
            ProductCategoryDialog.prototype.getFormKey = function () { return Setup.ProductCategoryForm.formKey; };
            ProductCategoryDialog.prototype.getIdProperty = function () { return Setup.ProductCategoryRow.idProperty; };
            ProductCategoryDialog.prototype.getLocalTextPrefix = function () { return Setup.ProductCategoryRow.localTextPrefix; };
            ProductCategoryDialog.prototype.getNameProperty = function () { return Setup.ProductCategoryRow.nameProperty; };
            ProductCategoryDialog.prototype.getService = function () { return Setup.ProductCategoryService.baseUrl; };
            return ProductCategoryDialog;
        }(_Ext.DialogBase));
        ProductCategoryDialog = __decorate([
            Serenity.Decorators.registerClass()
        ], ProductCategoryDialog);
        Setup.ProductCategoryDialog = ProductCategoryDialog;
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
var SereneInventory;
(function (SereneInventory) {
    var Setup;
    (function (Setup) {
        var ProductCategoryGrid = (function (_super) {
            __extends(ProductCategoryGrid, _super);
            function ProductCategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductCategoryGrid.prototype.getColumnsKey = function () { return 'Setup.ProductCategory'; };
            ProductCategoryGrid.prototype.getDialogType = function () { return Setup.ProductCategoryDialog; };
            ProductCategoryGrid.prototype.getIdProperty = function () { return Setup.ProductCategoryRow.idProperty; };
            ProductCategoryGrid.prototype.getLocalTextPrefix = function () { return Setup.ProductCategoryRow.localTextPrefix; };
            ProductCategoryGrid.prototype.getService = function () { return Setup.ProductCategoryService.baseUrl; };
            return ProductCategoryGrid;
        }(_Ext.GridBase));
        ProductCategoryGrid = __decorate([
            Serenity.Decorators.registerClass()
        ], ProductCategoryGrid);
        Setup.ProductCategoryGrid = ProductCategoryGrid;
    })(Setup = SereneInventory.Setup || (SereneInventory.Setup = {}));
})(SereneInventory || (SereneInventory = {}));
//# sourceMappingURL=SereneInventory.Web.js.map