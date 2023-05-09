export interface BadgeCount {
  readonly bronze?: number;
  readonly gold?: number;
  readonly silver?: number;
}

export interface ShallowUser {
  readonly accept_rate?: number;
  readonly account_id?: number;
  readonly badge_counts?: BadgeCount;
  readonly display_name?: string;
  readonly link?: string;
  readonly profile_image?: string;
  readonly reputation?: number;
  readonly user_id?: number;
  readonly user_type?:
    | "unregistered"
    | "registered"
    | "moderator"
    | "team_admin"
    | "does_not_exist";
}

export interface CollectiveExternalLink {
  readonly link?: string;
  readonly type?:
    | "website"
    | "twitter"
    | "github"
    | "facebook"
    | "instagram"
    | "support"
    | "linkedin";
}

export interface Collective {
  readonly description?: string;
  readonly external_links?: CollectiveExternalLink[];
  readonly link?: string;
  readonly name?: string;
  readonly slug?: string;
  readonly tags?: string[];
}

export interface CollectiveRecommendation {
  readonly collective?: Collective;
  readonly creation_date?: number;
}

export interface Answer {
  readonly accepted?: boolean;
  readonly answer_id?: number;
  readonly awarded_bounty_amount?: number;
  readonly awarded_bounty_users?: ShallowUser[];
  readonly body?: string;
  readonly body_markdown?: string;
  readonly can_comment?: boolean;
  readonly can_edit?: boolean;
  readonly can_flag?: boolean;
  readonly can_suggest_edit?: boolean;
  readonly collectives?: Collective[];
  readonly comment_count?: number;
  readonly comments?: Comment[];
  readonly community_owned_date?: number;
  readonly content_license?: string;
  readonly creation_date?: number;
  readonly down_vote_count?: number;
  readonly downvoted?: boolean;
  readonly is_accepted?: boolean;
  readonly last_activity_date?: number;
  readonly last_edit_date?: number;
  readonly last_editor?: ShallowUser;
  readonly link?: string;
  readonly locked_date?: number;
  readonly owner?: ShallowUser;
  readonly posted_by_collectives?: Collective[];
  readonly question_id?: number;
  readonly recommendations?: CollectiveRecommendation[];
  readonly score?: number;
  readonly share_link?: string;
  readonly tags?: string[];
  readonly title?: string;
  readonly up_vote_count?: number;
  readonly upvoted?: boolean;
}

export interface OriginalQuestion {
  readonly accepted_answer_id?: number;
  readonly answer_count?: number;
  readonly question_id?: number;
  readonly title?: string;
}

export interface ClosedDetails {
  readonly by_users?: ShallowUser[];
  readonly description?: string;
  readonly on_hold?: boolean;
  readonly original_questions?: OriginalQuestion[];
  readonly reason?: string;
}

export interface RelatedSite {
  readonly api_site_parameter?: string;
  readonly name?: string;
  readonly relation?: "parent" | "meta" | "chat";
  readonly site_url?: string;
}

export interface Styling {
  readonly link_color?: string;
  readonly tag_background_color?: string;
  readonly tag_foreground_color?: string;
}

export interface Site {
  readonly aliases?: string[];
  readonly api_site_parameter?: string;
  readonly audience?: string;
  readonly closed_beta_date?: number;
  readonly favicon_url?: string;
  readonly high_resolution_icon_url?: string;
  readonly icon_url?: string;
  readonly launch_date?: number;
  readonly logo_url?: string;
  readonly markdown_extensions?: (
    | "MathJax"
    | "Prettify"
    | "Balsamiq"
    | "jTab"
  )[];
  readonly name?: string;
  readonly open_beta_date?: number;
  readonly related_sites: RelatedSite[];
  readonly site_state?: "normal" | "closed_beta" | "open_beta" | "linked_meta";
  readonly site_type?: "main_site" | "meta_site";
  readonly site_url?: string;
  readonly styling: Styling;
  readonly twitter_account?: string;
}

export interface MigrationInfo {
  readonly on_date?: number;
  readonly other_site?: Site;
  readonly question_id?: number;
}

export interface Notice {
  readonly body?: string;
  readonly creation_date?: number;
  readonly owner_user_id?: number;
}

export interface Question {
  readonly accepted_answer_id?: number;
  readonly answer_count?: number;
  readonly answers?: Answer[];
  readonly body?: string;
  readonly body_markdown?: string;
  readonly bounty_closes_date?: number;
  readonly bounty_user?: ShallowUser;
  readonly can_answer?: boolean;
  readonly can_close?: boolean;
  readonly can_comment?: boolean;
  readonly can_edit?: boolean;
  readonly can_flag?: boolean;
  readonly can_suggest_edit?: boolean;
  readonly close_vote_count?: number;
  readonly closed_date?: number;
  readonly closed_details?: ClosedDetails;
  readonly closed_reason?: string;
  readonly collectives?: Collective[];
  readonly comment_count?: number;
  readonly comments?: Comment[];
  readonly community_owned_date?: number;
  readonly content_license?: string;
  readonly creation_date?: number;
  readonly delete_vote_count?: number;
  readonly down_vote_count?: number;
  readonly downvoted?: boolean;
  readonly favorite_count?: number;
  readonly favorited?: boolean;
  readonly is_answered?: boolean;
  readonly last_activity_date?: number;
  readonly last_edit_date?: number;
  readonly last_editor?: ShallowUser;
  readonly link?: string;
  readonly locked_date?: number;
  readonly migrated_from?: MigrationInfo;
  readonly migrated_to?: MigrationInfo;
  readonly notice?: Notice;
  readonly owner?: ShallowUser;
  readonly posted_by_collectives?: Collective[];
  readonly protected_date?: number;
  readonly question_id?: number;
  readonly reopen_vote_count?: number;
  readonly score?: number;
  readonly share_link?: string;
  readonly tags?: string[];
  readonly title?: string;
  readonly up_vote_count?: number;
  readonly upvoted?: boolean;
  readonly view_count?: number;
}
