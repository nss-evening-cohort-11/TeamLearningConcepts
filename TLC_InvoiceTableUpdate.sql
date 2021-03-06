USE [TLC]
GO
/****** Object:  Table [dbo].[Invoice]    Script Date: 11/17/2020 7:58:45 PM ******/
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
	[Subtotal] [numeric](10, 2) NOT NULL,
	[Taxes] [numeric](10, 2) NOT NULL,
 CONSTRAINT [PK_Invoice] PRIMARY KEY CLUSTERED 
(
	[InvoiceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Invoice] ON 

INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted], [Subtotal], [Taxes]) VALUES (1, 1, CAST(N'2020-10-20T18:51:03.540' AS DateTime), CAST(0.00 AS Numeric(10, 2)), 6, 1, CAST(0.00 AS Numeric(10, 2)), CAST(0.00 AS Numeric(10, 2)))
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted], [Subtotal], [Taxes]) VALUES (2, 2, CAST(N'2020-10-20T18:51:58.503' AS DateTime), CAST(0.00 AS Numeric(10, 2)), 4, 0, CAST(0.00 AS Numeric(10, 2)), CAST(0.00 AS Numeric(10, 2)))
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted], [Subtotal], [Taxes]) VALUES (4, 4, CAST(N'2020-10-20T18:53:04.700' AS DateTime), CAST(0.00 AS Numeric(10, 2)), 2, 0, CAST(0.00 AS Numeric(10, 2)), CAST(0.00 AS Numeric(10, 2)))
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted], [Subtotal], [Taxes]) VALUES (13, 3, CAST(N'2020-11-17T18:21:40.293' AS DateTime), CAST(5000.00 AS Numeric(10, 2)), 1, 1, CAST(600.00 AS Numeric(10, 2)), CAST(42.00 AS Numeric(10, 2)))
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted], [Subtotal], [Taxes]) VALUES (14, 3, CAST(N'2020-11-17T18:26:07.330' AS DateTime), CAST(588.50 AS Numeric(10, 2)), 1, 1, CAST(550.00 AS Numeric(10, 2)), CAST(38.50 AS Numeric(10, 2)))
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted], [Subtotal], [Taxes]) VALUES (15, 3, CAST(N'2020-11-17T18:33:23.353' AS DateTime), CAST(1284.00 AS Numeric(10, 2)), 1, 1, CAST(1200.00 AS Numeric(10, 2)), CAST(84.00 AS Numeric(10, 2)))
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted], [Subtotal], [Taxes]) VALUES (16, 3, CAST(N'2020-11-17T18:45:04.550' AS DateTime), CAST(2471.70 AS Numeric(10, 2)), 1, 1, CAST(2310.00 AS Numeric(10, 2)), CAST(161.70 AS Numeric(10, 2)))
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted], [Subtotal], [Taxes]) VALUES (17, 1, CAST(N'2020-11-17T19:10:26.610' AS DateTime), CAST(1926.00 AS Numeric(10, 2)), 3, 1, CAST(1800.00 AS Numeric(10, 2)), CAST(126.00 AS Numeric(10, 2)))
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted], [Subtotal], [Taxes]) VALUES (18, 1, CAST(N'2020-11-17T19:20:14.727' AS DateTime), CAST(749.00 AS Numeric(10, 2)), 3, 1, CAST(700.00 AS Numeric(10, 2)), CAST(49.00 AS Numeric(10, 2)))
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted], [Subtotal], [Taxes]) VALUES (19, 1, CAST(N'2020-11-17T19:21:54.563' AS DateTime), CAST(492.20 AS Numeric(10, 2)), 6, 1, CAST(460.00 AS Numeric(10, 2)), CAST(32.20 AS Numeric(10, 2)))
INSERT [dbo].[Invoice] ([InvoiceId], [UserId], [InvoiceDate], [InvoiceTotal], [PaymentTypeId], [isCompleted], [Subtotal], [Taxes]) VALUES (20, 1, CAST(N'2020-11-17T19:38:00.820' AS DateTime), CAST(1027.20 AS Numeric(10, 2)), 3, 1, CAST(960.00 AS Numeric(10, 2)), CAST(67.20 AS Numeric(10, 2)))
SET IDENTITY_INSERT [dbo].[Invoice] OFF
ALTER TABLE [dbo].[Invoice] ADD  CONSTRAINT [DF_Invoice_Subtotal]  DEFAULT ((0)) FOR [Subtotal]
GO
ALTER TABLE [dbo].[Invoice] ADD  CONSTRAINT [DF_Invoice_Taxes]  DEFAULT ((0)) FOR [Taxes]
GO
