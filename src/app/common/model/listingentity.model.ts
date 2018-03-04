export class ListingProductModel {
    public ID: number;
    public Name: string;
    public Description?: string;
    public ProductPrice: number;
    public SellingPrice: number;
    public SizeCount: number;
    public ColorCount: number;
    public OffersCount: number;
    public TypeCount: number;
    public Discount: number;
    public DiscountedAmount: number;
    public IsCombo: boolean;
    public ComboType: string;
    public IsBrandable: boolean;
    public IsNew: boolean ;
    public CurrentStock: number;
    public Status: boolean;
    public HighlightInfo: string;
    public ParentCategoryID: number;
    public ParentCategory: string;
    public ProductReferenceKey: string;
    public ColorSizes: any[];
    constructor() {
        this.ID = 124;
        this.Name = 'Prashant';
        this.Description = 'fsdfds';
    }
}
