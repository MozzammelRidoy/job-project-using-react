// import React from 'react';

const CategoryList = () => {
    return (
        <div className="text-black">
            <h2 className='text-5xl font-bold text-center'>Job Category List</h2>
            <p className="text-center text-sm text-slate-600 mt-3">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-4 gap-5 my-10" >
                <div className="border rounded-md p-8 bg-purple-50">
                    <div><img className="image-full" src="https://i.postimg.cc/cJqGpNnM/accounts.png" alt="" /></div>
                    <div className="mt-4"><h2 className="font-bold">Account & Finance</h2><p className="text-sm text-slate-400">300+ Jobs Available</p></div>
                </div>
                <div className="border rounded-md p-8  bg-purple-50"> <div><img className="image-full"      src="https://i.postimg.cc/VL3h6Wkz/creative.png" alt="" /></div>
                    <div className="mt-4"><h2 className="font-bold">Creative Design</h2><p className="text-sm text-slate-400">100+ Jobs Available</p></div></div>
                <div className="border rounded-md p-8  bg-purple-50"> <div><img className="image-full" src="https://i.postimg.cc/7YMBH8dn/marketing.png" alt="" /></div>
                    <div className="mt-4"><h2 className="font-bold">Marketing & Sales</h2><p className="text-sm text-slate-400">150+ Jobs Available</p></div></div>
                <div className="border rounded-md p-8  bg-purple-50"> <div><img className="image-full" src="https://i.postimg.cc/NMpVjh5n/chip.png" alt="" /></div>
                    <div className="mt-4"><h2 className="font-bold">Engineering Job</h2><p className="text-sm text-slate-400">224+ Jobs Available</p></div></div>
            </div>
        </div>
    );
};

export default CategoryList;