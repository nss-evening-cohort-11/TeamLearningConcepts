USE [TLC]
GO
/****** Object:  Table [dbo].[InvoiceLineItem]    Script Date: 11/17/2020 8:17:48 PM ******/
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
SET IDENTITY_INSERT [dbo].[InvoiceLineItem] ON 

INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (1, 6, 1, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (2, 4, 2, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (4, 2, 4, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (38, 12, 13, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (39, 11, 14, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (40, 6, 14, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (41, 2, 15, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (42, 13, 15, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (43, 12, 15, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (44, 2, 16, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (45, 4, 16, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (46, 3, 16, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (47, 23, 16, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (48, 13, 17, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (49, 2, 17, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (50, 6, 17, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (51, 6, 17, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (52, 5, 17, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (53, 6, 18, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (54, 6, 18, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (55, 6, 19, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (56, 10, 19, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (57, 6, 20, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (58, 5, 20, 1)
INSERT [dbo].[InvoiceLineItem] ([InvoiceLineItemId], [CourseId], [InvoiceId], [Quantity]) VALUES (59, 10, 20, 1)
SET IDENTITY_INSERT [dbo].[InvoiceLineItem] OFF
ALTER TABLE [dbo].[InvoiceLineItem]  WITH NOCHECK ADD  CONSTRAINT [FK_InvoiceLineItem_Course] FOREIGN KEY([CourseId])
REFERENCES [dbo].[Course] ([CourseId])
GO
ALTER TABLE [dbo].[InvoiceLineItem] CHECK CONSTRAINT [FK_InvoiceLineItem_Course]
GO
ALTER TABLE [dbo].[InvoiceLineItem]  WITH NOCHECK ADD  CONSTRAINT [FK_InvoiceLineItem_Invoice] FOREIGN KEY([InvoiceId])
REFERENCES [dbo].[Invoice] ([InvoiceId])
GO
ALTER TABLE [dbo].[InvoiceLineItem] CHECK CONSTRAINT [FK_InvoiceLineItem_Invoice]
GO
