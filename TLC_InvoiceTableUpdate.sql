USE [TLC]
GO
/****** Object:  Table [dbo].[Invoice]    Script Date: 11/17/2020 7:55:06 PM ******/
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
ALTER TABLE [dbo].[Invoice] ADD  CONSTRAINT [DF_Invoice_Subtotal]  DEFAULT ((0)) FOR [Subtotal]
GO
ALTER TABLE [dbo].[Invoice] ADD  CONSTRAINT [DF_Invoice_Taxes]  DEFAULT ((0)) FOR [Taxes]
GO
