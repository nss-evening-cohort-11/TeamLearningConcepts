USE [master]
GO
/****** Object:  Database [TLC]    Script Date: 10/26/2020 6:50:23 PM ******/
CREATE DATABASE [TLC]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'TLC', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\TLC.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'TLC_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\TLC_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [TLC] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [TLC].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [TLC] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [TLC] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [TLC] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [TLC] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [TLC] SET ARITHABORT OFF 
GO
ALTER DATABASE [TLC] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [TLC] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [TLC] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [TLC] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [TLC] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [TLC] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [TLC] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [TLC] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [TLC] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [TLC] SET  DISABLE_BROKER 
GO
ALTER DATABASE [TLC] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [TLC] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [TLC] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [TLC] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [TLC] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [TLC] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [TLC] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [TLC] SET RECOVERY FULL 
GO
ALTER DATABASE [TLC] SET  MULTI_USER 
GO
ALTER DATABASE [TLC] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [TLC] SET DB_CHAINING OFF 
GO
ALTER DATABASE [TLC] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [TLC] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [TLC] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'TLC', N'ON'
GO
ALTER DATABASE [TLC] SET QUERY_STORE = OFF
GO
USE [TLC]
GO
/****** Object:  Table [dbo].[Course]    Script Date: 10/26/2020 6:50:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Course](
	[CourseId] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](500) NOT NULL,
	[Price] [numeric](10, 2) NOT NULL,
	[PhotoUrl] [varchar](400) NOT NULL,
	[Description] [varchar](1000) NOT NULL,
	[CourseTypeId] [int] NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_Course] PRIMARY KEY CLUSTERED 
(
	[CourseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CourseType]    Script Date: 10/26/2020 6:50:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CourseType](
	[CourseTypeId] [int] IDENTITY(1,1) NOT NULL,
	[CourseTypeName] [varchar](100) NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_CourseType] PRIMARY KEY CLUSTERED 
(
	[CourseTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Invoice]    Script Date: 10/26/2020 6:50:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Invoice](
	[InvoiceId] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[InvoiceDate] [datetime] NOT NULL,
	[InvoiceTotal] [numeric](10, 2) NOT NULL,
	[PaymentTypeId] [int] NOT NULL,
	[isCompleted] [bit] NOT NULL,
 CONSTRAINT [PK_Invoice] PRIMARY KEY CLUSTERED 
(
	[InvoiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[InvoiceLineItem]    Script Date: 10/26/2020 6:50:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InvoiceLineItem](
	[InvoiceLineItemId] [int] IDENTITY(1,1) NOT NULL,
	[CourseId] [int] NULL,
	[InvoiceId] [int] NULL,
	[Quantity] [int] NULL,
 CONSTRAINT [PK_InvoiceLineItemId] PRIMARY KEY CLUSTERED 
(
	[InvoiceLineItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Lesson]    Script Date: 10/26/2020 6:50:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Lesson](
	[LessonId] [int] NOT NULL,
	[LessonName] [varchar](200) NULL,
	[LessonType] [varchar](200) NULL,
	[PhotoUrl] [varchar](500) NULL,
	[isComplete] [bit] NULL,
	[CourseId] [int] NULL,
	[Description] [varchar](1000) NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_Lesson] PRIMARY KEY CLUSTERED 
(
	[LessonId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PaymentType]    Script Date: 10/26/2020 6:50:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PaymentType](
	[PaymentTypeId] [int] IDENTITY(1,1) NOT NULL,
	[PaymentName] [varchar](200) NOT NULL,
	[AccountNumber] [int] NOT NULL,
	[UserId] [int] NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_PaymentType] PRIMARY KEY CLUSTERED 
(
	[PaymentTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 10/26/2020 6:50:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[FirstName] [varchar](100) NOT NULL,
	[LastName] [varchar](100) NOT NULL,
	[Username] [varchar](200) NOT NULL,
	[PhotoUrl] [varchar](400) NULL,
	[Email] [varchar](300) NOT NULL,
	[DateCreated] [datetime] NOT NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserCourse]    Script Date: 10/26/2020 6:50:23 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserCourse](
	[UserCourseId] [int] IDENTITY(1,1) NOT NULL,
	[CourseId] [int] NULL,
	[UserId] [int] NULL,
	[isComplete] [bit] NULL,
	[IsDeleted] [bit] NOT NULL,
 CONSTRAINT [PK_UserCourse] PRIMARY KEY CLUSTERED 
(
	[UserCourseId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Course] ON 

INSERT [dbo].[Course] ([CourseId], [Title], [Price], [PhotoUrl], [Description], [CourseTypeId], [IsDeleted]) VALUES (2, N'How To Retain Customers', CAST(400.00 AS Numeric(10, 2)), N'https://images.unsplash.com/photo-1520694478166-daaaaec95b69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', N'How to Retain Customers for the busy salesperson. Buy this course and learn the art of gratitude, and a positive attitude.', 1, 0)
INSERT [dbo].[Course] ([CourseId], [Title], [Price], [PhotoUrl], [Description], [CourseTypeId], [IsDeleted]) VALUES (3, N'Taxes for Solo Entreprenuer', CAST(800.00 AS Numeric(10, 2)), N'https://cdn.pixabay.com/photo/2015/11/06/12/35/control-1027103_1280.jpg', N'Learn how to do your taxes, so the tax man does not come for you.', 2, 0)
INSERT [dbo].[Course] ([CourseId], [Title], [Price], [PhotoUrl], [Description], [CourseTypeId], [IsDeleted]) VALUES (4, N'How to Run An Effective Meeting', CAST(1000.00 AS Numeric(10, 2)), N'https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', N'Do your meetings fall flat? Do your meetings get you no where? This course is for you!', 3, 0)
INSERT [dbo].[Course] ([CourseId], [Title], [Price], [PhotoUrl], [Description], [CourseTypeId], [IsDeleted]) VALUES (5, N'Dress for Success', CAST(500.00 AS Numeric(10, 2)), N'https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', N'Do you have absolutely no sense of style? Learn how to dress yourself so your mom does not have to.', 4, 0)
INSERT [dbo].[Course] ([CourseId], [Title], [Price], [PhotoUrl], [Description], [CourseTypeId], [IsDeleted]) VALUES (6, N'How to Navigate a Purchase Request', CAST(350.00 AS Numeric(10, 2)), N'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', N'How to navigate a purchase request in Great Plains on a Dell, PC, or Mac.', 1, 0)
INSERT [dbo].[Course] ([CourseId], [Title], [Price], [PhotoUrl], [Description], [CourseTypeId], [IsDeleted]) VALUES (7, N'Dummy Title', CAST(123.45 AS Numeric(10, 2)), N'www.dummyUrl.com', N'Dummy description', 4, 0)
INSERT [dbo].[Course] ([CourseId], [Title], [Price], [PhotoUrl], [Description], [CourseTypeId], [IsDeleted]) VALUES (8, N'', CAST(0.00 AS Numeric(10, 2)), N'', N'', 4, 0)
INSERT [dbo].[Course] ([CourseId], [Title], [Price], [PhotoUrl], [Description], [CourseTypeId], [IsDeleted]) VALUES (9, N'Another Dummy Title', CAST(123.45 AS Numeric(10, 2)), N'www.dummyUrl.com', N'Dummy description', 4, 0)
SET IDENTITY_INSERT [dbo].[Course] OFF
SET IDENTITY_INSERT [dbo].[CourseType] ON 

INSERT [dbo].[CourseType] ([CourseTypeId], [CourseTypeName], [IsDeleted]) VALUES (1, N'Sales', 0)
INSERT [dbo].[CourseType] ([CourseTypeId], [CourseTypeName], [IsDeleted]) VALUES (2, N'Finance', 0)
INSERT [dbo].[CourseType] ([CourseTypeId], [CourseTypeName], [IsDeleted]) VALUES (3, N'Productivity', 0)
INSERT [dbo].[CourseType] ([CourseTypeId], [CourseTypeName], [IsDeleted]) VALUES (4, N'Personal Branding', 0)
SET IDENTITY_INSERT [dbo].[CourseType] OFF
SET IDENTITY_INSERT [dbo].[Invoice] ON 

INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted]) VALUES (1, 1, CAST(N'2020-10-20T18:51:03.540' AS DateTime), CAST(350.00 AS Numeric(10, 2)), 3, 0)
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted]) VALUES (2, 2, CAST(N'2020-10-20T18:51:58.503' AS DateTime), CAST(1000.00 AS Numeric(10, 2)), 4, 1)
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted]) VALUES (3, 3, CAST(N'2020-10-20T18:52:27.507' AS DateTime), CAST(800.00 AS Numeric(10, 2)), 1, 1)
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted]) VALUES (4, 4, CAST(N'2020-10-20T18:53:04.700' AS DateTime), CAST(400.00 AS Numeric(10, 2)), 2, 1)
SET IDENTITY_INSERT [dbo].[Invoice] OFF
SET IDENTITY_INSERT [dbo].[InvoiceLineItem] ON 

INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (1, 6, 1, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (2, 4, 2, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (3, 3, 3, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (4, 2, 4, 1)
SET IDENTITY_INSERT [dbo].[InvoiceLineItem] OFF
SET IDENTITY_INSERT [dbo].[PaymentType] ON 

INSERT [dbo].[PaymentType] ([PaymentTypeId], [PaymentName], [AccountNumber], [UserId], [IsDeleted]) VALUES (1, N'Mastercard', 123456789, 3, 0)
INSERT [dbo].[PaymentType] ([PaymentTypeId], [PaymentName], [AccountNumber], [UserId], [IsDeleted]) VALUES (2, N'Visa', 987654321, 4, 0)
INSERT [dbo].[PaymentType] ([PaymentTypeId], [PaymentName], [AccountNumber], [UserId], [IsDeleted]) VALUES (3, N'Discover', 976584321, 1, 0)
INSERT [dbo].[PaymentType] ([PaymentTypeId], [PaymentName], [AccountNumber], [UserId], [IsDeleted]) VALUES (4, N'American Express', 974658321, 2, 0)
SET IDENTITY_INSERT [dbo].[PaymentType] OFF
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([UserId], [FirstName], [LastName], [Username], [PhotoUrl], [Email], [DateCreated], [IsDeleted]) VALUES (1, N'Kayla', N'Melton', N'kaylamelton', N'https://avatars2.githubusercontent.com/u/55811958?s=460&u=f98b118db66afc75cac3117a1ae925c41b72700c&v=4', N'kayla2116@comcast.net', CAST(N'2020-10-20T18:35:27.957' AS DateTime), 0)
INSERT [dbo].[User] ([UserId], [FirstName], [LastName], [Username], [PhotoUrl], [Email], [DateCreated], [IsDeleted]) VALUES (2, N'Todd', N'Spainhour', N'toddspainhour', N'https://avatars3.githubusercontent.com/u/59629794?s=460&u=85423987236143990c959f8f7df0fc71fc57fe60&v=4', N'toddspainhour@gmail.com', CAST(N'2020-10-20T18:40:31.963' AS DateTime), 0)
INSERT [dbo].[User] ([UserId], [FirstName], [LastName], [Username], [PhotoUrl], [Email], [DateCreated], [IsDeleted]) VALUES (3, N'Joey', N'Petrone', N'joeypetrone', N'https://avatars1.githubusercontent.com/u/59629666?s=460&u=d8252a2a3c66f81f6736fb4260dd8ef66d7052f9&v=4', N'joey.petrone@gmail.com', CAST(N'2020-10-20T18:41:22.197' AS DateTime), 0)
INSERT [dbo].[User] ([UserId], [FirstName], [LastName], [Username], [PhotoUrl], [Email], [DateCreated], [IsDeleted]) VALUES (4, N'Michele', N'Rawlins', N'michelerawlins', N'https://avatars3.githubusercontent.com/u/51183779?s=460&u=6aaacae34a134939ec5d157a3af2505b1c3e8e71&v=4', N'shellbop@att.net', CAST(N'2020-10-20T18:43:40.520' AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[User] OFF
SET IDENTITY_INSERT [dbo].[UserCourse] ON 

INSERT [dbo].[UserCourse] ([UserCourseId], [CourseId], [UserId], [isComplete], [IsDeleted]) VALUES (1, 4, 2, 0, 0)
INSERT [dbo].[UserCourse] ([UserCourseId], [CourseId], [UserId], [isComplete], [IsDeleted]) VALUES (2, 3, 3, 1, 0)
INSERT [dbo].[UserCourse] ([UserCourseId], [CourseId], [UserId], [isComplete], [IsDeleted]) VALUES (3, 2, 4, 0, 0)
SET IDENTITY_INSERT [dbo].[UserCourse] OFF
ALTER TABLE [dbo].[Course] ADD  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[CourseType] ADD  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[Lesson] ADD  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[PaymentType] ADD  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[User] ADD  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[UserCourse] ADD  DEFAULT ((0)) FOR [IsDeleted]
GO
ALTER TABLE [dbo].[Course]  WITH CHECK ADD  CONSTRAINT [FK_Course_CourseType] FOREIGN KEY([CourseTypeId])
REFERENCES [dbo].[CourseType] ([CourseTypeId])
GO
ALTER TABLE [dbo].[Course] CHECK CONSTRAINT [FK_Course_CourseType]
GO
ALTER TABLE [dbo].[Invoice]  WITH CHECK ADD  CONSTRAINT [FK_Invoice_PaymentType] FOREIGN KEY([PaymentTypeId])
REFERENCES [dbo].[PaymentType] ([PaymentTypeId])
GO
ALTER TABLE [dbo].[Invoice] CHECK CONSTRAINT [FK_Invoice_PaymentType]
GO
ALTER TABLE [dbo].[Invoice]  WITH CHECK ADD  CONSTRAINT [FK_Invoice_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[Invoice] CHECK CONSTRAINT [FK_Invoice_User]
GO
ALTER TABLE [dbo].[InvoiceLineItem]  WITH CHECK ADD  CONSTRAINT [FK_InvoiceLineItem_Course] FOREIGN KEY([CourseId])
REFERENCES [dbo].[Course] ([CourseId])
GO
ALTER TABLE [dbo].[InvoiceLineItem] CHECK CONSTRAINT [FK_InvoiceLineItem_Course]
GO
ALTER TABLE [dbo].[InvoiceLineItem]  WITH CHECK ADD  CONSTRAINT [FK_InvoiceLineItem_Invoice] FOREIGN KEY([InvoiceId])
REFERENCES [dbo].[Invoice] ([InvoiceId])
GO
ALTER TABLE [dbo].[InvoiceLineItem] CHECK CONSTRAINT [FK_InvoiceLineItem_Invoice]
GO
ALTER TABLE [dbo].[Lesson]  WITH CHECK ADD  CONSTRAINT [FK_Lesson_Course] FOREIGN KEY([CourseId])
REFERENCES [dbo].[Course] ([CourseId])
GO
ALTER TABLE [dbo].[Lesson] CHECK CONSTRAINT [FK_Lesson_Course]
GO
ALTER TABLE [dbo].[PaymentType]  WITH CHECK ADD  CONSTRAINT [FK_PaymentType_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[PaymentType] CHECK CONSTRAINT [FK_PaymentType_User]
GO
ALTER TABLE [dbo].[UserCourse]  WITH CHECK ADD  CONSTRAINT [FK_UserCourse_Course] FOREIGN KEY([CourseId])
REFERENCES [dbo].[Course] ([CourseId])
GO
ALTER TABLE [dbo].[UserCourse] CHECK CONSTRAINT [FK_UserCourse_Course]
GO
ALTER TABLE [dbo].[UserCourse]  WITH CHECK ADD  CONSTRAINT [FK_UserCourse_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[User] ([UserId])
GO
ALTER TABLE [dbo].[UserCourse] CHECK CONSTRAINT [FK_UserCourse_User]
GO
USE [master]
GO
ALTER DATABASE [TLC] SET  READ_WRITE 
GO
