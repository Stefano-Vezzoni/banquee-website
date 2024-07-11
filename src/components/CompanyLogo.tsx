interface ICompanyLogo {
    src: string;
    backgroundColor?: string;
}

export function CompanyLogo({ src, backgroundColor }: ICompanyLogo) {
    return (
        <div
            className={`flex h-[60px] items-center justify-center rounded-[10px] bg-[#F8F8F8] ${backgroundColor} p-4`}
        >
            <img src={src} />
        </div>
    );
}
