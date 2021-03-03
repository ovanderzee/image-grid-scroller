import { shallowMount } from "@vue/test-utils";
import TenThousand from "@/components/TenThousand.vue";

const flickrGalleryResponse = { "photos": { "page": 1, "pages": 1, "perpage": 100, "total": 13,
    "photo": [
      { "id": "8432423659", "owner": "37107167@N07", "secret": "dd1b834ec5", "server": "8187", "farm": 9, "title": "Color", "ispublic": 1, "isfriend": 0, "isfamily": 0, "is_primary": 1, "has_comment": 0 },
      { "id": "8047948330", "owner": "70121902@N00", "secret": "b0e55d455f", "server": "8450", "farm": 9, "title": "Owens River and Sea Grass", "ispublic": 1, "isfriend": 0, "isfamily": 0, "is_primary": 0, "has_comment": 0 },
      { "id": "2209143676", "owner": "14478436@N02", "secret": "ae987333b5", "server": "2072", "farm": 3, "title": "2008\/01\/19~20 Xiao Liu Qiu,TAIWAN 小琉球", "ispublic": 1, "isfriend": 0, "isfamily": 0, "is_primary": 0, "has_comment": 0 },
      { "id": "399296912", "owner": "58329132@N00", "secret": "6adcc29651", "server": "161", "farm": 1, "title": "Riverbanks flamingo", "ispublic": 1, "isfriend": 0, "isfamily": 0, "is_primary": 0, "has_comment": 0 },
      { "id": "5812344633", "owner": "47690289@N02", "secret": "af53e53bf1", "server": "3277", "farm": 4, "title": "Blue Lizard", "ispublic": 1, "isfriend": 0, "isfamily": 0, "is_primary": 0, "has_comment": 0 },
      { "id": "4960822520", "owner": "48600090482@N01", "secret": "d30948b0d5", "server": "4090", "farm": 5, "title": "Tobacco Worm Portrait", "ispublic": 1, "isfriend": 0, "isfamily": 0, "is_primary": 0, "has_comment": 0 },
      { "id": "3460002981", "owner": "37357417@N07", "secret": "9121bb0695", "server": "3609", "farm": 4, "title": "pink desert", "ispublic": 1, "isfriend": 0, "isfamily": 0, "is_primary": 0, "has_comment": 0 },
      { "id": "3033898918", "owner": "44115070@N00", "secret": "33238aca22", "server": "3036", "farm": 4, "title": "Colorful Parrots Couple", "ispublic": 1, "isfriend": 0, "isfamily": 0, "is_primary": 0, "has_comment": 0 },
      { "id": "9437404307", "owner": "70140013@N07", "secret": "293b54b7d5", "server": "5494", "farm": 6, "title": "The Red-Eyed Leaf (Tree) Frog of Costa Rica [ShotHotspot.com]", "ispublic": 1, "isfriend": 0, "isfamily": 0, "is_primary": 0, "has_comment": 0 },
      { "id": "8948867145", "owner": "91805169@N04", "secret": "34930c7865", "server": "2880", "farm": 3, "title": "Showdown: Day vs Night!", "ispublic": 1, "isfriend": 0, "isfamily": 0, "is_primary": 0, "has_comment": 0 },
      { "id": "13892714966", "owner": "36587311@N08", "secret": "ae06a2ee97", "server": "7460", "farm": 8, "title": "mountain", "ispublic": 1, "isfriend": 0, "isfamily": 0, "is_primary": 0, "has_comment": 0 },
      { "id": "9422871791", "owner": "52846362@N04", "secret": "db45e0b7ed", "server": "3754", "farm": 4, "title": "No one is free, even birds are chained to the sky", "ispublic": 1, "isfriend": 0, "isfamily": 0, "is_primary": 0, "has_comment": 0 },
      { "id": "14412870627", "owner": "85737574@N02", "secret": "5a469dda2a", "server": "3896", "farm": 4, "title": "Neighbours", "ispublic": 1, "isfriend": 0, "isfamily": 0, "is_primary": 0, "has_comment": 0 }
    ]
  },
  "stat": "ok"
}

describe("TenThousand.vue", () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(TenThousand, {});
  })

  it("starts in an initial state", () => {
    expect(wrapper.componentVM.count).toBe(0);
  });

  it("processes data", () => {
    wrapper.componentVM.showPhotos(flickrGalleryResponse)
    expect(wrapper.componentVM.count).not.toBe(0);
    expect(wrapper.componentVM.photos.length).toBe(10000);
  });
});
