namespace SereneInventory.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Tenant {
                export const Description: string;
                export const EDate: string;
                export const EUserId: string;
                export const IDate: string;
                export const IUserId: string;
                export const Id: string;
                export const Name: string;
                export const Remarks: string;
                export const RowNum: string;
                export const TenantId: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Inventory {

            namespace Transaction {
                export const EDate: string;
                export const EUserId: string;
                export const IDate: string;
                export const IUserId: string;
                export const Id: string;
                export const PartyAddress: string;
                export const PartyContact: string;
                export const PartyId: string;
                export const PartyName: string;
                export const PartyPartyType: string;
                export const RemainingQuantity: string;
                export const Remarks: string;
                export const RowNum: string;
                export const TenantId: string;
                export const TotalAmount: string;
                export const TotalExpense: string;
                export const TotalQuantity: string;
                export const TotalRefferencedAmount: string;
                export const TransactionDate: string;
                export const TransactionDetailRows: string;
                export const TransactionExpenseRows: string;
                export const TransactionNumber: string;
                export const TransactionType: string;
            }

            namespace TransactionDetail {
                export const Amount: string;
                export const EDate: string;
                export const EUserId: string;
                export const IDate: string;
                export const IUserId: string;
                export const Id: string;
                export const LookupText: string;
                export const ProductDescription: string;
                export const ProductId: string;
                export const ProductImages: string;
                export const ProductName: string;
                export const ProductProductCategoryId: string;
                export const ProductProductType: string;
                export const Quantity: string;
                export const RefTransactionDetailId: string;
                export const RefTransactionDetailTransactionId: string;
                export const RefTransactionPartyId: string;
                export const RefTransactionRefTransactionId: string;
                export const RefTransactionTransactionDate: string;
                export const RefTransactionTransactionNumber: string;
                export const RefTransactionTransactionType: string;
                export const RemainingQuantity: string;
                export const Remarks: string;
                export const RowNum: string;
                export const TenantId: string;
                export const TransactionId: string;
                export const TransactionPartyId: string;
                export const TransactionRefTransactionId: string;
                export const TransactionTransactionDate: string;
                export const TransactionTransactionNumber: string;
                export const TransactionTransactionType: string;
                export const UnitPrice: string;
            }

            namespace TransactionExpense {
                export const Amount: string;
                export const EDate: string;
                export const EUserId: string;
                export const ExpenseType: string;
                export const IDate: string;
                export const IUserId: string;
                export const Id: string;
                export const Remarks: string;
                export const RowNum: string;
                export const TenantId: string;
                export const TransactionId: string;
                export const TransactionPartyId: string;
                export const TransactionRefTransactionId: string;
                export const TransactionTransactionDate: string;
                export const TransactionTransactionNumber: string;
                export const TransactionTransactionType: string;
            }
        }

        namespace Setup {

            namespace Party {
                export const Address: string;
                export const Contact: string;
                export const EDate: string;
                export const EUserId: string;
                export const IDate: string;
                export const IUserId: string;
                export const Id: string;
                export const Name: string;
                export const PartyType: string;
                export const Remarks: string;
                export const RowNum: string;
                export const TenantId: string;
            }

            namespace Product {
                export const Code: string;
                export const Description: string;
                export const EDate: string;
                export const EUserId: string;
                export const IDate: string;
                export const IUserId: string;
                export const Id: string;
                export const Images: string;
                export const Name: string;
                export const ProductCategoryDescription: string;
                export const ProductCategoryId: string;
                export const ProductCategoryName: string;
                export const ProductType: string;
                export const QuantityIn: string;
                export const QuantityOut: string;
                export const RemainingQuantity: string;
                export const Remarks: string;
                export const RowNum: string;
                export const TenantId: string;
            }

            namespace ProductCategory {
                export const Description: string;
                export const EDate: string;
                export const EUserId: string;
                export const IDate: string;
                export const IUserId: string;
                export const Id: string;
                export const Name: string;
                export const Remarks: string;
                export const RowNum: string;
                export const TenantId: string;
            }
        }

        namespace _Ext {

            namespace AuditLog {
                export const ActionDate: string;
                export const ActionType: string;
                export const EntityId: string;
                export const EntityTableName: string;
                export const Id: string;
                export const IpAddress: string;
                export const NewEntity: string;
                export const OldEntity: string;
                export const SessionId: string;
                export const UserId: string;
                export const VersionNo: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    SereneInventory['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Tenant:{Description:1,EDate:1,EUserId:1,IDate:1,IUserId:1,Id:1,Name:1,Remarks:1,RowNum:1,TenantId:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Inventory:{Transaction:{EDate:1,EUserId:1,IDate:1,IUserId:1,Id:1,PartyAddress:1,PartyContact:1,PartyId:1,PartyName:1,PartyPartyType:1,RemainingQuantity:1,Remarks:1,RowNum:1,TenantId:1,TotalAmount:1,TotalExpense:1,TotalQuantity:1,TotalRefferencedAmount:1,TransactionDate:1,TransactionDetailRows:1,TransactionExpenseRows:1,TransactionNumber:1,TransactionType:1},TransactionDetail:{Amount:1,EDate:1,EUserId:1,IDate:1,IUserId:1,Id:1,LookupText:1,ProductDescription:1,ProductId:1,ProductImages:1,ProductName:1,ProductProductCategoryId:1,ProductProductType:1,Quantity:1,RefTransactionDetailId:1,RefTransactionDetailTransactionId:1,RefTransactionPartyId:1,RefTransactionRefTransactionId:1,RefTransactionTransactionDate:1,RefTransactionTransactionNumber:1,RefTransactionTransactionType:1,RemainingQuantity:1,Remarks:1,RowNum:1,TenantId:1,TransactionId:1,TransactionPartyId:1,TransactionRefTransactionId:1,TransactionTransactionDate:1,TransactionTransactionNumber:1,TransactionTransactionType:1,UnitPrice:1},TransactionExpense:{Amount:1,EDate:1,EUserId:1,ExpenseType:1,IDate:1,IUserId:1,Id:1,Remarks:1,RowNum:1,TenantId:1,TransactionId:1,TransactionPartyId:1,TransactionRefTransactionId:1,TransactionTransactionDate:1,TransactionTransactionNumber:1,TransactionTransactionType:1}},Setup:{Party:{Address:1,Contact:1,EDate:1,EUserId:1,IDate:1,IUserId:1,Id:1,Name:1,PartyType:1,Remarks:1,RowNum:1,TenantId:1},Product:{Code:1,Description:1,EDate:1,EUserId:1,IDate:1,IUserId:1,Id:1,Images:1,Name:1,ProductCategoryDescription:1,ProductCategoryId:1,ProductCategoryName:1,ProductType:1,QuantityIn:1,QuantityOut:1,RemainingQuantity:1,Remarks:1,RowNum:1,TenantId:1},ProductCategory:{Description:1,EDate:1,EUserId:1,IDate:1,IUserId:1,Id:1,Name:1,Remarks:1,RowNum:1,TenantId:1}},_Ext:{AuditLog:{ActionDate:1,ActionType:1,EntityId:1,EntityTableName:1,Id:1,IpAddress:1,NewEntity:1,OldEntity:1,SessionId:1,UserId:1,VersionNo:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}

