/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace _Ext {
    enum AuditActionType {
        Insert = 1,
        Update = 2,
        Delete = 3,
    }
}
declare namespace _Ext {
}
declare namespace _Ext {
    interface AuditLogForm {
        EntityTableName: Serenity.StringEditor;
        VersionNo: Serenity.IntegerEditor;
        UserId: Serenity.LookupEditor;
        ActionType: Serenity.EnumEditor;
        ActionDate: Serenity.DateTimeEditor;
        EntityId: Serenity.IntegerEditor;
        OldEntity: Serenity.StringEditor;
        NewEntity: Serenity.StringEditor;
        Differences: StaticTextBlock;
        IpAddress: Serenity.StringEditor;
        SessionId: Serenity.StringEditor;
    }
    class AuditLogForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace _Ext {
    interface AuditLogRow {
        Id?: number;
        VersionNo?: number;
        UserId?: number;
        ActionType?: AuditActionType;
        ActionDate?: string;
        EntityTableName?: string;
        EntityId?: number;
        OldEntity?: string;
        NewEntity?: string;
        IpAddress?: string;
        SessionId?: string;
    }
    namespace AuditLogRow {
        const idProperty = "Id";
        const nameProperty = "EntityTableName";
        const localTextPrefix = "_Ext.AuditLog";
        const enum Fields {
            Id,
            VersionNo,
            UserId,
            ActionType,
            ActionDate,
            EntityTableName,
            EntityId,
            OldEntity,
            NewEntity,
            IpAddress,
            SessionId,
        }
    }
}
declare namespace _Ext {
    namespace AuditLogService {
        const baseUrl = "_Ext/AuditLog";
        function Create(request: Serenity.SaveRequest<AuditLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AuditLogRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AuditLogRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace _Ext {
    interface AuditLogViewerRequest extends Serenity.ServiceRequest {
        FormKey?: string;
        EntityId?: number;
    }
}
declare namespace _Ext {
    interface AuditLogViewerResponse extends Serenity.ServiceResponse {
        EntityVersions?: AuditLogRow[];
    }
}
declare namespace _Ext {
    namespace AuditLogViewerService {
        const baseUrl = "AuditLogViewer";
        function List(request: AuditLogViewerRequest, onSuccess?: (response: AuditLogViewerResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List,
        }
    }
}
declare namespace _Ext {
    interface EntityReportRequest extends Serenity.RetrieveRequest {
        ReportKey?: string;
        ReportServiceMethodName?: string;
        ReportDesignPath?: string;
    }
}
declare namespace _Ext {
    interface ListReportRequest extends Serenity.ListRequest {
        ReportKey?: string;
        ReportServiceMethodName?: string;
        ListExcelServiceMethodName?: string;
        ReportDesignPath?: string;
        EqualityFilterWithTextValue?: {
            [key: string]: string;
        };
    }
}
declare namespace _Ext {
    enum Months {
        January = 0,
        February = 1,
        March = 2,
        April = 3,
        May = 4,
        June = 5,
        July = 6,
        August = 7,
        September = 8,
        October = 9,
        November = 10,
        December = 11,
    }
}
declare namespace _Ext {
    interface ReplaceRowForm {
        DeletedEntityName: Serenity.StringEditor;
        ReplaceWithEntityId: EmptyLookupEditor;
    }
    class ReplaceRowForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace _Ext {
    interface ReplaceRowRequest extends Serenity.ServiceRequest {
        FormKey?: string;
        IdProperty?: string;
        NameProperty?: string;
        EntityTypeTitle?: string;
        DeletedEntityId?: number;
        DeletedEntityName?: string;
        ReplaceWithEntityId?: number;
    }
}
declare namespace _Ext {
    interface ReplaceRowResponse extends Serenity.ServiceResponse {
    }
}
declare namespace _Ext {
    namespace ReplaceRowService {
        const baseUrl = "ReplaceRow";
        function Replace(request: ReplaceRowRequest, onSuccess?: (response: ReplaceRowResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Replace,
        }
    }
}
declare namespace _Ext {
    enum TimeUoM {
        Hour = 1,
        Day = 2,
        Week = 3,
        Month = 4,
        CalenderMonth = 5,
        Year = 6,
    }
}
declare namespace SereneInventory.Administration {
}
declare namespace SereneInventory.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneInventory.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const enum Fields {
            Id,
            LanguageId,
            LanguageName,
        }
    }
}
declare namespace SereneInventory.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace SereneInventory.Administration {
}
declare namespace SereneInventory.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneInventory.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SereneInventory.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace SereneInventory.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const enum Fields {
            RolePermissionId,
            RoleId,
            PermissionKey,
            RoleRoleName,
        }
    }
}
declare namespace SereneInventory.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update,
            List,
        }
    }
}
declare namespace SereneInventory.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace SereneInventory.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const enum Fields {
            RoleId,
            RoleName,
        }
    }
}
declare namespace SereneInventory.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Retrieve,
            List,
        }
    }
}
declare namespace SereneInventory.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace SereneInventory.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace SereneInventory.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List,
            Update,
        }
    }
}
declare namespace SereneInventory.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace SereneInventory.Administration {
}
declare namespace SereneInventory.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneInventory.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace SereneInventory.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const enum Fields {
            UserPermissionId,
            UserId,
            PermissionKey,
            Granted,
            Username,
            User,
        }
    }
}
declare namespace SereneInventory.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update,
            List,
            ListRolePermissions,
            ListPermissionKeys,
        }
    }
}
declare namespace SereneInventory.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace SereneInventory.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace SereneInventory.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace SereneInventory.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const enum Fields {
            UserRoleId,
            UserId,
            RoleId,
            Username,
            User,
        }
    }
}
declare namespace SereneInventory.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update,
            List,
        }
    }
}
declare namespace SereneInventory.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace SereneInventory.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const enum Fields {
            UserId,
            Username,
            Source,
            PasswordHash,
            PasswordSalt,
            DisplayName,
            Email,
            UserImage,
            LastDirectoryUpdate,
            IsActive,
            Password,
            PasswordConfirm,
            InsertUserId,
            InsertDate,
            UpdateUserId,
            UpdateDate,
        }
    }
}
declare namespace SereneInventory.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create,
            Update,
            Delete,
            Undelete,
            Retrieve,
            List,
        }
    }
}
declare namespace SereneInventory.Common.Pages {
    interface UploadResponse extends Serenity.ServiceResponse {
        TemporaryFile?: string;
        Size?: number;
        IsImage?: boolean;
        Width?: number;
        Height?: number;
    }
}
declare namespace SereneInventory.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace SereneInventory.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace SereneInventory.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId,
            UserId,
            PreferenceType,
            Name,
            Value,
        }
    }
}
declare namespace SereneInventory.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update,
            Retrieve,
        }
    }
}
declare namespace SereneInventory.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace SereneInventory {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace SereneInventory {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace SereneInventory {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace SereneInventory {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace SereneInventory.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneInventory.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SereneInventory.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneInventory.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace SereneInventory.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneInventory.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace SereneInventory.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneInventory.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace SereneInventory.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace SereneInventory.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace SereneInventory {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace q {
    function groupBy(xs: any[], key: any): any;
    function sortBy<T>(xs: T[], key: any): T[];
    function sortByDesc<T>(xs: T[], key: any): T[];
}
declare namespace q {
    function nextTick(date: any): Date;
    function addMinutes(date: Date, minutes: number): Date;
    function addHours(date: Date, hours: number): Date;
    function getHours(fromDate: Date, toDate: Date): number;
    function getDays24HourPulse(fromDate: Date, toDate: Date): number;
    function getDays(pFromDate: Date, pToDate: Date): number;
    function getMonths(fromDate: Date, toDate: Date): number;
    function getCalenderMonths(fromDate: Date, toDate: Date): number;
    function getCalenderMonthsCeil(fromDate: Date, toDate: Date): number;
    function addDays(date: Date, days: number): Date;
    function addMonths(date: Date, months: number): Date;
    function addYear(date: Date, years: number): Date;
    function getPeriods(fromDate: Date, toDate: Date, periodUnit: _Ext.TimeUoM): number;
    function addPeriod(date: Date, period: number, periodUnit: _Ext.TimeUoM): Date;
    function formatISODate(date: Date): string;
    function bindDateTimeEditorChange(editor: any, handler: any): void;
    function initDateRangeEditor(fromDateEditor: Serenity.DateEditor, toDateEditor: Serenity.DateEditor, onChangeHandler?: (e: JQueryEventObject) => void): void;
    function initDateTimeRangeEditor(fromDateTimeEditor: _Ext.DateTimePickerEditor, toDateTimeEditor: _Ext.DateTimePickerEditor, onChangeHandler?: (e: JQueryEventObject) => void): void;
    function formatDate(d: Date | string, format?: string): string;
}
declare namespace q {
    function initDetailEditor(dialog: _Ext.DialogBase<any, any>, editor: _Ext.GridEditorBase<any>, options?: GridEditorOptions): void;
    function setGridEditorHeight(editor: JQuery, heightInPx: number): void;
    function addNotificationIcon(editor: Serenity.StringEditor, isSuccess: boolean): void;
    function setEditorLabel(editor: Serenity.Widget<any>, value: string): void;
    function hideEditorLabel(editor: Serenity.Widget<any>): void;
    function setEditorCategoryLabel(editor: Serenity.Widget<any>, value: string): void;
    function hideEditorCategory(editor: Serenity.Widget<any>, value?: boolean): void;
    function hideField(editor: Serenity.Widget<any>, value?: boolean): void;
    function showField(editor: Serenity.Widget<any>, value?: boolean): void;
    function hideEditorTab(editor: Serenity.Widget<any>, value?: boolean): void;
    function readOnlyEditorTab(editor: Serenity.Widget<any>, value?: boolean): void;
    function readOnlyEditorCategory(editor: Serenity.Widget<any>, value?: boolean): void;
    function readonlyEditorCategory($editor: JQuery, value?: boolean): void;
    function readOnlyEditor(editor: Serenity.Widget<any>, value?: boolean): void;
    function readonlyEditor($editor: JQuery, value?: boolean): void;
    function moveEditorFromTab(editor: Serenity.Widget<any>, toElement: JQuery, isPrepend?: boolean): void;
    function moveEditorCategoryFromTab(editor: Serenity.Widget<any>, toElement: JQuery, isPrepend?: boolean): void;
    function selectEditorTab(editor: Serenity.Widget<any>): void;
    function getSelectedRow<TRow>(e: JQueryEventObject): TRow;
}
declare namespace q {
    function getEnumText(enumKey: any, value: any): string;
}
declare namespace Slick {
    class AutoColumnSize {
    }
}
declare namespace _Ext {
    class GridBase<TItem, TOptions> extends Serenity.EntityGrid<TItem, TOptions> {
        isReadOnly: boolean;
        isRequired: boolean;
        isAutosized: boolean;
        isChildGrid: boolean;
        autoColumnSizePlugin: any;
        constructor(container: JQuery, options?: TOptions);
        protected markupReady(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getReportRequest(): any;
        protected getColumns(): Slick.Column[];
        protected createSlickGrid(): Slick.Grid;
        resetColumns(columns: Slick.Column[]): void;
        resizeAllCulumn(): void;
        protected getSlickOptions(): Slick.GridOptions;
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected onInlineActionClick(target: JQuery, recordId: any, item: TItem): void;
        protected onViewProcessData(response: Serenity.ListResponse<TItem>): Serenity.ListResponse<TItem>;
    }
}
declare namespace _Ext {
    class ReportGridBase<TItem, TOptions> extends _Ext.GridBase<TItem, TOptions> {
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
    }
}
declare namespace _Ext {
    class DialogBase<TEntity, TOptions> extends Serenity.EntityDialog<TEntity, TOptions> {
        private loadedState;
        isReadOnly: boolean;
        protected form: any;
        constructor(opt?: any);
        protected updateInterface(): void;
        protected onDialogOpen(): void;
        protected setReadOnly(value: boolean): void;
        protected getToolbarButtons(): Serenity.ToolButton[];
        onRefreshClick(): void;
        protected getSaveState(): string;
        protected onSaveSuccess(response: any): void;
        loadResponse(data: any): void;
        maximize(): void;
        fullContentArea(): void;
        setDialogSize(width?: any, height?: any, top?: any, left?: any): void;
        afterSetDialogSize(): void;
    }
}
declare namespace _Ext {
    class EditorDialogBase<TEntity> extends DialogBase<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
        parentEditor: GridEditorBase<any>;
    }
}
declare namespace _Ext {
    class GridEditorBase<TEntity> extends _Ext.GridBase<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected getQuickFilters(): any[];
        protected id(entity: TEntity): any;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected addButtonClick(): void;
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        private searchText;
        protected createToolbarExtensions(): void;
        protected onViewFilter(row: any): boolean;
        private matchContains(item);
        protected enableFiltering(): boolean;
        protected onViewSubmit(): boolean;
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        protected getSlickOptions(): Slick.GridOptions;
        parentDialog: DialogBase<any, any>;
        onItemsChanged(): void;
    }
}
declare var isPageRefreshRequired: boolean;
declare const nameofFactory: <T>() => (name: keyof T) => keyof T;
declare namespace q {
    function isCosmicThemeApplied(): boolean;
    function formatDecimal(value: any): string;
    function formatInt(value: any): string;
    function ToNumber(value: any): any;
    function ToBool(value: any): boolean;
    function getRandomColor(hexLetters: any): string;
}
interface GridEditorOptions {
    isReadOnly?: boolean;
    height?: number;
    autoHeight?: boolean;
    width?: number;
    showCaption?: boolean;
    hideToolbar?: boolean;
}
interface GridOptions {
    AutoColumnSize: boolean;
    FadeInEffectWhenInit: boolean;
    ShowAnyInEqualityFilterWithTextValue: boolean;
}
interface DialogOptions {
    AutoFitContentArea: boolean;
}
declare namespace LiteDB {
    interface ObjectId {
    }
}
declare namespace q {
    var queryString: {};
    var jsPDFHeaderImageData: string;
    var jsPDFHeaderTitle: string;
    var useSerenityInlineEditors: boolean;
    var hideCategoyLinksBarInPropertyDialog: boolean;
    var DefaultMainGridOptions: GridOptions;
    var DefaultEditorGridOptions: GridOptions;
    var DefaultEntityDialogOptions: DialogOptions;
    var DefaultEditorDialogOptions: DialogOptions;
    var fiscalYearMonths: number[];
}
declare namespace _Ext {
    class AuditLogActionTypeFormatter implements Slick.Formatter {
        static format(ctx: Slick.FormatterContext): string;
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace _Ext {
    class AuditLogDialog extends DialogBase<AuditLogRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AuditLogForm;
        protected afterLoadEntity(): void;
    }
}
declare namespace _Ext {
    class AuditLogGrid extends GridBase<AuditLogRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AuditLogDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare var jsondiffpatch: any;
declare namespace _Ext {
    class AuditLogViewer {
        el: string;
        data: {
            entityVersions: any[];
        };
        entity: any;
        entityId: any;
        constructor(el: string, entityVersions: AuditLogRow[]);
        mounted: () => void;
        computed: {
            test: () => string;
        };
        filters: {
            filterByYardId: () => any[];
        };
        methods: {
            showDiff: (versionInfo: AuditLogRow) => void;
            getDiff: (versionInfo: AuditLogRow) => any;
        };
        destroyed(): void;
    }
}
declare namespace _Ext {
    class AuditLogViewerDialog extends Serenity.TemplatedDialog<any> {
        request: AuditLogViewerRequest;
        constructor(request: AuditLogViewerRequest);
        protected getTemplateName(): string;
    }
}
declare namespace _Ext {
    class AutoCompleteEditor extends Serenity.StringEditor {
        constructor(input: JQuery, options: AutoCompleteOptions);
        protected bindAutoComplete(input: any): void;
    }
    interface AutoCompleteOptions {
        lookupKey: string;
        sourceArray: string[];
        sourceCSV: string;
        minSearchLength: number;
    }
}
declare namespace _Ext {
    class ColorEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getTemplate(): string;
        constructor(container: JQuery);
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
    }
}
declare namespace _Ext {
    class DateTimePickerEditor extends Serenity.Widget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue, Serenity.IReadOnly {
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        constructor(container: JQuery);
        value: string;
        valueAsDate: Date;
        get_readOnly(): boolean;
        set_readOnly(value: boolean): void;
        set_minDate(date: Date): void;
        set_maxDate(date: Date): void;
        set_minDateTime(date: Date): void;
        set_maxDateTime(date: Date): void;
    }
}
declare namespace _Ext {
    class EmptyLookupEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace _Ext {
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private _value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent();
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
        value: string;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace _Ext {
    class TemplatedLookupEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
        getSelect2Options(): Select2Options;
    }
}
declare namespace _Ext {
    class CardViewMixin<TItem> {
        private options;
        private dataGrid;
        private getId;
        private vm;
        private cardContainer;
        viewType: ('list' | 'card');
        constructor(options: CardViewMixinOptions<TItem>);
        switchView(viewType: ('grid' | 'card')): void;
        updateCardItems(): void;
        resizeCardView(): void;
    }
    interface CardViewMixinOptions<TItem> {
        grid: Serenity.DataGrid<TItem, any>;
        containerTemplate?: string;
        itemTemplate: string;
        methods?: any;
        itemCssClass?: string;
        defaultViewType?: ('list' | 'card');
        itemsCssStyle?: string;
        itemCssStyle?: string;
    }
}
declare namespace _Ext {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace _Ext {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare namespace Slick {
    interface RemoteView<TEntity> {
        getGroups(): Slick.Group<TEntity>[];
        getGrouping(): Slick.GroupInfo<TEntity>[];
    }
}
declare namespace _Ext {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare namespace _Ext.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace _Ext {
    class ReplaceRowDialog extends _Ext.DialogBase<any, any> {
        request: ReplaceRowRequest;
        entityList: Array<any>;
        protected getFormKey(): string;
        protected form: ReplaceRowForm;
        constructor(request: ReplaceRowRequest, entityList: Array<any>);
        protected getToolbarButtons(): Serenity.ToolButton[];
    }
}
declare function loadScriptAsync(url: any, callback: any): void;
declare function loadScript(url: any): void;
declare function usingVuejs(): void;
declare function includeBootstrapColorPickerCss(): void;
declare function usingBootstrapColorPicker(): void;
declare function includeJqueryUITimepickerAddonCss(): void;
declare function usingJqueryUITimepickerAddon(): void;
declare function usingBabylonjs(): void;
declare function usingChartjs(): void;
declare function includeCustomMarkerCss(): void;
declare function usingCustomMarker(): void;
declare function includeGoogleMap(callback?: Function, callbackFullName?: string): void;
declare function includeMarkerWithLabel(): void;
declare function includeVisCss(): void;
declare function usingVisjs(): void;
declare function usingJsonDiffPatch(): void;
declare namespace SereneInventory.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace SereneInventory.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace SereneInventory.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace SereneInventory.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace SereneInventory.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace SereneInventory.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace SereneInventory.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace SereneInventory.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace SereneInventory.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace SereneInventory.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass(item, grant);
        private roleOrImplicit(key);
        private getItemEffectiveClass(item);
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains(item);
        private getDescendants(item, excludeGroups);
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey(key);
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys(titleByKey);
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace SereneInventory.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace SereneInventory.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace SereneInventory.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace SereneInventory {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace SereneInventory.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace SereneInventory.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace SereneInventory.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace SereneInventory.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace SereneInventory.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace SereneInventory.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace SereneInventory.LanguageList {
    function getValue(): string[][];
}
declare namespace SereneInventory {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent();
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace SereneInventory.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace SereneInventory.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace SereneInventory.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace SereneInventory.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace SereneInventory.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace SereneInventory.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace SereneInventory.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace SereneInventory.ScriptInitialization {
}
declare namespace SereneInventory.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace SereneInventory.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SereneInventory.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SereneInventory.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace SereneInventory.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
