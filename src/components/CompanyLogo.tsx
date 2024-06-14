interface ICompanyLogo {
    src: string;
}

export function CompanyLogo({ src }: ICompanyLogo) {
    return (
        <div className="p-4 flex justify-center items-center h-[60px] bg-[#F8F8F8] rounded-[10px]">
            <img src={src} />
        </div>
    );
}