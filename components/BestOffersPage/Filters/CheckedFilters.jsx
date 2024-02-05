import { Checkbox } from '@mui/material'
import React from 'react'

const CheckedFilters = ({title, filtersData, selectedCategories, setSelectedCategories}) => {
    

  const handleCategoryToggle = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const isCategorySelected = (category) => {
    return selectedCategories.includes(category);
  };
  return (
    <div>
        <div className="mb-[20px]">
            <p className="font-[700] pb-[12px] border-b">
                {title}
            </p>
        </div>

        <div className="space-y-[15px] mb-[20px]">
            {filtersData.map((item, index) => (
            <div key={index}>
                <div
                    className="flex items-center gap-[9px]"
                >
                    <div className="flex items-center gap-[4px] font-[500]">
                        <Checkbox 
                            size="small" 
                            checked={isCategorySelected(item.name)} 
                            onChange={() => handleCategoryToggle(item.name)} 
                        />
                        <p>{item.name}</p>
                        <p className="text-[#20A5D5]">{item.count}</p>
                    </div>
                </div>

                {
                    item.subCategories?.length > 0 && (
                        item.subCategories.map((subItem, subIndex) => (
                            <div key={subIndex} className="ms-[20px] flex items-center gap-[4px] font-[500]">
                                <Checkbox 
                                    size="small"
                                    checked={isCategorySelected(subItem.name) || isCategorySelected(item.name)} 
                                    onChange={() => handleCategoryToggle(subItem.name)} 
                                />
                                <p>{subItem.name}</p>
                                <p className="text-[#20A5D5]">{subItem.count}</p>
                            </div>
                        ))
                    )
                }

            </div>
            ))}
        </div>
    </div>
  )
}

export default CheckedFilters