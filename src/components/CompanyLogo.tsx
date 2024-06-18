interface ICompanyLogo {
    src: string;
}

export function CompanyLogo({ src }: ICompanyLogo) {
    return (
        <div className="flex h-[60px] items-center justify-center rounded-[10px] bg-[#F8F8F8] p-4">
            <img src={src} />
        </div>
    );
}
